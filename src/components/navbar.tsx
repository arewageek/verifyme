import { MenuIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className='w-full lg:w-1/3 px-5 lg:px-10 bg-white/80 backdrop:blur-sm flex items-center justify-between py-4 text-sm shadow mx-auto rounded-full my-4 gap-10'>
            <div className='font-bold'>
                VerifyMe
            </div>
            <div className=''>
                <Button variant="ghost" className='cursor-pointer'>
                    <MenuIcon />
                </Button>
            </div>
        </div>
    )
}

export default Navbar