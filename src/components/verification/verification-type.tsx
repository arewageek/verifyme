import { Button } from "../ui/button"

export const VerificationType = ({ name, note, isLast }: { name: string, note: string, isLast: boolean }) => {
    return (
        <div className={`w-full flex flex-col lg:flex-row lg:items-center justify-between gap-3 ${!isLast && "pb-8"}`}>
            <div className='flex gap-y-2 flex-col'>
                <h3 className='font-extrabold text-xl text-slate-800'>
                    {name}
                </h3>
                <p className='text-sm text-slate-600'>
                    {note}
                </p>
            </div>
            <div>
                <Button className='py-6 px-7 bg-emerald-600 hover:bg-emerald-700 cursor-pointer'>
                    Start Verification
                </Button>
            </div>
        </div>
    )
}
