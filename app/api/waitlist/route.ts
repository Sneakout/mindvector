import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { email?: unknown } | null;
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!emailPattern.test(email)) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) return NextResponse.json({ error: "Waitlist is not configured yet." }, { status: 503 });
  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
    method: "POST",
    headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify({ email }), cache: "no-store",
  });
  if (response.status === 409) return NextResponse.json({ error: "That email is already on the list." }, { status: 409 });
  if (!response.ok) return NextResponse.json({ error: "We couldn’t save your email. Please try again." }, { status: 502 });
  return NextResponse.json({ ok: true }, { status: 201 });
}
