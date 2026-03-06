import { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import LeadCaptureCta from "@/components/home/LeadCaptureCta";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Furnshin | Our Project Portfolio',
        description: 'Explore our recent interior transformations, custom furniture, and architectural installations spanning residential and commercial sectors in Jaipur.',
        alternates: { canonical: 'https://www.furnshin.com/portfolio' },
        openGraph: {
            title: 'Furnshin | Project Portfolio',
            description: 'Factory-direct execution you can trust. View our work.',
            images: [{ url: '/og/portfolio.jpg', width: 1200, height: 630 }],
            url: 'https://www.furnshin.com/portfolio',
            siteName: 'Furnshin',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@furnshin',
            creator: '@furnshin',
        },
    }
}

export default function PortfolioPage() {
    return (
        <>
            <section className="bg-grey-50 pt-32 pb-16 border-b border-grey-200">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex justify-center mb-4">
                        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-display font-medium tracking-tight mb-6">
                            The <i className="text-primary not-italic italic">Archives</i>
                        </h1>
                        <p className="text-lg md:text-xl text-grey-800 max-w-2xl mx-auto">
                            A curated selection of our finest residential and commercial executions across Jaipur. Use the filters below to explore specific domains.
                        </p>
                    </div>
                </div>
            </section>

            <PortfolioGrid />
            <LeadCaptureCta />
        </>
    );
}
