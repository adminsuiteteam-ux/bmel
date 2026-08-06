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
    slug: 'water-treatment',
    title: 'Water Treatment Plants',
    shortDesc: 'Design, installation, and commissioning of state-of-the-art industrial and municipal water treatment facilities.',
    longDesc: 'BMEL specializes in engineering advanced water treatment plants tailored to meet specific industrial and municipal standards. From reverse osmosis and ultrafiltration to sewage treatment and chemical dosing systems, we provide comprehensive clean water solutions across Nigeria.',
    iconName: 'Droplets',
    benefits: [
      'Removal of 99.9% of biological and chemical contaminants',
      'Compliance with Federal Ministry of Environment standards',
      'Energy-efficient membrane technology that lowers operation costs',
      'Scalable designs suitable for manufacturing, estates, and municipalities'
    ],
    process: [
      'Raw Water Quality Analysis & Feasibility Study',
      'Process Design & Engineering Blueprinting',
      'Equipment Procurement & Panel Fabrication',
      'On-site Installation, Piping & Integration',
      'Testing, Commissioning & Operator Training'
    ],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581094719234-8c8efd9df737?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'pumping-systems',
    title: 'Industrial Pumping Systems',
    shortDesc: 'High-performance pumping configurations for industrial fluid handling, municipal water distribution, and agricultural irrigation.',
    longDesc: 'We design and configure heavy-duty pumping assemblies, including centrifugal, submersible, and booster pumps. Our systems feature intelligent control panels (VFDs) for optimal flow rates and energy efficiency.',
    iconName: 'Settings',
    benefits: [
      'High-durability components designed for continuous duty cycles',
      'Smart VFD control panels reducing energy spikes by up to 40%',
      'Precision flow matches for high-viscosity or corrosive industrial fluids',
      'Minimized mechanical wear via computerized pressure management'
    ],
    process: [
      'System Hydraulics & Head Loss Calculation',
      'Pump Specification & Selection (SMC Pumps Africa, Heavy-Duty Centrifugal Assemblies)',
      'Control Panel Assembly (PLC/VFD Integration)',
      'Foundation Casting & Pump Alignment',
      'Piping Hookups & System Calibration'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'panel-tanks',
    title: 'Steel Panel Tanks',
    shortDesc: 'Premium sectional panel tank fabrication and installation for large-volume water and chemical storage solutions.',
    longDesc: 'Our structural sectional tanks are engineered in galvanized pressed steel, stainless steel, or glass-reinforced plastic (GRP). We build elevated and ground-level storage solutions designed to withstand harsh atmospheric conditions.',
    iconName: 'Building2',
    benefits: [
      'Modular panel design allowing easy transportation to remote areas',
      'High corrosion resistance with hot-dip galvanized or GRP finishes',
      'Engineered structural framing matching international wind loading standards',
      'Leak-proof sealing using specialized heavy-duty synthetic rubber gaskets'
    ],
    process: [
      'Volume Analysis & Space Optimization Engineering',
      'Sectional Panel Manufacture & Quality Control Testing',
      'Elevated Support Tower Design & Foundation Cast Layout',
      'Bolt-and-Nut Assembly & Gasket Lining Installation',
      'Hydrostatic Leak Testing & Disinfection Flushing'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'mechanical-fabrication',
    title: 'Mechanical Design & Fabrication',
    shortDesc: 'Custom industrial piping, structural steel assemblies, pressure vessels, and mechanical structural configurations.',
    longDesc: 'BMEL provides top-tier metal fabrication services. Utilizing specialized welding (TIG/MIG) and advanced CNC tools, we build custom process piping spools, machine frames, steel gantries, and industrial storage vessels.',
    iconName: 'Wrench',
    benefits: [
      'ASME Section IX certified welding quality',
      'Custom configurations using precision CAD/BIM model files',
      'Non-destructive testing (NDT) available for high-pressure systems',
      'Heavy-gauge materials offering exceptional mechanical life cycles'
    ],
    process: [
      '3D CAD Modeling & Engineering Stress Simulations',
      'Material Selection & Certified Lab Testing Verification',
      'Cutting, Bending, and Precise Jig Alignment Assembly',
      'Certified Weld Execution (MIG, TIG, Shielded Arc)',
      'Surface Treating (Sandblasting, Epoxies, Hot-dip Galvanization)'
    ],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'installation',
    title: 'Equipment Installation Services',
    shortDesc: 'Rigging, positioning, alignment, and hookup of heavy industrial plant and utility machinery.',
    longDesc: 'From boilers and water systems to industrial process loops, our mechanical engineers handle complex installations with structural alignment precision. We minimize factory downtime during retrofits.',
    iconName: 'HardHat',
    benefits: [
      'Laser-aligned pump/motor couplings to minimize operational wear',
      'Strict adherence to OSHA and local safety regulations',
      'Seamless structural integration into existing processing piping networks',
      'Dedicated rigging experts for high-tonnage heavy machinery handling'
    ],
    process: [
      'Rigging Studies & Equipment Delivery Access Mapping',
      'Plinth Leveling & Foundation Anchor Bolt Alignment Check',
      'Heavy Lifting & Precision Mechanical Leveling Set',
      'Piping & Electrical Hookups Integration',
      'Cold & Hot Commissioning Dry Runs'
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'maintenance',
    title: 'Operations & Maintenance Services',
    shortDesc: 'Preventive, predictive, and emergency breakdown maintenance contracts for industrial engineering systems.',
    longDesc: 'Minimize costly factory shut-downs. We offer comprehensive mechanical service agreements, chemical refills for water plants, seal replacements, pump rewinding, and instrumentation recalibration.',
    iconName: 'Factory',
    benefits: [
      '24/7 priority emergency response service team availability',
      'Regular oil changes, seal replacements, and cleaning schedules',
      'Detailed maintenance audit reporting & health trend logs',
      'Extended machinery operating lifespan with minor repairs before failure'
    ],
    process: [
      'System Audit & Equipment Documentation Review',
      'Customized Preventive Maintenance Checklist Definition',
      'Routine Field Testing & Vibration Diagnostics Inspections',
      'Consumables Replacement & Mechanical Refits Execution',
      'Post-Maintenance Performance Auditing & Log Approvals'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    ]
  }
];

export const mockProjects: Project[] = [
  {
    slug: 'lekki-municipal-water',
    title: 'Lekki Municipal Water Plant',
    description: 'Design and construction of a high-capacity water treatment and storage plant for a major residential development zone in Lekki, Lagos.',
    location: 'Lekki Phase 1, Lagos',
    industry: 'Government / Infrastructure',
    budget: '₦450,000,000',
    completionDate: 'November 2025',
    client: 'Lagos State Development & Property Corporation',
    duration: '14 Months',
    status: 'Completed',
    servicesRendered: ['Water Treatment Plants', 'Pumping Systems', 'Steel Panel Tanks', 'Installation Services'],
    equipmentUsed: ['Reverse Osmosis Membranes', 'Industrial Heavy Booster Pumps (SMC Pumps Africa)', 'Hot-dip Sectional Galvanized Steel Tanks', 'Variable Frequency Drives (VFD) Control Cabinets'],
    images: [
      'https://images.unsplash.com/photo-1581094719234-8c8efd9df737?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'beverage-process-piping',
    title: 'Industrial Beverage Process Piping',
    description: 'Stainless steel process piping fabrication and sanitary equipment integration for a multinational food and beverage factory in Ogun State.',
    location: 'Agbara Industrial Estate, Ogun State',
    industry: 'Manufacturing',
    budget: '₦280,000,000',
    completionDate: 'April 2026',
    client: 'NigBel Food & Beverage Co.',
    duration: '8 Months',
    status: 'Completed',
    servicesRendered: ['Mechanical Design & Fabrication', 'Installation Services', 'Maintenance Services'],
    equipmentUsed: ['Food-Grade Stainless Steel Piping (316L)', 'TIG Orbital Welding Stations', 'Pneumatic Flow Actuation Valves', 'Sanitary Positive Displacement Pumps'],
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    slug: 'port-harcourt-terminal-tank',
    title: 'Port Harcourt Terminal Fuel Panel Tanks',
    description: 'Fabrication, structural towers construction, and leak-proof sealing of specialized storage tanks for industrial fluid management.',
    location: 'Trans-Amadi, Port Harcourt, Rivers State',
    industry: 'Oil & Gas',
    budget: '₦620,000,000',
    completionDate: 'June 2026',
    client: 'Atlantic Petrochemicals Ltd.',
    duration: '18 Months',
    status: 'Completed',
    servicesRendered: ['Steel Panel Tanks', 'Mechanical Design & Fabrication', 'Installation Services'],
    equipmentUsed: ['Structural Steel Elevated Towers', 'Sectional GRP Storage Panels', 'Explosion-Proof Pumping Units', 'Automated Tank Level Sensors'],
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    slug: 'ikeja-mall-chilled-water',
    title: 'Ikeja Commercial Complex Chilled Water Pipeline',
    description: 'Installation of high-pressure cooling loop pipe lines and secondary pump configurations for central air conditioning facilities.',
    location: 'Ikeja, Lagos',
    industry: 'Commercial Construction',
    budget: '₦190,000,000',
    completionDate: 'Ongoing',
    client: 'Ikeja Retail Developers Ltd.',
    duration: '6 Months (Est)',
    status: 'In Progress',
    servicesRendered: ['Pumping Systems', 'Mechanical Design & Fabrication', 'Installation Services'],
    equipmentUsed: ['Pre-insulated Chilled Water Pipe segments', 'Double-Suction Centrifugal Pumps', 'Inline Balancing Valves', 'Automated BMS Integrator Panels'],
    images: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
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
    client: 'Dr. Kunle Adeyemi',
    company: 'Lagos Estate Developers Group',
    review: 'BMEL delivered the entire sectional panel tank array and main pump station for our new gated estate ahead of schedule. The quality of hot-dip steel coating and control panels is world-class.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't-2',
    client: 'Engr. Nnamdi Eze',
    company: 'Goldcrest Breweries Ltd.',
    review: 'Our stainless steel utility loop retrofit was completed with minimal plant shutdown. Their welding team was certified to ASME standards, and their documentation made compliance simple.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
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

