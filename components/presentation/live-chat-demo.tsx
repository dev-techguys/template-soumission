"use client"

import { useState, useRef, useEffect, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Send, Loader2, ArrowRight } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function LiveChatDemo() {
  const [isDemoStarted, setIsDemoStarted] = useState(false)
  const [simulatedUrl, setSimulatedUrl] = useState("safextransport.ca")
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
      <div className="bg-[#0f172a] rounded-xl border border-white/10 overflow-hidden">
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
        <div className="p-6">
          {!isDemoStarted ? (
            // Initial state - simple message and launch button
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
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff7000] hover:bg-[#e06300] rounded-lg text-white font-medium text-sm transition-colors"
              >
                Lancer la démo
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <p className="text-white/40 text-xs mt-4">
                Le visiteur tape en langage naturel au lieu de cliquer sur les chips
              </p>
            </div>
          ) : (
            // Active demo state
            <div>
              {/* Messages */}
              <div ref={messagesContainerRef} className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-[#ff7000] flex items-center justify-center shrink-0">
                        <span className="text-white text-sm font-bold">S</span>
                      </div>
                    )}
                    <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      message.role === "user"
                        ? "bg-[#ff7000] text-white rounded-tr-md"
                        : "bg-white/10 text-white/90 rounded-tl-md"
                    }`}>
                      {message.role === "assistant" ? (
                        <span>
                          {parseMessageWithLinks(message.content).map((part, i) => (
                            part.type === "link" ? (
                              <button
                                key={i}
                                onClick={() => setSimulatedUrl("safextransport.ca" + part.url)}
                                className="text-[#ff7000] hover:text-[#f59e0b] underline underline-offset-2 font-medium"
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
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#ff7000] flex items-center justify-center shrink-0">
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
                    <div className="w-8 h-8 rounded-full bg-[#ff7000] flex items-center justify-center shrink-0">
                      <span className="text-white text-sm font-bold">S</span>
                    </div>
                    <div className="bg-white/10 rounded-2xl rounded-tl-md px-4 py-2.5">
                      <p className="text-white/90 text-sm">Hi! What are you looking to ship today?</p>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ff7000]/50 transition-colors"
                  autoFocus
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
          )}
        </div>
      </div>
    </motion.div>
  )
}
