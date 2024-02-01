import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
function Support() {
    return (
        <div className='bg-[#FFF5EB] pb-10 '>
            <h1 className='pt-16 mx-auto text-4xl font-semibold lg:w-[450px] text-center font-[bitter]'>What Sets Us Apart</h1>
            <div className='flex flex-col gap-10 lg:flex-row lg:gap-0 justify-evenly items-center  mt-10'>
                <div className='lg:w-[370px]  w-[300px]  rounded h-[100px] bg-[#E7E5FD] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#B0ACFF] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
                        <MdDesignServices className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'> State-of-the-Art Facilities</h5>
                        <p className='text-[12px] text-gray-600'>Our Modern facilities provide a safe and welcoming environment for children to explore and learn.</p>
                    </div>
                </div>
                <div className='lg:w-[370px]  w-[300px]  rounded h-[100px] bg-[#FFE7C3] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#c2924b] rounded h-[60px] w-[160px] ms-2 flex justify-center items-center'>
                        <FaRegUserCircle  className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Dedicated Staff</h5>
                        <p className='text-[12px] text-gray-600 text-justify pe-1'>Our Team is not only highly trained but also deeply passionate about what they do ensuring a nurturing environment for your child growth. </p>
                    </div>
                </div>
                <div className='lg:w-[370px]  w-[300px]  rounded h-[100px] bg-[#FFE296] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#ffc93f] rounded h-[60px] w-[150px] ms-2 flex justify-center items-center'>
                        <FaUserGroup  className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'> Parental Involvement</h5>
                        <p className='text-[12px] text-gray-600'>We Prioritize open communication with parents creating a partnership to support your child growth and development.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 lg:flex-row lg:gap-0 justify-evenly items-center mt-10'>
                <div className='lg:w-[370px]  w-[300px]  rounded h-[100px] bg-[#FFDEE9] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#FF80AB] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
                        <FaBook className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'> Tailored Programs</h5>
                        <p className='text-[12px] text-gray-600'>We Offer a range of programs tailored to different age groups, ensuring that each child unique needs are met.</p>
                    </div>
                </div>
                <div className='lg:w-[370px]  w-[300px]  rounded h-[100px] bg-[#AFEBE3] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#075E56] rounded h-[60px] w-[150px] ms-2 flex justify-center items-center'>
                        <FaHandsHelping className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'> Open Communication</h5>
                        <p className='text-[12px] text-gray-600'>We Prioritize open communication with parents, creating a partnership to support your child growth and development.</p>
                    </div>
                </div>
                <div className='lg:w-[370px]  w-[300px]  rounded h-[100px] bg-[#d1eaf0] flex justify-evenly items-center gap-5'>
                    <div className='bg-[#42C3E2] rounded h-[60px] w-[120px] ms-2 flex justify-center items-center'>
                        <MdCleanHands className='text-white text-4xl' />
                    </div>
                    <div>
                        <h5 className='font-semibold'>Safety and Cleanliness</h5>
                        <p className='text-[12px] text-gray-600'>Safety and Cleanliness are our top priorities giving you peace of mind as your child spends their day with us.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Support