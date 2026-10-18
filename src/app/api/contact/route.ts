import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, preferredContact, orderNumber, message, marketingConsent, smsConsent } = body;

    // Validate required fields (Only Name and Message are mandatory)
    if (!name || !message) {
      return NextResponse.json(
        { success: false, message: 'Please provide your Name and Message.' },
        { status: 400 }
      );
    }

    // Basic email format check if email is provided
    if (email && email.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, message: 'Please provide a valid email address.' },
          { status: 400 }
        );
      }
    }

    // Server-side logging for incoming inquiries
    console.log('[Support Works International Inquiry]', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || 'N/A',
      service: service || 'General Consultation',
      preferredContact: preferredContact || 'email',
      orderNumber: orderNumber || 'N/A',
      marketingConsent: Boolean(marketingConsent),
      smsConsent: Boolean(smsConsent),
      messagePreview: message.slice(0, 100),
    });

    // In production, you can easily wire this up with Resend, Nodemailer, or SendGrid:
    // e.g., await resend.emails.send({ to: 'info@supportworksinternational.com', ... });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your service inquiry has been received. Our team will review your requirements and respond shortly.',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
