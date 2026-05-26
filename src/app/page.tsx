import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoGrid from "@/components/LogoGrid";

export const metadata: Metadata = {
  title: "Seb Hoffmann — Finance & Growth",
  description:
    "I help early-stage startups grow revenue and build the financial infrastructure to sustain it — without two senior hires.",
};

const bullets = [
  "Product-led growth strategy and execution",
  "Growth analytics, KPIs, and experimentation frameworks",
  "Financial modelling and cash flow forecasting",
  "Monthly KPI and investor reporting",
  "Fundraising prep: data rooms, metrics, pitch narrative",
  "Hands-on advisory for early founding teams",
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
                I help early-stage startups grow revenue and build the financial
                infrastructure to sustain it — without two senior hires.
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
              Finance &amp; Growth Retainer
            </h2>
            <span className="px-3 py-1 rounded-full bg-[#8b7cf8]/10 border border-[#8b7cf8]/20 text-[#8b7cf8] text-xs font-semibold">
              Available now
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
                  I focus on the{" "}
                  <strong className="text-[#8b7cf8] font-semibold">
                    highest-leverage areas first
                  </strong>{" "}
                  — not generic playbooks. For most early-stage teams this
                  means identifying where users drop off and where the numbers
                  are unclear to investors.
                </p>
                <p>
                  Most clients see{" "}
                  <strong className="text-[#8b7cf8] font-semibold">
                    meaningful progress within the first month
                  </strong>
                  : a working financial model, growth metrics that tell a
                  story, and reporting that builds investor confidence.
                </p>
                <p>
                  I work embedded in your team (Slack/calls), handle things
                  end-to-end, and never hand off a deliverable without the
                  context to act on it.
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
