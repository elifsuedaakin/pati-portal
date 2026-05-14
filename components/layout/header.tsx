"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Yönlendirme için eklendi
import { PawPrint, Search, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchStore } from "@/store/useSearchStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { setTheme, theme } = useTheme();
  const router = useRouter(); // Router'ı tanımladık

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    resetFilters,
  } = useSearchStore();

  // Filtreleme ve Yönlendirme Fonksiyonu
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category); // Önce filtreyi ayarla
    router.push("/#sahiplenme"); // Sonra ana sayfaya ve ilgili bölüme yönlendir
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-full flex h-16 items-center justify-between px-4 sm:px-8">
        {/* SOL: LOGO */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            onClick={() => resetFilters()}
            className="flex items-center gap-2 font-extrabold text-xl sm:text-2xl transition-colors hover:text-primary tracking-tight"
          >
            <PawPrint className="h-7 w-7 text-primary" />
            <span className="hidden sm:inline-block">Pati-Portal</span>
          </Link>
        </div>

        {/* ORTA: ARAMA ÇUBUĞU */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              type="search"
              placeholder="Blog veya ilan ara..."
              className="pl-10 h-10 w-full bg-muted/50 focus-visible:ring-primary rounded-full text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => router.push("/")} // Arama kutusuna tıklayınca ana sayfaya atar
            />
          </div>
        </div>

        {/* SAĞ: NAVİGASYON VE TEMA */}
        <div className="flex items-center gap-3">
          {/* BLOGLAR BUTONU */}
          <Button
            variant="ghost"
            className={`font-bold text-[15px] h-10 px-5 transition-colors rounded-full ${
              selectedCategory === "all" ? "text-primary bg-primary/10" : ""
            }`}
            onClick={() => handleCategoryChange("all")} // Fonksiyonu buraya bağladık
          >
            Bloglar
          </Button>

          {/* SAHİPLENDİRME DROPDOWN */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`gap-2 font-bold text-[15px] w-[170px] h-10 justify-between group rounded-full ${
                  selectedCategory !== "all" ? "text-primary bg-primary/10" : ""
                }`}
              >
                Sahiplendirme
                <ChevronDown className="h-5 w-5 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-[180px] rounded-xl p-1.5"
            >
              <DropdownMenuItem
                className="cursor-pointer font-bold text-primary border-b mb-1 p-2.5 rounded-lg"
                onClick={() => handleCategoryChange("all_animals")}
              >
                Tüm Hayvanlar
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer p-2.5 rounded-lg font-semibold"
                onClick={() => handleCategoryChange("kedi")}
              >
                Kedi
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer p-2.5 rounded-lg font-semibold"
                onClick={() => handleCategoryChange("kopek")}
              >
                Köpek
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer p-2.5 rounded-lg font-semibold"
                onClick={() => handleCategoryChange("kus")}
              >
                Kuş
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer p-2.5 rounded-lg font-semibold"
                onClick={() => handleCategoryChange("egzotik")}
              >
                Egzotik
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* TEMA DEĞİŞTİRİCİ */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10 shrink-0"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[22px] w-[22px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[22px] w-[22px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  );
}
