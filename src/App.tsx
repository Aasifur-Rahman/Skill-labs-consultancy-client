import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Button } from './components/ui/button'
import CommonLayout from './components/layout/CommonLayout'
import { Outlet } from 'react-router'
import ConsultationCTASection from './components/modules/HomePage/ConsultationCTASection'

function App() {
  

  return (
<CommonLayout>
  <Outlet/>
</CommonLayout>
  )
}

export default App
