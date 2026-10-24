interface InquiryPayload {
  type?: 'inquiry' | 'order';
  fullName?: string;
  companyName?: string;
  email?: string;
  websiteUrl?: string;
  service?: string;
  projectDescription?: string;
  budget?: string;
  timeline?: string;
  additionalRequirements?: string;
  inquiryRef?: string;
  orderRef?: string;
  selectedPackage?: string;
  agreedPrice?: string;
  orderStatus?: string;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    let body: InquiryPayload = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: 'Invalid JSON payload.' });
      }
    }

    const isOrder = body.type === 'order';
    const { fullName, email, projectDescription, service, budget, timeline } = body || {};

    // Validate required fields
    if (!fullName || !email || (!isOrder && !projectDescription)) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: Name, email, and project details are required.',
      });
    }

    // Check email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address format.',
      });
    }

    // Server-side environment variables for Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'othmarphilip@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'Othmar Studio Inquiries <onboarding@resend.dev>';

    // Do not simulate delivery when provider is not configured
    if (!resendApiKey) {
      return res.status(501).json({
        success: false,
        unconfigured: true,
        message:
          'Transactional email provider (RESEND_API_KEY) is not configured in server environment variables. Submission preserved for direct client communication.',
      });
    }

    const submissionDate = new Date().toUTCString();
    const reference =
      body.inquiryRef ||
      body.orderRef ||
      `${isOrder ? 'ORD' : 'INQ'}-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const subject = isOrder
      ? `New Order Request — Othmar Creative Studio`
      : `New Project Inquiry — Othmar Creative Studio`;

    const textContent = isOrder
      ? `New Order Request — Othmar Creative Studio\n` +
        `Order Reference: ${reference}\n` +
        `Submission Date: ${submissionDate}\n\n` +
        `Customer: ${fullName}\n` +
        `Company: ${body.companyName || 'Not specified'}\n` +
        `Email: ${email}\n` +
        `Service / Package: ${body.selectedPackage || service || 'Not specified'}\n` +
        `Price / Scope: ${body.agreedPrice || budget || 'To be scoped'}\n` +
        `Status: ${body.orderStatus || 'Pending Studio Confirmation'}\n\n` +
        `Customer Notes:\n${projectDescription || 'None'}`
      : `New Project Inquiry — Othmar Creative Studio\n` +
        `Inquiry Reference: ${reference}\n` +
        `Submission Date: ${submissionDate}\n\n` +
        `Client Name: ${fullName}\n` +
        `Company / Entity: ${body.companyName || 'Not specified'}\n` +
        `Client Email: ${email}\n` +
        `Website URL: ${body.websiteUrl || 'Not specified'}\n` +
        `Requested Service: ${service || 'General Inquiry'}\n` +
        `Estimated Budget: ${budget || 'Not specified'}\n` +
        `Preferred Timeline: ${timeline || 'Not specified'}\n\n` +
        `Project Scope & Objectives:\n${projectDescription}\n\n` +
        `Additional Requirements:\n${body.additionalRequirements || 'None'}`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; background-color: #101114; color: #F5F4EF; border-radius: 8px;">
        <div style="border-bottom: 1px solid #34353A; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #C6FF4D; font-size: 20px; margin: 0 0 6px 0;">${subject}</h2>
          <div style="font-size: 12px; color: #B9BBC2;">Reference: <strong>${reference}</strong> · Submitted: ${submissionDate}</div>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #B9BBC2; width: 150px;">Client Name:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #F5F4EF;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B9BBC2;">Company / Entity:</td>
            <td style="padding: 8px 0; color: #F5F4EF;">${body.companyName || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B9BBC2;">Email Address:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C6FF4D; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B9BBC2;">Current Website:</td>
            <td style="padding: 8px 0; color: #F5F4EF;">${body.websiteUrl ? `<a href="${body.websiteUrl}" style="color: #F5F4EF;">${body.websiteUrl}</a>` : 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B9BBC2;">Service Requested:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #F5F4EF;">${service || 'General Inquiry'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B9BBC2;">Estimated Budget:</td>
            <td style="padding: 8px 0; color: #F5F4EF;">${budget || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #B9BBC2;">Target Timeline:</td>
            <td style="padding: 8px 0; color: #F5F4EF;">${timeline || 'Not specified'}</td>
          </tr>
        </table>

        ${projectDescription ? `
        <div style="margin-top: 20px; padding: 16px; background-color: #22242A; border: 1px solid #34353A; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; color: #F5F4EF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Project Scope & Objectives</h4>
          <p style="margin: 0; color: #B9BBC2; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${projectDescription}</p>
        </div>
        ` : ''}

        ${body.additionalRequirements ? `
        <div style="margin-top: 12px; padding: 16px; background-color: #22242A; border: 1px solid #34353A; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; color: #F5F4EF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Additional Requirements</h4>
          <p style="margin: 0; color: #B9BBC2; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${body.additionalRequirements}</p>
        </div>
        ` : ''}

        <p style="margin-top: 24px; font-size: 11px; color: #B9BBC2; border-top: 1px solid #34353A; padding-top: 12px;">
          Delivered to ${notificationEmail}. Replying directly to this email will reach the client (${email}).
        </p>
      </div>
    `;

    // Resend REST API invocation
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notificationEmail],
        reply_to: email,
        subject: subject,
        text: textContent,
        html: htmlContent,
      }),
    });

    if (resendRes.ok) {
      return res.status(200).json({
        success: true,
        reference: reference,
        message: 'Inquiry transmitted successfully via Resend.',
      });
    } else {
      const errText = await resendRes.text();
      console.error('Resend delivery error:', errText);
      return res.status(502).json({
        success: false,
        error: 'Transactional email provider rejected delivery. Please verify RESEND_API_KEY and FROM_EMAIL.',
      });
    }
  } catch (err: any) {
    console.error('Inquiry server error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error while processing inquiry transmission.',
    });
  }
}
