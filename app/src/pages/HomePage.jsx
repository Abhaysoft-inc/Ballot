import Navbar from '@/components/Navbar'
import React from 'react'
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import IssuesCard from '@/components/IssuesCard';
import { useRef } from 'react'
function HomePage() {


    return (
        <>
            <Navbar />


            <div className="hero-section mt-28 pb-40">
                <p className="text-center text-white font-bold mb-2">You're in</p>
                <h1 className="text-center text-white text-6xl font-bold geist">
                    Delhi
                </h1>
                <p className="text-center text-white mt-2 font-bold">Let's Make this a better place</p>
                <div className="flex justify-center mt-20" >
                    <InteractiveHoverButton text="Issues" /></div>
            </div>

            <div className="issues-section bg-[#837e7e6b] h-screen pt-10">

                <h1 className="text-center text-white text-4xl font-bold geist">Issues</h1>

                <div className="grp flex space-x-10 mt-10 mx-16">
                    <div className="overflow-y-scroll fl active w-1/2 h-[450px] relative  border border-[#a5d2dd]  rounded-sm ">

                        <p className="text-center text-[#c7dac2] py-2 text-2xl sticky top-0 bg-gradient-to-r to-[#6A11CB] from-[#2575FC] geist rounded-b-md">Current Issues</p>

                        <div className="issues mt-6 mx-6 space-y-5 pb-10">


                            <IssuesCard />
                            <IssuesCard />
                            <IssuesCard />
                            <IssuesCard />


                        </div>
                    </div>
                    <div className="overflow-y-scroll fl active w-1/2 h-[450px] relative  border border-[#a5d2dd]  rounded-sm ">

                        <p className="text-center text-[#c7dac2] py-2 text-2xl sticky top-0 bg-gradient-to-r from-[#6A11CB] to-[#2575FC] geist rounded-b-md">Solved Issues</p>

                        <div className="issues mt-6 mx-6 space-y-5 pb-10">


                            <IssuesCard />



                        </div>
                    </div>



                </div>

            </div>










        </>
    )
}

export default HomePage