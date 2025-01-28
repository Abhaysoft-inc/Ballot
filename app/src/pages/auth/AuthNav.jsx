import React from 'react'
import { CornerDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
function AuthNav() {
    return (
        <>
            {/* Navigation Bar */}
            <nav className="flex justify-between text-white px-14 py-6 items-center">
                <Link to={'/'}>
                    <p className="space-grotesk text-2xl font-bold"> ballot.</p>
                </Link>
                <Link to={'/create-account'}>
                    <p className="geist flex gap-3 items-center">
                        <CornerDownRight /> Create an account
                    </p></Link>
            </nav>

        </>
    )
}

export default AuthNav