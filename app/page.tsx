import { CoverSlide } from "@/components/presentation/slides/cover-slide"
import { ExecutiveSummarySlide } from "@/components/presentation/slides/executive-summary-slide"
import { ConstatSlide } from "@/components/presentation/slides/constat-slide"
import { BesoinsPrioritairesSlide } from "@/components/presentation/slides/besoins-prioritaires-slide"
import { VisionSlide } from "@/components/presentation/slides/vision-slide"
import { BesoinDatabaseSlide } from "@/components/presentation/slides/besoin-database-slide"
import { BesoinNavigationSlide } from "@/components/presentation/slides/besoin-navigation-slide"
import { BesoinDashboardSlide } from "@/components/presentation/slides/besoin-dashboard-slide"
import { ParcoursSlide } from "@/components/presentation/slides/parcours-slide"
import { UseCasesSlide } from "@/components/presentation/slides/use-cases-slide"
import { ArchitectureSlide } from "@/components/presentation/slides/architecture-slide"
import { SecuritySlide } from "@/components/presentation/slides/security-slide"
import { RoadmapLavalSlide } from "@/components/presentation/slides/roadmap-laval-slide"
import { BudgetSlide } from "@/components/presentation/slides/budget-slide"
import { ConclusionSlide } from "@/components/presentation/slides/conclusion-slide"
import { PresentationShell } from "@/components/presentation/presentation-shell"
import { SignatureModal } from "@/components/presentation/signature-modal"

export default function Home() {
  return (
    <>
      <PresentationShell>
        {/* Section 1: Cover */}
        <CoverSlide />
        {/* Section 2: Résumé Exécutif */}
        <ExecutiveSummarySlide />
        {/* Section 3: Le Constat */}
        <ConstatSlide />
        {/* Section 4: Les 3 Besoins Prioritaires */}
        <BesoinsPrioritairesSlide />
        {/* Section 5: Notre Vision */}
        <VisionSlide />
        {/* Section 6: Besoin #1 - Base de Données */}
        <BesoinDatabaseSlide />
        {/* Section 7: Besoin #2 - Navigation Site */}
        <BesoinNavigationSlide />
        {/* Section 8: Besoin #3 - Dashboard */}
        <BesoinDashboardSlide />
        {/* Section 9: Parcours Utilisateur */}
        <ParcoursSlide />
        {/* Section 10: Cas d'Usage */}
        <UseCasesSlide />
        {/* Section 11: Architecture */}
        <ArchitectureSlide />
        {/* Section 12: Sécurité */}
        <SecuritySlide />
        {/* Section 13: Roadmap */}
        <RoadmapLavalSlide />
        {/* Section 14: Budget */}
        <BudgetSlide />
        {/* Section 15: Conclusion */}
        <ConclusionSlide />
      </PresentationShell>
      <SignatureModal />
    </>
  )
}
