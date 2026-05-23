import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Survey Services in Bangalore | Baseline Associates",
  description:
    "Complete land survey services in Bangalore — land survey, DGPS, drone survey, topographic survey, construction layout, soil test, and total station survey. Call 9448408174.",
  alternates: {
    canonical: "https://www.baselinesurvey757.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-dark-800 border-b border-dark-600">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line"></div>
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">
              What We Offer
            </span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-4">
            Our Survey <span className="gold-text">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            From boundary surveys to drone mapping — we provide the full range
            of precision survey services for Bangalore and Karnataka.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card group"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h2 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-gray-500 text-xs">
                      <svg className="w-3 h-3 text-gold-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-wider font-medium mt-auto">
                  Learn More
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Not Sure Which Survey You Need?
          </h2>
          <p className="text-gray-400 mb-8">
            Call us or send a WhatsApp message — we&apos;ll advise the right survey
            type for your project, free of charge.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
            <a href="tel:+919448408174" className="btn-outline">
              Call 9448408174
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
