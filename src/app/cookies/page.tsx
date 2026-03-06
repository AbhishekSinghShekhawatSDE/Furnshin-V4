export const metadata = { title: "Cookies Policy | Furnshin" };

export default function CookiesPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-32 min-h-[60vh]">
            <h1 className="font-display text-5xl font-bold mb-6 tracking-tight text-foreground">Cookies Policy</h1>
            <p className="text-grey-500 text-sm mb-8 font-medium">Last updated: March 2026</p>
            <div className="prose prose-lg text-grey-800">
                <p className="leading-relaxed">
                    Furnshin uses strictly necessary cookies to ensure basic website functionality,
                    and optional analytics cookies (like Google Analytics) to help us understand
                    how visitors interact with the website.
                </p>
                <p className="leading-relaxed mt-4">
                    You can disable analytical cookies through your browser settings at any time without affecting your browsing experience.
                </p>
            </div>
        </main>
    )
}
