/**
 * @file schema.ts
 * @description Centralized schema.org structured data generators for SEO rich results.
 */

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Furnshin",
    "url": "https://www.furnshin.com",
    "logo": "https://www.furnshin.com/logo.png",
    "sameAs": [
        "https://www.instagram.com/furnshin",
        "https://www.facebook.com/furnshin",
        "https://twitter.com/furnshin"
    ]
};

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Furnshin",
    "image": "https://www.furnshin.com/og/home.jpg",
    "@id": "https://www.furnshin.com",
    "url": "https://www.furnshin.com",
    "telephone": "+919876543210",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sitapura Industrial Area",
        "addressLocality": "Jaipur",
        "addressRegion": "RJ",
        "postalCode": "302022",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.7667,
        "longitude": 75.8500
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "opens": "10:00",
        "closes": "19:00"
    }
};

export function generateBreadcrumbSchema(items: { label: string, href?: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@id": item.href ? `https://www.furnshin.com${item.href}` : undefined,
                "name": item.label
            }
        }))
    };
}

export function generateFAQSchema(faqs: { q: string, a: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };
}

export function generateArticleSchema(post: { slug: string, title: string, date: string, coverImage: string, content: string }) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": [post.coverImage],
        "datePublished": post.date,
        "author": [{
            "@type": "Organization",
            "name": "Furnshin",
            "url": "https://www.furnshin.com"
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Furnshin",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.furnshin.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.furnshin.com/blog/${post.slug}`
        }
    };
}
