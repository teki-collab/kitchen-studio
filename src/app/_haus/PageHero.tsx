// ДЭД ХУУДАСНЫ НҮҮР ХЭСЭГ — бараан зураг дээр англи гарчиг + доор нь том монгол тайлбар.
// Нүүр хуудасны hero-оос намхан (хуудасны агуулга руу хурдан хүргэнэ).

import Image from "next/image";
import type { ReactNode } from "react";
import { forum } from "./fonts";

export default function PageHero({ title, subtitle, image, children }: { title: ReactNode; subtitle: string; image: string; children?: ReactNode }) {
  return (
    <section id="top" className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-[#2b2119] text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover [filter:saturate(0.55)_brightness(0.8)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2b2119]/55 via-[#2b2119]/35 to-[#2b2119]/80" />
      <div className="mx-auto w-full max-w-[1400px] px-5 pb-14 pt-36 sm:px-10 sm:pb-20">
        <h1 className={forum.className + " uppercase leading-[0.95] text-[length:clamp(2.8rem,8vw,6.5rem)]"}>{title}</h1>
        <p className={forum.className + " mt-4 text-[length:clamp(1.2rem,2.2vw,1.7rem)] tracking-[0.02em] text-white/80"}>{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
