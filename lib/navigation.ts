export type NavItem = {
    label: string;
    path: string;
};

export type NavGroup = {
    title: string;
    items: NavItem[];
};

export const NAVIGATION: NavGroup[] = [
    {
        title: "MAIN",
        items: [
            { label: "HOME", path: "/" },
            { label: "WHAT WE DO", path: "/what-we-do" },
            { label: "HOW WE WORK", path: "/how-we-work" },
            { label: "OUR TEAM", path: "/our-team" },
        ],
    },
    {
        title: "RESOURCES",
        items: [
            { label: "BLOG", path: "/resources/blog" },
        ],
    },
    {
        title: "COMPANY",
        items: [
            { label: "ABOUT US", path: "/company/about-us" },
            { label: "CAREERS", path: "/company/careers" },
            { label: "CONTACT US", path: "/company/contact-us" },
        ],
    },
];