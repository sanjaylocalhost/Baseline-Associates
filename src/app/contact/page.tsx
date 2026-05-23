import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Baseline Associates | Land Survey Bangalore",
  description:
    "Contact Baseline Associates for land survey, DGPS, drone survey & construction layout services in Bangalore. Call 9448408174 or WhatsApp for a free quote.",
  alternates: {
    canonical: "https://www.baselinesurvey757.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-dark-800 border-b border-dark-600">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line"></div>
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Reach Us</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-4">
            Contact <span className="gold-text">Us</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-xl">
            Get a free quote or ask us anything about your survey project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Phone</div>
                    <a href="tel:+919448408174" className="text-gold-400 hover:text-gold-300 transition-colors text-lg font-heading">
                      +91 9448408174
                    </a>
                    <div className="text-gray-500 text-xs mt-1">Mon – Sat, 9 AM – 6 PM</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.123 1.523 5.857L.057 23.428a.75.75 0 00.916.916l5.571-1.466A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.654-.518-5.163-1.42l-.372-.222-3.847 1.013 1.013-3.706-.24-.383A9.974 9.974 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/919448408174?text=Hello%2C%20I%20need%20a%20survey%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      Send a WhatsApp Message
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Email</div>
                    <a href="mailto:baselinesurvey757@gmail.com" className="text-gold-400 hover:text-gold-300 transition-colors break-all">
                      baselinesurvey757@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Office Address</div>
                    <address className="not-italic text-gray-400 text-sm leading-relaxed">
                      No.17, 4th Cross, Arunachalam Layout,<br />
                      Near Satellite Town Kengeri,<br />
                      Bangalore — 560060
                    </address>
                  </div>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="bg-dark-700 border border-dark-500 h-64 flex items-center justify-center text-gray-500 text-sm">
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <div>Kengeri, Bangalore — 560060</div>
                  <a
                    href="https://maps.google.com/?q=Kengeri+Bangalore+560060"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-400 text-xs hover:text-gold-300 transition-colors mt-2 block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="quote">
              <h2 className="font-heading text-3xl font-bold text-white mb-8">
                Request a Free Quote
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
