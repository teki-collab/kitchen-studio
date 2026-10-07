// HAUS загварын фонтууд — НЭГ газар ачаалж, бүх хуудас эндээс import хийнэ.
// (Нэг фонтыг олон файлд тус тусад нь ачаалбал хөтөч давхар татна.)
import { Forum, Great_Vibes } from "next/font/google";

// Гарчгийн фонт. Ө, Ү үсгийг дэмждэг (font-test хуудсаар шалгасан).
export const forum = Forum({ weight: "400", subsets: ["latin"], display: "swap" });
// Гоёмсог script фонт — зөвхөн англи үгийн эхний үсэгт.
export const script = Great_Vibes({ weight: "400", subsets: ["latin"], display: "swap" });
