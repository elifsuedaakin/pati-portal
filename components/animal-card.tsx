"use client";

import Image from "next/image";
import Link from "next/link"; // Yönlendirme için eklendi
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
      {/* Resim Alanı  */}
      <div className="relative w-full h-[180px] shrink-0 overflow-hidden rounded-t-[2rem]">
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

      <CardContent className="p-4 flex flex-col gap-1 flex-1">
        {/* Kategori */}
        <span className="text-[10px] text-primary font-black uppercase tracking-widest leading-none bg-primary/10 w-fit px-2 py-0.5 rounded-md">
          {animal.category}
        </span>

        {/* İsim */}
        <h3 className="font-bold text-base mt-1 line-clamp-1 leading-tight group-hover:text-primary transition-colors">
          {animal.name}
        </h3>

        {/* Cins ve Yaş  */}
        <p className="text-[12px] text-muted-foreground italic leading-tight">
          {animal.breed} • {animal.age}
        </p>

        {/* SAHİPLEN BUTONU*/}
        <div className="mt-auto pt-3">
          <Link href={`/sahiplenme/${animal.id}`} className="block">
            <Button
              size="sm"
              className="w-full h-9 text-[12px] font-black uppercase tracking-tighter rounded-full bg-primary hover:bg-primary/90 transition-all active:scale-95"
            >
              Sahiplen 🐾
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
