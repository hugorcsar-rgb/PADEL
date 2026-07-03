// HOME PAGE — composer. Sections render in this order.
import HeroSection from './HeroSection.jsx'
import ProgramsSection from './ProgramsSection.jsx'
import MethodSection from './MethodSection.jsx'
import CampusSection from './CampusSection.jsx'
import DutyOfCareSection from './DutyOfCareSection.jsx'
import BridgeSection from './BridgeSection.jsx'
import CTASection from './CTASection.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <MethodSection />
      <CampusSection />
      <DutyOfCareSection />
      <BridgeSection />
      <CTASection />
    </>
  )
}
