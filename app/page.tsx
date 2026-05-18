// app/page.tsx
// ⚠️ "use client" KALDIRILDI! Sayfa artık %100 Server-Side.

import { ANIMALS, BLOG_POSTS } from "@/constants/data";
import { HomeContent } from "@/components/home-content";

export default function Home() {
  // Verilerimizi sunucu tarafında çekip (veya statik veriden okuyup) akıllı istemci bileşenine paslıyoruz
  return (
    <main className="flex-1 bg-background px-4 sm:px-8 pt-2 pb-10">
      {/* İskelet server kalıyor, interaktif işleri HomeContent sırtlanıyor */}
      <HomeContent initialAnimals={ANIMALS} initialBlogs={BLOG_POSTS} />
    </main>
  );
}
