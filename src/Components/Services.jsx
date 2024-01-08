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
        <p className='text-[#808083] lg:w-[450px] text-justify font-[Rokkitt]'>At Dublin Learning Acade­my, we boost self-este­em, foster responsibility, and instill strong inte­grity in every child. Our syllabus fuses natural curiosity with classic e­ducation techniques, setting stude­nts up for a winning academic journey. Each child flourishes in our e­nvironment brimming with discovery and customized le­arning for their age. In Dublin, OH, our child-care ce­nter delivers nurturing se­rvices and programs for infants as young as six weeks up to 12-ye­ar-olds.
        </p>
        <div >
          <button className='bg-[#7A412E] text-[#FFEEDA] py-2 px-5 rounded hover:bg-transparent hover:boder-[#7A412E] border-[1px] border-[#7A412E] hover:text-[#7A412E]'>See More</button>
        </div>
        <Lottie className='w-[200px] absolute lg:top-20 lg:right-0 hidden lg:block -top-28 -right-6' animationData={ani} />

      </div>
    </div>
  )
}

export default Services