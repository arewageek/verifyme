"use client"
import { useModalStore } from '@/store/modal-store'
import SumsubWebSdk from '@sumsub/websdk-react'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { generateAccessToken } from '@/utils/generate-access-token'

const KYCModal = () => {
    const [accessToken, setAccessToken] = useState('')

    const { isVisible, setIsVisibile, heading, body } = useModalStore()

    // useEffect(() => {
    //     const token = generateAccessToken('arewa', 'id-and-liveness').then(response => response?.token) || ''
    //     setAccessToken(token)
    // }, [isVisible])

    return (
        <div className={`bg-black/20 backdrop-blur-md h-screen w-screen fixed top-0 ${isVisible ? 'flex justify-center items-center' : 'hidden'}`}>
            <div className='bg-white shadow w-full lg:w-1/2 rounded-2xl'>
                <div className='w-full flex items-center justify-end'>
                    <Button onClick={() => setIsVisibile(false)} variant="ghost" className='cursor-pointer text-3xl'>
                        &times;
                    </Button>
                </div>
                <div className='w-full py-5 pb-10 px-5'>
                    {heading}
                    {/* <SumsubWebSdk
                    accessToken={accessToken?.token!}
                    expirationHandler={async () => "expired"}
                    // config={}
                    // options={options}
                    onMessage={success => console.log({ success })}
                    onError={error => console.log({ error })}
                /> */}
                </div>
            </div>
        </div>
    )
}

export default KYCModal