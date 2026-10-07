// ХӨЛ ХЭСЭГ — нүүр болон бусад бүх хуудсанд ижил.
// Дээд хэсэг: урилга + товчнууд. Доод хэсэг: лого, хуудсууд, хаяг, холбоо барих, сошиал.

import Link from "next/link";
import { forum, script } from "./fonts";
import { Logo } from "./SiteHeader";
import { ADDRESS_LINES, BOOK_HREF, FACEBOOK, INSTAGRAM, MAP_LINK, PAGES, PHONE, PHONE_HOURS, PHONE_TEL } from "./site";

export default function SiteFooter() {
  return (
    <footer id="haus-contact" className="bg-[#2b2119] px-5 pb-10 pt-20 text-white sm:px-10 sm:pt-28">
      <div className="mx-auto max-w-[1400px]">
        {/* Урилга */}
        <div className="border-b border-white/20 pb-16 text-center">
          <p className="text-[10px] font-semibold tracking-[0.3em] text-white/60">ДОЛОО ХОНОГ БҮР ШИНЭ ЖОР, ШИНЭ АМТ, ШИНЭ ТУРШЛАГА</p>
          <h2 className={forum.className + " mt-5 uppercase leading-[1] text-[length:clamp(2.5rem,6vw,5rem)]"}>
            Let&apos;s <span className={script.className + " normal-case text-[1.15em] leading-[0.5]"}>C</span>ook together
          </h2>
          <p className={forum.className + " mt-4 text-[length:clamp(1.15rem,2vw,1.5rem)] tracking-[0.02em] text-white/75"}>Хамтдаа хоол хийцгээе</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={BOOK_HREF} className="w-full max-w-[260px] bg-[#f4efe8] px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-[#2b2119] transition-colors hover:bg-white">
              АНГИ ЗАХИАЛАХ
            </Link>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="w-full max-w-[260px] border border-white/50 px-6 py-4 text-[11px] font-semibold tracking-[0.16em] transition-colors hover:bg-white/10">
              INSTAGRAM DM ↗
            </a>
          </div>
        </div>

        {/* Мэдээллийн баганууд */}
        <div className="grid gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo large />
            <p className="mt-5 text-[12px] leading-6 text-white/60">
              Амтыг урлаж, хоолыг бүтээх нь.
              <br />
              Улаанбаатар · Since 2022
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-white/50">ХУУДСУУД</p>
            <div className="mt-4 flex flex-col gap-2 text-[14px] text-white/85">
              {PAGES.map((page) => (
                <Link key={page.href} href={page.href} className="hover:text-white">
                  {page.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-white/50">ХАЯГ</p>
            <p className="mt-4 text-[14px] leading-6 text-white/85">
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </p>
            <a href={MAP_LINK} target="_blank" rel="noreferrer" className="mt-3 inline-block border-b border-white/40 pb-0.5 text-[12px] text-white/70 hover:text-white">
              Газрын зураг ↗
            </a>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-white/50">ХОЛБОО БАРИХ</p>
            <a href={PHONE_TEL} className={forum.className + " mt-4 block text-[22px] hover:text-[#ecd9bf]"}>
              {PHONE}
            </a>
            <p className="mt-1 text-[12px] text-white/60">Утсаар {PHONE_HOURS}</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] text-white/50">СОШИАЛ</p>
            <div className="mt-4 flex flex-col gap-2 text-[14px] text-white/85">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-white">Instagram ↗</a>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-white">Facebook ↗</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Kitchen Studio · Тулга Төхөөрөмж ХХК</span>
          <a href="#top" className="hover:text-white/70">Дээш буцах ↑</a>
        </div>
      </div>
    </footer>
  );
}
