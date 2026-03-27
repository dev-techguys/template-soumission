import { proposalData } from "@/lib/proposal-data"
import { PresentationShell } from "@/components/presentation/presentation-shell"
import { CoverSlide } from "@/components/presentation/slides/cover-slide"
import { AboutSlide } from "@/components/presentation/slides/about-slide"
import { ContextSlide } from "@/components/presentation/slides/context-slide"
import { ObjectivesSlide } from "@/components/presentation/slides/objectives-slide"
import { RoadmapSlide } from "@/components/presentation/slides/roadmap-slide"
import { PricingSlide } from "@/components/presentation/slides/pricing-slide"
import { AnnexeSlide } from "@/components/presentation/slides/annexe-slide"
import { ClosingSlide } from "@/components/presentation/slides/closing-slide"

export default function Home() {
  return (
    <PresentationShell
      branding={proposalData.branding}
      slides={proposalData.slides}
    >
      <CoverSlide client={proposalData.client} branding={proposalData.branding} />
      <AboutSlide />
      <ContextSlide client={proposalData.client} context={proposalData.context} />
      <ObjectivesSlide objectives={proposalData.objectives} />
      <RoadmapSlide roadmap={proposalData.roadmap} />
      <PricingSlide />
      <AnnexeSlide />
      <ClosingSlide client={proposalData.client} />
    </PresentationShell>
  )
}
