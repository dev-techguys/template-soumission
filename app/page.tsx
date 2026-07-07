import { CoverSlide } from "@/components/presentation/slides/cover-slide"
import { SommaireSlide } from "@/components/presentation/slides/sommaire-slide"
import { AboutSlide } from "@/components/presentation/slides/about-slide"
import { ObjectivesSlide } from "@/components/presentation/slides/objectives-slide"
import { RoadmapSlide } from "@/components/presentation/slides/roadmap-slide"
import { PricingSlide } from "@/components/presentation/slides/pricing-slide"
import { StripeFeesSlide } from "@/components/presentation/slides/stripe-fees-slide"
import { DeliveryCalendarSlide } from "@/components/presentation/slides/delivery-calendar-slide"
import { AnnexeSlide } from "@/components/presentation/slides/annexe-slide"
import { PortfolioSlide } from "@/components/presentation/slides/portfolio-slide"
import { ClosingSlide } from "@/components/presentation/slides/closing-slide"
import { PresentationShell } from "@/components/presentation/presentation-shell"
import { SignatureModal } from "@/components/presentation/signature-modal"

export default function Home() {
  return (
    <>
      <PresentationShell>
        <CoverSlide />
        <SommaireSlide />
        <AboutSlide />
        <ObjectivesSlide />
        <RoadmapSlide />
        <PricingSlide />
        <StripeFeesSlide />
        <DeliveryCalendarSlide />
        <AnnexeSlide />
        <PortfolioSlide />
        <ClosingSlide />
      </PresentationShell>
      <SignatureModal />
    </>
  )
}
