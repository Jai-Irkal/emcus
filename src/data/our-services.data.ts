import HardwareDesignServicesImg from "@/public/our-services/HardwareDesignServices.svg";
import EmbeddedFirmwareServicesImg from "@/public/our-services/EmbeddedFirmwareServices.svg";
import SoftwareDevelopmentServicesImg from "@/public/our-services/SoftwareDevelopmentServices.svg";
import MechanicalDesignServicesImg from "@/public/our-services/MechanicalDesignServices.svg";
import VerificationValidationServicesImg from "@/public/our-services/VerificationServices.svg";
import CertificationSupportImg from "@/public/our-services/Certification.svg";
import AutomationTestingServicesImg from "@/public/our-services/Automation.svg";
import ConnectivityIoTEngineeringServicesImg from "@/public/our-services/ConnectivityServices.svg";
import UIUXDesignServicesImg from "@/public/our-services/UXServices.svg";
import MechanicalIndustrialDesignServicesImg from "@/public/our-services/MechIDServices.svg";

export type ServiceItem = {
    id: number;
    title: string;
    image: string;
    leftItems: string[];
    rightItems: string[];
};

export const OUR_SERVICES: ServiceItem[] = [
    {
        id:1,
        title:"HARDWARE DESIGN SERVICES",
        image: HardwareDesignServicesImg,
        leftItems: [
            "System Architecture & Product Design",
            "Power Electronics Design",
            "High-Speed Interface Design",
            "RF & Wireless Hardware Design",
            "EMI/EMC Design Optimization",
            "Prototype Bring-up & Debugging",
            "Design for Testability (DFT)",
            "Design for Manufacturing (DFM)",
        ],
        rightItems: [
            "Analog & Digital Circuit Design",
            "Battery Charging & Power Management",
            "Signal Integrity & Power Integrity Analysis",
            "Schematic Capture & PCB Layout",
            "Component Engineering & Obsolescence Management",
            "Hardware Verification & Validation",
        ]
    },
    {
        id:2,
        title:"EMBEDDED FIRMWARE SERVICES",
        image: EmbeddedFirmwareServicesImg,
        leftItems: [
            "BSP & Device Driver Development",
            "RTOS/Bare-Metal Firmware Development",
            "Embedded Linux Development",
            "Bootloader & Firmware Upgrade Solutions",
            "Communication Protocol Development",
            "Security & Encryption Implementation"
        ],
        rightItems: [
            "Middleware Integration",
            "Performance Optimization & Debugging",
            "Unit Testing & Integration Testing",
            "Firmware Maintainence & Sustenance",
            "Functional Safety Implementation",
            "OTA/FOTA Solutions",
        ]
    },
    {
        id:3,
        title:"SOFTWARE DEVELOPMENT SERVICES (MOBILE/WEB/DESKTOP/CLOUD)",
        image: SoftwareDevelopmentServicesImg,
        leftItems: [
            "BSP & Device Driver Development",
            "RTOS/Bare-Metal Firmware Development",
            "Embedded Linux Development",
            "Bootloader & Firmware Upgrade Solutions",
            "Communication Protocol Development",
            "Security & Encryption Implementation"
        ],
        rightItems: [
            "Middleware Integration",
            "Performance Optimization & Debugging",
            "Unit Testing & Integration Testing",
            "Firmware Maintainence & Sustenance",
            "Functional Safety Implementation",
            "OTA/FOTA Solutions",
        ]
    },
    {
        id:4,
        title:"MECHANICAL DESIGN SERVICES",
        image: MechanicalDesignServicesImg,
        leftItems: [
            "Product Enclosure Design",
            "3D CAD Modeling",
            "Sheet metal and plastic enclosure design",
            "Prototype Development",
            "Industrial Design (ID)",
            "Tooling Support",
            "Thermal Analysis",
            "Structural Analysis",
            "Manufacturing Support"
        ],
        rightItems: [
            "Airflow Analysis",
            "FEA Simulation",
            "Design for Manufacturing (DFM)"
        ]
    },
    {
        id:5,
        title:"VERIFICATION & VALIDATION SERVICES (V&V)",
        image: VerificationValidationServicesImg,
        leftItems: [
            "Requirement-Based Testing",
            "Design Verification",
            "Functional Testing",
            "Integration Testing",
            "System Testing",
            "Regression Testing",
            "Performance Testing",
            "Traceability & Compliance Verification"
        ],
        rightItems: [
            "Reliability Testing",
            "Environmental Testing Support",
            "Mobile & Web Application Testing",
            "Embedded Product Testing",
            "Alpha, Beta & Production Validation Testing"
        ]
    },
    {
        id:6,
        title:"CERTIFICATION SUPPORT/ STANDARDS EXPERTISE",
        image: CertificationSupportImg,
        leftItems: [
            "UL864",
            "ULC-S527",
            "ULC-S559",
            "EN 54 Series",
            "AS 7240 Series",
            "NFPA 72"
        ],
        rightItems: [
        ]
    },
    {
        id:7,
        title:"AUTOMATION TESTING SERVICES",
        image: AutomationTestingServicesImg,
        leftItems: [
            "Test Automation Framework Development",
            "Automated Regression Testing",
            "API Automation Testing",
            "Continuous Integration Testing",
            "Testing script Development",
            "Automated Test Reporting",
            "Performance Automation",
            "UI Automation Testing"
        ],
        rightItems: [
            "Continuous Testing",
            "Test Data Management"
        ]
    },
    {
        id:8,
        title:"CONNECTIVITY & IoT ENGINEERING SERVICES",
        image: ConnectivityIoTEngineeringServicesImg,
        leftItems: [
            "IoT Gateway Development",
            "Edge Computing Solutions",
            "BLE Solutions",
            "Wi-Fi Solutions",
            "GSM/LTE/Cellular Solutions",
            "NFC Solutions",
            "Ethernet Connectivity",
            "RS232/RS485 Connectivity",
            "MQTT/HTTPS/REST Integration"
        ],
        rightItems: [
            "Cloud Connectivity & Device Management",
            "Remote Monitoring & Diagnostics",
            "OTA/FOTA Update Solutions"
        ]
    },
    {
        id:9,
        title:"UI/UX DESIGN SERVICES (MOBILE/WEB/DESKTOP/EMBEDDED UI)",
        image: UIUXDesignServicesImg,
        leftItems: [
            "User Experience Research",
            "User Interface Design",
            "Information Architecture",
            "Wireframing",
            "Interactive Prototyping",
            "Design Systems",
            "Dashboard Design",
            "Mobile App UI Design",
            "Web Application UI Design"
        ],
        rightItems: [
            "Embedded GUI Design",
            "Human Machine Interface (HMI) Design"
        ]
    },
    {
        id:10,
        title:"MECHANICAL INDUSTRIAL DESIGN (ID) SERVICES",
        image: MechanicalIndustrialDesignServicesImg,
        leftItems: [
            "Product Styling",
            "Concept Development",
            "Product Visualization",
            "Ergonomics Engineering",
            "Human Factors Design",
            "Product Aesthetics",
            "CMF (Color, Material & Finish)",
            "Concept Sketching"
        ],
        rightItems: [
            "Design Language Development",
            "Product Branding Integration"
        ]
    },
]