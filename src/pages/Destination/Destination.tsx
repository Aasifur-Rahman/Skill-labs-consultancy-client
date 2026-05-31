import DestinationCTA from '@/components/modules/Destination/DestinationCTA'
import GlobalAcademicHero from '@/components/modules/Destination/GlobalAcademicHero'
import MalaysiaInfoCards from '@/components/modules/Destination/MalaysiaInfoCards'
import StudyDestinationSection from '@/components/modules/Destination/StudyDestinationSection'
import StudyInCanadaSection from '@/components/modules/Destination/StudyInCanadaSection'
import StudyInMalaysia from '@/components/modules/Destination/StudyInMalaysia'
import StudyInUnitedKingdom from '@/components/modules/Destination/StudyInUnitedKingdom'
import TopInstitutionsAndVisa from '@/components/modules/Destination/TopInstitutionsAndVisa'
import UniversityVisaSection from '@/components/modules/Destination/UniversityVisaSection'
import React from 'react'

function Destination() {
  return (
    <div>
        <GlobalAcademicHero></GlobalAcademicHero>
        <StudyDestinationSection></StudyDestinationSection>
        <UniversityVisaSection></UniversityVisaSection>
        <StudyInCanadaSection></StudyInCanadaSection>
        <StudyInUnitedKingdom></StudyInUnitedKingdom>
        <TopInstitutionsAndVisa></TopInstitutionsAndVisa>
        <StudyInMalaysia></StudyInMalaysia>
        <MalaysiaInfoCards></MalaysiaInfoCards>
        <DestinationCTA></DestinationCTA>
    </div>
  )
}

export default Destination