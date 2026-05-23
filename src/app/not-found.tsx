import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-heading text-9xl font-bold gold-text mb-4">404</div>
        <h1 className="font-heading text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link href="/" className="btn-gold">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
