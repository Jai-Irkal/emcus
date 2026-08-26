import { Difference } from '@/src/data/emcus-different.data'
import React from 'react'
import Image from 'next/image'

const DifferenceCard = ({ item }: { item: Difference }) => {
    return (
        <div className="w-[340px] lg:w-[290px] shadow-md p-4 rounded-xl px-6 h-[160px] ">
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 bg-[#FFE3E2] rounded-md border-2 border-[#e73331] flex items-center justify-center">
                    <Image
                        src={item.image}
                        alt={item.title}
                        className="w-6 h-6"
                    />
                </div>

                <p
                    className={`font-bold text-[16px] ${item.id === 7 || item.id === 8 ? "pr-24 md:pr-24 lg:pr-13" : "pr-16 md:pr-16 lg:pr-4"}`}
                >
                    {item.title}
                </p>
            </div>

            <p className="text-[#333333] mt-2 text-[14px] pr-5">
                {item.description}
            </p>
        </div>
    )
}

export default DifferenceCard