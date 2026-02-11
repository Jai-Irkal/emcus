"use client";

import React, { useState } from "react";
import icon from "@/public/header/emcus-icon.png";
import Image from "next/image";

type HeaderProps = {
    active: string; // example: "HOME", "Blog", "Careers"
};

const HeaderComponent = ({ active }: HeaderProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);

    return (
        <>
            {/* HEADER */}
            <div className="bg-white w-full h-[90px] fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6">

                {/* Logo */}
                <Image
                    src={icon}
                    alt="Emcus Logo"
                    className="w-[180px] md:w-[240px] lg:ml-6"
                />

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-0 h-full">
                    <NavButton title="HOME" active={active} />
                    <NavButton title="WHAT WE DO" active={active} />
                    <NavButton title="HOW WE WORK" active={active} />
                    <NavButton title="OUR TEAM" active={active} />

                    <DesktopDropdown
                        title="RESOURCES"
                        items={["Blog"]}
                        active={active}
                    />

                    <DesktopDropdown
                        title="COMPANY"
                        items={["About Us", "Careers", "Contact Us"]}
                        active={active}
                    />
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1"
                >
                    <span className={`w-6 h-[2px] bg-black transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-6 h-[2px] bg-black transition-all ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`w-6 h-[2px] bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-[90px] left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden z-40
        ${isOpen ? "max-h-[600px] py-4" : "max-h-0"}`}
            >
                <MobileItem title="HOME" active={active}/>
                <MobileItem title="WHAT WE DO" active={active}/>
                <MobileItem title="HOW WE WORK" active={active}/>
                <MobileItem title="OUR TEAM" active={active}/>

                {/* Resources Dropdown */}
                <MobileDropdown
                    title="RESOURCES"
                    isOpen={resourcesOpen}
                    toggle={() => setResourcesOpen(!resourcesOpen)}
                    items={["Blog"]}
                    active={active}
                />

                {/* Company Dropdown */}
                <MobileDropdown
                    title="COMPANY"
                    isOpen={companyOpen}
                    toggle={() => setCompanyOpen(!companyOpen)}
                    items={["About Us", "Careers", "Contact Us"]}
                    active={active}
                />
            </div>
        </>
    );
};

export default HeaderComponent;

/* ---------------- Desktop Components ---------------- */

const NavButton = ({
    title,
    active,
}: {
    title: string;
    active: string;
}) => (
    <button
        className={`h-full px-4 flex items-center font-bold text-[14px] transition-colors
    ${active === title
                ? "bg-[#FF0000] text-white"
                : "text-[#322986] hover:bg-[#FF0000] hover:text-white"
            }`}
    >
        {title}
    </button>
);


const DesktopDropdown = ({
    title,
    items,
    active,
}: {
    title: string;
    items: string[];
    active: string;
}) => {
    const isParentActive = items.includes(active);

    return (
        <div className="relative group h-full">
            <button
                className={`h-full px-4 flex items-center font-bold text-[14px] gap-1 transition-colors
        ${isParentActive
                        ? "bg-[#FF0000] text-white"
                        : "text-[#322986] group-hover:bg-[#FF0000] group-hover:text-white"
                    }`}
            >
                {title}
                <Chevron />
            </button>

            <div className="absolute left-0 top-full w-48 bg-white shadow-lg opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible 
        transition-all duration-200 z-50">
                {items.map((item) => (
                    <button
                        key={item}
                        className={`w-full text-left px-4 py-2 font-bold text-[14px] transition-colors
            ${active === item
                                ? "bg-[#FF0000] text-white"
                                : "text-[#322986] hover:bg-[#FF0000] hover:text-white"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};


/* ---------------- Mobile Components ---------------- */

const MobileItem = ({
    title,
    active,
}: {
    title: string;
    active: string;
}) => (
    <button
        className={`block w-full text-left px-6 py-3 font-bold text-[14px] transition-colors
    ${active === title
                ? "bg-[#FF0000] text-white"
                : "text-[#322986] hover:bg-[#FF0000] hover:text-white"
            }`}
    >
        {title}
    </button>
);


const MobileDropdown = ({
    title,
    items,
    isOpen,
    toggle,
    active,
}: {
    title: string;
    items: string[];
    isOpen: boolean;
    toggle: () => void;
    active: string;
}) => {
    const isParentActive = items.includes(active);

    return (
        <div>
            <button
                onClick={toggle}
                className={`w-full flex justify-between items-center px-6 py-3 font-bold text-[14px] transition-colors
        ${isParentActive
                        ? "bg-[#FF0000] text-white"
                        : "text-[#322986] hover:bg-[#FF0000] hover:text-white"
                    }`}
            >
                {title}
                <Chevron rotate={isOpen} />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"
                    }`}
            >
                {items.map((item) => (
                    <button
                        key={item}
                        className={`block w-full text-left pl-10 pr-6 py-2 font-bold text-[14px] transition-colors
            ${active === item
                                ? "bg-[#FF0000] text-white"
                                : "text-[#322986] hover:bg-[#FF0000] hover:text-white"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};


/* ---------------- Chevron ---------------- */

const Chevron = ({ rotate = false }: { rotate?: boolean }) => (
    <svg
        className={`w-3 h-3 transition-transform duration-200 ${rotate ? "rotate-180" : ""
            }`}
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path d="M5 7l5 6 5-6H5z" />
    </svg>
);
