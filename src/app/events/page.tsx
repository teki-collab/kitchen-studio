// /events — ХААЛТТАЙ ЭВЕНТ
// Хаяг: localhost:3000/events

import type { Metadata } from "next";
import Image from "next/image";
import { forum, script } from "../_haus/fonts";
import PageHero from "../_haus/PageHero";
import SiteFooter from "../_haus/SiteFooter";
import SiteHeader from "../_haus/SiteHeader";
import { PHONE, PHONE_TEL } from "../_haus/site";
import EventInquiry from "./EventInquiry";

export const metadata: Metadata = {
  title: "Хаалттай эвент | Kitchen Studio",
  description: "Төрсөн өдөр, хамт олны арга хэмжээ, баяр ёслолоо Kitchen Studio-д 10–20 хүнтэй хаалттай эвент хэлбэрээр зохион байгуулаарай.",
};

// Арга хэмжээний төрлүүд — зураг, текстийг энд солино
const occasions = [
  { title: "Төрсөн өдөр", text: "Найз нөхөдтэйгөө хамт хоол хийж, өөрсдийн бүтээсэн ширээгээ засаад тэмдэглээрэй.", image: "/images/studio-official-6.jpg" },
  { title: "Хамт олны арга хэмжээ", text: "Багаараа хоол хийх нь хамтран ажиллах, ойртох хамгийн амттай арга.", image: "/images/studio-official-1.jpg" },
  { title: "Шинэ жил ба баяр", text: "Жилийн эцсийн уулзалт, баяр ёслолоо онцгой цэстэй, тухтай орчинд.", image: "/images/studio-official-3.jpg" },
  { title: "Тэмдэглэлт өдөр", text: "Ой, сүй тавих, гэр бүлийн уулзалт — тусгай өдрөө өөрийн ширээгээр.", image: "/images/studio-official-7.jpg" },
];

const formats = [
  { title: "Хамтдаа хоол хийх", text: "Тогоочийн удирдлагаар зочид өөрсдөө гурван хоол бэлтгэж, хамтдаа зооглоно." },
  { title: "Тогоочийн оройн зоог", text: "Тогооч таны өмнө хоолоо бэлтгэн, олон төрлийн цэсээр дайлна." },
];

export default function EventsPage() {
  return (
    <main className="bg-[#f4efe8] text-[#2b2119]">
      <SiteHeader />
      <PageHero
        image="/images/studio-official-3.jpg"
        subtitle="Хаалттай эвент"
        title={
          <>
            Private <span className={script.className + " normal-case text-[1.15em] leading-[0.5]"}>T</span>ables
          </>
        }
      >
        <p className="mt-6 max-w-lg text-[14px] leading-7 text-white/80">
          Студийг зөвхөн сургалтаар хязгаарлахгүй. Тусгай өдрөө 10–20 хүнтэйгээр студид бүхэлд нь хаалттай зохион байгуулаарай.
        </p>
      </PageHero>

      {/* Арга хэмжээний төрлүүд */}
      <section className="px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <h2 className={forum.className + " uppercase leading-[1] text-[length:clamp(2.2rem,4.5vw,3.8rem)]"}>
            For every <span className={script.className + " normal-case text-[1.15em] leading-[0.5]"}>O</span>ccasion
          </h2>
          <p className={forum.className + " mt-4 text-[length:clamp(1.15rem,2vw,1.5rem)] text-[#6d5f53]"}>Ямар үед тохирох вэ</p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {occasions.map((o) => (
              <article key={o.title}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e3d9cc]">
                  <Image src={o.image} alt={o.title} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover [filter:saturate(0.8)]" />
                </div>
                <h3 className={forum.className + " mt-4 text-[22px] uppercase leading-tight"}>{o.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#5e5047]">{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Хэлбэр ба багтаамж */}
      <section className="bg-[#2b2119] px-5 py-20 text-white sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className={forum.className + " text-[length:clamp(3rem,7vw,5.5rem)] leading-none"}>10–20</p>
            <p className="mt-3 text-[14px] text-white/70">хүний хаалттай эвентэд зориулсан студийн орон зай</p>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-2">
            {formats.map((f, i) => (
              <div key={f.title} className="bg-[#2b2119] p-6 sm:p-8">
                <p className="text-[11px] tracking-[0.15em] text-white/50">0{i + 1}</p>
                <h3 className={forum.className + " mt-3 text-[24px] uppercase"}>{f.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-white/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Хүсэлтийн маягт */}
      <section id="event-inquiry" className="px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className={forum.className + " uppercase leading-[1] text-[length:clamp(2.2rem,4.5vw,3.8rem)]"}>
              Plan your <span className={script.className + " normal-case text-[1.15em] leading-[0.5]"}>E</span>vent
            </h2>
            <p className={forum.className + " mt-4 text-[length:clamp(1.15rem,2vw,1.5rem)] text-[#6d5f53]"}>Эвентийн хүсэлт илгээх</p>
            <p className="mt-6 max-w-md text-[14px] leading-7 text-[#5e5047]">
              Хүсэлтээ үлдээгээрэй — студи тантай холбогдож өдөр, цэс, үнийн санал хэлэлцэнэ. Яаралтай бол{" "}
              <a href={PHONE_TEL} className="underline underline-offset-4">{PHONE}</a> утсаар холбогдоорой.
            </p>
          </div>
          <EventInquiry />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
