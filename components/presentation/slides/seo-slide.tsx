"use client"

import { SlideWrapper } from "../slide-wrapper"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Search, TrendingUp, ExternalLink } from "lucide-react"

// Données réelles de SEMrush - Distribution des positions organiques
const positionData = [
  { name: "1-3", value: 3, fill: "#387B84" },
  { name: "4-10", value: 5, fill: "#4a9ba5" },
  { name: "11-20", value: 8, fill: "#6b7280" },
  { name: "21-50", value: 48, fill: "#9ca3af" },
  { name: "51-100", value: 36, fill: "#d1d5db" },
]

// Top mots-clés organiques réels de SEMrush
const TOP_KEYWORDS = [
  {
    keyword: "inputkit",
    position: 1,
    volume: "40/mois",
    traffic: "36.36%",
    intent: "Navigationnelle",
  },
  {
    keyword: "bad branding",
    position: 4,
    volume: "170/mois",
    traffic: "12.50%",
    intent: "Informationnelle",
  },
  {
    keyword: "inputkit integrations",
    position: 1,
    volume: "40/mois",
    traffic: "10.22%",
    intent: "Transactionnelle",
  },
  {
    keyword: "customer satisfaction survey answers",
    position: "↑",
    volume: "140/mois",
    traffic: "9.09%",
    intent: "Informationnelle",
  },
  {
    keyword: "remercier un client pour sa confiance",
    position: 1,
    volume: "40/mois",
    traffic: "5.68%",
    intent: "Commerciale",
  },
]

// Distribution par intention
const INTENT_DATA = [
  { label: "Informationnelle", percent: "55,4%", keywords: 278, traffic: 54, color: "#387B84" },
  { label: "Commerciale", percent: "19,1%", keywords: 96, traffic: 5, color: "#F6A878" },
  { label: "Transactionnelle", percent: "13,7%", keywords: 69, traffic: 46, color: "#4a9ba5" },
  { label: "Navigationnelle", percent: "11,8%", keywords: 59, traffic: 34, color: "#6b7280" },
]

export function SeoSlide() {
  return (
    <SlideWrapper id="seo-analysis" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-10">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            06 / Analyse SEO
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-3xl leading-tight text-balance">
            Positionnement organique
          </h2>
          <div className="w-16 h-px bg-[#387B84]" />
          <p className="text-base text-[#6b7280] font-sans max-w-2xl leading-relaxed">
            Analyse révélant le potentiel d{"'"}amélioration. La migration vers Next.js permettra d{"'"}optimiser
            les Core Web Vitals et d{"'"}améliorer le positionnement organique.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Authority Score", value: "28", note: "Moyenne", color: "#F6A878" },
            { label: "Mots-clés organiques", value: "2,1K", note: "+1,1%", color: "#387B84" },
            { label: "Backlinks", value: "2,6K", note: "795 domaines", color: "#4a9ba5" },
            { label: "Trafic organique", value: "3K", note: "-3,9%", color: "#6b7280" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="p-5 rounded-xl border border-[#e5e7eb] bg-white shadow-sm"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans block mb-2">
                {metric.label}
              </span>
              <span className="font-serif text-3xl text-[#2d3748] block">{metric.value}</span>
              <span className="text-xs font-sans mt-1 block" style={{ color: metric.color }}>{metric.note}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Position Distribution Chart */}
          <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
            <h3 className="font-serif text-base text-[#2d3748] mb-6">Répartition des positions organiques (SERP Google)</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={positionData} barCategoryGap="15%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#6b7280", fontSize: 12, fontFamily: "sans-serif" }}
                    axisLine={{ stroke: "#e5e7eb" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#6b7280", fontSize: 12, fontFamily: "sans-serif" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      color: "#2d3748",
                      fontFamily: "sans-serif",
                      fontSize: 12,
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                    formatter={(value: number) => [`${value}%`, "Part des mots-clés"]}
                    cursor={{ fill: "#387B84", opacity: 0.08 }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {positionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-[#6b7280] font-sans mt-4">
              92,4% des résultats sont organiques • 0,4% AI Overviews • 7,1% autres fonctionnalités SERP
            </p>
          </div>

          {/* Right: Intent Distribution */}
          <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
            <h3 className="font-serif text-base text-[#2d3748] mb-6">Distribution par intention de recherche</h3>
            <div className="space-y-4">
              {INTENT_DATA.map((intent) => (
                <div key={intent.label} className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: intent.color }} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-[#2d3748] font-sans">{intent.label}</span>
                      <span className="text-sm font-medium text-[#2d3748] font-sans">{intent.percent}</span>
                    </div>
                    <div className="w-full bg-[#f1f5f9] rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all"
                        style={{ width: intent.percent, backgroundColor: intent.color }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-[#6b7280] font-sans">{intent.keywords} mots-cl��s</span>
                      <span className="text-[10px] text-[#6b7280] font-sans">{intent.traffic}% trafic</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-[#387B84]/5 border border-[#387B84]/20">
              <p className="text-sm text-[#387B84] font-sans">
                <strong>363 mots-clés organiques (US)</strong> avec une forte proportion informationnelle.
                Opportunité d{"'"}améliorer le contenu transactionnel.
              </p>
            </div>
          </div>
        </div>

        {/* Top Keywords Table */}
        <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#387B84]/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#387B84]" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#2d3748]">Top mots-clés organiques</h3>
              <p className="text-xs text-[#6b7280] font-sans">Marché US</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e7eb]">
                  <th className="text-left py-3 pr-4 text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans">Mot-clé</th>
                  <th className="text-center py-3 pr-4 text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans">Position</th>
                  <th className="text-left py-3 pr-4 text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans">Volume</th>
                  <th className="text-left py-3 pr-4 text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans">% Trafic</th>
                  <th className="text-left py-3 text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans">Intention</th>
                </tr>
              </thead>
              <tbody>
                {TOP_KEYWORDS.map((kw) => (
                  <tr key={kw.keyword} className="border-b border-[#e5e7eb]/50 last:border-0">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <Search className="w-3 h-3 text-[#387B84]" />
                        <span className="text-sm text-[#2d3748] font-sans">{kw.keyword}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium font-sans ${
                        kw.position === 1 ? "bg-[#387B84] text-white" : 
                        kw.position === "↑" ? "bg-emerald-100 text-emerald-600" :
                        "bg-[#f1f5f9] text-[#2d3748]"
                      }`}>
                        {kw.position}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-sm text-[#6b7280] font-sans">{kw.volume}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-sm text-[#387B84] font-sans font-medium">{kw.traffic}</span>
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] tracking-[0.05em] font-sans ${
                        kw.intent === "Transactionnelle"
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                          : kw.intent === "Commerciale"
                          ? "bg-[#F6A878]/20 text-[#d97706] border border-[#F6A878]/40"
                          : kw.intent === "Navigationnelle"
                          ? "bg-[#387B84]/10 text-[#387B84] border border-[#387B84]/20"
                          : "bg-[#f1f5f9] text-[#6b7280] border border-[#e5e7eb]"
                      }`}>
                        {kw.intent}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end">
            <a
              href="https://www.inputkit.io/fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#387B84] text-white text-sm font-sans font-medium tracking-wide hover:bg-[#2d6269] transition-colors"
            >
              Voir le site actuel
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
