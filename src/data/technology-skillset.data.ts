import DesktopMobileCloud from '@/public/how-we-work/desktop_mobile_cloud.webp';
import EmbeddedImg from '@/public/how-we-work/embedded.webp';
import TestingImg from '@/public/how-we-work/testing.webp';
import SoftwareTools from '@/public/how-we-work/tools.webp';
import ProcessImg from '@/public/how-we-work/process.webp';

export const TECHNOLOGY_SKILLSET = [
    {
        id:1,
        title:"EMBEDDED FIRMWARE",
        img:EmbeddedImg,
        skills1:[
            'Bare Metal Program',
            'Linux/RTOS',
            'Serial Protocols',
            'Device Drivers',
            'Network Protocols',
            'Wireless Protocols (BLE, Wi-Fi, NFC, GSM)',
        ],
        skills2:[
            'Foolproof Design',
            'Cross-Platform Development',
            'Embedded IoT Protocols',
            'Embedded Wireless Security Protocols'
        ]
    },
    {
        id:2,
        img:DesktopMobileCloud,
        title:"DESKTOP/MOBILE/WEB/CLOUD",
        skills1:[
            'Delphi',
            'C#, .NET',
            'WPF/WCF',
            'VBnet',
            'HTML/Java',
            'NodeJS',
        ],
        skills2:[
            'AngularJS',
            'ReactJS',
            'Cyber Security',
            'Connected/Cloud Platform (Azure, AWS, GCP)'
        ]
    },
    {
        id:3,
        img:TestingImg,
        title:"Testing",
        skills1:[
            'Selenium',
            'Jenkins',
            'Cucumber',
            'Google Test',
            'Python',
            'Zephyr',
            'TestRail',
            'NUnit/JUnit',
            'VectorCast'
        ],
        skills2:[
            'LabVire',
            'API Testing Tools - Postman, SoapUI, RestAssured',
            'Hardware Simulation & Emulation',
            'Usability Testing for Embedded GUI',
            'Product Testing(Beta/Alpha)',
            'Mobile Platform Testing'
        ]
    },
    {
        id:4,
        img:SoftwareTools,
        title:"SOFTWARE TOOLS",
        skills1:[
            "Embedded IDE's (Keil, IAR, STM32CubeIDE, AtmelStudio, CCS, Eclipse, MpLab, HEW, etc.)",
            'Code Management Tools(GIT, GitHub, GitLab, BitBucket, CVS, SVN)',
            'Static Tools (PClint, SonarQube, ESLint, Cppcheck, CodeSonar, Klocwork)',
        ],
        skills2:[
            'Process Tools (JIRA, Trello, Teamwork, Jama,Miro)',
            'Performance Testing Tools (LoadRunner, AppLoader, Gatling, WebLOAD)',
        ]
    },
    {
        id:5,
        img:ProcessImg,
        title:"PROCESS",
        skills1:[
            'Waterfall',
            'Scrum',
            'Hybrid',
            'SAFe Agile',
            'V-Model',
            'Lean Software Development',
            'Kanban',
            'Feature-Driven Development(FDD)'
        ],
        skills2:[
            'Rapid Application Development(RAD)',
            'SixSigma',
            'DevOps',
            'Behaviour-Driven Development(BDD)',
            'Spiral Model'
        ]
    },
]