import Link from 'next/link'

interface BreadcrumbItem {
    label: string
    href?: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 py-3">
            <ol className="flex items-center gap-2 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-2"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                    >
                        {item.href && index < items.length - 1 ? (
                            <>
                                <Link href={item.href} className="hover:text-[#E8553D] transition-colors" itemProp="item">
                                    <span itemProp="name">{item.label}</span>
                                </Link>
                                <span aria-hidden="true">/</span>
                            </>
                        ) : (
                            <span className="text-gray-800 font-medium" itemProp="name">{item.label}</span>
                        )}
                        <meta itemProp="position" content={String(index + 1)} />
                    </li>
                ))}
            </ol>
        </nav>
    )
}
