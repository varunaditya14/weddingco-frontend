"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"" | "loading" | "success" | "error">(
    ""
  );
  const [statusText, setStatusText] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setStatusText("");

    const fd = new FormData(e.currentTarget);

    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      weddingDate: String(fd.get("weddingDate") || ""),
      message: String(fd.get("message") || ""),
    };

    // Frontend validation
    if (!data.name || !data.email || !data.weddingDate || !data.message) {
      setStatus("error");
      setStatusText("Please fill all fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json?.ok) {
        setStatus("error");
        setStatusText(json?.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setStatusText("Message sent! ✅ We’ll contact you soon.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setStatusText("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p className="mt-2 text-black/60">
        Tell us your wedding date and requirements. We'll get back within 24
        hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          className="w-full rounded-md border border-black/20 bg-transparent px-4 py-3 outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-black/20 bg-transparent px-4 py-3 outline-none"
        />
        <input
          name="weddingDate"
          placeholder="Wedding Date (e.g., 12 Jan 2026)"
          className="w-full rounded-md border border-black/20 bg-transparent px-4 py-3 outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          className="w-full rounded-md border border-black/20 bg-transparent px-4 py-3 outline-none"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-md bg-black px-4 py-3 font-medium text-white disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {statusText ? (
          <p
            className={
              status === "success"
                ? "text-green-600"
                : status === "error"
                ? "text-red-600"
                : "text-black/70"
            }
          >
            {statusText}
          </p>
        ) : null}
      </form>
    </section>
  );
}
