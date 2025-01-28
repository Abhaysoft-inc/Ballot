"use client";

import React from 'react'
import Navbar from '../components/Navbar'
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import WordFadeIn from '@/components/ui/word-fade-in';
import { ChevronRight } from 'lucide-react';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <>

            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
            />
            <div className="bg-[#1d1b1b] ">
                <Navbar />

                <div className="">



                    <WordFadeIn words={"Immutable Voice Of Locals"} className={"text-center text-white mt-28 geist"} delay={0.05} />
                    <div className="flex justify-center mt-10  ">
                        <Link to={"/login"}>
                            <RainbowButton variant="" size="" className={" geist "}>
                                Raise Your Voice!
                                <ChevronRight />
                            </RainbowButton>
                        </Link>
                    </div>

                </div>
            </div>



        </>
    )
}

export default LandingPage