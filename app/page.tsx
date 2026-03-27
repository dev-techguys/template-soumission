import { CoverSlide } from "@/components/presentation/slides/cover-slide"
import { AboutSlide } from "@/components/presentation/slides/about-slide"
import { ContextSlide } from "@/components/presentation/slides/context-slide"
import { DiagnosticsSlide } from "@/components/presentation/slides/diagnostics-slide"
import { UxContentSlide } from "@/components/presentation/slides/ux-content-slide"
import { ConversionSlide } from "@/components/presentation/slides/conversion-slide"
import { SeoSlide } from "@/components/presentation/slides/seo-slide"
import { PerformanceSlide } from "@/components/presentation/slides/performance-slide"
import { ObjectivesSlide } from "@/components/presentation/slides/objectives-slide"
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
        <DiagnosticsSlide />
        <UxContentSlide />
        <ConversionSlide />
        <SeoSlide />
        <PerformanceSlide />
        <ObjectivesSlide />
        <PricingSlide />
        <AnnexeSlide />
        <ClosingSlide />
      </PresentationShell>
      <SignatureModal />
    </>
  )
}
