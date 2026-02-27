"use client";

import React, { useState } from "react";
import icon from "@/public/footer-assets/footer-logo.png";
import pin from "@/public/footer-assets/pin-icon.svg";
import phoneIcon from "@/public/footer-assets/phone.svg";
import mailIcon from "@/public/footer-assets/mail.svg";
import linkedinIcon from "@/public/footer-assets/linkedin.svg";
import { NAVIGATION } from "@/lib/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FooterComponent = () => {

    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <footer className="bg-[#29abe2] text-white py-16 px-6">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-12 items-start">

                {/* LEFT — ADDRESS */}
                <div>
                    <Image
                        src={icon}
                        alt="Location Pin"
                        className="w-40 object-contain"
                        priority
                    />
                    <div className="flex items-start gap-3 mt-6">
                        <Image
                            src={pin}
                            alt="Location Pin"
                            className="w-5 object-contain mt-1"
                            priority
                        />
                        <p className="text-[14px] leading-relaxed max-w-sm w-50">
                            Novel MSR Park, 93/9, Varthur Main Road, Munnekolalu, Marathalli,
                            Bengaluru 560037. INDIA
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">

                    {/* Quick Links (MAIN) */}
                    <div>
                        <h3 className="font-bold mb-4 text-[16px] text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {NAVIGATION.find(g => g.title === "MAIN")?.items.map((item) => (
                                <li
                                    key={item.label}
                                    onClick={() => handleNavigation(item.path)}
                                    className="cursor-pointer"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-bold mb-4 text-[16px] text-white">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            {NAVIGATION.find(g => g.title === "RESOURCES")?.items.map((item) => (
                                <li
                                    key={item.label}
                                    onClick={() => handleNavigation(item.path)}
                                    className="cursor-pointer"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="font-bold mb-4 text-[16px] text-white">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {NAVIGATION.find(g => g.title === "COMPANY")?.items.map((item) => (
                                <li
                                    key={item.label}
                                    onClick={() => handleNavigation(item.path)}
                                    className="cursor-pointer"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* RIGHT — CONTACT */}
                <div className="text-md">
                    <h3 className="font-bold mb-4 text-[16px] text-white">
                        Contact
                    </h3>

                    <ul className="space-y-4">

                        {/* Phone */}
                        <li className="flex items-center gap-3">
                            <Image
                                src={phoneIcon}
                                alt="Phone"
                                className="w-8 h-6 object-contain"
                            />
                            <span>+91 70226 16214</span>
                        </li>

                        {/* Email */}
                        <li className="flex items-center gap-3">
                            <Image
                                src={mailIcon}
                                alt="Email"
                                className="w-8 h-6 object-contain"
                            />
                            <span>info@emcus.com</span>
                        </li>

                        {/* LinkedIn */}
                        <li className="flex items-center gap-3">
                            <Image
                                src={linkedinIcon}
                                alt="LinkedIn"
                                className="w-8 h-8 object-contain"
                            />
                            <span className="hover:underline cursor-pointer">
                                LinkedIn
                            </span>
                        </li>

                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default FooterComponent;