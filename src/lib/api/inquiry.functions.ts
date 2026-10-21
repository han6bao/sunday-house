import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "../bindings.server";

/**
 * Concierge inquiry. Every inquiry is
 *  1. saved to the D1 database (table `inquiries`) when the DB binding exists, and
 *  2. emailed to the studio through Resend when RESEND_API_KEY and
 *     INQUIRY_TO_EMAIL are set (INQUIRY_FROM_EMAIL is optional).
 * If neither is configured, the call reports `delivered: false` and the page
 * shows the visitor a direct email fallback instead of a false "sent".
 */
const Inquiry = z.object({
  celebrating: z.string().max(80),
  date: z.string().max(120).optional().default(""),
  place: z.string().max(200).optional().default(""),
  feeling: z.array(z.string().max(60)).max(12).optional().default([]),
  notes: z.string().max(4000).optional().default(""),
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().default(""),
  heard: z.string().max(200).optional().default(""),
  wantsGuide: z.boolean().optional().default(false),
  website: z.string().max(0).optional().default(""), // honeypot: real people leave it empty
});

function esc(s: string) {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string);
}

export const sendInquiry = createServerFn({ method: "POST" })
  .validator(Inquiry)
  .handler(async ({ data }) => {
    if (data.website) return { ok: true, delivered: true }; // quietly drop bots
    let saved = false;
    let emailed = false;

    const { DB } = bindings();
    if (DB) {
      try {
        await DB.prepare(
          "CREATE TABLE IF NOT EXISTS inquiries (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at TEXT, celebrating TEXT, date TEXT, place TEXT, feeling TEXT, notes TEXT, name TEXT, email TEXT, phone TEXT, heard TEXT, wants_guide INTEGER)"
        ).run();
        await DB.prepare(
          "INSERT INTO inquiries (created_at, celebrating, date, place, feeling, notes, name, email, phone, heard, wants_guide) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        )
          .bind(new Date().toISOString(), data.celebrating, data.date, data.place, data.feeling.join(", "), data.notes, data.name, data.email, data.phone, data.heard, data.wantsGuide ? 1 : 0)
          .run();
        saved = true;
      } catch {
        saved = false;
      }
    }

    const key = process.env.RESEND_API_KEY;
    const to = process.env.INQUIRY_TO_EMAIL;
    if (key && to) {
      const rows: [string, string][] = [
        ["Celebrating", data.celebrating],
        ["Date", data.date],
        ["Place", data.place],
        ["Feeling", data.feeling.join(", ")],
        ["Notes", data.notes],
        ["Name", data.name],
        ["Email", data.email],
        ["Phone", data.phone],
        ["Found us", data.heard],
        ["Wants the collections guide", data.wantsGuide ? "Yes" : "No"],
      ];
      const html = `<h2 style="font-family:Georgia,serif">New inquiry: ${esc(data.celebrating)}</h2><table cellpadding="6">${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`)
        .join("")}</table><p>Reply within 24 hours, ideally with a short voice note.</p>`;
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: process.env.INQUIRY_FROM_EMAIL || "Sunday House <onboarding@resend.dev>",
            to: [to],
            reply_to: data.email,
            subject: `New inquiry: ${data.celebrating} — ${data.name}${data.date ? `, ${data.date}` : ""}`,
            html,
          }),
        });
        emailed = res.ok;
      } catch {
        emailed = false;
      }
    }

    return { ok: true, delivered: saved || emailed };
  });
