import React from 'react'
import img from "../assets/img1.png"
import Lottie from 'lottie-react'
import ani from "../assets/Animation - 1704341649187.json"
function Services() {
  return (
    <div className=' bg-[#FFF5EB] relative flex flex-col pb-10 pt-10 lg:flex-row  justify-evenly items-center'>
        <div>
            <img src={img} className='w-[500px]' lt="" />
        </div>
      
        <div className='flex  flex-col gap-5  lg:ps-0 ps-2 mt-10 lg:mt-0 px-4 lg:px-0  overflow-x-hidden'>
            <h1 className='lg:text-4xl text-2xl font-semibold lg:w-[350px] font-[Bitter]'>Little Hearts Childcare Services</h1>
            <p className='text-[#808083] lg:w-[450px] text-justify font-[Rokkitt]'>We strive to establish self-confidence, responsibility, and good moral character in every student. Dublin Learning Academy’s curriculum combines intellectual curiosity and traditional learning methods to help lay the foundation for a successful educational career. Every child will thrive in our atmosphere filled with exploration and learning tailored for each age group. Our Dublin, OH childcare center provides compassionate childcare services and programs for infants ages six weeks to children up to 12 years old.</p>
            <div >
                <button className='bg-[#075E56] text-[#FFEEDA] py-2 px-5 rounded hover:bg-transparent hover:boder-[#075E56] border-[1px] border-[#075E56] hover:text-[#075E56]'>See More</button>
            </div>
            <Lottie className='w-[200px] absolute lg:top-20 lg:right-0 hidden lg:block -top-28 -right-6' animationData={ani}/>

        </div>
    </div>
  )
}

export default Services