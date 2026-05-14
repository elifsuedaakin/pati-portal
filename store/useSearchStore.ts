import { create } from "zustand";

// Mağazamızın (Store) yapısını tanımlıyoruz
interface SearchState {
  searchQuery: string;
  selectedCategory: string;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  resetFilters: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  // Başlangıç değerleri (Açılışta arama boş, kategori 'all' yani hepsi)
  searchQuery: "",
  selectedCategory: "all",

  // Değerleri güncellemek için kullanacağımız fonksiyonlar
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  // Her şeyi temizlemek istersek (örneğin logoya basınca)
  resetFilters: () => set({ searchQuery: "", selectedCategory: "all" }),
}));
