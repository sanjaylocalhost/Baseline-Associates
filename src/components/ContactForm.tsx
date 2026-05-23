"use client";

import { useState } from "react";
import { services } from "@/lib/services-data";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: connect to your API / email service / WhatsApp API
    const msg = `Hello Baseline Associates,%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0ALocation: ${form.location}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919448408174?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-dark-700 border border-gold-400/40 p-12 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-heading text-2xl font-bold text-white mb-2">
          Thank You!
        </h3>
        <p className="text-gray-400">
          Your enquiry has been sent via WhatsApp. We will get back to you
          shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-dark-700 border border-dark-500 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Mobile number"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
          Service Required *
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.shortTitle}>
              {s.shortTitle}
            </option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
          Project Location / Area
        </label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="e.g. Jayanagar, Bangalore"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
          Message / Requirements
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your project..."
          className={inputClass}
        />
      </div>

      <button type="submit" className="btn-gold w-full justify-center">
        Send via WhatsApp
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      <p className="text-gray-600 text-xs text-center">
        Your enquiry will be sent directly via WhatsApp for fastest response.
      </p>
    </form>
  );
}
