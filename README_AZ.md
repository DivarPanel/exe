# Divarpanel.az Qaimə — Windows EXE

Bu layihə Divarpanel avtomatik qaimə tətbiqinin Windows masaüstü versiyasıdır.

## Funksiyalar
- Məhsul və müştəri bazası
- Satış qaiməsi və qiymət təklifi
- Avtomatik cəmləmə, endirim, çatdırılma və borc hesabı
- Qaimə tarixçəsi və qismən ödənişlər
- Çap dialoqundan PDF kimi saxlama
- WhatsApp-da qaimə mətnini paylaşma
- Lokal yaddaş və JSON ehtiyat nüsxəsi

## Vacib
Bu ZIP mənbə layihəsidir, hazır `.exe` faylı deyil. Bu mühitdə Windows build alətləri olmadığı üçün EXE-ni burada kompilyasiya edə bilmirəm.

## EXE-ni onlayn hazırlamaq (kompüterdə proqram quraşdırmadan)
1. GitHub hesabına daxil ol və yeni repository yarat.
2. Bu ZIP-i çıxart və bütün faylları (o cümlədən `.github` qovluğunu) repository-yə yüklə.
3. GitHub-da repository → **Actions** bölməsini aç.
4. **Build Windows EXE** workflow-unu seç → **Run workflow**.
5. Build bitdikdən sonra həmin run səhifəsinin **Artifacts** hissəsindən `Divarpanel-Windows-EXE` faylını yüklə.
6. ZIP artifact-ı aç; içində `Divarpanel Qaime Setup ... .exe` olacaq.

GitHub Actions Windows virtual kompüterində EXE-ni qurur; istifadəçinin öz kompüterinə Android Studio və ya Node.js quraşdırması lazım deyil. GitHub hesabı və internet lazımdır.

## Quraşdırma
Yüklənən EXE faylını açıb addımları izləyin. Windows SmartScreen xəbərdarlığı çıxarsa, yalnız öz yaratdığınız və etibar etdiyiniz build olduğuna əmin olduqdan sonra davam edin.

## Məlumatların saxlanması
Məhsullar, müştərilər və qaimələr həmin Windows istifadəçi profilinin tətbiq yaddaşında saxlanır. Kompüter dəyişəndə və ya tətbiq məlumatları silinəndə JSON ehtiyat nüsxəsindən bərpa edin.

## Rəsmi sənəd
Bu, daxili satış qaiməsi/qiymət təklifidir; rəsmi elektron vergi qaiməsini əvəz etmir.
