import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Seb Hoffmann",
};

const contacts = [
  {
    label: "Email",
    value: "sh@sebhoffmann.com",
    href: "mailto:sh@sebhoffmann.com",
    description: "Best for project enquiries and advisory",
  },
  {
    label: "X (Twitter)",
    value: "@zelos808",
    href: "https://x.com/zelos808",
    description: "Markets, tech ecosystem, and building in public",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Sebastian Hoffmann",
    href: "https://linkedin.com/in/sebhoffm",
    description: "Every job title I've collected since 2004",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#8b7cf8]/[0.05] blur-[140px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-32 w-full">
        <div className="max-w-xl">
          <p className="text-[#00e5a0] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f0f8] tracking-tight mb-4 font-display">
            Let&apos;s talk
          </h1>
          <p className="text-[#7a8499] text-lg mb-14 leading-relaxed">
            Whether you&apos;re an early-stage founder looking for support, interested
            in partnering with Chilli Chan&apos;s, or just want to connect - I&apos;m
            happy to hear from you.
          </p>

          <div className="space-y-4">
            {contacts.map((contact) => (
              <Link
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm hover:border-[#00e5a0]/25 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div>
                  <p className="text-[#00e5a0] text-[10px] font-semibold tracking-[0.2em] uppercase mb-1">
                    {contact.label}
                  </p>
                  <p className="text-[#f0f0f8] font-semibold text-base mb-0.5">
                    {contact.value}
                  </p>
                  <p className="text-[#7a8499] text-sm">{contact.description}</p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#7a8499] group-hover:text-[#00e5a0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-4"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
