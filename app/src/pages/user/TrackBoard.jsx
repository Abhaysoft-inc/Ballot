import Navbar from '@/components/Navbar'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"


import { ChartContainer } from "@/components/ui/chart"
function TrackBoard() {

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    }

    return (
        <>

            <Navbar />
            <div className="mx-20">

                <div className="flex justify-end  mt-10">

                    <div className="flex justify-center items-center px-6 py-2 bg-yellow-300 rounded-lg cursor-pointer">
                        <FaPlus />
                        <p className='ml-3 '>Raise Issue</p>

                    </div>



                </div>
                <p className="text-3xl text-white mt-6">Campaign Performances</p>
                <div className="mt-16 chart flex justify-between">




                    <div className="mt-10 bg-zinc-200 py-4 px-8">
                        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">

                            <BarChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </div>



                </div>





            </div>

        </>
    )
}

export default TrackBoard