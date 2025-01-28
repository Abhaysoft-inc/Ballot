import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

function IssuesCard() {

    const navigate = useNavigate();

    function OpenDetailsPage() {
        navigate('/issues')

    }
    return (
        <><div className="w-full border border-white flex rounded h-36" >

            <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-full w-1/3 object-cover rounded-md cursor-pointer' alt="" onClick={OpenDetailsPage} />

            <div className="issue-details ml-3 mt-1">
                <p className="title text-white text-xl cursor-pointer" onClick={OpenDetailsPage}>Lorem ipsum dolor sit amet.</p>
                <p className="flex gap-1 geist text-[#c7c5c5]"> <MdLocationOn color='red' size={20} className='items-center align-middle flex text-center self-center geist' /> KNIT Sultanpur, Sultanpur </p>

                <div className="btns flex gap-1 mt-2 ">
                    <Button variant="secondary">6 <ChevronUp /></Button>
                    <Button variant="destructive" >7 <ChevronDown /></Button>
                </div>



            </div>




        </div></>
    )
}

export default IssuesCard