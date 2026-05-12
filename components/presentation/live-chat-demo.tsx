"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, ExternalLink, Sparkles, MessageSquare, X, Loader2 } from "lucide-react"

const QUICK_PROMPTS = [
  { label: "FTL/LTL Freight", prompt: "I need to ship general freight within Canada" },
  { label: "Reefer Transport", prompt: "I need to ship frozen food to Chicago" },
  { label: "Cross-border", prompt: "I need shipping from Montreal to Detroit" },
  { label: "Urgent Delivery", prompt: "I need urgent delivery today or tomorrow" },
  { label: "I'm a driver", prompt: "Are you hiring drivers or owner-operators?" },
  { label: "Get a quote", prompt: "How much would it cost to ship from Toronto to Vancouver?" },
]

const SERVICE_URLS = [
  { path: "/get-your-quote-today", label: "Get Quote", color: "#ff7000" },
  { path: "/services/ftl-transport", label: "FTL", color: "#3b82f6" },
  { path: "/services/ltl-shipping", label: "LTL", color: "#8b5cf6" },
  { path: "/services/refrigerated-transport", label: "Reefer", color: "#06b6d4" },
  { path: "/services/heavy-haul-transport", label: "Heavy Haul", color: "#f59e0b" },
  { path: "/services/expedited-freight", label: "Expedited", color: "#ef4444" },
  { path: "/services/cross-border-transport", label: "Cross-border", color: "#10b981" },
  { path: "/services/logistics-3pl", label: "3PL", color: "#ec4899" },
  { path: "/careers", label: "Careers", color: "#64748b" },
]

export function LiveChatDemo() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [simulatedUrl, setSimulatedUrl] = useState("safextransport.ca")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  
  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } = useChat({
    api: "/api/chat",
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Detect URL in latest assistant message and update simulated URL bar
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

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
    setTimeout(() => {
      const form = document.getElementById("chat-form") as HTMLFormElement
      if (form) form.requestSubmit()
    }, 100)
  }

  // Extract URLs from message content
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
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-2xl relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#ff7000]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7000] to-[#f59e0b] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-sans font-semibold">Safex AI Agent — Live Demo</h3>
                <p className="text-white/50 text-xs">Powered by Groq + Llama 3.1</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-[#10b981] text-xs font-medium">Connected</span>
            </div>
          </div>
          
          {/* URL Reference Bar */}
          <div className="mb-4 p-3 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <ExternalLink className="w-3 h-3 text-white/40" />
              <span className="text-white/40 text-[10px] uppercase tracking-wider">Available Routes</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {SERVICE_URLS.map((url) => (
                <span
                  key={url.path}
                  className="px-2 py-1 rounded-md text-[10px] font-mono"
                  style={{ backgroundColor: url.color + "15", color: url.color, border: `1px solid ${url.color}30` }}
                >
                  {url.label}
                </span>
              ))}
            </div>
          </div>

          {/* Simulated Browser */}
          <div className={`bg-[#0a0f1a] rounded-xl border border-white/10 overflow-hidden transition-all duration-300 ${isExpanded ? "h-[420px]" : "h-72"}`}>
            {/* Browser Chrome */}
            <div className="bg-[#1e293b] px-3 py-2 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <div className="flex-1 flex items-center gap-2 bg-[#0f172a] rounded-lg px-3 py-1.5 ml-2">
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                <motion.span 
                  key={simulatedUrl}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-white/70 font-mono truncate"
                >
                  {simulatedUrl}
                </motion.span>
              </div>
            </div>
            
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#ff7000] to-[#f59e0b] px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-sans font-medium text-sm">Safex Assistant</span>
              </div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white/70 hover:text-white transition-colors"
              >
                {isExpanded ? <X className="w-4 h-4" /> : <span className="text-xs">Expand</span>}
              </button>
            </div>
            
            {/* Messages Area */}
            <div className="h-[calc(100%-88px)] overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#ff7000]/10 border border-[#ff7000]/20 flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-[#ff7000]" />
                  </div>
                  <p className="text-white/70 text-sm mb-1">Start a conversation</p>
                  <p className="text-white/40 text-xs">Ask about shipping, services, or careers</p>
                </div>
              )}
              
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.role === "user" ? "justify-end" : ""}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#ff7000] to-[#f59e0b] flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-bold">S</span>
                    </div>
                  )}
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    message.role === "user"
                      ? "bg-[#ff7000] text-white rounded-tr-sm"
                      : "bg-white/10 text-white/90 rounded-tl-sm"
                  }`}>
                    {message.role === "assistant" ? (
                      <span>
                        {parseMessageWithLinks(message.content).map((part, i) => (
                          part.type === "link" ? (
                            <button
                              key={i}
                              onClick={() => setSimulatedUrl("safextransport.ca" + part.url)}
                              className="inline-flex items-center gap-1 text-[#ff7000] hover:text-[#f59e0b] underline underline-offset-2 font-medium"
                            >
                              {part.content}
                              <ExternalLink className="w-3 h-3" />
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
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#ff7000] to-[#f59e0b] flex items-center justify-center shrink-0">
                    <Loader2 className="w-3 h-3 text-white animate-spin" />
                  </div>
                  <div className="px-3 py-2 bg-white/10 rounded-xl rounded-tl-sm">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Area */}
            <div className="p-3 border-t border-white/10">
              <form id="chat-form" onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ff7000]/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-xl bg-[#ff7000] hover:bg-[#e06300] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </form>
            </div>
          </div>
          
          {/* Quick Prompts */}
          <div className="mt-4">
            <p className="text-white/40 text-xs mb-2">Try these prompts:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_PROMPTS.map((qp) => (
                <button
                  key={qp.label}
                  onClick={() => handleQuickPrompt(qp.prompt)}
                  disabled={isLoading}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 hover:border-[#ff7000]/50 hover:text-white hover:bg-[#ff7000]/10 transition-all disabled:opacity-50"
                >
                  {qp.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
