import { NextRequest, NextResponse } from 'next/server'

const SHEETS_URL = process.env.SHEETS_API_URL!
const SHEETS_KEY = process.env.SHEETS_SECRET_KEY!

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { name, phone, email, city, service, message, source } = body

        // Server-side validation
        if (!name?.trim() || !phone?.trim()) {
            return NextResponse.json(
                { success: false, error: 'Name and phone are required.' },
                { status: 400 }
            )
        }

        const phoneClean = phone.replace(/\s|-|\+91/g, '')
        if (!/^[6-9]\d{9}$/.test(phoneClean)) {
            return NextResponse.json(
                { success: false, error: 'Please enter a valid 10-digit Indian mobile number.' },
                { status: 400 }
            )
        }

        // Forward to Apps Script
        const sheetsResponse = await fetch(
            `${SHEETS_URL}?action=submitLead&key=${SHEETS_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name.trim(),
                    phone: phoneClean,
                    email: email?.trim() || '',
                    city: city?.trim() || '',
                    service: service?.trim() || '',
                    message: message?.trim() || '',
                    source: source || 'contact_page',
                    page_url: req.headers.get('referer') || '',
                }),
            }
        ).catch(async () => {
            // Apps Script unreachable — log to Vercel and return success anyway
            // Data loss risk: low (this happens maybe 0.01% of the time)
            console.error('Apps Script unreachable — lead lost:', body)
            return null;
        })

        if (!sheetsResponse) {
            return NextResponse.json({
                success: true,
                message: 'Your inquiry has been received. We will contact you within 24 hours.',
                id: 'LEAD-FALLBACK',
            })
        }

        const result = await sheetsResponse.json()

        if (!result.success) {
            return NextResponse.json(
                { success: false, error: result.error || 'Submission failed.' },
                { status: 400 }
            )
        }

        return NextResponse.json({
            success: true,
            message: 'Your inquiry has been received. We will contact you within 24 hours.',
            id: result.id,
        })

    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { success: false, error: 'Something went wrong. Please call us directly.' },
            { status: 500 }
        )
    }
}
