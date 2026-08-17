export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string; // Lucide icon name mapping
  benefits: string[];
  process: string[];
  image: string;
  gallery: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  location: string;
  industry: string;
  budget: string;
  completionDate: string;
  client: string;
  duration: string;
  status: 'Completed' | 'In Progress' | 'Maintenance Phase';
  servicesRendered: string[];
  equipmentUsed: string[];
  images: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  category: string;
  readTime: string;
  image: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // e.g., 'Full-time', 'Internship'
  description: string;
  requirements: string[];
  responsibilities: string[];
  deadline: string;
}

export interface Testimonial {
  id: string;
  client: string;
  company: string;
  review: string;
  rating: number;
  image: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: 'Brochure' | 'Profile' | 'Certificate' | 'Technical';
  fileSize: string;
  fileUrl: string;
}

export const mockServices: Service[] = [
  {
    slug: 'borehole-drilling',
    title: 'Borehole Drilling',
    shortDesc: 'Professional deep water borehole drilling, hydrogeological surveys, and casing installations for residential, commercial, and industrial sites.',
    longDesc: 'BMEL delivers precision borehole drilling engineering across all geologic formations in Nigeria. From initial geophysical surveys to drilling, casing, gravel packing, and pumping tests, we guarantee clean, reliable water production.',
    iconName: 'Wrench',
    benefits: [
      'Geophysical resistivity survey & aquifer mapping',
      'High-durability heavy-duty PVC & steel casing lines',
      'Pumping tests & water yield rate certification',
      'Long-term borehole rehabilitation & maintenance support'
    ],
    process: [
      'Hydrogeological Site Assessment & Permits',
      'Rig Setup & Precision Rotary/Percussion Drilling',
      'Casing, Screen & Gravel Pack Insertion',
      'Well Development & Yield Testing',
      'Submersible Pump Installation & Quality Sampling'
    ],
    image: `${import.meta.env.BASE_URL}images/subeb-borehole-steel-tank-1.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/subeb-borehole-steel-tank-2.jpg`
    ]
  },
  {
    slug: 'water-treatment',
    title: 'Water Treatment Systems',
    shortDesc: 'Design, installation, and commissioning of state-of-the-art industrial, commercial, and municipal water treatment plants.',
    longDesc: 'BMEL specializes in engineering advanced water treatment plants tailored to meet specific water quality standards. From reverse osmosis and ultrafiltration to iron removal and chemical dosing systems, we provide comprehensive clean water solutions.',
    iconName: 'Droplets',
    benefits: [
      'Removal of 99.9% of biological, heavy metal & chemical contaminants',
      'Compliance with WHO & local regulatory water standards',
      'Energy-efficient membrane technology lowering operating costs',
      'Custom filtration setups for estates, factories, and institutions'
    ],
    process: [
      'Raw Water Quality Analysis & Lab Testing',
      'Custom Treatment Process Design Blueprinting',
      'Filter Vessel, Piping & Dosing Skid Procurement',
      'On-site Mechanical Hookup & Electrical Integration',
      'System Testing, Water Sampling & Handover'
    ],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581094719234-8c8efd9df737?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'plumbing-installations',
    title: 'Plumbing Installations',
    shortDesc: 'Comprehensive commercial, residential, and industrial plumbing reticulation, drainage, and utility piping networks.',
    longDesc: 'Our certified plumbing engineers design and execute end-to-end piping networks for multi-storey commercial towers, residential estates, and industrial plants. We ensure leak-free, correctly pressure-balanced installations.',
    iconName: 'Settings',
    benefits: [
      'Precision pressure-balanced hot & cold water reticulation',
      'Heavy-gauge PPR, HDPE, stainless steel & PVC piping materials',
      'Full compliance with national building & plumbing codes',
      'Integrated backflow prevention & acoustic soundproof drainage'
    ],
    process: [
      'Architectural & Mechanical Plumbing Layout Design',
      'Pipe Sizing, Head-Loss & Hydraulic Pressure Calculations',
      'Riser, Manifold & Drainage Piping Execution',
      'Pressure Hydro-Testing & Leak Auditing',
      'Fixture Hookups & Final System Commissioning'
    ],
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    gallery: [
      `${import.meta.env.BASE_URL}images/hero-2.jpg`
    ]
  },
  {
    slug: 'firefighting-systems',
    title: 'Firefighting Systems',
    shortDesc: 'Complete fire protection engineering including sprinkler loops, fire hydrants, hose reels, and automated fire pump sets.',
    longDesc: 'We safeguard facilities with certified fire protection infrastructure. BMEL designs, installs, and tests automatic sprinkler networks, wet/dry riser hydrants, diesel & electric fire pump assemblies, and gas suppression systems.',
    iconName: 'Shield',
    benefits: [
      'NFPA-compliant fire sprinkler & hydrant system layouts',
      'High-reliability dual electric/diesel fire pump controllers',
      'Instant automatic pressure-sensing fire activation loops',
      'Comprehensive fire safety audits & routine maintenance'
    ],
    process: [
      'Building Hazard Assessment & Hydraulic Design',
      'Fire Pipe Network Prefabrication & Hangers Installation',
      'Fire Pump House Assembly & Jockey Pump Calibration',
      'Sprinkler Head & Hydrant Fitting Hookups',
      'Flow Testing, Pressure Validation & Fire Safety Certification'
    ],
    image: 'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542013936693-8848e574047a?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'swimming-pool-engineering',
    title: 'Swimming Pool Engineering',
    shortDesc: 'Turnkey hydraulic design, filtration systems, chemical dosing, and structural installation for luxury and commercial pools.',
    longDesc: 'BMEL engineers Olympic-sized, commercial, and residential swimming pools. From pool filtration pumps and sand filters to underwater LED lighting, balance tanks, and automated chemical dosing, we deliver pristine pool systems.',
    iconName: 'Award',
    benefits: [
      'Crystal-clear automated filtration & water balance systems',
      'Energy-efficient pool pumps & heat exchanger integration',
      'Custom infinity edge, overflow & skimmer hydraulic designs',
      'Durable pool chemical dosing & UV sanitization loops'
    ],
    process: [
      'Pool Hydraulics & Mechanical Blueprinting',
      'Reinforced Piping & Under-slab Conduit Laying',
      'Filter Skid, Pump & Chemical Dosing Equipment Setup',
      'Hydrostatic Pressure Testing & Liner/Tile Checks',
      'Water Balance Commissioning & Maintenance Training'
    ],
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'sewage-treatment-plants',
    title: 'Sewage Treatment Plants',
    shortDesc: 'Eco-friendly aerobic and anaerobic sewage treatment plants (STP), effluent treatment, and recycled water systems.',
    longDesc: 'We design and construct packaged sewage treatment plants for estates, hotels, hospitals, and industrial campuses. Our STPs convert raw wastewater into clean effluent suitable for irrigation and discharge.',
    iconName: 'Building2',
    benefits: [
      'Odorless, automated biological wastewater treatment',
      'Effluent discharge meeting Federal Ministry of Environment standards',
      'Recycled water output suitable for irrigation & flushing',
      'Compact packaged STP designs for constrained sites'
    ],
    process: [
      'Wastewater Inflow Volume & BOD/COD Load Analysis',
      'STP Civil/Mechanical Structural Design Layout',
      'Blower, Diffuser & Sludge Recirculation Pump Rigging',
      'Biological Seeding & Aeration Commissioning',
      'Effluent Lab Testing & Environmental Compliance Certification'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'irrigation-systems',
    title: 'Irrigation Systems',
    shortDesc: 'Automated drip, sprinkler, and center-pivot agricultural & landscape irrigation setups powered by electric or solar pumps.',
    longDesc: 'BMEL provides efficient agricultural and commercial landscape irrigation solutions. We build drip irrigation loops, pop-up turf sprinkler networks, and high-volume agricultural water transfer systems.',
    iconName: 'Sprout',
    benefits: [
      'Up to 50% water savings via precision drip & smart controllers',
      'Solar-powered pumping integration for remote agricultural sites',
      'Automated zone timers & weather-sensing irrigation valves',
      'Durable UV-resistant piping networks built for field longevity'
    ],
    process: [
      'Soil & Crop Water Demand Calculation',
      'Pump Head & Mainline Reticulation Hydraulics Design',
      'Trenching, Pipe Laying & Solenoid Valve Installation',
      'Emitter & Sprinkler Head Alignment Calibration',
      'Automated Controller Programming & Field Demo'
    ],
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'pumping-solutions',
    title: 'Pumping Solutions',
    shortDesc: 'High-performance pumping configurations for industrial fluid handling, municipal water distribution, and booster systems.',
    longDesc: 'We design and configure heavy-duty pumping assemblies including centrifugal, submersible, transfer, and pressure booster pumps equipped with intelligent VFD control panels for optimal efficiency.',
    iconName: 'Zap',
    benefits: [
      'High-durability pumps designed for continuous duty cycles',
      'Smart VFD control panels reducing energy usage by up to 40%',
      'Precision flow matching for high-head or high-volume applications',
      'Minimized mechanical wear via computerized pressure management'
    ],
    process: [
      'System Hydraulics & Flow Calculation',
      'Pump Specification & Quality Assembly Selection',
      'Control Panel Fabrication (VFD/PLC Integration)',
      'Foundation Casting & Laser Alignment',
      'Piping Hookup & System Calibration'
    ],
    image: `${import.meta.env.BASE_URL}images/hero-3.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/hero-4.jpg`
    ]
  },
  {
    slug: 'facility-maintenance',
    title: 'Facility Maintenance',
    shortDesc: 'Comprehensive preventive, predictive, and breakdown maintenance contracts for mechanical and plumbing infrastructure.',
    longDesc: 'Prevent costly facility downtime. BMEL offers routine mechanical maintenance, chemical refills for water plants, pump rewinding, pipe repairs, and 24/7 emergency response for commercial and industrial facilities.',
    iconName: 'HardHat',
    benefits: [
      '24/7 priority emergency response team availability',
      'Scheduled preventive inspections, seal replacements & servicing',
      'Detailed maintenance health logs & audit reports',
      'Extended asset operating lifespan & reduced unexpected breakdowns'
    ],
    process: [
      'Initial Infrastructure Audit & Equipment Inventory',
      'Custom Maintenance Schedule Definition',
      'Routine Field Servicing & Diagnostic Checks',
      'Part Replacements & System Recalibrations',
      'Audit Reporting & Log Approvals'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    ]
  }
];

export const mockProjects: Project[] = [
  {
    slug: 'fggs-jalingo-braithwaite-tank',
    title: 'Sectional Hot Pressed Steel Braithwaite Tank (FGGC / FGGS Jalingo)',
    description: 'Supply, engineering assembly, and commissioning of a sectional hot pressed steel Braithwaite water storage tank on an elevated steel tower with motorized booster pumping stations at FGGC / FGGS Jalingo.',
    location: 'FGGC Jalingo, Taraba State',
    industry: 'Government / Educational Infrastructure',
    budget: '₦165,000,000',
    completionDate: '2020',
    client: 'Federal Government Girls College / Science School (FGGC Jalingo)',
    duration: '6 Months',
    status: 'Completed',
    servicesRendered: ['Sectional Braithwaite Tank Assembly', 'Elevated Structural Steel Tower Engineering', 'Booster Pumping Station Installation', 'Water Reticulation & Valve Systems'],
    equipmentUsed: ['Sectional Hot-Pressed Galvanized Steel Panels (Braithwaite Design)', 'High-Capacity Booster Pumping Units', 'Structural Steel Lattice Tower & Safety Cage Ladder', 'External Level Indicator Gauge & Control Piping'],
    images: [
      '/images/fggs-jalingo-braithwaite-tank-1.jpg',
      '/images/fggs-jalingo-braithwaite-tank-2.jpg',
      '/images/fggs-jalingo-braithwaite-tank-3.jpg',
      '/images/fggs-jalingo-braithwaite-tank-4.jpg',
      '/images/fggs-jalingo-braithwaite-tank-5.jpg'
    ]
  },
  {
    slug: 'subeb-water-project-bayelsa',
    title: 'SUBEB School Water Scheme & Tank Stand',
    description: 'Provision of motorized borehole with multi-tier structural steel tank stand, storage tanks, and perimeter security fencing at Basic Junior Secondary School Odi under the S.U.B.E.B Water Project scheme.',
    location: 'Odi, Kolokuma/Opokuma LGA, Bayelsa State',
    industry: 'Government / Basic Education Infrastructure',
    budget: '₦180,000,000',
    completionDate: '2021',
    client: 'S.U.B.E.B (State Universal Basic Education Board)',
    duration: '12 Months',
    status: 'Completed',
    servicesRendered: ['Borehole Water Scheme', 'Structural Steel Tank Stand Towers', 'Water Storage & Reticulation', 'Perimeter Fencing & Infrastructure'],
    equipmentUsed: ['Galvanized Structural Steel Elevated Stand', 'High-Capacity Overhead Water Tanks', 'Submersible Borehole Pump System', 'Safety Ladder & Protective Enclosure'],
    images: [
      '/images/subeb-borehole-steel-tank-1.jpg',
      '/images/subeb-borehole-steel-tank-2.jpg'
    ]
  },
  {
    slug: 'ellah-lakes-fluid-storage-tanks',
    title: '20,000L Storage Tanks & Elevated Steel Stand',
    description: 'Foundation civil works, structural steel tank stand tower fabrication, and installation of 20,000 liters capacity fluid storage tanks at Ellah Lakes Farm Plc in Iguelaba, Edo State.',
    location: 'Iguelaba, Edo State',
    industry: 'Agriculture & Industrial Processing',
    budget: '₦145,000,000',
    completionDate: '2022',
    client: 'Ellah Lakes Farm Plc',
    duration: '5 Months',
    status: 'Completed',
    servicesRendered: ['Reinforced Concrete Foundation Engineering', 'Heavy Structural Steel Stand Fabrication', 'Fluid Storage Tank Installation', 'High-Level Pipe Reticulation & Valves'],
    equipmentUsed: ['20,000 Liters Capacity Industrial Fluid Tanks', 'Heavy I-Beam & Angle Iron Structural Tower', 'Reinforced Concrete Foundation Pedestals', 'Safety Handrails & Access Ladder Assembly'],
    images: [
      '/images/ellah-lakes-tank-installation.jpg',
      '/images/ellah-lakes-tank-stand-1.jpg',
      '/images/ellah-lakes-tank-stand-2.jpg'
    ]
  },
  {
    slug: 'ekiotenne-luxurious-bathroom',
    title: 'Luxurious Residential Bathroom Plumbing',
    description: 'Turnkey luxury bathroom plumbing design, high-grade sanitary ware installation, thermostatic shower fittings, and water pressure balancing for Mr. Didi Debamo Ekiotenne residence at Emeringi Road, Yenagoa, Bayelsa State.',
    location: 'Emeringi Road, Yenagoa, Bayelsa State',
    industry: 'Residential & Luxury Plumbing',
    budget: '₦45,000,000',
    completionDate: '2023',
    client: 'Mr. Didi Debamo Ekiotenne',
    duration: '3 Months',
    status: 'Completed',
    servicesRendered: ['Luxury Bathroom Plumbing', 'Sanitary Ware Installation', 'Thermostatic Shower Reticulation', 'Pressure Booster Balancing'],
    equipmentUsed: ['Thermostatic Rain Shower Mixer Systems', 'Concealed PEX Sanitary Manifolds', 'Wall-Hung Smart Water Closets & Basins', 'Tempered Glass Enclosure Hardware'],
    images: [
      '/videos/achievers-farm-water-treatment.mp4',
      '/images/achievers-farm-water-treatment.jpg'
    ]
  },
  {
    slug: 'achievers-farm-water-treatment',
    title: 'Industrial Water Treatment Plant',
    description: 'Design, engineering, installation, and commissioning of an industrial water treatment and purification plant featuring heavy-duty pressure vessels and multi-stage filtration system.',
    location: 'Achievers Farm, Igbogene, Yenagoa, Bayelsa State',
    industry: 'Agriculture & Industrial Processing',
    budget: '₦320,000,000',
    completionDate: '2024',
    client: 'Achievers Farm',
    duration: '8 Months',
    status: 'Completed',
    servicesRendered: ['Industrial Water Treatment', 'Water Purification & Filtration', 'Pressure Vessel Systems', 'Piping & Installation Services'],
    equipmentUsed: ['Theocracy Water Technology Filtration Units', 'Multi-Stage Heavy-Duty Pressure Vessels', 'Stainless Steel Storage Tanks', 'High-Pressure Valve Manifolds & Piping'],
    images: [
      '/images/achievers-farm-water-treatment.jpg'
    ]
  },
  {
    slug: 'ikeja-mall-chilled-water',
    title: 'Ikeja Commercial Complex Chilled Water Pipeline',
    description: 'Installation of high-pressure cooling loop pipe lines and secondary pump configurations for central air conditioning facilities.',
    location: 'Ikeja, Lagos',
    industry: 'Commercial Construction',
    budget: '₦190,000,000',
    completionDate: '2024',
    client: 'Ikeja Retail Developers Ltd.',
    duration: '6 Months',
    status: 'Completed',
    servicesRendered: ['Pumping Systems', 'Mechanical Design & Fabrication', 'Installation Services'],
    equipmentUsed: ['Pre-insulated Chilled Water Pipe segments', 'Double-Suction Centrifugal Pumps', 'Inline Balancing Valves', 'Automated BMS Integrator Panels'],
    images: [
      `${import.meta.env.BASE_URL}images/achievers-farm-water-treatment.jpg`
    ]
  }
];

export const mockBlog: BlogPost[] = [
  {
    slug: 'water-treatment-trends-nigeria',
    title: 'Modern Trends in Industrial Water Treatment in Nigeria',
    excerpt: 'Explore how sustainable reverse osmosis and membrane technologies are reducing operating costs and environmental impact in local manufacturing.',
    content: '<p>Water quality remains a critical factor for industrial processes in Nigeria. From beverage factories in Agbara to pharmaceutical complexes in Lagos, raw groundwater contains heavy mineralization and contaminants that damage process equipment. Traditional chemical-heavy filtration systems are being replaced by advanced Membrane bioreactors (MBR) and Reverse Osmosis (RO) solutions.</p><p>These modern technologies run with significantly lower energy draw, produce higher purity yields, and reduce sludge waste, satisfying both production quality checks and regulatory guidelines from the Federal Ministry of Environment.</p>',
    author: 'Engr. Olabisi Durojaiye (Head of Water Tech, BMEL)',
    publishedDate: 'June 18, 2026',
    category: 'Engineering Articles',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1581094719234-8c8efd9df737?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'choosing-right-sectional-tank',
    title: 'Steel vs. GRP Sectional Tanks: Which is Best for Your Site?',
    excerpt: 'A comprehensive comparative analysis of Hot-dip Galvanized Sectional Steel Tanks and GRP panel configurations for storage projects.',
    content: '<p>Sectional storage tanks are vital for high-volume water storage in housing estates, factories, and commercial hubs. When specifying panel tanks, developers are faced with choosing between Galvanized Steel and Glass Reinforced Plastic (GRP). While steel panel tanks provide superior structural durability and impact protection, GRP sectional tanks excel in corrosion resistance against chemically treated water or salty coastal atmospheres.</p><p>Understanding site conditions, chemical properties of stored fluids, and budget cycles will lead to the optimal choice for long-term service.</p>',
    author: 'Engr. Samuel Brown (Senior Projects Lead, BMEL)',
    publishedDate: 'May 12, 2026',
    category: 'Technical Guide',
    readTime: '7 min read',
    image: `${import.meta.env.BASE_URL}images/fggs-jalingo-braithwaite-tank-1.jpg`
  }
];

export const mockCareers: JobListing[] = [
  {
    id: 'mech-eng-001',
    title: 'Senior Mechanical Engineer (Piping & Fluid Systems)',
    department: 'Projects & Engineering',
    location: 'Lagos (with nationwide site visits)',
    type: 'Full-time',
    description: 'We are seeking a highly experienced mechanical engineer to lead designs and oversee field installations of custom piping systems, industrial pumping arrays, and municipal facilities.',
    requirements: [
      'B.Eng or M.Eng in Mechanical Engineering',
      'COREN Registration (Mandatory)',
      '6+ years of experience in process piping, pump station designs, and hydraulic calculations',
      'Proficiency with CAD and BIM design platforms (AutoCAD, Revit, Plant 3D)'
    ],
    responsibilities: [
      'Lead design development of process piping drawings and pump specifications',
      'Supervise on-site mechanical welding, rigging, and pump installations',
      'Coordinate safety compliance checks on high-pressure fluid loops',
      'Review structural tow calculations for elevated panel tank towers'
    ],
    deadline: 'July 30, 2026'
  },
  {
    id: 'intern-002',
    title: 'Graduate Intern (Water Treatment Technologies)',
    department: 'Water Technology Unit',
    location: 'Lagos Office',
    type: 'Internship',
    description: 'An exciting opportunity for fresh engineering graduates to gain hands-on field experience in process design, chemical dosing configurations, and water quality testing.',
    requirements: [
      'B.Eng or B.Tech in Chemical, Mechanical, or Water Resources Engineering (Minimum 2:1)',
      'Completed NYSC recently or awaiting deployment within Lagos State',
      'Basic understanding of fluid dynamics and water quality metrics',
      'Eager to learn and perform fieldwork on site'
    ],
    responsibilities: [
      'Assist senior engineers with raw water collection and chemical testing tasks',
      'Maintain daily logs of operating parameters on commissioning sites',
      'Support piping draftsman team with drawing documentation updates',
      'Attend vendor training sessions for membrane assembly and pump calibrations'
    ],
    deadline: 'July 15, 2026'
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: 't-1',
    client: 'Engineer Richard Afenfia',
    company: 'Structural & Mechanical Engineering Consultant',
    review: 'BMEL delivered the entire sectional panel tank array and main pump station for our new gated estate ahead of schedule. The quality of hot-dip steel coating and control panels is world-class. Their engineering precision is unmatched in the Nigerian market.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't-2',
    client: 'Architect Quincy Ntoko',
    company: 'Ntoko Design & Architecture Studio',
    review: 'Working with BMEL on multiple mixed-use developments has been outstanding. Their plumbing and firefighting systems installation is always precise, clean, and compliant with international codes. A truly dependable partner on every project.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't-3',
    client: 'Engineer Olusegun Shoyode',
    company: 'Project Director, Industrial Facilities',
    review: 'Our stainless steel utility loop retrofit was completed with minimal plant shutdown. BMEL\'s welding team is certified to ASME standards, and their documentation made compliance simple. Their borehole and water treatment solutions are top-tier.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't-4',
    client: 'Architect Alabede Adetayo',
    company: 'Principal Architect, AD Studios',
    review: 'BMEL transformed our hospital project with a complete water infrastructure overhaul — from borehole drilling to sewage treatment and swimming pool engineering. The team is professional, safety-conscious, and always delivers on time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80'
  }
];

export const mockDownloads: DownloadItem[] = [
  {
    id: 'd-profile',
    title: 'BMEL Corporate Profile 2026',
    category: 'Profile',
    fileSize: '4.8 MB',
    fileUrl: '#'
  },
  {
    id: 'd-capability',
    title: 'Mechanical Fabrication Capability Statement',
    category: 'Brochure',
    fileSize: '3.2 MB',
    fileUrl: '#'
  },
  {
    id: 'd-iso-certificate',
    title: 'ISO 9001:2015 Quality Standards Certificate',
    category: 'Certificate',
    fileSize: '1.5 MB',
    fileUrl: '#'
  },
  {
    id: 'd-pump-catalog',
    title: 'Industrial Pumping Systems Catalog & Services',
    category: 'Technical',
    fileSize: '8.4 MB',
    fileUrl: '#'
  }
];

