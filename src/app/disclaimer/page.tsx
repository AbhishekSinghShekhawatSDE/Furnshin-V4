export const metadata = { title: "Disclaimer | Furnshin" };

export default function DisclaimerPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-32 min-h-[60vh]">
            <h1 className="font-display text-5xl font-bold mb-6 tracking-tight text-foreground">Disclaimer</h1>
            <p className="text-grey-500 text-sm mb-8 font-medium">Last updated: March 2026</p>
            <div className="prose prose-lg text-grey-800">
                <p className="leading-relaxed">
                    The materials on Furnshin's website are provided on an 'as is' basis.
                    Furnshin makes no warranties, expressed or implied, and hereby disclaims
                    and negates all other warranties including, without limitation, implied warranties
                    or conditions of merchantability, or non-infringement of intellectual property.
                </p>
                <p className="leading-relaxed mt-4">
                    Images of portfolio projects are representative of actual work completed. Colors,
                    textures, and scale may display differently depending on the device screen used.
                </p>
            </div>
        </main>
    )
}
