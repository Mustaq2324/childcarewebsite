import React from 'react'
import img from "../assets/img1.png"
function Services() {
  return (
    <div className=' bg-[#FFF5EB] flex flex-col pb-10 pt-10 lg:flex-row  justify-evenly items-center'>
        <div>
            <img src={img} className='w-[500px]' lt="" />
        </div>
        <div className='flex  flex-col gap-5  lg:ps-0 ps-2 mt-10 lg:mt-0 px-4 lg:px-0'>
            <h1 className='lg:text-4xl text-2xl font-semibold lg:w-[350px]'>Little Hearts Childcare Services</h1>
            <p className='text-[#808083] lg:w-[450px] text-justify'>We strive to establish self-confidence, responsibility, and good moral character in every student. Dublin Learning Academy’s curriculum combines intellectual curiosity and traditional learning methods to help lay the foundation for a successful educational career. Every child will thrive in our atmosphere filled with exploration and learning tailored for each age group. Our Dublin, OH childcare center provides compassionate childcare services and programs for infants ages six weeks to children up to 12 years old.</p>
            <div >
                <button className='bg-[#075E56] text-[#FFEEDA] py-2 px-5 rounded '>See More</button>
            </div>
        </div>
    </div>
  )
}

export default Services