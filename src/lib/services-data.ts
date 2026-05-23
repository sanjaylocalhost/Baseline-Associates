export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  applications: string[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "land-survey-bangalore",
    title: "Land Survey",
    shortTitle: "Land Survey",
    icon: "📐",
    tagline: "Accurate boundary demarcation for your property",
    description:
      "Professional land survey services in Bangalore for residential, commercial, and agricultural properties.",
    longDescription:
      "Our certified land surveyors provide precise boundary demarcation, property measurement, and legal documentation for all types of land in Bangalore and Karnataka. Using advanced total station equipment, we ensure accuracy down to millimeters.",
    features: [
      "Boundary demarcation & marking",
      "Property measurement & area calculation",
      "Subdivision survey",
      "Revenue / Patta survey",
      "Sketch preparation for registration",
      "EC & khata alignment verification",
    ],
    applications: [
      "Residential plots",
      "Agricultural land",
      "Commercial properties",
      "Government projects",
    ],
    keywords: [
      "land survey Bangalore",
      "land surveyor Bangalore",
      "boundary survey Bengaluru",
      "property survey Bangalore",
    ],
    metaTitle: "Land Survey Services in Bangalore | Baseline Associates",
    metaDescription:
      "Professional land survey in Bangalore — boundary demarcation, property measurement, and legal sketch preparation. Call 9448408174 for a quote.",
  },
  {
    slug: "construction-layout-bangalore",
    title: "Construction Layout",
    shortTitle: "Construction Layout",
    icon: "🏗️",
    tagline: "Precise setting-out for every structure",
    description:
      "Construction layout and setting-out services ensuring your building aligns perfectly with approved plans.",
    longDescription:
      "Accurate construction layout is the foundation of every successful build. Our team uses total station and DGPS technology to set out building lines, column positions, road alignments, and infrastructure with sub-centimetre precision.",
    features: [
      "Building line & column marking",
      "Road & highway alignment",
      "Drainage & utility marking",
      "As-built survey documentation",
      "Level benchmarking",
      "Foundation layout",
    ],
    applications: [
      "Residential buildings",
      "Commercial complexes",
      "Road projects",
      "Infrastructure works",
    ],
    keywords: [
      "construction layout Bangalore",
      "building layout survey",
      "setting out survey Bangalore",
      "construction survey Bengaluru",
    ],
    metaTitle: "Construction Layout Survey in Bangalore | Baseline Associates",
    metaDescription:
      "Expert construction layout and setting-out services in Bangalore. Precise building line marking, column layout, and road alignment. Call 9448408174.",
  },
  {
    slug: "topographic-survey-bangalore",
    title: "Topographic Survey",
    shortTitle: "Topographic Survey",
    icon: "🗺️",
    tagline: "Detailed terrain mapping for planning & design",
    description:
      "High-accuracy topographic surveys capturing terrain details, contours, and natural features for engineering design.",
    longDescription:
      "Our topographic surveys produce detailed maps showing elevation, contours, natural features, and existing structures. Essential for civil engineering design, drainage planning, and site development, our surveys use drone + total station combination for maximum accuracy.",
    features: [
      "Contour mapping (0.5m to 2m intervals)",
      "Digital terrain model (DTM) generation",
      "AutoCAD / GIS deliverables",
      "Cross-section profiles",
      "Volume calculation",
      "Flood zone analysis support",
    ],
    applications: [
      "Urban planning",
      "Road design",
      "Dam & irrigation projects",
      "Building site planning",
    ],
    keywords: [
      "topographic survey Bangalore",
      "topo survey Bengaluru",
      "contour mapping Bangalore",
      "terrain survey Karnataka",
    ],
    metaTitle: "Topographic Survey in Bangalore | Baseline Associates",
    metaDescription:
      "Professional topographic survey and contour mapping in Bangalore. DTM, AutoCAD deliverables for civil engineering. Call 9448408174.",
  },
  {
    slug: "drone-survey-bangalore",
    title: "Drone Survey",
    shortTitle: "Drone Survey",
    icon: "🚁",
    tagline: "Aerial mapping with centimetre-level accuracy",
    description:
      "Advanced drone/UAV survey services delivering high-resolution aerial mapping, orthophotos, and 3D models.",
    longDescription:
      "Our licensed drone survey team covers large areas in hours — delivering orthomosaic maps, 3D point clouds, and volumetric analysis with centimetre-level accuracy. Ideal for mining, large construction sites, agriculture, and corridor surveys.",
    features: [
      "Orthomosaic aerial photography",
      "3D point cloud generation",
      "Volume & stockpile measurement",
      "Progress monitoring",
      "NDVI mapping for agriculture",
      "Corridor survey (roads, pipelines)",
    ],
    applications: [
      "Mining & quarries",
      "Large construction sites",
      "Agricultural land",
      "Power & telecom corridors",
    ],
    keywords: [
      "drone survey Bangalore",
      "UAV survey Bengaluru",
      "aerial survey Karnataka",
      "drone mapping Bangalore",
    ],
    metaTitle: "Drone Survey Services in Bangalore | Baseline Associates",
    metaDescription:
      "Licensed drone/UAV survey in Bangalore — orthomosaic maps, 3D models, volume calculation. Fast, accurate, affordable. Call 9448408174.",
  },
  {
    slug: "soil-testing-bangalore",
    title: "Soil Test",
    shortTitle: "Soil Test",
    icon: "🧪",
    tagline: "Foundation safety starts with soil analysis",
    description:
      "Comprehensive soil investigation and geotechnical testing for safe foundation design in Bangalore.",
    longDescription:
      "Before any construction, understanding the soil bearing capacity is critical. Our geotechnical team conducts Standard Penetration Tests (SPT), soil sampling, and laboratory analysis to provide safe bearing capacity values and foundation recommendations.",
    features: [
      "Standard Penetration Test (SPT)",
      "Soil classification & grading",
      "Bearing capacity analysis",
      "Foundation depth recommendation",
      "Soil report for structural engineers",
      "Site suitability assessment",
    ],
    applications: [
      "Residential buildings",
      "Commercial structures",
      "Bridges & flyovers",
      "Industrial plants",
    ],
    keywords: [
      "soil test Bangalore",
      "soil testing Bengaluru",
      "geotechnical survey Bangalore",
      "soil bearing capacity test",
    ],
    metaTitle: "Soil Testing Services in Bangalore | Baseline Associates",
    metaDescription:
      "Professional soil testing (SPT) in Bangalore for safe foundation design. Bearing capacity analysis, soil reports. Call 9448408174.",
  },
  {
    slug: "dgps-survey-bangalore",
    title: "DGPS Survey",
    shortTitle: "DGPS Survey",
    icon: "📡",
    tagline: "Sub-metre GPS accuracy for large projects",
    description:
      "Differential GPS survey services providing high-precision coordinates for GIS, cadastral, and infrastructure projects.",
    longDescription:
      "Our DGPS survey service uses RTK (Real Time Kinematic) and post-processed techniques to deliver centimetre-level positional accuracy. Ideal for control network establishment, GIS data collection, and large-scale infrastructure projects across Karnataka.",
    features: [
      "RTK GPS survey",
      "Control network establishment",
      "GIS data collection",
      "Coordinate transformation (WGS84/UTM)",
      "State survey grid integration",
      "Large area coverage",
    ],
    applications: [
      "Government GIS projects",
      "Road alignments",
      "Power transmission lines",
      "Urban boundary surveys",
    ],
    keywords: [
      "DGPS survey Bangalore",
      "GPS survey Bengaluru",
      "RTK survey Karnataka",
      "DGPS services Bangalore",
    ],
    metaTitle: "DGPS Survey Services in Bangalore | Baseline Associates",
    metaDescription:
      "Precision DGPS/RTK GPS survey services in Bangalore for GIS, infrastructure, and control networks. Sub-centimetre accuracy. Call 9448408174.",
  },
  {
    slug: "total-station-survey-bangalore",
    title: "Total Station Survey",
    shortTitle: "Total Station",
    icon: "🔭",
    tagline: "High-precision angle & distance measurement",
    description:
      "Total station survey for detailed site measurement, traversing, and engineering applications across Bangalore.",
    longDescription:
      "The total station is the workhorse of modern surveying. Our experienced operators use high-precision electronic total stations to measure angles, distances, and elevations for traversing, detail surveys, as-built documentation, and deformation monitoring.",
    features: [
      "Traverse & control survey",
      "Detail and feature survey",
      "As-built documentation",
      "Deformation & settlement monitoring",
      "Cross-section measurement",
      "Tunnel & underground survey",
    ],
    applications: [
      "Engineering projects",
      "Infrastructure monitoring",
      "Detailed site survey",
      "Industrial plant survey",
    ],
    keywords: [
      "total station survey Bangalore",
      "total station Bengaluru",
      "electronic survey Bangalore",
      "precision survey Karnataka",
    ],
    metaTitle: "Total Station Survey in Bangalore | Baseline Associates",
    metaDescription:
      "Professional total station survey services in Bangalore for engineering, infrastructure, and detailed site measurement. Call 9448408174.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
