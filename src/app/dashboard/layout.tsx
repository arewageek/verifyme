import Navbar from '@/components/navbar'
import React, { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className='flex-center w-full p-3'>
                <Navbar />
            </div>
            <div className='p-5 lg:p-10 '>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout