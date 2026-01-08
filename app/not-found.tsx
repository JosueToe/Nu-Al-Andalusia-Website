import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-heading font-bold text-deep-teal mb-4">404</h1>
        <h2 className="text-h2 mb-6">Page Not Found</h2>
        <p className="text-xl text-warm-gray mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </section>
  );
}

