import { Button } from '@/components/ui/button'
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
            <div className='w-full lg:w-3/5 mx-auto'>
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
                            <div className={`w-full flex items-center justify-between ${index < verificationTypes.length && "pb-8"}`} key={index}>
                                <div className='flex gap-y-2 flex-col'>
                                    <h3 className='font-extrabold text-xl text-slate-800'>
                                        {type.name}
                                    </h3>
                                    <p className='text-sm text-slate-600'>
                                        {type.note}
                                    </p>
                                </div>
                                <div>
                                    <Button className='py-6 px-7 bg-emerald-600 hover:bg-emerald-700 cursor-pointer'>
                                        Start Verification
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard