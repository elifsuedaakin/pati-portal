import { clsx, type ClassValue } from "clsx"; //clsx sınıfları koşullu olarak yazabilmel için
import { twMerge } from "tailwind-merge"; //sınıflar birbiri ile çakışırsa hangisinin en son yazıldığını baz alarak çalışır
/**
 * Tailwind sınıflarını güvenli bir şekilde birleştirmemizi sağlar.
 * Çakışan sınıfları (örneğin p-2 ve p-4) otomatik olarak temizler.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} //cn  acıklaması Class Names clsx ile hangi sınıflaırn kullanılacağına karar verip twMerge ile çakışmaları önler
//burdaki input gelen toplanan ısnıflar
