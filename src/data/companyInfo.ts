import {
  CheckCircle2,
  Building2,
  HardHat,
  Users,
  ShieldCheck,
  Award,
  Clock,
  Users2,
  Ruler,
  Layers,
  HeartHandshake
} from "lucide-react";

export const COMPANY_INFO = {
  name: "Geofathom Construction",
  phone: "08036948904",
  displayPhone: "08036948904",
  email: "geofathom@gmail.com",
  address: `Sholadoye House, 
  No. 1 Filling Gona, Alagbado Area, Kabala West, Kaduna`,
  whatsappPhone: "2348036948904",
  whatsappMessage: "Hello Geofathom! I'm interested in your construction services.",
  socials: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  }
};

export const stats = [
  { label: "Projects Completed", value: "10+", icon: CheckCircle2 },
  { label: "Years Experience", value: "10+", icon: Building2 },
  { label: "Expert Workers", value: "150+", icon: HardHat },
  { label: "Happy Clients", value: "400+", icon: Users }
];

export const featuredServices = [
  {
    title: "Construction Engineering Services",
    description: "Comprehensive construction engineering solutions from project conception to completion.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Geotechnical Soil Investigation",
    description: "Understanding soil composition and behavior before construction to ensure long-term structural stability.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Humanitarian Engineering Services",
    description: "Engineering solutions designed to improve lives, strengthen communities, and support sustainable development.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
  }
];

export const values = [
  {
    title: "Safety First",
    description: "We prioritize the safety of our workers and clients above all else, maintaining strict compliance with all safety regulations.",
    icon: ShieldCheck
  },
  {
    title: "Quality Excellence",
    description: "We never compromise on the quality of materials or craftsmanship, ensuring every project stands the test of time.",
    icon: Award
  },
  {
    title: "Timely Delivery",
    description: "We understand the importance of deadlines and work tirelessly to ensure every project is completed on schedule.",
    icon: Clock
  },
  {
    title: "Client Collaboration",
    description: "We believe in transparent communication and working closely with our clients to bring their vision to life.",
    icon: Users2
  }
];

export const team = [
  {
    name: "Engr Dr Muniru O. Sholadoye",
    role: "Project Director",
    number:"08036948904",
    image: "/muniru-sholadoye.jpeg"
  },
  {
    name: "Engr Sanni Lawal",
    role: "Project manager",
    number:"08035362845",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Engr. Sanni Suleiman A.",
    role: "Team lead",
    number:"08188371729",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Geo. Fatai Kalejaiye",
    role: "Team manager",
    number:"08036668932",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  }
];

export const services = [
  {
    title: "Construction Engineering Services",
    description: "We provide comprehensive construction engineering solutions from project conception to completion. Consulting Phone No.: 08036948904",
    icon: Ruler,
    features: [
      "Structural Engineering Design",
      "Building Construction and Supervision",
      "Road and Highway Engineering",
      "Project Management",
      "Quality Assurance and Quality Control",
      "Construction Consultancy",
      "Rehabilitation and Maintenance of Structures",
      "Infrastructure Development"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Geotechnical Soil Investigation",
    description: "The soil is the bedrock of all Engineering infrastructure providing the platform for the foundation; therefore, understanding soil composition, constituent and behaviour before construction is critical to project success.",
    icon: Layers,
    features: [
      "Soil Sampling and Laboratory Testing",
      "Site Characterization and Investigation",
      "Foundation Design Recommendations",
      "Bearing Capacity Assessment",
      "Settlement Analysis",
      "Slope Stability Studies",
      "Groundwater Investigation",
      "Geophysical Surveys"
    ],
    whyItMatters: [
      "Minimizes construction risks",
      "Prevents structural failures",
      "Optimizes foundation design",
      "Reduces project costs",
      "Ensures long-term structural stability"
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Humanitarian Engineering Services",
    description: "We believe Engineering should improve lives and strengthen communities. In this aspect our areas of focus and concern includes, but not limited to;",
    icon: HeartHandshake,
    features: [
      "Water Supply and Sanitation Projects",
      "Rural Infrastructure Development",
      "Emergency Response Engineering",
      "Community-Based Engineering Solutions",
      "Sustainable Development Projects",
      "Renewable Energy Applications",
      "Disaster Risk Reduction Initiatives",
      "Capacity Building and Technical Training"
    ],
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
  }
];

export interface Project {
  title: string;
  category: "Geotechnical Soil Investigation" | "Construction Engineering Services" | "Humanitarian Engineering Services" | "Project Consultancy";
  image: string;
  location: string;
  year: string;
  client: string;
  contractor: string;
  role: string;
  date: string;
  duration: string;
  projectCost: string;
  lot: string;
}

export const projects: Project[] = [
  {
    title: "Construction of Police Station and Furnishing in Danguzuri",
    category: "Geotechnical Soil Investigation",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80",
    location: "Makarfi/Kudan Fed. Constituency, Kaduna State",
    year: "2025",
    client: "National Productivity Centre",
    contractor: "Abidine Ltd.",
    role: "Geotechnical Engineering and Consultancy Service",
    date: "16th June, 2025",
    duration: "6 Months",
    projectCost: "₦148,836,019.06 NGN",
    lot: "LOT W37"
  },
  {
    title: "Water Scheme Project and Lighting in Selected Communities",
    category: "Humanitarian Engineering Services",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
    location: "Yabo and Shagari Federal Constituency, Kano",
    year: "2025",
    client: "National Productivity Centre",
    contractor: "FIRSTMAN Industries Limited",
    role: "Geotechnical Engineering and Consultancy Service",
    date: "16th June, 2025",
    duration: "6 Months",
    projectCost: "₦245,794,884.30 NGN",
    lot: "LOT W40"
  },
  {
    title: "Road Construction at Bakin Ruwa",
    category: "Construction Engineering Services",
    image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=800&q=80",
    location: "Dala Federal Constituency, Kano State",
    year: "2025",
    client: "National Productivity Centre",
    contractor: "Integrated Advance Quest Engineering Ltd.",
    role: "Geotechnical Engineering and Consultancy Service",
    date: "16th June, 2025",
    duration: "6 Months",
    projectCost: "₦499,511,145.82 NGN",
    lot: "LOT PW48"
  },
  {
    title: "Construction of Road/Drainage from Gwale Veterinary to Hauren Wanki (2025)",
    category: "Construction Engineering Services",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
    location: "Gwale Federal Constituency, Kano State",
    year: "2025",
    client: "National Productivity Centre",
    contractor: "NABSON Technical Services Ltd.",
    role: "Geotechnical Engineering Service",
    date: "16th June, 2025",
    duration: "6 Months",
    projectCost: "Under Disclosure",
    lot: "LOT W64"
  },
  {
    title: "Supply of Solar/Powered Street Light",
    category: "Humanitarian Engineering Services",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    location: "Kauru Federal Constituency, Kaduna State",
    year: "2024",
    client: "National Productivity Centre",
    contractor: "Reliqua Energy Ltd.",
    role: "Geotechnical Engineering Service",
    date: "2nd July, 2024",
    duration: "4 Weeks",
    projectCost: "₦29,794,700.00 NGN",
    lot: "LOT WR01"
  },
  {
    title: "Construction of Road/Drainage from Gwale Veterinary to Hauren Wanki (2024)",
    category: "Construction Engineering Services",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    location: "Gwale Federal Constituency, Kano State",
    year: "2024",
    client: "National Productivity Centre",
    contractor: "NABSON Technical Services Ltd.",
    role: "Geotechnical Engineering and Consultancy Service",
    date: "16th June, 2024",
    duration: "6 Months",
    projectCost: "₦29,904,865.46 NGN",
    lot: "LOT W64"
  },
  {
    title: "Construction/Drainages of Road at Fafankpak Ward",
    category: "Project Consultancy",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    location: "Kagoro Kauru LGA, Kaduna State",
    year: "2024",
    client: "National Productivity Centre",
    contractor: "Ramax Resources Ltd.",
    role: "Project Consultant",
    date: "16th June, 2024",
    duration: "6 Months",
    projectCost: "₦99,765,320.18 NGN",
    lot: "LOT W68"
  },
  {
    title: "Road Construction from Sallari Gidan Inuwa Mai Mai to Babban Giji Layin Mai Unguwa Tela",
    category: "Project Consultancy",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    location: "Kano Central Senatorial District, Kano State",
    year: "2024",
    client: "National Productivity Centre",
    contractor: "NABSON Technical Services Ltd.",
    role: "Project Consultant",
    date: "2nd July, 2024",
    duration: "3 Months",
    projectCost: "₦299,731,211.09 NGN",
    lot: "LOT W151"
  }
];

