import ConsultationBooking from '@/components/modules/Consultants/ConsultationBooking'
import ExpertCounsellors from '@/components/modules/Consultants/ExpertCounsellors'
import FeaturedConsultants from '@/components/modules/Consultants/FeaturedConsultants'
import GlobalPresence from '@/components/modules/Consultants/GlobalPresence'
import React from 'react'

function Consultants() {
  return (
    <div>
        <FeaturedConsultants></FeaturedConsultants>
        <ExpertCounsellors></ExpertCounsellors>
        <ConsultationBooking></ConsultationBooking>
        <GlobalPresence></GlobalPresence>
    </div>
  )
}

export default Consultants