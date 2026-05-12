"use client"

import { useState, useRef, useEffect, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Loader2, ArrowRight, Database, TrendingUp, Brain, Phone, Mail, BarChart3, Users, Zap } from "lucide-react"
import { GlowEffect, BrainAnimation, AnimatedCounter } from "./data-flow-animation"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function LiveChatDemo() {
  const [isDemoStarted, setIsDemoStarted] = useState(false)
  const [simulatedUrl, setSimulatedUrl] = useState("safextransport.ca")
  const [selectedPlan, setSelectedPlan] = useState<"essentiel" | "optimise">("essentiel")
  const [showDataExtraction, setShowDataExtraction] = useState(false)
  const [extractionPhase, setExtractionPhase] = useState<"idle" | "extracting" | "routing" | "complete">("idle")
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) throw new Error("Failed to fetch")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ""

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      }
      setMessages((prev) => [...prev, assistantMessage])

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split("\n")

          for (const line of lines) {
            if (line.startsWith("0:")) {
              try {
                const text = JSON.parse(line.slice(2))
                assistantContent += text
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantMessage.id ? { ...m, content: assistantContent } : m
                  )
                )
              } catch {
                // Skip parsing errors
              }
            }
          }
        }
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        },
      ])
    } finally {
      setIsLoading(false)
      // Trigger extraction animation for Plan Optimisé - stays at "complete" instead of resetting
      if (selectedPlan === "optimise") {
        setExtractionPhase("extracting")
        setTimeout(() => setExtractionPhase("routing"), 1500)
        setTimeout(() => setExtractionPhase("complete"), 3000)
        // Keep at "complete" state - don't reset to idle
      }
    }
  }

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]
    if (lastMessage?.role === "assistant") {
      const linkMatch = lastMessage.content.match(/\[([^\]]+)\]\(([^)]+)\)/)
      if (linkMatch) {
        const url = linkMatch[2]
        setTimeout(() => {
          setSimulatedUrl("safextransport.ca" + url)
        }, 500)
      }
    }
  }, [messages])

  const parseMessageWithLinks = (content: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts: Array<{ type: "text" | "link"; content: string; url?: string }> = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: "text", content: content.slice(lastIndex, match.index) })
      }
      parts.push({ type: "link", content: match[1], url: match[2] })
      lastIndex = match.index + match[0].length
    }

    if (lastIndex < content.length) {
      parts.push({ type: "text", content: content.slice(lastIndex) })
    }

    return parts.length > 0 ? parts : [{ type: "text" as const, content }]
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6 overflow-hidden"
    >
      {/* Plan Toggle with visual indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setSelectedPlan("essentiel"); setExtractionPhase("idle") }}
            className={`px-5 py-2.5 rounded-xl text-sm font-sans font-medium transition-all ${
              selectedPlan === "essentiel"
                ? "bg-[#ff7000] text-white shadow-lg shadow-[#ff7000]/25"
                : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
            }`}
          >
            Plan Essentiel
          </button>
          <button
            onClick={() => setSelectedPlan("optimise")}
            className={`px-5 py-2.5 rounded-xl text-sm font-sans font-medium transition-all ${
              selectedPlan === "optimise"
                ? "bg-[#10B981] text-white shadow-lg shadow-[#10B981]/25"
                : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
            }`}
          >
            Plan Optimisé
          </button>
        </div>
        
        {selectedPlan === "optimise" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#10B981]/10 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs text-[#10B981] font-sans font-medium">Data-Driven Mode</span>
          </motion.div>
        )}
      </div>

      {/* Split-screen layout for Plan Optimisé */}
      <div className={`grid gap-4 transition-all duration-500 ${
        selectedPlan === "optimise" ? "grid-cols-1 lg:grid-cols-5" : "grid-cols-1"
      }`}>
        
        {/* Main Chat Widget */}
        <div className={`${selectedPlan === "optimise" ? "lg:col-span-3" : ""} relative`}>
          <div className={`bg-[#0f172a] rounded-xl border overflow-hidden transition-all duration-300 ${
            selectedPlan === "optimise" 
              ? "border-[#10B981]/30" 
              : "border-white/10"
          }`}>
            {selectedPlan === "optimise" && <GlowEffect color="#10B981" intensity="low" />}
            
            {/* Browser Chrome */}
            <div className="bg-[#1e293b] px-4 py-2.5 flex items-center gap-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <div className="flex-1 flex items-center gap-2 bg-[#0f172a] rounded-lg px-3 py-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                <motion.span 
                  key={simulatedUrl}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-white/70 font-mono"
                >
                  {simulatedUrl}
                </motion.span>
              </div>
            </div>
            
            {/* Chat Content */}
            <div className="p-6 relative">
              {/* Data flow particles for Plan Optimisé */}
              {selectedPlan === "optimise" && extractionPhase !== "idle" && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-[#10B981]"
                      initial={{ 
                        left: "50%", 
                        top: "50%", 
                        scale: 0, 
                        opacity: 0 
                      }}
                      animate={{ 
                        left: "100%", 
                        top: `${20 + i * 10}%`, 
                        scale: [0, 1, 0.5], 
                        opacity: [0, 1, 0] 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: i * 0.1,
                        repeat: extractionPhase !== "idle" ? Infinity : 0,
                        repeatDelay: 1
                      }}
                    />
                  ))}
                </div>
              )}

              {!isDemoStarted ? (
                <div className="flex flex-col items-center py-4">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#ff7000] flex items-center justify-center shrink-0">
                      <span className="text-white text-sm font-bold">S</span>
                    </div>
                    <div className="bg-white/10 rounded-2xl rounded-tl-md px-4 py-2.5">
                      <p className="text-white/90 text-sm">Hi! What are you looking to ship today?</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsDemoStarted(true)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium text-sm transition-all ${
                      selectedPlan === "optimise" 
                        ? "bg-[#10B981] hover:bg-[#059669] shadow-lg shadow-[#10B981]/25" 
                        : "bg-[#ff7000] hover:bg-[#e06300]"
                    }`}
                  >
                    Lancer la démo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <p className="text-white/40 text-xs mt-4">
                    {selectedPlan === "optimise" 
                      ? "Observez l'extraction de données en temps réel" 
                      : "Le visiteur tape en langage naturel"}
                  </p>
                </div>
              ) : (
                <div>
                  <div ref={messagesContainerRef} className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                      >
                        {message.role === "assistant" && (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            selectedPlan === "optimise" ? "bg-[#10B981]" : "bg-[#ff7000]"
                          }`}>
                            <span className="text-white text-sm font-bold">S</span>
                          </div>
                        )}
                        <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                          message.role === "user"
                            ? `${selectedPlan === "optimise" ? "bg-[#10B981]" : "bg-[#ff7000]"} text-white rounded-tr-md`
                            : "bg-white/10 text-white/90 rounded-tl-md"
                        }`}>
                          {message.role === "assistant" ? (
                            <span>
                              {parseMessageWithLinks(message.content).map((part, i) => (
                                part.type === "link" ? (
                                  <button
                                    key={i}
                                    onClick={() => setSimulatedUrl("safextransport.ca" + part.url)}
                                    className={`${selectedPlan === "optimise" ? "text-[#10B981]" : "text-[#ff7000]"} hover:opacity-80 underline underline-offset-2 font-medium`}
                                  >
                                    {part.content}
                                  </button>
                                ) : (
                                  <span key={i}>{part.content}</span>
                                )
                              ))}
                            </span>
                          ) : (
                            message.content
                          )}
                        </div>
                      </motion.div>
                    ))}
                    
                    {isLoading && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          selectedPlan === "optimise" ? "bg-[#10B981]" : "bg-[#ff7000]"
                        }`}>
                          <Loader2 className="w-4 h-4 text-white animate-spin" />
                        </div>
                        <div className="px-4 py-2.5 bg-white/10 rounded-2xl rounded-tl-md">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {messages.length === 0 && !isLoading && (
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          selectedPlan === "optimise" ? "bg-[#10B981]" : "bg-[#ff7000]"
                        }`}>
                          <span className="text-white text-sm font-bold">S</span>
                        </div>
                        <div className="bg-white/10 rounded-2xl rounded-tl-md px-4 py-2.5">
                          <p className="text-white/90 text-sm">Hi! What are you looking to ship today?</p>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                  
                  <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Tapez votre message..."
                      className={`flex-1 bg-white/5 border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors ${
                        selectedPlan === "optimise" 
                          ? "border-[#10B981]/30 focus:border-[#10B981]/50" 
                          : "border-white/10 focus:border-[#ff7000]/50"
                      }`}
                      autoFocus
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className={`w-10 h-10 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors ${
                        selectedPlan === "optimise" 
                          ? "bg-[#10B981] hover:bg-[#059669]" 
                          : "bg-[#ff7000] hover:bg-[#e06300]"
                      }`}
                    >
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Data Intelligence Panel - Plan Optimisé only */}
        <AnimatePresence>
          {selectedPlan === "optimise" && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-[#0f172a] to-[#0f172a]/80 rounded-xl border border-[#10B981]/30 overflow-hidden h-full relative">
                <GlowEffect color="#10B981" intensity="medium" />
                
                {/* Header */}
                <div className="px-4 py-3 border-b border-[#10B981]/20 flex items-center gap-3">
                  <BrainAnimation size={32} active={extractionPhase !== "idle"} />
                  <div>
                    <h4 className="text-white font-sans font-medium text-sm">Intelligence Dashboard</h4>
                    <p className="text-white/40 text-[10px]">Données extraites en temps réel</p>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  {/* Extraction Status - Always shows when complete or animating */}
                  <AnimatePresence mode="wait">
                    {extractionPhase !== "idle" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-3 rounded-lg border ${
                          extractionPhase === "complete" 
                            ? "bg-[#10B981]/20 border-[#10B981]/50" 
                            : "bg-[#10B981]/10 border-[#10B981]/30"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {extractionPhase === "complete" ? (
                            <div className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          ) : (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Database className="w-4 h-4 text-[#10B981]" />
                            </motion.div>
                          )}
                          <span className={`text-xs font-medium ${extractionPhase === "complete" ? "text-[#10B981] font-semibold" : "text-[#10B981]"}`}>
                            {extractionPhase === "extracting" && "Extraction des données..."}
                            {extractionPhase === "routing" && "Analyse du profil..."}
                            {extractionPhase === "complete" && "Synchronisé avec Dashboard"}
                          </span>
                        </div>
                        <div className="h-1.5 bg-[#10B981]/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-[#10B981] rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ 
                              width: extractionPhase === "extracting" ? "33%" 
                             : extractionPhase === "routing" ? "66%" 
                                : "100%" 
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Data Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: Users, label: "Lead Score", value: 87, suffix: "%", color: "#10B981" },
                      { icon: TrendingUp, label: "Intent", value: 92, suffix: "%", color: "#10B981" },
                      { icon: BarChart3, label: "Qualification", value: 4, suffix: "/5", color: "#f59e0b" },
                      { icon: Zap, label: "Urgence", value: 3, suffix: "/5", color: "#ef4444" },
                    ].map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                        className="p-3 rounded-lg bg-white/5 border border-white/10"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <metric.icon className="w-3 h-3 text-white/40" />
                          <span className="text-[10px] text-white/40 uppercase tracking-wider">{metric.label}</span>
                        </div>
                        <div className="flex items-end gap-1">
                          <span className="text-xl font-serif" style={{ color: metric.color }}>
                            {extractionPhase !== "idle" ? (
                              extractionPhase === "complete" ? (
                                metric.value
                              ) : (
                                <AnimatedCounter value={metric.value} duration={1.5} />
                              )
                            ) : (
                              "--"
                            )}
                          </span>
                          <span className="text-xs text-white/30 mb-0.5">{metric.suffix}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Routing Options */}
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">Routing multi-canal</span>
                    <div className="flex items-center gap-3 mt-2">
                      {[
                        { icon: ArrowRight, label: "Page", active: true },
                        { icon: Phone, label: "Tel", active: extractionPhase === "complete" },
                        { icon: Mail, label: "Email", active: extractionPhase === "complete" },
                      ].map((route, i) => (
                        <motion.div
                          key={route.label}
                          initial={{ opacity: 0.3 }}
                          animate={{ opacity: route.active ? 1 : 0.3 }}
                          className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs ${
                            route.active 
                              ? "bg-[#10B981]/20 text-[#10B981]" 
                              : "bg-white/5 text-white/30"
                          }`}
                        >
                          <route.icon className="w-3 h-3" />
                          <span>{route.label}</span>
                          {route.active && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-1.5 h-1.5 rounded-full bg-[#10B981]"
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* AI Insight */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: extractionPhase === "complete" ? 1 : 0.3 }}
                    className="p-3 rounded-lg bg-gradient-to-r from-[#10B981]/10 to-transparent border border-[#10B981]/20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-3 h-3 text-[#10B981]" />
                      <span className="text-[10px] text-[#10B981] uppercase tracking-wider font-medium">AI Insight</span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {extractionPhase === "complete" 
                        ? "Lead B2B qualifié pour cross-border. Recommandation: router vers équipe sales avec contexte pré-rempli."
                        : "En attente de données..."}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
