import FireAlarmControlPanel from '@/public/portfolio-assets/FireAlarmControlPanel.svg'
import InitiatingDevices from '@/public/portfolio-assets/InitiatingDevices.svg'
import EarlyWarningDetection from '@/public/portfolio-assets/EarlyWarningDetection.svg'
import FireExtinguishingPanel from '@/public/portfolio-assets/FireEstinguishingPanel.svg'
import FireTestEquipment from '@/public/portfolio-assets/FireTestEquipment.svg'
import SimulationSoftware from '@/public/portfolio-assets/SimulationSoftware.svg'
import RegulatoryStandards from '@/public/portfolio-assets/RegulatoryStandards.svg'
import SoftwareTools from '@/public/portfolio-assets/SoftwareTools.svg'
import CloudPlatform from '@/public/portfolio-assets/CloudPlatform.svg'

export type PortfolioItem = {
    id: number;
    imgSrc: string;
    title: string;
    data: string[];
};

export const FIRE_SAFETY_DEVELOPMENT_PORTFOLIO: PortfolioItem[] = [
    {
        id:1,
        imgSrc:FireAlarmControlPanel,
        title:"Fire Alarm Control Panel",
        data:[
            'Single Loop to Multi-Loop Architectures',
            'Conventional & Addressable Panels',
            'Network Cards & Loop Protocols',
            'Third-Party Software Integration',
            'Regulatory Standards Compliance',
            'Voice Evacuation Systems'
        ]
    },
    {
        id:2,
        imgSrc:InitiatingDevices,
        title:"Initiating Devices",
        data:[
            'Smoke & Heat Detection Firmware',
            'Input/Output Module Drivers',
            'Notification Indicator Protocols',
            'Voice Activation Systems',
            'Beam & Aspiration Detectors',
            'UV & Addressable Devices'
        ]
    },
    {
        id:3,
        imgSrc:EarlyWarningDetection,
        title:"Early Warning Detection",
        data:[
            'Aspiration-Based Smoke Detectors',
            'Multi-Sensor Fusion Algorithms',
            'Advanced Pattern Recognition',
            'Edge AI for Pre-Alarm Conditions',
            'Low-Latency Alert Processing'
        ]
    },
    {
        id:4,
        imgSrc:FireExtinguishingPanel,
        title:"Fire Extinguishing Panel",
        data:[
            'Easy-Config Algorithm Engines',
            'Control of Extinguishing Systems',
            'Suppression Panel Firmware',
            'Agent Release Logic',
            'Abort/Hold/Manual Override'
        ]
    },
    {
        id:5,
        imgSrc:FireTestEquipment,
        title:"Fire Test Equipment",
        data:[
            'Panel Simulator Software',
            'Flame Detector Test Tools',
            'Fire Detector Test Instruments',
            'HIL-Based Validation Benches',
            'Site Commissioning Utilities'
        ]
    },
    {
        id:6,
        imgSrc:SimulationSoftware,
        title:"Simulation Software",
        data:[
            'Full Panel Simulation Environments',
            'Detector Behaviour Simulation',
            'Panel Power Consumption Modelling',
            'System-Level Scenario Replay',
            'Integration Test Harnesses',
            'Advanced Voice Evacuation Modeling'
        ]
    },
    {
        id:7,
        imgSrc:RegulatoryStandards,
        title:"Regulatory Standards",
        data:[
            'CAN, EN 54 Series',
            'UL 268/UL 864/UL 2572',
            'NFPA 72 & NFPA 2001',
            'AS 4271 (Australia/NZ)',
            'Pre-Certification Audit Support',
            'Type Approval Documentation'
        ]
    },
    {
        id:8,
        imgSrc:SoftwareTools,
        title:"Software Tools",
        data:[
            'PC-Based Configuration Suite',
            'Smartphone Field Apps',
            'Cloud Monitoring Software',
            'Notification & Alerting Software',
            'Firmware Programming Tools',
            'Diagnostic Utilities'
        ]
    },
    {
        id:9,
        imgSrc:CloudPlatform,
        title:"Cloud-Platform",
        data:[
            'Multi-Tenant SaaS Dashboards',
            'Predictive Maintenance Analytics',
            'Real-Time Event Streaming',
            'OTA Firmware Update Platform',
            'Role-Based Access Control',
            'Integration with BMS/SCADA'
        ]
    },
]