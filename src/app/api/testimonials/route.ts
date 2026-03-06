import { NextResponse } from 'next/server'

const SHEETS_URL = process.env.SHEETS_API_URL!
const SHEETS_KEY = process.env.SHEETS_SECRET_KEY!

export async function GET() {
    try {
        const response = await fetch(
            `${SHEETS_URL}?action=getTestimonials&key=${SHEETS_KEY}`,
            { next: { revalidate: 600 } } // Cache for 10 minutes
        )
        const data = await response.json()
        return NextResponse.json(data)
    } catch {
        return NextResponse.json({ testimonials: [] })
    }
}
