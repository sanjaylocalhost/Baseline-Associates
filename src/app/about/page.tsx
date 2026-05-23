import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Baseline Associates | Land Survey Company Bangalore",
  description:
    "Learn about Baseline Associates — Bangalore's trusted land survey company. Professional surveyors providing accurate, reliable survey services across Karnataka.",
  alternates: {
    canonical: "https://www.baselinesurvey757.com/about",
  },
};

const equipment = [
  { icon: "🔭", name: "Electronic Total Station", desc: "Sub-arcsecond precision for angles and distances" },
  { icon: "📡", name: "RTK DGPS / GPS", desc: "Centimetre-level satellite positioning" },
  { icon: "🚁", name: "Drone / UAV", desc: "High-resolution aerial mapping" },
  { icon: "💻", name: "AutoCAD / GIS Software", desc: "Professional digital deliverables" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-dark-800 border-b border-dark-600">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line"></div>
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Who We Are</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-4">
            About <span className="gold-text">Baseline Associates</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            Instruments of Accuracy. Foundations of Trust.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="gold-line mb-8"></div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Baseline Associates was founded with a clear purpose — to
                  bring professional-grade surveying services to every project
                  in Bangalore, regardless of scale. Based in Kengeri, we serve
                  clients across the entire city and surrounding districts of
                  Karnataka.
                </p>
                <p>
                  Our team of certified survey professionals combines decades of
                  field experience with the latest survey technology — RTK GPS,
                  electronic total stations, and licensed drone systems — to
                  deliver results that are accurate, reliable, and legally
                  sound.
                </p>
                <p>
                  From individual homeowners verifying their property boundaries
                  to large civil engineering contractors needing precision
                  construction layout, Baseline Associates has the expertise and
                  equipment to deliver.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "10+", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "50+", label: "Satisfied Clients" },
              ].map((stat) => (
                <div key={stat.label} className="bg-dark-700 border border-dark-500 p-8 text-center hover:border-gold-400/40 transition-colors">
                  <div className="font-heading text-4xl font-bold gold-text mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark-800">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-700 border border-dark-500 p-10 hover:border-gold-400/30 transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To provide the most accurate, reliable, and affordable survey
                services in Bangalore — helping our clients make informed
                decisions with confidence, whether buying land, designing
                buildings, or developing infrastructure.
              </p>
            </div>
            <div className="bg-dark-700 border border-dark-500 p-10 hover:border-gold-400/30 transition-colors">
              <div className="text-4xl mb-4">🌟</div>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To be Karnataka&apos;s most trusted survey company — known for
                precision, professionalism, and a commitment to quality that
                builds lasting relationships with every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Our Equipment
            </h2>
            <p className="text-gray-400">
              We invest in the best technology to deliver the best results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <div key={item.name} className="service-card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-white font-bold mb-2">{item.name}</h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 mb-8">
            Contact Baseline Associates for all your land survey needs in
            Bangalore.
          </p>
          <Link href="/contact" className="btn-gold">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
