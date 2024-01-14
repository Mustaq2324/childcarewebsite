import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Modern from '../Components/Modern'
import Latest from '../Components/Latest'
import FAQSection from '../Components/Faq'
import Support from '../Components/Support'
import Footer from '../Components/Footer/Footer'
import Age from '../Components/Age group/Age'
// import Cards from '../Components/Card'



function Home() {
  return (
    <div className='overflow-x-hidden'>
   
    <Hero/>
    {/* <Foards/> */}
    <Services/>
    <Age/>
    <Modern/>
    <Latest/>
    <Support/>
    <FAQSection/>

    </div>
  )
}

export default Home