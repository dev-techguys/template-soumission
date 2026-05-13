"use client"

import { create } from "zustand"
import { pricing, calendar } from "./proposal-data"

interface SelectionState {
  selectedOptions: string[]
  toggleOption: (optionId: string) => void
  setOptions: (optionIds: string[]) => void
  clearOptions: () => void
  
  // Computed values
  getTotalHoursMin: () => number
  getTotalHoursMax: () => number
  getTotalPriceMin: () => number
  getTotalPriceMax: () => number
  getEstimatedWeeks: () => { min: number; max: number }
  getEstimatedDelivery: () => string
}

// Calculate MVP base hours
const getMvpHours = () => {
  const devHoursMin = pricing.mvp.modules.reduce((sum, m) => sum + m.hoursMin, 0)
  const devHoursMax = pricing.mvp.modules.reduce((sum, m) => sum + m.hoursMax, 0)
  const contingencyMin = Math.round(devHoursMin * (pricing.mvp.contingencyPercent / 100))
  const contingencyMax = Math.round(devHoursMax * (pricing.mvp.contingencyPercent / 100))
  return {
    min: devHoursMin + contingencyMin,
    max: devHoursMax + contingencyMax,
  }
}

export const useSelectionStore = create<SelectionState>((set, get) => ({
  selectedOptions: [],

  toggleOption: (optionId) =>
    set((state) => ({
      selectedOptions: state.selectedOptions.includes(optionId)
        ? state.selectedOptions.filter((id) => id !== optionId)
        : [...state.selectedOptions, optionId],
    })),

  setOptions: (optionIds) => set({ selectedOptions: optionIds }),

  clearOptions: () => set({ selectedOptions: [] }),

  getTotalHoursMin: () => {
    const state = get()
    const mvpHours = getMvpHours()
    const optionsHours = pricing.options
      .filter((opt) => state.selectedOptions.includes(opt.id))
      .reduce((sum, opt) => sum + opt.hoursMin, 0)
    return mvpHours.min + optionsHours
  },

  getTotalHoursMax: () => {
    const state = get()
    const mvpHours = getMvpHours()
    const optionsHours = pricing.options
      .filter((opt) => state.selectedOptions.includes(opt.id))
      .reduce((sum, opt) => sum + opt.hoursMax, 0)
    return mvpHours.max + optionsHours
  },

  getTotalPriceMin: () => {
    return get().getTotalHoursMin() * pricing.hourlyRate
  },

  getTotalPriceMax: () => {
    return get().getTotalHoursMax() * pricing.hourlyRate
  },

  getEstimatedWeeks: () => {
    const state = get()
    const additionalWeeks = pricing.options
      .filter((opt) => state.selectedOptions.includes(opt.id))
      .reduce((sum, opt) => sum + (opt.weeksToAdd || 0), 0)
    
    return {
      min: calendar.baseDurationWeeks,
      max: calendar.baseDurationWeeks + additionalWeeks,
    }
  },

  getEstimatedDelivery: () => {
    const state = get()
    const weeks = state.getEstimatedWeeks()
    
    // June 2026 start
    const startDate = new Date(2026, 5, 1) // June 1, 2026
    const endDateMin = new Date(startDate)
    endDateMin.setDate(endDateMin.getDate() + weeks.min * 7)
    const endDateMax = new Date(startDate)
    endDateMax.setDate(endDateMax.getDate() + weeks.max * 7)

    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    
    if (weeks.min === weeks.max) {
      return `${months[endDateMin.getMonth()]} 2026`
    }
    
    return `${months[endDateMin.getMonth()]} - ${months[endDateMax.getMonth()]} 2026`
  },
}))
