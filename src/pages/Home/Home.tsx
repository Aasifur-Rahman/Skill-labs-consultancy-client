import BrandSection from '@/components/modules/HomePage/BrandSection'
import ConsultationCTASection from '@/components/modules/HomePage/ConsultationCTASection'
import Destinations from '@/components/modules/HomePage/Destinations'
import FaqSection from '@/components/modules/HomePage/FaqSection'
import HeroSection from '@/components/modules/HomePage/HeroSection'
import PartnersSection from '@/components/modules/HomePage/PartnersSection'
import ProcessSection from '@/components/modules/HomePage/ProcessSection'
import ReviewsSection from '@/components/modules/HomePage/ReviewsSection'
import ServicesSection from '@/components/modules/HomePage/ServicesSection'
import StatsSection from '@/components/modules/HomePage/StatsSection'

function Home() {
  return (
    <div>
     <HeroSection></HeroSection>
      <BrandSection></BrandSection>
      <ServicesSection></ServicesSection>
      <StatsSection></StatsSection>
      <Destinations></Destinations>
      <ProcessSection></ProcessSection>
      <ReviewsSection></ReviewsSection>
      <PartnersSection></PartnersSection>
      <FaqSection></FaqSection>
        <ConsultationCTASection></ConsultationCTASection>
        
    </div>
  )
}

export default Home