import React from 'react'
import bg from "../assets/cubes-01.png"
function Modern() {
    return (
        <div className='bg-[#FFF5EB] relative'>
            <h1 className='lg:text-4xl text-2xl font-semibold lg:w-[450px] mx-auto  text-center pt-10 font-[Bitter]'>About Us</h1>

<div className='flex flex-col lg:flex-row  justify-center items-center  mt-20 lg:mt-[100px] gap-14 pb-20 lg:pb-24'>
    <div className='bg-[#E8E6FE] w-[290px] lg:w-[320px]  h-[320px] rounded flex flex-col justify-center p-2 ps-3 gap-4'>
        <h5 className='font-bold '>Joyful Beginnings: Nurturing Young Minds</h5>
        <p className='text-gray-900 font-[Rokkitt]'>Our passionate team of caregivers and educators is dedicated to creating a joyful and enriching early childhood experience. With a deep understanding of child development, we foster creativity and curiosity, ensuring that your child's early years are filled with meaningful learning.</p>
        <div>
            <button className='border-[1px] border-[#9a94f9] text-white bg-[#9a94f9] hover:bg-transparent hover:text-[#9a94f9] px-6 py-1 rounded-lg'>See More</button>
        </div>
    </div>
    <div className='bg-[#AFEBE3] w-[290px] lg:w-[320px] h-[320px] rounded flex flex-col justify-center p-2 ps-3 gap-6'>
        <h5 className='font-bold '>Foundations for Brilliance: Holistic Early Education</h5>
        <p className='text-gray-900 font-[Rokkitt]'>

        Our team is dedicated to laying the foundation for your child's brilliance through a deep understanding of child development. In our nurturing environment, we foster creativity and curiosity, creating a lifelong love for exploration.</p>
        <div>
            <button className='border-[1px] border-[#075E56] bg-[#075E56] hover:bg-transparent hover:text-[#075E56] text-white px-6 py-1 rounded-lg'>See More</button>
        </div>
    </div>
    <div className='bg-[#FFDEE9] w-[290px] lg:w-[320px] h-[320px] rounded flex flex-col justify-center p-2 ps-3 gap-4'>
        <h5 className='font-bold '>Tomorrow's Leaders Today: Transformative Early Education</h5>
        <p className='text-gray-900 font-[Rokkitt]'>
        Experience the transformative power of early education with our committed caregivers and educators. Rooted in support and inclusion, we blend joy, laughter, and purposeful learning to spark creativity, fuel curiosity, and sow the seeds of lifelong learning in every child.</p>
        <div>
            <button className='border-[1px] border-[#FF84B0] text-white bg-[#FF84B0] hover:bg-transparent hover:text-[#FF84B0] px-6 py-1 rounded-lg'>See More</button>
        </div>
    </div>

            </div>



        </div>
    )
}

export default Modern