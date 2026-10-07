"use client";

// ХААЛТТАЙ ЭВЕНТИЙН ХҮСЭЛТИЙН МАЯГТ
// ⚠ ТУРШИЛТЫН ХУВИЛБАР: илгээхэд мэдээлэл хадгалагдахгүй, и-мэйл очихгүй.
// Supabase холбогдсоны дараа хүсэлт өгөгдлийн санд хадгалагдаж, студид мэдэгдэл очно.

import { useState } from "react";
import { forum } from "../_haus/fonts";

const occasions = ["Төрсөн өдөр", "Хамт олны арга хэмжээ", "Шинэ жил / баяр", "Тэмдэглэлт өдөр", "Бусад"];
const formats = ["Хамтдаа хоол хийх (тогоочийн удирдлагаар)", "Тогоочийн бэлдсэн оройн зоог", "Шийдээгүй, зөвлөгөө авмаар байна"];

export default function EventInquiry() {
  const [sent, setSent] = useState(false);

  const field = "w-full border border-[#2b2119]/20 bg-white px-3 py-3 text-[16px] font-normal tracking-normal";
  const label = "grid gap-2 text-[11px] font-semibold tracking-[0.12em]";

  if (sent) {
    return (
      <div className="bg-white p-6 sm:p-10">
        <p className={forum.className + " text-[28px] leading-tight"}>Баярлалаа! Хүсэлт хүлээн авлаа.</p>
        <p className="mt-3 text-[14px] leading-7 text-[#5e5047]">
          Студи тантай 1–2 хоногийн дотор холбогдож өдөр, цэс, үнийн санал хэлэлцэнэ.
        </p>
        <p className="mt-5 text-[11px] text-[#7a5a1e]">Туршилтын хувилбар: мэдээлэл хадгалагдаагүй.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 border border-[#2b2119] px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em]">
          ДАХИН БӨГЛӨХ
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 bg-white p-5 sm:grid-cols-2 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className={label}>
        НЭР
        <input required name="name" autoComplete="name" className={field} />
      </label>
      <label className={label}>
        УТАС
        <input required type="tel" name="phone" autoComplete="tel" placeholder="8888 8888" className={field} />
      </label>
      <label className={label}>
        ХҮСЭЖ БУЙ ӨДӨР
        <input required type="date" name="date" className={field} />
      </label>
      <label className={label}>
        ХҮНИЙ ТОО <span className="font-normal tracking-normal text-[#6d5f53]">(10–20)</span>
        <input required type="number" name="guests" min={10} max={20} placeholder="15" className={field} />
      </label>
      <label className={label}>
        АРГА ХЭМЖЭЭ
        <select required name="occasion" defaultValue="" className={field}>
          <option value="" disabled>Сонгоно уу</option>
          {occasions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label className={label}>
        ХЭЛБЭР
        <select required name="format" defaultValue="" className={field}>
          <option value="" disabled>Сонгоно уу</option>
          {formats.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </label>
      <label className={label + " sm:col-span-2"}>
        НЭМЭЛТ МЭДЭЭЛЭЛ
        <textarea name="message" rows={3} placeholder="Цэсний хүсэлт, харшил, чимэглэл..." className={field + " resize-y"} />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="w-full bg-[#2b2119] px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-white hover:bg-[#4a3a2e]">
          ХҮСЭЛТ ИЛГЭЭХ →
        </button>
        <p className="mt-3 text-[11px] text-[#7a5a1e]">Туршилтын хувилбар: мэдээлэл хадгалагдахгүй.</p>
      </div>
    </form>
  );
}
