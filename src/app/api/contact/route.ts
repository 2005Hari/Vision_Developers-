import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, suburb } = body;

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration. Please check your .env.local file.');
      return NextResponse.json(
        { success: false, message: 'Email configuration missing. Please contact support.' },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP with SSL configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      },
      secure: true,
      port: 465
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'nmharikrishna1228@gmail.com',
      subject: `New Contact Form Submission from ${name}${subject ? ` - ${subject}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3a3a3a;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${suburb ? `<p><strong>Suburb:</strong> ${suburb}</p>` : ''}
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #c4b59a;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from the Vision Developers website contact form.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
} 