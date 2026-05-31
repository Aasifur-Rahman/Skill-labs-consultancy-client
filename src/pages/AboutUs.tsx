import AboutIntroSection from '@/components/modules/AboutUsPage/AboutIntroSection'
import ConsultationSection from '@/components/modules/AboutUsPage/ConsultationSection'
import ExpertsSection from '@/components/modules/AboutUsPage/ExpertsSection'
import PartnersSection from '@/components/modules/AboutUsPage/PartnersSection'
import SuccessMetricsSection from '@/components/modules/AboutUsPage/SuccessMetricsSection'
import VisionMissionSection from '@/components/modules/AboutUsPage/VisionMissionSection'


function AboutUs() {
  return (
    <div>
        <AboutIntroSection></AboutIntroSection>
        <VisionMissionSection></VisionMissionSection>
        <ExpertsSection></ExpertsSection>
        <PartnersSection></PartnersSection>
        <SuccessMetricsSection></SuccessMetricsSection>
        <ConsultationSection></ConsultationSection>
    </div>
  )
}

export default AboutUs