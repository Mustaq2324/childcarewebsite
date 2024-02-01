import React from "react";
import img from "../assets/program-hero.png";
import bg from "../assets/our-programbg.png";
import Testimonial from "../Components/Testimonal";
function OurProgram() {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#FFF5EB] to-[#FFEEDA] ">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="bg-[#7A412E] rounded-full  ">
                <img className="w-full" src={img} alt="" />
              </div>
              <div>
                <h1 className="text-4xl  font-bold text-black sm:text-6xl lg:text-7xl">
                  Little Hearts Learning Center
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#075E56]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      Programs
                    </h1>
                  </div>
                </h1>

                <p className="mt-8 text-base text-gray-600 text-justify">
                  From curriculum to teachers, our approach to early education
                  inspires a love of learning. Whether they’re building a
                  skyscraper, cooking an imaginary feast, or healing a teddy
                  bear’s runny nose, your child will build confidence for life
                  having fun with friends their age in our safe and supportive
                  classrooms. They’ll find teachers who believe in them and give
                  them the freedom to be themselves, try something new, and make
                  new friends.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* 1 */}
      <div className="bg-[#FFF4EA] flex  flex-col items-center gap-4 pt-8 pb-8">
<h1 className='lg:text-4xl text-2xl   text-center  font-[Bitter] font-semibold'>     What does Little Hearts Learning Center Offer?</h1> 

<p className=" text-base text-gray-600 text-center lg:text-justify mx-auto lg:w-[750px]">From infant care to school-age enrichment programs, Dublin Learning Academy champions every child, giving them the opportunity to reach their full potential. We provide a variety of daycare programs in Dublin, OH to meet the needs of local families from 7:00 a.m. until 6:00 p.m., Monday through Friday.</p>
<div className="flex gap-6">
<button className="bg-[#075E56] text-[#FFEEDA] font-medium py-2 px-4 rounded transition-all hover:bg-transparent hover:boder-[#075E56] border-[1px] border-[#075E56] hover:text-[#075E56] active:scale-95">
          Contact us
        </button>
      
       
       <button className="bg-[#7A412E] hover:bg-transparent hover:boder-[#075E56] border-[1px] border-[#7A412E] hover:text-[#7A412E] text-[#FFEEDA] px-4 py-2 rounded  font-semibold hover:bg-blacktransition-all duration-500 " >See More</button>
    

</div>
</div>
   {/* 2 */}
   
   <div className="bg-no-repeat  bg-cover pt-10 pb-10 lg:pt-0 lg:pb-0 lg:h-[800px] bg-center relative" style={{backgroundImage: `url(${bg})`}}>
      <h1 className='lg:text-4xl text-2xl pt-10 ps-4 font-[Bitter] font-semibold'>    
Why Choose Little Hearts Learning center?</h1> 
<p className="text-base text-gray-600  lg:text-justify ps-5 pt-5 lg:w-[750px]">The Little Hearts Learning staff includes early childhood professionals whose primary goal is to nurture and educate young children. Our teachers create a safe, stimulating environment to help each child acquire an appreciation for learning. If you are looking for a Dublin, Ohio daycare that leads the industry, look no further than Dublin Learning Academy. We use the most up-to-date research to build our curriculum, which empowers teachers to help kids follow their dreams—today and for years to come.</p>
<div className="absolute top-[30%]  left-[20%] lg:flex gap-4 hidden ">
<img src="https://img.freepik.com/free-photo/little-girl-playing-with-train-toy_23-2147663990.jpg?w=996&t=st=1706032169~exp=1706032769~hmac=f1fcf4b00237061a9c4a6a72961e2ca4e3e888b412b0631732848f6dd7020d4d" className="w-[300px] rounded-xl " alt="" />
<img src="https://img.freepik.com/free-photo/child-with-their-mom-playing-brain-teaser_23-2149512016.jpg?w=996&t=st=1706032504~exp=1706033104~hmac=9d53c855c0a24a1b9de18687bd82159bcc7f3c3dde74c0ef30e6e73f0ce74f5f" className="w-[300px] rounded-xl " alt="" />
</div>
<div className="absolute top-[60%]  left-[40%] lg:flex gap-4 hidden ">
<img src="https://img.freepik.com/premium-photo/young-children-enjoying-playroom_53876-87112.jpg?w=996" className="w-[300px] rounded-xl  " alt="" />
<img src="https://img.freepik.com/free-photo/two-kids-playing-with-construction-blocks-sitting-table-kindergarten_839833-1748.jpg?w=996&t=st=1706032719~exp=1706033319~hmac=a199c63a3d298da059a745c78592093b8f7cabd007108623d4fe67eca9832cee" className="w-[300px] rounded-xl " alt="" />
</div>
</div>
  {/* 3 */}
  <div className="bg-gradient-to-b from-[#FFF5EB] to-[#FFEEDA] pt-10 pb-20">
      <h1 className='lg:text-4xl text-2xl font-semibold text-center pb-20 font-[Bitter]'> Our classrooms for babies to kindergarteners</h1>
 
  
      <div className="flex flex-col gap-20">
      <div className="flex  flex-col lg:flex-row bg-[#FFF4E9] shadow-[#7A412E] justify-center items-center mt-10  pt-5 lg:pt-[50px] gap-14 pb-20 lg:pb-[180px] rounded-xl shadow-inner lg:w-[1200px] mx-auto lg:relative">
          <div className="lg:absolute flex gap-20  rounded-2xl lg:flex-row -top-10 flex-col">
            <div className="bg-[#E7E5FD]  shadow-lg  w-[290px] lg:w-[320px] lg:h-[230px]  h-[250px] rounded-xl flex flex-col justify-center p-2 ps-3 gap-3">
              <h5 className="font-bold text-[#25283A] uppercase">Infants</h5>
              <p className="font-bold">(6 weeks-1 year)</p>
              <p className="text-gray-600 font-semibold text-justify">
              Leaving your baby in someone else’s care is a big step. Everyone at our centers—most importantly, our naturally gifted infant teachers—will work with you to make sure the transition goes smoothly.
              </p>
              
            </div>
            <div className="bg-[#FFE7C3]  shadow-lg  w-[290px] lg:w-[320px] lg:h-[230px]  h-[250px] rounded-xl flex flex-col justify-center p-2 ps-3 gap-3">
              <h5 className="font-bold text-[#25283A] uppercase">Toddlers</h5>
              <p className="font-bold">(13 - 24 months)</p>
              <p className="text-gray-600 font-semibold text-justify">
              Everything in our toddler classroom is designed for little explorers. That’s because a lot is going on at this age. When your child is wandering all over the place, that means they’re learning and discovering new things every day. 
              </p>
              
            </div>
            <div className="bg-[#FFDEE9]  shadow-lg  w-[290px] lg:w-[320px] lg:h-[230px]  h-[250px] rounded-xl flex flex-col justify-center p-2 ps-3 gap-3">
              <h5 className="font-bold text-[#25283A] uppercase">PreSchool</h5>
              <p className="font-bold">(3 years old)</p>
              <p className="text-gray-600 font-semibold text-justify">
              This age is all about expression, when kids really start to form their own ideas about what they want to play and how they want to create. Every day in our preschool classroom.
              </p>
              
            </div>
           
          </div>
        </div>

        <div className="flex flex-col lg:flex-row bg-[#FFF4E9] shadow-[#075E56] justify-center items-center mt-10  pt-5 lg:pt-[50px] gap-14 pb-20 lg:pb-[180px] rounded-xl shadow-inner lg:w-[1200px] mx-auto lg:relative">
          <div className="lg:absolute flex gap-20  rounded-2xl lg:flex-row -top-10 flex-col">
            <div className="bg-[#FFE296]  shadow-lg  w-[290px] lg:w-[320px] lg:h-[230px]  h-[250px] rounded-xl flex flex-col justify-center p-2 ps-3 gap-3">
              <h5 className="font-bold text-[#25283A] uppercase">Pre Kindergarten</h5>
              <p className="font-bold">(4 years old)</p>
              <p className="text-gray-600 font-semibold text-justify">
              When you walk into one of our pre-K classrooms, you’ll see artwork and writing displayed around the room. Labels are everywhere to help kids connect letters with words
              </p>
              
            </div>
            <div className="bg-[#AFEBE3]  shadow-lg  w-[290px] lg:w-[320px] lg:h-[230px]  h-[250px] rounded-xl flex flex-col justify-center p-2 ps-3 gap-3">
              <h5 className="font-bold text-[#25283A] uppercase">School Age</h5>
              <p className="font-bold">(Age 5 - 12)</p>
              <p className="text-gray-600 font-semibold text-justify">
              Everything in our toddler classroom is designed for little explorers. That’s because a lot is going on at this age. When your child is wandering all over the place, that means they’re learning and discovering new things every day. 
              </p>
              
            </div>
            <div className="bg-[#D1EAF0]  shadow-lg  w-[290px] lg:w-[320px] lg:h-[230px]  h-[250px] rounded-xl flex flex-col justify-center p-2 ps-3 gap-3">
              <h5 className="font-bold text-[#25283A] uppercase">Summer Camp</h5>
              <p className="font-bold">(Age 5 - 12)</p>
              <p className="text-gray-600 font-semibold text-justify">
              This age is all about expression, when kids really start to form their own ideas about what they want to play and how they want to create. Every day in our preschool classroom.
              </p>
              
            </div>
           
          </div>
        </div>
      </div>
      </div>
{/* 4 */}
<Testimonial/>
    </div>
  );
}

export default OurProgram;
