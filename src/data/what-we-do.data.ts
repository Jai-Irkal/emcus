import CloudPlatform from "@/public/what-we-do/CloudPlatformSolutions.webp";
import ExitAndAlarming from "@/public/what-we-do/ExitAlarmingSystems.webp";
import PointOfSale from "@/public/what-we-do/POSSystems.webp";

export const WHAT_WE_DO = [
    {
        id:1,
        title:'EXIT AND ALARMING SYSTEMS',
        img:ExitAndAlarming,
        data:[
            'RFID gateways based on Embedded Linux',
            'Customer applications on third-party RFID readers',
            'Metal detector modules',
            'Exit controller module software',
            'Integrating third-party people counters'
        ]
    },
    {
        id:2,
        title:'POINT-OF-SALE SYSTEMS',
        img:PointOfSale,
        data:[
            'Customer applications on third-party POS readers',
            'POS station utility software',
            'Deactivators controller software',
            'Detachers controller software',
            'Integrating third-party antennas',
            'Fixed scanners integration',
            'Portable scanners integration',
            'Overhead POS readers (inventory management)'
        ]
    },
    {
        id:3,
        title:'CLOUD PLATFORM SOLUTIONS',
        img:CloudPlatform,
        data:[
            'In-store device health monitoring and software upgrade automation',
            'Retail store food temperature monitoring platforms (IoT solutions)',
            'IoT Gateway to ingest in-store RFID data to cloud',
            'Shrink analytics on exit and POS data',
            'Videos and sensor-based occupancy analytics',
            'In-store labour management and predictive analytics'
        ]
    },
]