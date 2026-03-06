import { NextRequest, NextResponse } from 'next/server'

const SHEETS_URL = process.env.SHEETS_API_URL!
const SHEETS_KEY = process.env.SHEETS_SECRET_KEY!

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        fetch(`${SHEETS_URL}?action=trackWhatsApp&key=${SHEETS_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                page_url: body.page_url || '',
                device: body.device || 'unknown',
            }),
        }).catch(() => { })

        return NextResponse.json({ success: true })
    } catch {
        return NextResponse.json({ success: true }) // Tracking failures should be silent
    }
}
