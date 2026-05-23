import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Survey Projects in Bangalore | Baseline Associates",
  description:
    "Browse completed land survey, drone survey, and topographic survey projects by Baseline Associates across Bangalore and Karnataka.",
  alternates: {
    canonical: "https://www.baselinesurvey757.com/projects",
  },
};

const projects = [
  {
    title: "Residential Layout Survey — Kengeri",
    type: "Land Survey",
    area: "2.5 Acres",
    desc: "Complete boundary survey and sketch preparation for a 40-plot residential layout near Kengeri Satellite Town.",
  },
  {
    title: "Road Alignment Survey — Mysore Road",
    type: "Topographic Survey",
    area: "12 km Corridor",
    desc: "Topographic survey and cross-section profiles for a road widening project on the Mysore Road corridor.",
  },
  {
    title: "Drone Mapping — Mining Site, Tumkur",
    type: "Drone Survey",
    area: "85 Acres",
    desc: "UAV volumetric survey for stockpile measurement and progress monitoring at a quarry site near Tumkur.",
  },
  {
    title: "Construction Layout — Commercial Complex",
    type: "Construction Layout",
    area: "1.2 Acres",
    desc: "Precise column and foundation layout for a G+4 commercial building in Vijayanagar, Bangalore.",
  },
  {
    title: "DGPS Control Network — Infrastructure Project",
    type: "DGPS Survey",
    area: "25 km",
    desc: "RTK GPS control network establishment for a water supply pipeline project covering 3 taluks.",
  },
  {
    title: "Soil Investigation — Apartment Project",
    type: "Soil Test",
    area: "0.5 Acres",
    desc: "SPT soil investigation at 6 bore locations for safe foundation design of a G+7 apartment complex.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-dark-800 border-b border-dark-600">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line"></div>
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Our Work</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-4">
            Completed <span className="gold-text">Projects</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            A selection of our survey projects across Bangalore and Karnataka.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="service-card group">
                {/* Placeholder image */}
                <div className="bg-dark-600 border border-dark-500 h-48 mb-6 flex items-center justify-center text-gray-600 text-xs uppercase tracking-wider">
                  Project Photo
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-gold-400 border border-gold-400/30 px-3 py-1 uppercase tracking-wider">
                    {project.type}
                  </span>
                  <span className="text-gray-600 text-xs">{project.area}</span>
                </div>
                <h2 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm mb-6">
              More project photos available on request.
            </p>
            <Link href="/contact" className="btn-gold">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
