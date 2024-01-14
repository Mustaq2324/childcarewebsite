import { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer/Footer'
import OurProgram from './Pages/OurProgram'
import About from './Pages/About'


function App() {


  return (
   <BrowserRouter>
  <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='program' element={<OurProgram/>}/>
  <Route path='about' element={<About/>}/>
</Routes>
<Footer/>
   </BrowserRouter>
  )
}

export default App
