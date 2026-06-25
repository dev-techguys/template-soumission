"use client"

import { create } from "zustand"
import { pricing, calendar } from "./proposal-data"

interface SelectionState {
  selectedOptions: string[]
  toggleOption: (optionId: string) => void
  setOptions: (optionIds: string[]) => void
  clearOptions: () => void

  // Computed values (single estimates, contingence incluse)
  getBaseHours: () => number
  getContingencyHours: () => number
  getTotalHours: () => number
  getTotalPrice: () => number
  getEstimatedWeeks: () => number
  getEstimatedDelivery: () => string
}

const CONTINGENCY_RATE = pricing.mvp.contingencyPercent / 100

// Heures de base du MVP (sans contingence)
const getMvpBaseHours = () =>
  pricing.mvp.modules.reduce((sum, m) => sum + m.hours, 0)

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

  // Heures de base = MVP + options sélectionnées (avant contingence)
  getBaseHours: () => {
    const state = get()
    const optionsHours = pricing.options
      .filter((opt) => state.selectedOptions.includes(opt.id))
      .reduce((sum, opt) => sum + opt.hours, 0)
    return getMvpBaseHours() + optionsHours
  },

  // Réserve de contingence (15%) appliquée sur l'ensemble
  getContingencyHours: () => {
    return Math.round(get().getBaseHours() * CONTINGENCY_RATE)
  },

  // Total = base + contingence
  getTotalHours: () => {
    return get().getBaseHours() + get().getContingencyHours()
  },

  getTotalPrice: () => {
    return get().getTotalHours() * pricing.hourlyRate
  },

  // Durée unique : base + semaines ajoutées par les options
  getEstimatedWeeks: () => {
    const state = get()
    const additionalWeeks = pricing.options
      .filter((opt) => state.selectedOptions.includes(opt.id))
      .reduce((sum, opt) => sum + (opt.weeksToAdd || 0), 0)

    return calendar.baseDurationWeeks + additionalWeeks
  },

  getEstimatedDelivery: () => {
    const state = get()
    const weeks = state.getEstimatedWeeks()

    // Démarrage juin 2026
    const startDate = new Date(2026, 5, 1) // 1er juin 2026
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + weeks * 7)

    const months = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
    ]

    return `${months[endDate.getMonth()]} 2026`
  },
}))
