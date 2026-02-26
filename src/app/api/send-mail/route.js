import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Fallback: send contact form data via email when webhook fails.
 * Uses Gmail SMTP; all config from env (MAIL_*, RECIPIENT_EMAIL).
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const user = process.env.MAIL_USERNAME;
    const pass = process.env.MAIL_PASSWORD;
    const recipient = process.env.RECIPIENT_EMAIL || user;

    if (!user || !pass || !recipient) {
      return NextResponse.json(
        { success: false, message: 'Email is not configured (MAIL_USERNAME, MAIL_PASSWORD, RECIPIENT_EMAIL).' },
        { status: 503 }
      );
    }

    const port = parseInt(process.env.MAIL_PORT || '587', 10);
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVER || 'smtp.gmail.com',
      port,
      secure: process.env.MAIL_SECURE === 'true',
      auth: { user, pass },
    });

    const mailSubject = subject ? `[Portfolio] ${subject}` : '[Portfolio] Contact form';
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject || '(none)'}`,
      '',
      'Message:',
      message,
    ].join('\n');

    await transporter.sendMail({
      from: process.env.MAIL_FROM || user,
      to: recipient,
      replyTo: email,
      subject: mailSubject,
      text,
    });

    return NextResponse.json({ success: true, message: 'Email sent.' });
  } catch (err) {
    console.error('send-mail error:', err.message);
    return NextResponse.json(
      { success: false, message: err.message || 'Failed to send email.' },
      { status: 500 }
    );
  }
}
