"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AnimalCardProps {
  animal: {
    id: string | number;
    name: string;
    breed: string;
    age: string;
    category: string;
    image: string;
  };
}

export function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all bg-muted/20 rounded-[2rem] p-0 flex flex-col h-full group">
      {/* Resim Alanı: Yüksekliği 180'den 160'a çektik ki kartın başı çok yukarıda kalmasın */}
      <div className="relative w-full h-[160px] shrink-0 overflow-hidden rounded-t-[2rem]">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-[50%_40%] block transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          quality={75}
        />
      </div>

      {/* İçerik Alanı: p-4'ü p-3'e düşürdük, gap-1 yaptık */}
      <CardContent className="p-3.5 pt-2 flex flex-col gap-0.5 flex-1">
        {/* Kategori Etiketi */}
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-primary font-black uppercase tracking-widest leading-none bg-primary/10 px-2 py-0.5 rounded-md">
            {animal.category}
          </span>
        </div>

        {/* İsim: mt-1'i sildik, metni biraz küçülttük */}
        <h3 className="font-bold text-[15px] line-clamp-1 leading-tight group-hover:text-primary transition-colors">
          {animal.name}
        </h3>

        {/* Cins ve Yaş: Daha kompakt bir yazı boyutu */}
        <p className="text-[11px] text-muted-foreground italic leading-tight line-clamp-1">
          {animal.breed} • {animal.age}
        </p>

        {/* BUTON ALANI: mt-auto ile en alta yasladık ama pt-3'ü pt-1.5'e indirdik */}
        <div className="mt-auto pt-1.5">
          <Link href={`/sahiplenme/${animal.id}`} className="block">
            <Button
              size="sm"
              className="w-full h-8 text-[11px] font-black uppercase tracking-tighter rounded-full bg-primary hover:bg-primary/90 transition-all active:scale-95"
            >
              Sahiplen 🐾
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
