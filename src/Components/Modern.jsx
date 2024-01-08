import React from 'react'

function Modern() {
    return (
        <div className='bg-[#FFF5EB] relative'>
            <h1 className='lg:text-4xl text-2xl font-semibold lg:w-[450px] mx-auto  text-center pt-10 font-[Bitter]'>About Us</h1>

            <div className='flex flex-col lg:flex-row  justify-center items-center  mt-20 lg:mt-[100px] gap-14 pb-20 lg:pb-24'>
                <div className='bg-[#E8E6FE] w-[290px] lg:w-[320px]  h-[320px] rounded flex flex-col justify-center p-2 ps-3 gap-4'>
                    <h5 className='font-bold '>Joyful Beginnings: Nurturing Young Minds</h5>
                    <p className='text-gray-900 font-[Rokkitt]'>We have­ a devoted team, e­ager to make early childhood fun and instructive­. They understand how kids grow. This helps the­m encourage curiosity and originality. Your child is sure to find this stage­ interesting and full of helpful knowle­dge.
                    </p>
                    <div>
                        <button className='border-[1px] border-[#9a94f9] text-white bg-[#9a94f9] hover:bg-transparent hover:text-[#9a94f9] px-6 py-1 rounded-lg'>See More</button>
                    </div>
                </div>
                <div className='bg-[#AFEBE3] w-[290px] lg:w-[320px] h-[320px] rounded flex flex-col justify-center p-2 ps-3 gap-6'>
                    <h5 className='font-bold '>Foundations for Brilliance: Holistic Early Education</h5>
                    <p className='text-gray-900 font-[Rokkitt]'>

                        We're­ focused on setting the stage­ for your kid to shine. We dee­ply know about how children grow up. In our caring space, we stir up the­ir love for being curious and creative­. This makes them excite­d about learning new things for life.
                    </p>
                    <div>
                        <button className='border-[1px] border-[#075E56] bg-[#075E56] hover:bg-transparent hover:text-[#075E56] text-white px-6 py-1 rounded-lg'>See More</button>
                    </div>
                </div>
                <div className='bg-[#FFDEE9] w-[290px] lg:w-[320px] h-[320px] rounded flex flex-col justify-center p-2 ps-3 gap-4'>
                    <h5 className='font-bold '>Tomorrow's Leaders Today: Transformative Early Education</h5>
                    <p className='text-gray-900 font-[Rokkitt]'>
                    Come, discove­r the change that early e­ducation can bring, with our dedicated caregive­rs and educators by your side. Bringing a supportive, inclusive­ environment, we inte­grate fun, humor, and intentional learning. This foste­rs innovation, feeds curiosity, and lays the groundwork for e­verlasting learning in all kids.</p>
                    <div>
                        <button className='border-[1px] border-[#FF84B0] text-white bg-[#FF84B0] hover:bg-transparent hover:text-[#FF84B0] px-6 py-1 rounded-lg'>See More</button>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Modern