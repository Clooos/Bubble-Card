<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Halaman ini adalah terjemahan otomatis. Jika ragu, [dokumentasi asli dalam bahasa Inggris](../README.md) yang berlaku. Ada kalimat yang terasa janggal? Bantuan apa pun sangat kami hargai, dan [memperbaiki halaman ini](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.id.md) hanya butuh satu menit: GitHub yang mengurus fork dan pull request-nya. Terima kasih sebelumnya! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Baca ini dalam bahasa lain](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card adalah koleksi kartu yang minimalis dan dapat disesuaikan untuk Home Assistant, dengan pop-up modern dan Module Store terintegrasi yang berisi lebih dari 100 modul buatan komunitas.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Daftar isi

**[`Instalasi`](#instalasi)**  **[`Konfigurasi`](#konfigurasi)**  **[`Saran entitas`](#saran-entitas)**  **[`Pop-up`](#pop-up)**  **[`Tumpukan tombol horizontal`](#tumpukan-tombol-horizontal)**  **[`Tombol`](#tombol)**  **[`Pemutar media`](#pemutar-media)**  **[`Penutup`](#penutup)**  **[`Pilih`](#pilih)**  **[`Iklim`](#iklim)**  **[`Kalender`](#kalender)**  **[`Pemisah`](#pemisah)**  **[`Kolom kosong`](#kolom-kosong)**  **[`Hanya subtombol`](#hanya-subtombol)**  **[`Subtombol`](#subtombol)**  **[`Tata letak kartu`](#tata-letak-kartu)**  **[`Kondisi`](#kondisi)**  **[`Aksi`](#aksi-ketuk-ketuk-dua-kali-dan-tahan)**  **[`Gaya`](#gaya)**  **[`Templat`](#templat)**  **[`Modul`](#modul)**  **[`Lokalisasi`](#lokalisasi)**  **[`Bantuan`](#bantuan)**  **[`Kontribusi`](#kontribusi)**  **[`Donasi`](#donasi)**

<br>

## Instalasi

**Versi Home Assistant minimum yang didukung:** 2023.9.0

<details>

<summary>Tanpa HACS</summary>

<br>

1. Unduh `bubble-card.zip` dari [rilis terbaru](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Ekstrak ke folder `<config>/www` Anda, Anda seharusnya mendapatkan `bubble-card.js` dan folder `translations` di sebelahnya (folder itu berisi kamus editor, tanpanya editor tetap berbahasa Inggris)
3. Di dashboard Anda, klik ikon di pojok kanan atas lalu klik `Edit dashboard`
4. Klik lagi ikon tersebut lalu klik `Manage resources`
5. Klik `Add resource`
6. Salin dan tempel ini: `/local/bubble-card.js?v=1`
7. Klik `JavaScript Module` lalu `Create`
8. Kembali dan muat ulang halaman Anda
9. Sekarang Anda bisa klik `Add card` di pojok kanan bawah dan cari `Bubble Card`
10. Setelah setiap pembaruan file, Anda harus mengedit `/local/bubble-card.js?v=1` dan mengganti nomor versinya ke angka yang lebih tinggi

Jika tidak berhasil, coba bersihkan cache browser Anda.

</details>

<details>

<summary>Dengan HACS (Direkomendasikan)</summary>

<br>

Metode ini memungkinkan Anda mendapatkan pembaruan langsung dari Home Assistant Community Store

1. Jika HACS belum terpasang, unduh dengan mengikuti petunjuk di [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Lanjutkan ke konfigurasi awal HACS dengan mengikuti petunjuk di [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Di sidebar Anda, buka "HACS"
4. Cari "Bubble Card", atau klik tombol biru di bawah
5. Klik "Download"
6. Kembali ke dashboard Anda dan klik ikon di pojok kanan atas lalu klik `Edit dashboard`
7. Sekarang Anda bisa klik `Add card` di pojok kanan bawah dan cari `Bubble Card`

Jika tidak berhasil, coba bersihkan cache browser/aplikasi Anda (di semua perangkat jika perlu).

#### Video

Anda juga bisa melihat kanal YouTube saya untuk video langkah demi langkah.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfigurasi

Semua opsi dapat dikonfigurasi di editor Home Assistant. Namun Anda bisa menemukan detail lebih lanjut dan YAML-nya di dokumentasi di bawah ini.

<details>

<summary><b>Opsi utama (YAML + deskripsi)</b></summary>

| Nama | Tipe | Kebutuhan | Opsi yang didukung | Deskripsi |
| --- | --- | --- | --- | --- |
| `type` | string | **Wajib** | `custom:bubble-card` | Tipe kartu |
| `card_type` | string | **Wajib** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` atau `sub-buttons` | Tipe Bubble Card, lihat di bawah |
| `styles` | object list | Opsional | Stylesheet CSS apa pun | Memungkinkan Anda menyesuaikan CSS Bubble Card Anda, lihat [gaya](#gaya) |

</details>

<details>

<summary><b>Variabel CSS global (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variabel | Nilai yang diharapkan | Deskripsi |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Radius sudut untuk semua elemen yang didukung |
| `--bubble-main-background-color` | `color` | Warna latar belakang utama untuk semua elemen yang didukung |
| `--bubble-secondary-background-color` | `color` | Warna latar belakang sekunder untuk semua elemen yang didukung |
| `--bubble-accent-color` | `color` | Warna aksen untuk semua elemen yang didukung |
| `--bubble-icon-border-radius` | `px` | Radius sudut ikon untuk semua elemen yang didukung |
| `--bubble-icon-background-color` | `color` | Warna latar belakang ikon untuk semua elemen yang didukung |
| `--bubble-sub-button-border-radius` | `px` | Radius sudut untuk semua subtombol |
| `--bubble-sub-button-background-color` | `color` | Warna latar belakang untuk semua subtombol |
| `--bubble-box-shadow` | lihat [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Bayangan kotak untuk semua elemen yang didukung |
| `--bubble-border` | lihat [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Border untuk semua kartu yang didukung |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Tonton [video](https://www.youtube.com/watch?v=0hSQOlBxKKI) ini untuk mempelajari Bubble Card dan kemampuannya.** Kanal YouTube saya masih cukup baru dan berfokus pada tutorial tentang Home Assistant dan Bubble Card. Jangan ragu untuk berlangganan guna membantu meningkatkan visibilitas kanal saya. Terima kasih sebelumnya!

<br>

---

<br>

## Saran entitas

Sejak Home Assistant 2026.6, memilih entitas di pemilih kartu menawarkan beberapa kartu siap pakai kepada Anda, dan Bubble Card menjawab pertanyaan itu dengan resepnya sendiri. Pilih lampu dan Anda ditawari kartu dengan slider kecerahan, ditambah varian suhu warna, varian warna, dan varian saturasi bila lampu Anda mendukungnya. Pilih penutup dan Anda mendapatkan slider posisinya, pilih pemutar media dan Anda juga mendapatkan varian dengan daftar sumbernya, pilih penyedot debu dan Anda mendapatkan tombol mulai, jeda, dan kembali ke dok. Setiap saran adalah konfigurasi Bubble Card biasa yang ditampilkan sebagai pratinjau langsung, jadi Anda bisa mengambil yang paling mendekati dan terus menyuntingnya seperti biasa.

Apa yang ditawarkan bergantung pada apa yang benar-benar bisa dilakukan entitas Anda: lampu tanpa kanal kecerahan mendapat sakelar alih-alih slider, penutup yang tidak bisa dimiringkan tidak mendapat varian kemiringan, dan entitas iklim mendapat mode praseteknya hanya bila memang ada. Entri klasik menyusul di bawahnya bila memang berlaku: kartu khusus untuk domain tersebut, tombol biasa, dan slider.

> [!TIP]
> Modul dapat menambahkan saran mereka sendiri ke daftar itu, lihat [modul](#modul).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Kartu ini memungkinkan Anda membuat pop-up dengan konten apa pun. Setiap pop-up **tersembunyi secara default** dan dapat dibuka dengan menargetkan tautannya (misalnya `'#pop-up-name'`), dengan kartu apa pun yang mendukung [aksi](#aksi-ketuk-ketuk-dua-kali-dan-tahan) `navigate`, atau dengan [tumpukan tombol horizontal](#tumpukan-tombol-horizontal) yang disertakan.

> [!TIP]
> ### Pemicu pop-up 
> Fitur ini memungkinkan Anda membuka pop-up berdasarkan status entitas apa pun, misalnya Anda bisa membuka pop-up "Security" dengan kamera saat ada orang di depan rumah Anda. Anda juga bisa membuat helper toggle (input_boolean) dan memicu pembukaan/penutupannya dalam sebuah otomasi.
> <details>
> <summary>Membuka pop-up saat <code>binary_sensor</code> berstatus <code>on</code></summary>
> <br>
>
> ```yaml
> type: custom:bubble-card
> card_type: pop-up
> hash: '#kitchen'
> name: Security
> icon: mdi:video
> trigger_entity: binary_sensor.front_door_motion
> trigger_state: 'on'
> trigger_close: true
> ```
> 
> </details>
>
> ### Berbagai cara menutup pop-up 
> Ada banyak cara untuk menutup pop-up. Misalnya, Anda bisa menggeser dari header pop-up ke bawah, dengan melakukan geseran panjang di dalam pop-up ke bawah, dengan menekan Escape di desktop, dengan menghapus hash di URL, atau cukup dengan menekan tombol tutup.
>


### Opsi pop-up

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Nama | Tipe | Kebutuhan | Opsi yang didukung | Deskripsi |
| --- | --- | --- | --- | --- |
| `hash` | string | **Wajib** | Hash unik apa pun (misalnya `'#kitchen'`) dengan ' ' | Cara Anda membuka pop-up Anda |
| `popup_style` | string | Opsional | `bubble` (default) atau `classic` | Menentukan gaya visual pop-up |
| `popup_mode` | string | Opsional | `default` (default), `fit-content`, `centered` atau `adaptive-dialog` | Menentukan mode tata letak pop-up |
| `with_bottom_offset` | boolean | Opsional | `true` atau `false` (default) | Hanya digunakan dengan `popup_mode: fit-content` atau `adaptive-dialog`. Menerapkan offset bawah pada mobile, berguna jika dashboard Anda menyertakan kartu footer. |
| `full_width_on_mobile` | boolean | Opsional | `true` atau `false` (default) | Hanya digunakan dengan `popup_mode: centered`. Memperluas pop-up ke lebar layar penuh pada mobile, berguna pada layar yang lebih kecil. |
| `performance_mode` | string | Opsional | `default` (default) atau `performance` | Mengoptimalkan animasi pembukaan pop-up. `performance` sedikit menunda rendering konten dan blur latar belakang, serta menonaktifkan blur backdrop jika disetel. |
| `auto_close` | string | Opsional | Batas waktu dalam milidetik (misalnya `10000` untuk 10 detik) | Menutup pop-up secara otomatis setelah batas waktu |
| `close_on_click` | boolean | Opsional | `true` atau `false` (default) | Menutup pop-up secara otomatis setelah interaksi apa pun |
| `close_by_clicking_outside` | boolean | Opsional | `true` (default) atau `false` | Menutup pop-up dengan mengklik di luar area pop-up |
| `width_desktop` | string | Opsional | Nilai CSS apa pun | Lebar pada desktop (`100%` secara default pada mobile) |
| `margin` | string | Opsional | Nilai CSS apa pun | Gunakan ini **hanya** jika pop-up Anda tidak tercentang dengan baik di mobile (misalnya `13px`) |
| `margin_top_mobile` | string | Opsional | Nilai CSS apa pun | Margin atas pada mobile (misalnya `-56px` jika header Anda tersembunyi) |
| `margin_top_desktop` | string | Opsional | Nilai CSS apa pun | Margin atas pada desktop (misalnya `50vh` untuk pop-up setengah ukuran atau `calc(100vh - 400px)` untuk tinggi tetap `400px`) |
| `bg_color` | string | Opsional | Nilai hex, rgb atau rgba apa pun | Warna latar belakang pop-up Anda (misalnya `#ffffff` untuk latar belakang putih) |
| `bg_opacity` | string | Opsional | Nilai apa pun dari `0` sampai `100` | Opasitas latar belakang pop-up Anda (misalnya `100` untuk tanpa transparansi) |
| `bg_blur` | string | Opsional | Nilai apa pun dari `0` sampai `100` | Efek blur latar belakang pop-up Anda, **ini hanya berfungsi jika `bg_opacity` tidak disetel ke `100`** (misalnya `0` untuk tanpa blur)|
| `shadow_opacity` | string | Opsional | Nilai apa pun dari `0` sampai `100` | Opasitas bayangan pop-up Anda (misalnya `0` untuk menyembunyikannya) |
| `hide_backdrop` | boolean | Opsional | `true` atau `false` (default) | Setel ini ke true pada pop-up pertama di dashboard utama Anda untuk menonaktifkan backdrop pada semua pop-up. |
| `background_update` | boolean | Opsional | `true` atau `false` (default) | Memperbarui konten pop-up di latar belakang (tidak disarankan) |
| `trigger` | object atau list | Opsional | Lihat [kondisi](#kondisi) | Membuka pop-up ini saat kondisi terpenuhi |
| `trigger_entity` | string | Opsional | Entitas apa pun | Membuka pop-up ini berdasarkan status entitas apa pun, bentuk sederhana dari `trigger` |
| `trigger_state` | string | Opsional (**Wajib** jika `trigger_entity` ditentukan) | Status entitas apa pun | Status entitas untuk membuka pop-up |
| `trigger_close` | boolean | Opsional | `true` atau `false` | Menutup pop-up saat kondisi tidak lagi terpenuhi (default: `true` dengan `trigger`, `false` dengan `trigger_state`) |
| `open_action` | object | Opsional | Lihat [aksi](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Memicu sebuah aksi saat pop-up terbuka |
| `close_action` | object | Opsional | Lihat [aksi](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Memicu sebuah aksi saat pop-up tertutup |
| `show_header` | boolean | Opsional | `true` (default) atau `false` | Menampilkan/menyembunyikan header pop-up sepenuhnya |
| `show_previous_button` | boolean | Opsional | `true` atau `false` (default) | Menampilkan tombol sebelumnya di sebelah tombol tutup dan kembali ke pop-up sebelumnya jika tersedia |
| `show_close_button` | boolean | Opsional | `true` (default) atau `false` | Menampilkan atau menyembunyikan tombol tutup sambil tetap menampilkan sisa header |
| `buttons_position` | string | Opsional | `right` (default) atau `left` | Posisi tombol tutup dan sebelumnya di header |
| `cards` | list | Opsional | Bubble Card, kartu Home Assistant atau kartu kustom apa pun | Menentukan konten pop-up Anda. Lihat contoh pop-up di bawah ini. |
| Anda juga memiliki akses ke [semua pengaturan tombol](#tombol) untuk header pop-up. | | Opsional | | Jika tidak ditentukan, tidak ada header yang akan ditampilkan |

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variabel | Nilai yang diharapkan | Deskripsi |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Radius sudut untuk pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Warna latar belakang utama untuk elemen pop-up yang didukung |
| `--bubble-pop-up-background-color` | `color` | Warna latar belakang pop-up |
| `--bubble-backdrop-background-color` | `color` | Warna latar belakang untuk backdrop |
| Anda juga memiliki akses ke [semua variabel CSS tombol](#opsi-tombol) untuk header pop-up. | | |

</details>


### Format pop-up mandiri (v3.2.0+)

Sejak v3.2.0, pop-up menggunakan format mandiri baru di mana kartu konten ditentukan langsung di dalam pop-up menggunakan opsi `cards`. Ini memberikan performa yang lebih baik dan pengalaman pengeditan drag-and-drop berbasis section yang baru.


#### Contoh

<details>

<summary>Sebuah pop-up (format mandiri)</summary>

<br>

```yaml
type: custom:bubble-card
card_type: pop-up
hash: '#kitchen'
name: Kitchen
icon: mdi:fridge
entity: light.kitchen
cards:
  - type: custom:bubble-card
    card_type: button
    entity: light.kitchen
  # More cards...
```

</details>
<details>

<summary>Sebuah tombol untuk membuka pop-up</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: name
name: Kitchen
icon: mdi:fridge
button_action:
  tap_action:
    action: navigate
    navigation_path: '#kitchen'
```

</details>

<br>

---

<br>

## Tumpukan tombol horizontal

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Kartu ini adalah pendamping yang baik untuk kartu pop-up, memungkinkan Anda membuka pop-up yang sesuai. Kartu ini juga memungkinkan Anda membuka halaman apa pun di dashboard Anda. Selain itu, Anda dapat menambahkan sensor gerak/hunian Anda sehingga urutan tombol menyesuaikan dengan ruangan yang baru saja Anda masuki. Kartu ini dapat digulir, tetap terlihat, dan berfungsi sebagai footer.

> [!IMPORTANT]  
> Kartu ini harus menjadi yang terakhir di tampilan Anda (setelah semua kartu dan pop-up). Kartu ini tidak boleh berada di dalam stack mana pun.

### Opsi tumpukan tombol horizontal

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Nama | Tipe | Kebutuhan | Opsi yang didukung | Deskripsi |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Wajib** | Hash pop-up (misalnya `'#kitchen'`) dengan ' ' atau tautan apa pun | Tautan untuk dibuka |
| `1_name` | string | Opsional | String apa pun | Nama untuk tombol Anda |
| `1_icon` | string | Opsional | Ikon `mdi:` apa pun | Ikon untuk tombol Anda |
| `1_entity` | string | Opsional | Lampu atau grup lampu apa pun | Menampilkan warna lampu tersebut di latar belakang |
| `1_pir_sensor` | string | Opsional | Sensor biner apa pun | Setidaknya satu sensor pir atau lebih untuk `auto_order`, sebenarnya ini juga berfungsi dengan tipe entitas apa pun, misalnya Anda bisa menambahkan grup lampu dan urutannya akan berubah berdasarkan status yang terakhir diubah. |
| `auto_order` | boolean | Opsional | `true` atau `false` (default) | Mengubah urutan tombol berdasarkan waktu terakhir diubah dari `_pir_sensor`, **ini harus `false` jika Anda tidak memiliki `_pir_sensor` apa pun di kode Anda** |
| `margin` | string | Opsional | Nilai CSS apa pun | Gunakan ini **hanya** jika `horizontal-buttons-stack` Anda tidak tercentang dengan baik di mobile (misalnya `13px`) |
| `width_desktop` | string | Opsional | Nilai CSS apa pun | Lebar pada desktop (`100%` secara default pada mobile) |
| `is_sidebar_hidden` | boolean | Opsional | `true` atau `false` (default) | Memperbaiki posisi tumpukan tombol horizontal jika sidebar disembunyikan di desktop (hanya jika Anda telah melakukan modifikasi untuk menyembunyikannya sendiri) |
| `rise_animation` | boolean | Opsional | `true` (default) atau `false` | Setel ini ke `false` untuk menonaktifkan animasi yang aktif setelah halaman dimuat |
| `highlight_current_view` | boolean | Opsional | `true` atau `false` (default) | Menyorot hash / tampilan saat ini dengan animasi yang halus |
| `hide_gradient` | boolean | Opsional | `true` atau `false` (default) | Setel ini ke `false` untuk menyembunyikan gradien |

> [!IMPORTANT]  
> Variabel yang dimulai dengan angka menentukan tombol Anda, cukup ubah angka ini untuk menambahkan lebih banyak tombol (lihat contoh di bawah).

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variabel | Nilai yang diharapkan | Deskripsi |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Radius sudut untuk tombol tumpukan tombol horizontal |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Warna latar belakang untuk tombol tumpukan tombol horizontal |

</details>


#### Contoh

<details>

<summary>Sebuah tumpukan tombol horizontal yang mengatur ulang dirinya sendiri berdasarkan sensor hunian</summary>

<br>

```yaml
type: custom:bubble-card
card_type: horizontal-buttons-stack
auto_order: true
1_name: Living room
1_icon: mdi:sofa
1_link: '#living-room'
1_entity: light.living_room
1_pir_sensor: binary_sensor.living_room_motion
2_name: Kitchen
2_icon: mdi:fridge
2_link: '#kitchen'
2_entity: light.kitchen
2_pir_sensor: binary_sensor.kitchen_motion
3_name: Dining room
3_icon: mdi:silverware-fork-knife
3_link: '#dining-room'
3_entity: light.dining_room
3_pir_sensor: binary_sensor.dining_room_motion
```

</details>

<br>

---

<br>

## Tombol

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Kartu ini sangat serbaguna. Kartu ini bisa digunakan sebagai **switch**, **slider**, **state**, atau tombol **nama/teks**.

> [!TIP]
> ### Apa perbedaan antara semua tipe tombol?
>
> - **Switch button:** Ini adalah tipe tombol bawaan. Secara default, tombol ini mengaktifkan/menonaktifkan sebuah entitas dan warna latarnya berubah berdasarkan state entitas atau warna lampu. Anda bisa mengubah aksinya di bagian **Tap action on card**.
>
> - **Slider button:** Tipe tombol ini memungkinkan Anda mengontrol entitas dengan rentang yang bisa disesuaikan. Cocok untuk meredupkan lampu, dan warna isiannya akan menyesuaikan dengan warna lampu. Anda juga bisa menggunakannya untuk menampilkan nilai, seperti level baterai.
>   Entitas yang didukung untuk slider:
>   - Light (kecerahan)
>   - Media player (volume)
>   - Cover (posisi)
>   - Fan (persentase)
>   - Climate (suhu)
>   - Input number dan number (nilai)
>   - Battery sensor (persentase, hanya baca)
>
>   Anda juga bisa menggunakan entitas apa pun dengan state numerik dengan menonaktifkan filter entitas di **Slider settings**, lalu tentukan nilai `min` dan `max`. Opsi ini hanya baca.
>
> - **State button:** Cocok untuk menampilkan informasi dari sensor atau entitas apa pun. Saat ditekan, panel "More info" milik entitas tersebut akan muncul. Warna latarnya tidak berubah.
>
> - **Name/Text button:** Satu-satunya tipe tombol yang tidak memerlukan entitas. Tombol ini memungkinkan Anda menampilkan teks singkat, nama, atau judul. Anda juga bisa menambahkan aksi padanya. Warna latarnya tidak berubah.

### Opsi tombol

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Entitas yang akan dikontrol |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` atau `name` | Perilaku tombol Anda |
| `name` | string | Optional | Any string | Nama untuk tombol Anda, jika tidak ditentukan akan menampilkan nama entitas |
| `icon` | string | Optional | Any `mdi:` icon | Ikon untuk tombol Anda, jika tidak ditentukan akan menampilkan ikon entitas atau `entity-picture` |
| `force_icon` | boolean | Optional | `true` atau `false` (default) | Memberi prioritas pada ikon dibanding `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **Hanya untuk lampu.** Gunakan warna aksen tema, bukan warna lampu.                         |
| `show_state` | boolean | Optional | `true` atau `false` (default) | Menampilkan atau menyembunyikan state `entity` Anda |
| `show_name` | boolean | Optional | `true` (default) atau `false` | Menampilkan atau menyembunyikan nama |
| `show_icon` | boolean | Optional | `true` (default) atau `false` | Menampilkan atau menyembunyikan ikon |
| `show_last_changed` | boolean | Optional | `true` atau `false` (default) | Menampilkan waktu perubahan terakhir `entity` Anda |
| `show_last_updated` | boolean | Optional | `true` atau `false` (default) | Menampilkan waktu pembaruan terakhir `entity` Anda |
| `show_attribute` | boolean | Optional | `true` atau `false` (default) | Menampilkan atribut `entity` Anda di bawah `name`-nya |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribut yang akan ditampilkan (misalnya `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) atau `false` | Memungkinkan teks bergulir saat kontennya melebihi ukuran kontainernya |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` atau `hold_action`, lihat di bawah | Memungkinkan mengubah aksi bawaan saat tombol diklik. |
| `tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon diklik, jika tidak ditentukan, `more-info` akan digunakan |
| `double_tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon diklik dua kali, jika tidak ditentukan, `none` akan digunakan |
| `hold_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon ditahan, jika tidak ditentukan, `more-info` akan digunakan |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Tata letak gaya kartu, lihat [card layouts](#tata-letak-kartu) |
| `rows` | number | Optional | Any number | Jumlah baris (tinggi) (misalnya `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#subtombol) | Menambahkan tombol kustom yang menempel di sebelah kanan |

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Warna latar utama untuk elemen yang didukung di dalam tombol |
| `--bubble-button-border-radius` | `px` | Radius sudut untuk tombol |
| `--bubble-button-icon-border-radius` | `px` | Radius sudut untuk kontainer ikon tombol |
| `--bubble-button-icon-background-color` | `color` | Warna latar untuk kontainer ikon tombol |
| `--bubble-light-white-color` | `color` | Mengganti warna putih bawaan pada tombol/slider lampu |
| `--bubble-light-color` | `color` | Mengganti warna tombol/slider lampu (bahkan lampu RGB) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow untuk tombol |

</details>

Opsi-opsi ini hanya tersedia jika `button_type` diatur ke `slider`.

<details>

<summary><b>Opsi slider (YAML + deskripsi)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Nilai minimum slider. Untuk slider kustom.                                                    |
| `max_value`             | number  | Optional                        | Nilai maksimum slider. Untuk slider kustom.                                                    |
| `step`                  | number  | Optional                        | Nilai langkah (step) slider.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Mengaktifkan perilaku slider sebelumnya di mana Anda mengetuk untuk mengaktifkan slider, bukan menahannya.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Memperbarui nilai relatif terhadap nilai awal, bukan titik sentuh awal.                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Menjadikan slider hanya baca. Otomatis diaktifkan untuk beberapa entitas seperti sensor.                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | State entitas diperbarui saat digeser. **Fitur ini tidak disarankan untuk semua entitas.**        |
| `slider_fill_orientation` | string | Opsional | `left`, `right`, `top` atau `bottom` | Mengubah arah isian slider. Dari kiri ke kanan bila tidak ditentukan, dicerminkan pada [bahasa kanan ke kiri](#lokalisasi) |
| `slider_value_position` | string | Opsional | `right`, `left`, `center` atau `hidden` | Posisi tampilan nilai. Di sisi akhir bila tidak ditentukan, jadi di kiri pada [bahasa kanan ke kiri](#lokalisasi) |
| `invert_slider_value` | boolean | Optional (`false` default) | Membalik arah slider (isian 100% setara dengan minimum). Tidak tersedia untuk slider warna. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Hanya untuk lampu.** Memilih mode slider |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Hanya untuk cover.** Memilih mode slider (posisi atau tilt) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Hanya untuk lampu (mode Hue).** Memaksa saturasi saat menyesuaikan Hue |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Hanya untuk lampu (mode Hue).** Nilai saturasi yang dipaksakan (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Hanya untuk lampu (mode Brightness).** Gunakan warna aksen tema, bukan warna lampu |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Hanya untuk lampu.** Memungkinkan slider mencapai 0%, yang akan mematikan lampu. Tidak tersedia dengan `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Hanya untuk lampu.** Mengaktifkan transisi kecerahan yang halus untuk lampu yang mendukungnya.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Hanya untuk lampu.** Waktu transisi dalam milidetik. Memerlukan `light_transition: true`.            |

</details>

#### Contoh

<details>

<summary>Tombol slider yang bisa mengontrol kecerahan lampu</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: slider
entity: light.kitchen_led
name: Kitchen LED
icon: mdi:led-strip-variant
```

</details>

<details>

<summary>Tombol dengan lebih banyak opsi</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
entity: light.your_light
button_type: switch
show_icon: true
force_icon: true
show_name: true
show_last_changed: true
show_state: true
show_last_updated: true
show_attribute: true
attribute: brightness
scrolling_effect: true
card_layout: large
button_action:
  tap_action:
    action: toggle
tap_action:
  action: more-info
sub_button:
  - entity: light.your_light
    icon: ''
    show_state: false
    show_attribute: true
    attribute: brightness
    show_icon: false
    show_background: false
    show_name: false
```

</details>

<br>

---

<br>

## Pemutar media

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Kartu ini memungkinkan Anda mengontrol entitas media player.

### Opsi pemutar media

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Media player yang akan dikontrol |
| `name` | string | Optional | Any string | Nama untuk media player Anda, jika tidak ditentukan akan menampilkan nama entitas |
| `icon` | string | Optional | Any `mdi:` icon | Ikon untuk media player Anda, jika tidak ditentukan akan menampilkan ikon entitas atau `entity-picture` |
| `force_icon` | boolean | Optional | `true` atau `false` (default) | Memberi prioritas pada ikon dibanding `entity-picture` |
| `show_state` | boolean | Optional | `true` atau `false` (default) | Menampilkan atau menyembunyikan state `entity` Anda |
| `show_name` | boolean | Optional | `true` (default) atau `false` | Menampilkan atau menyembunyikan nama |
| `show_icon` | boolean | Optional | `true` (default) atau `false` | Menampilkan atau menyembunyikan ikon |
| `show_last_changed` | boolean | Optional | `true` atau `false` (default) | Menampilkan waktu perubahan terakhir `entity` Anda |
| `show_last_updated` | boolean | Optional | `true` atau `false` (default) | Menampilkan waktu pembaruan terakhir `entity` Anda |
| `show_attribute` | boolean | Optional | `true` atau `false` (default) | Menampilkan atribut `entity` Anda di bawah `name`-nya |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribut yang akan ditampilkan (misalnya `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) atau `false` | Memungkinkan teks bergulir saat kontennya melebihi ukuran kontainernya |
| `min_volume` | number | Optional | Any number | Nilai minimum slider volume. |
| `max_volume` | number | Optional | Any number | Nilai maksimum slider volume. |
| `cover_background` | boolean | Optional | `true` atau `false` (default) | Menggunakan sampul media yang diburamkan sebagai latar kartu. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` atau `hold_action`, see [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Memungkinkan mengubah aksi bawaan saat tombol diklik. |
| `tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon diklik, jika tidak ditentukan, `more-info` akan digunakan. |
| `double_tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon diklik dua kali, jika tidak ditentukan, `none` akan digunakan. |
| `hold_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon ditahan, jika tidak ditentukan, `more-info` akan digunakan. |
| `main_buttons_position` | string | Optional | `default` atau `bottom` | Memindahkan tombol aksi sampul ke bagian bawah (tetap) |
| `main_buttons_full_width` | boolean | Optional | `true` atau `false` | Membuat tombol aksi bawah selebar penuh (default: `true` saat posisi adalah `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Perataan tombol aksi bawah saat tidak selebar penuh |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Tata letak gaya kartu, lihat [card layouts](#tata-letak-kartu) |
| `rows` | number | Optional | Any number | Jumlah baris (tinggi) (misalnya `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#subtombol) | Menambahkan tombol kustom yang menempel di sebelah kanan |
| `hide` | object | Optional | See below | Menyembunyikan tombol dari kartu |

#### Opsi hide

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` atau `false` (default) | Menyembunyikan tombol play/pause |
| `volume_button` | boolean | Optional | `true` atau `false` (default) | Menyembunyikan tombol volume |
| `previous_button` | boolean | Optional | `true` atau `false` (default) | Menyembunyikan tombol sebelumnya |
| `next_button` | boolean | Optional | `true` atau `false` (default) | Menyembunyikan tombol berikutnya |
| `power_button` | boolean | Optional | `true` atau `false` (default) | Menyembunyikan tombol daya |

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Warna latar utama untuk pemutar media |
| `--bubble-media-player-border-radius` | `px` | Radius sudut untuk pemutar media |
| `--bubble-media-player-buttons-border-radius` | `px` | Radius sudut untuk tombol pemutar media |
| `--bubble-media-player-slider-background-color` | `color` | Warna latar untuk slider volume |
| `--bubble-media-player-icon-border-radius` | `px` | Radius sudut untuk kontainer ikon pemutar media |
| `--bubble-media-player-icon-background-color` | `color` | Warna latar untuk kontainer ikon pemutar media |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow untuk pemutar media |

</details>


#### Contoh

<details>

<summary>Pemutar media dengan semua opsi</summary>

<br>

```yaml
type: custom:bubble-card
card_type: media-player
name: Media player
entity: media_player.your_media_player
show_state: true
show_last_updated: true
show_attribute: true
attribute: assumed_state
card_layout: large
scrolling_effect: false
show_icon: false
force_icon: true
show_name: false
show_last_changed: true
columns: 2
rows: 1
min_volume: 10
max_volume: 80
cover_background: true
tap_action:
  action: toggle
hide:
  play_pause_button: true
  volume_button: true
  previous_button: true
  next_button: true
  power_button: true
sub_button:
  - entity: media_player.salon_2
    icon: mdi:volume-high
    name: Volume level
    tap_action:
      action: more-info
    show_name: false
    show_state: false
    show_last_updated: false
    show_attribute: true
    show_background: false
    attribute: volume_level
```

</details>

<br>

---

<br>

## Penutup

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Kartu ini memungkinkan Anda mengontrol entitas `cover` Anda.

### Opsi penutup

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Cover yang akan dikontrol |
| `name` | string | Optional | Any string | Nama untuk cover Anda, jika tidak ditentukan akan menampilkan nama entitas |
| `force_icon` | boolean | Optional | `true` atau `false` (default) | Memberi prioritas pada ikon dibanding `entity-picture` |
| `show_state` | boolean | Optional | `true` atau `false` (default) | Menampilkan atau menyembunyikan state `entity` Anda |
| `show_name` | boolean | Optional | `true` (default) atau `false` | Menampilkan atau menyembunyikan nama |
| `show_icon` | boolean | Optional | `true` (default) atau `false` | Menampilkan atau menyembunyikan ikon |
| `show_last_changed` | boolean | Optional | `true` atau `false` (default) | Menampilkan waktu perubahan terakhir `entity` Anda |
| `show_last_updated` | boolean | Optional | `true` atau `false` (default) | Menampilkan waktu pembaruan terakhir `entity` Anda |
| `show_attribute` | boolean | Optional | `true` atau `false` (default) | Menampilkan atribut `entity` Anda di bawah `name`-nya |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribut yang akan ditampilkan (misalnya `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) atau `false` | Memungkinkan teks bergulir saat kontennya melebihi ukuran kontainernya |
| `icon_open` | string | Optional | Any `mdi:` icon | Ikon untuk cover terbuka Anda, jika tidak ditentukan akan menampilkan ikon cover terbuka bawaan |
| `icon_close` | string | Optional | Any `mdi:` icon | Ikon untuk cover tertutup Anda, jika tidak ditentukan akan menampilkan ikon cover tertutup bawaan |
| `icon_up` | string | Optional | Any `mdi:` icon | Ikon untuk tombol buka cover Anda, jika tidak ditentukan akan menampilkan ikon cover terbuka bawaan |
| `icon_down` | string | Optional | Any `mdi:` icon | Ikon untuk tombol tutup cover Anda, jika tidak ditentukan akan menampilkan ikon cover tertutup bawaan |
| `open_service` | string | Optional | Any service or script | Layanan untuk membuka cover Anda, default ke `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Layanan untuk menghentikan cover Anda, default ke `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Layanan untuk menutup cover Anda, default ke `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Posisi tombol kontrol tilt (hanya ditampilkan jika cover mendukung tilt) |
| `open_tilt_service` | string | Optional | Any service or script | Layanan untuk membuka tilt, default ke `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Layanan untuk menutup tilt, default ke `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` atau `hold_action`, see [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Memungkinkan mengubah aksi bawaan saat tombol diklik. |
| `tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon diklik, jika tidak ditentukan, `more-info` akan digunakan. |
| `double_tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon diklik dua kali, jika tidak ditentukan, `none` akan digunakan. |
| `hold_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon ditahan, jika tidak ditentukan, `more-info` akan digunakan. |
| `main_buttons_position` | string | Optional | `default` atau `bottom` | Memindahkan kontrol media ke bagian bawah (tetap) |
| `main_buttons_full_width` | boolean | Optional | `true` atau `false` | Membuat kontrol bawah selebar penuh (default: `true` saat posisi adalah `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Perataan kontrol bawah saat tidak selebar penuh |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Tata letak gaya kartu, lihat [card layouts](#tata-letak-kartu) |
| `rows` | number | Optional | Any number | Jumlah baris (tinggi) (misalnya `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#subtombol) | Menambahkan tombol kustom yang menempel di sebelah kanan |

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Warna latar utama untuk elemen yang didukung di kartu cover |
| `--bubble-cover-border-radius` | `px` | Radius sudut untuk kartu cover |
| `--bubble-cover-icon-border-radius` | `px` | Radius sudut untuk kontainer ikon kartu cover |
| `--bubble-cover-icon-background-color` | `color` | Warna latar untuk kontainer ikon kartu cover |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow untuk kartu cover |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow untuk tombol di kartu cover |

</details>


#### Contoh

<details>

<summary>Kartu yang bisa mengontrol roller shade</summary>

<br>

```yaml
type: custom:bubble-card
card_type: cover
entity: cover.kitchen
name: Kitchen
icon_open: mdi:roller-shade
icon_close: mdi:roller-shade-closed
```

</details>

<br>

---

<br>

## Pilih

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Kartu ini memungkinkan Anda menambahkan menu dropdown untuk entitas `input_select` / `select` Anda. Kartu ini juga mendukung subtombol dan semua fitur umum Bubble Card.

> [!TIP]
> Anda juga bisa memiliki subtombol select jika diinginkan, fitur ini tersedia di semua kartu yang mendukung subtombol.

### Opsi pilih

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Entitas yang akan dikontrol |
| `name` | string | Optional | Any string | Nama untuk select Anda, jika tidak ditentukan akan menampilkan nama entitas |
| `icon` | string | Optional | Any `mdi:` icon | Ikon untuk select Anda, jika tidak ditentukan akan menampilkan ikon entitas atau `entity-picture` |
| `force_icon` | boolean | Optional | `true` atau `false` (default) | Memberi prioritas pada ikon dibanding `entity-picture` |
| `show_state` | boolean | Optional | `true` atau `false` (default) | Menampilkan atau menyembunyikan state `entity` Anda |
| `show_name` | boolean | Optional | `true` (default) atau `false` | Menampilkan atau menyembunyikan nama |
| `show_icon` | boolean | Optional | `true` (default) atau `false` | Menampilkan atau menyembunyikan ikon |
| `show_last_changed` | boolean | Optional | `true` atau `false` (default) | Menampilkan waktu perubahan terakhir `entity` Anda |
| `show_last_updated` | boolean | Optional | `true` atau `false` (default) | Menampilkan waktu pembaruan terakhir `entity` Anda |
| `show_attribute` | boolean | Optional | `true` atau `false` (default) | Menampilkan atribut `entity` Anda di bawah `name`-nya |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Atribut yang akan ditampilkan (misalnya `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) atau `false` | Memungkinkan teks bergulir saat kontennya melebihi ukuran kontainernya |
| `tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon diklik, jika tidak ditentukan, `more-info` akan digunakan. |
| `double_tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon diklik dua kali, jika tidak ditentukan, `none` akan digunakan. |
| `hold_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon ditahan, jika tidak ditentukan, `more-info` akan digunakan. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Tata letak gaya kartu, lihat [card layouts](#tata-letak-kartu) |
| `rows` | number | Optional | Any number | Jumlah baris (tinggi) (misalnya `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#subtombol) | Menambahkan tombol kustom yang menempel di sebelah kanan |

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Warna latar utama untuk elemen yang didukung di kartu select |
| `--bubble-select-background-color` | `color` | Warna latar untuk kartu select |
| `--bubble-select-list-border-radius` | `px` | Radius sudut untuk menu dropdown di kartu |
| `--bubble-select-list-item-accent-color` | `color` | Warna aksen untuk item yang dipilih |
| `--bubble-select-list-background-color` | `color` | Warna latar untuk menu dropdown di kartu |
| `--bubble-select-list-width` | `px` | Lebar menu dropdown di kartu |
| `--bubble-select-arrow-background-color` | `color` | Warna latar untuk panah dropdown |
| `--bubble-select-button-border-radius` | `px` | Radius sudut untuk tombol select |
| `--bubble-select-border-radius` | `px` | Radius sudut untuk kartu select |
| `--bubble-select-icon-border-radius` | `px` | Radius sudut untuk kontainer ikon kartu select |
| `--bubble-select-icon-background-color` | `color` | Warna latar untuk kontainer ikon kartu select |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow untuk kartu select |

</details>


#### Contoh

<details>

<summary>Kartu select dengan daftar scene</summary>

<br>

```yaml
type: custom:bubble-card
card_type: select
name: Scene
entity: input_select.scenes
icon: mdi:brightness-4
show_state: true
```

</details>

<br>

---

<br>

## Iklim

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Kartu ini memungkinkan Anda mengontrol entitas `climate` Anda.

> [!TIP]
> Menu pemilihan mode adalah [subtombol](#subtombol) yang ditambahkan secara otomatis saat kartu dibuat. Anda kemudian bisa mengubah atau menghapusnya sesuai keinginan.

### Opsi iklim

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Entitas yang akan dikontrol (misalnya `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Nama kustom untuk kartu. Jika tidak ditentukan, akan menampilkan nama entitas.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Ikon kustom untuk kartu. Jika tidak ditentukan, ikon entitas atau `entity-picture` akan digunakan.                   |
| `force_icon`            | boolean | Optional                            | `true` atau `false` (default)                     | Memberi prioritas pada ikon dibanding `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` atau `false` (default)                     | Menampilkan atau menyembunyikan state terkini dari `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) atau `false`                     | Menampilkan atau menyembunyikan nama entitas.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) atau `false`                     | Menampilkan atau menyembunyikan ikon.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` atau `false` (default) | Menyembunyikan kontrol suhu target rendah jika didukung oleh `entity`.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` atau `false` (default) | Menyembunyikan kontrol suhu target tinggi jika didukung oleh `entity`.                                         |
| `state_color`           | boolean | Optional                            | `true` atau `false` (default)                     | Menerapkan warna latar konstan saat entitas climate dalam keadaan ON.                                              |
| `step` | number | Optional | Any number | Langkah suhu. |
| `min_temp` | number | Optional | Any number | Suhu minimum. |
| `max_temp` | number | Optional | Any number | Suhu maksimum. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` atau `hold_action`, see [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Memungkinkan mengubah aksi bawaan saat tombol diklik. |
| `tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon diklik, jika tidak ditentukan, `more-info` akan digunakan. |
| `double_tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon diklik dua kali, jika tidak ditentukan, `none` akan digunakan. |
| `hold_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat ikon ditahan, jika tidak ditentukan, `more-info` akan digunakan. |                              |
| `main_buttons_position` | string | Optional | `default` atau `bottom` | Memindahkan tombol aksi climate ke bagian bawah (tetap) |
| `main_buttons_full_width` | boolean | Optional | `true` atau `false` | Membuat tombol aksi bawah selebar penuh (default: `true` saat posisi adalah `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Perataan tombol aksi bawah saat tidak selebar penuh |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Tata letak gaya kartu, lihat [card layouts](#tata-letak-kartu) |
| `rows` | number | Optional | Any number | Jumlah baris (tinggi) (misalnya `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#subtombol)                | Menambahkan tombol kustom yang menempel di sebelah kanan. Berguna untuk menu pemilihan mode climate.                                  |

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Warna latar utama untuk elemen yang didukung di kartu climate |
| `--bubble-climate-border-radius` | `px` | Radius sudut untuk elemen yang didukung di kartu climate |
| `--bubble-climate-button-background-color` | `color` | Warna latar untuk tombol kartu climate |
| `--bubble-climate-icon-border-radius` | `px` | Radius sudut untuk kontainer ikon kartu climate |
| `--bubble-state-climate-fan-only-color` | `color` | Warna overlay untuk state fan-only |
| `--bubble-state-climate-dry-color` | `color` | Warna overlay untuk state dry |
| `--bubble-state-climate-cool-color` | `color` | Warna overlay untuk state cool |
| `--bubble-state-climate-heat-color` | `color` | Warna overlay untuk state heat |
| `--bubble-state-climate-auto-color` | `color` | Warna overlay untuk state auto |
| `--bubble-state-climate-heat-cool-color` | `color` | Warna overlay untuk state heat-cool |
| `--bubble-climate-accent-color` | `color` | Warna aksen untuk kartu climate |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow untuk kontainer climate. |

</details>


#### Contoh

<details>

<summary>Kartu climate dengan menu dropdown mode HVAC</summary>

<br>

```yaml
type: custom:bubble-card
card_type: climate
entity: climate.test_climate
sub_button:
  - name: HVAC modes menu
    select_attribute: hvac_modes
    show_arrow: false
    state_background: false
```

</details>

<br>

---

<br>

## Kalender

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Kartu ini memungkinkan Anda menampilkan entitas kalender Anda. Kontennya bisa digulir, jadi Anda bisa dengan mudah menelusuri acara mendatang.

### Opsi kalender

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Jumlah hari kalender untuk mengambil acara, dari sekarang hingga akhir hari ke-N (default: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Entitas yang akan dikontrol (misalnya `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Entitas kalender yang akan ditampilkan                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Warna kustom untuk chip kalender. Jika tidak ditentukan, warna otomatis akan dipilih |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Jumlah hari kalender untuk mengambil acara, dari sekarang hingga akhir hari ke-N (default: 7) |
| `limit`             | number  | Optional     | A number                                        | Jumlah acara yang akan ditampilkan di kartu                                  |
| `show_end`          | boolean | Optional     | `true` atau `false` (default)                     | Menampilkan atau menyembunyikan waktu selesai acara                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) atau `false`                     | Menampilkan atau menyembunyikan bilah progres acara                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) atau `false`                     | Menampilkan atau menyembunyikan acara yang sedang berlangsung. Acara multihari dinilai satu hari demi satu hari, jadi hanya hari yang sedang berjalan yang disembunyikan dan hari-hari berikutnya tetap terlihat |
| `scrolling_effect`  | boolean | Optional | `true` (default) atau `false` | Memungkinkan teks bergulir saat kontennya melebihi ukuran kontainernya |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` atau `hold_action`, see [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Memungkinkan menambahkan aksi saat acara diklik. |
| `tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat hari diklik, jika tidak ditentukan, `none` akan digunakan. |
| `double_tap_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat hari diklik dua kali, jika tidak ditentukan, `none` akan digunakan. |
| `hold_action` | object | Optional | See [actions](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Menentukan jenis aksi saat hari ditahan, jika tidak ditentukan, `none` akan digunakan. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Tata letak gaya kartu, lihat [card layouts](#tata-letak-kartu) |
| `rows` | number | Optional | Any number | Jumlah baris (tinggi) (misalnya `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#subtombol) | Menambahkan tombol kustom yang menempel di sebelah kanan |

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ------------------------------------------ | -------------- | ---------------------------------------------------------------------- |
| `--bubble-calendar-main-background-color` | `color`        | Warna latar utama untuk elemen yang didukung di kartu kalender  |
| `--bubble-calendar-border-radius`         | `px`           | Radius sudut untuk elemen yang didukung di kartu kalender |
| `--bubble-calendar-height`                | `px`           | Tinggi untuk kartu kalender                                        |

</details>

#### Contoh

<details>

<summary>Kartu kalender dengan jumlah acara terbatas</summary>

<br>

```yaml
type: custom:bubble-card
card_type: calendar
entities:
  - entity: calendar.main_calendar
    color: '#ffb010'
limit: 1
```

</details>

<details>

<summary>Kartu kalender dengan waktu selesai dan bilah progres</summary>

<br>

```yaml
type: custom:bubble-card
card_type: calendar
entities:
  - entity: calendar.main_calendar
    color: '#ffb010'
show_end: true
show_progress: true
```

</details>

<br>

---

<br>


## Pemisah

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Kartu ini adalah pemisah sederhana untuk membagi pop-up Anda menjadi kategori/bagian, misalnya Lampu, Perangkat, Penutup, Pengaturan, Otomasi...

### Opsi pemisah

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Nama | Tipe | Persyaratan | Opsi yang didukung | Deskripsi |
| --- | --- | --- | --- | --- |
| `name` | string | Opsional tapi disarankan | String apa pun | Nama untuk pemisah Anda |
| `icon` | string | Opsional tapi disarankan | Ikon `mdi:` apa pun | Ikon untuk pemisah Anda |
| `card_layout` | string | Opsional | `normal` (default jika tidak dalam tampilan section), `large` (default jika dalam tampilan section), `large-2-rows`, `large-sub-buttons-grid` | Tata letak gaya kartu, lihat [tata letak kartu](#tata-letak-kartu) |
| `rows` | number | Opsional | Angka apa pun | Jumlah baris (tinggi) (misalnya `2`) |
| `sub_button` | object | Opsional | Lihat [subtombol](#subtombol) | Tambahkan tombol kustom yang tetap di kanan |

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variabel | Nilai yang diharapkan | Deskripsi |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Warna latar belakang untuk garis pada pemisah |

</details>

#### Contoh

<details>

<summary>Pemisah/divider untuk bagian "Penutup"</summary>

<br>

```yaml
type: custom:bubble-card
card_type: separator
name: Covers
icon: mdi:window-shutter
```

</details>

<br>

---

<br>

## Kolom kosong

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Kartu ini digunakan untuk mengisi kolom kosong. Ini berguna jika Anda memiliki `horizontal-stack` di pop-up Anda dengan hanya satu kartu. Lihat sudut kanan bawah tangkapan layar ini untuk (tidak) melihatnya.

### Opsi kolom kosong

Kartu ini tidak memiliki opsi dan tidak mendukung [gaya](#gaya), meskipun mendukung opsi tata letak untuk section HA.

#### Contoh

<details>

<summary>Kolom kosong dalam sebuah horizontal stack</summary>

<br>

```yaml
type: horizontal-stack
cards:
  - type: custom:bubble-card
    card_type: button
    ...
  - type: custom:bubble-card
    card_type: empty-column
```

</details>

<br>

---

<br>

## Hanya subtombol

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Kartu ini dikhususkan untuk subtombol saja. Kartu ini cocok untuk menu, aksi cepat, chip informasi, atau footer tetap di bagian bawah halaman.

> [!IMPORTANT]  
> Kartu ini menggunakan skema subtombol yang baru. Gunakan `sub_button.bottom` untuk mendefinisikan tombol Anda. Bagian `sub_button.main` diabaikan.

### Opsi hanya subtombol

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Nama | Tipe | Persyaratan | Opsi yang didukung | Deskripsi |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Wajib** | Lihat [subtombol](#subtombol) | Definisikan subtombol Anda menggunakan bagian `bottom` |
| `hide_main_background` | boolean | Opsional | `true` atau `false` (default) | Hilangkan latar belakang kartu |
| `footer_mode` | boolean | Opsional | `true` atau `false` (default) | Tetapkan kartu di bagian bawah halaman |
| `footer_full_width` | boolean | Opsional | `true` atau `false` (default) | Buat footer selebar penuh (100%) |
| `footer_width` | number | Opsional | Angka apa pun | Lebar footer dalam piksel saat `footer_full_width` adalah `false` |
| `footer_bottom_offset` | number | Opsional | Angka apa pun | Jarak dari bagian bawah halaman dalam piksel (default: `16`) |
| `card_layout` | string | Opsional | `normal` (default jika tidak dalam tampilan section), `large` (default jika dalam tampilan section), `large-2-rows`, `large-sub-buttons-grid` | Tata letak gaya kartu, lihat [tata letak kartu](#tata-letak-kartu) |
| `rows` | number | Opsional | Angka apa pun | Jumlah baris (tinggi) (misalnya `2`) |

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variabel | Nilai yang diharapkan | Deskripsi |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Lebar footer saat `footer_full_width` adalah `false` |
| `--bubble-footer-bottom` | `px` | Offset bawah footer |
| `--bubble-footer-box-shadow` | lihat [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Box shadow untuk kontainer footer |

</details>

#### Contoh

<details>

<summary>Gaya chip (seperti pada tangkapan layar)</summary>

<br>

```yaml
type: custom:bubble-card
card_type: sub-buttons
hide_main_background: true
sub_button:
  main: []
  bottom:
    - name: Chips
      buttons_layout: inline
      group:
        - entity: person.quentin
          show_name: true
          fill_width: false
        - entity: sensor.geraldine_presence
          show_name: true
          fill_width: false
        - entity: input_boolean.alarme
          fill_width: false
          name: Alarm
          show_name: true
          tap_action:
            action: toggle
        - entity: sensor.salle_de_bain_temperature
          fill_width: false
          show_state: true
          state_background: false
        - entity: input_select.test
          fill_width: false
          sub_button_type: select
          name: Scene
          icon: mdi:weather-sunny
          show_state: true
      justify_content: center
rows: 0.941
```

</details>

<details>

<summary>Menu footer tetap</summary>

<br>

```yaml
type: custom:bubble-card
card_type: sub-buttons
footer_mode: true
footer_full_width: true
sub_button:
  bottom:
    - name: Home
      icon: mdi:home
      tap_action:
        action: navigate
        navigation_path: '#home'
    - name: Lights
      icon: mdi:lightbulb
      tap_action:
        action: navigate
        navigation_path: '#lights'
    - name: Settings
      icon: mdi:cog
      tap_action:
        action: navigate
        navigation_path: '#config'
rows: 0.941
```

</details>

<br>

---

<br>

## Subtombol

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Di setiap kartu yang mendukung opsi ini, Anda dapat menambahkan subtombol untuk menyesuaikan kartu Anda lebih jauh lagi. Anda dapat, misalnya, membuat tombol yang bisa mengontrol vacuum, kartu cuaca, atau hampir apa pun yang bisa Anda pikirkan. Subtombol ini mendukung aksi ketuk dan sebagian besar opsi tombol.

Subtombol kini mendukung tiga tipe: **Default (tombol)**, **Slider**, dan **Dropdown / Select**. Anda dapat mencampur tipe dalam kartu yang sama, menempatkan subtombol di atas atau bawah, dan mengorganisasikannya ke dalam grup untuk tata letak yang lebih lanjut.

#### Penempatan dan grup subtombol

<details>

<summary><b>Struktur subtombol (main / bottom + grup)</b></summary>

<br>

```yaml
sub_button:
  main:
    - group:
        - entity: sensor.temperature
          show_state: true
          show_background: false
        - entity: sensor.humidity
          show_state: true
          show_background: false
      buttons_layout: column
  bottom:
    - group:
        - entity: light.living_room
        - entity: light.bedroom
      buttons_layout: inline
      justify_content: center
  main_layout: inline
  bottom_layout: rows
```

**Catatan:**
- `main` dan `bottom` adalah dua bagian independen. Subtombol bottom tetap berada di bagian bawah kartu.
- `main_layout` dan `bottom_layout` menerima `inline` (default) atau `rows` untuk menumpuk grup secara vertikal.
- Grup adalah objek dengan array `group` dan `buttons_layout` opsional (`inline` atau `column`).
- `justify_content` hanya tersedia untuk **grup bottom** (`start`, `center`, `end`, `fill`).
- Ketika subtombol bottom ada, tata letak kartu otomatis beralih ke `large` kecuali Anda secara eksplisit mengatur tata letak lain.
- Array `sub_button` lama tetap didukung dan diperlakukan sebagai bagian `main`.

</details>

### Opsi subtombol

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Nama | Tipe | Persyaratan | Opsi yang didukung | Deskripsi |
| --- | --- | --- | --- | --- |
| `entity` | string | Opsional | Entitas apa pun | Entitas untuk dikontrol |
| `name` | string | Opsional | String apa pun | Nama untuk subtombol Anda, jika tidak ditentukan akan menampilkan nama entitas |
| `icon` | string | Opsional | Ikon `mdi:` apa pun | Ikon untuk subtombol Anda, jika tidak ditentukan akan menampilkan ikon entitas atau gambar entitas |
| `force_icon` | boolean | Opsional | `true` atau `false` (default) | Paksa ikon meskipun gambar entitas tersedia |
| `sub_button_type` | string | Opsional | `default`, `slider` atau `select` | Pilih tipe subtombol |
| `show_background` | boolean | Opsional | `true` (default) atau `false` | Tampilkan latar belakang untuk subtombol Anda, warnanya akan berubah berdasarkan status entitas Anda |
| `state_background` | boolean | Opsional | `true` (default) atau `false` | Gunakan warna status ketika entitas dalam kondisi `on` |
| `light_background` | boolean | Opsional | `true` (default) atau `false` | Gunakan warna lampu untuk latar belakang jika tersedia |
| `show_state` | boolean | Opsional | `true` atau `false` (default) | Tampilkan atau sembunyikan status `entity` Anda |
| `show_name` | boolean | Opsional | `true` atau `false` (default) | Tampilkan atau sembunyikan nama |
| `show_icon` | boolean | Opsional | `true` (default) atau `false` | Tampilkan atau sembunyikan ikon |
| `show_last_changed` | boolean | Opsional | `true` atau `false` (default) | Tampilkan waktu perubahan terakhir `entity` Anda |
| `show_last_updated` | boolean | Opsional | `true` atau `false` (default) | Tampilkan waktu pembaruan terakhir `entity` Anda |
| `show_attribute` | boolean | Opsional | `true` atau `false` (default) | Tampilkan atribut `entity` Anda di bawah `name`-nya |
| `attribute` | string | Opsional (wajib jika `show_attribute` diatur ke `true`) | Atribut dari `entity` Anda | Atribut yang akan ditampilkan (misalnya `brightness`) |
| `select_attribute` | string | Opsional | Daftar atribut dari `entity` Anda (lihat opsi yang didukung di atas) | Daftar atribut ini akan membuka dropdown jika diklik (misalnya `effect_list`) |
| `show_arrow` | boolean | Opsional | `true` (default) atau `false` | Tampilkan atau sembunyikan panah dropdown untuk subtombol select |
| `scrolling_effect` | boolean | Opsional | `true` (default) atau `false` | Izinkan teks bergulir ketika konten melebihi ukuran kontainer |
| `tap_action` | object | Opsional | Lihat [aksi](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Definisikan tipe aksi saat subtombol diklik, jika tidak ditentukan, `more-info` akan digunakan. |
| `double_tap_action` | object | Opsional | Lihat [aksi](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Definisikan tipe aksi saat subtombol diklik dua kali, jika tidak ditentukan, `none` akan digunakan. |
| `hold_action` | object | Opsional | Lihat [aksi](#aksi-ketuk-ketuk-dua-kali-dan-tahan) | Definisikan tipe aksi saat subtombol ditahan, jika tidak ditentukan, `more-info` akan digunakan. |
| `fill_width` | boolean | Opsional | `true` atau `false` | Isi lebar yang tersedia (default: `false` untuk main, `true` untuk bottom) |
| `width` | number atau string | Opsional | Angka apa pun atau panjang CSS | Lebar kustom (`px` untuk bagian main, `%` untuk bagian bottom secara default) |
| `custom_height` | number | Opsional | Angka apa pun | Tinggi kustom dalam piksel |
| `content_layout` | string | Opsional | `icon-left` (default), `icon-top`, `icon-bottom`, `icon-right` | Penempatan ikon di dalam subtombol |
| `always_visible` | boolean | Opsional | `true` atau `false` (default) | **Hanya slider.** Selalu tampilkan slider alih-alih membukanya saat diketuk |
| `show_button_info` | boolean | Opsional | `true` atau `false` (default) | **Hanya slider.** Tampilkan ikon/nama/status saat `always_visible` diaktifkan |
| `visibility` | object atau list | Opsional | Lihat [kondisi](#kondisi) | Tampilkan atau sembunyikan subtombol berdasarkan kondisi |
| `hide_when_parent_unavailable` | boolean | Opsional | `true` atau `false` (default) | Sembunyikan subtombol jika entitas kartu induk tidak tersedia |
| `css_class` | string | Opsional | Sembarang string | Kelas CSS tambahan pada subtombol, untuk menargetkannya di [gaya](#gaya) Anda apa pun namanya (misalnya `My value` menghasilkan `.my-value`) |

</details>

<details>

<summary><b>Opsi subtombol slider (sama seperti slider tombol)</b></summary>

<br>

Subtombol slider mendukung opsi slider yang sama seperti slider tombol, termasuk:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Variabel CSS (lihat <a href="#gaya">Gaya</a>)</b></summary>

| Variabel | Nilai yang diharapkan | Deskripsi |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Radius sudut untuk subtombol |
| `--bubble-sub-button-background-color` | `color` | Warna latar belakang untuk subtombol |
| `--bubble-sub-button-outline` | `box-shadow` | Garis luar yang ditambahkan ke subtombol atau slider hanya ketika warnanya sama dengan kartu di belakangnya, yang akan membuatnya tak terlihat (setel ke `none` untuk menghapusnya) |
| `--bubble-sub-slider-border-radius` | `px` | Radius sudut untuk subtombol slider |
| `--bubble-sub-slider-background-color` | `color` | Warna latar belakang untuk subtombol slider |
| `--bubble-sub-slider-height` | `px` | Tinggi untuk subtombol slider yang selalu terlihat |
| `--bubble-sub-slider-outline` | `box-shadow` | Garis luar khusus subtombol slider, kembali ke `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Warna teks pada latar belakang subtombol yang terang |

</details>

#### Contoh

<details>

<summary>Tombol dengan beberapa subtombol untuk membuat kartu vacuum (seperti pada tangkapan layar)</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: switch
name: Vacuum
entity: vacuum.downstairs
icon: mdi:robot-vacuum
show_state: true
show_last_changed: true
tap_action:
  action: more-info
button_action:
  tap_action:
    action: more-info
sub_button:
  - name: Battery
    icon: mdi:battery
    show_name: false
    show_icon: true
    show_background: false
    show_attribute: true
    attribute: battery_level
  - name: Return to dock
    icon: mdi:home
    show_background: false
    tap_action:
      action: call-service
      service: vacuum.return_to_base
      target:
        entity_id: vacuum.downstairs
  - name: Pause
    icon: mdi:pause
    show_background: false
    tap_action:
      action: call-service
      service: vacuum.pause
      target:
        entity_id: vacuum.downstairs
  - name: Start
    icon: mdi:play
    tap_action:
      action: call-service
      service: vacuum.start
      target:
        entity_id: vacuum.downstairs
styles: >-
  .bubble-button-card-container {
    /* Change the background color when the vacuum get an error (optional), more details in the styles template section */
    background: ${state === 'error' ? 'rgb(200, 80, 40)' : ''} !important;
  }
  /* Change the first sub-button battery icon based on the battery_icon attribute, more details in the styles template section */
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].attributes.battery_icon)}
```

</details>

<details>

<summary>Slider tombol dengan subtombol yang menampilkan kecerahan dan satu yang mengalihkan lampu (seperti pada tangkapan layar)</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: slider
name: Kitchen
entity: light.kitchen
icon: mdi:fridge-outline
show_last_updated: true
sub_button:
  - name: Brightness
    icon: mdi:fridge-outline
    show_icon: false
    show_background: false
    show_attribute: true
    attribute: brightness
  - name: Toggle button
    icon: mdi:lightbulb
    tap_action:
      action: toggle
```

</details>

<details>

<summary>Tombol yang menampilkan suhu dalam dan luar ruangan dengan cuaca untuk hari ini dan besok (tangkapan layar disertakan)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Sial bagi saya, cuacanya berawan terus, tapi semua ikon berubah berdasarkan cuaca.

```yaml
type: custom:bubble-card
card_type: button
button_type: state
entity: weather.openweathermap
name: Weather
show_state: true
card_layout: large-2-rows
sub_button:
  - name: Home temperature
    icon: mdi:home-thermometer-outline
    entity: sensor.home_temperature
    show_state: true
    show_icon: true
    show_background: false
  - name: Outside temperature
    entity: sensor.outside_temperature
    show_state: true
    show_background: false
  - name: Today
    entity: sensor.home_realfeel_temperature_max_0d
    show_name: true
    show_state: true
    tap_action:
      action: more-info
  - name: Tomorrow
    entity: sensor.home_realfeel_temperature_max_1d
    show_name: true
    show_state: true
    show_background: false
styles: >-
  /* Change the third and fourth sub-button icon based on the forecast.condition attribute, more details in the styles template section */
  ${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}
  ${subButtonIcon[3].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[1]?.condition))}
```

</details>

<br>

---

<br>

## Tata letak kartu

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card sepenuhnya mendukung tampilan section Home Assistant, Anda dapat mengubah tata letak kartu untuk membuat kartu lebih besar dan juga mengubah jumlah kolom atau baris yang harus ditempati kartu dalam tampilan section Anda (hanya pada kartu yang mendukung opsi tersebut). Tata letak ini juga didukung di semua tipe tampilan lainnya.

<details>

<summary><b>Tata letak kartu yang tersedia</b></summary>

| Tata letak | Deskripsi |
| --- | --- |
| `normal` | Tata letak biasa (tidak dioptimalkan untuk tampilan section) |
| `large` | Tata letak yang lebih besar yang akan menyesuaikan ukuran dengan baris yang dipilih dalam tampilan section (dioptimalkan untuk tampilan section) |
| `large-2-rows` | Tata letak yang lebih besar dengan 2 baris subtombol yang akan menyesuaikan ukuran dengan baris yang dipilih dalam tampilan section (dioptimalkan untuk tampilan section) |
| `large-sub-buttons-grid` | Tata letak ini akan menampilkan subtombol dalam bentuk grid, `rows` harus diatur ke setidaknya `2`.

</details>

#### Contoh

<details>

<summary>Tombol besar yang menampilkan statistik energi dengan 2 baris subtombol (tangkapan layar disertakan)</summary>

<br>

<img width="547" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/faa643d5-5d1e-488d-b4a5-6bedd043c747">

```yaml
type: custom:bubble-card
card_type: button
button_type: state
card_layout: large-2-rows
name: Energy
entity: sensor.current_power_production
icon: mdi:home-lightning-bolt-outline
show_state: true
button_action:
  tap_action:
    action: navigate
    navigation_path: '#energy'
sub_button:
  - entity: sensor.electricity_counter
    icon: mdi:counter
    show_background: false
    show_state: true
    tap_action:
      action: more-info
  - entity: sensor.today_s_energy_production
    show_state: true
    show_background: false
  - entity: sensor.average_daily_consumption
    show_background: false
    show_state: true
  - entity: sensor.this_week_production
    show_state: true
    show_background: false
    icon: mdi:calendar-week
```

</details>

<details>

<summary>Tombol besar dengan beberapa baris dan 12 subtombol</summary>

<br>

<img width="547" alt="image" src="/img/Example_Layout_Large_multi-row.png">

```yaml
type: custom:bubble-card
card_type: button
button_type: state
entity: sun.sun
card_layout: large-sub-buttons-grid
grid_options:
  rows: 3
sub_button:
  - entity: sun.sun
    icon: mdi:numeric-0
  - entity: sun.sun
    icon: mdi:numeric-1
  - entity: sun.sun
    icon: mdi:numeric-2
  - entity: sun.sun
    icon: mdi:numeric-3
  - entity: sun.sun
    icon: mdi:numeric-4
  - entity: sun.sun
    icon: mdi:numeric-5
  - entity: sun.sun
    icon: mdi:numeric-6
  - entity: sun.sun
    icon: mdi:numeric-7
  - entity: sun.sun
    icon: mdi:numeric-8
  - entity: sun.sun
    icon: mdi:numeric-9
  - entity: sun.sun
    icon: mdi:numeric-10
  - entity: sun.sun
    icon: mdi:numeric-negative-1
```

</details>

<br>

---

<br>

## Kondisi

Sebagian opsi dikendalikan oleh kondisi, yang ditulis persis seperti kondisi pada [kartu bersyarat](https://www.home-assistant.io/dashboards/conditional/) Home Assistant:

- `visibility` pada [subtombol](#subtombol), untuk menampilkan atau menyembunyikannya
- `trigger` pada [pop-up](#pop-up), untuk membukanya saat kondisi terpenuhi
- `checkConditionsMet(conditions, hass)` di dalam [templat](#templat) Anda, saat Anda membutuhkan jawabannya di kode Anda sendiri

Setiap jenis kondisi Home Assistant dievaluasi: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, serta grup `and`, `or`, dan `not`. Kondisi dari pembangun kondisi Home Assistant juga berfungsi, yaitu yang dinamai menurut domainnya seperti `sun.is_up`, `light.is_on`, `zone.in_zone` atau `temperature.is_value`, beserta pengaturan `target`, `options`, `behavior`, dan `for` miliknya.

<details>

<summary><b>Contoh</b></summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
entity: light.kitchen
sub_button:
  - name: Night mode
    icon: mdi:weather-night
    visibility:
      - condition: sun.is_set
      - condition: state
        entity: person.me
        state: home
```

</details>

> [!NOTE]
> Kondisi dievaluasi di peramban Anda, jadi beberapa di antaranya yang memerlukan server Home Assistant tidak bisa tepat: matahari terbit dan terbenam dibaca dari entitas `sun.sun` alih-alih dihitung ulang, dan durasi `for` diukur dari perubahan status terakhir, tanpa riwayat recorder.
>
> `view_columns` diterima tetapi selalu lolos, karena Bubble Card tidak pernah menjadi pihak yang menata kolom tampilan Anda. Jenis kondisi yang tidak dikenal Bubble Card melaporkan dirinya sekali di konsol peramban Anda alih-alih gagal diam-diam, sehingga Anda bisa membedakan salah ketik dari fitur yang belum ada.

<br>

---

<br>

## Aksi ketuk, ketuk dua kali, dan tahan

Anda juga dapat menggunakan aksi ketuk, aksi ketuk dua kali, dan aksi tahan bawaan Home Assistant pada kartu yang mendukung opsi ini. Misalnya, ini memungkinkan Anda menampilkan jendela "more info" dengan menahan ikon tombol atau menjalankan sebuah service saat subtombol ditekan.

**Catatan: Ketika `double_tap_action` dikonfigurasi, `tap_action` biasa akan memiliki jeda 200ms untuk memungkinkan deteksi
ketuk dua kali. Jika jeda ini tidak diinginkan, atur `double_tap_action` ke `none` untuk menonaktifkan penanganan ketuk dua kali.**

### Opsi aksi

<details>

<summary><b>Opsi (YAML + deskripsi)</b></summary>

| Nama | Tipe | Opsi yang didukung | Deskripsi |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Aksi yang akan dijalankan |
| `target` | object |  | Hanya berfungsi dengan `call-service`. Mengikuti [sintaks home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Path apa pun dari dashboard Anda | Path untuk dinavigasikan (misalnya `'#kitchen'` untuk membuka pop-up) saat aksi didefinisikan sebagai navigate |
| `url_path` | string | Link apa pun | URL untuk dibuka saat diklik (misalnya `https://www.google.com`) saat aksi adalah `url` |
| `service` | string | Service apa pun | Service yang akan dipanggil (misalnya `media_player.media_play_pause`) saat `action` didefinisikan sebagai `call-service` |
| `data` atau `service_data` | object | Data service apa pun | Data service yang akan disertakan (misalnya `entity_id: media_player.kitchen`) saat `action` didefinisikan sebagai `call-service` |
| `confirmation` | object | Lihat [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Tampilkan pop-up konfirmasi (bukan pop-up Bubble Card), menggantikan objek `confirmation` default |

</details>

#### Contoh

<details>

<summary>Tombol untuk membuka pop-up</summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
button_type: name
name: Kitchen
icon: mdi:fridge
button_action:
  tap_action:
    action: navigate
    navigation_path: '#kitchen'
```

</details>

<br>

---

<br>

## Gaya

Anda dapat menambahkan gaya khusus untuk mengubah CSS semua kartu **tanpa menggunakan card-mod** dengan empat cara:

- Di editor, buka kartu yang ingin Anda ubah, lalu navigasikan ke _Styling options > Custom styles & JS templates_, dan tambahkan gaya khusus Anda (lihat tips dan contoh di bawah).
- Di editor (atau di [YAML](#modul)), buka kartu yang ingin Anda ubah, lalu navigasikan ke _Modules_, lalu buat modul baru (modul ini akan tersedia untuk semua kartu), atau buka **Module Store** untuk memasang Module yang tersedia (informasi lebih lengkap tentang modul dapat ditemukan [di bawah](#modul)).
- Di berkas [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes) dengan menambahkan variabel CSS di YAML (variabel ini tersedia di dokumentasi setiap kartu di atas). Ini memungkinkan modifikasi secara global.

  <details>
  
  <summary>Contoh</a></summary>
  
  <br>

  Jangan salin baris `Bubble:`, ini adalah nama tema yang Anda gunakan. Anda juga perlu menghapus `--` dari variabelnya.

  Anda perlu menjalankan aksi [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) untuk menyegarkan tema setelah modifikasi apa pun.

  ```yaml
  Bubble:  
    # Bubble Card variables test
    bubble-border-radius: "8px"
    bubble-main-background-color: "rgb(50,70,90)"
    bubble-secondary-background-color: "rgb(0,70,90)"
    bubble-pop-up-main-background-color: "rgba(200,200,200,0.5)"
    bubble-accent-color: "rgb(100,140,180)"
    bubble-icon-background-color: "rgb(50,80,100)"
    bubble-select-list-width: "200px"
    bubble-select-list-background-color: "rgb(100,140,180)"
  ```
  
  </details>
  
- Di YAML dengan menambahkan `styles: |` diikuti dengan gaya khusus Anda (lihat tips dan contoh di bawah).

> [!TIP]  
> **Untuk memahami kelas gaya mana yang bisa diubah**, Anda bisa melihat folder [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) di repositori ini. Di setiap folder kartu, Anda akan menemukan berkas bernama `styles.css`. Berkas ini berisi semua gaya yang diterapkan. Ini memungkinkan jauh lebih banyak kemungkinan dibandingkan variabel CSS, tetapi perlu ditambahkan satu per satu ke setiap kartu.
> 
> Anda juga bisa menemukan banyak [contoh dari komunitas](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), atau beberapa dari [forum Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) dengan sedikit pencarian.
>
> Tema Bubble untuk Home Assistant (seperti pada tangkapan layar) dapat ditemukan [di sini](https://github.com/Clooos/Bubble).
>
> Video tutorial akan segera hadir di [kanal YouTube](https://www.youtube.com/@cloooos) saya!

> [!IMPORTANT]  
> Perlu diperhatikan bahwa Anda mungkin harus menambahkan `!important;` pada beberapa gaya CSS yang sudah didefinisikan (lihat contoh di bawah).

> [!TIP]  
> Subtombol dapat ditarget dengan kelas berbasis nama. Misalnya, subtombol bernama "My sub-button" dapat diberi gaya dengan `.my-sub-button`. Subtombol slider juga menyediakan `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, dan seterusnya.
>
> Kelas berbasis nama berubah ketika Anda mengganti nama subtombol, dan ikut diterjemahkan ketika namanya diterjemahkan. Setel `css_class` pada subtombol untuk mendapatkan kelas milik Anda sendiri yang tidak pernah berpindah, apa pun namanya dan apa pun bahasanya.

#### Contoh

<details>

<summary>Mengubah ukuran font semua jenis Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Mengubah warna latar belakang satu tombol dalam tumpukan tombol horizontal</summary>

<br>

```yaml
styles: >
  /* Selector for the '#kitchen' button */
  .kitchen > .bubble-background-color {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Mengubah warna latar belakang kartu</summary>

<br>

Yang ini berfungsi untuk semua jenis Bubble Card (kecuali pop-up):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Yang ini melakukan hal yang sama tetapi hanya pada kartu tombol (juga berfungsi untuk header pop-up): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Untuk mengubah warna saat statusnya `on`, lihat templat gaya di bawah ini.

</details>

<details>

<summary>Mengubah warna slider tombol</summary>

<br>

```yaml
styles: |
  .bubble-range-fill { 
    background: rgba(79, 69, 87, 1) !important;
    opacity: 1 !important;
  }
```

</details>

<details>

<summary>Mengubah warna garis pemisah</summary>

<br>

```yaml
styles: |
  .bubble-line {
    background: var(--primary-text-color);
    opacity: 0.1;
  }
```

</details>

<details>

<summary>Mengubah warna ikon</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Untuk ikon tumpukan tombol horizontal.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Mengubah warna latar belakang wadah ikon</summary>

<br>

Yang ini berfungsi untuk semua jenis Bubble Card (kecuali pop-up):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Yang ini melakukan hal yang sama untuk header pop-up: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Mengubah ukuran subtombol (cocok untuk tata letak large)</summary>

<br>

```yaml
styles: |
  .bubble-sub-button {
    height: 48px !important;
    min-width: 48px !important;
  }
```

</details>

<details>

<summary>Mengubah warna latar belakang subtombol kedua</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Mengubah ukuran ikon</summary>

<br>

Untuk ikon utama.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Untuk ikon subtombol.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Menggunakan gambar alih-alih ikon pada subtombol</summary>

<br>

```yaml
sub_button:
  - icon: none
styles: |-
  .bubble-sub-button-1 {
    background-image: url("/local/pictures/your_picture.jpg");
    background-size: cover;
  }
```

Cukup unggah gambar ini ke folder "pictures" (atau nama sesuai keinginan Anda) di dalam folder "www" Home Assistant.

</details>

<details>

<summary>Contoh lanjutan: membuat baris horizontal berisi subtombol (tangkapan layar disertakan)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Saya sangat menyukai yang satu ini, saya menggunakannya sebagai header di dashboard saya.

```yaml
type: custom:bubble-card
card_type: button
card_layout: large
button_type: name
show_icon: false
show_name: false
sub_button:
  - name: Mute
    icon: mdi:volume-off
    tap_action:
      action: toggle
      service: input_boolean.toggle
    entity: input_boolean.silent_mode
  - name: Covers
    entity: cover.all_group
    show_background: false
    tap_action:
      action: navigate
      navigation_path: '#cover'
  - name: Shopping list
    icon: mdi:cart-outline
    show_background: false
    tap_action:
      action: navigate
      navigation_path: '#shopping-list'
  - name: Security
    icon: mdi:video-outline
    show_background: false
    tap_action:
      action: navigate
      navigation_path: '#security'
  - name: Settings
    icon: mdi:cog
    show_background: false
    tap_action:
      action: navigate
      navigation_path: '#configuration'
styles: |
  .card-content {
    width: 100%;
    margin: 0 !important;
  }
  .bubble-button-card-container {
    background: none;
    border: none;
  }
  .bubble-sub-button {
    height: 46px !important;
    width: 46px !important;
  }
  .bubble-sub-button-container {
    display: flex !important;
    width: 100%;
    justify-content: space-between !important;
  }
  .bubble-sub-button-icon {
    --mdc-icon-size: inherit !important;
  }
  .bubble-name-container {
    margin-right: 0px !important;
  }
```

![Sub-buttons-everywhere](https://github.com/Clooos/Bubble-Card/assets/36499953/3bf04969-e00d-4755-89df-481e8f7d73b2)

</details>

<br>

## Templat

**Bubble Card tidak mendukung templat Jinja**, tetapi pengguna lanjutan dapat menambahkan templat dalam JS langsung di [gaya khusus](#gaya) mereka. Misalnya, ini memungkinkan Anda mengubah ikon, teks, atau warna elemen secara dinamis, menampilkan atau menyembunyikan elemen secara kondisional (seperti subtombol), atau hampir apa pun berdasarkan status, atribut, dan lainnya.

> [!TIP]  
> Informasi lebih lengkap tentang templat JS [di sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Saran saya, **selalu periksa konsol peramban Anda** untuk memastikan semuanya berfungsi dengan benar.

> [!IMPORTANT]  
> **Semua templat yang tidak mengubah properti CSS harus ditempatkan di akhir! Seperti mengubah ikon, teks, atau elemen apa pun.**

#### Variabel dan fungsi yang tersedia

<details>

<summary>Variabel</summary>

<br>

Anda memiliki akses ke variabel-variabel ini di sebagian besar kartu:

- `state` akan mengembalikan status `entity` yang Anda definisikan.
  
- `entity` akan mengembalikan entity yang Anda definisikan seperti `switch.test` pada contoh ini.
  
- `icon` dapat digunakan seperti ini untuk mengubah ikon `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` akan mengembalikan status `entity` yang didefinisikan pada subtombol pertama Anda, `[0]` adalah status subtombol pertama, `[1]` yang kedua...
  
- `subButtonIcon[0]` dapat digunakan seperti ini untuk mengubah ikon subtombol pertama `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` adalah ikon subtombol pertama, `[1]` yang kedua...
  
- `card` akan mengembalikan elemen kartu di dalam DOM.
  
- `hass` adalah variabel lanjutan yang memberikan Anda kontrol lebih besar, misalnya Anda dapat mengembalikan status `light.kitchen` seperti ini `hass.states['light.kitchen'].state` atau atribut seperti ini `hass.states[entity].attributes.brightness`.

- `this` akan mengembalikan banyak informasi berguna tentang setup dan dashboard Anda, gunakan ini hanya jika Anda tahu apa yang Anda lakukan.

</details>

<details>

<summary>Fungsi</summary>

<br>

Anda memiliki akses ke semua fungsi JS global, tetapi Anda juga memiliki akses ke:

- `getWeatherIcon` dapat digunakan untuk mengembalikan ikon cuaca berdasarkan status yang mengembalikan cuaca. Misalnya, Anda bisa melakukan ini `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` untuk mengubah ikon subtombol ketiga menjadi ikon cuaca hari ini, `.forecast[1]?.condition` untuk besok...

  Anda perlu membuat template sensor untuk itu. Berikut yang bisa Anda tambahkan di `configuration.yaml` Anda:
  ```yaml
    - trigger:
        - platform: time_pattern
          hours: /2
      action:
        - service: weather.get_forecasts
          data:
            type: daily
          target:
            entity_id: weather.home
          response_variable: daily
      sensor:
        - name: Weather Forecast Daily
          unique_id: weather_forecast_daily
          state: "{{ now().isoformat() }}"
          attributes:
            forecast: "{{ daily['weather.home'].forecast }}"
  ```
- `checkConditionsMet(conditions, hass)` mengembalikan `true` ketika sebuah daftar [kondisi](#kondisi) terpenuhi, misalnya `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` dapat digunakan untuk menerjemahkan status (juga bisa digunakan untuk mendapatkan satuan status, tanpa perlu menambahkannya secara manual).
- `hass.formatEntityAttributeValue(state, "attribute")` dapat digunakan untuk menerjemahkan atribut (juga bisa digunakan untuk mendapatkan satuan status, tanpa perlu menambahkannya secara manual).

</details>

#### Contoh

Anda bisa menemukan banyak contoh di bawah ini, tetapi Anda juga bisa menemukan templat yang sangat lanjutan di halaman [Patreon](https://www.patreon.com/c/Clooos) saya, seperti salah satunya (favorit saya) yang memungkinkan hingga empat lencana kondisional yang ditempatkan di sekitar ikon kartu. Ini juga cara yang bagus untuk mempelajari semua kemungkinan gaya khusus dan templat Bubble Card!

<details>
<summary>Contoh dari halaman Patreon saya</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Adding Home Assistant like badges to any card</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Showing formatted date and time in a separator without using any entity</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Showing a sub-button state on two lines</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Customizing labels and icons inside a select sub-button</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Adding a persistent reminder pop-up that shows up only when needed</a>
</p>

<br>

</details>

<details>

<summary>Mengubah warna latar belakang tombol yang berwarna merah saat <code>off</code> dan biru saat <code>on</code></summary>

<br>

```yaml
type: custom:bubble-card
card_type: button
entity: switch.test
name: Test
styles: |
  .bubble-button-background {
    opacity: 1 !important;
    background-color: ${state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Mengubah warna latar belakang tombol berdasarkan entity untuk tumpukan tombol horizontal</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Menampilkan/Menyembunyikan subtombol secara kondisional</summary>

<br>

Yang ini menampilkan subtombol pertama hanya ketika vacuum saya tersangkut.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Yang ini menampilkan subtombol saat baterai di bawah 10%. Berguna dengan subtombol yang menampilkan "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Mengubah ikon atau ikon subtombol secara kondisional</summary>

<br>

Yang ini mengubah ikon tombol hanya ketika vacuum tersangkut.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Yang ini mengubah ikon subtombol pertama hanya ketika vacuum tersangkut.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Mengubah warna ikon atau ikon subtombol secara kondisional</summary>

<br>

Yang ini mengubah warna ikon tombol berdasarkan statusnya.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Yang ini mengubah warna ikon subtombol berdasarkan statusnya. `.bubble-sub-button-1` adalah subtombol pertama, ganti `1` jika Anda ingin mengubah ikon subtombol lain.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Menganimasikan ikon kipas secara kondisional</summary>

<br>

Yang ini memutar ikon tombol ketika kipas dalam status `on`.
```yaml
styles: |-
  .bubble-icon {
    animation: ${hass.states['fan.you_fan'].state === 'on' ? 'slow-rotate 2s linear infinite' : ''};
  }
  @keyframes slow-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
```

</details>

<details>

<summary>Membuat templat teks (seperti name atau state)</summary>

<br>

Yang ini mengubah nama/status tombol dengan "It's currently sunny" tergantung cuaca Anda.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
atau saat diterapkan untuk subtombol:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Jika Anda ingin membuat templat status (`.bubble-state`), jangan aktifkan `show_state: true`, cukup aktifkan `show_attribute: true` tanpa atribut apa pun.

</details>

<details>

<summary>Contoh lanjutan: mengubah warna subtombol saat pop-up terbuka</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Contoh lanjutan: membuat templat nama pemisah berdasarkan status yang diterjemahkan ke bahasa Anda</summary>

<br>

Anda bisa menggunakan `hass.formatEntityState(state)` untuk menerjemahkan status dan `hass.formatEntityAttributeValue(state, "attribute")` untuk menerjemahkan atribut.

Yang ini mengubah nama dan ikon berdasarkan cuaca, "Nuageux" berarti "Cloudy" dalam bahasa Prancis.

![image](https://github.com/Clooos/Bubble-Card/assets/36499953/35ac9d0f-c3b8-4c09-9c15-fe6954011d55)

```yaml
type: custom:bubble-card
card_type: separator
icon: mdi:weather-cloudy
sub_button:
  - entity: sensor.outside_temperature
    icon: mdi:thermometer
    name: Temperature
    show_state: true
    show_background: false
styles: >
  .bubble-line {
    background: white;
    opacity: 1;
  }

  ${card.querySelector('.bubble-name').innerText =
  hass.formatEntityState(hass.states['weather.maison'])}

  ${icon.setAttribute("icon",
  getWeatherIcon(hass.states['weather.maison'].state))}
```

</details>

<br>

## Modul

Modul adalah fitur canggih yang memungkinkan Anda menyimpan, menggunakan kembali, dan berbagi gaya khusus serta templat Anda di semua Bubble Card. Alih-alih menyalin dan menempelkan kode yang sama ke beberapa kartu, Anda bisa membuat Module dan menerapkannya di mana pun diperlukan. Ini membuat pengelolaan tampilan dan nuansa dashboard Anda jauh lebih mudah dan efisien.

Namun fitur ini jauh lebih canggih dari itu, karena memungkinkan Anda menambahkan fitur sungguhan sendiri di editor Bubble Card, menggunakan semua opsi [form Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) bawaan!  
Pemilih objek telah ditingkatkan untuk menampilkan perubahan secara langsung dan mendukung atribut dengan benar.

Sebuah modul juga bisa menjawab pemilih kartu Home Assistant bersama [saran entitas](#saran-entitas) bawaan: gunakan `suggestions` untuk kartu yang bisa dijelaskan di awal, dan `suggestions_code` ketika kartu itu harus dihitung dari penyiapan Anda, misalnya pop-up yang dibangun dari setiap entitas di area tempat entitas yang dipilih berada. Kedua kunci tersebut didokumentasikan [di sini](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Anda juga bisa menjelajahi **Module Store** untuk menemukan dan memasang [modul yang dibuat oleh komunitas](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), atau membagikan kreasi Anda sendiri!

> [!TIP]
> Kode sebuah Module bekerja persis sama seperti kode di bagian `styles` pada sebuah kartu. Semua variabel dan fungsi yang sama dari bagian [Templat](#templat) tersedia.

<br>

### Pengaturan Awal

> [!IMPORTANT]
> Mulai v3.1.0, Bubble Card Tools adalah backend penyimpanan yang direkomendasikan untuk modul. Metode template sensor lama masih berfungsi untuk setup yang sudah ada, tetapi modul baru dan fitur Module Store paling baik didukung melalui Bubble Card Tools.

Integrasi Bubble Card Tools mengaktifkan Module Editor dan Module Store, serta menyimpan modul sebagai berkas YAML individual. Modul yang sudah ada akan dimigrasikan secara otomatis.

Langkah-langkah instalasi dan konfigurasi dijelaskan di sini:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor

Anda bisa mengakses Module Editor dari pengaturan kartu mana pun, di bagian **Modules**. Editor ini menyediakan dua tab utama:

#### Tab My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Tab ini menampilkan semua modul yang sudah Anda pasang dan memungkinkan Anda untuk:

- **Menerapkan** modul yang sudah ada ke kartu saat ini
- **Membuat** modul baru dari awal
- **Mengedit** modul yang sudah ada dengan pratinjau langsung
- **Menghapus** modul yang tidak lagi Anda butuhkan
- **Mencari** dan **mengurutkan** modul (alfabetis, terbaru, aktif lebih dulu)
- **Mengatur status global** agar modul diterapkan ke semua kartu secara otomatis
- **Mengimpor/Mengekspor** modul untuk cadangan atau berbagi
- **Menulis saran entitas** di editor modul, di bawah **Opsional: Saran entitas**, agar modul Anda ditawarkan di pemilih kartu Home Assistant. Baik aturan maupun saran terhitung diperiksa sambil Anda menulis, kesalahan di sana mencegah penyimpanan, dan pratinjau menampilkan kartu yang disarankan untuk entitas mana pun yang Anda pilih

#### Tab Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Tab ini akan menampilkan [semua modul yang tersedia dari komunitas](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), dan memungkinkan Anda untuk:

- **Menjelajahi** semua modul buatan komunitas
- **Mencari** dan menyaring modul berdasarkan nama, kompatibilitas, atau kata kunci
- **Memasang** modul dengan satu klik
- **Memperbarui** modul yang sudah dipasang saat versi baru tersedia

> [!TIP]
> Di editor, Anda bisa mengaktifkan modul yang belum didukung untuk menguji modul yang belum ditandai kompatibel dengan jenis kartu tertentu.

<br>

### Cara menggunakan modul

#### Membuat modul baru

<details>

<summary>Klik untuk membuka</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Buka editor kartu mana pun dan buka bagian **Modules**.
2. Klik **Create new module**.
3. Isi informasi modul.
4. Tulis kode CSS dan/atau templat JavaScript Anda di editor **Code**.
5. (Opsional) Buat antarmuka konfigurasi khusus di bagian **Editor** (seperti pemilih warna pada tangkapan layar di atas, dokumentasi lengkap tersedia [di sini](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Opsional) Tulis **Saran entitas** Anda agar modul Anda ditawarkan di pemilih kartu Home Assistant. Panel ini memeriksa apa yang Anda tulis sambil Anda mengetik, dan pratinjaunya menampilkan kartu yang disarankan itu sendiri untuk entitas pilihan Anda.
7. Klik **Save**.

Modul Anda kini tersedia untuk digunakan di kartu mana pun!

<br>

</details>

#### Menerapkan modul ke kartu

<details>

<summary>Klik untuk membuka</summary>

<br>

- **Melalui editor:**

  - Buka editor kartu tempat Anda ingin menerapkan modul.
  - Buka bagian **Modules**.
  - Klik modul yang ingin Anda terapkan dari daftar.
  - Di bawah "Apply to", klik "This card". Modul kini aktif. Anda bisa menerapkan beberapa modul ke kartu yang sama.

- **Melalui YAML:**

  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - module_id_1
    - module_id_2
  ```

<br>

</details>

#### Menerapkan modul secara global

<details>

<summary>Klik untuk membuka</summary>

<br>

Anda bisa mengatur modul agar diterapkan secara otomatis ke semua Bubble Card:

**Ini tidak tersedia untuk modul dengan editor, karena modul semacam itu memerlukan konfigurasi khusus agar berfungsi.**

- **Melalui editor:**

  - Di Module editor, cari modul Anda di tab **My Modules**.
  - Aktifkan tombol **All cards** di sebelah nama modul.
  - Modul sekarang akan diterapkan ke semua kartu secara otomatis.
 
- **Melalui YAML:**

  Di konfigurasi YAML modul Anda (di `bubble-modules.yaml`), cukup tambahkan `is_global: true`.

<br>

</details>

#### Mengecualikan satu kartu dari modul global

<details>

<summary>Klik untuk membuka</summary>

<br>

Jika Anda memiliki modul global tetapi ingin mengecualikannya dari kartu tertentu:

- **Melalui editor:**
  
  - Di bagian **Modules** pada kartu tersebut, Anda akan melihat modul global yang terdaftar.
  - Klik modul global, nonaktifkan "This card" untuk mengecualikannya dari kartu tertentu ini.

- **Melalui YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Membagikan modul Anda ke Module Store

<details>

<summary>Klik untuk membuka</summary>

<br>

Untuk membagikan Module Anda ke Module Store, di Module Editor, di bagian bawah pada "Export Module", klik "Copy for GitHub" dan tempelkan isinya dalam diskusi baru di kategori [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Edit deskripsinya** (jika perlu), **contohnya** (untuk pengguna YAML), dan jangan lupa untuk **menyertakan setidaknya satu tangkapan layar** untuk Module Store.

**Module Anda langsung tersedia setelah itu** (setelah penyegaran Store), jadi pastikan kembali bahwa semuanya ditulis dengan benar dan Module berfungsi sebagaimana mestinya. Anda tentu saja bisa mengedit/memperbarui Module setelah dibagikan.

<br>

</details>

#### Pengelolaan versi

<details>

<summary>Klik untuk membuka</summary>

<br>

Module Store secara otomatis memeriksa pembaruan untuk modul yang sudah dipasang. Ketika pembaruan tersedia:

1. Anda akan melihat indikator pembaruan di tab **Module Store**.
2. Klik **Update** pada modul yang memiliki pembaruan tersedia.
3. Konfirmasikan pembaruan di Module Store.

<br>

</details>

#### Menentukan jenis kartu yang didukung

<details>

<summary>Klik untuk membuka</summary>

<br>

Beberapa modul mungkin tidak kompatibel dengan semua jenis kartu. Anda bisa menentukan kartu mana saja yang didukung sebuah modul.  
Jika Anda ingin sebuah modul kompatibel dengan **semua kartu**, cukup hilangkan bidang `supported` (atau gunakan opsi **All cards** di editor).

```yaml
my_module:
  name: "Button Only Module"
  supported:
    - button
  code: |
    /* Your module code here */
```

</details>

<br>

### Contoh

<details>
<summary>Modul gaya dasar</summary>

<br>

```yaml
blue_cards:
  name: "Blue Cards Theme"
  version: "1.0"
  creator: "Your Name"
  description: "Makes all cards backgrounds blue"
  code: |
    ha-card {
      --bubble-main-background-color: #007acc;
    }
```

<br>

</details>

<details>
<summary>Modul dengan konfigurasi khusus</summary>

<br>

Modul ini tersedia [di sini](https://github.com/Clooos/Bubble-Card/discussions/1231).

```yaml
icon_container_color:
  name: 'Example: Customize the icon container color'
  version: v1.2
  creator: Clooos
  supported:
    - calendar
    - pop-up
    - cover
    - button
    - media-player
    - climate
    - select
  description: |
    A list of predefined colors to customize the icon container color.
    Configure this module via the editor or in YAML, for example:
    <br><br>
    <code-block><pre>
    icon_container_color: 
        color: light-blue
    </pre></code-block>
  code: |
    .bubble-icon-container,
    .bubble-day-chip {
      opacity: 1 !important;
      --bubble-icon-background-color: var(--${this.config.icon_container_color?.color}-color) !important;
    }
  editor:
    - name: color
      label: Color
      selector:
        ui_color:
          include_none: true
```

<br>

</details>

Lebih banyak contoh dapat ditemukan di Module Store, atau [di sini](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalisasi

Bubble Card berbicara dalam bahasa Anda. Editornya diterjemahkan ke dalam 64 bahasa yang didukung Home Assistant, dan di mana pun Home Assistant sudah memiliki istilah untuk sesuatu, istilah miliknya sendiri yang dipakai, sehingga Anda membaca istilah yang sama di kedua antarmuka.

Di bagian bawah editor, di sebelah nomor versi, sakelar **Otomatis** mengikuti bahasa Home Assistant Anda. Matikan dan seluruh editor kembali ke bahasa Inggris, yang praktis untuk mengikuti tutorial atau melaporkan masalah. Pilihan Anda diingat di peramban Anda.

Dokumentasi ini juga diterjemahkan, [dalam 62 bahasa](languages.md). Halaman tersebut terbuka untuk semua orang, jadi istilah yang tidak cocok dengan Home Assistant Anda sendiri bisa diperbaiki dalam beberapa klik. Versi bahasa Inggris tetap menjadi acuan untuk isinya sendiri.

<br>

---

<br>

## Bantuan

Jangan ragu untuk membuka issue jika ada sesuatu yang tidak berfungsi sebagaimana mestinya. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Punya pertanyaan atau pendapat tentang Bubble Card? Ingin membagikan dashboard atau temuan Anda? Anda bisa pergi ke forum Home Assistant, subreddit Bubble Card, atau bagian GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Kontribusi

Kontribusi sangat diterima! Baik itu perbaikan bug, fitur baru, terjemahan, atau perbaikan dokumentasi, jangan ragu untuk membuka pull request.

Sebelum memulai, silakan baca [panduan pengembang](DEVELOPERS.md) yang menjelaskan cara mengatur lingkungan lokal Anda, membangun proyek, dan menguji perubahan Anda.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Donasi

Saya mendedikasikan sebagian besar waktu luang saya untuk menjadikan proyek ini sebaik mungkin. Jadi jika Anda menghargai kerja saya, donasi apa pun akan menjadi cara yang bagus untuk menunjukkan dukungan Anda 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Terima kasih untuk semua orang atas dukungan Anda, kalian semua adalah motivasi terbesar saya!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
