"use client";

import React, { useState, useEffect, useId } from "react";
import { useParams, useRouter } from "next/navigation";
import { Loader2, CheckCircle2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdoptionFormPage() {
  const { id: petId } = useParams();
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasAppliedBefore, setHasAppliedBefore] = useState(false);

  const FORMSPREE_URL = "https://formspree.io/f/mykoabvl";

  const fullNameId = useId();
  const birthDateId = useId();
  const tcNoId = useId();
  const addressId = useId();
  const reasonId = useId();

  useEffect(() => {
    const appliedIds = JSON.parse(localStorage.getItem("applied_pets") || "[]");
    if (appliedIds.includes(petId)) {
      setHasAppliedBefore(true);
    }
  }, [petId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("Hayvan ID", petId as string); // Mailde hangi hayvan olduğunu görmen için

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Başarılıysa kısıtlamayı tarayıcıya işle
        const appliedIds = JSON.parse(
          localStorage.getItem("applied_pets") || "[]",
        );
        localStorage.setItem(
          "applied_pets",
          JSON.stringify([...appliedIds, petId]),
        );
        setIsSubmitted(true);
      } else {
        alert("Bir hata oluştu, lütfen Formspree ayarlarını kontrol edin.");
      }
    } catch (error) {
      alert("Bağlantı hatası oluştu babuş!");
    } finally {
      setIsLoading(false);
    }
  };

  //başarı ekranı
  if (isSubmitted) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-background">
        <div className="max-w-2xl w-full p-12 text-center animate-in fade-in zoom-in duration-500 relative bg-card rounded-[2.5rem] border border-border/50 shadow-2xl">
          {/* SADECE ÇARPI BUTONU  */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full transition-all group"
            aria-label="Kapat ve Ana Sayfaya Dön"
          >
            <X
              size={24}
              className="text-muted-foreground group-hover:text-foreground group-hover:rotate-90 transition-transform"
            />
          </button>

          <div className="flex justify-center mb-8">
            <div className="rounded-full bg-green-500/10 p-5">
              <CheckCircle2 size={70} className="text-green-500" />
            </div>
          </div>

          <h2 className="text-3xl font-black mb-4 text-foreground tracking-tighter">
            Sahiplenme talebiniz başarıyla alınmıştır! 🐾
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto mb-4">
            Değerli başvurunuz elimize ulaştı. En kısa sürede sizinle iletişime
            geçeceğiz.
          </p>

          {}
        </div>
      </main>
    );
  }

  // KISITLAMA EKRANI
  if (hasAppliedBefore) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center p-12 bg-muted/20 rounded-[2rem] border border-dashed border-primary/30 max-w-md">
          <h2 className="text-2xl font-bold mb-2">Zaten Başvuru Yaptınız 🐾</h2>
          <p className="text-muted-foreground italic mb-6">
            Bu dostumuz için bir başvurunuz sistemimizde görünüyor.
          </p>
          <Button
            onClick={() => router.push("/")}
            variant="outline"
            className="rounded-full"
          >
            Geri Dön
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-10 px-4 bg-background text-foreground">
      <Card className="max-w-2xl mx-auto shadow-2xl rounded-[2.5rem] border-none bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center pt-10">
          <CardTitle className="text-3xl font-black uppercase tracking-tighter">
            🐾 Sahiplenme Başvuru Formu
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor={fullNameId}
                className="text-sm font-bold block ml-1 text-foreground/70"
              >
                Ad-Soyad
              </label>
              <Input
                id={fullNameId}
                name="Ad Soyad"
                placeholder="Örn: Elif Sueda"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor={birthDateId}
                className="text-sm font-bold block ml-1 text-foreground/70"
              >
                Doğum Tarihi
              </label>
              <Input
                id={birthDateId}
                name="Dogum Tarihi"
                type="date"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor={tcNoId}
                className="text-sm font-bold block ml-1 text-foreground/70"
              >
                TC Kimlik Numarası
              </label>
              <Input
                id={tcNoId}
                name="TC Kimlik No"
                maxLength={11}
                placeholder="11 haneli kimlik no"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor={addressId}
                className="text-sm font-bold block ml-1 text-foreground/70"
              >
                Açık Adres
              </label>
              <Textarea
                id={addressId}
                name="Acik Adres"
                placeholder="Mahalle, sokak, no..."
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor={reasonId}
                className="text-sm font-bold block ml-1 text-foreground/70"
              >
                Sahiplenme Nedeni
              </label>
              <Textarea
                id={reasonId}
                name="Sahiplenme Nedeni"
                placeholder="Neden bir dost sahiplenmek istiyorsunuz?"
                rows={4}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 text-lg font-bold rounded-full transition-all active:scale-[0.98]"
            >
              {isLoading ? (
                <Loader2 className="animate-spin h-6 w-6" />
              ) : (
                "FORMU GÖNDER 🐾"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
