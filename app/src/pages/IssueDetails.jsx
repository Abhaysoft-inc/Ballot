import Navbar from '@/components/Navbar'
import React from 'react'

function IssueDetails() {
    return (
        <>

            <Navbar />

            <div className="bg-gray-100 pt-1 pb-10">
                <div className="mx-[38px] mt-16">
                    {/* into box */}

                    <div className="rounded-[16px] bg-[#D9D9D9] w-full h-[378px] flex ">

                        <div className="img flex items-center shrink-0  ">
                            <img src="https://www.morrisbart.com/wp-content/uploads/2022/05/pothole-in-road-with-cone.jpg" className='object-cover w-[314px] h-[328px] mx-[30px] my-[25px] rounded-[16px] ' alt="" />
                        </div>

                        <div className="metadata ml-[50px]">
                            {/* title, 
                            location
                            date
                            authority
                            posted by */}

                            <p className="text-[32px] mt-4 font-[500] mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quisquam, ipsa numquam repellendus </p>

                            <div className="data space-y-2">



                                <p className="text-[20px] font-[400]"><b>Location: </b> Delhi, India</p>
                                <p className="text-[20px] font-[400]"><b>Date: </b> 02 March 2026</p>
                                <p className="text-[20px] font-[400]"><b>Authority: </b> Delhi Municipal Corporation</p>
                                <p className="text-[20px] font-[400]"><b>Author: </b> Anonymous</p>
                            </div>
                        </div>




                    </div>

                </div>
                <div className="blog mx-[38px] mt-20">

                    <p className="text-[34px] font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quisquam, ipsa numquam repellendus</p>

                    <p className="mt-4 text[19px] font-semibold">Last updated on: 24 May 2024</p>

                    <p className="mt-5 text-[21px] font-[400]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus pariatur dolore eaque eos nulla laboriosam repellendus illo suscipit quos recusandae, fugit dignissimos fugiat sunt. Veritatis dolorum quas accusamus dicta cupiditate explicabo aperiam, impedit corrupti ab at ipsa voluptatum, consectetur optio, quos quam voluptatibus blanditiis iure qui assumenda. Dicta debitis totam a? Iste recusandae aliquam modi nam eaque. Dolor, ex.
                        <br /><br />

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel quia quae odio, possimus architecto exercitationem illo adipisci minus. Quibusdam tempore sapiente eaque consequuntur, iste magni, blanditiis doloribus rerum quisquam officiis fugit necessitatibus amet omnis quia et illum! Nulla, libero sint. Numquam aliquam commodi harum quis eius, saepe fugiat voluptatum nulla cumque iure eligendi excepturi beatae eaque asperiores molestias, veritatis quisquam minus labore voluptate quas! Illo exercitationem eveniet dolor distinctio, mollitia ad officiis recusandae consequuntur esse itaque dolores! Quisquam, neque.
                    </p>

                </div>


                <div className="issue-gallery mt-10 mx-[38px]">

                    <p className="text-3xl font-bold">Issue Gallery</p>

                    <div className="h-[392px] w-full bg-[#D9D9D9] mt-10 rounded-[16px]">

                    </div>

                </div>

            </div>






        </>
    )
}

export default IssueDetails