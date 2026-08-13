import { Difference } from '@/src/data/emcus-different.data'
import React from 'react'
import Image from 'next/image'

const DifferenceCard = ({ item }: { item: Difference }) => {
    return (
        <div className="w-[340px] lg:w-[290px] shadow-md p-4 rounded-xl px-6 h-[160px] ">
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 bg-[#FFE3E2] rounded-md border-2 border-[#E4312D] flex items-center justify-center">
                    <Image
                        src={item.image}
                        alt={item.title}
                        className="w-6 h-6"
                    />
                </div>

                <p className="font-bold">{item.title}</p>
            </div>

            <p className="text-[#64748B] mt-2 text-[16px] pr-5">
                {item.description}
            </p>
        </div>
    )
}

export default DifferenceCard