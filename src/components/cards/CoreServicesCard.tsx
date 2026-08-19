import React from 'react'
import { PortfolioItem } from '@/src/data/portfolio.data'
import Image from 'next/image'
import ArrowBullet from '@/public/common/arrow-bullet.svg'
import { CoreService } from '@/src/data/core-services.data'

const CoreServicesCard = ({ coreServiceItem }: { coreServiceItem: CoreService }) => {
    return (
        <div className="bg-white w-full h-full min-h-[220px] rounded-lg overflow-hidden flex flex-col pt-3 pb-6 border-gray-100 border-[1px]">
            <div className="h-[72px] w-full flex items-center gap-3 px-6">
                <Image
                    src={coreServiceItem.imgSrc}
                    alt={coreServiceItem.title}
                    className="h-[42px] w-auto"
                />
                <h2 className="text-[#E4312D] text-[17px] font-bold">{coreServiceItem.title}</h2>
            </div>
            <div className="px-6 py-0">
                <ul>
                    {coreServiceItem.data.map((item, index) => (
                        
                        <li key={index} className="text-[14px] font-normal text-black text-left py-1.5 flex">
                            <Image src={ArrowBullet} alt="Arrow" className="inline-block h-4" />
                            <span className='text-[#64748B] -mt-0.5'>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CoreServicesCard