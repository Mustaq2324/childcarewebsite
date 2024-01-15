import React, { useRef } from 'react'
import jet from "../assets/Jet-01.png"
import baby from "../assets/baby.jpg"
import img from "../assets/1-about.jpg"
function About() {
 
  return (
    <div>
<div className="bg-[#FFEEDA] overflow-hidden lg:flex lg:items-center ">

      <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 relative">
        <img className='lg:w-[80px] w-[50px] left-[82%] top-[80px] lg:left-[90%] lg:top-[120px] absolute' src={jet} alt="" />
        <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
        Not Just Daycare
              </h1>
 
        <p className="text-base md:text-lg text-black my-4 md:my-6 font-[Rokkitt] ps-2">
        You want to do what’s best for your child by giving them a strong start in their early education. You’re in the right place! 
        </p>
        <p className="text-base md:text-lg text-black my-4 md:my-6 font-[Rokkitt] ps-2">
        We’re the experts in educating and caring for children and families. So, if you’re looking for the best place for your child to learn and grow (when you can’t be there), there is no better choice than KinderCare! 
        </p>
        <p className="text-base md:text-lg text-black my-4 md:my-6 font-[Rokkitt] ps-2">
        Read on to learn more about why KinderCare is more than just daycare and get to know more about our qualified staff; safe, reliable child care centers; and proven programs. 
        </p>
      
      </div>
   
      <div className="flex items-center gap-8 p-8 lg:p-24 ">
        <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGQlMjBjYXJlfGVufDB8fDB8fHww" className="w-1/2 rounded-lg" alt="Tree"/>
        <div>
          <img src="https://images.unsplash.com/flagged/photo-1570319736696-894f69f52bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWxkJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D" className="mb-8 rounded-lg" alt="Tree"/>
          <img src="https://plus.unsplash.com/premium_photo-1681842149009-a040e02cadf2?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-lg" alt="Tree"/>
        </div>
      </div>
    </div>

   {/* 1 */}
<div className='h-[100px] w-full bg-[#FFF5EB]'></div>
    <div className="relative">
    
      <section className="bg-[#FFEEDA] overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
          <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
            </div>
            <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
              Health and Safety
              </h1>

             
              <p className="mt-5 text-base text-black text-justify">You can breathe easier knowing your child is in a squeaky-clean environment with <u>proven protocols</u>  protecting them.</p>
              <ul className='flex flex-col gap-4 mt-4 text-justify'>
                <li>A team of pediatric emergency physicians advise us on all the things we do to keep your entire family—and our staff—safer from germs, infections, and even natural disasters.</li>
                <li>A commitment to nurturing, inspiring, and delighting the children in your care. Look for the WELL Health-Safety Rating™ seal on our center doors—it’s expert validation of our clean and healthy spaces!</li>
              </ul>
            </div>
            <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
              <img className="w-32 h-32 md:w-40 md:h-40" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png" alt="" />
            </div>
          </div>
          <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <img className="object-cover w-full h-full " src={baby} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center">
                  <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
                </div>
                <p className="max-w-xs mt-1.5 text-xl text-white uppercase">proven protocols</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
        {/* 2 */}
    <div className='h-[100px] w-full bg-[#FFF5EB]'></div>
    {/* 3 */}

    <div className="relative bg-[#FFEEDA]">
    <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
    </div>


    <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                    <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                        <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight ">The Intersection of Convenience and Flexibility</h1>
                        <div className="mt-8 lg:mt-12 ">
                         

                            <p className="mt-4 text-lg text-gray-900 text-justify lg:pe-4 lg:mt-0 lg:ml-4 ">Your child care provider is only as helpful as it is convenient! Since our centers are located nationwide, chances are there’s a KinderCare right in your neighborhood or close by.</p>
                            <ul className='lg:ml-4 text-justify lg:pe-4 flex flex-col gap-4 mt-4'>
                              <li>We’re ready to welcome your child early in the morning, and we extend past most other daycares’ hours to make drop-off and pick-up times fit with your schedule.</li>
                              <li>Full- and part-time scheduling is an option at most locations*, and our KinderCare App keeps you connected to your little one’s experience all day long</li>
                            </ul>
                        </div>
                    </div>

                 
                </div>

                <div className="xl:col-span-3">
                    <img className="w-full mx-auto rounded" src={img} alt="" />
                </div>
            </div>
        </div>
    </section>
</div>
<div className='h-[100px] w-full bg-[#FFF5EB]'></div>
{/* 4 */}
<section>
  <div className="mx-auto bg-[#FFEEDA] max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="House"
            src="https://img.freepik.com/free-photo/teacher-helping-kids-learn-montessori-method_23-2149389926.jpg?w=996&t=st=1705246568~exp=1705247168~hmac=a78bfb6a22d6c8f90faa0f995f0a0e7850a8e404d7a29007a6e20936bb441ac4"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-[#FFF5EB]">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-[#FFF5EB]"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
        <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
        Talent and Trust
              </h1>

             
              <p className="mt-5 text-base text-black text-justify">Who brings (big) heart and soul into our programs every day? Our <u>teachers!</u> They’re experts at caring for kids and leading your child’s learning journey. Don’t be surprised if they start to feel like family. </p>
              <ul className='flex flex-col gap-4 mt-4 text-justify'>
                <li>We hire people who love and understand children and are eager to be your partner in parenting.</li>
                <li>Your kiddo will benefit from our whole-child curriculum (Early Foundations®) that’s built by our in-house team of education masterminds who continually build and refine it to meet the needs of young minds. </li>
              </ul>
          
        </div>
      </div>
    </div>
  </div>
</section>
<div className='h-[100px] w-full bg-[#FFF5EB]'></div>


<div className="p-4 bg-[#FFEEDA]">
<h1 className="text-4xl font-bold text-center text-black sm:text-6xl xl:text-8xl">
        Our Team
              </h1>
    <p className="mb-32 mt-10 text-xl font-normal text-center text-black">
        Meat the best team in wolrd
    </p>
    <div className="flex flex-col items-center space-y-24 md:space-y-0 md:flex-row md:justify-around justify evenly">
        <div className="relative p-4">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img alt="profil" src={img} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        Patrick Sebastien
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        Developpeur
                    </p>
                    <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                        Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.
                    </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                    
                </div>
            </div>
        </div>
        <div className="relative p-4">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img alt="profil" src={img} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        Charlie
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        Lead dev
                    </p>
                    <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                        Charlie, born December 18, 1993 in Challans, is an imitator and pintor.
                    </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                    
                </div>
            </div>
        </div>
        <div className="relative p-4">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img alt="profil" src={img} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        Thierry Halliday
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        CTO
                    </p>
                    <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                        Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist.
                    </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                    
                </div>
            </div>
        </div>
    </div>
</div>

    </div>

  )
}

export default About