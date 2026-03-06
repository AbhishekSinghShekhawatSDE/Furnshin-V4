import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LeadCaptureCta from "@/components/home/LeadCaptureCta";
import { blogPosts } from "@/data/blogPosts";
import Breadcrumb from "@/components/Breadcrumb";
import { generateArticleSchema } from "@/lib/schema";
import ReadingProgress from "@/components/ui/ReadingProgress";

type Props = {
    params: Promise<{ slug: string }>
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts.find(p => p.slug === resolvedParams.slug);
    if (!post) return {};

    return {
        title: `${post.title} | Furnshin Journal`,
        description: post.content.substring(0, 150).replace(/#/g, '').trim() + "...",
        alternates: { canonical: `https://www.furnshin.com/blog/${post.slug}` },
        openGraph: {
            title: `${post.title} | Furnshin`,
            description: post.content.substring(0, 150).replace(/#/g, '').trim() + "...",
            url: `https://www.furnshin.com/blog/${post.slug}`,
        },
    }
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = blogPosts.find(p => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <ReadingProgress />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateArticleSchema(post))
                }}
            />
            <article className="pt-32 pb-24 bg-white">
                <div className="max-w-[800px] mx-auto px-6">
                    <div className="mb-4">
                        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/blog" }, { label: post.title }]} />
                    </div>
                    <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8">
                        <ArrowLeft size={16} /> Back to Journal
                    </Link>

                    <div className="flex items-center gap-3 text-xs font-medium text-grey-500 uppercase tracking-widest mb-6">
                        <span className="bg-grey-100 text-grey-800 px-3 py-1 rounded-full">{post.category}</span>
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-grey-300" />
                        <span>{post.readTime}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tight mb-8 leading-[1.1]">
                        {post.title}
                    </h1>
                </div>

                <div className="max-w-[1000px] mx-auto px-6 mb-16">
                    <div className="aspect-[21/9] w-full bg-grey-100 rounded-3xl overflow-hidden relative border border-grey-200 shadow-md">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="max-w-[800px] mx-auto px-6">
                    <div
                        className="prose prose-lg md:prose-xl prose-grey prose-headings:font-display prose-headings:font-medium prose-a:text-primary hover:prose-a:underline prose-img:rounded-2xl"
                        dangerouslySetInnerHTML={{
                            // A very un-complex markdown-to-html hack for h3 and bold tags due to our static JSON format 
                            __html: post.content
                                .replace(/### (.*)/g, '<h3>$1</h3>')
                                .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
                                .replace(/\n\n/g, '</p><p>')
                                .replace(/^- (.*)/gm, '<li>$1</li>')
                        }}
                    />

                    {post.tags && (
                        <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-grey-200">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-4 py-2 bg-grey-50 border border-grey-200 rounded-full text-sm font-medium text-grey-700">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </article>

            <LeadCaptureCta />
        </>
    );
}
