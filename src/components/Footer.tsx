import Link from "next/link";
import { services } from "@/lib/services-data";

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      {/* Main Footer */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-400 flex items-center justify-center font-heading font-bold text-dark-900 text-lg">
                BA
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg leading-tight">
                  Baseline Associates
                </div>
              </div>
            </div>
            <p className="text-gold-400 text-sm italic font-heading mb-4">
              &ldquo;Instruments of Accuracy, Foundations of Trust&rdquo;
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional land survey and engineering survey services in
              Bangalore since inception. Precision Planning. Perfect Results.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919448408174"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-dark-600 flex items-center justify-center hover:bg-gold-400 hover:text-dark-900 text-white transition-colors text-xs"
                aria-label="WhatsApp"
              >
                WA
              </a>
              <a
                href="tel:+919448408174"
                className="w-9 h-9 bg-dark-600 flex items-center justify-center hover:bg-gold-400 hover:text-dark-900 text-white transition-colors"
                aria-label="Call us"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-white text-lg mb-6 pb-2 border-b border-dark-500">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-white text-lg mb-6 pb-2 border-b border-dark-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Our Projects" },
                { href: "/blog", label: "Blog & Articles" },
                { href: "/contact", label: "Contact Us" },
                { href: "/contact#quote", label: "Get a Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-white text-lg mb-6 pb-2 border-b border-dark-500">
              Contact Info
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 text-sm leading-relaxed">
                  No.17, 4th Cross, Arunachalam Layout,
                  <br />
                  Near Satellite Town Kengeri,
                  <br />
                  Bangalore — 560060
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gold-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+919448408174" className="text-gray-400 text-sm hover:text-gold-400 transition-colors">
                  +91 9448408174
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:baselinesurvey757@gmail.com" className="text-gray-400 text-sm hover:text-gold-400 transition-colors break-all">
                  baselinesurvey757@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-gold-400 text-xs font-medium shrink-0">GST</span>
                <p className="text-gray-400 text-sm">29CIUPP8007NI277</p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-600 py-6 px-4">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Baseline Associates. All rights reserved. | Land Survey Bangalore
          </p>
          <p className="text-gray-500 text-xs">
            Created by{" "}
            <a
              href="https://solveitbytech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              SolveItByTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
