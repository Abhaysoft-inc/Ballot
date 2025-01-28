import React from 'react'
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="nav flex justify-between px-6 py-6 ml-10 lato-regular">
                <ul className="flex gap-8 text-sm text-white items-center uppercase">
                    <li><a href="/" className='text-3xl lowercase space-grotesk font-bold '>Ballot.</a></li>
                    <li><Link to={"/campaigns"} className='ml-10'>Issues</Link></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Support</a></li>
                </ul>
                <ul className="flex mr-10 text-white items-center">
                    <li><MdSearch className='mt-1.5 cursor-pointer' size={26} /></li>
                    <Link to={'/login'}><li><button className='ml-3 border-2 border-white rounded-full px-6 py-1 lato-regular uppercase '>Get Started</button></li></Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar