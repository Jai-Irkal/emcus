import CloudPlatform from "@/public/portfolio-assets/CloudPlatform.webp";
import ExitLoss from "@/public/portfolio-assets/ExitLossPreventionSystem.webp";
import Inventory from "@/public/portfolio-assets/InventoryRFIDSolutions.webp";
import POS from "@/public/portfolio-assets/POSEquipment.webp"

export const RETAIL_PORTFOLIO = [
    {
        id:1,
        imgSrc:ExitLoss,
        title:"EXIT AND LOSS PREVENTION SYSTEMS",
        data:[
            'Tradition RF EAS system',
            'RFID Exits',
            'Overhead RFID Exits',
            'People counters'
        ],
        details:"Exits can be either overhead systems or at exit /entry gate ways to provide physical deterrence to thefts and also real time alarms on shop-lifting events. They help to reduce Shrink and loss due to either sweet hearting or thefts. Exit systems connected to cloud can provide loss reports at different categories and times of the year."
    },
    {
        id:2,
        imgSrc:POS,
        title:"POINT-OF-SALE EQUIPMENT",
        data:[
            'POS Applications',
            'Self-checkouts Kiosks',
            'Payment gateways',
            'Mobile computing software',
            'Scanners & barcode readers'
        ],
        details:"POS equipment is central to modern retail and service businesses, ensuring smooth transactions, quick processing, and integration with various business management tools, whether through traditional fixed terminals or new mobile/cloud-based systems. While Labels could be AM or RF , regardless of the source of manufacturer, advanced detaching and deactivating controllers enable hassle-free checkout experience for both customers and employees"
    },
    {
        id:3,
        imgSrc:Inventory,
        title:"INVENTORY AND RFID SOLUTIONS",
        data:[
            'Transition door applications',
            'Fitting rooms applications',
            'Cycle count mobile computers',
            'Back room encoders'
        ],
        details:"Portable RFID cycle count solutions help streamline inventory management by allowing quick, on-the-go tag scans using mobile readers. These systems often integrate with custom apps on third-party devices, enabling real-time data synchronization and analytics. Transition door solutions further enhance visibility by automatically tracking tagged items moving between store areas, while trial room solutions improve retail insights by detecting which products customers interact with.In the back office, tag encoders and decoders support efficient tag commissioning and verification, ensuring accurate tracking across all operational zones within an RFID ecosystem"
    },
    {
        id:4,
        title:"CLOUD PLATFORM",
        imgSrc:CloudPlatform,
        data:[
            'Cloud Analytics & reporting software',
            'Store devices  management',
            'Third-party API integrations',
            'Inventory management applications'
        ],
        details:"In the retail domain, inventory and cycle count analytics provide accurate visibility into stock levels, supporting timely replenishment and reducing manual errors. Loss and shrink analytics complement this by detecting anomalies and preventing theft or misplacements. In-store device management ensures smooth operation of connected systems like sensors, scanners, and cameras. People counting and occupancy analytics add further intelligence by tracking customer flow and optimizing floor layouts. Food wastage monitoring platforms enhance sustainability by monitoring temperature, freshness, and expiry data. Together, these capabilities, powered by embedded edge solutions, enable real-time monitoring and smarter decision-making across retail environments"
    }
]