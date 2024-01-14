import React from 'react'
import bg from "../assets/cubes-01.png"
import Kite from "../assets/kite-01.png"
function Modern() {
  return (
    <div className='bg-[#FFF5EB] relative'>
         <div className='relative'>
    <h1 className='lg:text-5xl text-2xl font-semibold lg:w-[450px] mx-auto  text-center pt-10 font-[Bitter]'>About Us</h1>
    <img className='w-[200px] absolute md:top-0 md:right-[28%] top-0 right-0 lg:right-[35%] lg:top-2' src={Kite} alt="" />
    </div>

<div className='flex flex-col lg:flex-row  justify-center items-center  mt-20 lg:mt-[100px] gap-14 pb-20 lg:pb-24'>
    <div className='bg-[#E8E6FE] w-[290px] lg:w-[320px]  lg:h-[320px] h-[380px] rounded flex flex-col justify-center p-2 ps-3 gap-4 relative'>
        <h5 className='font-bold '> Crafting Joyful Beginnings for Young Minds</h5>
        <p className='text-gray-900 font-[Rokkitt]'>Welcome to our world, where our passionate team becomes the architects of joy and enrichment for your child's early years. With profound knowledge in child development, we artfully foster creativity and curiosity. Your child's journey unfolds in an atmosphere dedicated to meaningful learning, shaping a vibrant foundation for the future.</p>
        <div>
            <button className='border-[1px] z-[99] border-[#9a94f9] text-white bg-[#9a94f9] hover:bg-transparent hover:text-[#9a94f9] px-6 py-1 rounded-lg'>See More</button>
        </div>
        <img className='absolute object-cover opacity-30 ' src={bg} alt="" />
    </div>
    <div className='bg-[#AFEBE3] relative w-[290px] lg:w-[320px] lg:h-[320px] h-[380px] rounded flex flex-col justify-center p-2 ps-3 gap-6'>
        <h5 className='font-bold '>Wonders Unveiled: Foundations for Brilliance Explored</h5>
        <p className='text-gray-900 font-[Rokkitt]'>

        Meet our super-dedicated squad! We are on a mission to kickstart your kiddos brilliance. Dive into our nurturing zone, where child development secrets are unraveled. We're the creativity and curiosity cheerleaders, crafting a lifelong love for exploration. Get ready for a brilliance-packed adventure with us!</p>
        <div>
            <button className='border-[1px] border-[#075E56] bg-[#075E56] hover:bg-transparent hover:text-[#075E56] text-white px-6 py-1 rounded-lg'>See More</button>
        </div>
        <img className='absolute object-cover opacity-30 ' src={bg} alt="" />
    </div>
    <div className='bg-[#FFDEE9] relative w-[290px] lg:w-[320px] lg:h-[320px] h-[380px] rounded flex flex-col justify-center p-2 ps-3 gap-4'>
        <h5 className='font-bold '>Playground to Boardroom: Tomorrow's Leaders Start Early!</h5>
        <p className='text-gray-900 font-[Rokkitt]'>
        Experience the transformative power of early education with our committed caregivers and educators. Rooted in support and inclusion, we blend joy, laughter, and purposeful learning to spark creativity, fuel curiosity, and sow the seeds of lifelong learning in every child.</p>
        <div>
            <button className='border-[1px] border-[#FF84B0] text-white bg-[#FF84B0] hover:bg-transparent hover:text-[#FF84B0] px-6 py-1 rounded-lg'>See More</button>
        </div>
        <img className='absolute object-cover opacity-30 ' src={bg} alt="" />
    </div>

            </div>



        </div>
    )
}

export default Modern