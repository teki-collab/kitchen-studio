// ЛОГОНЫ ТУРШИЛТЫН ХУУДАС
// Нээх хаяг: http://localhost:3000/logo-test
// HAUS загварын дээд цэсэнд тавих "KITCHEN STUDIO" бичгийн 3 хувилбар.
// Сонголт хийсний дараа энэ хавтсыг устгана. Бусад файлд нөлөөлөхгүй.

import Image from "next/image";
import { Forum, Great_Vibes } from "next/font/google";

const forum = Forum({ weight: "400", subsets: ["latin"], display: "swap" });
const script = Great_Vibes({ weight: "400", subsets: ["latin"], display: "swap" });

// ── A · ЖИНХЭНЭ ЛОГОНЫ ХЭЛБЭР ──
// Kitchen Studio-ийн одоогийн лого (хар хайрцаг доторх 2 мөр) — энд нимгэн хүрээтэй хувилбар.
function LogoA() {
  return (
    <span className={forum.className + " inline-block border border-white/80 px-3.5 py-2 text-[15px] leading-[1.15] tracking-[0.32em]"}>
      KITCHEN
      <br />
      STUDIO
    </span>
  );
}

// ── B · SCRIPT + ТОМ ҮСЭГ ──
// "Kitchen" гар бичмэл фонтоор, "STUDIO" жижиг зайтай том үсгээр, хоёр талдаа нимгэн зураастай.
function LogoB() {
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className={script.className + " text-[34px]"}>Kitchen</span>
      <span className={forum.className + " -mt-1 flex items-center gap-2 text-[11px] tracking-[0.5em]"}>
        <span className="h-px w-5 bg-white/70" />
        STUDIO
        <span className="h-px w-5 bg-white/70" />
      </span>
    </span>
  );
}

// ── C · МОНОГРАМ ──
// Дугуй дотор "KS" тэмдэг + хажууд нь нэр, доор нь жижиг "EST. 2022 · ULAANBAATAR".
function LogoC() {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center rounded-full border border-white/80">
        <span className={script.className + " absolute -translate-x-[3px] text-[30px] leading-none"}>K</span>
        <span className={forum.className + " absolute translate-x-[7px] translate-y-[5px] text-[13px] leading-none"}>S</span>
      </span>
      <span className="leading-none">
        <span className={forum.className + " block text-[16px] tracking-[0.2em]"}>KITCHEN STUDIO</span>
        <span className="mt-1.5 block text-[8px] font-medium tracking-[0.3em] text-white/70">EST. 2022 · ULAANBAATAR</span>
      </span>
    </span>
  );
}

const options = [
  { name: "A · Жинхэнэ логоны хэлбэр", Logo: LogoA },
  { name: "B · Script + том үсэг", Logo: LogoB },
  { name: "C · Монограм", Logo: LogoC },
];

export default function LogoTest() {
  return (
    <main className="min-h-screen bg-[#f3eee7] px-5 py-10 text-[#2b2119] sm:px-10">
      <h1 className="text-sm font-bold tracking-[0.2em]">ЛОГОНЫ ТУРШИЛТ · HAUS ДЭЭД ЦЭС</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6d5f53]">
        Хувилбар бүрийг HAUS-ийн зурган дээр, бодит цэсний хэмжээгээр харуулав. Баруун талд нь утасны хэмжээ.
      </p>

      {options.map(({ name, Logo }) => (
        <section key={name} className="mt-10">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#8a6f55]">{name}</p>
          <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
            {/* Компьютерийн хэмжээ */}
            <div className="relative h-44 overflow-hidden bg-[#2b2119] text-white">
              <Image src="/images/studio-hero.png" alt="" fill sizes="70vw" className="object-cover [filter:saturate(0.6)_brightness(0.85)]" />
              <div className="absolute inset-0 bg-[#2b2119]/50" />
              <div className="relative flex items-center justify-between border-b border-white/30 px-8 py-4">
                <Logo />
                <span className="text-[11px] font-medium tracking-[0.16em] text-white/80">СУРГАЛТ · АНГИУД · ЯВЦ · ЗУРГИЙН ЦОМОГ</span>
              </div>
            </div>
            {/* Утасны хэмжээ */}
            <div className="relative h-44 w-[360px] max-w-full overflow-hidden bg-[#2b2119] text-white">
              <Image src="/images/studio-hero.png" alt="" fill sizes="360px" className="object-cover [filter:saturate(0.6)_brightness(0.85)]" />
              <div className="absolute inset-0 bg-[#2b2119]/50" />
              <div className="relative flex items-center justify-between border-b border-white/30 px-5 py-4">
                <Logo />
                <span className="text-[10px] font-medium tracking-[0.16em]">MENU</span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
