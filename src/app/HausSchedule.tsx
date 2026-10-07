"use client";

// ХУВААРЬ + ЗАХИАЛГА (HAUS загвар) — нүүр хуудсан дээр ХОЁР ТУСДАА ХЭСЭГ:
//   1) #haus-schedule  "Хуваарь"   — сарын календарь + тухайн өдрийн/удахгүй болох ангиуд
//   2) #haus-book      "Захиалах"  — анги сонгох + маягт
// Хуваарь дахь "Энэ ангийг захиалах" товч дарахад тухайн анги Захиалах хэсэгт сонгогдоод тийш гүйлгэнэ.
// Хоёр хэсэг нэг мэдээллийг (ангиуд, суудлын тоо) хуваалцдаг тул нэг файлд, нэг "эх" бүрэлдэхүүнд байна.
//
// ⚠ ОДООГООР ТУРШИЛТЫН ХУВИЛБАР:
//   - Ангиуд `initialSessions` дотор гараар бичигдсэн; "booked" нь ЖИШЭЭ тоо.
//   - Маягт илгээхэд мэдээлэл хадгалагдахгүй, и-мэйл очихгүй.
//     Зөвхөн энэ дэлгэц дээр суудлын тоо нэмэгдэж, дүүрэх үйлдлийг харуулна (refresh хийхэд буцна).
//   Дараагийн шатанд энэ жагсаалт Supabase-ээс ирж, захиалга тэнд хадгалагдана.

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Session = {
  id: string;
  date: string; // "ОООО-СС-ӨӨ"
  time: string;
  title: string; // англи нэр (постер дээрх шиг)
  mn: string; // монгол тайлбар
  chef: string;
  capacity: number; // нийт суудал
  booked: number; // захиалагдсан суудал (ЖИШЭЭ ТОО)
  image: string;
};

// Instagram-д зарлагдсан ангиуд (огноо, цаг, тогооч нь жинхэнэ; booked нь жишээ).
const initialSessions: Session[] = [
  {
    id: "2026-10-04-spanish-mexican",
    date: "2026-10-04",
    time: "12:00–15:00",
    title: "Spanish × Mexican",
    mn: "Испани, Мексик хоолны анги",
    chef: "Chef B · Болдбаатар",
    capacity: 14,
    booked: 14,
    image: "/images/chef1.PNG",
  },
  {
    id: "2026-10-10-kombucha",
    date: "2026-10-10",
    time: "12:00–15:00",
    title: "Kombucha Fermentation",
    mn: "Комбуча исгэх анги",
    chef: "Габриэл",
    capacity: 14,
    booked: 9,
    image: "/images/studio-official-6.jpg",
  },
  {
    id: "2026-10-11-fermentation",
    date: "2026-10-11",
    time: "12:00–15:00",
    title: "Fermentation Class",
    mn: "Шинэ ургацын ногоо даршлах анги",
    chef: "Chef Maya · Мая",
    capacity: 14,
    booked: 13,
    image: "/images/chef3.PNG",
  },
];

const weekdays = ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"]; // Даваа → Ням

// Огноог "ОООО-СС-ӨӨ" текст болгох
function toKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
// "2026-10-10" → "10-р сарын 10, Бямба"
function prettyDate(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  const names = ["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"];
  return `${m}-р сарын ${d}, ${names[new Date(y, m - 1, d).getDay()]}`;
}

type Props = { forumClass: string; scriptClass: string };

export default function HausSchedule({ forumClass, scriptClass }: Props) {
  const [sessions, setSessions] = useState(initialSessions);

  // Өнөөдрийн огноо — зөвхөн хөтөч дээр тооцно (сервер, хөтчийн цаг зөрөхөөс сэргийлнэ)
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    const now = new Date();
    setToday(toKey(now.getFullYear(), now.getMonth(), now.getDate()));
  }, []);

  // Захиалах хэсэгт сонгогдсон анги (хоёр хэсэг хуваалцана)
  const [chosenId, setChosenId] = useState<string>("");

  const isOpen = (s: Session) => s.booked < s.capacity && (today === null || s.date >= today);

  // Хуваариас "Энэ ангийг захиалах" дарахад: анги сонгоод Захиалах хэсэг рүү зөөлөн гүйлгэнэ
  const chooseAndGo = (id: string) => {
    setChosenId(id);
    document.getElementById("haus-book")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Захиалга "баталгаажсан" үед суудлын тоог нэмэх (одоогоор зөвхөн энэ дэлгэц дээр)
  const confirmBooking = (id: string, people: number) =>
    setSessions((list) => list.map((s) => (s.id === id ? { ...s, booked: Math.min(s.capacity, s.booked + people) } : s)));

  return (
    <>
      <ScheduleSection
        sessions={sessions}
        today={today}
        isOpen={isOpen}
        onChoose={chooseAndGo}
        forumClass={forumClass}
        scriptClass={scriptClass}
      />
      <BookSection
        sessions={sessions}
        today={today}
        isOpen={isOpen}
        chosenId={chosenId}
        setChosenId={setChosenId}
        onConfirm={confirmBooking}
        forumClass={forumClass}
        scriptClass={scriptClass}
      />
    </>
  );
}

// ─────────────────────────────────────────────
// 1) ХУВААРЬ — календарь + ангиуд
// ─────────────────────────────────────────────
function ScheduleSection({
  sessions,
  today,
  isOpen,
  onChoose,
  forumClass,
  scriptClass,
}: {
  sessions: Session[];
  today: string | null;
  isOpen: (s: Session) => boolean;
  onChoose: (id: string) => void;
  forumClass: string;
  scriptClass: string;
}) {
  const [view, setView] = useState({ year: 2026, month: 9 }); // month: 0 = 1-р сар → 9 = 10-р сар
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Өдөр бүрт ямар ангиуд байгааг хурдан олох "толь"
  const byDate = useMemo(() => {
    const map: Record<string, Session[]> = {};
    for (const s of sessions) (map[s.date] ||= []).push(s);
    return map;
  }, [sessions]);

  // Календарийн нүднүүд: сарын 1 аль гарагт таарахаас хамаарч урд нь хоосон нүд нэмнэ
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const firstWeekday = (new Date(view.year, view.month, 1).getDay() + 6) % 7; // Даваа = 0
  const cells: (number | null)[] = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  const changeMonth = (step: number) => {
    const d = new Date(view.year, view.month + step, 1);
    setView({ year: d.getFullYear(), month: d.getMonth() });
    setSelectedDate(null);
  };

  // Сонгосон өдрийнх, эсвэл энэ сарын бүх анги
  const monthPrefix = `${view.year}-${String(view.month + 1).padStart(2, "0")}`;
  const listed = (selectedDate ? byDate[selectedDate] ?? [] : sessions.filter((s) => s.date.startsWith(monthPrefix))).sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  return (
    <section id="haus-schedule" className="bg-[#fbf9f6] px-5 py-20 text-[#2b2119] sm:px-10 sm:py-28">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center">
          <h2 className={forumClass + " uppercase leading-[1] text-[length:clamp(2.3rem,5vw,4.2rem)]"}>
            This month at the <span className={scriptClass + " normal-case text-[1.15em] leading-[0.5]"}>S</span>tudio
          </h2>
          <p className={forumClass + " mt-4 text-[length:clamp(1.15rem,2vw,1.5rem)] tracking-[0.02em] text-[#6d5f53]"}>Сургалтын хуваарь</p>
          <p className="mx-auto mt-5 inline-block border border-dashed border-[#b4862e]/60 bg-[#fff8e8] px-3 py-1.5 text-[11px] text-[#7a5a1e]">
            Туршилтын хувилбар: суудлын тоо жишээ
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          {/* ── КАЛЕНДАРЬ ── */}
          <div className="border border-[#2b2119]/12 bg-white p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <button type="button" onClick={() => changeMonth(-1)} aria-label="Өмнөх сар" className="grid h-9 w-9 place-items-center rounded-full border border-[#2b2119]/20 hover:bg-[#2b2119] hover:text-white">←</button>
              <p className={forumClass + " text-[22px] uppercase"}>
                {view.year} · {view.month + 1}-р сар
              </p>
              <button type="button" onClick={() => changeMonth(1)} aria-label="Дараагийн сар" className="grid h-9 w-9 place-items-center rounded-full border border-[#2b2119]/20 hover:bg-[#2b2119] hover:text-white">→</button>
            </div>

            <div className="mt-6 grid grid-cols-7 text-center text-[10px] font-semibold tracking-[0.15em] text-[#8a6f55]">
              {weekdays.map((w) => (
                <span key={w} className="py-2">{w}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {cells.map((day, i) => {
                if (day === null) return <span key={"e" + i} />;
                const key = toKey(view.year, view.month, day);
                const dayClasses = byDate[key];
                const anyOpen = dayClasses?.some(isOpen);
                const isSelected = selectedDate === key;
                return (
                  <button
                    key={key}
                    type="button"
                    disabled={!dayClasses}
                    onClick={() => setSelectedDate(isSelected ? null : key)}
                    aria-pressed={isSelected}
                    aria-label={dayClasses ? `${prettyDate(key)} — ${dayClasses.length} анги` : undefined}
                    className={
                      "relative grid aspect-square place-items-center text-[14px] transition-colors " +
                      (isSelected
                        ? "bg-[#2b2119] text-white"
                        : dayClasses
                          ? anyOpen
                            ? "bg-[#f4efe8] hover:bg-[#e9dfd2]"
                            : "text-[#2b2119]/45 hover:bg-[#f4efe8]"
                          : "text-[#2b2119]/35") +
                      (key === today ? " outline outline-1 outline-[#2b2119]/40" : "")
                    }
                  >
                    {day}
                    {/* Жижиг цэг: шар = суудал байгаа, саарал = дүүрсэн/өнгөрсөн */}
                    {dayClasses && (
                      <span className={"absolute bottom-1.5 h-1 w-1 rounded-full " + (isSelected ? "bg-white" : anyOpen ? "bg-[#b4862e]" : "bg-[#2b2119]/30")} />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[#6d5f53]">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#b4862e]" /> Суудал байгаа</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#2b2119]/30" /> Дүүрсэн / өнгөрсөн</span>
            </div>
          </div>

          {/* ── ТУХАЙН САР / ӨДРИЙН АНГИУД ── */}
          <div>
            <div className="flex items-baseline justify-between gap-4 border-b border-[#2b2119]/15 pb-3">
              <p className={forumClass + " text-[20px] uppercase"}>{selectedDate ? prettyDate(selectedDate) : `${view.month + 1}-р сарын ангиуд`}</p>
              {selectedDate && (
                <button type="button" onClick={() => setSelectedDate(null)} className="text-[11px] text-[#6d5f53] underline underline-offset-4">
                  Бүх сарыг харах
                </button>
              )}
            </div>

            {listed.length === 0 && <p className="mt-6 text-[14px] text-[#6d5f53]">Энэ сард зарлагдсан анги алга. Instagram хуудсаа дагаарай.</p>}

            <div className="divide-y divide-[#2b2119]/12">
              {listed.map((s) => {
                const left = s.capacity - s.booked;
                const past = today !== null && s.date < today;
                return (
                  <article key={s.id} className={"grid grid-cols-[88px_1fr] gap-4 py-5 sm:grid-cols-[110px_1fr] sm:gap-6 " + (past ? "opacity-55" : "")}>
                    <div className="relative aspect-square overflow-hidden bg-[#e3d9cc]">
                      <Image src={s.image} alt="" fill sizes="110px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#6d5f53]">{prettyDate(s.date)} · {s.time}</p>
                      <h3 className={forumClass + " mt-1 text-[22px] uppercase leading-tight"}>{s.title}</h3>
                      <p className="text-[13px] text-[#5e5047]">{s.mn} · {s.chef}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                        {/* Суудлын тоо: зураас дүүрэх тусам урт болно */}
                        <span className="flex items-center gap-3">
                          <span className="h-1 w-24 overflow-hidden bg-[#2b2119]/10">
                            <span className="block h-full bg-[#2b2119]" style={{ width: `${(s.booked / s.capacity) * 100}%` }} />
                          </span>
                          <span className="text-[11px] text-[#6d5f53]">
                            {past ? "Өнгөрсөн" : left <= 0 ? "Дүүрсэн" : `${s.capacity} суудлаас ${left} үлдсэн`}
                          </span>
                        </span>
                        {isOpen(s) && (
                          <button type="button" onClick={() => onChoose(s.id)} className="border-b border-[#2b2119] pb-0.5 text-[11px] font-semibold tracking-[0.14em]">
                            ЭНЭ АНГИЙГ ЗАХИАЛАХ ↓
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 2) ЗАХИАЛАХ — анги сонгох + маягт (бараан дэвсгэр, хуваариас тод ялгарна)
// ─────────────────────────────────────────────
function BookSection({
  sessions,
  today,
  isOpen,
  chosenId,
  setChosenId,
  onConfirm,
  forumClass,
  scriptClass,
}: {
  sessions: Session[];
  today: string | null;
  isOpen: (s: Session) => boolean;
  chosenId: string;
  setChosenId: (id: string) => void;
  onConfirm: (id: string, people: number) => void;
  forumClass: string;
  scriptClass: string;
}) {
  const [people, setPeople] = useState(1);
  const [sentFor, setSentFor] = useState<Session | null>(null); // илгээсэн захиалгын анги

  // Сонгох боломжтой ангиуд = өнгөрөөгүй ангиуд (дүүрсэн нь харагдах боловч сонгогдохгүй)
  const choices = sessions.filter((s) => today === null || s.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const chosen = sessions.find((s) => s.id === chosenId) ?? null;
  const left = chosen ? chosen.capacity - chosen.booked : 0;

  // Анги солигдоход хүний тоог 1 болгоно
  useEffect(() => setPeople(1), [chosenId]);

  const fieldClass = "w-full border border-white/25 bg-white/5 px-3 py-3 text-[16px] font-normal tracking-normal text-white placeholder:text-white/35 focus:border-white focus:outline-none";
  const labelClass = "grid gap-2 text-[11px] font-semibold tracking-[0.12em] text-white/80";

  return (
    <section id="haus-book" className="scroll-mt-4 bg-[#2b2119] px-5 py-20 text-white sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Зүүн тал: гарчиг + захиалга хэрхэн явагдах 3 алхам */}
        <div>
          <h2 className={forumClass + " uppercase leading-[1] text-[length:clamp(2.3rem,5vw,4.2rem)]"}>
            Reserve your <span className={scriptClass + " normal-case text-[1.15em] leading-[0.5]"}>S</span>eat
          </h2>
          <p className={forumClass + " mt-4 text-[length:clamp(1.15rem,2vw,1.5rem)] tracking-[0.02em] text-white/75"}>Захиалга өгөх</p>

          <ol className="mt-10 space-y-6">
            {[
              ["Ангиа сонгоно", "Хуваариас эсвэл энэ маягтын жагсаалтаас."],
              ["Мэдээллээ бөглөнө", "Нэр, утас, и-мэйл, хүний тоо."],
              ["Төлбөрөө баталгаажуулна", "Студи тантай холбогдож төлбөрийн мэдээлэл өгнө. Төлбөр баталгаажмагц и-мэйл очиж, суудал тань хадгалагдана."],
            ].map(([title, text], index) => (
              <li key={title} className="grid grid-cols-[auto_1fr] gap-4">
                <span className={forumClass + " text-[28px] leading-none text-white/40"}>0{index + 1}</span>
                <span>
                  <span className={forumClass + " block text-[20px] uppercase"}>{title}</span>
                  <span className="mt-1 block text-[13px] leading-6 text-white/65">{text}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-[13px] text-white/60">
            Асуух зүйл байвал: <a href="tel:+97688808468" className="text-white underline underline-offset-4">+976 8880 8468</a> (09:00–20:00)
          </p>
        </div>

        {/* Баруун тал: маягт эсвэл амжилттай илгээсэн тухай мэдээлэл */}
        <div className="bg-white/[0.04] p-5 ring-1 ring-white/15 sm:p-8">
          {sentFor ? (
            <div className="py-6">
              <p className={forumClass + " text-[28px] leading-tight"}>Баярлалаа! Хүсэлт хүлээн авлаа.</p>
              <p className="mt-3 text-[14px] leading-6 text-white/75">
                {sentFor.title} · {prettyDate(sentFor.date)} · {sentFor.time}
              </p>
              <ol className="mt-5 list-decimal space-y-2 pl-5 text-[14px] leading-6 text-white/75">
                <li>Студи тантай утсаар холбогдож төлбөрийн мэдээлэл өгнө.</li>
                <li>Төлбөр баталгаажмагц таны и-мэйл рүү баталгаажуулах захидал очно.</li>
                <li>Таны суудал хуваарь дээр тооцогдож, анги дүүрвэл захиалга хаагдана.</li>
              </ol>
              <p className="mt-5 text-[11px] text-[#e8c985]">Туршилтын хувилбар: мэдээлэл хадгалагдаагүй, и-мэйл илгээгдээгүй.</p>
              <button
                type="button"
                onClick={() => {
                  setSentFor(null);
                  setChosenId("");
                }}
                className="mt-6 border border-white/60 px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] hover:bg-white hover:text-[#2b2119]"
              >
                ӨӨР АНГИ ЗАХИАЛАХ
              </button>
            </div>
          ) : (
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault(); // хуудас дахин ачааллахаас сэргийлнэ
                if (!chosen || !isOpen(chosen)) return;
                onConfirm(chosen.id, people); // ТУРШИЛТ: суудлын тоог шууд нэмнэ
                setSentFor(chosen);
              }}
            >
              <label className={labelClass + " sm:col-span-2"}>
                АНГИ
                {/* Дүүрсэн анги жагсаалтад харагдана, гэхдээ сонгох боломжгүй (disabled) */}
                <select required value={chosenId} onChange={(e) => setChosenId(e.target.value)} className={fieldClass + " [&>option]:text-[#2b2119]"}>
                  <option value="">Ангиа сонгоно уу</option>
                  {choices.map((s) => (
                    <option key={s.id} value={s.id} disabled={!isOpen(s)}>
                      {prettyDate(s.date)} — {s.title}
                      {isOpen(s) ? ` (${s.capacity - s.booked} суудал)` : " (дүүрсэн)"}
                    </option>
                  ))}
                </select>
              </label>

              {/* Сонгосон ангийн товч мэдээлэл */}
              {chosen && (
                <div className="grid grid-cols-[64px_1fr] items-center gap-4 border-y border-white/15 py-4 sm:col-span-2">
                  <div className="relative aspect-square overflow-hidden bg-white/10">
                    <Image src={chosen.image} alt="" fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <p className={forumClass + " text-[18px] uppercase leading-tight"}>{chosen.title}</p>
                    <p className="text-[12px] text-white/65">
                      {prettyDate(chosen.date)} · {chosen.time} · {chosen.chef}
                    </p>
                    <p className="mt-1 text-[12px] text-[#e8c985]">{left} суудал үлдсэн</p>
                  </div>
                </div>
              )}

              <label className={labelClass}>
                НЭР
                <input required name="name" autoComplete="name" className={fieldClass} />
              </label>
              <label className={labelClass}>
                УТАС
                <input required type="tel" name="phone" autoComplete="tel" placeholder="8888 8888" className={fieldClass} />
              </label>
              <label className={labelClass + " sm:col-span-2"}>
                И-МЭЙЛ <span className="font-normal tracking-normal text-white/50">(баталгаажуулах захидал энд очно)</span>
                <input required type="email" name="email" autoComplete="email" className={fieldClass} />
              </label>
              <label className={labelClass}>
                ХҮНИЙ ТОО
                {/* Үлдсэн суудлаас илүү сонгох боломжгүй (дээд тал нь 6) */}
                <select value={people} onChange={(e) => setPeople(Number(e.target.value))} disabled={!chosen} className={fieldClass + " [&>option]:text-[#2b2119] disabled:opacity-40"}>
                  {Array.from({ length: Math.max(1, Math.min(left, 6)) }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} хүн</option>
                  ))}
                </select>
              </label>
              <label className={labelClass + " sm:col-span-2"}>
                НЭМЭЛТ ХҮСЭЛТ
                <textarea name="note" rows={2} placeholder="Харшил, тусгай хүсэлт..." className={fieldClass + " resize-y"} />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={!chosen}
                  className="w-full bg-[#f4efe8] px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-[#2b2119] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ХҮСЭЛТ ИЛГЭЭХ →
                </button>
                <p className="mt-3 text-[11px] leading-5 text-white/55">Төлбөр баталгаажсаны дараа таны суудал баталгаажна.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
