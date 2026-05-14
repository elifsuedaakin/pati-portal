"use client";

import { BLOG_POSTS } from "@/constants/data";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const params = useParams();

  // TS(2367) hatasını çözmek için params.id'yi Number'a çevirdik
  const post = BLOG_POSTS.find((b) => b.id === Number(params.id));

  if (!post)
    return (
      <div className="text-center py-20 italic">Blog bulunamadı... 🐾</div>
    );

  return (
    <main className="min-h-screen bg-background pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* 1. ÜST ALAN: Kategori ve Başlık */}
        <div className="pt-12 mb-10 text-left">
          <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-primary/10 text-primary px-4 py-1.5 rounded-full inline-block">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[0.9] mb-6 uppercase">
            {post.title}
          </h1>
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
            {post.date} • PATİ-PORTAL YAZARI
          </p>
        </div>

        {/* 2. RESİM ALANI */}
        <div className="mb-12">
          <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-[2.5rem] border border-white/5 bg-muted shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3. İÇERİK ALANI */}
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          {/* Özet Metin (Description) */}
          <p className="text-xl md:text-2xl leading-tight text-foreground font-medium italic border-l-4 border-primary pl-6 mb-10">
            {post.description}
          </p>

          {/* Ana Metin (Content) */}
          <div className="text-muted-foreground leading-relaxed space-y-6 text-lg whitespace-pre-line">
            {/* 
               
            */}
            {post.content ||
              "Yazı içeriği yükleniyor veya bu alan henüz doldurulmamış... 🐾"}
          </div>
        </article>
      </div>
    </main>
  );
}
