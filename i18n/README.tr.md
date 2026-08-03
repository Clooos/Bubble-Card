<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Bu sayfa otomatik bir çeviridir. Şüphe durumunda [orijinal İngilizce belgeler](../README.md) geçerlidir. Bir cümle yanlış mı görünüyor? Her türlü yardım memnuniyetle karşılanır ve [bu sayfayı düzeltmek](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.tr.md) yalnızca bir dakikanızı alır: fork ve pull request işlemlerini GitHub hallediyor. Şimdiden teşekkürler! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Bunu başka bir dilde okuyun](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card, Home Assistant için minimalist ve özelleştirilebilir bir kart koleksiyonudur: modern pop-up'lar ve 100'den fazla topluluk yapımı modül içeren entegre bir Module Store sunar.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## İçindekiler

**[`Kurulum`](#kurulum)**  **[`Yapılandırma`](#yapılandırma)**  **[`Pop-up`](#pop-up)**  **[`Yatay düğme yığını`](#yatay-düğme-yığını)**  **[`Düğme`](#düğme)**  **[`Medya oynatıcı`](#medya-oynatıcı)**  **[`Panjur`](#panjur)**  **[`Seçim`](#seçim)**  **[`İklim`](#i̇klim)**  **[`Takvim`](#takvim)**  **[`Ayırıcı`](#ayırıcı)**  **[`Boş sütun`](#boş-sütun)**  **[`Yalnızca alt düğmeler`](#yalnızca-alt-düğmeler)**  **[`Alt düğmeler`](#alt-düğmeler)**  **[`Kart düzenleri`](#kart-düzenleri)**  **[`Eylemler`](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri)**  **[`Stil`](#stil)**  **[`Şablonlar`](#şablonlar)**  **[`Modüller`](#modüller)**  **[`Yardım`](#yardım)**  **[`Katkıda bulunma`](#katkıda-bulunma)**  **[`Bağış yapın`](#bağış-yapın)**

<br>

## Kurulum

**Home Assistant için desteklenen en düşük sürüm:** 2023.9.0

<details>

<summary>HACS olmadan</summary>

<br>

1. Şu dosyayı indirin: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. Bu dosyayı `<config>/www` klasörünüze ekleyin
3. Panonuzda sağ üst köşedeki simgeye, ardından `Panoyu düzenle` seçeneğine tıklayın
4. Aynı simgeye tekrar tıklayıp `Kaynakları yönet` seçeneğine tıklayın
5. `Kaynak ekle` üzerine tıklayın
6. Şunu kopyalayıp yapıştırın: `/local/bubble-card.js?v=1`
7. `JavaScript Module` seçeneğine, ardından `Oluştur` düğmesine tıklayın
8. Geri dönüp sayfanızı yenileyin
9. Artık sağ alt köşedeki `Kart ekle` düğmesine tıklayıp `Bubble Card` araması yapabilirsiniz
10. Dosyanın her güncellemesinden sonra `/local/bubble-card.js?v=1` satırını düzenleyip sürüm numarasını daha yüksek bir değere değiştirmeniz gerekir

Çalışmıyorsa tarayıcı önbelleğinizi temizlemeyi deneyin.

</details>

<details>

<summary>HACS ile (Önerilen)</summary>

<br>

Bu yöntem, güncellemeleri doğrudan Home Assistant Community Store üzerinden almanızı sağlar

1. HACS henüz kurulu değilse [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/) adresindeki talimatları izleyerek indirin
2. [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic) adresindeki talimatları izleyerek HACS'nin ilk yapılandırmasını tamamlayın
3. Kenar çubuğunuzdan "HACS" bölümüne gidin
4. "Bubble Card" araması yapın veya aşağıdaki mavi düğmeye tıklayın
5. "İndir" üzerine tıklayın
6. Panonuza geri dönün, sağ üst köşedeki simgeye ve ardından `Panoyu düzenle` seçeneğine tıklayın
7. Artık sağ alt köşedeki `Kart ekle` düğmesine tıklayıp `Bubble Card` araması yapabilirsiniz

Çalışmıyorsa tarayıcı/uygulama önbelleğinizi temizlemeyi deneyin (gerekirse tüm cihazlarınızda).

#### Videolar

Adım adım videolar için YouTube kanalıma da göz atabilirsiniz.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Yapılandırma

Tüm seçenekler Home Assistant düzenleyicisinden yapılandırılabilir. Ancak aşağıdaki belgede daha fazla ayrıntı ve YAML bulabilirsiniz.

<details>

<summary><b>Ana seçenekler (YAML + açıklama)</b></summary>

| Ad | Tür | Gereklilik | Desteklenen seçenekler | Açıklama |
| --- | --- | --- | --- | --- |
| `type` | string | **Gerekli** | `custom:bubble-card` | Kartın türü |
| `card_type` | string | **Gerekli** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` veya `sub-buttons` | Bubble Card'ın türü, aşağıya bakın |
| `styles` | object list | İsteğe bağlı | Herhangi bir CSS stil sayfası | Bubble Card CSS'inizi özelleştirmenizi sağlar, bkz. [stil](#stil) |

</details>

<details>

<summary><b>Genel CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Değişken | Beklenen değer | Açıklama |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Desteklenen tüm öğeler için kenar yuvarlaklığı |
| `--bubble-main-background-color` | `color` | Desteklenen tüm öğeler için ana arka plan rengi |
| `--bubble-secondary-background-color` | `color` | Desteklenen tüm öğeler için ikincil arka plan rengi |
| `--bubble-accent-color` | `color` | Desteklenen tüm öğeler için vurgu rengi |
| `--bubble-icon-border-radius` | `px` | Desteklenen tüm öğeler için simge kenar yuvarlaklığı |
| `--bubble-icon-background-color` | `color` | Desteklenen tüm öğeler için simge arka plan rengi |
| `--bubble-sub-button-border-radius` | `px` | Tüm alt düğmeler için kenar yuvarlaklığı |
| `--bubble-sub-button-background-color` | `color` | Tüm alt düğmeler için arka plan rengi |
| `--bubble-box-shadow` | bkz. [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Desteklenen tüm öğeler için kutu gölgesi |
| `--bubble-border` | bkz. [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Desteklenen tüm kartlar için kenarlık |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Bubble Card ve yetenekleri hakkında bilgi edinmek için bu [videoya](https://www.youtube.com/watch?v=0hSQOlBxKKI) göz atın.** YouTube kanalım oldukça yeni ve Home Assistant ile Bubble Card hakkında eğitim içeriklerine odaklanıyor. Kanalımın görünürlüğünü artırmama yardımcı olmak için abone olmakta tereddüt etmeyin. Şimdiden teşekkür ederim!

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Bu kart, istediğiniz içerikle bir pop-up oluşturmanızı sağlar. Her pop-up **varsayılan olarak gizlidir** ve bağlantısı hedeflenerek (ör. `'#pop-up-name'`), `navigate` [eylemini](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) destekleyen herhangi bir kartla veya dahil edilen [yatay düğme yığını](#yatay-düğme-yığını) ile açılabilir.

> [!TIP]
> ### Pop-up tetikleyicisi 
> Bu özellik, herhangi bir varlığın durumuna göre bir pop-up açmanızı sağlar; örneğin evinizin önünde biri olduğunda kamera içeren bir "Güvenlik" pop-up'ı açabilirsiniz. Ayrıca bir toggle helper (input_boolean) oluşturup açılmasını/kapanmasını bir otomasyonda tetikleyebilirsiniz.
> <details>
> <summary>Bir <code>binary_sensor</code> <code>on</code> durumundayken pop-up açma</summary>
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
> ### Bir pop-up'ı kapatmanın farklı yolları 
> Bir pop-up'ı kapatmanın birçok yolu vardır. Örneğin, pop-up başlığından aşağı doğru kaydırabilir, pop-up içinde aşağı doğru uzun bir kaydırma yapabilir, masaüstünde Escape tuşuna basabilir, URL'deki hash'i kaldırabilir veya yalnızca kapat düğmesine basabilirsiniz.
>


### Pop-up seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklamalar)</b></summary>

| Ad | Tür | Gereklilik | Desteklenen seçenekler | Açıklama |
| --- | --- | --- | --- | --- |
| `hash` | string | **Gerekli** | ' ' ile herhangi bir benzersiz hash (ör. `'#kitchen'`) | Pop-up'ınızı bu şekilde açacaksınız |
| `popup_style` | string | İsteğe bağlı | `bubble` (varsayılan) veya `classic` | Pop-up'ın görsel stilini tanımlar |
| `popup_mode` | string | İsteğe bağlı | `default` (varsayılan), `fit-content`, `centered` veya `adaptive-dialog` | Pop-up'ın düzen modunu tanımlar |
| `with_bottom_offset` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Yalnızca `popup_mode: fit-content` veya `adaptive-dialog` ile kullanılır. Mobilde alt kısma bir boşluk uygular, panonuzda bir footer kart varsa faydalıdır. |
| `full_width_on_mobile` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Yalnızca `popup_mode: centered` ile kullanılır. Pop-up'ı mobilde tam ekran genişliğine genişletir, daha küçük ekranlarda faydalıdır. |
| `performance_mode` | string | İsteğe bağlı | `default` (varsayılan) veya `performance` | Pop-up açılış animasyonunu optimize eder. `performance` içerik render'ını ve arka plan bulanıklığını hafifçe geciktirir, ayrıca ayarlanmışsa arka plan bulanıklığını devre dışı bırakır. |
| `auto_close` | string | İsteğe bağlı | Milisaniye cinsinden bir zaman aşımı (ör. 10 saniye için `10000`) | Belirli bir sürenin sonunda pop-up'ı otomatik kapatır |
| `close_on_click` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Herhangi bir etkileşimden sonra pop-up'ı otomatik olarak kapatır |
| `close_by_clicking_outside` | boolean | İsteğe bağlı | `true` (varsayılan) veya `false` | Pop-up'ın dışına tıklayarak kapatır |
| `width_desktop` | string | İsteğe bağlı | Herhangi bir CSS değeri | Masaüstünde genişlik (mobilde varsayılan olarak `100%`) |
| `margin` | string | İsteğe bağlı | Herhangi bir CSS değeri | Bunu **yalnızca** pop-up'ınız mobilde iyi ortalanmamışsa kullanın (ör. `13px`) |
| `margin_top_mobile` | string | İsteğe bağlı | Herhangi bir CSS değeri | Mobilde üst kenar boşluğu (ör. başlığınız gizliyse `-56px`) |
| `margin_top_desktop` | string | İsteğe bağlı | Herhangi bir CSS değeri | Masaüstünde üst kenar boşluğu (ör. yarı boyutlu bir pop-up için `50vh` veya `400px` sabit yükseklik için `calc(100vh - 400px)`) |
| `bg_color` | string | İsteğe bağlı | Herhangi bir hex, rgb veya rgba değeri | Pop-up'ınızın arka plan rengi (ör. beyaz bir arka plan için `#ffffff`) |
| `bg_opacity` | string | İsteğe bağlı | `0` ile `100` arasında herhangi bir değer | Pop-up'ınızın arka plan opaklığı (ör. şeffaflık olmaması için `100`) |
| `bg_blur` | string | İsteğe bağlı | `0` ile `100` arasında herhangi bir değer | Pop-up'ınızın arka plan bulanıklık efekti, **bu yalnızca `bg_opacity` `100` olarak ayarlanmadığında çalışır** (ör. bulanıklık olmaması için `0`)|
| `shadow_opacity` | string | İsteğe bağlı | `0` ile `100` arasında herhangi bir değer | Pop-up'ınızın gölge opaklığı (ör. gizlemek için `0`) |
| `hide_backdrop` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Ana panonuzun ilk pop-up'ında bunu true olarak ayarlayarak tüm pop-up'larda arka planı devre dışı bırakın. |
| `background_update` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Pop-up içeriğini arka planda günceller (önerilmez) |
| `trigger_entity` | string | İsteğe bağlı | Herhangi bir varlık | Herhangi bir varlığın durumuna göre bu pop-up'ı açar |
| `trigger_state` | string | İsteğe bağlı (`trigger_entity` tanımlıysa **Gerekli**) | Herhangi bir varlık durumu | Pop-up'ı açacak varlık durumu |
| `trigger_close` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | `trigger_state` farklı olduğunda pop-up'ı kapatır |
| `open_action` | object | İsteğe bağlı | Bkz. [eylemler](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Pop-up açılırken bir eylem tetikler |
| `close_action` | object | İsteğe bağlı | Bkz. [eylemler](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Pop-up kapanırken bir eylem tetikler |
| `show_header` | boolean | İsteğe bağlı | `true` (varsayılan) veya `false` | Pop-up başlığını tamamen gösterir/gizler |
| `show_previous_button` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Kapat düğmesinin yanında bir önceki düğmesi gösterir ve mevcut olduğunda önceki pop-up'a geri döner |
| `show_close_button` | boolean | İsteğe bağlı | `true` (varsayılan) veya `false` | Başlığın geri kalanını görünür tutarken kapat düğmesini gösterir veya gizler |
| `buttons_position` | string | İsteğe bağlı | `right` (varsayılan) veya `left` | Başlıktaki kapat ve önceki düğmelerin konumu |
| `cards` | list | İsteğe bağlı | Herhangi bir Bubble Card, Home Assistant kartı veya özel kart | Pop-up'ınızın içeriğini tanımlar. Aşağıdaki pop-up örneğine bakın. |
| Pop-up'ın başlığı için [tüm düğme ayarlarına](#düğme) de erişebilirsiniz. | | İsteğe bağlı | | Tanımlanmazsa hiçbir başlık gösterilmez |

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Değişken | Beklenen değer | Açıklama |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Pop-up için kenar yuvarlaklığı |
| `--bubble-pop-up-main-background-color` | `color` | Pop-up'ın desteklenen öğeleri için ana arka plan rengi |
| `--bubble-pop-up-background-color` | `color` | Pop-up'ın arka plan rengi |
| `--bubble-backdrop-background-color` | `color` | Arka plan perdesi için arka plan rengi |
| Pop-up'ın başlığı için [tüm düğme CSS değişkenlerine](#düğme-seçenekleri) de erişebilirsiniz. | | |

</details>


### Bağımsız pop-up biçimi (v3.2.0+)

v3.2.0'dan itibaren pop-up'lar, içerik kartlarının `cards` seçeneği kullanılarak doğrudan pop-up içinde tanımlandığı yeni bir bağımsız biçim kullanır. Bu, daha iyi performans ve bölüm tabanlı yeni bir sürükle-bırak düzenleme deneyimi sağlar.


#### Örnekler

<details>

<summary>Bir pop-up (bağımsız biçim)</summary>

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

<summary>Pop-up'ı açan bir düğme</summary>

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

## Yatay düğme yığını

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Bu kart, pop-up kartına iyi bir eşlik eder ve ilgili pop-up'ları açmanızı sağlar. Ayrıca panonuzun herhangi bir sayfasını açmanıza da olanak tanır. Buna ek olarak, hareket/doluluk sensörlerinizi ekleyerek düğmelerin sırasının az önce girdiğiniz odaya göre uyum sağlamasını sağlayabilirsiniz. Bu kart kaydırılabilir, her zaman görünür kalır ve bir footer gibi davranır.

> [!IMPORTANT]  
> Bu kart görünümünüzdeki son kart olmalıdır (her karttan ve pop-up'tan sonra). Herhangi bir yığının içinde olamaz.

### Yatay düğme yığını seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklamalar)</b></summary>

| Ad | Tür | Gereklilik | Desteklenen seçenekler | Açıklama |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Gerekli** | ' ' ile pop-up hash'i (ör. `'#kitchen'`) veya herhangi bir bağlantı | Açılacak bir bağlantı |
| `1_name` | string | İsteğe bağlı | Herhangi bir metin | Düğmeniz için bir ad |
| `1_icon` | string | İsteğe bağlı | Herhangi bir `mdi:` simgesi | Düğmeniz için bir simge |
| `1_entity` | string | İsteğe bağlı | Herhangi bir ışık veya ışık grubu | Arka planda o ışığın rengini gösterir |
| `1_pir_sensor` | string | İsteğe bağlı | Herhangi bir binary sensor | `auto_order` için en az bir pir sensörü veya daha fazlası; aslında herhangi bir varlık türüyle de çalışır, örneğin ışık grupları ekleyebilirsiniz ve sıra en son değişen durumlara göre değişir. |
| `auto_order` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Düğmelerin sırasını `_pir_sensor` son değişme zamanına göre değiştirir, **kodunuzda herhangi bir `_pir_sensor` yoksa `false` olması gerekir** |
| `margin` | string | İsteğe bağlı | Herhangi bir CSS değeri | Bunu **yalnızca** `horizontal-buttons-stack` mobilde iyi ortalanmamışsa kullanın (ör. `13px`) |
| `width_desktop` | string | İsteğe bağlı | Herhangi bir CSS değeri | Masaüstünde genişlik (mobilde varsayılan olarak `100%`) |
| `is_sidebar_hidden` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Masaüstünde kenar çubuğu gizliyse yatay düğme yığını konumunu düzeltir (yalnızca kendiniz gizlemek için bir değişiklik yaptıysanız) |
| `rise_animation` | boolean | İsteğe bağlı | `true` (varsayılan) veya `false` | Sayfa yüklendikten sonra devreye giren animasyonu devre dışı bırakmak için bunu `false` olarak ayarlayın |
| `highlight_current_view` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Mevcut hash / görünümü yumuşak bir animasyonla vurgular |
| `hide_gradient` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Degradeyi gizlemek için bunu `false` olarak ayarlayın |

> [!IMPORTANT]  
> Bir sayı ile başlayan değişkenler düğmelerinizi tanımlar, daha fazla düğme eklemek için bu sayıyı değiştirmeniz yeterlidir (aşağıdaki örneğe bakın).

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Değişken | Beklenen değer | Açıklama |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Yatay düğme yığını düğmeleri için kenar yuvarlaklığı |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Yatay düğme yığını düğmeleri için arka plan rengi |

</details>


#### Örnek

<details>

<summary>Doluluk sensörlerine göre kendini yeniden düzenleyen bir yatay düğme yığını</summary>

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

## Düğme

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Bu kart oldukça çok yönlüdür. Bir **anahtar**, bir **kaydırıcı**, bir **durum** veya bir **isim/metin** düğmesi olarak kullanılabilir.

> [!TIP]
> ### Tüm düğme türleri arasındaki farklar nelerdir?
>
> - **Anahtar düğmesi:** Bu, varsayılan düğme türüdür. Varsayılan olarak bir varlığı (entity) açıp kapatır ve arka plan rengi, varlığın durumuna veya bir ışığın rengine göre değişir. Eylemini **Karta dokunma eylemi** bölümünden değiştirebilirsiniz.
>
> - **Kaydırıcı düğmesi:** Bu düğme türü, ayarlanabilir aralıklara sahip varlıkları kontrol etmenizi sağlar. Işıkları kısmak için idealdir ve dolgu rengi ışığın rengine uyum sağlar. Ayrıca pil seviyesi gibi değerleri görüntülemek için de kullanılabilir.
>   Kaydırıcılar için desteklenen varlıklar:
>   - Işık (parlaklık)
>   - Medya oynatıcı (ses düzeyi)
>   - Panjur (konum)
>   - Fan (yüzde)
>   - İklim (sıcaklık)
>   - Input number ve number (değer)
>   - Pil sensörü (yüzde, salt okunur)
>
>   **Kaydırıcı ayarları** kısmında varlık filtresini devre dışı bırakarak sayısal bir duruma sahip herhangi bir varlığı da kullanabilir, ardından `min` ve `max` değerlerini tanımlayabilirsiniz. Bu seçenek salt okunurdur.
>
> - **Durum düğmesi:** Bir sensörden veya herhangi bir varlıktan bilgi görüntülemek için mükemmeldir. Üzerine bastığınızda varlığın "Daha fazla bilgi" panelini gösterir. Arka plan rengi değişmez.
>
> - **İsim/Metin düğmesi:** Bir varlığa ihtiyaç duymayan tek düğme türü. Kısa bir metin, isim veya başlık görüntülemenizi sağlar. Ona eylemler de ekleyebilirsiniz. Arka plan rengi değişmez.

### Düğme seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklamalar)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Kontrol edilecek bir varlık |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Düğmenizin davranışı |
| `name` | string | Optional | Any string | Düğmeniz için bir isim, tanımlanmazsa varlığın adı gösterilir |
| `icon` | string | Optional | Any `mdi:` icon | Düğmeniz için bir simge, tanımlanmazsa varlığın simgesi veya `entity-picture` gösterilir |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture` yerine simgeye öncelik ver |
| `use_accent_color` | boolean | Optional (`false` default) | **Yalnızca ışıklar için.** Işığın rengi yerine temanın vurgu rengini kullanın.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | `entity`nizin durumunu göster veya gizle |
| `show_name` | boolean | Optional | `true` (default) or `false` | İsmi göster veya gizle |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Simgeyi göster veya gizle |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | `entity`nizin son değişim zamanını göster |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | `entity`nizin son güncelleme zamanını göster |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | `entity`nizin bir özelliğini `name`inin altında göster |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Gösterilecek özellik (örn. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | İçerik, kapsayıcısının boyutunu aştığında metnin kaymasına izin ver |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Düğme tıklamasındaki varsayılan eylemleri değiştirmeye izin ver. |
| `tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye dokunma eyleminin türünü tanımlayın, tanımlanmazsa `more-info` kullanılır |
| `double_tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye çift dokunma eyleminin türünü tanımlayın, tanımlanmazsa `none` kullanılır |
| `hold_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye basılı tutma eyleminin türünü tanımlayın, tanımlanmazsa `more-info` kullanılır |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartın stil düzeni, bkz. [kart düzenleri](#kart-düzenleri) |
| `rows` | number | Optional | Any number | Satır sayısı (yükseklik) (örn. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#alt-düğmeler) | Sağa sabitlenmiş özelleştirilmiş düğmeler ekleyin |

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Düğmedeki desteklenen öğeler için ana arka plan rengi |
| `--bubble-button-border-radius` | `px` | Düğme için kenar yuvarlaklığı |
| `--bubble-button-icon-border-radius` | `px` | Düğme simgesi kapsayıcısı için kenar yuvarlaklığı |
| `--bubble-button-icon-background-color` | `color` | Düğme simgesi kapsayıcısı için arka plan rengi |
| `--bubble-light-white-color` | `color` | Işık düğmelerinin/kaydırıcılarının varsayılan beyaz rengini değiştirin |
| `--bubble-light-color` | `color` | Işık düğmelerinin/kaydırıcılarının rengini değiştirin (RGB ışıklar dahil) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Düğme için kutu gölgesi |

</details>

Bu seçenekler yalnızca `button_type`, `slider` olarak ayarlandığında kullanılabilir.

<details>

<summary><b>Kaydırıcı seçenekleri (YAML + açıklamalar)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Kaydırıcının minimum değeri. Özel kaydırıcılar için.                                                    |
| `max_value`             | number  | Optional                        | Kaydırıcının maksimum değeri. Özel kaydırıcılar için.                                                    |
| `step`                  | number  | Optional                        | Kaydırıcının adım değeri.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Kaydırıcıyı basılı tutmak yerine dokunarak etkinleştirdiğiniz önceki kaydırıcı davranışını etkinleştirin.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Değeri, başlangıç dokunma noktası yerine başlangıç değerine göre güncelleyin.                                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Kaydırıcıyı salt okunur yapın. Sensörler gibi bazı varlıklar için otomatik olarak etkinleştirilir.                                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Kaydırma sırasında varlık durumu güncellenir. **Bu özellik tüm varlıklar için önerilmez.**        |
| `slider_fill_orientation` | string | Optional | `left` (default), `right`, `top`, `bottom` | Kaydırıcının dolgu yönünü değiştirin |
| `slider_value_position` | string | Optional | `right` (default), `left`, `center`, `hidden` | Değer görüntüsünün konumu |
| `invert_slider_value` | boolean | Optional (`false` default) | Kaydırıcı yönünü tersine çevirin (%100 dolgu, minimuma eşittir). Renk kaydırıcıları için kullanılamaz. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Yalnızca ışıklar için.** Kaydırıcı modunu seçin |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Yalnızca panjurlar için.** Kaydırıcı modunu seçin (konum veya eğim) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Yalnızca ışıklar için (Hue modu).** Hue ayarlanırken doygunluğu zorla |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Yalnızca ışıklar için (Hue modu).** Zorlanan doygunluk değeri (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Yalnızca ışıklar için (Parlaklık modu).** Işığın rengi yerine temanın vurgu rengini kullan |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Yalnızca ışıklar için.** Kaydırıcının %0'a ulaşmasına izin verir, bu da ışığı kapatır. `tap_to_slide` ile kullanılamaz. |
| `light_transition`      | boolean | Optional (`false` default)      | **Yalnızca ışıklar için.** Desteklenen ışıklar için yumuşak parlaklık geçişlerini etkinleştirin.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Yalnızca ışıklar için.** Geçiş süresi (milisaniye). `light_transition: true` gerektirir.            |

</details>

#### Örnekler

<details>

<summary>Bir ışığın parlaklığını kontrol edebilen bir kaydırıcı düğme</summary>

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

<summary>Daha fazla seçeneğe sahip bir düğme</summary>

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

## Medya oynatıcı

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Bu kart, bir medya oynatıcı varlığını kontrol etmenizi sağlar.

### Medya oynatıcı seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklamalar)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Kontrol edilecek medya oynatıcı |
| `name` | string | Optional | Any string | Medya oynatıcınız için bir isim, tanımlanmazsa varlığın adı gösterilir |
| `icon` | string | Optional | Any `mdi:` icon | Medya oynatıcınız için bir simge, tanımlanmazsa varlığın simgesi veya `entity-picture` gösterilir |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture` yerine simgeye öncelik ver |
| `show_state` | boolean | Optional | `true` or `false` (default) | `entity`nizin durumunu göster veya gizle |
| `show_name` | boolean | Optional | `true` (default) or `false` | İsmi göster veya gizle |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Simgeyi göster veya gizle |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | `entity`nizin son değişim zamanını göster |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | `entity`nizin son güncelleme zamanını göster |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | `entity`nizin bir özelliğini `name`inin altında göster |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Gösterilecek özellik (örn. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | İçerik, kapsayıcısının boyutunu aştığında metnin kaymasına izin ver |
| `min_volume` | number | Optional | Any number | Ses düzeyi kaydırıcısının minimum değeri. |
| `max_volume` | number | Optional | Any number | Ses düzeyi kaydırıcısının maksimum değeri. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Kart arka planı olarak bulanıklaştırılmış bir medya kapağı kullanın. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Düğme tıklamasındaki varsayılan eylemleri değiştirmeye izin ver. |
| `tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye dokunma eyleminin türünü tanımlayın, tanımlanmazsa `more-info` kullanılır. |
| `double_tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye çift dokunma eyleminin türünü tanımlayın, tanımlanmazsa `none` kullanılır. |
| `hold_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye basılı tutma eyleminin türünü tanımlayın, tanımlanmazsa `more-info` kullanılır. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Kapak eylem düğmelerini en alta (sabit) taşıyın |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Alttaki eylem düğmelerini tam genişlikte yapın (varsayılan: konum `bottom` olduğunda `true`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Tam genişlikte olmadığında alttaki eylem düğmelerinin hizalanması |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartın stil düzeni, bkz. [kart düzenleri](#kart-düzenleri) |
| `rows` | number | Optional | Any number | Satır sayısı (yükseklik) (örn. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#alt-düğmeler) | Sağa sabitlenmiş özelleştirilmiş düğmeler ekleyin |
| `hide` | object | Optional | See below | Karttan düğmeleri gizle |

#### Gizleme seçenekleri

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Oynat/duraklat düğmesini gizle |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Ses düzeyi düğmesini gizle |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Önceki düğmesini gizle |
| `next_button` | boolean | Optional | `true` or `false` (default) | Sonraki düğmesini gizle |
| `power_button` | boolean | Optional | `true` or `false` (default) | Güç düğmesini gizle |

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Medya oynatıcı için ana arka plan rengi |
| `--bubble-media-player-border-radius` | `px` | Medya oynatıcı için kenar yuvarlaklığı |
| `--bubble-media-player-buttons-border-radius` | `px` | Medya oynatıcı düğmeleri için kenar yuvarlaklığı |
| `--bubble-media-player-slider-background-color` | `color` | Ses düzeyi kaydırıcısı için arka plan rengi |
| `--bubble-media-player-icon-border-radius` | `px` | Medya oynatıcı simgesi kapsayıcısı için kenar yuvarlaklığı |
| `--bubble-media-player-icon-background-color` | `color` | Medya oynatıcı simgesi kapsayıcısı için arka plan rengi |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Medya oynatıcı için kutu gölgesi |

</details>


#### Örnekler

<details>

<summary>Tüm seçeneklere sahip bir medya oynatıcı</summary>

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

## Panjur

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Bu kart, `cover` varlıklarınızı kontrol etmenizi sağlar.

### Panjur seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklamalar)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Kontrol edilecek bir panjur |
| `name` | string | Optional | Any string | Panjurunuz için bir isim, tanımlanmazsa varlığın adı gösterilir |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture` yerine simgeye öncelik ver |
| `show_state` | boolean | Optional | `true` or `false` (default) | `entity`nizin durumunu göster veya gizle |
| `show_name` | boolean | Optional | `true` (default) or `false` | İsmi göster veya gizle |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Simgeyi göster veya gizle |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | `entity`nizin son değişim zamanını göster |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | `entity`nizin son güncelleme zamanını göster |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | `entity`nizin bir özelliğini `name`inin altında göster |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Gösterilecek özellik (örn. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | İçerik, kapsayıcısının boyutunu aştığında metnin kaymasına izin ver |
| `icon_open` | string | Optional | Any `mdi:` icon | Açık panjurunuz için bir simge, tanımlanmazsa varsayılan açık panjur simgesi gösterilir |
| `icon_close` | string | Optional | Any `mdi:` icon | Kapalı panjurunuz için bir simge, tanımlanmazsa varsayılan kapalı panjur simgesi gösterilir |
| `icon_up` | string | Optional | Any `mdi:` icon | Açma düğmeniz için bir simge, tanımlanmazsa varsayılan açık panjur simgesi gösterilir |
| `icon_down` | string | Optional | Any `mdi:` icon | Kapama düğmeniz için bir simge, tanımlanmazsa varsayılan kapalı panjur simgesi gösterilir |
| `open_service` | string | Optional | Any service or script | Panjurunuzu açmak için bir servis, varsayılan `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Panjurunuzu durdurmak için bir servis, varsayılan `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Panjurunuzu kapatmak için bir servis, varsayılan `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Eğim kontrol düğmelerinin konumu (yalnızca panjur eğimi destekliyorsa gösterilir) |
| `open_tilt_service` | string | Optional | Any service or script | Eğimi açmak için bir servis, varsayılan `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Eğimi kapatmak için bir servis, varsayılan `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Düğme tıklamasındaki varsayılan eylemleri değiştirmeye izin ver. |
| `tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye dokunma eyleminin türünü tanımlayın, tanımlanmazsa `more-info` kullanılır. |
| `double_tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye çift dokunma eyleminin türünü tanımlayın, tanımlanmazsa `none` kullanılır. |
| `hold_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye basılı tutma eyleminin türünü tanımlayın, tanımlanmazsa `more-info` kullanılır. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Medya kontrollerini en alta (sabit) taşıyın |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Alttaki kontrolleri tam genişlikte yapın (varsayılan: konum `bottom` olduğunda `true`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Tam genişlikte olmadığında alttaki kontrollerin hizalanması |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartın stil düzeni, bkz. [kart düzenleri](#kart-düzenleri) |
| `rows` | number | Optional | Any number | Satır sayısı (yükseklik) (örn. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#alt-düğmeler) | Sağa sabitlenmiş özelleştirilmiş düğmeler ekleyin |

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Panjur kartındaki desteklenen öğeler için ana arka plan rengi |
| `--bubble-cover-border-radius` | `px` | Panjur kartı için kenar yuvarlaklığı |
| `--bubble-cover-icon-border-radius` | `px` | Panjur kartı simgesi kapsayıcısı için kenar yuvarlaklığı |
| `--bubble-cover-icon-background-color` | `color` | Panjur kartı simgesi kapsayıcısı için arka plan rengi |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Panjur kartı için kutu gölgesi |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Panjur kartındaki düğmeler için kutu gölgesi |

</details>


#### Örnek

<details>

<summary>Bir rulo perdeyi kontrol edebilen bir kart</summary>

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

## Seçim

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Bu kart, `input_select` / `select` varlıklarınız için bir açılır menü eklemenizi sağlar. Bu kart ayrıca alt düğmeleri ve tüm ortak Bubble Card özelliklerini destekler.

> [!TIP]
> İsterseniz seçim alt düğmelerine de sahip olabilirsiniz, bu özellik alt düğmeleri destekleyen tüm kartlarda mevcuttur.

### Seçim seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklamalar)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Kontrol edilecek bir varlık |
| `name` | string | Optional | Any string | Seçiminiz için bir isim, tanımlanmazsa varlığın adı gösterilir |
| `icon` | string | Optional | Any `mdi:` icon | Seçiminiz için bir simge, tanımlanmazsa varlığın simgesi veya `entity-picture` gösterilir |
| `force_icon` | boolean | Optional | `true` or `false` (default) | `entity-picture` yerine simgeye öncelik ver |
| `show_state` | boolean | Optional | `true` or `false` (default) | `entity`nizin durumunu göster veya gizle |
| `show_name` | boolean | Optional | `true` (default) or `false` | İsmi göster veya gizle |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Simgeyi göster veya gizle |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | `entity`nizin son değişim zamanını göster |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | `entity`nizin son güncelleme zamanını göster |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | `entity`nizin bir özelliğini `name`inin altında göster |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Gösterilecek özellik (örn. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | İçerik, kapsayıcısının boyutunu aştığında metnin kaymasına izin ver |
| `tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye dokunma eyleminin türünü tanımlayın, tanımlanmazsa `more-info` kullanılır. |
| `double_tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye çift dokunma eyleminin türünü tanımlayın, tanımlanmazsa `none` kullanılır. |
| `hold_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye basılı tutma eyleminin türünü tanımlayın, tanımlanmazsa `more-info` kullanılır. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartın stil düzeni, bkz. [kart düzenleri](#kart-düzenleri) |
| `rows` | number | Optional | Any number | Satır sayısı (yükseklik) (örn. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#alt-düğmeler) | Sağa sabitlenmiş özelleştirilmiş düğmeler ekleyin |

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Seçim kartındaki desteklenen öğeler için ana arka plan rengi |
| `--bubble-select-background-color` | `color` | Seçim kartı için arka plan rengi |
| `--bubble-select-list-border-radius` | `px` | Karttaki açılır menü için kenar yuvarlaklığı |
| `--bubble-select-list-item-accent-color` | `color` | Seçili öğe için vurgu rengi |
| `--bubble-select-list-background-color` | `color` | Karttaki açılır menü için arka plan rengi |
| `--bubble-select-list-width` | `px` | Karttaki açılır menünün genişliği |
| `--bubble-select-arrow-background-color` | `color` | Açılır menü oku için arka plan rengi |
| `--bubble-select-button-border-radius` | `px` | Seçim düğmesi için kenar yuvarlaklığı |
| `--bubble-select-border-radius` | `px` | Seçim kartı için kenar yuvarlaklığı |
| `--bubble-select-icon-border-radius` | `px` | Seçim kartı simgesi kapsayıcısı için kenar yuvarlaklığı |
| `--bubble-select-icon-background-color` | `color` | Seçim kartı simgesi kapsayıcısı için arka plan rengi |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Seçim kartı için kutu gölgesi |

</details>


#### Örnekler

<details>

<summary>Sahne listesi içeren bir seçim kartı</summary>

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

## İklim

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Bu kart, `climate` varlıklarınızı kontrol etmenizi sağlar.

> [!TIP]
> Mod seçim menüsü, kart oluşturulurken otomatik olarak eklenen bir [alt düğmedir](#alt-düğmeler). Ardından dilediğiniz gibi değiştirebilir veya kaldırabilirsiniz.

### İklim seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklamalar)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|--------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Kontrol edilecek varlık (örn. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Kart için özel bir isim. Tanımlanmazsa varlığın adı gösterilir.                                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Kart için özel bir simge. Tanımlanmazsa varlığın simgesi veya `entity-picture` kullanılır.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Simgeye `entity-picture` yerine öncelik verir.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | `entity`nin mevcut durumunu göster veya gizle.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Varlığın adını göster veya gizle.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Simgeyi göster veya gizle.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | `entity` tarafından destekleniyorsa düşük hedef sıcaklık kontrolünü gizler.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | `entity` tarafından destekleniyorsa yüksek hedef sıcaklık kontrolünü gizler.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | İklim varlığı AÇIK olduğunda sabit bir arka plan rengi uygular.                                                              |
| `step` | number | Optional | Any number | Sıcaklık adımı. |
| `min_temp` | number | Optional | Any number | Minimum sıcaklık. |
| `max_temp` | number | Optional | Any number | Maksimum sıcaklık. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Düğme tıklamasındaki varsayılan eylemleri değiştirmeye izin ver. |
| `tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye dokunma eyleminin türünü tanımlayın, tanımlanmazsa `more-info` kullanılır. |
| `double_tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye çift dokunma eyleminin türünü tanımlayın, tanımlanmazsa `none` kullanılır. |
| `hold_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Simgeye basılı tutma eyleminin türünü tanımlayın, tanımlanmazsa `more-info` kullanılır. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | İklim eylem düğmelerini en alta (sabit) taşıyın |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Alttaki eylem düğmelerini tam genişlikte yapın (varsayılan: konum `bottom` olduğunda `true`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Tam genişlikte olmadığında alttaki eylem düğmelerinin hizalanması |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartın stil düzeni, bkz. [kart düzenleri](#kart-düzenleri) |
| `rows` | number | Optional | Any number | Satır sayısı (yükseklik) (örn. `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#alt-düğmeler)                | Sağa sabitlenmiş özel düğmeler ekler. Bir iklim modu seçim menüsü için kullanışlıdır.                                  |

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | İklim kartındaki desteklenen öğeler için ana arka plan rengi |
| `--bubble-climate-border-radius` | `px` | İklim kartındaki desteklenen öğeler için kenar yuvarlaklığı |
| `--bubble-climate-button-background-color` | `color` | İklim kartı düğmeleri için arka plan rengi |
| `--bubble-climate-icon-border-radius` | `px` | İklim kartı simgesi kapsayıcısı için kenar yuvarlaklığı |
| `--bubble-state-climate-fan-only-color` | `color` | Yalnızca fan durumu için kaplama rengi |
| `--bubble-state-climate-dry-color` | `color` | Kurutma durumu için kaplama rengi |
| `--bubble-state-climate-cool-color` | `color` | Soğutma durumu için kaplama rengi |
| `--bubble-state-climate-heat-color` | `color` | Isıtma durumu için kaplama rengi |
| `--bubble-state-climate-auto-color` | `color` | Otomatik durum için kaplama rengi |
| `--bubble-state-climate-heat-cool-color` | `color` | Isıtma-soğutma durumu için kaplama rengi |
| `--bubble-climate-accent-color` | `color` | İklim kartı için vurgu rengi |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | İklim kapsayıcısı için kutu gölgesi. |

</details>


#### Örnekler

<details>

<summary>HVAC modları açılır menüsüne sahip bir iklim kartı</summary>

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

## Takvim

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Bu kart, takvim varlıklarınızı görüntülemenizi sağlar. İçeriği kaydırılabilir olduğundan yaklaşan etkinliklere kolayca göz atabilirsiniz.

### Takvim seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklamalar)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Etkinliklerin getirileceği takvim günü sayısı, şu andan Nnci günün sonuna kadar (varsayılan: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Kontrol edilecek varlık (örn. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Görüntülenecek takvim varlığı                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Takvim etiketi için özel bir renk. Tanımlanmazsa otomatik bir renk seçilir |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Etkinliklerin getirileceği takvim günü sayısı, şu andan Nnci günün sonuna kadar (varsayılan: 7) |
| `limit`             | number  | Optional     | A number                                        | Kartta görüntülenecek etkinlik sayısı                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Etkinlikler için bitiş saatini göster veya gizle                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Etkinlik ilerleme çubuğunu göster veya gizle                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Şu anda devam etmekte olan etkinlikleri göster veya gizle                                                 |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | İçerik, kapsayıcısının boyutunu aştığında metnin kaymasına izin ver |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Etkinliğe tıklama eylemleri eklemeye izin ver. |
| `tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Güne dokunma eyleminin türünü tanımlayın, tanımlanmazsa `none` kullanılır. |
| `double_tap_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Güne çift dokunma eyleminin türünü tanımlayın, tanımlanmazsa `none` kullanılır. |
| `hold_action` | object | Optional | See [actions](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Güne basılı tutma eyleminin türünü tanımlayın, tanımlanmazsa `none` kullanılır. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Kartın stil düzeni, bkz. [kart düzenleri](#kart-düzenleri) |
| `rows` | number | Optional | Any number | Satır sayısı (yükseklik) (örn. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#alt-düğmeler) | Sağa sabitlenmiş özelleştirilmiş düğmeler ekleyin |

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Takvim kartındaki desteklenen öğeler için ana arka plan rengi  |
| `--bubble-calendar-border-radius`         | `px`           | Takvim kartındaki desteklenen öğeler için kenar yuvarlaklığı |
| `--bubble-calendar-height`                | `px`           | Takvim kartı için yükseklik                                        |

</details>

#### Örnekler

<details>

<summary>Sınırlı sayıda etkinlik içeren bir takvim kartı</summary>

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

<summary>Bitiş saati ve ilerleme çubuğu içeren bir takvim kartı</summary>

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


## Ayırıcı

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Bu kart, pop-up'ınızı kategorilere/bölümlere ayırmak için basit bir ayırıcıdır. Örneğin: Işıklar, Cihazlar, Panjurlar, Ayarlar, Otomasyonlar...

### Ayırıcı seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklamalar)</b></summary>

| Ad | Tür | Gereklilik | Desteklenen seçenekler | Açıklama |
| --- | --- | --- | --- | --- |
| `name` | string | İsteğe bağlı ama önerilir | Herhangi bir string | Ayırıcınız için bir ad |
| `icon` | string | İsteğe bağlı ama önerilir | Herhangi bir `mdi:` simgesi | Ayırıcınız için bir simge |
| `card_layout` | string | İsteğe bağlı | `normal` (bölüm görünümünde değilse varsayılan), `large` (bölüm görünümündeyse varsayılan), `large-2-rows`, `large-sub-buttons-grid` | Kartın stil düzeni, bkz. [kart düzenleri](#kart-düzenleri) |
| `rows` | number | İsteğe bağlı | Herhangi bir sayı | Satır sayısı (yükseklik) (örn. `2`) |
| `sub_button` | object | İsteğe bağlı | Bkz. [alt düğmeler](#alt-düğmeler) | Sağa sabitlenmiş özelleştirilmiş düğmeler ekleyin |

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Değişken | Beklenen değer | Açıklama |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Ayırıcıdaki çizginin arka plan rengi |

</details>

#### Örnek

<details>

<summary>Bir "Panjurlar" bölümü için ayırıcı/bölücü</summary>

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

## Boş sütun

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Bu kart, boş bir sütunu doldurmak için buradadır. Bu, pop-up'ınızda yalnızca tek bir kartın bulunduğu bir `horizontal-stack` varsa faydalıdır. Bu ekran görüntüsünün sağ alt köşesine bakarak onu (görmediğinizi) fark edin.

### Boş sütun seçenekleri

Bu kartın seçeneği yoktur ve [stil](#stil) desteklemez, ancak HA bölümleri için düzen seçeneklerini destekler.

#### Örnek

<details>

<summary>Yatay bir yığında boş bir sütun</summary>

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

## Yalnızca alt düğmeler

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Bu kart yalnızca alt düğmelere adanmıştır. Menüler, hızlı eylemler, bilgilendirici çipler veya sayfanın altında sabit bir altbilgi için mükemmeldir.

> [!IMPORTANT]  
> Bu kart yeni alt düğme şemasını kullanır. Düğmelerinizi tanımlamak için `sub_button.bottom` kullanın. `sub_button.main` bölümü göz ardı edilir.

### Yalnızca alt düğmeler seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklamalar)</b></summary>

| Ad | Tür | Gereklilik | Desteklenen seçenekler | Açıklama |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Zorunlu** | Bkz. [alt düğmeler](#alt-düğmeler) | `bottom` bölümünü kullanarak alt düğmelerinizi tanımlayın |
| `hide_main_background` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Kart arka planını kaldır |
| `footer_mode` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Kartı sayfanın altına sabitle |
| `footer_full_width` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Altbilgiyi tam genişlikte (%100) yap |
| `footer_width` | number | İsteğe bağlı | Herhangi bir sayı | `footer_full_width` `false` olduğunda altbilgi genişliği (piksel) |
| `footer_bottom_offset` | number | İsteğe bağlı | Herhangi bir sayı | Sayfanın altından piksel cinsinden mesafe (varsayılan: `16`) |
| `card_layout` | string | İsteğe bağlı | `normal` (bölüm görünümünde değilse varsayılan), `large` (bölüm görünümündeyse varsayılan), `large-2-rows`, `large-sub-buttons-grid` | Kartın stil düzeni, bkz. [kart düzenleri](#kart-düzenleri) |
| `rows` | number | İsteğe bağlı | Herhangi bir sayı | Satır sayısı (yükseklik) (örn. `2`) |

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Değişken | Beklenen değer | Açıklama |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | `footer_full_width` `false` olduğunda altbilgi genişliği |
| `--bubble-footer-bottom` | `px` | Altbilgi alt mesafesi |
| `--bubble-footer-box-shadow` | bkz. [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Altbilgi konteyneri için kutu gölgesi |

</details>

#### Örnekler

<details>

<summary>Çipler (ekran görüntüsündeki gibi)</summary>

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

<summary>Sabit bir altbilgi menüsü</summary>

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

## Alt düğmeler

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Bu seçeneği destekleyen her kartta, kartlarınızı daha da özelleştirmek için alt düğmeler ekleyebilirsiniz. Örneğin bir robot süpürgeyi, bir hava durumu kartını veya aklınıza gelebilecek hemen hemen her şeyi kontrol eden bir düğme oluşturabilirsiniz. Bu alt düğmeler, dokunma eylemlerini ve çoğu düğme seçeneğini destekler.

Alt düğmeler artık üç türü destekliyor: **Varsayılan (düğme)**, **Kaydırıcı** ve **Açılır liste / Seçim**. Aynı kartta türleri karıştırabilir, alt düğmeleri üstte veya altta yerleştirebilir ve daha gelişmiş düzenler için gruplara ayırabilirsiniz.

#### Alt düğme yerleşimi ve gruplar

<details>

<summary><b>Alt düğme yapısı (main / bottom + gruplar)</b></summary>

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

**Notlar:**
- `main` ve `bottom` iki bağımsız bölümdür. Alt (bottom) alt düğmeler kartın altına sabitlenir.
- `main_layout` ve `bottom_layout`, grupları dikey olarak yığmak için `inline` (varsayılan) veya `rows` değerini kabul eder.
- Gruplar, bir `group` dizisi ve isteğe bağlı `buttons_layout` (`inline` veya `column`) içeren nesnelerdir.
- `justify_content` yalnızca **alt (bottom) gruplar için** kullanılabilir (`start`, `center`, `end`, `fill`).
- Alt (bottom) alt düğmeler mevcut olduğunda, siz açıkça başka bir düzen belirlemediğiniz sürece kart düzeni otomatik olarak `large`'a geçer.
- Eski `sub_button` dizileri hâlâ desteklenir ve `main` bölümü olarak ele alınır.

</details>

### Alt düğme seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklama)</b></summary>

| Ad | Tür | Gereklilik | Desteklenen seçenekler | Açıklama |
| --- | --- | --- | --- | --- |
| `entity` | string | İsteğe bağlı | Herhangi bir varlık | Kontrol edilecek bir varlık |
| `name` | string | İsteğe bağlı | Herhangi bir string | Alt düğmeniz için bir ad, tanımlanmazsa varlık adı gösterilir |
| `icon` | string | İsteğe bağlı | Herhangi bir `mdi:` simgesi | Alt düğmeniz için bir simge, tanımlanmazsa varlık simgesi veya varlık resmi gösterilir |
| `force_icon` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Bir varlık resmi mevcut olsa bile simgeyi zorla göster |
| `sub_button_type` | string | İsteğe bağlı | `default`, `slider` veya `select` | Alt düğme türünü seçin |
| `show_background` | boolean | İsteğe bağlı | `true` (varsayılan) veya `false` | Alt düğmeniz için bir arka plan göster, varlık durumunuza göre rengi değişir |
| `state_background` | boolean | İsteğe bağlı | `true` (varsayılan) veya `false` | Varlık `on` olduğunda durum rengini kullan |
| `light_background` | boolean | İsteğe bağlı | `true` (varsayılan) veya `false` | Mevcut olduğunda arka plan için ışık rengini kullan |
| `show_state` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | `entity` durumunuzu göster veya gizle |
| `show_name` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Adı göster veya gizle |
| `show_icon` | boolean | İsteğe bağlı | `true` (varsayılan) veya `false` | Simgeyi göster veya gizle |
| `show_last_changed` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | `entity` varlığınızın son değişim zamanını göster |
| `show_last_updated` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | `entity` varlığınızın son güncellenme zamanını göster |
| `show_attribute` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | `entity` varlığınızın bir özniteliğini `name` altında göster |
| `attribute` | string | İsteğe bağlı (`show_attribute` `true` olarak ayarlandıysa zorunlu) | `entity` varlığınızdan bir öznitelik | Gösterilecek öznitelik (örn. `brightness`) |
| `select_attribute` | string | İsteğe bağlı | `entity` varlığınızdan bir öznitelik listesi (yukarıdaki desteklenen seçeneklere bakın) | Bu öznitelik listesi tıklanınca bir açılır liste açar (örn. `effect_list`) |
| `show_arrow` | boolean | İsteğe bağlı | `true` (varsayılan) veya `false` | Seçim alt düğmeleri için açılır liste okunu göster veya gizle |
| `scrolling_effect` | boolean | İsteğe bağlı | `true` (varsayılan) veya `false` | İçerik konteynerin boyutunu aştığında metnin kaymasına izin ver |
| `tap_action` | object | İsteğe bağlı | Bkz. [eylemler](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Alt düğmeye tıklandığında eylem türünü tanımlar, tanımlanmazsa `more-info` kullanılır. |
| `double_tap_action` | object | İsteğe bağlı | Bkz. [eylemler](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Alt düğmeye çift tıklandığında eylem türünü tanımlar, tanımlanmazsa `none` kullanılır. |
| `hold_action` | object | İsteğe bağlı | Bkz. [eylemler](#dokunma-çift-dokunma-ve-basılı-tutma-eylemleri) | Alt düğme basılı tutulduğunda eylem türünü tanımlar, tanımlanmazsa `more-info` kullanılır. |
| `fill_width` | boolean | İsteğe bağlı | `true` veya `false` | Mevcut genişliği doldur (varsayılan: main için `false`, bottom için `true`) |
| `width` | number veya string | İsteğe bağlı | Herhangi bir sayı veya CSS uzunluğu | Özel genişlik (varsayılan olarak main bölümü için `px`, bottom bölümü için `%`) |
| `custom_height` | number | İsteğe bağlı | Herhangi bir sayı | Piksel cinsinden özel yükseklik |
| `content_layout` | string | İsteğe bağlı | `icon-left` (varsayılan), `icon-top`, `icon-bottom`, `icon-right` | Alt düğme içinde simge yerleşimi |
| `always_visible` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | **Yalnızca kaydırıcı.** Kaydırıcıyı dokununca açmak yerine her zaman göster |
| `show_button_info` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | **Yalnızca kaydırıcı.** `always_visible` etkinken simge/ad/durumu göster |
| `visibility` | object veya list | İsteğe bağlı | Bkz. [koşullar](https://www.home-assistant.io/docs/scripts/conditions/) | Koşullara göre alt düğmeyi göster veya gizle |
| `hide_when_parent_unavailable` | boolean | İsteğe bağlı | `true` veya `false` (varsayılan) | Üst kart varlığı kullanılamıyorsa alt düğmeyi gizle |

</details>

<details>

<summary><b>Kaydırıcı alt düğme seçenekleri (düğme kaydırıcılarıyla aynı)</b></summary>

<br>

Kaydırıcı alt düğmeleri, düğme kaydırıcılarıyla aynı kaydırıcı seçeneklerini destekler, bunlar arasında:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>CSS değişkenleri (bkz. <a href="#stil">Stil</a>)</b></summary>

| Değişken | Beklenen değer | Açıklama |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Alt düğmeler için kenar yuvarlaklığı |
| `--bubble-sub-button-background-color` | `color` | Alt düğmeler için arka plan rengi |
| `--bubble-sub-slider-border-radius` | `px` | Kaydırıcı alt düğmeler için kenar yuvarlaklığı |
| `--bubble-sub-slider-background-color` | `color` | Kaydırıcı alt düğmeler için arka plan rengi |
| `--bubble-sub-slider-height` | `px` | Her zaman görünür kaydırıcı alt düğmeler için yükseklik |
| `--bubble-sub-button-dark-text-color` | `color` | Parlak alt düğme arka planlarında metin rengi |

</details>

#### Örnekler

<details>

<summary>Robot süpürge kartı yapmak için bazı alt düğmeleri olan bir düğme (ekran görüntüsündeki gibi)</summary>

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

<summary>Parlaklığı gösteren bir alt düğme ve ışığı açıp kapatan bir alt düğme içeren bir düğme kaydırıcısı (ekran görüntüsündeki gibi)</summary>

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

<summary>İç ve dış sıcaklığı, bugün ve yarın için hava durumuyla birlikte gösteren bir düğme (ekran görüntüsü dahil)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Benim için kötü şans, hava sürekli bulutlu ama tüm simgeler hava durumuna göre değişiyor.

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

## Kart düzenleri

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card, Home Assistant bölüm görünümünü tamamen destekler, kartı büyütmek için kart düzenini değiştirebilir ve ayrıca kartın bölüm görünümünüzde kaplaması gereken sütun veya satır sayısını değiştirebilirsiniz (yalnızca bu seçeneği destekleyen kartlarda). Bu düzenler, diğer tüm görünüm türlerinde de desteklenir.

<details>

<summary><b>Kullanılabilir kart düzenleri</b></summary>

| Düzen | Açıklama |
| --- | --- |
| `normal` | Normal düzen (bölüm görünümü için optimize edilmemiştir) |
| `large` | Bölüm görünümünde seçilen satırlara göre yeniden boyutlanan daha büyük bir düzen (bölüm görünümü için optimize edilmiştir) |
| `large-2-rows` | 2 satır alt düğmeye sahip, bölüm görünümünde seçilen satırlara göre yeniden boyutlanan daha büyük bir düzen (bölüm görünümü için optimize edilmiştir) |
| `large-sub-buttons-grid` | Bu düzen alt düğmeleri bir ızgarada gösterir, `rows` en az `2` olarak ayarlanmalıdır.

</details>

#### Örnekler

<details>

<summary>2 satır alt düğmeyle enerji istatistiklerini gösteren büyük bir düğme (ekran görüntüsü dahil)</summary>

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

<summary>12 alt düğmesi olan, birden çok satırlı büyük bir düğme</summary>

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

## Dokunma, çift dokunma ve basılı tutma eylemleri

Bu seçeneği destekleyen kartlarda Home Assistant'ın varsayılan dokunma eylemlerini, çift dokunma eylemlerini ve basılı tutma eylemlerini de kullanabilirsiniz. Örneğin bu, bir düğme simgesini basılı tutarak "daha fazla bilgi" penceresini görüntülemenizi veya bir alt düğmeye basıldığında bir hizmeti çalıştırmanızı sağlar.

**Not: Bir `double_tap_action` yapılandırıldığında, çift dokunmanın algılanabilmesi için normal `tap_action` 200ms gecikmeli çalışır.
Bu gecikme istenmiyorsa, çift dokunma işlemesini devre dışı bırakmak için `double_tap_action`'ı `none` olarak ayarlayın.**

### Eylem seçenekleri

<details>

<summary><b>Seçenekler (YAML + açıklama)</b></summary>

| Ad | Tür | Desteklenen seçenekler | Açıklama |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Gerçekleştirilecek eylem |
| `target` | object |  | Yalnızca `call-service` ile çalışır. [home-assistant sözdizimini](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) takip eder |
| `navigation_path` | string | Panonuzun herhangi bir yolu | Eylem navigate olarak tanımlandığında gidilecek yol (örn. bir pop-up açmak için `'#kitchen'`) |
| `url_path` | string | Herhangi bir bağlantı | `action` `url` olduğunda tıklamada açılacak URL (örn. `https://www.google.com`) |
| `service` | string | Herhangi bir hizmet | `action`, `call-service` olarak tanımlandığında çağrılacak hizmet (örn. `media_player.media_play_pause`) |
| `data` veya `service_data` | object | Herhangi bir hizmet verisi | `action`, `call-service` olarak tanımlandığında dahil edilecek hizmet verisi (örn. `entity_id: media_player.kitchen`) |
| `confirmation` | object | Bkz. [confirmation](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Bir onay penceresi göster (Bubble Card'a ait olmayan bir tane), varsayılan `confirmation` nesnesini geçersiz kılar |

</details>

#### Örnek

<details>

<summary>Bir pop-up açan bir düğme</summary>

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

## Stil

Kartların tamamının CSS'ini **card-mod kullanmadan** değiştirmek için dört yol vardır:

- Editörde değiştirmek istediğiniz karta gidin, ardından _Stil seçenekleri > Özel stiller ve JS şablonları_ kısmına geçin ve özel stillerinizi ekleyin (aşağıdaki ipuçlarına ve örneklere bakın).
- Editörde (veya [YAML](#modüller) içinde) değiştirmek istediğiniz karta gidin, ardından _Modüller_ kısmına geçin, yeni bir modül oluşturun (bu modül tüm kartlarda kullanılabilir olacaktır) veya mevcut bir Modülü kurmak için **Module Store**'a gidin (modüller hakkında daha fazla ayrıntı [aşağıda](#modüller) bulunur).
- Bir [tema](https://www.home-assistant.io/integrations/frontend/#defining-themes) dosyasında YAML içinde CSS değişkenleri ekleyerek (bunlar yukarıdaki her kartın belgelerinde bulunur). Bu, genel değişiklikler yapmanızı sağlar.

  <details>
  
  <summary>Örnek</a></summary>
  
  <br>

  `Bubble:` satırını kopyalamayın, bu kullandığınız temanın adıdır. Ayrıca değişkenlerin başındaki `--` ön ekini de kaldırmanız gerekir.

  Herhangi bir değişiklikten sonra temayı yenilemek için [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) eylemini çalıştırmanız gerekir.

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
  
- YAML içinde `styles: |` ekleyip ardından özel stillerinizi yazarak (aşağıdaki ipuçlarına ve örneklere bakın).

> [!TIP]  
> **Hangi stil sınıflarının değiştirilebileceğini anlamak için**, bu depodaki [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) klasörüne göz atabilirsiniz. Her kart klasöründe `styles.css` adında bir dosya bulacaksınız. Bu dosyalar uygulanan tüm stilleri içerir. Bu, CSS değişkenlerinden çok daha fazla olasılık sunar ama her karta ayrı ayrı eklenmesi gerekir.
> 
> Ayrıca biraz arama yaparak [topluluktan bir sürü örnek](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) veya [Home Assistant forumundan](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) bazı örnekler bulabilirsiniz.
>
> Home Assistant için Bubble teması (ekran görüntülerindeki gibi) [burada](https://github.com/Clooos/Bubble) bulunabilir.
>
> Yakında [YouTube kanalımda](https://www.youtube.com/@cloooos) bir eğitim videosu yayınlanacak!

> [!IMPORTANT]  
> Zaten tanımlanmış bazı CSS stillerine `!important;` eklemeniz gerekebileceğini lütfen unutmayın (aşağıdaki örneklere bakın).

> [!TIP]  
> Alt düğmeler isim tabanlı sınıflarla hedeflenebilir. Örneğin "My sub-button" adlı bir alt düğme `.my-sub-button` ile stillendirilebilir. Kaydırıcı alt düğmeleri de `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` gibi sınıfları sunar.

#### Örnekler

<details>

<summary>Herhangi bir Bubble Card'ın yazı boyutunu değiştirme</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Yatay düğme yığınındaki tek bir düğmenin arka plan rengini değiştirme</summary>

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

<summary>Bir kartın arka plan rengini değiştirme</summary>

<br>

Bu, pop-uplar hariç tüm Bubble Card türlerinde çalışır:

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Bu da aynı şeyi yalnızca bir düğme kartında yapar (pop-up başlığı için de çalışır): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

`on` durumundayken rengini değiştirmek için aşağıdaki stil şablonlarına göz atın.

</details>

<details>

<summary>Bir düğme kaydırıcısının rengini değiştirme</summary>

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

<summary>Bir ayırıcının çizgi rengini değiştirme</summary>

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

<summary>Bir simgenin rengini değiştirme</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Yatay düğme yığınındaki bir simge için.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Bir simge kabının arka plan rengini değiştirme</summary>

<br>

Bu, pop-uplar hariç tüm Bubble Card türlerinde çalışır:

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Bu da aynı şeyi pop-up başlığı için yapar: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Alt düğmelerin boyutunu değiştirme (large düzen için ideal)</summary>

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

<summary>İkinci alt düğmenin arka plan rengini değiştirme</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Bir simgenin boyutunu değiştirme</summary>

<br>

Ana simge için.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Alt düğme simgeleri için.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Bir alt düğmede simge yerine bir resim kullanma</summary>

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

Bu resmi Home Assistant "www" klasörünün içindeki "pictures" adlı bir klasöre (veya istediğiniz bir isimle) yükleyin.

</details>

<details>

<summary>Gelişmiş örnek: Yatay bir alt düğme sırası oluşturma (ekran görüntülü)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Bunu gerçekten çok seviyorum, kendi panomda başlık olarak kullanıyorum.

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

## Şablonlar

**Bubble Card, Jinja şablonlarını desteklemez** ama ileri düzey kullanıcılar [özel stillerine](#stil) doğrudan JS içinde şablonlar ekleyebilir. Örneğin bu, bir simgeyi, metinleri veya bir öğenin renklerini dinamik olarak değiştirmenizi, bir durum, bir öznitelik veya başka bir şeye göre bir öğeyi (bir alt düğme gibi) koşullu olarak göstermenizi veya gizlemenizi ya da hemen hemen her şeyi yapmanızı sağlar.

> [!TIP]  
> JS şablonları hakkında daha fazla bilgiyi [burada](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) bulabilirsiniz. Tavsiyem, her şeyin doğru çalıştığından emin olmak için **her zaman tarayıcı konsolunuza bakmanızdır**.

> [!IMPORTANT]  
> **Bir CSS özelliğini değiştirmeyen tüm şablonlar en sona yerleştirilmelidir! Bir simgeyi, bir metni veya herhangi bir öğeyi değiştirmek gibi.**

#### Kullanılabilir değişkenler ve fonksiyonlar

<details>

<summary>Değişkenler</summary>

<br>

Çoğu kartta şu değişkenlere erişebilirsiniz:

- `state`, tanımladığınız `entity`'nin durumunu döndürür.
  
- `entity`, bu örnekte `switch.test` gibi tanımladığınız entity'yi döndürür.
  
- `icon`, simgeyi değiştirmek için şu şekilde kullanılabilir: `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]`, ilk alt düğmenizin tanımlı `entity`'sinin durumunu döndürür, `[0]` ilk alt düğme durumudur, `[1]` ikincisi...
  
- `subButtonIcon[0]`, ilk alt düğme simgesini değiştirmek için şu şekilde kullanılabilir: `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` ilk alt düğme simgesidir, `[1]` ikincisi...
  
- `card`, DOM'daki kart öğesini döndürür.
  
- `hass`, size daha fazla kontrol sağlayan gelişmiş bir değişkendir, örneğin `light.kitchen` durumunu şu şekilde döndürebilirsiniz: `hass.states['light.kitchen'].state` veya bir özniteliği şu şekilde: `hass.states[entity].attributes.brightness`.

- `this`, kurulumunuz ve panonuz hakkında birçok yararlı bilgi döndürür, bunu yalnızca ne yaptığınızı biliyorsanız kullanın.

</details>

<details>

<summary>Fonksiyonlar</summary>

<br>

Tüm genel JS fonksiyonlarına erişiminiz vardır, ama ayrıca şunlara da erişiminiz vardır:

- `getWeatherIcon`, hava durumunu döndüren bir duruma göre bir hava durumu simgesi döndürmek için kullanılabilir. Örneğin, üçüncü alt düğme simgesini bugünün hava durumu simgesine değiştirmek için şunu yapabilirsiniz: `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, `.forecast[1]?.condition` yarın için...

  Bunun için bir şablon sensörü oluşturmanız gerekecek. `configuration.yaml` dosyanıza ekleyebilecekleriniz şunlardır:
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
- `hass.formatEntityState(state)`, bir durumu çevirmek için kullanılabilir (manuel olarak eklemenize gerek kalmadan bir durum birimi almak için de kullanılabilir).
- `hass.formatEntityAttributeValue(state, "attribute")`, bir özniteliği çevirmek için kullanılabilir (manuel olarak eklemenize gerek kalmadan bir durum birimi almak için de kullanılabilir).

</details>

#### Örnekler

Aşağıda birçok örnek bulabilirsiniz, ama [Patreon sayfamda](https://www.patreon.com/c/Clooos) kartın simgelerinin etrafına yerleştirilmiş en fazla dört koşullu rozete izin veren (favorim) çok daha gelişmiş şablonlar da bulabilirsiniz. Bu, Bubble Card'ın özel stillerinin ve şablonlarının tüm olanaklarını öğrenmek için de harika bir yoldur!

<details>
<summary>Patreon sayfamdan örnekler</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Herhangi bir karta Home Assistant tarzı rozetler ekleme</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Herhangi bir entity kullanmadan bir ayırıcıda biçimlendirilmiş tarih ve saat gösterme</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Bir alt düğme durumunu iki satırda gösterme</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Bir seçim alt düğmesindeki etiketleri ve simgeleri özelleştirme</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Yalnızca gerektiğinde görünen kalıcı bir hatırlatma pop-up'ı ekleme</a>
</p>

<br>

</details>

<details>

<summary><code>off</code> durumundayken kırmızı, <code>on</code> durumundayken mavi olan bir düğmenin arka plan rengini değiştirme</summary>

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

<summary>Yatay düğme yığını için bir entity'ye göre bir düğmenin arka plan rengini değiştirme</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Bir alt düğmeyi koşullu olarak gösterme/gizleme</summary>

<br>

Bu, ilk alt düğmeyi yalnızca robot süpürgem sıkıştığında gösterir.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Bu, pil seviyesi %10'un altındayken bir alt düğmeyi gösterir. "Low battery" gösteren bir alt düğmeyle kullanışlıdır.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Bir simgeyi veya alt düğme simgesini koşullu olarak değiştirme</summary>

<br>

Bu, bir düğme simgesini yalnızca bir robot süpürge sıkıştığında değiştirir.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Bu, ilk alt düğme simgesini yalnızca bir robot süpürge sıkıştığında değiştirir.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Bir simgenin veya alt düğme simgesinin rengini koşullu olarak değiştirme</summary>

<br>

Bu, bir düğme simgesinin rengini durumuna göre değiştirir.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Bu, bir alt düğme simgesinin rengini durumuna göre değiştirir. `.bubble-sub-button-1` ilk alt düğmedir, başka bir alt düğme simgesini değiştirmek isterseniz `1` sayısını değiştirin.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Bir fan simgesini koşullu olarak animasyonlu hale getirme</summary>

<br>

Bu, bir fan `on` olduğunda bir düğme simgesini döndürür.
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

<summary>Metinleri şablonlaştırma (isim veya durum gibi)</summary>

<br>

Bu, bir düğmenin isim/durumunu hava durumunuza göre "It's currently sunny" ile değiştirir.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
veya alt düğmelere uygulandığında:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Durumu (`.bubble-state`) şablonlaştırmak istiyorsanız `show_state: true` seçeneğini değil, herhangi bir öznitelik olmadan sadece `show_attribute: true` seçeneğini açın.

</details>

<details>

<summary>Gelişmiş örnek: Bir pop-up açıkken bir alt düğmenin rengini değiştirme</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Gelişmiş örnek: Bir ayırıcı ismini kendi dilinize çevrilmiş bir duruma göre şablonlaştırma</summary>

<br>

Bir durumu çevirmek için `hass.formatEntityState(state)`, bir özniteliği çevirmek için `hass.formatEntityAttributeValue(state, "attribute")` kullanabilirsiniz.

Bu, ismi ve simgeyi hava durumuna göre değiştirir, "Nuageux" Fransızcada "Cloudy" (bulutlu) anlamına gelir.

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

## Modüller

Modüller, özel stillerinizi ve şablonlarınızı tüm Bubble Card'larınızda kaydetmenizi, yeniden kullanmanızı ve paylaşmanızı sağlayan güçlü bir özelliktir. Aynı kodu birden fazla karta kopyalayıp yapıştırmak yerine bir Modül oluşturabilir ve ihtiyaç duyduğunuz her yerde uygulayabilirsiniz. Bu, panonuzun görünümünü ve hissini yönetmeyi çok daha kolay ve verimli hale getirir.

Ama bu özellik bundan çok daha güçlüdür, Bubble Card editöründe tüm varsayılan [Home Assistant form](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) seçeneklerini kullanarak kendi başınıza gerçek özellikler eklemenizi sağlar!  
Nesne seçici, canlı değişiklikleri göstermek ve öznitelikleri doğru şekilde desteklemek için geliştirildi.

Ayrıca [topluluk tarafından oluşturulan modülleri](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) bulup kurmak için **Module Store**'a göz atabilir veya kendi çalışmalarınızı paylaşabilirsiniz!

> [!TIP]
> Bir Modülün kodu, tam olarak bir kartın `styles` bölümündeki kod gibi çalışır. [Şablonlar](#şablonlar) bölümündeki tüm aynı değişkenler ve fonksiyonlar burada da kullanılabilir.

<br>

### İlk kurulum

> [!IMPORTANT]
> v3.1.0 sürümünden itibaren, modüller için önerilen depolama arka ucu Bubble Card Tools'dur. Eski şablon sensör yöntemi mevcut kurulumlar için hâlâ çalışır, ama yeni modüller ve Module Store özellikleri en iyi şekilde Bubble Card Tools üzerinden desteklenir.

Bubble Card Tools entegrasyonu, Module Editor ve Module Store'u etkinleştirir ve modülleri ayrı YAML dosyaları olarak saklar. Mevcut modüller otomatik olarak taşınır.

Kurulum ve yapılandırma adımları burada açıklanmıştır:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Module Editor

Module Editor'a herhangi bir kartın ayarlarından, **Modüller** bölümü altından erişebilirsiniz. Editör iki ana sekme sunar:

#### My Modules sekmesi

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Bu sekme kurulu tüm modüllerinizi gösterir ve şunları yapmanızı sağlar:

- Mevcut modülleri geçerli karta **Uygulama**
- Sıfırdan yeni bir modül **Oluşturma**
- Mevcut modülleri canlı önizlemeyle **Düzenleme**
- Artık ihtiyacınız olmayan modülleri **Silme**
- Modülleri **Arama** ve **Sıralama** (alfabetik, en yeni, önce etkin olanlar)
- Bir modülü tüm kartlara otomatik olarak uygulanacak şekilde **Genel durumunu ayarlama**
- Yedekleme veya paylaşım için modülleri **İçe/Dışa aktarma**

#### Module Store sekmesi

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Bu sekme [topluluktan gelen tüm mevcut modülleri](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) gösterir ve şunları yapmanızı sağlar:

- Topluluk tarafından oluşturulan tüm modüllere **Göz atma**
- Modülleri isme, uyumluluğa veya anahtar kelimelere göre **Arama** ve filtreleme
- Modülleri tek tıklamayla **Kurma**
- Yeni sürümler mevcut olduğunda kurulu modülleri **Güncelleme**

> [!TIP]
> Editörde, henüz belirli bir kart türüyle uyumlu olarak işaretlenmemiş modülleri test etmek için desteklenmeyen modülleri etkinleştirebilirsiniz.

<br>

### Modüller nasıl kullanılır

#### Yeni bir modül oluşturma

<details>

<summary>Genişletmek için tıklayın</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Herhangi bir kartın editörüne gidin ve **Modüller** bölümünü genişletin.
2. **Yeni modül oluştur**'a tıklayın.
3. Modül bilgilerini doldurun.
4. CSS ve/veya JavaScript şablon kodunuzu **Kod** editörüne yazın.
5. (İsteğe bağlı) **Editör** bölümünde özel bir yapılandırma arayüzü oluşturun (yukarıdaki ekran görüntüsündeki renk seçici gibi, tam belgeleri [burada](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md) bulabilirsiniz).
6. **Kaydet**'e tıklayın.

Modülünüz artık kartlarınızın herhangi birinde kullanılabilir!

<br>

</details>

#### Bir modülü bir karta uygulama

<details>

<summary>Genişletmek için tıklayın</summary>

<br>

- **Editör üzerinden:**

  - Modülü uygulamak istediğiniz kartın editörüne gidin.
  - **Modüller** bölümünü genişletin.
  - Listeden uygulamak istediğiniz modüle tıklayın.
  - "Uygula" altında "Bu kart"a tıklayın. Modül artık etkin. Aynı karta birden fazla modül uygulayabilirsiniz.

- **YAML üzerinden:**

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

#### Bir modülü genel olarak uygulama

<details>

<summary>Genişletmek için tıklayın</summary>

<br>

Bir modülü tüm Bubble Card'lara otomatik olarak uygulanacak şekilde ayarlayabilirsiniz:

**Bu, editörlü modüller için kullanılamaz, çünkü bunlar çalışmak için belirli bir yapılandırma gerektirir.**

- **Editör üzerinden:**

  - Module Editor'da, **My Modules** sekmesinde modülünüzü bulun.
  - Modül isminin yanındaki **Tüm kartlar** düğmesini açın.
  - Modül artık tüm kartlara otomatik olarak uygulanacak.
 
- **YAML üzerinden:**

  Modül YAML yapılandırmanızda (`bubble-modules.yaml` içinde), yalnızca `is_global: true` ekleyin.

<br>

</details>

#### Tek bir kartı genel bir modülden hariç tutma

<details>

<summary>Genişletmek için tıklayın</summary>

<br>

Genel bir modülünüz varsa ama belirli bir karttan hariç tutmak istiyorsanız:

- **Editör üzerinden:**
  
  - Kartın **Modüller** bölümünde, genel modüller listelenmiş olarak görünür.
  - Genel bir modüle tıklayın, bunu bu belirli karttan hariç tutmak için "Bu kart" seçeneğini kapatın.

- **YAML üzerinden:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Modülünüzü Module Store'da paylaşma

<details>

<summary>Genişletmek için tıklayın</summary>

<br>

Modülünüzü Module Store'da paylaşmak için Module Editor'da, altta "Export Module" bölümünde "Copy for GitHub"a tıklayın ve içeriği [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) kategorisindeki yeni bir tartışmaya yapıştırın. (Gerekirse) **açıklamayı** ve (YAML kullanıcıları için) **örneği** düzenleyin ve Module Store için **en az bir ekran görüntüsü eklemeyi** unutmayın.

**Modülünüz bundan hemen sonra kullanılabilir hale gelir** (bir Store yenilemesinden sonra), bu yüzden her şeyin doğru yazıldığından ve Modülün beklendiği gibi çalıştığından emin olun. Paylaşıldıktan sonra Modülü elbette düzenleyebilir/güncelleyebilirsiniz.

<br>

</details>

#### Sürüm yönetimi

<details>

<summary>Genişletmek için tıklayın</summary>

<br>

Module Store, kurulu modüller için otomatik olarak güncelleme kontrolü yapar. Güncellemeler mevcut olduğunda:

1. **Module Store** sekmesinde bir güncelleme göstergesi göreceksiniz.
2. Mevcut güncellemeleri olan modüllerde **Güncelle**'ye tıklayın.
3. Module Store'da güncellemeyi onaylayın.

<br>

</details>

#### Desteklenen kart türlerini tanımlama

<details>

<summary>Genişletmek için tıklayın</summary>

<br>

Bazı modüller tüm kart türleriyle uyumlu olmayabilir. Bir modülün hangi kartları desteklediğini belirtebilirsiniz.  
Bir modülün **tüm kartlarla** uyumlu olmasını istiyorsanız, `supported` alanını basitçe atlayın (veya editördeki **Tüm kartlar** seçeneğini kullanın).

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

### Örnekler

<details>
<summary>Temel stil modülü</summary>

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
<summary>Özel yapılandırmalı modül</summary>

<br>

Bu modül [burada](https://github.com/Clooos/Bubble-Card/discussions/1231) bulunabilir.

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

Daha fazla örneği Module Store'da veya [burada](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) bulabilirsiniz.

<br>

---

<br>

## Yardım

Beklendiği gibi çalışmayan bir şey olursa bir sorun (issue) açmaktan çekinmeyin. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Bubble Card hakkında sorularınız veya düşünceleriniz mi var? Panolarınızı veya keşiflerinizi paylaşmak mı istiyorsunuz? Home Assistant forumuna, Bubble Card subreddit'ine veya GitHub Discussions bölümüne gidebilirsiniz.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Katkıda bulunma

Katkılarınız için teşekkürler! İster hata düzeltmesi, ister yeni özellik, ister çeviri, ister belge iyileştirmesi olsun, bir pull request açmaktan çekinmeyin.

Başlamadan önce, yerel ortamınızı nasıl kuracağınızı, projeyi nasıl derleyeceğinizi ve değişikliklerinizi nasıl test edeceğinizi anlatan [geliştirici rehberini](DEVELOPERS.md) okuyun.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Bağış yapın

Boş zamanımın çoğunu bu projeyi olabildiğince iyi hale getirmeye adıyorum. Bu yüzden emeğimi takdir ediyorsanız, herhangi bir bağış desteğinizi göstermek için harika bir yol olacaktır 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Herkese desteği için teşekkürler, hepiniz en büyük motivasyon kaynağımsınız!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
