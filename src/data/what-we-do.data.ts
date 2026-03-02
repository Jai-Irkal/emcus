import CloudPlatform from "@/public/what-we-do/CloudPlatformSolutions.webp";
import ExitAndAlarming from "@/public/what-we-do/ExitAlarmingSystems.webp";
import PointOfSale from "@/public/what-we-do/POSSystems.webp";

export const WHAT_WE_DO = [
    {
        id:1,
        title:'RFID AND EXIT SYSTEMS',
        img:ExitAndAlarming,
        data:[
            'RFID gateways &  Smart Linux controllers',
            'RFID applications on third-party RFID readers',
            'EAS Exit controller module software',
            'Integrating third party people counters',
            'Alarming Light & sound modules',
            'EAS Configuration utilities(Windows & Web Applications)'
        ]
    },
    {
        id:2,
        title:'POINT-OF-SALE SYSTEMS',
        img:PointOfSale,
        data:[
            'Customer applications on third-party RFID readers',
            'POS station utility software',
            'Deactivators/Detachers  controller software',
            'Integrating third-party antennas',
            'Fixed scanners integration',
            'Portable scanners integration',
            'POS RFID readers (inventory management)',
            'POS Connectivity to Cloud Services'
        ]
    },
    {
        id:3,
        title:'CLOUD PLATFORM SOLUTIONS',
        img:CloudPlatform,
        data:[
            'In-store device health monitoring and OTA upgrades',
            'IoT Gateway to ingest in-store RFID data to cloud',
            'Shrink analytics on exit and POS data',
            'Videos and sensor-based occupancy analytics',
            'In-store labour management and predictive analytics'
        ]
    },
]