export const metadata = { title: "Privacy Policy | Furnshin" };

export default function PrivacyPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-32 min-h-[60vh]">
            <h1 className="font-display text-5xl font-bold mb-6 tracking-tight text-foreground">Privacy Policy</h1>
            <p className="text-grey-500 text-sm mb-8 font-medium">Last updated: March 2026</p>
            <div className="prose prose-lg text-grey-800">
                <p className="leading-relaxed">
                    Furnshin collects contact information (name, phone, city) only when you
                    submit an inquiry form. This information is used solely to respond to
                    your project inquiry and is never sold or shared with third parties.
                </p>
                <p className="leading-relaxed mt-4">
                    For questions or requests to delete your data, please contact hello@furnshin.com.
                </p>
            </div>
        </main>
    )
}
