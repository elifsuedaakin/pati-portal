# PATİ-BLOG & SAHİPLENDİRME PORTALI 🐾

Pati Portal, hayvanseverler ile sahiplenilmeyi bekleyen can dostlarımızı modern bir dijital platformda buluşturan, yüksek performanslı bir **Next.js** uygulamasıdır. Proje, bilgilendirici blog içerikleri ile dinamik bir ilan sistemini tek bir çatıda toplar.

## 🏗️ Bileşen Mimarisi

### 1. Header: Navigasyon ve Akıllı Kontrol Merkezi
* **Pati Logo & Nav:** Kullanıcıyı her zaman varsayılan blog akışına döndüren hızlı navigasyon sağlar.
* **Akıllı Arama Çubuğu (Client Component):** Blog yazıları ve ilanlar içinde eş zamanlı arama yapmayı sağlar.
* **Gelişmiş Sıralama Algoritması:**
  * **Alfabetik Temel:** Tüm sonuçlar varsayılan olarak A'dan Z'ye sıralanır.
  * **Arama Ağırlığı (Search Priority):** Aranan kelime başlıkta geçiyorsa, alfabetik sırayı bozmadan o öğeyi en üste taşır.
  * **Empty State:** Arama sonucu bulunamadığında "📚 İlgili blog bulunamadı" şeklinde geri bildirimler sunar.
* **Tür Filtreleme (Dropdown):** "Kedi, Köpek, Kuş, Egzotik" kategorileri arasında anlık geçiş imkanı sunar.

### 2. Dinamik İçerik Alanı (Main Content)
* **Dinamik Akış:** Seçilen kategoriye göre "Pati Blog" veya "Sahiplendirme İlanları" arasında pürüzsüz geçiş yapar.
* **Kompakt Kart Tasarımı:** Blog ve hayvan kartları, gereksiz boşluklardan arındırılmış bir estetikle sunulur.
* **Dinamik Routing:** `/blog/[id]` ve `/sahiplenme/[id]` yapıları sayesinde her içerik için SEO dostu sayfalar oluşturulur.

### 3. Sahiplendirme Formu & Spam Kalkanı
* **Kapsamlı Veri Girişi:** Ad-Soyad, Doğum Tarihi, 11 haneli TC No ve adres bilgilerini içeren güvenli form yapısıdır.
* **Anlık Validasyon:** Form gönderilmeden önce alanlar denetlenir; eksik bilgide dinamik uyarılar belirir.
* **LocalStorage Koruması:** Aynı hayvana mükerrer başvuru yapılması tarayıcı bazlı engellenir.

## 🛠️ Teknik Stack

* **Framework:** Next.js 14/15+ (App Router mimarisi).
* **Styling:** Tailwind CSS & Shadcn/ui (Modern ve erişilebilir arayüz).
* **State Management:** Zustand (Persist Middleware ile kalıcılık).
* **Form & İletişim:** Formspree API (Doğrudan e-posta entegrasyonu).
* **Theme:** Next-themes (Açık ve Koyu tema desteği).
* **Linter/Formatting:** Biome (Kod kalitesi ve A11y standartları).



## 📩 İletişim ve Veri Akışı
Başvuru formu doldurulduğunda, veriler güvenli bir şekilde işlenir ve yönetici e-posta adresine detaylı bir rapor olarak iletilir. İşlem sonrası kullanıcıya işlemin alındığına dair görsel bir başarı ekranı sunulur.

<p align="center">
  <b>ANA SAYFA'NIN KARANLIK TEMA GÖRÜNTÜSÜ</b>
  <img width="1906" height="877" alt="ana_sayfa_görüntüsü(karanlık_mod)" src="https://github.com/user-attachments/assets/e8213501-1a7b-4408-a260-590c598b662e" /> 
</p>

