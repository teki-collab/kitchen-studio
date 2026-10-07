// ФОНТЫН ТУРШИЛТЫН ХУУДАС
// Нээх хаяг: http://localhost:3000/font-test
// Энэ хуудас зөвхөн фонт сонгоход зориулагдсан. Сонголт хийсний дараа устгана.
// Бусад файлд (page.tsx, theme.css, layout.tsx) огт нөлөөлөхгүй.

import { Cormorant_Garamond, Forum, Great_Vibes, Playfair_Display, Prata } from "next/font/google";

// Фонт бүрийг Google Fonts-оос татаж, таны сайтаас өөрөөс нь үйлчилнэ.
// fallback: ["monospace"] — хэрэв фонтод аль нэг үсэг (жишээ нь Ө, Ү) байхгүй бол
// тэр үсэг бичгийн машины (Courier) фонтоор гарч ирнэ. Тэгэхээр нүдээр шууд ялгана.
// adjustFontFallback: false — Next.js-ийн автомат "төстэй фонт" орлуулалтыг унтраана,
// эс тэгвээс дутуу үсэг өөр serif фонтоор нуугдаж харагдахгүй болно.
const cormorant = Cormorant_Garamond({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], fallback: ["monospace"], adjustFontFallback: false });
const playfair = Playfair_Display({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], fallback: ["monospace"], adjustFontFallback: false });
const prata = Prata({ weight: "400", subsets: ["latin"], fallback: ["monospace"], adjustFontFallback: false });
const forum = Forum({ weight: "400", subsets: ["latin"], fallback: ["monospace"], adjustFontFallback: false });
// Гоёмсог гар бичмэл (script) фонт — зөвхөн том эхний үсэгт ("ℳEANING" шиг) хэрэглэнэ.
const vibes = Great_Vibes({ weight: "400", subsets: ["latin"], fallback: ["monospace"], adjustFontFallback: false });

// Туршиж харах фонтуудын жагсаалт. Шинэ фонт нэмэх бол энд нэг мөр нэмнэ.
const fonts = [
  { name: "A · Cormorant Garamond", font: cormorant },
  { name: "B · Playfair Display", font: playfair },
  { name: "C · Prata", font: prata },
  { name: "D · Forum", font: forum },
];

export default function FontTest() {
  return (
    <main className="min-h-screen bg-[#f3eee7] px-5 py-10 text-[#2b2119] sm:px-10">
      <h1 className="text-sm font-bold tracking-[0.2em]">ФОНТЫН ТУРШИЛТ · 4 ДЭХ ЗАГВАР (HAUS)</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6d5f53]">
        Үсэг бүрийг харьцуулаарай. Хэрэв аль нэг үсэг (ялангуяа Ө, Ү) бусдаасаа өөр, бичгийн машины
        маягийн фонтоор харагдвал тэр фонтод тухайн үсэг байхгүй гэсэн үг.
      </p>

      {fonts.map(({ name, font }) => (
        <section key={name} className="mt-10 border-t border-[#2b2119]/15 pt-8">
          <p className="text-xs font-bold tracking-[0.2em] text-[#8a6f55]">{name}</p>

          {/* Нүүр хэсгийн гарчиг шиг: том, бүх үсэг том, нягт зайтай */}
          <p className={font.className + " mt-4 text-5xl uppercase leading-[1.05] tracking-[-0.02em] sm:text-7xl"}>
            Амтыг урлаж,<br />хоолыг бүтээе.
          </p>
          <p className={font.className + " mt-3 text-3xl uppercase sm:text-5xl"}>Өөрийн гараар · Үндэстний амт</p>

          {/* Энгийн жижиг үсэг — тайлбар текстэд хэрэглэвэл ямар харагдахыг шалгана */}
          <p className={font.className + " mt-5 max-w-2xl text-xl leading-8"}>
            Хоолыг амталж, мэдэрч, хийх дуртай хэн бүхний зорин ирэх урлан. Өөрөө хийж, үнэрлэж, амтлаад
            шинэ үндэстний хоолтой танилцана. 8–14 хүн · 12:00–15:00
          </p>

          {/* Англи гарчиг + script эхний үсэг: "ℳEANING" маягийг Kitchen Studio-д */}
          <p className={font.className + " mt-6 text-5xl uppercase leading-[1.05] sm:text-7xl"}>
            Taste.{" "}
            <span className="whitespace-nowrap">
              <span className={vibes.className + " normal-case text-[1.15em] leading-none"}>C</span>raft.
            </span>{" "}
            Gather.
          </p>
        </section>
      ))}
    </main>
  );
}
