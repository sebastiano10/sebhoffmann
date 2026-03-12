import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seb Hoffmann — Builder, Operator, Investor",
};

const projects = [
  {
    role: "Co-founder & CFO",
    title: "Chilli Chan's",
    description:
      "Building a premium food brand celebrating authentic Taiwanese pantry staples. Led €0.5M seed financing round.",
    link: "https://chillichans.com", 
    linkLabel: "Visit site",
    external: true,
  },
  {
    role: "Head of Product Growth",
    title: "Moss",
    description:
      "Helped scale Europe's leading spend management platform from €10M to €50M ARR. Led growth across acquisition, activation, and monetisation.",
    link: "https://getmoss.com",
    linkLabel: "Visit site",
    external: true,
  },
  {
    role: "Advisor · Investor",
    title: "Baseline Ventures",
    description:
      "Partnering with early-stage founders on strategy, finance, growth frameworks, and fundraising. Active investor and trader in equities and futures.",
    link: "/contact",
    linkLabel: "Get in touch",
    external: false,
  },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#8b7cf8]/[0.06] blur-[140px]" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#8b7cf8]/[0.04] blur-[100px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="fade-up text-[#8b7cf8] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                Builder · Operator · Investor
              </p>
              <h1 className="fade-up-1 text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f0f0f8] tracking-tight leading-[1.05] mb-6">
                Seb
                <br />
                Hoffmann
              </h1>
              <p className="fade-up-2 text-[#7a8499] text-lg leading-relaxed max-w-lg mb-10">
                Co-founder & CFO of{" "}
                <span className="text-[#f0f0f8]/80">Chilli Chan&apos;s</span>, a food brand bringing
                authentic Taiwanese pantry staples to the world. Before that,
                a decade in tech - most recently growing a Series B fintech from
                €10M to €50M ARR as Head of Product Growth. I advise early-stage founders on finance and
                growth, and stay close to the markets as an active investor and
                trader.
              </p>
              <div className="fade-up-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#8b7cf8] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#7c6de8] active:scale-95 transition-all duration-200"
                >
                  Get in touch
                </Link>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-[#7a8499] text-sm hover:text-[#f0f0f8] transition-colors duration-200"
                >
                  See my work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="fade-up-4 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d0d1a] shrink-0">
                <Image src="/photo.jpeg" alt="Seb Hoffmann" fill className="object-cover object-top" priority />
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b7cf8]/[0.08] via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="py-28 sm:py-36 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#8b7cf8] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0f8] tracking-tight mb-16">
            Selected experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d1a] hover:border-[#8b7cf8]/25 hover:bg-[#0f0f1e] transition-all duration-300"
              >
                <p className="text-[#8b7cf8] text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">
                  {project.role}
                </p>
                <h3 className="text-[#f0f0f8] text-xl font-bold mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#7a8499] text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-[#8b7cf8] text-xs font-semibold tracking-wide">
                  {project.linkLabel}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
