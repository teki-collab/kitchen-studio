"use client";

// ДЭЭД ЦЭС — Ангиуд / Хаалттай эвент / Холбоо барих хуудсуудад ашиглана.
// (Нүүр хуудасны HAUS цэс нь загвар солих товчтой тул HausDesign.tsx дотроо тусдаа.)
// Компьютерт: лого + хуудсууд + "ЗАХИАЛАХ" товч.
// Утсанд: лого + "ЦЭС" товч → дарахад бүтэн дэлгэцийн цэс нээгдэнэ.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { forum, script } from "./fonts";
import { BOOK_HREF, PAGES } from "./site";

export function Logo({ large = false }: { large?: boolean }) {
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className={script.className + (large ? " text-[46px]" : " text-[34px]")}>Kitchen</span>
      <span className={forum.className + " -mt-1 flex items-center gap-2 tracking-[0.5em]" + (large ? " text-[13px]" : " text-[11px]")}>
        <span className="h-px w-5 bg-current opacity-70" />
        STUDIO
        <span className="h-px w-5 bg-current opacity-70" />
      </span>
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname(); // одоо аль хуудсан дээр байгааг мэдэх (идэвхтэй холбоосыг тодруулна)
  const [open, setOpen] = useState(false);

  // Утасны цэс нээлттэй үед ард талын хуудсыг түгжинэ
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/30 text-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 sm:px-10">
        <Link href="/" aria-label="Kitchen Studio нүүр">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] font-medium tracking-[0.16em] lg:flex">
          {PAGES.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={"uppercase hover:text-[#e6d5bf] " + (pathname === page.href ? "border-b border-white pb-1" : "")}
            >
              {page.label}
            </Link>
          ))}
          <Link href={BOOK_HREF} className="border border-white/60 px-4 py-2 hover:bg-white hover:text-[#2b2119]">
            ЗАХИАЛАХ
          </Link>
        </nav>

        <button type="button" onClick={() => setOpen(true)} className="border border-white/60 px-3 py-2 text-[10px] font-semibold tracking-[0.16em] lg:hidden">
          ЦЭС
        </button>
      </div>

      {/* Утасны бүтэн дэлгэцийн цэс */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#2b2119] px-5 py-4 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <Logo />
            <button type="button" onClick={() => setOpen(false)} aria-label="Цэс хаах" className="px-2 text-4xl leading-none">
              ×
            </button>
          </div>
          <nav className="mt-14 flex flex-col gap-6">
            {PAGES.map((page) => (
              <Link key={page.href} href={page.href} onClick={() => setOpen(false)} className={forum.className + " text-[34px] uppercase leading-none"}>
                {page.label}
              </Link>
            ))}
          </nav>
          <Link
            href={BOOK_HREF}
            onClick={() => setOpen(false)}
            className="mt-auto bg-[#f4efe8] px-6 py-4 text-center text-[11px] font-semibold tracking-[0.16em] text-[#2b2119]"
          >
            АНГИ ЗАХИАЛАХ
          </Link>
        </div>
      )}
    </header>
  );
}
