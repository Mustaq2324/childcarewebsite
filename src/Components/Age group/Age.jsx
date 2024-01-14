import React from 'react'
import Lottie from 'lottie-react'
import infant from "../../assets/Infant.json"
import boy from "../../assets/Animation - 1704341100035.json"
import baby from "../../assets/baby.json"
import preSchool from "../../assets/boythinking.json"
import plane from "../../assets/Paper plane-01.png"
import Doodles from "../../assets/Doodles-01.png"
function Age() {
  return (
    <section className="py-12 bg-[#FFF5EB] sm:py-16 lg:py-10 relative overflow-hidden  ">
        <img className='absolute opacity-10 rounded top-0 lg:top-3 h-[1600px] lg:h-[1150px] object-cover' src={Doodles} alt="" />
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
        <div className="text-center relative">
            <h2 className="text-3xl font-bold leading-tight text-black font-[bitter]  lg:text-2xl sm:text-4xl xl:text-5xl ">Our Age Groups</h2>
            <img className='w-[150px] absolute md:-top-5 md:right-[18%] top-0 -right-10 lg:right-[300px] lg:-top-4' src={plane} alt="" />
            </div>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
                
                <h3 className="mt-12 text-xl lg:text-2xl font-bold text-[#075E56] ">Infants</h3>
                <p className="mt-5 text-base text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-[#7A412E]">
             
                <h3 className="mt-12 text-xl lg:text-2xl font-bold text-[#075E56] ">Toddler</h3>
                <p className="mt-5 text-base text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-[#7A412E]">
               
                <h3 className="mt-12 text-xl lg:text-2xl font-bold text-[#075E56] ">Preschool</h3>
                <p className="mt-5 text-base text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-[#7A412E]">
               
                <h3 className="mt-12 text-xl lg:text-2xl font-bold text-[#075E56] ">Pre kindergarten</h3>
                <p className="mt-5 text-base text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-[#7A412E] md:border-t">
                
                <h3 className="mt-12 text-xl lg:text-2xl font-bold text-[#075E56] ">School age</h3>
                <p className="mt-5 text-base text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-[#7A412E] md:border-t">
             
                <h3 className="mt-12 text-xl lg:text-2xl font-bold text-[#075E56] ">Summer camp</h3>
                <p className="mt-5 text-base text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Age