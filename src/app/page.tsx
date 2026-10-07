"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./theme.css";
import HausDesign from "./HausDesign";

const gallery = [
  { src: "/images/studio-official-1.jpg", alt: "Kitchen Studio-ийн гал тогоо" },
  { src: "/images/studio-official-2.jpg", alt: "Kitchen Studio-ийн сургалтын орчин" },
  { src: "/images/studio-official-3.jpg", alt: "Студийн мэргэжлийн гал тогоо" },
  { src: "/images/studio-official-4.jpg", alt: "Kitchen Studio-ийн дотоод орчин" },
  { src: "/images/studio-official-5.jpg", alt: "Хоол хийх студийн орчин" },
  { src: "/images/studio-official-6.jpg", alt: "Kitchen Studio-ийн сургалт" },
  { src: "/images/studio-official-7.jpg", alt: "Студид хамтдаа хоол хийж буй нь" },
  { src: "/images/studio-official-8.jpg", alt: "Сургалтын үеийн агшин" },
  { src: "/images/studio-official-9.jpg", alt: "Kitchen Studio-ийн эвент" },
];

const renderGallery = [
  { src: "/images/studio-1.png", alt: "Kitchen Studio-ийн интерьер дүрслэл, нэгдүгээр өнцөг" },
  { src: "/images/studio-2.png", alt: "Kitchen Studio-ийн интерьер дүрслэл, хоёрдугаар өнцөг" },
  { src: "/images/studio-3.png", alt: "Kitchen Studio-ийн интерьер дүрслэл, гуравдугаар өнцөг" },
];

export default function Home() {
  const [theme, setTheme] = useState<"classic" | "tomato" | "velaa" | "haus">("haus");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);

  useEffect(() => {
    if (!bookingOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setBookingOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [bookingOpen]);

  // HAUS загвар сонгогдсон бол бүхэл хуудсыг HausDesign.tsx-ээр харуулна.
  if (theme === "haus") return <HausDesign theme={theme} onThemeChange={setTheme} />;

  return (
    <main data-theme={theme} className="min-h-screen bg-[#fffaf3] text-[#29231f]">
      <div className="bg-[#29231f] px-5 py-2.5 text-center text-[11px] font-medium tracking-[0.14em] text-white sm:text-xs">
        СБД · ТУЛГА ТӨВ · I ДАВХАР <span className="mx-3 text-[#e85b3f]">●</span> +976 8880 8468
      </div>

      <header className="sticky top-0 z-30 border-b border-[#29231f]/10 bg-[#fffaf3]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <a href="#home" className="leading-none" aria-label="Kitchen Studio нүүр">
            <span className="block text-[17px] font-extrabold tracking-[0.12em]">KITCHEN</span>
            <span className="mt-1 block text-[10px] font-semibold tracking-[0.38em] text-[#b6382a]">STUDIO</span>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] font-medium lg:flex">
            <a className="transition-colors hover:text-[#b6382a]" href="#about">Kitchen студийн тухай</a>
            <a className="transition-colors hover:text-[#b6382a]" href="#training">Сургалт</a>
            <a className="transition-colors hover:text-[#b6382a]" href="#events">Хаалттай эвент</a>
            <a className="transition-colors hover:text-[#b6382a]" href="#gallery">Зургийн цомог</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <div role="group" aria-label="Загвар сонгох" className="flex rounded-sm border border-[#29231f]/20 p-1 text-[9px] font-bold tracking-[0.08em] sm:text-[10px]">
              <button type="button" aria-pressed={theme === "classic"} onClick={() => setTheme("classic")} className={"px-2 py-2 transition-colors sm:px-3 " + (theme === "classic" ? "bg-[#29231f] text-white" : "hover:bg-[#29231f]/10")}>STUDIO</button>
              <button type="button" aria-pressed={theme === "tomato"} onClick={() => setTheme("tomato")} className={"px-2 py-2 transition-colors sm:px-3 " + (theme === "tomato" ? "bg-[#29231f] text-white" : "hover:bg-[#29231f]/10")}>TOMATO</button>
              <button type="button" aria-pressed={theme === "velaa"} onClick={() => setTheme("velaa")} className={"px-2 py-2 transition-colors sm:px-3 " + (theme === "velaa" ? "bg-[#29231f] text-white" : "hover:bg-[#29231f]/10")}>VELAA</button>
              <button type="button" aria-pressed={false} onClick={() => setTheme("haus")} className="px-2 py-2 transition-colors hover:bg-[#29231f]/10 sm:px-3">HAUS</button>
            </div>
            {theme === "velaa" ? (
              <button type="button" onClick={() => { setBookingSent(false); setBookingOpen(true); }} className="rounded-sm bg-[#b6382a] px-3 py-3 text-[10px] font-bold tracking-[0.1em] text-white transition-colors hover:bg-[#922c22] sm:px-5 sm:text-[11px]">BOOK NOW <span aria-hidden="true">↗</span></button>
            ) : (
              <a href="tel:+97688808468" className="rounded-sm bg-[#b6382a] px-3 py-3 text-[10px] font-bold tracking-[0.06em] text-white transition-colors hover:bg-[#922c22] sm:px-5 sm:text-[11px]">ХОЛБОГДОХ <span aria-hidden="true">↗</span></a>
            )}
          </div>
        </div>
      </header>

      <section id="home" className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-[#2a211c] sm:min-h-[740px] lg:min-h-[calc(100svh-100px)]">
        <Image src="/images/studio-hero.png" alt="Kitchen Studio-ийн мэргэжлийн гал тогоо" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 text-white sm:px-10 sm:pb-24 lg:px-14">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-white/85 sm:text-xs">
            <span className="h-px w-9 bg-[#e85b3f]" /> ХООЛ · ТУРШЛАГА · УРЛАН
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.06] tracking-[-0.045em] sm:text-7xl lg:text-[88px]">
            Амтыг урлаж,<br /><span className="text-[#ffb28f]">хоолыг бүтээе.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Хоолыг амталж, мэдэрч, хийх дуртай хэн бүхний зорин ирэх урлан.
            Тогоочтой хамт өөрийн гараар хийж, шинэ амтыг туршаарай.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#training" className="bg-[#b6382a] px-6 py-4 text-xs font-bold tracking-[0.1em] transition-colors hover:bg-[#922c22]">СУРГАЛТТАЙ ТАНИЛЦАХ <span aria-hidden="true">→</span></a>
            <a href="#about" className="border border-white/65 px-6 py-4 text-xs font-bold tracking-[0.1em] transition-colors hover:bg-white hover:text-[#29231f]">СТУДИЙН ТУХАЙ</a>
          </div>
          <div className="mt-14 flex items-center gap-4 text-[10px] font-semibold tracking-[0.22em] text-white/70">
            <span className="h-px w-12 bg-[#ffb28f]" /> DESIGNED FOR FOOD LOVERS <span className="text-white/40">·</span> SINCE 2022
          </div>
        </div>
        <span className="absolute bottom-8 right-8 hidden text-[10px] font-semibold tracking-[0.28em] text-white/70 [writing-mode:vertical-rl] lg:block">KITCHEN STUDIO · ULAANBAATAR</span>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-14">
        <div id="about-title">
          <p className="text-[11px] font-bold tracking-[0.26em] text-[#b6382a]">01 / БИДНИЙ ТУХАЙ</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Сургалтаас<br />илүү туршлага.</h2>
          <p className="mt-5 text-sm font-medium tracking-[0.09em] text-[#806d5f]">KITCHEN STUDIO · SINCE 2022</p>
        </div>
        <div id="about-copy" className="max-w-3xl text-[15px] leading-8 text-[#5e544c]">
          <p className="text-xl font-semibold leading-8 text-[#29231f]">Хоолыг амталж, мэдэрч, хийх дуртай хэн бүхний зорин ирэх урлан.</p>
          <p className="mt-5">Бид хоол сургалтын төвүүдээс өөр үзэл баримтлалтай. Оролцогчдыг зүгээр суулгахын оронд өөрөөр нь хийлгэж, мэдрүүлж, туршуулан, хүссэн амтыг нь гаргаж бүтээлчээр суралцах орон зайг бүрдүүлдэг. Мэргэжлийн гал тогооны орчин үеийн тоног төхөөрөмж ашиглан түүнийг хэрэглэх арга барил, ноу-хауг заана.</p>
          <p className="mt-4">Зав чөлөөгүй өдөр тутмын амьдралдаа өөртөө цаг гаргаж, эрүүл амттай хоол хийж сурах нь өөрийгөө хайрлах нэгэн дадал. Студид хоол хийх зуураа оролцогчид багаар ажиллаж, танилцаж, шинэ сонирхолтой мэдрэмж хуваалцдаг.</p>
          <div className="mt-8 border-l-2 border-[#b6382a] py-1 pl-5 text-sm font-semibold leading-7 text-[#29231f]">“Амтыг урлаж, хоол бүтээх нь”</div>
        </div>
        {theme === "tomato" && (
          <div id="about-collage" className="grid min-h-[360px] grid-cols-2 grid-rows-2 gap-3 sm:min-h-[440px]">
            <div className="relative row-span-2 overflow-hidden"><Image src="/images/studio-official-1.jpg" alt="Kitchen Studio-ийн интерьер" fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover" /></div>
            <div className="relative overflow-hidden"><Image src="/images/studio-official-2.jpg" alt="Kitchen Studio-д хоол бэлтгэж буй нь" fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover" /></div>
            <div className="relative overflow-hidden"><Image src="/images/studio-official-3.jpg" alt="Студийн мэргэжлийн гал тогоо" fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover" /></div>
          </div>
        )}
      </section>

      <section id="highlights" className="bg-[#f2e9dc] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-6 sm:grid-cols-4 sm:px-10 lg:px-14">
          {[
            ["01", "Өөрөө хийж", "дадлагаар суралцана"],
            ["02", "Мэргэжлийн", "гал тогооны орчин"],
            ["03", "8–14 хүн", "нэг сургалтын ангид"],
            ["04", "3 цаг орчим", "амттай туршлага"],
          ].map(([number, title, detail]) => (
            <div key={number} className="border-t border-[#b6382a]/40 pt-4">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#b6382a]">{number}</p>
              <p className="mt-4 text-lg font-bold sm:text-xl">{title}</p>
              <p className="mt-1 text-xs leading-5 text-[#716359] sm:text-sm">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="training" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-bold tracking-[0.26em] text-[#b6382a]">02 / DEMO TRAINING</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Дэлхийн амтыг<br className="hidden sm:block" /> өөрийн гараар.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#716359]">Амралтын өдрүүдэд урьдчилан зарлагдах нэг удаагийн мэргэжлийн хоолны сургалт.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { n: "01", title: "Олон орны цэс", text: "Итали, Мексик, Франц, Энэтхэг, Солонгос, Япон болон бусад үндэстний хоол, зууш, амттаныг хийж сурна.", tag: "ITALIAN · MEXICAN · FRENCH · ASIAN" },
            { n: "02", title: "Гурван төрлийн сет", text: "Сонгосон үндэстний гурван төрлийн хоолны орц найрлагатай танилцаж, өөрийн гараар бэлтгээд хамтдаа амтална.", tag: "PREPARE · COOK · TASTE" },
            { n: "03", title: "Бүх зүйл бэлэн", text: "Хоолны хэрэгсэл, мэргэжлийн тоног төхөөрөмж, хүнсний бүтээгдэхүүн сургалтын үнэд багтдаг.", tag: "TOOLS · EQUIPMENT · INGREDIENTS" },
          ].map((item) => (
            <article key={item.n} className="group border border-[#29231f]/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#b6382a]/40 hover:shadow-xl hover:shadow-[#422419]/5 sm:p-9">
              <p className="text-xs font-bold tracking-[0.2em] text-[#b6382a]">{item.n} <span className="ml-2 text-[#a89a8c]">/ EXPERIENCE</span></p>
              <h3 className="mt-10 text-2xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-7 text-[#716359]">{item.text}</p>
              <p className="mt-7 border-t border-[#29231f]/10 pt-4 text-[9px] font-bold tracking-[0.17em] text-[#a34837]">{item.tag}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-[#8b7b6e]">Одоогийн сургалтын өдөр, цэс болон үнийн мэдээллийг студийн Instagram хуудсаар зарлана.</p>
      </section>

      <section id="events" className="grid bg-[#29231f] text-white lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-[590px]">
          <Image src="/images/studio-official-6.jpg" alt="Kitchen Studio-д хамтдаа хоол хийх орчин" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <p className="absolute bottom-7 left-7 text-[10px] font-semibold tracking-[0.25em] text-white">GATHER · COOK · CELEBRATE</p>
        </div>
        <div className="flex flex-col justify-center px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
          <p className="text-[11px] font-bold tracking-[0.26em] text-[#ff9878]">03 / PRIVATE EVENT</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Тусгай өдөрт<br />өөрийн ширээг.</h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/70">Студийг зөвхөн сургалтаар хязгаарлахгүй. Төрсөн өдөр, шинэ жил, хамт олон болон тэмдэглэлт өдрийн хаалттай эвентэд ашиглах захиалга авна.</p>
          <div className="mt-8 flex items-center gap-4 border-y border-white/15 py-5">
            <span className="text-3xl font-extrabold text-[#ff9878]">10–20</span>
            <span className="text-xs leading-5 text-white/70">хүний хаалттай эвентэд<br />зориулсан студийн орон зай</span>
          </div>
          <a href="tel:+97688808468" className="mt-8 inline-flex w-fit items-center gap-4 bg-[#b6382a] px-6 py-4 text-xs font-bold tracking-[0.1em] transition-colors hover:bg-[#922c22]">ЭВЕНТИЙН ТАЛААР ЯРИЛЦАХ <span>↗</span></a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1fr_1fr] lg:px-14">
        <div>
          <p className="text-[11px] font-bold tracking-[0.26em] text-[#b6382a]">04 / OUR PEOPLE</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Туршлагаа<br />хуваалцсан багш нар.</h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#716359]">Шинэлэг цэс, түүнийг хүмүүст хүргэх санаа нь студийн зорилготой нийцэхийг харгалзан сургагч багш нараа сонгодог. Олон улсад мэргэшиж, мэргэжлийн гал тогоонд ажилласан туршлагатай 3–4 багш хамтран ажилладаг.</p>
          <a href="https://www.instagram.com/kitchenstudiomn/" target="_blank" rel="noreferrer" className="mt-7 inline-flex border-b border-[#b6382a] pb-2 text-xs font-bold tracking-[0.12em] text-[#b6382a]">СУРГАЛТЫН МЭДЭЭЛЭЛ INSTAGRAM-Д <span className="ml-3">↗</span></a>
        </div>
        <blockquote id="team-quote" className="bg-[#f2e9dc] p-8 sm:p-12">
          <span className="text-6xl font-extrabold leading-none text-[#b6382a]">“</span>
          <p className="mt-2 text-lg font-semibold leading-8 text-[#332a24]">Өмнө нь идэж үзээгүй хоолоо өөрийн гараар хийж, ахлах тогоочийн заавраар арга техникийг сурч, найз нөхдийн хамт нэгэн оройг гайхалтай өнгөрүүллээ.</p>
          <p className="mt-5 text-sm leading-6 text-[#716359]">Kitchen Studio-ийн тухтай орчин, дулаахан уур амьсгал нэн таалагдлаа.</p>
          <p className="mt-7 text-[10px] font-bold tracking-[0.2em] text-[#b6382a]">ЗОЧНЫ СЭТГЭГДЛЭЭС</p>
        </blockquote>
      </section>

      <section id="gallery" className="bg-[#f2e9dc] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.26em] text-[#b6382a]">05 / THE STUDIO</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Студийн орон зай</h2>
            </div>
            <p className="max-w-md text-xs leading-6 text-[#716359]">Kitchen Studio-ийн танилцуулга болон интерьерийн загварчилсан дүрслэлүүд.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <figure key={image.src} className={'group relative overflow-hidden bg-[#d8caba] ' + (index === 0 ? 'col-span-2 row-span-2 min-h-[320px] sm:min-h-[440px]' : 'min-h-[175px] sm:min-h-[215px]')}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              </figure>
            ))}
          </div>
          <div className="mt-14 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold tracking-[0.23em] text-[#b6382a]">INTERIOR CONCEPT</p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight">Интерьерийн загварчилсан дүрслэл</h3>
            </div>
            <p className="max-w-md text-xs leading-6 text-[#716359]">Эдгээр 3D зураг нь студийн орчны загварчилсан дүрслэл болно.</p>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {renderGallery.map((image) => (
              <figure key={image.src} className="group relative aspect-[1.12/1] overflow-hidden bg-[#d8caba]">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
        <div className="flex flex-col justify-between gap-6 border-y border-[#29231f]/15 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#b6382a]">THE KITCHEN, REIMAGINED</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Ирээдүйд амттай дурсамж бүтээгээрэй.</h2>
          </div>
          <a href="https://www.instagram.com/kitchenstudiomn/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-4 bg-[#b6382a] px-6 py-4 text-xs font-bold tracking-[0.1em] text-white transition-colors hover:bg-[#922c22]">INSTAGRAM-Д ХОЛБОГДОХ <span>↗</span></a>
        </div>
      </section>

      {bookingOpen && (
        <div className="booking-overlay fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/75 px-3 py-3 sm:items-center sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setBookingOpen(false); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="booking-title" className="booking-dialog w-full max-w-2xl overflow-y-auto overscroll-contain bg-[#fffaf3] p-5 text-[#29231f] shadow-2xl sm:p-10">
            <div className="flex items-start justify-between gap-5 border-b border-black/10 pb-5">
              <div><p className="text-[10px] font-bold tracking-[0.25em] text-[#a78342]">KITCHEN STUDIO · BOOKING ENQUIRY</p><h2 id="booking-title" className="mt-3 text-3xl font-semibold">Захиалгын хүсэлт</h2><p className="mt-2 text-sm text-[#716359]">Мэдээллээ үлдээгээрэй. Студи боломжит өдөр, цагийг тантай баталгаажуулна.</p></div>
              <button type="button" onClick={() => setBookingOpen(false)} aria-label="Хаах" className="px-2 text-3xl leading-none text-[#716359] hover:text-black">×</button>
            </div>
            {bookingSent ? (
              <div className="py-10"><p className="text-xl font-semibold">Хүсэлтийн мэдээлэл бэлэн боллоо.</p><p className="mt-3 text-sm leading-6 text-[#716359]">Энэ нь одоогоор танилцуулгын демо маягт тул мэдээлэл серверт илгээгдээгүй. Захиалгыг +976 8880 8468 утсаар эсвэл Instagram-аар баталгаажуулна уу.</p><a href="tel:+97688808468" className="mt-6 inline-block bg-[#a78342] px-5 py-3 text-xs font-bold tracking-wider text-white">УТАСДАХ · +976 8880 8468</a></div>
            ) : (
              <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setBookingSent(true); }}>
                <label className="grid gap-2 text-xs font-semibold">СОНИРХОЖ БУЙ ҮЙЛЧИЛГЭЭ<select required name="bookingType" className="border border-black/15 bg-white px-3 py-3 text-sm font-normal"><option value="">Сонгоно уу</option><option>Хоолны сургалт</option><option>Хаалттай эвент</option></select></label>
                <label className="grid gap-2 text-xs font-semibold">ХҮСЭЖ БУЙ ӨДӨР<input required type="date" name="date" className="border border-black/15 bg-white px-3 py-3 text-sm font-normal" /></label>
                <label className="grid gap-2 text-xs font-semibold">ОРОЛЦОГЧИЙН ТОО<input required type="number" min="1" max="20" name="guests" placeholder="Жишээ нь: 10" className="border border-black/15 bg-white px-3 py-3 text-sm font-normal" /></label>
                <label className="grid gap-2 text-xs font-semibold">НЭР<input required name="name" autoComplete="name" placeholder="Таны нэр" className="border border-black/15 bg-white px-3 py-3 text-sm font-normal" /></label>
                <label className="grid gap-2 text-xs font-semibold">УТАСНЫ ДУГААР<input required type="tel" name="phone" autoComplete="tel" placeholder="+976 ..." className="border border-black/15 bg-white px-3 py-3 text-sm font-normal" /></label>
                <label className="grid gap-2 text-xs font-semibold">И-МЭЙЛ<input type="email" name="email" autoComplete="email" placeholder="name@example.com" className="border border-black/15 bg-white px-3 py-3 text-sm font-normal" /></label>
                <label className="grid gap-2 text-xs font-semibold sm:col-span-2">НЭМЭЛТ ХҮСЭЛТ<textarea name="message" rows={3} placeholder="Цэс, баяр ёслол, тусгай хүсэлт..." className="resize-y border border-black/15 bg-white px-3 py-3 text-sm font-normal" /></label>
                <div className="sm:col-span-2"><button type="submit" className="bg-[#a78342] px-6 py-4 text-xs font-bold tracking-[0.12em] text-white transition-colors hover:bg-[#886b36]">ХҮСЭЛТИЙН МАЯГТЫГ ҮЗЭХ <span className="ml-2">→</span></button><p className="mt-3 text-[11px] leading-5 text-[#85796d]">Демо хувилбар</p></div>
              </form>
            )}
          </section>
        </div>
      )}

      <footer id="contact" className="bg-[#29231f] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-lg font-extrabold tracking-[0.12em]">KITCHEN STUDIO</p>
            <p className="mt-3 text-xs tracking-[0.15em] text-white/55">АМТЫГ УРЛАЖ, ХООЛЫГ БҮТЭЭХ НЬ</p>
            <p className="mt-5 text-xs text-white/45">A Tulga Tuhuurumj experience · Since 2022</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#ff9878]">ХАЯГ</p>
            <p className="mt-4 text-sm leading-6 text-white/80">Сүхбаатар дүүрэг,<br />Тулга төв, I давхар</p>
            <a className="mt-2 inline-block text-xs text-white/60 underline underline-offset-4 hover:text-white" href="https://maps.google.com/?q=Tulga+Center+Ulaanbaatar" target="_blank" rel="noreferrer">Газрын зураг үзэх ↗</a>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#ff9878]">ХОЛБОО БАРИХ</p>
            <a href="tel:+97688808468" className="mt-4 block text-lg font-semibold hover:text-[#ff9878]">+976 8880 8468</a>
            <div className="mt-4 flex gap-5 text-xs text-white/70">
              <a className="hover:text-white" href="https://www.facebook.com/Kitchenstudiomn" target="_blank" rel="noreferrer">Facebook ↗</a>
              <a className="hover:text-white" href="https://www.instagram.com/kitchenstudiomn/" target="_blank" rel="noreferrer">Instagram ↗</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-[10px] text-white/40">© {new Date().getFullYear()} Kitchen Studio · Тулга Төхөөрөмж ХХК</div>
      </footer>
    </main>
  );
}
