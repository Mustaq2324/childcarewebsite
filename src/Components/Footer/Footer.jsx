import React from 'react'
import logo from "../../assets/LH_Final Logo.png"
import { FaFacebook } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TiChevronRightOutline } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import svg1 from "../../assets/bg.png"
function Footer() {
  return (
    <footer className='bg-[#FFEEDA] lg:pt-40 pb-10 pt-10' style={{backgroundImage: `url(${svg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div className='flex justify-around lg:flex-row flex-col ps-5 gap-6 lg:gap-0 lg:ps-0 '>
    <div>
        <img className='w-[170px]' src={logo} alt="" />
    </div>
    <div>
        <h1 className='mb-6 text-xl font-semibold text-black ps-2 uppercase'>Links</h1>
        <ul className='flex flex-col space-y-4 text-[18px] font-medium text-gray-500'>
            <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950'/>About Us</li>
            <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950'/>Our Program</li>
            <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950'/>Enrollment</li>
            <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950'/>Child Era</li>
        </ul>
    </div>
    <div>
        <h1 className='mb-6 text-xl font-semibold text-black ps-2 uppercase'>Explore</h1>
        <ul className='flex flex-col space-y-4 text-[18px] font-medium text-gray-500'>
            <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950'/>Gallery</li>
            <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950'/>Faq</li>
            <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950'/>Carrers</li>
            <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><TiChevronRightOutline className='text-green-950'/>Calendar</li>
        </ul>
    </div>
    <div>
        <h1 className='mb-6 text-xl font-semibold text-black ps-2 uppercase'>Social</h1>
        <ul className='flex flex-col space-y-4 text-[18px] font-medium text-gray-500'>
            <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><FaFacebook className='text-green-950'/>FaceBook</li>
            <li className='flex items-center cursor-pointer gap-2 hover:text-emerald-900'><FaInstagram className='text-green-950'/>Instagram</li>
            <li className='flex items-center cursor-pointer hover:text-emerald-900 gap-2'><FaXTwitter className='text-green-950'/>Twitter-x</li>
            <li className='flex items-center cursor-pointer hover:text-emerald-900 gap-2'><FaLinkedin className='text-green-950'/>Linkedin </li>
        </ul>
    </div>
</div>
<hr className='border-[#7A412E] mt-4'/>
<div>
    <h1 className='mb-6 text-xl lg:text-2xl lg:text-center mt-4 font-semibold text-black lg:ps-0 ps-3 uppercase'>Locations</h1>
    <div className='flex flex-col lg:flex-row justify-evenly gap-4 ps-3 lg:ps-0'>
        <div className='text-[18px] font-medium text-gray-500 '>
        <h1 className='mb-6 text-lg font-bold text-green-950'>Little Hearts Learning Center I</h1>
            <p>4285 Eastland Square Dr,</p>
            <p>Columbus, OH 43232</p>
            <p>Email: Littlehearts022@gmail.com</p>
            <p>Ph No: (614) 866-7936</p>
        </div>
        <div className='text-[18px] font-medium text-gray-500 '>
        <h1 className='mb-6 text-lg font-bold text-green-950'>Little Hearts Learning Center II</h1>
            <p>1859 E.Livingston Ave,</p>
            <p>Columbus, OH 43205</p>
            <p>Email: Ohiochildcareacademy@gmail.com</p>
            <p>Ph No: (614) 564-9835
</p>
        </div>
        <div className='text-[18px] font-medium text-gray-500 '>
        <h1 className='mb-6 text-lg font-bold text-green-950'>Little Hearts Learning Center III</h1>
            <p>830 Refugee Rd,</p>
            <p>Pickerington , OH 43147</p>
            <p>Email: littlehearts.Refugee@gmail.com</p>
            <p>Ph No: (614) 604-9205</p>
        </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer