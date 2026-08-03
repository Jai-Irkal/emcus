import React from 'react'
import { PortfolioItem } from '@/src/data/portfolio.data'
import Image from 'next/image'
import ArrowBullet from '@/public/portfolio-assets/arrow-bullet.svg'

const PortfolioComponent = ({ portfolioItem }: { portfolioItem: PortfolioItem }) => {
    return (
        <div className="bg-white w-full h-full rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#E4312D] h-[60px] w-full flex items-center px-6">
                <Image
                    src={portfolioItem.imgSrc}
                    alt={portfolioItem.title}
                    className="h-[30px] w-auto"
                />
                <h2 className="text-white text-xl font-bold ml-4">{portfolioItem.title}</h2>
            </div>
            <div className="p-4 py-10">
                <ul>
                    {portfolioItem.data.map((item, index) => (
                        
                        <li key={index} className="text-[16px] font-normal text-black text-left">
                            <Image src={ArrowBullet} alt="Arrow" className="inline-block mr-1 h-4" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PortfolioComponent