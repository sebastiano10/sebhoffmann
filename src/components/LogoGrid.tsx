"use client";

type Filter = "invert" | "invertWhiteBg" | "plain";

interface Logo {
  name: string;
  src: string;
  filter: Filter;
  cls?: string;
}

// invert         = transparent bg logo  → brightness(0) invert(1) → crisp white mark
// invertWhiteBg  = white/light bg logo  → grayscale + invert → mark on near-invisible dark bg
// plain          = dark/black bg logo   → no filter, bg blends into page
const row1: Logo[] = [
  { name: "Moss",            src: "/logos/moss.png",            filter: "invert" },
  { name: "DAZN",            src: "/logos/dazn.svg",            filter: "invert" },
  { name: "Chilli Chan's",   src: "/logos/chillichans.png",     filter: "invert" },
  { name: "Pentahotels",     src: "/logos/pentahotels.svg",     filter: "invert" },
  { name: "Startupbootcamp", src: "/logos/startupbootcamp.svg", filter: "invert" },
  { name: "86 Mayo",         src: "/logos/86mayo.svg",          filter: "invert" },
];

const row2: Logo[] = [
  { name: "STACH Food",  src: "/logos/stach.png",          filter: "invertWhiteBg" },
  { name: "CoinMirror",  src: "/logos/coinmirror.png",     filter: "invertWhiteBg" },
  { name: "cap+matcher", src: "/logos/capmatcher.jpg",     filter: "invertWhiteBg", cls: "h-10" },
  { name: "IXDS",        src: "/logos/ixds.png",           filter: "plain" },
  { name: "TrueProfile", src: "/logos/trueprofile.avif",   filter: "invertWhiteBg" },
];

const filterStyle: Record<Filter, string> = {
  invert:        "brightness(0) invert(1)",
  invertWhiteBg: "grayscale(1) invert(1)",
  plain:         "none",
};

function LogoRow({ logos }: { logos: Logo[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 items-center">
      {logos.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={logo.name}
          src={logo.src}
          alt={logo.name}
          className={`${logo.cls ?? "h-7"} w-auto max-w-[150px] opacity-40 hover:opacity-70 transition-opacity`}
          style={{ filter: filterStyle[logo.filter] }}
        />
      ))}
    </div>
  );
}

export default function LogoGrid() {
  return (
    <div className="space-y-6">
      <LogoRow logos={row1} />
      <LogoRow logos={row2} />
    </div>
  );
}
