import React from 'react'
import Lottie from 'lottie-react'
import infant from "../../assets/Infant.json"
import boy from "../../assets/Animation - 1704341100035.json"
import baby from "../../assets/baby.json"
import preSchool from "../../assets/boythinking.json"
function Age() {
  return (
    <section className="py-12 bg-[#FFF5EB] sm:py-16 lg:py-10">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black font-[bitter]  lg:text-2xl sm:text-4xl xl:text-5xl ">Our Age Groups</h2>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-10 ">
               <Lottie className='w-[150px] lg:w-[350px]  mx-auto' animationData={infant}/>
                <h3 className="mt-12 text-xl uppercase  font-bold text-[#075E56]  lg:text-2xl  ">Infants</h3>
                <p className="mt-5 text-base text-gray-600 ">Ensuring a safe haven, we nurture your little one's growth. Watch them blossom in our caring and secure environment."
</p>
            </div>

            <div className="md:p-8 lg:p-10 md:border-l md:border-[#7A412E]">
            <Lottie className='w-[150px] lg:w-[250px]  mx-auto' animationData={baby}/>
                <h3 className="mt-12 text-xl font-bold text-[#075E56]  lg:text-2xl uppercase ">Toddlers</h3>
                <p className="mt-5 text-base text-gray-600 ">Our program is designed to allow children to learn through play and discovery while encouraging individual interests
</p>
            </div>
            <div className="md:p-8 lg:p-10  md:border-[#7A412E] md:border-t">
            <Lottie className='w-[150px] lg:w-[250px]  mx-auto' animationData={boy}/>
            <h3 className="mt-12 text-xl font-bold text-[#075E56]  lg:text-2xl ">PRESCHOOL
</h3>
                <p className="mt-5 text-base text-gray-600 ">Children learn through play, exploring, investigating, and discovering in nurturing surroundings.
</p>
               
            </div>

            <div className="md:p-8 lg:p-10 md:border-l md:border-[#7A412E] md:border-t">
            <Lottie className='w-[150px] lg:w-[250px]  mx-auto' animationData={preSchool}/>
            <h3 className="mt-12 text-xl font-bold text-[#075E56]  lg:text-2xl ">PRE-KINDERGARTEN</h3>
                <p className="mt-5 text-base text-gray-600 ">Fueling children's exploration with imagination, energy, and purposeful inquiry, we empower curious minds to thrive.
.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Age