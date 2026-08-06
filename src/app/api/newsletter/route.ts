import { NextResponse } from "next/server";
import { sendNewsletterEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const optionalField = (key: string) =>
    typeof body[key] === "string" && body[key].trim() ? (body[key] as string).trim() : undefined;

  try {
    await sendNewsletterEmail({
      name,
      email,
      company: optionalField("company"),
      country: optionalField("country"),
    });
  } catch (error) {
    console.error("Failed to send newsletter subscription email:", error);
    return NextResponse.json(
      {
        error: "Something went wrong while subscribing. Please try again later.",
        debug: error instanceof Error ? error.message : String(error),
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
