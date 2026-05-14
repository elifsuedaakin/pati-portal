"use client";

import { useSearchStore } from "@/store/useSearchStore";
import { ANIMALS, BLOG_POSTS } from "@/constants/data";
import { AnimalCard } from "@/components/animal-card";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const { searchQuery, selectedCategory, setSelectedCategory } =
    useSearchStore();
  const searchLower = searchQuery.toLowerCase();

  //1. FONKSİYONEL SIRALAMA
  const sortResults = (data: any[], titleKey: string) => {
    return [...data].sort((a, b) => {
      const aTitle = a[titleKey].toLowerCase();
      const bTitle = b[titleKey].toLowerCase();
      const aStarts = aTitle.startsWith(searchLower) ? 1 : 0;
      const bStarts = bTitle.startsWith(searchLower) ? 1 : 0;
      if (aStarts !== bStarts) return bStarts - aStarts;
      return aTitle.localeCompare(bTitle);
    });
  };

  //2. VERİ FİLTRELEME
  const allFilteredAnimals = ANIMALS.filter((a) =>
    `${a.name} ${a.breed} ${a.category}`.toLowerCase().includes(searchLower),
  );

  const allFilteredBlogs = BLOG_POSTS.filter((b) =>
    `${b.title} ${b.description}`.toLowerCase().includes(searchLower),
  );

  const displayAnimals = sortResults(
    allFilteredAnimals.filter(
      (a) =>
        selectedCategory === "all" ||
        selectedCategory === "all_animals" ||
        a.category === selectedCategory,
    ),
    "name",
  );

  const displayBlogs = sortResults(allFilteredBlogs, "title");

  return (
    <main className="flex-1 bg-background px-4 sm:px-8 pt-2 pb-10">
      <div className="max-w-full mx-auto">
        {/* AKILLI BİLGİ ÇUBUĞU */}
        {searchQuery && (
          <div className="mb-6 flex flex-wrap gap-4 items-center bg-muted/30 p-3 rounded-2xl border border-border/50">
            <p className="text-sm font-medium italic">
              "{searchQuery}" için sonuçlar:
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("all_animals")}
              className={`text-xs px-3 py-1.5 rounded-full transition-all ${selectedCategory !== "all" ? "bg-primary text-white shadow-md" : "bg-background border hover:bg-muted"}`}
            >
              🐾 İlanlar ({allFilteredAnimals.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`text-xs px-3 py-1.5 rounded-full transition-all ${selectedCategory === "all" ? "bg-primary text-white shadow-md" : "bg-background border hover:bg-muted"}`}
            >
              📚 Bloglar ({allFilteredBlogs.length})
            </button>
          </div>
        )}

        {/* BAŞLIK ALANI */}
        <div
          id="sahiplenme"
          className="mb-4 flex flex-col border-b pb-2 scroll-mt-20"
        >
          <h1 className="text-lg font-bold tracking-tight">
            {selectedCategory === "all"
              ? "Pati Blog & Haberler"
              : "Sahiplendirme İlanları"}
          </h1>
        </div>

        {/* İÇERİK IZGARASI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {selectedCategory === "all" ? (
            // BLOGLAR KISMI
            displayBlogs.length > 0 ? (
              displayBlogs.map((post) => (
                <Link
                  href={`/blog/${post.id}`}
                  key={post.id}
                  className="block group"
                >
                  <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all bg-muted/20 rounded-[2rem] p-0 flex flex-col cursor-pointer">
                    <div className="relative w-full h-[180px] shrink-0 overflow-hidden rounded-t-[2rem]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-3.5 pt-2 flex flex-col gap-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] text-white bg-white/10 px-2 py-0.5 rounded-md font-black uppercase tracking-widest">
                          {post.category}
                        </span>
                        <span className="text-[9px] text-muted-foreground font-bold">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm leading-tight text-white group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[12px] text-muted-foreground italic leading-snug line-clamp-2">
                        {post.description}
                      </p>
                      <div className="mt-1 pt-1.5 border-t border-white/5 flex items-center justify-end">
                        <span className="text-[10px] font-black text-white/80 uppercase tracking-tighter flex items-center gap-1 group-hover:text-primary transition-colors">
                          OKU 🐾
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              // BLOG BULUNAMADIĞINDA GÖRÜNECEK ALAN
              <div className="col-span-full py-20 text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="text-4xl mb-4">📚</div>
                <p className="text-muted-foreground font-medium italic">
                  "{searchQuery}" ile ilgili bir blog yazısı bulunmamaktadır.
                </p>
              </div>
            )
          ) : // İLANLAR KISMI
          displayAnimals.length > 0 ? (
            displayAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))
          ) : (
            // İLAN BULUNAMADIĞINDA GÖRÜNECEK ALAN
            <div className="col-span-full py-20 text-center animate-in fade-in slide-in-from-bottom-4">
              <div className="text-4xl mb-4">🐾</div>
              <p className="text-muted-foreground font-medium italic">
                "{searchQuery}" kriterlerine uygun bir ilan bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
