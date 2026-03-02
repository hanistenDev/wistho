import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactPayload = {
  name?: string
  email?: string
  company?: string
  message?: string
  language?: 'de' | 'en'
  turnstileToken?: string
}

const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_TO_EMAIL',
] as const

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const name = (body.name || '').trim()
    const email = (body.email || '').trim()
    const company = (body.company || '').trim()
    const message = (body.message || '').trim()
    const language = body.language === 'en' ? 'en' : 'de'
    const turnstileToken = (body.turnstileToken || '').trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
    }

    for (const envKey of requiredEnv) {
      if (!process.env[envKey]?.trim()) {
        return NextResponse.json({ error: `missing_env_${envKey}` }, { status: 500 })
      }
    }

    const smtpHost = process.env.SMTP_HOST!.trim()
    const smtpPort = Number(process.env.SMTP_PORT!.trim())
    const smtpUser = process.env.SMTP_USER!.trim()
    const smtpPass = process.env.SMTP_PASS!.trim()
    const smtpFromEmail = process.env.SMTP_FROM_EMAIL?.trim()
    const contactToEmail = process.env.CONTACT_TO_EMAIL!.trim()
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim()

    if (!turnstileSecret) {
      return NextResponse.json({ error: 'missing_env_TURNSTILE_SECRET_KEY' }, { status: 500 })
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: 'captcha_missing' }, { status: 400 })
    }

    const verifyBody = new URLSearchParams()
    verifyBody.append('secret', turnstileSecret)
    verifyBody.append('response', turnstileToken)

    const verifyResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: verifyBody.toString(),
      }
    )

    const verifyData = (await verifyResponse.json()) as {
      success?: boolean
      'error-codes'?: string[]
    }

    if (!verifyData.success) {
      return NextResponse.json(
        { error: 'captcha_failed', detail: verifyData['error-codes'] || [] },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      requireTLS: smtpPort === 587,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        minVersion: 'TLSv1.2',
      },
    })

    const to = contactToEmail
    const from = smtpFromEmail || smtpUser || 'info@wistho.ch'

    const adminMailPromise = transporter.sendMail({
      from: `"Wistho" <${from}>`,
      to,
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      encoding: 'utf-8',
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Firma: ${company || '-'}`,
        '',
        'Nachricht:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Inter, Arial, sans-serif; color: #0f172a; line-height: 1.6; font-size: 15px;">
          <h2 style="margin: 0 0 14px; font-size: 20px;">Neue Anfrage von ${name}</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 8px;"><strong>E-Mail:</strong> ${email}</p>
          <p style="margin: 0 0 8px;"><strong>Unternehmen:</strong> ${company || '-'}</p>
          <p style="margin: 16px 0 6px;"><strong>Nachricht:</strong></p>
          <div style="margin: 0; padding: 12px 14px; border: 1px solid #e2e8f0; background: #f8fafc; border-radius: 6px;">
            ${message.replace(/\n/g, '<br />')}
          </div>
        </div>
      `,
    })

    const customerMailPromise = transporter.sendMail({
      from: `"Wistho" <${from}>`,
      to: email,
      replyTo: to,
      subject:
        language === 'en'
          ? 'Confirmation of your inquiry – Wistho'
          : 'Bestätigung Ihrer Anfrage – Wistho',
      encoding: 'utf-8',
      text:
        language === 'en'
          ? [
              `Hello ${name},`,
              '',
              'Thank you for your inquiry and your interest in a free consultation.',
              'We review your message personally and get back to you within 1–2 business days.',
              '',
              'Your details:',
              `Company: ${company || '-'}`,
              'Message:',
              `"${message}"`,
              '',
              'If you have any questions in advance, feel free to contact us at info@wistho.ch.',
              '',
              'Best regards',
              'Wistho',
            ].join('\n')
          : [
              `Hallo ${name},`,
              '',
              'vielen Dank für Ihre Anfrage und Ihr Interesse an einem kostenlosen Beratungsgespräch.',
              'Wir prüfen Ihre Nachricht persönlich und melden uns innerhalb von 1–2 Werktagen bei Ihnen zurück.',
              '',
              'Ihre Angaben:',
              `Unternehmen: ${company || '-'}`,
              'Nachricht:',
              `"${message}"`,
              '',
              'Falls Sie vorab Fragen haben, erreichen Sie uns jederzeit unter info@wistho.ch.',
              '',
              'Beste Grüße',
              'Wistho',
            ].join('\n'),
      html:
        language === 'en'
          ? `
            <div style="font-family: Inter, Arial, sans-serif; color: #0f172a; line-height: 1.65; font-size: 15px;">
              <p style="margin: 0 0 14px;">Hello ${name},</p>
              <p style="margin: 0 0 14px;">
                Thank you for your inquiry and your interest in a free consultation.
              </p>
              <p style="margin: 0 0 18px;">
                We review your message personally and get back to you within 1–2 business days.
              </p>
              <p style="margin: 0 0 6px;"><strong>Your details:</strong></p>
              <p style="margin: 0 0 6px;">Company: ${company || '-'}</p>
              <p style="margin: 0 0 6px;">Message:</p>
              <div style="margin: 0 0 18px; padding: 12px 14px; border: 1px solid #e2e8f0; background: #f8fafc; border-radius: 6px;">
                "${message.replace(/\n/g, '<br />')}"
              </div>
              <p style="margin: 0 0 18px;">
                If you have any questions in advance, feel free to contact us at
                <a href="mailto:info@wistho.ch" style="color: #0f172a;">info@wistho.ch</a>.
              </p>
              <p style="margin: 0;">Best regards<br />Wistho</p>
            </div>
          `.trim()
          : `
            <div style="font-family: Inter, Arial, sans-serif; color: #0f172a; line-height: 1.65; font-size: 15px;">
              <p style="margin: 0 0 14px;">Hallo ${name},</p>
              <p style="margin: 0 0 14px;">
                vielen Dank für Ihre Anfrage und Ihr Interesse an einem kostenlosen Beratungsgespräch.
              </p>
              <p style="margin: 0 0 18px;">
                Wir prüfen Ihre Nachricht persönlich und melden uns innerhalb von 1–2 Werktagen bei Ihnen zurück.
              </p>
              <p style="margin: 0 0 6px;"><strong>Ihre Angaben:</strong></p>
              <p style="margin: 0 0 6px;">Unternehmen: ${company || '-'}</p>
              <p style="margin: 0 0 6px;">Nachricht:</p>
              <div style="margin: 0 0 18px; padding: 12px 14px; border: 1px solid #e2e8f0; background: #f8fafc; border-radius: 6px;">
                "${message.replace(/\n/g, '<br />')}"
              </div>
              <p style="margin: 0 0 18px;">
                Falls Sie vorab Fragen haben, erreichen Sie uns jederzeit unter
                <a href="mailto:info@wistho.ch" style="color: #0f172a;">info@wistho.ch</a>.
              </p>
              <p style="margin: 0;">Beste Grüße<br />Wistho</p>
            </div>
          `.trim(),
    })

    // Fast response path: ensure admin inbox gets the lead first.
    await adminMailPromise

    // Send customer confirmation in background to keep form response fast.
    void customerMailPromise.catch((err: unknown) => {
      const e = err as { message?: string; code?: string }
      console.error('Customer confirmation email failed:', {
        code: e?.code,
        message: e?.message,
      })
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error: unknown) {
    const err = error as { message?: string; code?: string; response?: string }
    console.error('Contact API send error:', {
      code: err?.code,
      message: err?.message,
      response: err?.response,
    })

    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json(
        {
          error: 'send_failed',
          detail: err?.message || 'unknown_error',
          code: err?.code || null,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ error: 'send_failed' }, { status: 500 })
  }
}
