"use client";

type Logo =
  | { name: string; src: string; text?: false }
  | { name: string; src?: undefined; text: true };

const logos: Logo[] = [
  { name: "Moss", src: "/logos/moss.png" },
  { name: "DAZN", src: "/logos/dazn.svg" },
  { name: "Chilli Chan's", src: "/logos/chillichans.png" },
  { name: "Pentahotels", src: "/logos/pentahotels.svg" },
  { name: "STACH Food", text: true },
  { name: "Startupbootcamp", src: "/logos/startupbootcamp.svg" },
  { name: "CoinMirror", text: true },
  { name: "86 Mayo", text: true },
];

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-4 gap-x-10 gap-y-8 items-center justify-items-center">
      {logos.map((logo) =>
        logo.text ? (
          <span
            key={logo.name}
            className="text-[#7a8499] text-xs font-semibold tracking-widest uppercase opacity-50 hover:opacity-75 transition-opacity text-center"
          >
            {logo.name}
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            className="h-7 w-auto max-w-[130px] opacity-40 hover:opacity-70 transition-opacity"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        )
      )}
    </div>
  );
}
