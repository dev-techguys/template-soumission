"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Compass, Database, BarChart3, Rocket, ChevronDown, Check, Users, Globe, Bot, ClipboardList, Route } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"

const modules = [
  {
    icon: MessageSquare,
    title: "Agent conversationnel intelligent",
    summary: "Widget IA intégré au site avec réponses, suggestions et parcours guidés.",
    details: {
      deliver: "Un widget IA intégré au site web, capable de répondre aux questions, détecter l'intention et recommander les bonnes ressources.",
      how: [
        "Interface conversationnelle alignée avec le branding",
        "Définition des intentions prioritaires (démarrage, financement, exportation...)",
        "Moteur de réponses basé sur des contenus validés",
        "Suggestions cliquables pour guider les utilisateurs",
        "Règles de prudence pour éviter les réponses inventées",
        "Redirection vers un humain si demande complexe"
      ],
      benefits: [
        "Le visiteur obtient une réponse claire sans fouiller",
        "Les demandes complexes arrivent avec plus de contexte",
        "L'expérience devient plus fluide et moderne"
      ],
      deliverables: ["Widget agent IA", "Interface responsive", "Suggestions de parcours", "Détection d'intentions"]
    },
    keyMessage: "Le chat n'est pas la valeur finale. La valeur est dans sa capacité à comprendre, orienter et préparer la suite.",
    color: "#143B6D"
  },
  {
    icon: ClipboardList,
    title: "Prédiagnostic entrepreneurial",
    summary: "Questionnaire de 13 questions pour qualifier le profil et les besoins de l'entrepreneur.",
    details: {
      deliver: "Un questionnaire rapide de 13 questions intégré à l'agent IA pour aider les entrepreneurs à clarifier leur profil, leur stade et leurs besoins.",
      how: [
        "Structuration des 13 questions clés",
        "Logique de progression simple",
        "Analyse des réponses",
        "Association du profil aux services pertinents",
        "Génération d'un résumé du prédiagnostic",
        "Recommandation d'une ressource, d'un parcours ou d'un suivi humain",
        "Envoi des résultats pertinents au tableau de bord"
      ],
      benefits: [
        "L'entrepreneur est mieux orienté dès le départ",
        "L'équipe reçoit un contexte plus clair",
        "Les recommandations sont plus précises",
        "Les demandes entrantes sont mieux qualifiées"
      ],
      deliverables: ["Questionnaire 13 questions", "Logique de préqualification", "Résumé de profil", "Recommandations automatiques"]
    },
    keyMessage: "Quand l'utilisateur ne sait pas quoi demander, le prédiagnostic guide la conversation.",
    color: "#F59E0B"
  },
  {
    icon: Compass,
    title: "Navigation intelligente sur le site complet",
    summary: "Transformer le site web en ressource navigable par conversation.",
    details: {
      deliver: "Une logique de navigation permettant à l'agent de recommander les bonnes pages selon la question posée.",
      how: [
        "Cartographie des pages et sections clés du site",
        "Association des pages aux intentions utilisateurs",
        "Indexation des contenus importants",
        "Règles de recommandation par besoin",
        "Tests avec scénarios réels"
      ],
      benefits: [
        "Le contenu existant devient plus accessible",
        "Les visiteurs n'ont pas besoin de connaître le nom exact du service",
        "Les pages importantes sont mieux valorisées"
      ],
      deliverables: ["Cartographie des contenus", "Moteur de recommandation", "Parcours par intention", "Tests de scénarios"]
    },
    keyMessage: "Le site ne sert plus seulement à publier l'information. Il devient capable de guider le visiteur vers la bonne action.",
    color: "#5B5CE2"
  },
  {
    icon: Route,
    title: "Scénarios fréquents et parcours intégrés",
    summary: "Bibliothèque de parcours basés sur les questions fréquentes des entrepreneurs.",
    details: {
      deliver: "Une bibliothèque de scénarios basés sur les questions fréquentes et parcours souvent observés chez les entrepreneurs.",
      how: [
        "Identification des questions récurrentes",
        "Regroupement par intention : démarrage, financement, local, exportation",
        "Création de parcours de réponse rapides",
        "Association de chaque scénario à une ressource ou action",
        "Ajout de suggestions contextuelles",
        "Tests sur des cas réels ou simulés"
      ],
      benefits: [
        "Réponses plus rapides aux besoins récurrents",
        "Parcours plus cohérents",
        "Moins de confusion pour le visiteur",
        "Base d'amélioration continue"
      ],
      deliverables: ["Bibliothèque de scénarios", "Parcours de réponse guidés", "Suggestions contextuelles", "Liens avec ressources"]
    },
    keyMessage: "Les scénarios donnent à l'agent une longueur d'avance sur les besoins les plus fréquents.",
    color: "#50B878"
  },
  {
    icon: Database,
    title: "Connexion à la base de données actuelle",
    summary: "Relier les interactions à la base de données de façon contrôlée et sécuritaire.",
    details: {
      deliver: "Une connexion permettant de vérifier, créer ou enrichir un dossier selon les accès et règles validées.",
      how: [
        "Analyse de la base de données et accès disponibles",
        "Identification des champs lisibles et modifiables",
        "Règles de prudence : lire avant d'écrire, éviter les doublons",
        "Logique de recherche par courriel, téléphone, nom",
        "Résumé de besoin plutôt que modification risquée",
        "Journalisation des actions importantes"
      ],
      benefits: [
        "Les suivis sont mieux préparés",
        "Les doublons sont réduits",
        "La base de données gagne en contexte"
      ],
      deliverables: ["Analyse de structure", "Connecteur validable", "Règles lecture/écriture", "Journal des actions"]
    },
    keyMessage: "L'agent ne modifie pas la base de données librement. Il enrichit les suivis selon des règles claires et contrôlées.",
    color: "#143B6D"
  },
  {
    icon: BarChart3,
    title: "Tableau de bord des visiteurs et des intentions",
    summary: "Vue claire sur ce que les visiteurs cherchent réellement.",
    details: {
      deliver: "Un tableau de bord regroupant les intentions détectées, questions fréquentes, services demandés et opportunités.",
      how: [
        "Définition d'une taxonomie d'intentions claire",
        "Enregistrement des événements importants",
        "Création de métriques simples et utiles",
        "Suivi des résultats du prédiagnostic",
        "Suivi des scénarios les plus utilisés",
        "Insights actionnables pour améliorer le site"
      ],
      benefits: [
        "Comprendre les besoins entrants",
        "Améliorer les contenus avec des données réelles",
        "Priorités de communication plus claires"
      ],
      deliverables: ["Tableau de bord admin", "Cartes statistiques", "Graphiques d'intention", "Suivi prédiagnostic"]
    },
    keyMessage: "Chaque question devient un signal d'intention. Le tableau de bord transforme ces signaux en décisions.",
    color: "#5B5CE2"
  },
  {
    icon: Rocket,
    title: "Tests, mise en ligne et transfert",
    summary: "S'assurer que l'agent est utilisable et prêt à être adopté par l'équipe.",
    details: {
      deliver: "Validation complète incluant tests de scénarios, ajustements, mise en ligne progressive et formation.",
      how: [
        "Création de scénarios basés sur les vrais besoins",
        "Tests des réponses et de la navigation",
        "Validation des scénarios fréquents avec l'équipe",
        "Ajustements UX et contenu",
        "Documentation simple",
        "Formation pour les utilisateurs internes"
      ],
      benefits: [
        "L'équipe comprend comment utiliser l'agent",
        "Les risques sont réduits avant mise en ligne",
        "Le projet devient plus facile à faire évoluer"
      ],
      deliverables: ["Plan de tests", "Scénarios validés", "Documentation", "Session de transfert"]
    },
    keyMessage: "Un agent IA utile n'est pas seulement développé. Il est testé, ajusté, gouverné et transféré à l'équipe.",
    color: "#F59E0B"
  }
]

export function ModulesSlide() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <SlideWrapper id="modules">
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto w-full">
          <SectionHeader
            badge="SLIDE 5"
            title="Modules fondamentaux"
            subtitle="Chaque module répond à un besoin concret : guider le visiteur, connecter les données, mesurer les intentions et préparer les suivis."
          />

          <div className="space-y-3 md:space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-[#E2E8F0] rounded-xl overflow-hidden bg-[#F6F8FA]"
              >
                {/* Header - always visible */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full p-4 md:p-5 flex items-center gap-3 md:gap-4 text-left hover:bg-[#F1F5F9] transition-colors"
                >
                  <div 
                    className="w-10 md:w-12 h-10 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${module.color}15` }}
                  >
                    <module.icon className="w-5 md:w-6 h-5 md:h-6" style={{ color: module.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1E293B] mb-0.5 md:mb-1 text-sm md:text-base">{module.title}</h4>
                    <p className="text-xs md:text-sm text-[#64748B] line-clamp-2 md:truncate">{module.summary}</p>
                  </div>
                  <ChevronDown 
                    className={`w-4 md:w-5 h-4 md:h-5 text-[#94A3B8] transition-transform flex-shrink-0 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2 border-t border-[#E2E8F0] bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {/* Left column */}
                          <div>
                            <h5 className="text-xs md:text-sm font-bold text-[#1E293B] mb-2">Ce qu&apos;on livre</h5>
                            <p className="text-xs md:text-sm text-[#64748B] mb-4 leading-relaxed">{module.details.deliver}</p>
                            
                            <h5 className="text-xs md:text-sm font-bold text-[#1E293B] mb-2">Comment on le fait</h5>
                            <ul className="space-y-1 md:space-y-1.5 mb-4">
                              {module.details.how.map((item, i) => (
                                <li key={i} className="text-xs md:text-sm text-[#64748B] flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] mt-1.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Right column */}
                          <div>
                            <h5 className="text-xs md:text-sm font-bold text-[#1E293B] mb-2">Ce que Laval Économique gagne</h5>
                            <ul className="space-y-1 md:space-y-1.5 mb-4">
                              {module.details.benefits.map((benefit, i) => (
                                <li key={i} className="text-xs md:text-sm text-[#50B878] flex items-start gap-2">
                                  <Check className="w-3.5 md:w-4 h-3.5 md:h-4 flex-shrink-0 mt-0.5" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>

                            <h5 className="text-xs md:text-sm font-bold text-[#1E293B] mb-2">Livrables concrets</h5>
                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                              {module.details.deliverables.map((item, i) => (
                                <span 
                                  key={i}
                                  className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium rounded-full"
                                  style={{ 
                                    backgroundColor: `${module.color}10`,
                                    color: module.color
                                  }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Key message */}
                        <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                          <p className="text-xs md:text-sm text-[#1E293B] italic">
                            &ldquo;{module.keyMessage}&rdquo;
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 md:mt-8 text-center"
          >
            <p className="text-sm md:text-base text-[#64748B]">
              On construit l&apos;agent, on le connecte, on le mesure, puis on le transfère à l&apos;équipe.
            </p>
          </motion.div>

          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 md:mt-12 py-6 md:py-8 px-4 md:px-6 bg-[#F1F5F9] rounded-xl md:rounded-2xl"
          >
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-4 flex-wrap">
              {[
                { icon: Users, label: "Visiteur" },
                { icon: Bot, label: "Agent IA" },
                { icon: Globe, label: "Site complet" },
                { icon: Database, label: "Base de données" },
                { icon: BarChart3, label: "Dashboard" },
                { icon: Users, label: "Équipe" },
              ].map((step, index, arr) => (
                <div key={step.label} className="flex items-center gap-1 sm:gap-2 md:gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <step.icon className="w-4 sm:w-5 md:w-6 lg:w-7 h-4 sm:h-5 md:h-6 lg:h-7 text-[#143B6D]" />
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm text-[#64748B] mt-1 md:mt-2 font-medium text-center">{step.label}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <span className="text-[#CBD5E1] text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-4 md:mb-6">→</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
