// /contact — ХОЛБОО БАРИХ + ТҮГЭЭМЭЛ АСУУЛТ
// Хаяг: localhost:3000/contact
//
// Түгээмэл асуултуудад зөвхөн Instagram, Тулга Төхөөрөмжийн сайтад бичигдсэн баримтыг оруулав.
// ТОДРУУЛЖ НЭМЭХ: төлбөр буцаалт/цуцлалтын нөхцөл, хүүхэд оролцох нас, үнэ, бэлгийн карт.

import type { Metadata } from "next";
import { forum, script } from "../_haus/fonts";
import PageHero from "../_haus/PageHero";
import SiteFooter from "../_haus/SiteFooter";
import SiteHeader from "../_haus/SiteHeader";
import { ADDRESS_LINES, FACEBOOK, INSTAGRAM, MAP_EMBED, MAP_LINK, PHONE, PHONE_HOURS, PHONE_TEL } from "../_haus/site";

export const metadata: Metadata = {
  title: "Холбоо барих | Kitchen Studio",
  description: "Kitchen Studio — Сүхбаатар дүүрэг, Тулга төв, 1 давхар. Утас +976 8880 8468. Байршил, түгээмэл асуултууд.",
};

const faq = [
  ["Юу авчрах хэрэгтэй вэ?", "Юу ч авчрах шаардлагагүй. Хүнсний бүтээгдэхүүн, хэрэгсэл, мэргэжлийн тоног төхөөрөмж бүгд сургалтын үнэд багтсан."],
  ["Нэг ангид хэдэн хүн суралцдаг вэ?", "Нэг ангид 12–14 хүн. Хүн бүр өөрийн байртай, тогоочийн шууд зааварчилгаатай."],
  ["Сургалт хэр удаан үргэлжилдэг вэ?", "Ихэвчлэн амралтын өдрүүдэд 12:00–15:00, ойролцоогоор 3 цаг."],
  ["Хийсэн хоолоо яах вэ?", "Хийсэн хоолоо сургалтын төгсгөлд хамтдаа амтална. Амттан, бэйкерийн ангид хийсэн бүтээгдэхүүнээ гэртээ авч харих боломжтой."],
  ["Яаж бүртгүүлэх вэ?", "Сайтын хуваариас ангиа сонгож захиалах, эсвэл утсаар болон Instagram DM-ээр бүртгүүлнэ. Төлбөр баталгаажсаны дараа суудал тань хадгалагдана."],
  ["Хаалттай эвент зохион байгуулж болох уу?", "Болно. Төрсөн өдөр, хамт олны арга хэмжээ, баяр ёслолд 10–20 хүнтэй хаалттай эвент хүлээн авдаг."],
];

export default function ContactPage() {
  return (
    <main className="bg-[#f4efe8] text-[#2b2119]">
      <SiteHeader />
      <PageHero
        image="/images/studio-official-2.jpg"
        subtitle="Холбоо барих"
        title={
          <>
            Visit the <span className={script.className + " normal-case text-[1.15em] leading-[0.5]"}>S</span>tudio
          </>
        }
      />

      {/* Холбоо барих мэдээлэл + газрын зураг */}
      <section className="px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="grid gap-10">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#8a6f55]">ХАЯГ</p>
              <p className={forum.className + " mt-3 text-[24px] leading-snug"}>
                {ADDRESS_LINES[0]}
                <br />
                {ADDRESS_LINES[1]}
              </p>
              <a href={MAP_LINK} target="_blank" rel="noreferrer" className="mt-3 inline-block border-b border-[#2b2119]/50 pb-0.5 text-[12px] font-semibold tracking-[0.12em]">
                ЧИГЛЭЛ АВАХ ↗
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#8a6f55]">УТАС</p>
              <a href={PHONE_TEL} className={forum.className + " mt-3 block text-[30px]"}>{PHONE}</a>
              <p className="mt-1 text-[13px] text-[#6d5f53]">{PHONE_HOURS}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#8a6f55]">СОШИАЛ</p>
              <div className="mt-3 flex gap-6 text-[15px]">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="underline underline-offset-4">Instagram ↗</a>
                <a href={FACEBOOK} target="_blank" rel="noreferrer" className="underline underline-offset-4">Facebook ↗</a>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-[#e3d9cc]">
            <iframe
              src={MAP_EMBED}
              title="Kitchen Studio-ийн байршил — Google газрын зураг"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.85] transition duration-500 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Түгээмэл асуултууд. <details> = дарахад нээгддэг/хаагддаг, JavaScript шаардлагагүй */}
      <section className="bg-[#fbf9f6] px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-[900px]">
          <h2 className={forum.className + " text-center uppercase leading-[1] text-[length:clamp(2.2rem,4.5vw,3.8rem)]"}>
            Good to <span className={script.className + " normal-case text-[1.15em] leading-[0.5]"}>K</span>now
          </h2>
          <p className={forum.className + " mt-4 text-center text-[length:clamp(1.15rem,2vw,1.5rem)] text-[#6d5f53]"}>Түгээмэл асуултууд</p>

          <div className="mt-12 border-t border-[#2b2119]/15">
            {faq.map(([q, a]) => (
              <details key={q} className="group border-b border-[#2b2119]/15 py-5">
                <summary className={forum.className + " flex cursor-pointer list-none items-center justify-between gap-6 text-[20px]"}>
                  {q}
                  <span className="text-[24px] leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 max-w-[700px] text-[14px] leading-7 text-[#5e5047]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
