"use client";

import { useState } from "react";

interface Logo {
  name: string;
  domain: string;
}

const logos: Logo[] = [
  { name: "Moss", domain: "getmoss.com" },
  { name: "DAZN", domain: "dazn.com" },
  { name: "Pentahotels", domain: "pentahotels.com" },
  { name: "Startupbootcamp", domain: "startupbootcamp.org" },
  { name: "Chilli Chan's", domain: "chillichans.com" },
  { name: "STACH Food", domain: "stach.de" },
  { name: "CoinMirror", domain: "coinmirror.io" },
  { name: "86 Mayo", domain: "86mayo.com" },
];

function LogoItem({ logo }: { logo: Logo }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="relative h-7 flex items-center justify-center min-w-[80px]">
      {/* Text shown until image loads */}
      {!imgLoaded && (
        <span className="text-[#7a8499] text-xs font-semibold tracking-wide text-center whitespace-nowrap opacity-50 hover:opacity-75 transition-opacity cursor-default">
          {logo.name}
        </span>
      )}
      {/* Image hidden until loaded, then swaps in */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://logo.clearbit.com/${logo.domain}`}
        alt={logo.name}
        className={`h-6 w-auto max-w-[120px] grayscale opacity-40 hover:opacity-70 transition-opacity absolute ${imgLoaded ? "block" : "hidden"}`}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgLoaded(false)}
      />
    </div>
  );
}

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-4 gap-x-10 gap-y-7 items-center justify-items-center">
      {logos.map((logo) => (
        <LogoItem key={logo.name} logo={logo} />
      ))}
    </div>
  );
}
