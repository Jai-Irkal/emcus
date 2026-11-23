export const OPEN_ROLES = [
    {
        id: 1,
        role: "Embedded Linux Engineer",
        location: "Bengaluru, India (on-site)",
        role_type: "Full Time",
        reportsTo: "Engineering Manager",
        experienceRequired: "3+",
        eduacation: "B.E. / B.Tech / Diploma (CS / IT / ECE)",
        roleSummary: "You will develop and maintain Embedded Linux software for industrial and connected products, working with hardware, firmware, cloud and QA teams to take products into production.",
        responsibilities: [
            "Develop and maintain Embedded Linux applications in C/C++.",
            "Customise Linux BSPs, kernel configurations and Device Trees.",
            "Develop and debug Linux device drivers (GPIO, UART, SPI, I2C, USB, Ethernet, CAN).",
            "Support board bring-up and hardware/software integration.",
            "Configure and customise Yocto / OpenEmbedded builds.",
            "Develop middleware and system services; integrate TCP/IP, MQTT, HTTP/HTTPS and SSH.",
            "Debug kernel issues, boot failures, memory leaks and driver problems.",
            "Support OTA updates, Linux security features, product validation and production releases.",
            "Take part in code reviews and Agile ceremonies, and write technical and release documentation."
        ],
        skills: [
            "3+ years in Embedded Linux software development.",
            "Strong Embedded C, with working knowledge of C++.",
            "Linux kernel, architecture and system programming.",
            "Linux device drivers for SPI, I2C, UART, GPIO, USB, Ethernet, CAN, PWM or ADC.",
            "Linux boot process, Device Tree and U-Boot.",
            "Git, GDB, JTAG and Linux debugging tools (strace, dmesg, perf).",
            "Basics of NOR/NAND flash, eMMC and Linux file systems."
        ],
        mustHave: [
            "Yocto Project, BitBake and OpenEmbedded.",
            "Linux BSP customisation and board bring-up."
        ],
        goodToHave: [
            "ARM Cortex-A processors such as NXP i.MX, STM32MP1, TI Sitara or Renesas RZ.",
            "Docker, Jenkins or CI/CD pipelines.",
            "AWS IoT or Azure IoT."
        ]
    },
    {
        id: 2,
        role: "Mechanical Design Engineer",
        location: "Bengaluru, India (on-site)",
        role_type: "Full Time",
        reportsTo: "Engineering Manager",
        experienceRequired: "2-5",
        eduacation: "B.E. / B.Tech / Diploma in Mechanical Engineering",
        roleSummary: "You will own the mechanical design of industrial electronic products, from enclosures and sheet-metal parts to PCB integration and full assemblies. You will take products from concept through simulation, prototype, tooling and certification to production, working with hardware, PCB, firmware, manufacturing and certification teams.",
        responsibilities: [
            "Design complete mechanical solutions: plastic enclosures, sheet-metal and machined parts, brackets, bezels, covers and assemblies.",
            "Create compact, good-looking, serviceable and cost-effective designs that meet engineering requirements.",
            "Build 3D CAD models and 2D manufacturing drawings with GD&T, tolerance stack-up, fits and clearances.",
            "Design injection-moulded parts (wall thickness, draft, ribs, bosses, snaps, undercuts, warpage and tooling feasibility).",
            "Design IP-rated enclosures (IP20 to IP65), including ventilation, gaskets and seals.",
            "Run or support structural, thermal, vibration and impact simulations (FEA).",
            "Plan PCB placement, mounting, connectors, displays, cable routing and service access with the hardware team.",
            "Select plastics, metals, gaskets and fasteners for strength, temperature, flammability and cost.",
            "Apply DFM/DFA, build prototypes (3D printing, CNC, sheet metal) and work with tooling and manufacturing vendors.",
            "Support validation and certification testing (EMI/EMC, IP, vibration, thermal) and maintain BOMs, drawings and reports."
        ],
        skills: [
            "2-5 years of hands-on mechanical product design, in any industry.",
            "3D CAD: Creo preferred; SolidWorks, Siemens NX, CATIA or Inventor also considered (3D, assemblies, surfacing and 2D drawings).",
            "Plastic injection-moulding design and material selection.",
            "Sheet-metal design and processes (bending, punching, welding, CNC, die casting, extrusion).",
            "IP-rated enclosure design to IEC 60529.",
            "Engineering materials, including flammability and UL 94.",
            "GD&T, tolerance analysis and DFM/DFA.",
            "Mechanical integration of electronics: PCB STEP models, connectors, antennas, batteries, harnesses and EMI/EMC."
        ],
        goodToHave: [
            "FEA and thermal simulation (ANSYS, SolidWorks Simulation, Creo Simulate or similar) and Moldflow.",
            "Industrial electronics, control panels, IoT gateways, fire & safety or BMS products.",
            "Strong concept and industrial design skills, with several concepts per brief.",
            "Experience taking products through certification and into volume production."
        ],
        mustHave: []
    },
    {
        id: 3,
        role: "Full Stack Software Developer",
        location: "Bengaluru, India",
        role_type: "Full Time",
        reportsTo: "Engineering Manager",
        experienceRequired: "6-8",
        eduacation: "Bachelor's degree in IT or equivalent experience",
        roleSummary: "You will design, build and support full stack applications (.NET and React/Next.js) for an industrial IoT product used in heavy industry. You will work with little supervision, take ownership of your modules, and use AI-assisted development tools day to day.",
        responsibilities: [
            "Design, write, test, review and document frontend and backend code.",
            "Estimate your own tasks and deliver on time.",
            "Work with product and engineering peers to capture requirements and improve designs.",
            "Provide escalated technical support and root-cause analysis when customer support needs deeper product knowledge.",
            "Guide and review the work of junior engineers when needed.",
            "Contribute to continuous improvement of team processes."
        ],
        skills: [
            "6-8 years building scalable applications with .NET and React / Next.js.",
            "Microservices architecture and current design patterns.",
            "Requirements analysis, architecture and implementation across frontend and backend.",
            "Unit, component, integration, system and end-to-end testing.",
            "SQL Server, plus a NoSQL / time-series database such as InfluxDB.",
            "Scrum, Azure DevOps and GitFlow.",
            "AI-assisted development (GitHub Copilot, agentic AI for code, tests and pipelines).",
            "Experience across the full product life cycle, from concept to production support."
        ],
        goodToHave: [
            "Mining or heavy-industry domain knowledge."
        ],
        mustHave: []
    },

    {
        id: 4,
        role: "Automation Test Engineer",
        location: "Bengaluru, India",
        reportsTo: "Engineering Manager",
        experienceRequired: "10–12",
        eduacation: "B.E./B.Tech (CS/IT/ECE) or equivalent",
        roleSummary:
            "You will own test automation hands-on, as an individual contributor, for an industrial IoT system, from sensors and edge gateways to the dashboards end users see. You will decide what to automate, build the framework and write the tests yourself.",
        responsibilities: [
            "Build and maintain the test automation framework, following best practices.",
            "Write test strategies, approaches and test plans for the product.",
            "Learn the product's components and how they integrate, from IoT device to user dashboard.",
            "Test each component in isolation (shift-left) and the full system end to end.",
            "Write test scenarios and test cases, and pick automation candidates based on repeatability.",
            "Set up hardware, software and simulation test environments for end-to-end verification.",
            "Validate system behaviour against software requirements."
        ],
        skills: [],
        mustHave: [
            "Manual and automation testing experience.",
            "C# (.NET) with Selenium and Playwright.",
            "MS Test, Page Object Model and data-driven testing.",
            "Azure DevOps, Git and DevOps pipelines.",
            "Basics of telematics hardware and sensors, IoT edge and gateways, device management, two-way communication and OTA upgrades."
        ],
        goodToHave: [
            "Hardware-in-the-loop (HIL)/dSPACE testing.",
            "GitHub Copilot or MS Copilot.",
            "Mining or heavy-industry domain knowledge."
        ]
    },

    {
        id: 5,
        role: "Hardware Design Engineer",
        location: "Bengaluru, India (on-site)",
        role_type: "Full Time",
        reportsTo: "Engineering Manager",
        experienceRequired: "5-8",
        eduacation: "B.E. / B.Tech / Diploma (Electrical / Electronics)",
        roleSummary: "You will own embedded hardware design end to end: schematics, component selection and libraries, then guiding PCB layout through fabrication with the PCB team. We are looking for a long-term professional who wants full ownership of product hardware, from concept to production.",
        responsibilities: [
            "Design analog and digital embedded hardware from concept to production.",
            "Architect designs around MPUs/MCUs such as NXP i.MX, TI Sitara, STM32 and Renesas.",
            "Develop robust schematics and select components for reliability, safety and compliance.",
            "Integrate high-speed and industrial interfaces: DDR, Ethernet, USB, CAN, RS-485, SPI, I2C, UART.",
            "Run circuit simulations and design validation in PSpice or LTSpice.",
            "Guide PCB layout: define stack-up and routing constraints, ensure signal and power integrity (SI/PI), and review and approve layouts.",
            "Lead board bring-up, debugging and root-cause analysis using oscilloscopes and logic analysers.",
            "Ensure DFM/DFT compliance and take designs through prototype (PCBA), validation and production.",
            "Work with firmware and mechanical teams on system integration, and take part in design reviews and risk analysis."
        ],
        skills: [
            "5-8 years in embedded hardware design.",
            "Strong analog design: power, filtering, protection and signal conditioning.",
            "Digital design with MCU/MPU-based systems: NXP i.MX / TI Sitara (MPU preferred), STM32 / Renesas.",
            "High-speed design: DDR memory, Ethernet, USB and other high-speed buses.",
            "Signal integrity (SI) and power integrity (PI).",
            "Guiding PCB design in KiCad, Mentor Graphics Xpedition, Cadence Allegro or Altium Designer.",
            "Simulation with PSpice or LTSpice.",
            "Hands-on debugging with oscilloscope, logic analyser and multimeter; board bring-up and validation.",
            "DFM, DFT and EMI/EMC design practices.",
            "Taking designs from schematic to PCB, PCBA, validation and production."
        ],
        mustHave: [],
        goodToHave: [
            "Strong understanding of hardware–firmware interaction and system integration.",
            "Experience with fire safety, BMS or industrial IoT products."
        ]
    },
    {
        id: 6,
        role: "PCB Design Engineer",
        location: "Bengaluru, India (on-site)",
        role_type: "Full Time",
        reportsTo: "Engineering Manager",
        experienceRequired: "2-3",
        eduacation: "B.E. / B.Tech (Electronics / Electrical / ECE or related)",
        roleSummary: "You will design PCB layouts in Altium Designer and/or Cadence Allegro, from component placement and routing to Gerber release, working closely with hardware, mechanical and manufacturing teams to build reliable boards.",
        responsibilities: [
            "Design PCB layouts in Altium Designer or Cadence Allegro.",
            "Place components and route boards to schematic and design requirements.",
            "Apply design constraints: clearance, trace width, spacing and routing rules.",
            "Work on multilayer PCBs and layer stack-up.",
            "Create and maintain footprints and component libraries.",
            "Run Design Rule Checks (DRC) and resolve layout issues.",
            "Generate Gerber files, drill files and manufacturing documentation.",
            "Review schematics and optimise layouts with hardware engineers.",
            "Support fabrication, assembly and prototypes, following DFM and DFT guidelines."
        ],
        skills: [
            "2-3 years of hands-on PCB layout design.",
            "Altium Designer and/or Cadence Allegro.",
            "The full PCB design flow, from schematic to Gerber release.",
            "PCB design constraints and design-rule management.",
            "Multilayer PCB design and layer stack-up.",
            "Component placement, routing and footprint/library creation.",
            "PCB fabrication and assembly processes.",
            "Good communication, problem-solving and teamwork."
        ],
        mustHave: [],
        goodToHave: [
            "Mentor Graphics Xpedition.",
            "High-speed PCB design: DDR, Ethernet, USB and differential-pair routing.",
            "Impedance-controlled routing and length matching.",
            "Basics of signal integrity (SI) and power integrity (PI).",
            "EMI/EMC design practices."
        ]
    },
];