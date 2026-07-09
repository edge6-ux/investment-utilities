import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { firstName, lastName, company, phone, email, service, city, details } = body;

    if (!firstName || !lastName || !phone || !email || !service || !city) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const to = process.env.CONTACT_EMAIL;
    if (!to) {
      return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
    }

    await resend.emails.send({
      from: "Investment Utilities Website <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New Quote Request — ${service} (${city}, GA)`,
      text: [
        "NEW QUOTE REQUEST",
        "─────────────────────────────",
        `Name:     ${firstName} ${lastName}`,
        `Company:  ${company || "—"}`,
        `Phone:    ${phone}`,
        `Email:    ${email}`,
        `Service:  ${service}`,
        `City:     ${city}, GA`,
        "",
        "Project Details:",
        details || "None provided.",
        "─────────────────────────────",
        "Sent from investmentutilities.com",
      ].join("\n"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
