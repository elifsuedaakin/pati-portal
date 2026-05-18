# PATİ-BLOG & SAHİPLENDİRME PORTALİ 🐾

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

## 📸 Ekran Görüntüleri

<p align="left">
  <b>🌙 Ana sayfanın karanlık tema görünümü</b>
  <br />
  <img width="1906" height="877" alt="ana_sayfa_görüntüsü(karanlık_mod)" src="https://github.com/user-attachments/assets/e8213501-1a7b-4408-a260-590c598b662e" /> 
</p>

---

<p align="left">
  <b>☀️ Ana sayfanın açık tema görünümü</b>
  <br />
  <img width="1903" height="940" alt="ana_sayfa_görüntüsü(aydınlık_mod)" src="https://github.com/user-attachments/assets/e3ee3f06-c73d-45de-acff-f309d6e49512" />
</p>

---

<p align="left">
  <b>📚 Blog Kartı İçeriği</b>
  <br />
  <img width="1902" height="859" alt="blog_kartı_icerigi_1" src="https://github.com/user-attachments/assets/cc3e3b21-e401-45ca-9ab3-9368edd55984" />
  <br /><br />
  <img width="1899" height="859" alt="blog_kartı_icerigi_2" src="https://github.com/user-attachments/assets/d8cf75be-edf9-4589-9d82-3eb87763a785" />
</p>

---

<p align="left">
  <b>🐾 Sahiplendirme sayfası görünümleri (seçilen kategoriye göre)</b>
  <br />
  <img width="1918" height="838" alt="sahiplendirme_ilanı_kedi_sayfası" src="https://github.com/user-attachments/assets/a2378584-c8c3-4f43-8282-25eb24dc753c" />
  <br /><br />
  <img width="1918" height="855" alt="sahiplendirme_ilanı_egzotik_sayfası" src="https://github.com/user-attachments/assets/4da07cc8-70e2-4297-899c-17f171e48f1d" />
  <br /><br />
  <img width="1918" height="830" alt="sahiplendirme_ilanı_köpek_sayfası" src="https://github.com/user-attachments/assets/f6b6bc71-3117-48d3-b4d8-0306573162d4" />
  <br /><br />
  <img width="1918" height="845" alt="sahiplendirme_sayfası_kus_ilanı" src="https://github.com/user-attachments/assets/99a4d2d5-3238-47d3-af36-65789585ead1" />
</p>

---

<p align="left">
  <b>📝 Sahiplendirme formu</b>
  <br />
  <img width="1912" height="862" alt="sahiplenme_formu_sayfası" src="https://github.com/user-attachments/assets/7fbdc6df-6a59-4325-a172-a7522034d217" />
</p>

---

<p align="left">
  <b>✅ Sahiplendirme formu sonucu başarı alerti</b>
  <br />
  <img width="1903" height="866" alt="sahiplenme_formu_başarı_alerti_ekranı" src="https://github.com/user-attachments/assets/3722f063-49b4-4ca2-84d1-f91c02bbeef5" />
</p>



<p align="left">
  <b>📩 Formspree ile gelen başvuru maili</b>
  <br />
  <img width="1506" height="622" alt="formspree_ile_maile_gelen_basvuru_bilgileri" src="https://github.com/user-attachments/assets/12772049-c0f3-4a61-b6c2-1c1855d02a0d" />
</p>

---

<p align="left">
  <b>🔍 Akıllı Arama Çubuğu ve Sonuçları</b>
  <br />
  <img width="1918" height="876" alt="arama_cubugu_sonucu" src="https://github.com/user-attachments/assets/f2e309c8-9b29-45dc-a0f4-15a9218cba93" />
  <br /><br />
  <img width="1903" height="887" alt="arama_cubugu_sonucu_2" src="https://github.com/user-attachments/assets/9d9762df-4c50-4140-9aec-1ed7564a19d3" />
  <br /><br />
  <img width="1918" height="867" alt="arama_cubugu_sonucu_3" src="https://github.com/user-attachments/assets/21ad13e2-741f-48fe-9d83-a7ed73f3d711" />
</p>