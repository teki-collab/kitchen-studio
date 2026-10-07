import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Хөгжүүлэлтийн үед (npm.cmd run dev) утас зэрэг өөр төхөөрөмжөөс
  // http://192.168.1.10:300x хаягаар орохыг зөвшөөрнө.
  // Үүнгүйгээр Next.js 16 хуудсыг ачаалсан ч товчнууд ажиллахгүй байж болно.
  // Компьютерийн Wi-Fi хаяг өөрчлөгдвөл энэ хаягийг шинэчилнэ.
  // Интернэтэд байршуулсан (Vercel) сайтад нөлөөлөхгүй.
  allowedDevOrigins: ["192.168.1.10"],
};

export default nextConfig;
