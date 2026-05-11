import { CoverSlide } from "@/components/presentation/slides/cover-slide"
import { AboutSlide } from "@/components/presentation/slides/about-slide"
import { ContextSlide } from "@/components/presentation/slides/context-slide"
import { ObjectivesSlide } from "@/components/presentation/slides/objectives-slide"
import { RoadmapSlide } from "@/components/presentation/slides/roadmap-slide"
import { PricingSlide } from "@/components/presentation/slides/pricing-slide"
import { AnnexeSlide } from "@/components/presentation/slides/annexe-slide"
import { ClosingSlide } from "@/components/presentation/slides/closing-slide"
import { PresentationShell } from "@/components/presentation/presentation-shell"
import { SignatureModal } from "@/components/presentation/signature-modal"

export default function Home() {
  return (
    <>
      <PresentationShell>
        <CoverSlide />
        <AboutSlide />
        <ContextSlide />
        <ObjectivesSlide />
        <RoadmapSlide />
        <PricingSlide />
        <AnnexeSlide />
        <ClosingSlide />
      </PresentationShell>
      <SignatureModal />
    </>
  )
}
