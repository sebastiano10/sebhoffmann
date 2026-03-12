"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWorkClick = () => {
    if (pathname !== "/") {
      window.location.href = "/#work";
    } else {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070f]/85 backdrop-blur-md border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-[#f0f0f8] tracking-widest uppercase hover:text-[#8b7cf8] transition-colors duration-200"
        >
          Seb Hoffmann
        </Link>

        <div className="flex items-center gap-8">
          <button
            onClick={handleWorkClick}
            className="text-sm text-[#7a8499] hover:text-[#f0f0f8] transition-colors duration-200 cursor-pointer"
          >
            Work
          </button>
          <Link
            href="/contact"
            className="text-sm text-[#7a8499] hover:text-[#f0f0f8] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
