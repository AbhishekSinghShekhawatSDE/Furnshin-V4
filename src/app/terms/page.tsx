export const metadata = { title: "Terms & Conditions | Furnshin" };

export default function TermsPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-32 min-h-[60vh]">
            <h1 className="font-display text-5xl font-bold mb-6 tracking-tight text-foreground">Terms & Conditions</h1>
            <p className="text-grey-500 text-sm mb-8 font-medium">Last updated: March 2026</p>
            <div className="prose prose-lg text-grey-800">
                <p className="leading-relaxed">
                    Welcome to Furnshin. By accessing our website, you agree to these terms.
                    The content on this website is for informational purposes regarding our
                    custom furniture and interior manufacturing services in Jaipur.
                </p>
                <p className="leading-relaxed mt-4">
                    Project timelines, estimates, and dimensions discussed via inquiry
                    are subject to formal contracting and physical site measurements.
                </p>
            </div>
        </main>
    )
}
