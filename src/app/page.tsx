import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoGrid from "@/components/LogoGrid";

export const metadata: Metadata = {
  title: "Seb Hoffmann — AI Builder",
  description:
    "I assess where AI can move the needle in your business, then build and deploy the tools that make it happen.",
};

const bullets = [
  "Custom AI tools built around how your business actually works",
  "End-to-end workflow automation that eliminates manual, repetitive tasks",
  "Pinpointing the highest-ROI opportunities to apply AI in your operations",
  "AI-powered customer communication, support, and operations",
  "Hands-on building. No slides, no high-level advice",
  "Ongoing support and iteration as your needs evolve",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <Image
              src="/photo.jpeg"
              alt="Seb Hoffmann"
              width={64}
              height={64}
              className="rounded-full object-cover object-top shrink-0"
              priority
            />
            <div>
              <h1 className="text-2xl font-bold text-[#f0f0f8]">
                Seb Hoffmann
              </h1>
              <p className="text-[#7a8499] text-sm mt-0.5 max-w-sm leading-snug">
                I figure out exactly where AI can have the biggest impact in your
                business, then build and ship the tools that make it real.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 ml-6 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-[#f0f0f8]"
          >
            Contact me
          </Link>
        </header>

        {/* Service card */}
        <section className="rounded-2xl border border-white/10 bg-[#0d0d1a] p-8 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-bold text-[#f0f0f8]">
              AI Builder Retainer
            </h2>
            <span className="px-3 py-1 rounded-full bg-[#8b7cf8]/10 border border-[#8b7cf8]/20 text-[#8b7cf8] text-xs font-semibold">
              Limited availability
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
            {/* What this covers */}
            <div>
              <h3 className="font-semibold text-[#f0f0f8] mb-4">
                What this covers
              </h3>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-[#9aa3b2]"
                  >
                    <span className="mt-1 text-[#8b7cf8] shrink-0 select-none">
                      •
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* How I work */}
            <div>
              <h3 className="font-semibold text-[#f0f0f8] mb-4">How I work</h3>
              <div className="space-y-4 text-sm text-[#9aa3b2] leading-relaxed">
                <p>
                  I start by assessing your operations to find the{" "}
                  <strong className="text-[#8b7cf8] font-semibold">
                    highest-leverage bottlenecks first
                  </strong>
                  , not off-the-shelf templates. That means pinpointing exactly
                  where hours disappear into manual work and where a purpose-built
                  AI tool can reclaim that time entirely.
                </p>
                <p>
                  Most clients see{" "}
                  <strong className="text-[#8b7cf8] font-semibold">
                    real operational change within the first month
                  </strong>
                  : automations running, tools deployed, and time freed up.
                  Often the equivalent of a part-time hire.
                </p>
                <p>
                  I work embedded in your operations, deliver everything
                  end-to-end, and never hand off a tool without making sure
                  your team can actually use it.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="border-t border-white/10 pt-6 flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-[#f0f0f8]">€600 / day</p>
              <p className="text-[#7a8499] text-sm mt-0.5">
                Typically 2–4 days / month
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#8b7cf8] text-white font-semibold text-sm hover:bg-[#7c6de8] transition-colors"
            >
              Let&apos;s get started
            </Link>
          </div>
        </section>

        {/* Logo grid */}
        <LogoGrid />
      </div>
    </main>
  );
}
