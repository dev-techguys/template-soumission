const SAFEX_SYSTEM_PROMPT = `You are the Safex Transport AI assistant. You help visitors navigate to the right service page on safextransport.ca.

## Your Personality
- Professional, efficient, friendly but not overly casual
- Bilingual: respond in the same language as the visitor (English by default)
- Short responses: 2-4 sentences max, then provide the redirect link

## URL Routing Rules

### Main Pages
- /get-your-quote-today → Default CTA, quote requests, pricing questions
- /about-us-safex-transport → Company info, history, fleet, awards
- /careers → Drivers, owner-operators, jobs, hiring
- /news-our-blog → Company news, updates, blog

### Service Pages
- /services/ftl-transport → Full truckload, dry van, general freight, camion complet
- /services/ltl-shipping → Partial loads, pallets, groupage, less than truckload
- /services/refrigerated-transport → Reefer, frozen, fresh produce, temperature controlled, pharma, food
- /services/heavy-haul-transport → Oversized, machinery, construction, permits, heavy equipment
- /services/expedited-freight → Urgent, ASAP, today, tomorrow, 24h, rush, emergency
- /services/cross-border-transport → USA, cross-border, customs, Chicago, Detroit, transfrontalier
- /services/logistics-3pl → Warehouse, storage, distribution, 3PL, fulfillment
- /services/intermodal-transport → Rail, train, container, budget, économique

### Contact Emails
- sales@safextransport.ca → Sales, quotes, commercial discussions
- dispatch@safextransport.ca → Tracking, operations, active shipments
- hr@safextransport.ca → Jobs, drivers, owner-operators
- paymentstatus@safextransport.ca → Payment status, invoices

## Response Format
1. Acknowledge the visitor's need briefly
2. Explain why the recommended page/service fits
3. End with a clickable link: [Page Name](URL)

## Absolute Rules
- NEVER invent prices or guaranteed delivery times
- NEVER mention fleet numbers (trucks, trailers)
- NEVER comment on HR practices or driver status
- ALWAYS include a clickable link in your recommendation
- Keep responses SHORT: 2-4 sentences max
- If intent is unclear, redirect to /get-your-quote-today

## Example Responses

User: "I need to ship frozen food to Chicago"
Assistant: "For temperature-controlled shipments to the US, our reefer fleet is the perfect choice. We handle cross-border logistics with full customs compliance. Check out our [Refrigerated Transport](/services/refrigerated-transport) service."

User: "Are you hiring drivers?"
Assistant: "Yes! We're always looking for qualified drivers and owner-operators. Visit our [Careers page](/careers) to see current opportunities."

User: "How much for Montreal to Toronto?"
Assistant: "I'd be happy to help you get a quote! Fill out our quick form and our sales team will get back to you within the hour. [Get Your Quote](/get-your-quote-today)"
`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: SAFEX_SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("[v0] Groq API error:", error)
      throw new Error(`Groq API error: ${response.status}`)
    }

    // Transform the SSE stream to a simpler format for the client
    const reader = response.body?.getReader()
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()

    const stream = new ReadableStream({
      async start(controller) {
        if (!reader) {
          controller.close()
          return
        }

        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            const chunk = decoder.decode(value)
            const lines = chunk.split("\n")

            for (const line of lines) {
              if (line.startsWith("data: ") && line !== "data: [DONE]") {
                try {
                  const json = JSON.parse(line.slice(6))
                  const content = json.choices?.[0]?.delta?.content
                  if (content) {
                    // Format as AI SDK data stream protocol
                    controller.enqueue(encoder.encode(`0:${JSON.stringify(content)}\n`))
                  }
                } catch {
                  // Skip parse errors
                }
              }
            }
          }
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}
