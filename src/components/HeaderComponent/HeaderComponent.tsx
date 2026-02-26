"use client";

import React, { useState } from "react";
import icon from "@/public/header/emcus-icon.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NAVIGATION } from "@/lib/navigation";

type HeaderProps = {
    active: string; // example: "HOME", "Blog", "Careers"
};

const HeaderComponent = ({ active }: HeaderProps) => {

    const router = useRouter();

    const routes: Record<string, string> = {
        HOME: "/",
        "WHAT WE DO": "/what-we-do",
        "HOW WE WORK": "/how-we-work",
        "OUR TEAM": "/our-team",
        BLOG: "/resources/blog",
        "ABOUT US": "/company/about-us",
        CAREERS: "/company/careers",
        "CONTACT US": "/company/contact-us",
    };

    const handleNavigation = (path: string) => {
        router.push(path);
        setIsOpen(false);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* HEADER */}
            <div
                className={`bg-white w-full fixed top-0 left-0 right-0 z-50 
  flex items-center justify-between px-4 md:px-6 lg:px-10 shadow-sm
  transition-all duration-300
  ${isScrolled ? "h-[60px] md:h-[70px]" : "h-[80px] md:h-[90px]"}`}
            >

                {/* Logo */}
                <Image
                    src={icon}
                    alt="Emcus Logo"
                    className={`transition-all duration-300 
${isScrolled
                            ? "w-[100px] md:w-[120px] lg:w-[140px]"
                            : "w-[130px] md:w-[160px] lg:w-[180px]"
                        }`}
                    priority
                />

                {/* Desktop / Tablet Menu */}
                <div className="hidden lg:flex items-center h-full">
                    {NAVIGATION.map((group) => {
                        if (group.title === "MAIN") {
                            return group.items.map((item) => (
                                <NavButton
                                    key={item.label}
                                    label={item.label}
                                    path={item.path}
                                    active={active}
                                    onNavigate={handleNavigation}
                                />
                            ));
                        }

                        return (
                            <DesktopDropdown
                                key={group.title}
                                title={group.title}
                                items={group.items}
                                active={active}
                                onNavigate={handleNavigation}
                            />
                        );
                    })}
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative"
                >
                    <span className={`absolute w-6 h-[2px] bg-black transition-all duration-300 
            ${isOpen ? "rotate-45" : "-translate-y-2"}`} />
                    <span className={`absolute w-6 h-[2px] bg-black transition-all duration-300 
            ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`absolute w-6 h-[2px] bg-black transition-all duration-300 
            ${isOpen ? "-rotate-45" : "translate-y-2"}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-[80px] left-1/2 -translate-x-1/2
  w-full bg-white z-40 shadow-xl
  transition-all duration-300 ease-in-out
  ${isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col py-4">
                    <MobileItem title="HOME" active={active} onNavigate={handleNavigation} />
                    <MobileItem title="WHAT WE DO" active={active} onNavigate={handleNavigation} />
                    <MobileItem title="HOW WE WORK" active={active} onNavigate={handleNavigation} />
                    <MobileItem title="OUR TEAM" active={active} onNavigate={handleNavigation} />

                    <MobileDropdown
                        title="RESOURCES"
                        isOpen={resourcesOpen}
                        toggle={() => setResourcesOpen(!resourcesOpen)}
                        items={["BLOG"]}
                        active={active}
                        onNavigate={handleNavigation}
                    />

                    <MobileDropdown
                        title="COMPANY"
                        isOpen={companyOpen}
                        toggle={() => setCompanyOpen(!companyOpen)}
                        items={["ABOUT US", "CAREERS", "CONTACT US"]}
                        active={active}
                        onNavigate={handleNavigation}
                    />
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default HeaderComponent;

/* ---------------- Desktop Components ---------------- */

const NavButton = ({
    label,
    path,
    active,
    onNavigate,
}: {
    label: string;
    path: string;
    active: string;
    onNavigate: (path: string) => void;
}) => (
    <button
        onClick={() => onNavigate(path)}
        className={`h-full px-8 lg:px-9 2xl:px-10 flex items-center font-bold text-[15px] transition-colors
        ${
            active === label
                ? "bg-[#d94536] text-white"
                : "text-[#322986] hover:bg-[#d94536] hover:text-white"
        }`}
    >
        {label}
    </button>
);



const DesktopDropdown = ({
    title,
    items,
    active,
    onNavigate,
}: {
    title: string;
    items: { label: string; path: string }[];
    active: string;
    onNavigate: (path: string) => void;
}) => {
    const isParentActive = items.some(i => i.label === active);

    return (
        <div className="relative group h-full">
            <button
                className={`h-full px-4 flex items-center font-bold text-[14px] gap-1 transition-colors
                ${
                    isParentActive
                        ? "bg-[#d94536] text-white"
                        : "text-[#322986] group-hover:bg-[#d94536] group-hover:text-white"
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
                        key={item.label}
                        onClick={() => onNavigate(item.path)}
                        className={`w-full text-left px-4 py-2 font-bold text-[14px] transition-colors
                        ${
                            active === item.label
                                ? "bg-[#d94536] text-white"
                                : "text-[#322986] hover:bg-[#d94536] hover:text-white"
                        }`}
                    >
                        {item.label}
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
    onNavigate,
}: {
    title: string;
    active: string;
    onNavigate: (key: string) => void;
}) => (
    <button
        onClick={() => onNavigate(title)}
        className={`block w-full text-left px-6 py-3 font-bold text-[14px] transition-colors
        ${active === title
                ? "bg-[#d94536] text-white"
                : "text-[#322986] hover:bg-[#d94536] hover:text-white"
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
    onNavigate,
}: {
    title: string;
    items: string[];
    isOpen: boolean;
    toggle: () => void;
    active: string;
    onNavigate: (key: string) => void;
}) => {
    const isParentActive = items.includes(active);

    return (
        <div>
            <button
                onClick={toggle}
                className={`w-full flex justify-between items-center px-6 py-3 font-bold text-[14px] transition-colors
                ${isParentActive
                        ? "bg-[#d94536] text-white"
                        : "text-[#322986] hover:bg-[#d94536] hover:text-white"
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
                        onClick={() => onNavigate(item)}
                        className={`block w-full text-left pl-10 pr-6 py-2 font-bold text-[14px] transition-colors
                        ${active === item
                                ? "bg-[#d94536] text-white"
                                : "text-[#322986] hover:bg-[#d94536] hover:text-white"
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
        className={`w-3 h-3 transition-transform duration-200 text-[#322986] ${rotate ? "rotate-180" : ""
            }`}
        viewBox="0 0 20 20"
        fill="#322986"
    >
        <path d="M5 7l5 6 5-6H5z" />
    </svg>
);
