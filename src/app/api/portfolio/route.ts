import { NextRequest, NextResponse } from 'next/server'

const SHEETS_URL = process.env.SHEETS_API_URL!
const SHEETS_KEY = process.env.SHEETS_SECRET_KEY!

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const category = searchParams.get('category') || 'all'
        const featured = searchParams.get('featured') || 'false'

        const params = new URLSearchParams({
            action: 'getPortfolio',
            key: SHEETS_KEY,
            category,
            featured,
        })

        const response = await fetch(`${SHEETS_URL}?${params}`, {
            next: { revalidate: 300 }, // Cache for 5 minutes
        })

        const data = await response.json()
        return NextResponse.json(data)

    } catch (error) {
        return NextResponse.json({ projects: [], error: 'Failed to fetch portfolio.' })
    }
}
