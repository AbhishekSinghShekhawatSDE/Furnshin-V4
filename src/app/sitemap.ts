import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.furnshin.com'
    const lastModified = new Date()

    return [
        { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/services/glass-works`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services/custom-furniture`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services/aluminum-solutions`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services/iron-metal-works`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/portfolio`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/blog/modular-kitchen-guide-jaipur`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/blog/glass-partition-vs-drywall-office-jaipur`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/blog/aluminum-windows-doors-guide-jaipur`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/blog/vaishali-nagar-3bhk-transformation`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/blog/commercial-office-glass-partitions-malviya-nagar`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    ]
}
