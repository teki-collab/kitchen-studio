// /classes — АНГИУД БА ЗАХИАЛГА
// Хаяг: localhost:3000/classes  (дараа нь kitchenstudio.mn/classes)
// Next.js-д src/app/classes/page.tsx файл = /classes хуудас.

import type { Metadata } from "next";
import HausSchedule from "../HausSchedule";
import { forum, script } from "../_haus/fonts";
import PageHero from "../_haus/PageHero";
import SiteFooter from "../_haus/SiteFooter";
import SiteHeader from "../_haus/SiteHeader";

// Хөтчийн табын гарчиг ба Google хайлтын тайлбар — хуудас бүр өөрийн гэсэнтэй
export const metadata: Metadata = {
  title: "Ангиуд ба захиалга | Kitchen Studio",
  description: "Kitchen Studio-ийн хоолны болон амттаны ангиудын хуваарь, үлдсэн суудал, онлайн захиалга. Улаанбаатар, Тулга төв.",
};

const facts = [
  ["12–14", "хүн нэг ангид"],
  ["3 цаг", "орчим, ихэвчлэн 12:00–15:00"],
  ["Бүх орц", "хэрэгсэл, тоног төхөөрөмж бэлэн"],
  ["Амралтын", "өдрүүдэд, долоо хоног бүр шинэ жор"],
];

export default function ClassesPage() {
  return (
    <main className="bg-[#f4efe8] text-[#2b2119]">
      <SiteHeader />
      <PageHero
        image="/images/studio-official-1.jpg"
        subtitle="Ангиуд ба захиалга"
        title={
          <>
            Our <span className={script.className + " normal-case text-[1.15em] leading-[0.5]"}>C</span>lasses
          </>
        }
      />

      {/* Товч баримтууд */}
      <section className="border-b border-[#2b2119]/10 bg-[#f4efe8] px-5 py-10 sm:px-10">
        <dl className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 lg:grid-cols-4">
          {facts.map(([value, label]) => (
            <div key={label} className="border-t border-[#2b2119]/20 pt-4">
              <dt className={forum.className + " text-[28px] leading-none"}>{value}</dt>
              <dd className="mt-2 text-[12px] text-[#6d5f53]">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Хуваарь (#haus-schedule) + Захиалах (#haus-book) */}
      <HausSchedule forumClass={forum.className} scriptClass={script.className} />

      <SiteFooter />
    </main>
  );
}
