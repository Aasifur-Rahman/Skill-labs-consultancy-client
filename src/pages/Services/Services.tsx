import FeaturedServicesSection from '@/components/modules/Services/FeaturedServicesSection'
import GlobalJourneySection from '@/components/modules/Services/GlobalJourneySection'
import OneStopSolutionSection from '@/components/modules/Services/OneStopSolutionSection'
import ServiceForWorkers from '@/components/modules/Services/ServiceForWorkers'
import ServicesForStudent from '@/components/modules/Services/ServicesForStudent'
import React from 'react'

function Services() {
  return (
    <div>
        <FeaturedServicesSection></FeaturedServicesSection>
        <ServicesForStudent></ServicesForStudent>
        <ServiceForWorkers></ServiceForWorkers>
        <OneStopSolutionSection></OneStopSolutionSection>
        <GlobalJourneySection></GlobalJourneySection>
    </div>
  )
}

export default Services