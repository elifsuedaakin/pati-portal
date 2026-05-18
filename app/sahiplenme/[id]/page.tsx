import AdoptionForm from "@/components/adoption-form";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AdoptionFormPage({ params }: PageProps) {
  // Next.js standardına uygun olarak url parametresini sunucuda bekleyerek (await) alıyoruz
  const { id } = await params;

  return (
    <main className="min-h-screen py-10 px-4 bg-background text-foreground">
      {/* İstemci bileşenini çağırıyoruz ve id'yi gönderiyoruz */}
      <AdoptionForm petId={id} />
    </main>
  );
}
