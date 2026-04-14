"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { client, pricing } from "@/lib/proposal-data"
import { PenLine, Check, Star, Trash2, ArrowRight, FileText, Shield, ChevronLeft, ChevronRight, Download, User, Mail, CheckCircle2, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function SignatureModal() {
  const [open, setOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [selectedRate, setSelectedRate] = useState<string | null>(null)
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1)
  const [activeTab, setActiveTab] = useState<"offre" | "msa">("offre")
  const [hasReadOffre, setHasReadOffre] = useState(false)
  const [hasReadMsa, setHasReadMsa] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasSignature, setHasSignature] = useState(false)
  const [clientName, setClientName] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showOffreNextButton, setShowOffreNextButton] = useState(false)
  const [showMsaNextButton, setShowMsaNextButton] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const lastPosRef = useRef({ x: 0, y: 0 })
  const offreScrollRef = useRef<HTMLDivElement>(null)
  const msaScrollRef = useRef<HTMLDivElement>(null)

  const getSelectedPlanDetails = () => {
    const plan = pricing.plans.find((p) => p.name === selectedPlan)
    const rate = plan?.rates.find((r) => r.label === selectedRate)
    const monthly = plan && rate ? plan.hoursNum * rate.priceValue : 0
    const saving = rate?.saving || 0
    return { plan, rate, monthly, saving }
  }

  const handleOffreScroll = () => {
    if (offreScrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = offreScrollRef.current
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setHasReadOffre(true)
        setShowOffreNextButton(true)
      }
    }
  }

  const handleMsaScroll = () => {
    if (msaScrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = msaScrollRef.current
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setHasReadMsa(true)
        setShowMsaNextButton(true)
      }
    }
  }

  const getCanvasCoordinates = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.Touch, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    const clientX = 'clientX' in e ? e.clientX : e.clientX
    const clientY = 'clientY' in e ? e.clientY : e.clientY

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    }
  }, [])

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    if (!canvas) return
    lastPosRef.current = getCanvasCoordinates(e, canvas)
  }

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const coords = getCanvasCoordinates(e, canvas)

    ctx.beginPath()
    ctx.strokeStyle = "#387B84"
    ctx.lineWidth = 3
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y)
    ctx.lineTo(coords.x, coords.y)
    ctx.stroke()

    lastPosRef.current = coords
    setHasSignature(true)
  }

  const handleCanvasMouseUp = () => {
    setIsDrawing(false)
  }

  const handleCanvasTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    setIsDrawing(true)
    const canvas = canvasRef.current
    if (!canvas) return
    const touch = e.touches[0]
    lastPosRef.current = getCanvasCoordinates(touch, canvas)
  }

  const handleCanvasTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    if (!isDrawing) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const touch = e.touches[0]
    const coords = getCanvasCoordinates(touch, canvas)

    ctx.beginPath()
    ctx.strokeStyle = "#387B84"
    ctx.lineWidth = 3
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y)
    ctx.lineTo(coords.x, coords.y)
    ctx.stroke()

    lastPosRef.current = coords
    setHasSignature(true)
  }

  const handleCanvasTouchEnd = () => {
    setIsDrawing(false)
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasSignature(false)
  }

  const resetModal = () => {
    setSelectedPlan(null)
    setSelectedRate(null)
    setStep(1)
    setActiveTab("offre")
    setHasReadOffre(false)
    setHasReadMsa(false)
    setShowOffreNextButton(false)
    setShowMsaNextButton(false)
    setAcceptTerms(false)
    setHasSignature(false)
    setClientName("")
    setClientEmail("")
    setIsSubmitting(false)
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setTimeout(resetModal, 300)
  }

  const handleSubmitSignature = async () => {
    if (!hasSignature || !clientName || !clientEmail) return

    setIsSubmitting(true)

    const signatureData = canvasRef.current?.toDataURL("image/png")

    let body: Record<string, unknown>

    if (pricing.type === "fixed-price") {
      body = {
        clientName,
        clientEmail,
        notificationEmail: client.notificationEmail,
        projectName: pricing.fixedPrice.projectName,
        totalPrice: pricing.fixedPrice.totalPrice,
        timeline: pricing.fixedPrice.timeline,
        signatureData,
      }
    } else {
      const { plan, rate, monthly, saving } = getSelectedPlanDetails()
      body = {
        clientName,
        clientEmail,
        notificationEmail: client.notificationEmail,
        planName: plan?.name,
        planHours: plan?.hours,
        engagementType: rate?.label,
        pricePerHour: rate?.price,
        monthlyTotal: monthly,
        monthlySaving: saving,
        signatureData,
      }
    }

    try {
      await fetch("/api/send-signature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.log("[v0] Email sending failed, but continuing to confirmation:", error)
    } finally {
      setIsSubmitting(false)
      setStep(6)
    }
  }

  useEffect(() => {
    if (step === 5 && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [step])

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const isStep1Valid = pricing.type === "fixed-price" || (!!selectedPlan && !!selectedRate)

  return (
    <>
      {/* Sticky Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="flex items-center gap-3 bg-[#387B84] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#2d6269] transition-all duration-300 hover:scale-105">
          <PenLine className="w-5 h-5" />
          <span className="font-medium text-sm">Signer le contrat</span>
        </div>
      </button>

      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-4xl bg-white max-h-[90vh] overflow-hidden flex flex-col">
          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 pt-2 pb-4">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div
                key={s}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  s === step ? "bg-[#387B84]" : s < step ? "bg-[#387B84]/50" : "bg-[#e5e7eb]"
                }`}
              />
            ))}
          </div>

          {/* Step 1: Sélection du plan (hourly-bank) ou Résumé projet (fixed-price) */}
          {step === 1 && (
            <>
              {pricing.type === "fixed-price" ? (
                <>
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-[#2d3748]">
                      Résumé de votre projet
                    </DialogTitle>
                    <DialogDescription className="text-[#6b7280] font-sans">
                      Vérifiez les détails du projet avant de procéder à la signature.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex-1 overflow-y-auto py-4">
                    <div className="p-6 rounded-xl border border-[#387B84]/20 bg-[#387B84]/5">
                      <h3 className="font-serif text-xl text-[#2d3748] mb-4">{pricing.fixedPrice.projectName}</h3>
                      {pricing.fixedPrice.description && (
                        <p className="text-sm text-[#6b7280] font-sans leading-relaxed mb-6">
                          {pricing.fixedPrice.description}
                        </p>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] tracking-[0.15em] uppercase text-[#6b7280] font-sans">Investissement total</span>
                          <span className="font-serif text-3xl text-[#387B84]">{pricing.fixedPrice.totalPrice}</span>
                          <span className="text-xs text-[#6b7280] font-sans">taxes en sus</span>
                        </div>
                        {pricing.fixedPrice.estimatedHours && (
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] tracking-[0.15em] uppercase text-[#6b7280] font-sans">Effort estimé</span>
                            <span className="text-sm font-medium text-[#2d3748] font-sans">{pricing.fixedPrice.estimatedHours}</span>
                          </div>
                        )}
                        {pricing.fixedPrice.timeline && (
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] tracking-[0.15em] uppercase text-[#6b7280] font-sans">Délai de livraison</span>
                            <span className="text-sm font-medium text-[#2d3748] font-sans">{pricing.fixedPrice.timeline}</span>
                          </div>
                        )}
                      </div>
                      {pricing.fixedPrice.deliverables.length > 0 && (
                        <div className="border-t border-[#387B84]/20 pt-4">
                          <p className="text-xs text-[#6b7280] font-sans mb-3 uppercase tracking-wider">Livrables inclus</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {pricing.fixedPrice.deliverables.map((item) => (
                              <div key={item} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-[#387B84] shrink-0 mt-0.5" />
                                <span className="text-xs text-[#6b7280] font-sans">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <DialogFooter className="mt-4 border-t border-[#e5e7eb] pt-4">
                    <Button variant="outline" onClick={handleClose} className="font-sans">
                      Annuler
                    </Button>
                    <Button
                      onClick={() => setStep(2)}
                      className="bg-[#387B84] hover:bg-[#2d6269] text-white font-sans"
                    >
                      Continuer
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogFooter>
                </>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-[#2d3748]">
                      {"Sélectionnez votre banque d'heures"}
                    </DialogTitle>
                    <DialogDescription className="text-[#6b7280] font-sans">
                      {"Choisissez le forfait et l'engagement qui vous conviennent le mieux."}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex-1 overflow-y-auto py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {pricing.plans.map((plan) => (
                        <div
                          key={plan.name}
                          className={`relative p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedPlan === plan.name
                              ? "border-[#387B84] bg-[#387B84]/5 ring-2 ring-[#387B84]"
                              : "border-[#e5e7eb] bg-white hover:border-[#387B84]/50"
                          } ${plan.featured ? "md:-mt-2 md:mb-2" : ""}`}
                          onClick={() => {
                            setSelectedPlan(plan.name)
                            setSelectedRate(null)
                          }}
                        >
                          {plan.featured && (
                            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-0.5 bg-[#387B84] rounded-full">
                              <Star className="w-2.5 h-2.5 text-white" />
                              <span className="text-[9px] tracking-[0.1em] uppercase font-sans font-medium text-white">
                                Recommandé
                              </span>
                            </div>
                          )}

                          <div className="flex flex-col items-center gap-1 mb-3 pt-1">
                            <span className="text-[10px] tracking-[0.15em] uppercase text-[#6b7280] font-sans">
                              Banque
                            </span>
                            <h3 className="font-serif text-lg text-[#2d3748]">{plan.name}</h3>
                            <span className="font-serif text-2xl text-[#387B84]">{plan.hours}</span>
                            <span className="text-[10px] text-[#6b7280] font-sans">par mois</span>
                          </div>

                          {selectedPlan === plan.name && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-[#387B84] rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {selectedPlan && (
                      <div className="border-t border-[#e5e7eb] pt-4 mt-4">
                        <p className="text-sm text-[#6b7280] font-sans mb-3">{"Type d'engagement :"}</p>
                        <div className="flex flex-col gap-2">
                          {pricing.plans.find((p) => p.name === selectedPlan)?.rates.map((rate) => (
                            <div
                              key={rate.label}
                              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                                selectedRate === rate.label
                                  ? "border-[#F6A878] bg-[#F6A878]/10"
                                  : "border-[#e5e7eb] hover:border-[#F6A878]/50"
                              }`}
                              onClick={() => setSelectedRate(rate.label)}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                    selectedRate === rate.label ? "border-[#F6A878]" : "border-[#d1d5db]"
                                  }`}
                                >
                                  {selectedRate === rate.label && (
                                    <div className="w-2 h-2 rounded-full bg-[#F6A878]" />
                                  )}
                                </div>
                                <span className="text-sm text-[#2d3748] font-sans">{rate.label}</span>
                                {rate.saving > 0 && (
                                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">
                                    Économie: {rate.saving}$/mois
                                  </span>
                                )}
                              </div>
                              <span className="text-sm font-medium text-[#387B84] font-sans">
                                {rate.price}
                              </span>
                            </div>
                          ))}
                        </div>

                        {selectedRate && (
                          <div className="mt-4 p-4 bg-[#387B84]/5 rounded-lg border border-[#387B84]/20">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-[#6b7280]">Total mensuel estimé</span>
                              <span className="text-xl font-bold text-[#387B84]">
                                {getSelectedPlanDetails().monthly.toLocaleString()}$/mois
                              </span>
                            </div>
                            {getSelectedPlanDetails().saving > 0 && (
                              <div className="flex items-center justify-between pt-2 border-t border-[#387B84]/20">
                                <span className="text-sm text-green-600">Économie mensuelle</span>
                                <span className="text-sm font-semibold text-green-600">
                                  {getSelectedPlanDetails().saving}$/mois
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <DialogFooter className="mt-4 border-t border-[#e5e7eb] pt-4">
                    <Button variant="outline" onClick={handleClose} className="font-sans">
                      Annuler
                    </Button>
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!isStep1Valid}
                      className="bg-[#387B84] hover:bg-[#2d6269] text-white font-sans"
                    >
                      Continuer
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogFooter>
                </>
              )}
            </>
          )}

          {/* Step 2: Informations du client */}
          {step === 2 && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-[#2d3748]">
                  Vos informations
                </DialogTitle>
                <DialogDescription className="text-[#6b7280] font-sans">
                  Veuillez entrer vos coordonnées pour la confirmation du contrat.
                </DialogDescription>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto py-6">
                <div className="max-w-md mx-auto space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-[#2d3748] mb-2">
                      <User className="w-4 h-4 text-[#387B84]" />
                      Nom complet
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#387B84] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-[#2d3748] mb-2">
                      <Mail className="w-4 h-4 text-[#387B84]" />
                      Adresse courriel
                    </label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="jean.dupont@entreprise.com"
                      className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#387B84] focus:border-transparent transition-all"
                    />
                    {clientEmail && !isValidEmail(clientEmail) && (
                      <p className="text-sm text-red-500 mt-1">Veuillez entrer une adresse courriel valide</p>
                    )}
                  </div>

                  <div className="bg-[#f7f7f7] rounded-lg p-4 mt-6">
                    <p className="text-sm text-[#6b7280]">
                      Un courriel de confirmation vous sera envoyé à cette adresse une fois le contrat signé.
                    </p>
                  </div>
                </div>
              </div>

              <DialogFooter className="mt-4 border-t border-[#e5e7eb] pt-4">
                <Button variant="outline" onClick={() => setStep(1)} className="font-sans">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!clientName.trim() || !isValidEmail(clientEmail)}
                  className="bg-[#387B84] hover:bg-[#2d6269] text-white font-sans"
                >
                  Continuer
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </DialogFooter>
            </>
          )}

          {/* Step 3: Offre de services */}
          {step === 3 && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-[#2d3748]">
                  Offre de services
                </DialogTitle>
                <DialogDescription className="text-[#6b7280] font-sans">
                  Veuillez lire attentivement les conditions de notre offre.
                </DialogDescription>
              </DialogHeader>

              <div className="flex-1 overflow-hidden flex flex-col min-h-0">
                {/* Tabs */}
                <div className="flex border border-[#e5e7eb] rounded-lg p-1 mb-4 bg-[#f7f7f7]">
                  <button
                    onClick={() => setActiveTab("offre")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 font-medium transition-all rounded-md ${
                      activeTab === "offre"
                        ? "bg-white text-[#387B84] shadow-sm"
                        : "text-[#6b7280] hover:text-[#2d3748]"
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    Offre de services
                    {hasReadOffre && <Check className="w-4 h-4 text-green-500" />}
                  </button>
                  <button
                    onClick={() => setActiveTab("msa")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 font-medium transition-all rounded-md ${
                      activeTab === "msa"
                        ? "bg-white text-[#387B84] shadow-sm"
                        : "text-[#6b7280] hover:text-[#2d3748]"
                    }`}
                  >
                    <Shield className="w-4 h-4" />
                    Convention MSA
                    {hasReadMsa && <Check className="w-4 h-4 text-green-500" />}
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === "offre" && (
                  <div className="flex-1 flex flex-col min-h-0 relative">
                    <div
                      ref={offreScrollRef}
                      onScroll={handleOffreScroll}
                      className="flex-1 overflow-y-auto bg-[#f7f7f7] rounded-xl p-6 text-sm text-[#2d3748] space-y-6"
                    >
                      <div className="text-center border-b border-[#e5e7eb] pb-6">
                        <h2 className="text-2xl font-bold text-[#387B84]">TechGuys</h2>
                        <p className="text-[#6b7280] mt-2">Accompagnement stratégique</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#387B84] mb-3">Notre approche : Un partenariat de croissance</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                          TechGuys agit comme partenaire stratégique pour votre croissance.
                          Au-delà d{"'"}une agence traditionnelle, nous prenons en considération les priorités de votre organisation et
                          vous accompagnons tout au long de votre parcours numérique vers le succès entrepreneurial.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#2d3748] mb-2">Notre approche repose sur plusieurs piliers intégrés :</h4>
                        <ul className="space-y-2 text-[#6b7280]">
                          <li><strong>1. Stratégie entrepreneuriale</strong> — Une répartition stratégique des ressources pour assurer l{"'"}atteinte de vos objectifs d{"'"}affaires.</li>
                          <li><strong>2. Technologie & automatisation</strong> — Accélérez l{"'"}exécution de vos projets technologiques grâce aux bons outils et à l{"'"}IA.</li>
                          <li><strong>3. Marketing & performance</strong> — Tester, mesurer et optimiser en continu à partir de données concrètes.</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        {pricing.type === "fixed-price" ? (
                          <>
                            <h3 className="text-lg font-semibold text-[#387B84] mb-3">Modèle de tarification : Projet à prix fixe</h3>
                            <p className="text-[#6b7280] mb-4">
                              Ce format offre une visibilité complète sur les coûts et les livrables attendus.
                              L{"'"}investissement est déterminé à l{"'"}avance pour une exécution prévisible et sans surprise.
                            </p>
                            <div className="space-y-2 text-[#6b7280]">
                              <div className="flex justify-between">
                                <span>Projet :</span>
                                <span className="font-semibold text-[#2d3748]">{pricing.fixedPrice.projectName}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Investissement total :</span>
                                <span className="font-bold text-[#387B84] text-lg">{pricing.fixedPrice.totalPrice}</span>
                              </div>
                              {pricing.fixedPrice.timeline && (
                                <div className="flex justify-between">
                                  <span>Délai de livraison :</span>
                                  <span className="font-semibold text-[#2d3748]">{pricing.fixedPrice.timeline}</span>
                                </div>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <h3 className="text-lg font-semibold text-[#387B84] mb-3">Modèle de tarification : Banque d{"'"}heures mensuelle flexible</h3>
                            <p className="text-[#6b7280] mb-4">
                              Plutôt qu{"'"}un mandat figé en livrables, ce format permet d{"'"}investir le temps selon les priorités du moment,
                              tout en offrant une approche adaptée aux contextes de croissance exigeant agilité, rapidité et ajustement continu.
                            </p>
                            <div className="space-y-2 text-[#6b7280]">
                              <div className="flex justify-between">
                                <span>Forfait sélectionné :</span>
                                <span className="font-semibold text-[#2d3748]">{getSelectedPlanDetails().plan?.name} ({getSelectedPlanDetails().plan?.hours}/mois)</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Type d{"'"}engagement :</span>
                                <span className="font-semibold text-[#2d3748]">{getSelectedPlanDetails().rate?.label}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Tarif horaire :</span>
                                <span className="font-semibold text-[#2d3748]">{getSelectedPlanDetails().rate?.price}</span>
                              </div>
                              <div className="flex justify-between pt-2 border-t border-[#387B84]/20">
                                <span>Total mensuel :</span>
                                <span className="font-bold text-[#387B84] text-lg">{getSelectedPlanDetails().monthly.toLocaleString()}$/mois</span>
                              </div>
                              {getSelectedPlanDetails().saving > 0 && (
                                <div className="flex justify-between text-green-600">
                                  <span>Économie mensuelle :</span>
                                  <span className="font-semibold">{getSelectedPlanDetails().saving}$/mois</span>
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>

                      <div className="text-center text-[#6b7280] pt-4 border-t border-[#e5e7eb]">
                        <p className="text-sm">Faites défiler jusqu{"'"}en bas pour confirmer la lecture</p>
                      </div>
                    </div>

                    {showOffreNextButton && (
                      <div className="mt-4 flex justify-center">
                        <Button
                          onClick={() => setActiveTab("msa")}
                          className="bg-[#F6A878] hover:bg-[#e5956a] text-white font-sans px-6"
                        >
                          Passer à la Convention MSA
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "msa" && (
                  <div className="flex-1 flex flex-col min-h-0">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm text-[#6b7280]">Convention de services maître (Master Service Agreement)</p>
                      <a
                        href="/documents/MSA-Techguys.pdf"
                        download="MSA-Techguys.pdf"
                        className="flex items-center gap-2 px-3 py-1.5 bg-[#387B84] text-white text-sm rounded-lg hover:bg-[#2d6269] transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Télécharger le PDF
                      </a>
                    </div>
                    <div
                      ref={msaScrollRef}
                      onScroll={handleMsaScroll}
                      className="flex-1 overflow-y-auto bg-[#f7f7f7] rounded-xl p-6 text-sm text-[#2d3748] space-y-6"
                    >
                      <div className="text-center border-b border-[#e5e7eb] pb-6">
                        <h2 className="text-2xl font-bold text-[#387B84]">Convention de services maître</h2>
                        <p className="text-[#6b7280] mt-2">Master Service Agreement (MSA)</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#387B84] mb-3">1. Définitions et interprétation</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                          La présente Convention de services maître (« CSM ») établit les modalités générales régissant
                          la relation entre TechGuys Consulting inc. (« Fournisseur ») et le Client pour la prestation
                          de services professionnels en technologie, marketing numérique et conseil stratégique.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#387B84] mb-3">2. Portée des services</h3>
                        <p className="text-[#6b7280] leading-relaxed mb-2">
                          Le Fournisseur s{"'"}engage à fournir les services selon les modalités définies dans chaque
                          bon de commande ou énoncé de travail annexé à la présente convention.
                        </p>
                        <ul className="list-disc list-inside text-[#6b7280] space-y-1">
                          <li>Développement web et applications</li>
                          <li>Conseil stratégique et accompagnement</li>
                          <li>Marketing numérique et automatisation</li>
                          <li>Intégration de solutions IA</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#387B84] mb-3">3. Modalités de paiement</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                          Les factures sont émises mensuellement et payables dans les 30 jours suivant leur réception.
                          Le Client s{"'"}engage à effectuer les paiements selon les termes convenus dans le bon de commande applicable.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#387B84] mb-3">4. Confidentialité</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                          Chaque partie s{"'"}engage à maintenir la confidentialité de toutes les informations propriétaires
                          ou confidentielles reçues de l{"'"}autre partie dans le cadre de cette convention.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#387B84] mb-3">5. Propriété intellectuelle</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                          Sauf indication contraire dans un énoncé de travail, tous les livrables créés spécifiquement
                          pour le Client deviennent la propriété du Client une fois le paiement complet effectué.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#387B84] mb-3">6. Limitation de responsabilité</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                          La responsabilité totale du Fournisseur en vertu de cette convention ne dépassera pas
                          le montant total payé par le Client au cours des 12 mois précédant la réclamation.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#387B84] mb-3">7. Résiliation</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                          Chaque partie peut résilier cette convention moyennant un préavis écrit de 30 jours.
                          En cas de résiliation, le Client s{"'"}engage à payer tous les services rendus jusqu{"'"}à la date de résiliation.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#387B84] mb-3">8. Loi applicable</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                          Cette convention est régie par les lois de la province de Québec, Canada.
                          Tout litige sera soumis à la juridiction exclusive des tribunaux de Montréal, Québec.
                        </p>
                      </div>

                      <div className="text-center text-[#6b7280] pt-4 border-t border-[#e5e7eb]">
                        <p className="text-sm">Faites défiler jusqu{"'"}en bas pour confirmer la lecture</p>
                      </div>
                    </div>

                    {showMsaNextButton && (
                      <div className="mt-4 flex justify-center">
                        <Button
                          onClick={() => setStep(4)}
                          disabled={!hasReadOffre || !hasReadMsa}
                          className="bg-[#387B84] hover:bg-[#2d6269] text-white font-sans px-6"
                        >
                          Continuer vers l{"'"}acceptation
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <DialogFooter className="mt-4 border-t border-[#e5e7eb] pt-4">
                <Button variant="outline" onClick={() => setStep(2)} className="font-sans">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
                <Button
                  onClick={() => setStep(4)}
                  disabled={!hasReadOffre || !hasReadMsa}
                  className="bg-[#387B84] hover:bg-[#2d6269] text-white font-sans"
                >
                  Continuer
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </DialogFooter>
            </>
          )}

          {/* Step 4: Acceptation des conditions */}
          {step === 4 && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-[#2d3748]">
                  Acceptation des conditions
                </DialogTitle>
                <DialogDescription className="text-[#6b7280] font-sans">
                  Veuillez confirmer que vous acceptez les termes du contrat.
                </DialogDescription>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto py-6">
                <div className="max-w-lg mx-auto">
                  <div className="bg-[#f7f7f7] rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-[#2d3748] mb-4">Récapitulatif du contrat</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between py-2 border-b border-[#e5e7eb]">
                        <span className="text-[#6b7280]">Client :</span>
                        <span className="font-medium text-[#2d3748]">{clientName}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-[#e5e7eb]">
                        <span className="text-[#6b7280]">Courriel :</span>
                        <span className="font-medium text-[#2d3748]">{clientEmail}</span>
                      </div>
                      {pricing.type === "fixed-price" ? (
                        <>
                          <div className="flex justify-between py-2 border-b border-[#e5e7eb]">
                            <span className="text-[#6b7280]">Projet :</span>
                            <span className="font-medium text-[#2d3748]">{pricing.fixedPrice.projectName}</span>
                          </div>
                          {pricing.fixedPrice.timeline && (
                            <div className="flex justify-between py-2 border-b border-[#e5e7eb]">
                              <span className="text-[#6b7280]">Délai :</span>
                              <span className="font-medium text-[#2d3748]">{pricing.fixedPrice.timeline}</span>
                            </div>
                          )}
                          <div className="flex justify-between py-2">
                            <span className="text-[#6b7280]">Investissement total :</span>
                            <span className="font-bold text-[#387B84] text-lg">{pricing.fixedPrice.totalPrice}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between py-2 border-b border-[#e5e7eb]">
                            <span className="text-[#6b7280]">Forfait :</span>
                            <span className="font-medium text-[#2d3748]">
                              {getSelectedPlanDetails().plan?.name} ({getSelectedPlanDetails().plan?.hours}/mois)
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-[#e5e7eb]">
                            <span className="text-[#6b7280]">Engagement :</span>
                            <span className="font-medium text-[#2d3748]">{getSelectedPlanDetails().rate?.label}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-[#e5e7eb]">
                            <span className="text-[#6b7280]">Tarif :</span>
                            <span className="font-medium text-[#2d3748]">{getSelectedPlanDetails().rate?.price}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-[#6b7280]">Total mensuel :</span>
                            <span className="font-bold text-[#387B84] text-lg">
                              {getSelectedPlanDetails().monthly.toLocaleString()}$/mois
                            </span>
                          </div>
                          {getSelectedPlanDetails().saving > 0 && (
                            <div className="flex justify-between py-2 bg-green-50 -mx-6 px-6 rounded-b-xl">
                              <span className="text-green-600">Économie mensuelle :</span>
                              <span className="font-semibold text-green-600">{getSelectedPlanDetails().saving}$/mois</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer p-4 rounded-lg border border-[#e5e7eb] hover:bg-[#f7f7f7] transition-colors">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-[#d1d5db] text-[#387B84] focus:ring-[#387B84]"
                    />
                    <span className="text-sm text-[#6b7280]">
                      J{"'"}ai lu et j{"'"}accepte l{"'"}offre de services ainsi que la Convention de services maître (MSA).
                      Je comprends que cette signature électronique a la même valeur légale qu{"'"}une signature manuscrite.
                    </span>
                  </label>
                </div>
              </div>

              <DialogFooter className="mt-4 border-t border-[#e5e7eb] pt-4">
                <Button variant="outline" onClick={() => setStep(3)} className="font-sans">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
                <Button
                  onClick={() => setStep(5)}
                  disabled={!acceptTerms}
                  className="bg-[#387B84] hover:bg-[#2d6269] text-white font-sans"
                >
                  Procéder à la signature
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </DialogFooter>
            </>
          )}

          {/* Step 5: Signature */}
          {step === 5 && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-[#2d3748]">
                  Signature électronique
                </DialogTitle>
                <DialogDescription className="text-[#6b7280] font-sans">
                  Dessinez votre signature dans la zone ci-dessous.
                </DialogDescription>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto py-6">
                <div className="max-w-lg mx-auto">
                  <div className="relative">
                    <canvas
                      ref={canvasRef}
                      width={500}
                      height={200}
                      onMouseDown={handleCanvasMouseDown}
                      onMouseMove={handleCanvasMouseMove}
                      onMouseUp={handleCanvasMouseUp}
                      onMouseLeave={handleCanvasMouseUp}
                      onTouchStart={handleCanvasTouchStart}
                      onTouchMove={handleCanvasTouchMove}
                      onTouchEnd={handleCanvasTouchEnd}
                      className="w-full border-2 border-dashed border-[#d1d5db] rounded-xl cursor-crosshair bg-white touch-none"
                      style={{ height: '200px' }}
                    />
                    {!hasSignature && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <p className="text-[#9ca3af] text-sm">Signez ici</p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearSignature}
                      className="text-[#6b7280] hover:text-[#2d3748]"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Effacer
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-[#f7f7f7] rounded-lg text-sm text-[#6b7280]">
                    <p>
                      En signant, vous confirmez avoir lu et accepté l{"'"}offre de services et la Convention de services maître.
                    </p>
                  </div>
                </div>
              </div>

              <DialogFooter className="mt-4 border-t border-[#e5e7eb] pt-4">
                <Button variant="outline" onClick={() => setStep(4)} className="font-sans">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
                <Button
                  onClick={handleSubmitSignature}
                  disabled={!hasSignature || isSubmitting}
                  className="bg-[#387B84] hover:bg-[#2d6269] text-white font-sans"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Traitement...
                    </>
                  ) : (
                    <>
                      Confirmer la signature
                      <Check className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </DialogFooter>
            </>
          )}

          {/* Step 6: Confirmation */}
          {step === 6 && (
            <>
              <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>

                <h2 className="font-serif text-3xl text-[#2d3748] mb-3">
                  Merci pour votre confiance!
                </h2>

                <p className="text-[#6b7280] max-w-md mb-8">
                  Votre contrat a été signé avec succès. Nous vous enverrons un courriel de confirmation
                  avec l{"'"}ensemble des informations à l{"'"}adresse suivante :
                </p>

                <div className="bg-[#387B84]/5 rounded-lg px-6 py-3 mb-8">
                  <p className="text-[#387B84] font-medium">{clientEmail}</p>
                </div>

                <div className="bg-[#f7f7f7] rounded-xl p-6 max-w-md w-full text-left">
                  <h3 className="font-semibold text-[#2d3748] mb-4 text-center">Récapitulatif</h3>
                  <div className="space-y-2 text-sm">
                    {pricing.type === "fixed-price" ? (
                      <>
                        <div className="flex justify-between">
                          <span className="text-[#6b7280]">Projet :</span>
                          <span className="font-medium text-[#2d3748]">{pricing.fixedPrice.projectName}</span>
                        </div>
                        {pricing.fixedPrice.timeline && (
                          <div className="flex justify-between">
                            <span className="text-[#6b7280]">Délai :</span>
                            <span className="font-medium text-[#2d3748]">{pricing.fixedPrice.timeline}</span>
                          </div>
                        )}
                        <div className="flex justify-between pt-2 border-t border-[#e5e7eb]">
                          <span className="text-[#6b7280]">Investissement total :</span>
                          <span className="font-bold text-[#387B84]">{pricing.fixedPrice.totalPrice}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between">
                          <span className="text-[#6b7280]">Forfait :</span>
                          <span className="font-medium text-[#2d3748]">
                            {getSelectedPlanDetails().plan?.name} ({getSelectedPlanDetails().plan?.hours}/mois)
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6b7280]">Engagement :</span>
                          <span className="font-medium text-[#2d3748]">{getSelectedPlanDetails().rate?.label}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-[#e5e7eb]">
                          <span className="text-[#6b7280]">Total mensuel :</span>
                          <span className="font-bold text-[#387B84]">
                            {getSelectedPlanDetails().monthly.toLocaleString()}$/mois
                          </span>
                        </div>
                        {getSelectedPlanDetails().saving > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span>Économie :</span>
                            <span className="font-semibold">{getSelectedPlanDetails().saving}$/mois</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              <DialogFooter className="mt-4 border-t border-[#e5e7eb] pt-4">
                <Button
                  onClick={handleClose}
                  className="bg-[#387B84] hover:bg-[#2d6269] text-white font-sans w-full"
                >
                  Fermer
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
