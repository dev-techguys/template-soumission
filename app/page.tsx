import { OpeningSlide } from "@/components/presentation/slides-v2/opening-slide"
import { ObjectiveSlide } from "@/components/presentation/slides-v2/objective-slide"
import { PrioritiesSlide } from "@/components/presentation/slides-v2/priorities-slide"
import { SolutionSlide } from "@/components/presentation/slides-v2/solution-slide"
import { ModulesSlide } from "@/components/presentation/slides-v2/modules-slide"
import { BenefitsSlide } from "@/components/presentation/slides-v2/benefits-slide"
import { DemoSlide } from "@/components/presentation/slides-v2/demo-slide"
import { PlanSlide } from "@/components/presentation/slides-v2/plan-slide"
import { InvestmentSlide } from "@/components/presentation/slides-v2/investment-slide"
import { TeamSlide } from "@/components/presentation/slides-v2/team-slide"

export default function Home() {
  return (
    <main className="bg-[#F6F8FA]">
      {/* Slide 1: Ouverture */}
      <OpeningSlide />
      
      {/* Slide 2: Objectif du mandat */}
      <ObjectiveSlide />
      
      {/* Slide 3: Les 3 priorités */}
      <PrioritiesSlide />
      
      {/* Slide 4: Solution proposée */}
      <SolutionSlide />
      
      {/* Slide 5: Modules livrables */}
      <ModulesSlide />
      
      {/* Slide 6: Bénéfices */}
      <BenefitsSlide />
      
      {/* Slide 7: Espace Démo */}
      <DemoSlide />
      
      {/* Slide 8: Plan de réalisation */}
      <PlanSlide />
      
      {/* Slide 9: Investissement */}
      <InvestmentSlide />
      
      {/* Slide 10: Équipe et prochaines étapes */}
      <TeamSlide />
    </main>
  )
}
