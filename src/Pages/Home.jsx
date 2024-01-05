import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Modern from '../Components/Modern'
import Latest from '../Components/Latest'
import FAQSection from '../Components/Faq'
import Support from '../Components/Support'



function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Modern/>
    <Latest/>
    <Support/>
    <FAQSection/>

    </>
  )
}

export default Home