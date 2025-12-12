import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const SOURCE_URL = 'https://webwinddigital.com'

export async function GET() {
  try {
    const res = await fetch(SOURCE_URL, {
      cache: 'no-store',
      redirect: 'follow',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
      },
    })

    const html = await res.text()

    // Entferne evtl. CSP-Meta (frame-ancestors), damit das Einbetten klappt.
    const cleaned = html.replace(
      /<meta[^>]*http-equiv=["']Content-Security-Policy["'][^>]*>/gi,
      ''
    )

    return new NextResponse(cleaned, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        // Sicherstellen, dass wir kein X-Frame-Options setzen.
        'X-Frame-Options': 'ALLOWALL',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    })
  } catch (error) {
    const fallback = `
      <html>
        <head><title>Preview nicht verfügbar</title></head>
        <body style="font-family: sans-serif; padding: 24px; background: #f1f5f9; color: #0f172a;">
          <h1>Preview nicht verfügbar</h1>
          <p>Die Seite konnte aktuell nicht geladen werden.</p>
        </body>
      </html>
    `
    return new NextResponse(fallback, {
      status: 502,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }
}

