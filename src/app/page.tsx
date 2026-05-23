import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Baseline Associates | Land Survey Company in Bangalore",
  description:
    "Baseline Associates — Professional land survey, DGPS, drone survey, topographic survey, construction layout & soil test services in Bangalore. Call 9448408174.",
  alternates: {
    canonical: "https://www.baselinesurvey757.com",
  },
};

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Accurate Results" },
  { value: "50+", label: "Happy Clients" },
];

const whyUs = [
  {
    icon: "🎯",
    title: "Millimetre Accuracy",
    desc: "We use calibrated total stations, RTK GPS, and drone technology to deliver survey results you can build on with confidence.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "Most survey reports delivered within 2–3 working days. Urgent projects handled on priority.",
  },
  {
    icon: "📋",
    title: "Legal Documentation",
    desc: "All our surveys come with proper sketches, reports, and documentation accepted by government authorities.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden costs. Get a clear, itemized quote before we begin any work.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Property Developer, Bangalore",
    text: "Baseline Associates completed our boundary survey within 2 days. Accurate, professional, and very affordable. Highly recommended for all land survey needs in Bangalore.",
  },
  {
    name: "Suresh Gowda",
    role: "Civil Engineer, Kengeri",
    text: "We use Baseline Associates for all our construction layout work. Their total station survey is always spot-on. Great team, great results.",
  },
  {
    name: "Meena Sharma",
    role: "Homeowner, Vijayanagar",
    text: "Needed a topographic survey for my site. The team was professional, explained everything clearly, and delivered a detailed AutoCAD report. Very satisfied.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-dark-900">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg, transparent, transparent 80px,
                rgba(255,195,0,0.3) 80px, rgba(255,195,0,0.3) 81px
              ), repeating-linear-gradient(
                90deg, transparent, transparent 80px,
                rgba(255,195,0,0.3) 80px, rgba(255,195,0,0.3) 81px
              )`,
            }}
          />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container-max section-padding relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-line"></div>
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
                Bangalore&apos;s Trusted Survey Company
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6">
              Precision{" "}
              <span className="gold-text">Planning.</span>
              <br />
              Perfect{" "}
              <span className="gold-text">Results.</span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
              Professional land survey, DGPS, drone survey, topographic survey,
              and construction layout services in Bangalore. Instruments of
              Accuracy. Foundations of Trust.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/contact" className="btn-gold">
                Get Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+919448408174" className="btn-outline">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-gold-400 pl-4">
                  <div className="font-heading text-2xl sm:text-3xl font-bold gold-text">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent"></div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-padding bg-dark-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line"></div>
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">
                What We Do
              </span>
              <div className="gold-line"></div>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Survey Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Complete range of land and engineering survey services for
              residential, commercial, and infrastructure projects across
              Bangalore & Karnataka.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-dark-600">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card bg-dark-800 flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {service.tagline}
                </p>
                <div className="mt-6 flex items-center gap-2 text-gold-400 text-xs uppercase tracking-wider font-medium">
                  <span>Learn More</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-line"></div>
                <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">
                  Why Baseline Associates
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
                Trusted Survey
                <br />
                <span className="gold-text">Professionals</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Since our founding, Baseline Associates has been the survey
                partner of choice for developers, engineers, and homeowners
                across Bangalore. Based in Kengeri, we serve the entire city
                and surrounding districts.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Registered & certified survey professionals",
                  "Advanced equipment — Total Station, DGPS, Drone",
                  "Reports accepted by BDA, BBMP, & revenue authorities",
                  "On-time delivery guaranteed",
                  "Transparent pricing — no surprises",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gold-400/20 border border-gold-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-gold">
                About Our Company
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="bg-dark-700 border border-dark-500 p-6 hover:border-gold-400/40 transition-colors"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-heading text-white font-bold mb-2 text-base">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS SEO ── */}
      <section className="section-padding bg-dark-800">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Survey Services Across Bangalore
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              We cover all areas of Bangalore and surrounding districts for
              professional land and engineering survey services.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Kengeri", "Vijayanagar", "Rajajinagar", "Mysore Road",
              "Tumkur Road", "Peenya", "Yeshwanthpur", "Malleshwaram",
              "Jayanagar", "Banashankari", "Basavanagudi", "Electronic City",
              "Whitefield", "Sarjapur", "Hebbal", "Yelahanka",
              "Devanahalli", "Nelamangala", "Ramanagara", "Kolar",
            ].map((area) => (
              <span
                key={area}
                className="px-4 py-2 border border-dark-500 text-gray-400 text-xs hover:border-gold-400/50 hover:text-gold-400 transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line"></div>
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">
                Client Reviews
              </span>
              <div className="gold-line"></div>
            </div>
            <h2 className="font-heading text-4xl font-bold text-white">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-dark-700 border border-dark-500 p-8 relative hover:border-gold-400/30 transition-colors"
              >
                <div className="text-gold-400 text-5xl font-heading leading-none mb-4 opacity-50">
                  &ldquo;
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="border-t border-dark-500 pt-4">
                  <div className="font-heading text-white font-bold text-sm">{t.name}</div>
                  <div className="text-gold-400 text-xs mt-1">{t.role}</div>
                </div>
                {/* Stars */}
                <div className="absolute top-6 right-6 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-dark-800">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-sm">
                Common questions about land survey services in Bangalore.
              </p>
            </div>
            <div className="space-y-px">
              {[
                {
                  q: "How much does a land survey cost in Bangalore?",
                  a: "Land survey costs in Bangalore depend on the size and type of survey. A basic boundary survey for a residential plot typically starts from ₹3,000–₹8,000. Contact us for an exact quote.",
                },
                {
                  q: "How long does a land survey take?",
                  a: "Most surveys are completed within 1–2 days on-site. The final report is usually delivered within 2–3 working days after the field survey.",
                },
                {
                  q: "Is your survey report accepted by BDA/BBMP?",
                  a: "Yes. Our survey reports and sketches are prepared by certified professionals and are accepted by BDA, BBMP, revenue authorities, and courts.",
                },
                {
                  q: "Do you provide drone survey services in Bangalore?",
                  a: "Yes, we provide licensed drone/UAV survey services across Bangalore and Karnataka for large sites, mining areas, and corridor mapping.",
                },
                {
                  q: "What is the difference between DGPS and Total Station survey?",
                  a: "Total station is ideal for smaller areas and detailed measurements. DGPS/RTK is better for large areas, GIS projects, and where absolute coordinates are needed. We recommend the right method based on your project.",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-dark-700 border border-dark-500 p-6 hover:border-gold-400/30 transition-colors">
                  <h3 className="font-heading text-white font-bold mb-3 text-base">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-dark-900 border-y border-gold-400/20">
        <div className="container-max text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Start Your
            <span className="gold-text"> Survey Project?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Contact Baseline Associates today for a free consultation and quote.
            We serve Bangalore and all surrounding areas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Get Free Quote
            </Link>
            <a
              href="https://wa.me/919448408174?text=Hello%2C%20I%20need%20a%20survey%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
