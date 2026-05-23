import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Land Survey Blog | Baseline Associates Bangalore",
  description:
    "Expert articles about land survey, DGPS, drone survey, topographic survey, and construction layout in Bangalore. Learn from professionals.",
  alternates: {
    canonical: "https://www.baselinesurvey757.com/blog",
  },
};

const blogPosts = [
  {
    slug: "what-is-dgps-survey",
    title: "What is DGPS Survey? Everything You Need to Know",
    excerpt:
      "Differential GPS (DGPS) survey uses two GPS receivers to dramatically improve accuracy. Learn how it works, when to use it, and typical costs in Bangalore.",
    category: "DGPS Survey",
    date: "2025-01-15",
    readTime: "5 min read",
  },
  {
    slug: "land-survey-cost-bangalore",
    title: "Land Survey Cost in Bangalore: 2025 Complete Guide",
    excerpt:
      "How much does a land survey cost in Bangalore? We break down pricing for boundary surveys, topographic surveys, drone surveys, and more. Updated for 2025.",
    category: "Land Survey",
    date: "2025-01-10",
    readTime: "7 min read",
  },
  {
    slug: "importance-of-topographic-survey",
    title: "Why Topographic Survey is Essential Before Construction",
    excerpt:
      "Skipping a topo survey before building can cost you dearly. Learn why every construction project in Bangalore should start with a topographic survey.",
    category: "Topographic Survey",
    date: "2025-01-05",
    readTime: "6 min read",
  },
  {
    slug: "drone-survey-benefits-bangalore",
    title: "5 Benefits of Drone Survey Over Traditional Methods",
    excerpt:
      "Drone surveys cover more ground, faster, and at lower cost than traditional methods. Discover why drone mapping is transforming projects in Bangalore.",
    category: "Drone Survey",
    date: "2024-12-28",
    readTime: "5 min read",
  },
  {
    slug: "soil-test-before-construction",
    title: "Why Soil Testing is Mandatory Before Any Construction",
    excerpt:
      "Foundation failures are preventable. A soil test reveals bearing capacity, soil type, and safe foundation depth — critical information for every build.",
    category: "Soil Test",
    date: "2024-12-20",
    readTime: "4 min read",
  },
  {
    slug: "total-station-vs-dgps",
    title: "Total Station vs DGPS: Which Survey Do You Need?",
    excerpt:
      "Confused between total station and DGPS survey? We explain the differences, when to use each, and how to choose the right method for your project.",
    category: "Survey Guide",
    date: "2024-12-15",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-dark-800 border-b border-dark-600">
        <div className="container-max">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line"></div>
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Expert Knowledge</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-4">
            Survey <span className="gold-text">Blog</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            Expert articles on land survey, DGPS, drone survey, and more —
            written by Bangalore&apos;s survey professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="service-card group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gold-400 uppercase tracking-wider border border-gold-400/30 px-3 py-1">
                    {post.category}
                  </span>
                  <span className="text-gray-600 text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-dark-500">
                  <span className="text-gray-600 text-xs">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gold-400 text-xs uppercase tracking-wider hover:text-gold-300 transition-colors flex items-center gap-1"
                  >
                    Read More
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Have a Survey Question?
          </h2>
          <p className="text-gray-400 mb-8">
            Our team is happy to answer any questions about your survey project.
          </p>
          <Link href="/contact" className="btn-gold">
            Contact Our Experts
          </Link>
        </div>
      </section>
    </>
  );
}
