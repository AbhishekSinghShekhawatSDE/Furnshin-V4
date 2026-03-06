import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <p className="font-display text-8xl font-bold text-primary mb-4">404</p>
                <h1 className="font-display text-3xl font-bold text-foreground mb-3 tracking-tight">
                    Page Not Found
                </h1>
                <p className="text-grey-500 mb-8 text-sm leading-relaxed">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    )
}
