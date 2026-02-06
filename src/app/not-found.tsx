import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-900">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gold-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-lg hover:bg-gold-400 transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
