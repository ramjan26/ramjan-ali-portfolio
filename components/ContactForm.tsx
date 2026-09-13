"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    await new Promise((r) => setTimeout(r, 650));
    setBusy(false);
    setSent(true);
  }

  if (sent) return <div className="contact-success">Thanks — your message is ready to be connected to a real mail endpoint.</div>;

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Name<input name="name" required /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Message<textarea name="message" required rows={5} /></label>
      <button type="submit" className="button button-primary" disabled={busy}>{busy ? "Sending…" : "Send message"}</button>
    </form>
  );
}
