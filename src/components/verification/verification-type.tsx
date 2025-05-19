"use client"

import { useModalStore } from "@/store/modal-store"
import { Button } from "../ui/button"

export const VerificationType = (data: { name: string, note: string, isLast: boolean }) => {
    const { setIsVisibile, setContent } = useModalStore()

    const handleModal = () => {
        setIsVisibile(true)
        setContent({
            body: data.note,
            heading: data.name
        })
    }

    return (
        <div className={`w-full flex flex-col lg:flex-row lg:items-center justify-between gap-3 ${!data.isLast && "pb-8"}`}>
            <div className='flex gap-y-2 flex-col'>
                <h3 className='font-extrabold text-xl text-slate-800'>
                    {data.name}
                </h3>
                <p className='text-sm text-slate-600'>
                    {data.note}
                </p>
            </div>
            <div>
                <Button onClick={handleModal} className='py-6 px-7 bg-emerald-600 hover:bg-emerald-700 cursor-pointer'>
                    Start Verification
                </Button>
            </div>
        </div>
    )
}
