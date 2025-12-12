import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, weddingDate, message } = await req.json();

    if (!name || !email || !weddingDate || !message) {
      return NextResponse.json(
        { ok: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // For now: just log in terminal (later you can email/store in DB)
    console.log("📩 New Contact Message:", {
      name,
      email,
      weddingDate,
      message,
    });

    return NextResponse.json({ ok: true, message: "Message received!" });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 500 }
    );
  }
}
