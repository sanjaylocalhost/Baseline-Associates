import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://www.baselinesurvey757.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.baselinesurvey757.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Schema Markup for this Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.longDescription,
            provider: {
              "@type": "LocalBusiness",
              name: "Baseline Associates",
              telephone: "+919448408174",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Bangalore",
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <section className="pt-28 pb-6 px-4 bg-dark-800">
        <div className="container-max">
          <nav className="flex items-center gap-2 text-xs text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold-400">{service.shortTitle}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-20 px-4 bg-dark-800 border-b border-dark-600">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-4">
              {service.title}
              <span className="gold-text"> in Bangalore</span>
            </h1>
            <p className="text-gray-400 text-xl mb-8">{service.tagline}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">
                Get a Quote
              </Link>
              <a href="tel:+919448408174" className="btn-outline">
                Call 9448408174
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-heading text-3xl font-bold text-white mb-4">
                  About Our {service.title} Service
                </h2>
                <div className="gold-line mb-6"></div>
                <p className="text-gray-300 leading-relaxed">{service.longDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 bg-dark-700 border border-dark-500 p-4 hover:border-gold-400/30 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gold-400/20 border border-gold-400/30 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-6">
                  Applications
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.applications.map((app) => (
                    <span
                      key={app}
                      className="px-4 py-2 border border-gold-400/30 text-gold-400 text-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-dark-700 border border-gold-400/30 p-6">
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  Get a Free Quote
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Contact us today for a free consultation and competitive quote
                  for your {service.shortTitle.toLowerCase()} project in
                  Bangalore.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919448408174"
                    className="btn-gold w-full justify-center text-xs py-3"
                  >
                    Call 9448408174
                  </a>
                  <a
                    href="https://wa.me/919448408174"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full justify-center text-xs py-3"
                  >
                    WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="block text-center text-gold-400 text-xs hover:text-gold-300 transition-colors py-2"
                  >
                    Fill Enquiry Form →
                  </Link>
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-dark-700 border border-dark-500 p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-4">
                  Other Services
                </h3>
                <div className="space-y-3">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold-400 transition-colors group"
                    >
                      <span className="text-xl">{s.icon}</span>
                      <span className="group-hover:text-gold-400 transition-colors">
                        {s.shortTitle}
                      </span>
                      <svg className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="text-gold-400 text-xs uppercase tracking-wider hover:text-gold-300 transition-colors block pt-2 border-t border-dark-500"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>

              {/* Address */}
              <div className="bg-dark-700 border border-dark-500 p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  Our Location
                </h3>
                <address className="not-italic text-gray-400 text-xs leading-relaxed">
                  No.17, 4th Cross, Arunachalam Layout,
                  <br />
                  Near Satellite Town Kengeri,
                  <br />
                  Bangalore — 560060
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Need {service.shortTitle} in Bangalore?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact Baseline Associates today. Fast, accurate, and affordable{" "}
            {service.shortTitle.toLowerCase()} services across Bangalore and
            Karnataka.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
