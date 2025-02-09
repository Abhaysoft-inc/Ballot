import React from 'react'
import AuthNav from './AuthNav'

function SignupPage() {
    return (
        <>
            <AuthNav />
            <form action="post">
                <div className="container flex justify-center items-center mt-12">
                    <div className="form card  w-[40%] bg-transparent border rounded px-2 align-middle items-center py-6 space-y-3">
                        <p className="mx-3.5 text-white text-xl mb-[25px]">Sign Up</p>

                        <div className="group flex justify-center gap-6">
                            <input type="text" name="firstName" className='rounded bg-transparent border-slate-300 border text-white px-2 py-1 text-lg' placeholder='First Name' id="" required />
                            <input type="text" name="lastName" className='rounded bg-transparent border-slate-300 border text-white px-2 py-1 text-lg' placeholder='Last Name' id="" required />
                        </div>
                        <div className="flex justify-center ">
                            <input type="email" name="email" className='rounded bg-transparent border-slate-300 border text-white px-2 py-1 text-lg w-full mx-[.80rem]' placeholder='Email' id="" required />
                        </div>

                        <div className="flex justify-center ">
                            <input type="password" name="firstName" className='rounded bg-transparent border-slate-300 border text-white px-2 py-1 text-lg w-full mx-[.80rem]' placeholder='Password' id="" required />
                        </div>

                        <div className="flex justify-center ">
                            <input type="password" name="firstName" className='rounded bg-transparent border-slate-300 border text-white px-2 py-1 text-lg w-full mx-[.80rem]' placeholder='Confirm Password' id="" required />
                        </div>

                        <div className="flex justify-center ">
                            <input type="" name="phone" className='rounded bg-transparent border-slate-300 border text-white px-2 py-1 text-lg w-full mx-[.80rem]' placeholder='Phone' id="" required />
                        </div>

                        <div className="flex justify-center ">
                            <input type="text" name="address" className='rounded bg-transparent border-slate-300 border text-white px-2 py-1 text-lg w-full mx-[.80rem]' placeholder='Address' id="" required />
                        </div>

                        <div className="mx-3.5">
                            <button className='bg-white px-2.5 py-1.5 font-[450] rounded mt-2' type='submit'>Create Account</button>
                        </div>


                    </div>
                </div>
            </form>
        </>
    )
}

export default SignupPage