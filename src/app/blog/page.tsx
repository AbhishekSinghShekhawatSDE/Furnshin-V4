import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadCaptureCta from "@/components/home/LeadCaptureCta";
import { blogPosts } from "@/data/blogPosts";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Furnshin | Design Ideas, Tips & Company News',
        description: 'Read the latest interior design insights, manufacturing guides, and project spotlights from the Furnshin experts in Jaipur.',
        keywords: ['interior design blog Jaipur', 'furniture maintenance tips', 'home decor ideas India', 'architectural glass journal', 'modular kitchen guides'],
        alternates: { canonical: 'https://www.furnshin.com/blog' },
        openGraph: {
            title: 'Furnshin | Design Ideas & Journal',
            description: 'Expert insights into custom furniture and interior architecture.',
            images: [{ url: '/og/blog.jpg', width: 1200, height: 630 }],
            url: 'https://www.furnshin.com/blog',
            siteName: 'Furnshin',
        },
        twitter: {
            card: 'summary_large_image',
            site: '@furnshin',
        },
    }
}

export default function BlogIndex() {
    return (
        <>
            <section className="bg-grey-50 pt-32 pb-16 border-b border-grey-200">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex justify-center mb-4">
                        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Journal" }]} />
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-6">
                            The <i className="text-primary not-italic italic">Journal</i>
                        </h1>
                        <p className="text-lg md:text-xl text-grey-800 max-w-2xl mx-auto">
                            Design ideas, manufacturing insights, and inside looks at our latest projects across Jaipur.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    {/* Controls Placeholder */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-foreground text-white rounded-full text-sm font-medium">All</button>
                            <button className="px-4 py-2 bg-grey-50 text-grey-800 hover:bg-grey-200 rounded-full text-sm font-medium transition-colors">Guides</button>
                        </div>
                        <div className="w-full sm:w-auto relative">
                            <input type="search" placeholder="Search articles..." className="w-full sm:w-64 pl-4 pr-10 py-2 rounded-full border border-grey-200 focus:outline-none focus:border-primary transition-colors bg-grey-50 text-sm placeholder:text-grey-400 text-foreground" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, i) => (
                            <Link href={`/blog/${post.slug}`} key={i} className="group flex flex-col h-full bg-white rounded-3xl border border-grey-200 overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="aspect-[4/3] bg-grey-100 relative overflow-hidden flex items-center justify-center text-grey-400 font-display border-b border-grey-200">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary z-10">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-xs font-medium text-grey-500 uppercase tracking-widest mb-4">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-grey-300" />
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl font-display font-medium mb-6 text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                                    <div className="mt-auto font-bold text-primary flex items-center gap-2 uppercase tracking-wide text-sm">
                                        Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadCaptureCta />
        </>
    )
}
