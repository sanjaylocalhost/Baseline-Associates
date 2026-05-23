"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/95 backdrop-blur-md border-b border-dark-600 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gold-400 flex items-center justify-center font-heading font-bold text-dark-900 text-lg">
            BA
          </div>
          <div className="hidden sm:block">
            <div className="font-heading font-bold text-white text-lg leading-tight">
              Baseline Associates
            </div>
            <div className="text-gold-400 text-xs tracking-widest uppercase">
              Instruments of Accuracy
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wider uppercase font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? "text-gold-400"
                  : "text-gray-300 hover:text-gold-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919448408174"
            className="flex items-center gap-2 text-sm text-gold-400 font-medium hover:text-gold-300 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            9448408174
          </a>
          <Link href="/contact" className="btn-gold text-xs py-3 px-6">
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-dark-800 border-t border-dark-600 px-4 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-wider uppercase font-medium py-2 border-b border-dark-600 transition-colors ${
                  pathname === link.href ? "text-gold-400" : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919448408174"
              className="btn-gold text-center mt-4"
            >
              Call Now: 9448408174
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
