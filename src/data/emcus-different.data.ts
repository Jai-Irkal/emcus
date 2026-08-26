import FireLifeSafety from "@/public/about-us/Fire.svg";
import ProductDevelopment from "@/public/about-us/ProductDevelopment.svg";
import DedicatedTeam from "@/public/about-us/DedicatedTeams.svg";
import StandardsCompliance from "@/public/about-us/StandardsCompliance.svg";
import FullStackEngineering from "@/public/about-us/FullStack.svg";
import OnTimeDelivery from "@/public/about-us/OnTimeDelivery.svg";
import CompleteVisibility from "@/public/about-us/CompleteVisibility.svg";
import QualityAsHabit from "@/public/about-us/Quality.svg";

export type Difference = {
    id:number,
    image:string,
    title:string,
    description:string
}

export const WHAT_MAKES_EMCUS_DIFFERENT: Difference[] = [
    {
        id:1,
        image:FireLifeSafety,
        title:"Fire & Life Safety Specialization",
        description:"Extensive experience in fire alarm, detection, suppression, & life safety systems."
    },
    {
        id:2,
        image:ProductDevelopment,
        title:"End-To-End Product Development",
        description:"From concept & architecture through certification, launch, & long-term sustenance."
    },
    {
        id:3,
        image:DedicatedTeam,
        title:"Dedicated R&D Teams",
        description:"Engineers who fit seamlessly into your team & development process."
    },
    {
        id:4,
        image:StandardsCompliance,
        title:"Standards & Compliance Focus",
        description:"Built for compliance from the outset, meeting UL, EN, FM, & regional standards."
    },
    {
        id:5,
        image:FullStackEngineering,
        title:"Full Stack Engineering",
        description:"A single engineering partner across embedded, cloud, mobile, & desktop."
    },
    {
        id:6,
        image:OnTimeDelivery,
        title:"Agile, On-Time Delivery",
        description:"Predictable delivery, with quality built into every sprint."
    },
    {
        id:7,
        image:CompleteVisibility,
        title:"Complete Visibility",
        description:"Clear communication, real-time visibility, & a partnership built for the long term."
    },
    {
        id:8,
        image:QualityAsHabit,
        title:"Quality As a Habit",
        description:"Consistent quality, driven by smart processes & continuous improvement."
    },
]