import { Button } from '@/components/ui/button'
import { VerificationType } from '@/components/verification/verification-type'
import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
    const verificationTypes = [
        {
            name: "Liveliness Check",
            note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo inventore"
        },
        {
            name: "Identity Card Verification",
            note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo inventore"
        }
    ]

    return (
        <div>
            <div className='w-full lg:w-5/9 mx-auto'>
                <div className='flex-center'>
                    <Image src="/images/2892852.jpg" alt="verification image" height={300} width={300} />
                </div>
                <div className='text-center'>
                    <h2 className='font-bold text-3xl text-slate-800'>Submit required documents</h2>
                    <p className='text-slate-600 text-lg mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam velit impedit a molestiae ex cumque dicta ab, ipsum id ratione est quos, optio nemo nulla et saepe, reiciendis earum. Alias.
                    </p>
                </div>
                <div className='w-full bg-white shadow rounded-2xl mt-10 p-5 flex flex-col gap-y-8 divide-y'>
                    {
                        verificationTypes.map((type, index) => (
                            <VerificationType isLast={(index <= verificationTypes.length)} name={type.name} note={type.note} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard