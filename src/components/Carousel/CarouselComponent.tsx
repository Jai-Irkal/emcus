"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "@/src/data/carousel.data";

import LeftArrow from "@/public/carousel/carousel-left.svg";
import RightArrow from "@/public/carousel/carousel-right.svg";

export default function CarouselComponent() {
    const [active, setActive] = useState(0);
    const [animate, setAnimate] = useState(true);

    const nextSlide = () => {
        setAnimate(false);

        setTimeout(() => {
            setActive((prev) => (prev + 1) % Carousel.length);
            setAnimate(true);
        }, 250);
    };

    const prevSlide = () => {
        setAnimate(false);

        setTimeout(() => {
            setActive((prev) =>
                prev === 0 ? Carousel.length - 1 : prev - 1
            );
            setAnimate(true);
        }, 250);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => clearInterval(timer);
    }, []);

    const item = Carousel[active];

    return (
        <section className="relative w-full h-[650px] overflow-hidden">

            {/* Background */}
            <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                className="object-cover transition-all duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center lg:-mt-32">

                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-6 z-30 w-16 h-16 rounded-full bg-[#b33020] hover:bg-[#962516] transition flex items-center justify-center border border-white/50"
                >
                    <Image
                        src={LeftArrow}
                        alt=""
                        className="w-7 h-7"
                    />
                </button>

                {/* Center Content */}

                <div
                    key={item.id}
                    className="max-w-5xl px-12 text-center animate-carouselText"
                >
                    <h1 className="text-white font-bold uppercase text-[44px]">
                        {item.title}
                    </h1>

                    <div className="w-full h-px bg-white/40 my-5" />

                    <p className={`text-white font-normal text-[34px] leading-tight ${item.id == 1 ? "px-32" : "px-32"} `}>
                        {item.description}
                    </p>
                </div>

                {/* Right Button */}

                <button
                    onClick={nextSlide}
                    className="absolute right-6 z-30 w-16 h-16 rounded-full bg-[#b33020] hover:bg-[#962516] transition flex items-center justify-center border border-white/50"
                >
                    <Image
                        src={RightArrow}
                        alt=""
                        className="w-7 h-7"
                    />
                </button>

            </div>
        </section>
    );
}