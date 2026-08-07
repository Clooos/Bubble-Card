<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Ta strona jest tłumaczeniem automatycznym. W razie wątpliwości obowiązuje [oryginalna dokumentacja w języku angielskim](../README.md). Jakieś zdanie brzmi dziwnie? Każda pomoc jest mile widziana, a [poprawienie tej strony](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.pl.md) zajmuje tylko chwilę: GitHub sam zajmie się forkiem i pull requestem. Z góry dziękuję! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Przeczytaj to w innym języku](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card to minimalistyczna i w pełni konfigurowalna kolekcja kart dla Home Assistant, oferująca nowoczesne pop-upy oraz zintegrowany Module Store z ponad 100 modułami stworzonymi przez społeczność.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Spis treści

**[`Instalacja`](#instalacja)**  **[`Konfiguracja`](#konfiguracja)**  **[`Sugestie encji`](#sugestie-encji)**  **[`Pop-up`](#pop-up)**  **[`Poziomy stos przycisków`](#poziomy-stos-przycisków)**  **[`Przycisk`](#przycisk)**  **[`Odtwarzacz mediów`](#odtwarzacz-mediów)**  **[`Rolety`](#rolety)**  **[`Select`](#select)**  **[`Klimatyzacja`](#klimatyzacja)**  **[`Kalendarz`](#kalendarz)**  **[`Separator`](#separator)**  **[`Pusta kolumna`](#pusta-kolumna)**  **[`Tylko podprzyciski`](#tylko-podprzyciski)**  **[`Podprzyciski`](#podprzyciski)**  **[`Układy kart`](#układy-kart)**  **[`Warunki`](#warunki)**  **[`Akcje`](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania)**  **[`Stylizacja`](#stylizacja)**  **[`Szablony`](#szablony)**  **[`Moduły`](#moduły)**  **[`Lokalizacja`](#lokalizacja)**  **[`Pomoc`](#pomoc)**  **[`Współtworzenie`](#współtworzenie)**  **[`Wesprzyj projekt`](#wesprzyj-projekt)**

<br>

## Instalacja

**Najniższa obsługiwana wersja Home Assistant:** 2023.9.0

<details>

<summary>Bez HACS</summary>

<br>

1. Pobierz `bubble-card.zip` z [najnowszego wydania](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Rozpakuj go do folderu `<config>/www`, powinieneś otrzymać `bubble-card.js` oraz obok niego folder `translations` (ten folder zawiera słowniki edytora, bez niego edytor pozostaje po angielsku)
3. Na swoim panelu kliknij ikonę w prawym górnym rogu, a następnie `Edytuj panel`
4. Kliknij ponownie tę ikonę, a następnie kliknij `Zarządzaj zasobami`
5. Kliknij `Dodaj zasób`
6. Skopiuj i wklej to: `/local/bubble-card.js?v=1`
7. Kliknij `Moduł JavaScript`, a następnie `Utwórz`
8. Wróć i odśwież stronę
9. Możesz teraz kliknąć `Dodaj kartę` w prawym dolnym rogu i wyszukać `Bubble Card`
10. Po każdej aktualizacji pliku będziesz musiał edytować `/local/bubble-card.js?v=1` i zmienić numer wersji na dowolny wyższy

Jeśli coś nie działa, spróbuj po prostu wyczyścić pamięć podręczną przeglądarki.

</details>

<details>

<summary>Z HACS (Zalecane)</summary>

<br>

Ta metoda pozwala otrzymywać aktualizacje bezpośrednio przez Home Assistant Community Store

1. Jeśli HACS nie jest jeszcze zainstalowany, pobierz go zgodnie z instrukcjami na [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Przeprowadź wstępną konfigurację HACS zgodnie z instrukcjami na [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Na pasku bocznym przejdź do "HACS"
4. Wyszukaj "Bubble Card" lub kliknij niebieski przycisk poniżej
5. Kliknij "Pobierz"
6. Wróć do swojego panelu i kliknij ikonę w prawym górnym rogu, a następnie `Edytuj panel`
7. Możesz teraz kliknąć `Dodaj kartę` w prawym dolnym rogu i wyszukać `Bubble Card`

Jeśli coś nie działa, spróbuj wyczyścić pamięć podręczną przeglądarki/aplikacji (na wszystkich swoich urządzeniach, jeśli to konieczne).

#### Filmy

Możesz też zajrzeć na mój kanał YouTube, gdzie znajdziesz filmy krok po kroku.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Konfiguracja

Wszystkie opcje można skonfigurować w edytorze Home Assistant. Więcej szczegółów i kod YAML znajdziesz jednak w poniższej dokumentacji.

<details>

<summary><b>Główne opcje (YAML + opis)</b></summary>

| Nazwa | Typ | Wymagane | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `type` | string | **Wymagane** | `custom:bubble-card` | Typ karty |
| `card_type` | string | **Wymagane** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` lub `sub-buttons` | Typ karty Bubble Card, patrz poniżej |
| `styles` | object list | Opcjonalne | Dowolne arkusze stylów CSS | Pozwala dostosować CSS Twojej karty Bubble Card, patrz [stylizacja](#stylizacja) |

</details>

<details>

<summary><b>Globalne zmienne CSS (patrz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Promień zaokrąglenia rogów dla wszystkich obsługiwanych elementów |
| `--bubble-main-background-color` | `color` | Główny kolor tła dla wszystkich obsługiwanych elementów |
| `--bubble-secondary-background-color` | `color` | Drugorzędny kolor tła dla wszystkich obsługiwanych elementów |
| `--bubble-accent-color` | `color` | Kolor akcentu dla wszystkich obsługiwanych elementów |
| `--bubble-icon-border-radius` | `px` | Promień zaokrąglenia rogów ikony dla wszystkich obsługiwanych elementów |
| `--bubble-icon-background-color` | `color` | Kolor tła ikony dla wszystkich obsługiwanych elementów |
| `--bubble-sub-button-border-radius` | `px` | Promień zaokrąglenia rogów dla wszystkich podprzycisków |
| `--bubble-sub-button-background-color` | `color` | Kolor tła dla wszystkich podprzycisków |
| `--bubble-box-shadow` | patrz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cień (box shadow) dla wszystkich obsługiwanych elementów |
| `--bubble-border` | patrz [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Obramowanie dla wszystkich obsługiwanych kart |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Obejrzyj ten [film](https://www.youtube.com/watch?v=0hSQOlBxKKI), aby dowiedzieć się więcej o Bubble Card i jej możliwościach.** Mój kanał YouTube jest jeszcze dość nowy i koncentruje się na poradnikach dotyczących Home Assistant i Bubble Card. Nie wahaj się subskrybować, aby pomóc zwiększyć widoczność mojego kanału. Z góry dziękuję!

<br>

---

<br>

## Sugestie encji

Od Home Assistant 2026.6 wybranie encji w selektorze kart podpowiada kilka gotowych kart, a Bubble Card odpowiada na to pytanie własnymi przepisami. Wybierz światło, a otrzymasz kartę z suwakiem jasności, a także warianty temperatury barwowej, koloru i nasycenia, jeśli twoje światło je obsługuje. Wybierz roletę, a otrzymasz suwak jej pozycji, wybierz odtwarzacz mediów, a dostaniesz również wariant z listą źródeł, wybierz odkurzacz, a dostaniesz przyciski uruchomienia, pauzy i powrotu do stacji. Każda sugestia to zwykła konfiguracja Bubble Card pokazana jako podgląd na żywo, więc możesz wziąć tę najbliższą i edytować ją dalej jak zwykle.

To, co zostanie zaproponowane, zależy od tego, co twoja encja naprawdę potrafi: światło bez kanału jasności dostaje przełącznik zamiast suwaka, roleta bez możliwości nachylenia nie dostaje wariantu nachylenia, a encja klimatyzacji dostaje swoje tryby predefiniowane tylko wtedy, gdy jakieś ma. Pod nimi, jeśli mają zastosowanie, znajdują się klasyczne pozycje: dedykowana karta danej domeny, zwykły przycisk i suwak.

> [!TIP]
> Moduły mogą dodawać do tej listy własne sugestie, zobacz [moduły](#moduły).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Ta karta pozwala tworzyć pop-up z dowolną zawartością. Każdy pop-up jest **domyślnie ukryty** i można go otworzyć, kierując się do jego linku (np. `'#pop-up-name'`), za pomocą dowolnej karty obsługującej akcję `navigate` [action](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) lub za pomocą dołączonego [poziomego stosu przycisków](#poziomy-stos-przycisków).

> [!TIP]
> ### Wyzwalacz pop-upu 
> Ta funkcja pozwala otworzyć pop-up na podstawie stanu dowolnej encji, na przykład możesz otworzyć pop-up "Bezpieczeństwo" z kamerą, gdy przed Twoim domem pojawi się osoba. Możesz też utworzyć pomocnika przełącznika (input_boolean) i wyzwalać jego otwieranie/zamykanie w automatyzacji.
> <details>
> <summary>Otwieranie pop-upu, gdy <code>binary_sensor</code> ma stan <code>on</code></summary>
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
> ### Różne sposoby zamykania pop-upu 
> Istnieje wiele sposobów zamknięcia pop-upu. Możesz na przykład przeciągnąć nagłówek pop-upu w dół, wykonać długie przeciągnięcie wewnątrz pop-upu w dół, nacisnąć Escape na komputerze, usunąć hash z adresu URL albo po prostu nacisnąć przycisk zamknięcia.
>


### Opcje pop-upu

<details>

<summary><b>Opcje (YAML + opisy)</b></summary>

| Nazwa | Typ | Wymagane | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `hash` | string | **Wymagane** | Dowolny unikalny hash (np. `'#kitchen'`) z ' ' | Tak otworzysz swój pop-up |
| `popup_style` | string | Opcjonalne | `bubble` (domyślnie) lub `classic` | Określa styl wizualny pop-upu |
| `popup_mode` | string | Opcjonalne | `default` (domyślnie), `fit-content`, `centered` lub `adaptive-dialog` | Określa tryb układu pop-upu |
| `with_bottom_offset` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Używane tylko z `popup_mode: fit-content` lub `adaptive-dialog`. Stosuje dolny odstęp na urządzeniach mobilnych, przydatne, gdy Twój panel zawiera kartę stopki. |
| `full_width_on_mobile` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Używane tylko z `popup_mode: centered`. Rozszerza pop-up na pełną szerokość ekranu na urządzeniach mobilnych, przydatne przy mniejszych ekranach. |
| `performance_mode` | string | Opcjonalne | `default` (domyślnie) lub `performance` | Optymalizuje animację otwierania pop-upu. `performance` nieznacznie opóźnia renderowanie zawartości i rozmycie tła, a także wyłącza rozmycie tła, jeśli jest ustawione. |
| `auto_close` | string | Opcjonalne | Czas w milisekundach (np. `10000` dla 10 s) | Automatycznie zamyka pop-up po upływie czasu |
| `close_on_click` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Automatycznie zamyka pop-up po dowolnej interakcji |
| `close_by_clicking_outside` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Zamyka pop-up po kliknięciu poza nim |
| `width_desktop` | string | Opcjonalne | Dowolna wartość CSS | Szerokość na komputerze (`100%` domyślnie na urządzeniach mobilnych) |
| `margin` | string | Opcjonalne | Dowolna wartość CSS | Użyj tego **tylko** jeśli Twój pop-up nie jest dobrze wyśrodkowany na urządzeniach mobilnych (np. `13px`) |
| `margin_top_mobile` | string | Opcjonalne | Dowolna wartość CSS | Górny margines na urządzeniach mobilnych (np. `-56px`, jeśli Twój nagłówek jest ukryty) |
| `margin_top_desktop` | string | Opcjonalne | Dowolna wartość CSS | Górny margines na komputerze (np. `50vh` dla pop-upu o połowie wysokości lub `calc(100vh - 400px)` dla stałej wysokości `400px`) |
| `bg_color` | string | Opcjonalne | Dowolna wartość hex, rgb lub rgba | Kolor tła Twojego pop-upu (np. `#ffffff` dla białego tła) |
| `bg_opacity` | string | Opcjonalne | Dowolna wartość od `0` do `100` | Nieprzezroczystość tła Twojego pop-upu (np. `100` dla braku przezroczystości) |
| `bg_blur` | string | Opcjonalne | Dowolna wartość od `0` do `100` | Efekt rozmycia tła Twojego pop-upu, **działa to tylko, jeśli `bg_opacity` nie jest ustawione na `100`** (np. `0` dla braku rozmycia)|
| `shadow_opacity` | string | Opcjonalne | Dowolna wartość od `0` do `100` | Nieprzezroczystość cienia Twojego pop-upu (np. `0`, aby go ukryć) |
| `hide_backdrop` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Ustaw to na true na pierwszym pop-upie Twojego głównego panelu, aby wyłączyć tło (backdrop) dla wszystkich pop-upów. |
| `background_update` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Aktualizuje zawartość pop-upu w tle (niezalecane) |
| `trigger` | object lub list | Opcjonalne | Zobacz [warunki](#warunki) | Otwiera ten pop-up, gdy warunki są spełnione |
| `trigger_entity` | string | Opcjonalne | Dowolna encja | Otwiera ten pop-up na podstawie stanu dowolnej encji, prosta postać `trigger` |
| `trigger_state` | string | Opcjonalne (**Wymagane**, jeśli zdefiniowano `trigger_entity`) | Dowolny stan encji | Stan encji, przy którym pop-up ma się otworzyć |
| `trigger_close` | boolean | Opcjonalne | `true` lub `false` | Zamyka pop-up, gdy warunki przestają być spełnione (domyślnie: `true` przy `trigger`, `false` przy `trigger_state`) |
| `open_action` | object | Opcjonalne | Patrz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Wyzwala akcję podczas otwierania pop-upu |
| `close_action` | object | Opcjonalne | Patrz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Wyzwala akcję podczas zamykania pop-upu |
| `show_header` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokazuje/ukrywa nagłówek pop-upu w całości |
| `show_previous_button` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokazuje przycisk wstecz obok przycisku zamknięcia i wraca do poprzedniego pop-upu, gdy jest dostępny |
| `show_close_button` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokazuje lub ukrywa przycisk zamknięcia, pozostawiając widoczną resztę nagłówka |
| `buttons_position` | string | Opcjonalne | `right` (domyślnie) lub `left` | Pozycja przycisków zamknięcia i wstecz w nagłówku |
| `cards` | list | Opcjonalne | Dowolna karta Bubble Card, karta Home Assistant lub karta niestandardowa | Definiuje zawartość Twojego pop-upu. Patrz poniższy przykład pop-upu. |
| Masz też dostęp do [wszystkich ustawień przycisku](#przycisk) dla nagłówka pop-upu. | | Opcjonalne | | Jeśli niezdefiniowane, żaden nagłówek nie zostanie wyświetlony |

</details>

<details>

<summary><b>Zmienne CSS (patrz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Promień zaokrąglenia rogów pop-upu |
| `--bubble-pop-up-main-background-color` | `color` | Główny kolor tła obsługiwanych elementów pop-upu |
| `--bubble-pop-up-background-color` | `color` | Kolor tła pop-upu |
| `--bubble-backdrop-background-color` | `color` | Kolor tła dla backdropu |
| Masz też dostęp do [wszystkich zmiennych CSS przycisku](#opcje-przycisku) dla nagłówka pop-upu. | | |

</details>


### Samodzielny format pop-upu (v3.2.0+)

Od wersji v3.2.0 pop-upy korzystają z nowego samodzielnego formatu, w którym karty zawartości są definiowane bezpośrednio wewnątrz pop-upu za pomocą opcji `cards`. Zapewnia to lepszą wydajność i nowy sposób edycji metodą przeciągnij i upuść oparty na sekcjach.


#### Przykłady

<details>

<summary>Pop-up (format samodzielny)</summary>

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

<summary>Przycisk otwierający pop-up</summary>

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

## Poziomy stos przycisków

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Ta karta świetnie sprawdza się jako uzupełnienie karty pop-up, pozwalając otwierać odpowiadające jej pop-upy. Umożliwia też otwarcie dowolnej strony Twojego panelu. Dodatkowo możesz dodać swoje czujniki ruchu/obecności, dzięki czemu kolejność przycisków będzie dostosowywać się do pomieszczenia, do którego właśnie wszedłeś. Ta karta jest przewijana, pozostaje widoczna i działa jak stopka.

> [!IMPORTANT]  
> Ta karta musi być ostatnią w Twoim widoku (po wszystkich kartach i pop-upach). Nie może znajdować się wewnątrz żadnego stosu.

### Opcje poziomego stosu przycisków

<details>

<summary><b>Opcje (YAML + opisy)</b></summary>

| Nazwa | Typ | Wymagane | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Wymagane** | Hash pop-upu (np. `'#kitchen'`) z ' ' lub dowolny link | Link do otwarcia |
| `1_name` | string | Opcjonalne | Dowolny ciąg znaków | Nazwa Twojego przycisku |
| `1_icon` | string | Opcjonalne | Dowolna ikona `mdi:` | Ikona Twojego przycisku |
| `1_entity` | string | Opcjonalne | Dowolne światło lub grupa świateł | Wyświetla kolor tego światła w tle |
| `1_pir_sensor` | string | Opcjonalne | Dowolny czujnik binarny | Co najmniej jeden czujnik PIR lub więcej dla `auto_order`, w rzeczywistości działa też z dowolnym typem encji, na przykład możesz dodać grupy świateł, a kolejność będzie się zmieniać na podstawie ostatnio zmienionych stanów. |
| `auto_order` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Zmienia kolejność przycisków według czasu ostatniej zmiany `_pir_sensor`, **musi być ustawione na `false`, jeśli w Twoim kodzie nie ma żadnego `_pir_sensor`** |
| `margin` | string | Opcjonalne | Dowolna wartość CSS | Użyj tego **tylko**, jeśli Twój `horizontal-buttons-stack` nie jest dobrze wyśrodkowany na urządzeniach mobilnych (np. `13px`) |
| `width_desktop` | string | Opcjonalne | Dowolna wartość CSS | Szerokość na komputerze (`100%` domyślnie na urządzeniach mobilnych) |
| `is_sidebar_hidden` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Naprawia pozycję poziomego stosu przycisków, jeśli pasek boczny jest ukryty na komputerze (tylko jeśli sam wprowadziłeś modyfikację, aby go ukryć) |
| `rise_animation` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Ustaw na `false`, aby wyłączyć animację, która uruchamia się po załadowaniu strony |
| `highlight_current_view` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Wyróżnia bieżący hash / widok płynną animacją |
| `hide_gradient` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Ustaw na `false`, aby ukryć gradient |

> [!IMPORTANT]  
> Zmienne zaczynające się od liczby definiują Twoje przyciski, po prostu zmień tę liczbę, aby dodać kolejne przyciski (patrz przykład poniżej).

</details>

<details>

<summary><b>Zmienne CSS (patrz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Promień obramowania przycisków poziomego stosu przycisków |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Kolor tła przycisków poziomego stosu przycisków |

</details>


#### Przykład

<details>

<summary>Poziomy stos przycisków, który sam się reorganizuje na podstawie czujników obecności</summary>

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

## Przycisk

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Ta karta jest bardzo wszechstronna. Może służyć jako **przełącznik**, **suwak**, przycisk **stanu** lub **nazwy/tekstu**.

> [!TIP]
> ### Jakie są różnice między wszystkimi typami przycisków?
>
> - **Przycisk przełącznika:** to domyślny typ przycisku. Domyślnie przełącza encję, a kolor jego tła zmienia się w zależności od stanu encji lub koloru światła. Możesz zmienić jego akcję w sekcji **Akcja dotknięcia karty**.
>
> - **Przycisk suwaka:** ten typ przycisku pozwala sterować encjami z regulowanym zakresem. Idealnie nadaje się do ściemniania świateł, a kolor wypełnienia dostosuje się do koloru światła. Możesz go też używać do wyświetlania wartości, np. poziomu baterii.
>   Encje obsługiwane przez suwaki:
>   - Światło (jasność)
>   - Odtwarzacz mediów (głośność)
>   - Rolety (pozycja)
>   - Wentylator (procent)
>   - Klimatyzacja (temperatura)
>   - Input number i number (wartość)
>   - Czujnik baterii (procent, tylko do odczytu)
>
>   Możesz też użyć dowolnej encji ze stanem liczbowym, wyłączając filtr encji w **Ustawieniach suwaka**, a następnie definiując wartości `min` i `max`. Ta opcja jest tylko do odczytu.
>
> - **Przycisk stanu:** idealny do wyświetlania informacji z czujnika lub dowolnej encji. Po naciśnięciu wyświetla panel "Więcej informacji" encji. Kolor jego tła się nie zmienia.
>
> - **Przycisk nazwy/tekstu:** jedyny typ przycisku, który nie wymaga encji. Pozwala wyświetlić krótki tekst, nazwę lub tytuł. Możesz też dodać do niego akcje. Kolor jego tła się nie zmienia.

### Opcje przycisku

<details>

<summary><b>Opcje (YAML + opisy)</b></summary>

| Nazwa | Typ | Wymagane | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Wymagane** | Dowolna encja | Encja do sterowania |
| `button_type` | string | Opcjonalne | `switch` (domyślnie), `slider`, `state` lub `name` | Zachowanie Twojego przycisku |
| `name` | string | Opcjonalne | Dowolny ciąg znaków | Nazwa Twojego przycisku, jeśli nie zdefiniowana, wyświetlana będzie nazwa encji |
| `icon` | string | Opcjonalne | Dowolna ikona `mdi:` | Ikona Twojego przycisku, jeśli nie zdefiniowana, wyświetlana będzie ikona encji lub `entity-picture` |
| `force_icon` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Daje priorytet ikonie zamiast `entity-picture` |
| `use_accent_color` | boolean | Opcjonalne (domyślnie `false`) | **Tylko dla świateł.** Używa koloru akcentu motywu zamiast koloru światła.                         |
| `show_state` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokazuje lub ukrywa stan Twojej `entity` |
| `show_name` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokazuje lub ukrywa nazwę |
| `show_icon` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokazuje lub ukrywa ikonę |
| `show_last_changed` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokazuje czas ostatniej zmiany Twojej `entity` |
| `show_last_updated` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokazuje czas ostatniej aktualizacji Twojej `entity` |
| `show_attribute` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokazuje atrybut Twojej `entity` pod jej `name` |
| `attribute` | string | Opcjonalne (wymagane, jeśli `show_attribute` jest ustawione na `true`) | Atrybut z Twojej `entity` | Atrybut do pokazania (np. `brightness`) |
| `scrolling_effect` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pozwala tekstowi przewijać się, gdy zawartość przekracza rozmiar swojego kontenera |
| `button_action` | object | Opcjonalne | `tap_action`, `double_tap_action` lub `hold_action`, patrz poniżej | Pozwala zmienić domyślne akcje po kliknięciu przycisku. |
| `tap_action` | object | Opcjonalne | Patrz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Definiuje typ akcji przy kliknięciu ikony, jeśli niezdefiniowane, użyte zostanie `more-info` |
| `double_tap_action` | object | Opcjonalne | Patrz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Definiuje typ akcji przy podwójnym kliknięciu ikony, jeśli niezdefiniowane, użyte zostanie `none` |
| `hold_action` | object | Opcjonalne | Patrz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Definiuje typ akcji przy przytrzymaniu ikony, jeśli niezdefiniowane, użyte zostanie `more-info` |
| `card_layout` | string | Opcjonalne | `normal` (domyślnie, jeśli nie w widoku sekcji), `large` (domyślnie, jeśli w widoku sekcji), `large-2-rows`, `large-sub-buttons-grid` | Układ stylizacji karty, patrz [układy kart](#układy-kart) |
| `rows` | number | Opcjonalne | Dowolna liczba | Liczba wierszy (wysokość) (np. `2`) |
| `sub_button` | object | Opcjonalne | Patrz [podprzyciski](#podprzyciski) | Dodaje niestandardowe przyciski przypięte po prawej stronie |

</details>

<details>

<summary><b>Zmienne CSS (patrz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Główny kolor tła obsługiwanych elementów w przycisku |
| `--bubble-button-border-radius` | `px` | Promień obramowania przycisku |
| `--bubble-button-icon-border-radius` | `px` | Promień obramowania kontenera ikony przycisku |
| `--bubble-button-icon-background-color` | `color` | Kolor tła kontenera ikony przycisku |
| `--bubble-light-white-color` | `color` | Zastępuje domyślny biały kolor przycisków/suwaków światła |
| `--bubble-light-color` | `color` | Zastępuje kolor przycisków/suwaków światła (nawet świateł RGB) |
| `--bubble-button-box-shadow` | Patrz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cień przycisku |

</details>

Te opcje są dostępne tylko wtedy, gdy `button_type` jest ustawiony na `slider`.

<details>

<summary><b>Opcje suwaka (YAML + opisy)</b></summary>

| Nazwa                  | Typ    | Wymagane                     | Opis                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Opcjonalne                        | Minimalna wartość suwaka. Dla niestandardowych suwaków.                                                    |
| `max_value`             | number  | Opcjonalne                        | Maksymalna wartość suwaka. Dla niestandardowych suwaków.                                                    |
| `step`                  | number  | Opcjonalne                        | Wartość kroku suwaka.                                                                           |
| `tap_to_slide`          | boolean | Opcjonalne (domyślnie `false`)      | Włącza poprzednie zachowanie suwaka, w którym dotykasz, aby aktywować suwak, zamiast go przytrzymywać.        |
| `relative_slide`        | boolean | Opcjonalne (domyślnie `false` )     | Aktualizuje wartość względem wartości początkowej, a nie punktu dotknięcia startowego.                      |
| `read_only_slider`      | boolean | Opcjonalne (domyślnie `false`)      | Ustawia suwak jako tylko do odczytu. Automatycznie włączane dla niektórych encji, takich jak czujniki.                        |
| `slider_live_update`    | boolean | Opcjonalne (domyślnie `false`)      | Stan encji jest aktualizowany podczas przesuwania. **Ta funkcja nie jest zalecana dla wszystkich encji.**        |
| `slider_fill_orientation` | string | Opcjonalne | `left`, `right`, `top` lub `bottom` | Zmienia kierunek wypełnienia suwaka. Bez podania od lewej do prawej, lustrzanie w [językach pisanych od prawej do lewej](#lokalizacja) |
| `slider_value_position` | string | Opcjonalne | `right`, `left`, `center` lub `hidden` | Pozycja wyświetlania wartości. Bez podania po stronie końca, czyli po lewej w [językach pisanych od prawej do lewej](#lokalizacja) |
| `invert_slider_value` | boolean | Opcjonalne (domyślnie `false`) | Odwraca kierunek suwaka (100% wypełnienia odpowiada minimum). Niedostępne dla suwaków koloru. |
| `light_slider_type` | string | Opcjonalne | `brightness` (domyślnie), `hue`, `saturation`, `white_temp` | **Tylko dla świateł.** Wybiera tryb suwaka |
| `cover_slider_type` | string | Opcjonalne | `position` (domyślnie), `tilt_position` | **Tylko dla rolet.** Wybiera tryb suwaka (pozycja lub nachylenie) |
| `hue_force_saturation` | boolean | Opcjonalne (domyślnie `false`) | **Tylko dla świateł (tryb odcienia).** Wymusza nasycenie podczas regulacji odcienia |
| `hue_force_saturation_value` | number | Opcjonalne (domyślnie `100`) | **Tylko dla świateł (tryb odcienia).** Wymuszona wartość nasycenia (0-100) |
| `use_accent_color` | boolean | Opcjonalne (domyślnie `false`) | **Tylko dla świateł (tryb jasności).** Używa koloru akcentu motywu zamiast koloru światła |
| `allow_light_slider_to_0` | boolean | Opcjonalne (domyślnie `false`)    | **Tylko dla świateł.** Pozwala suwakowi osiągnąć 0%, co wyłącza światło. Niedostępne z `tap_to_slide`. |
| `light_transition`      | boolean | Opcjonalne (domyślnie `false`)      | **Tylko dla świateł.** Włącza płynne przejścia jasności dla obsługiwanych świateł.                           |
| `light_transition_time` | number  | Opcjonalne (domyślnie `500`)        | **Tylko dla świateł.** Czas przejścia w milisekundach. Wymaga `light_transition: true`.            |

</details>

#### Przykłady

<details>

<summary>Przycisk suwaka sterujący jasnością światła</summary>

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

<summary>Przycisk z większą liczbą opcji</summary>

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

## Odtwarzacz mediów

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Ta karta pozwala sterować encją odtwarzacza mediów.

### Opcje odtwarzacza mediów

<details>

<summary><b>Opcje (YAML + opisy)</b></summary>

| Nazwa | Typ | Wymagane | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Wymagane** | Dowolny odtwarzacz mediów | Odtwarzacz mediów do sterowania |
| `name` | string | Opcjonalne | Dowolny ciąg znaków | Nazwa Twojego odtwarzacza mediów, jeśli nie zdefiniowana, wyświetlana będzie nazwa encji |
| `icon` | string | Opcjonalne | Dowolna ikona `mdi:` | Ikona Twojego odtwarzacza mediów, jeśli nie zdefiniowana, wyświetlana będzie ikona encji lub `entity-picture` |
| `force_icon` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Daje priorytet ikonie zamiast `entity-picture` |
| `show_state` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokazuje lub ukrywa stan Twojej `entity` |
| `show_name` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokazuje lub ukrywa nazwę |
| `show_icon` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokazuje lub ukrywa ikonę |
| `show_last_changed` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokazuje czas ostatniej zmiany Twojej `entity` |
| `show_last_updated` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokazuje czas ostatniej aktualizacji Twojej `entity` |
| `show_attribute` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokazuje atrybut Twojej `entity` pod jej `name` |
| `attribute` | string | Opcjonalne (wymagane, jeśli `show_attribute` jest ustawione na `true`) | Atrybut z Twojej `entity` | Atrybut do pokazania (np. `brightness`) |
| `scrolling_effect` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pozwala tekstowi przewijać się, gdy zawartość przekracza rozmiar swojego kontenera |
| `min_volume` | number | Opcjonalne | Dowolna liczba | Minimalna wartość suwaka głośności. |
| `max_volume` | number | Opcjonalne | Dowolna liczba | Maksymalna wartość suwaka głośności. |
| `cover_background` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Używa rozmytej okładki utworu jako tła karty. |
| `button_action` | object | Opcjonalne | `tap_action`, `double_tap_action` lub `hold_action`, patrz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Pozwala zmienić domyślne akcje po kliknięciu przycisku. |
| `tap_action` | object | Opcjonalne | Patrz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Definiuje typ akcji przy kliknięciu ikony, jeśli niezdefiniowane, użyte zostanie `more-info`. |
| `double_tap_action` | object | Opcjonalne | Patrz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Definiuje typ akcji przy podwójnym kliknięciu ikony, jeśli niezdefiniowane, użyte zostanie `none`. |
| `hold_action` | object | Opcjonalne | Patrz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Definiuje typ akcji przy przytrzymaniu ikony, jeśli niezdefiniowane, użyte zostanie `more-info`. |
| `main_buttons_position` | string | Opcjonalne | `default` lub `bottom` | Przenosi przyciski akcji okładki na dół (stała pozycja) |
| `main_buttons_full_width` | boolean | Opcjonalne | `true` lub `false` | Ustawia dolne przyciski akcji na pełną szerokość (domyślnie: `true`, gdy pozycja to `bottom`) |
| `main_buttons_alignment` | string | Opcjonalne | `end` (domyślnie), `center`, `start`, `space-between` | Wyrównanie dolnych przycisków akcji, gdy nie są na pełną szerokość |
| `card_layout` | string | Opcjonalne | `normal` (domyślnie, jeśli nie w widoku sekcji), `large` (domyślnie, jeśli w widoku sekcji), `large-2-rows`, `large-sub-buttons-grid` | Układ stylizacji karty, patrz [układy kart](#układy-kart) |
| `rows` | number | Opcjonalne | Dowolna liczba | Liczba wierszy (wysokość) (np. `2`) |
| `sub_button` | object | Opcjonalne | Patrz [podprzyciski](#podprzyciski) | Dodaje niestandardowe przyciski przypięte po prawej stronie |
| `hide` | object | Opcjonalne | Patrz poniżej | Ukrywa przyciski na karcie |

#### Opcje ukrywania

| Nazwa | Typ | Wymagane | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Ukrywa przycisk odtwarzania/pauzy |
| `volume_button` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Ukrywa przycisk głośności |
| `previous_button` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Ukrywa przycisk poprzedniego utworu |
| `next_button` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Ukrywa przycisk następnego utworu |
| `power_button` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Ukrywa przycisk zasilania |

</details>

<details>

<summary><b>Zmienne CSS (patrz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Główny kolor tła odtwarzacza mediów |
| `--bubble-media-player-border-radius` | `px` | Promień obramowania odtwarzacza mediów |
| `--bubble-media-player-buttons-border-radius` | `px` | Promień obramowania przycisków odtwarzacza mediów |
| `--bubble-media-player-slider-background-color` | `color` | Kolor tła suwaka głośności |
| `--bubble-media-player-icon-border-radius` | `px` | Promień obramowania kontenera ikony odtwarzacza mediów |
| `--bubble-media-player-icon-background-color` | `color` | Kolor tła kontenera ikony odtwarzacza mediów |
| `--bubble-media-player-box-shadow` | Patrz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cień odtwarzacza mediów |

</details>


#### Przykłady

<details>

<summary>Odtwarzacz mediów ze wszystkimi opcjami</summary>

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

## Rolety

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Ta karta pozwala sterować Twoimi encjami `cover`.

### Opcje rolet

<details>

<summary><b>Opcje (YAML + opisy)</b></summary>

| Nazwa | Typ | Wymagane | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Wymagane** | Dowolna roleta | Roleta do sterowania |
| `name` | string | Opcjonalne | Dowolny ciąg znaków | Nazwa Twojej rolety, jeśli nie zdefiniowano, wyświetlana będzie nazwa encji |
| `force_icon` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Nadaje priorytet ikonie zamiast `entity-picture` |
| `show_state` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż lub ukryj stan Twojej `entity` |
| `show_name` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokaż lub ukryj nazwę |
| `show_icon` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokaż lub ukryj ikonę |
| `show_last_changed` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż czas ostatniej zmiany Twojej `entity` |
| `show_last_updated` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż czas ostatniej aktualizacji Twojej `entity` |
| `show_attribute` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż atrybut Twojej `entity` pod jej `name` |
| `attribute` | string | Opcjonalne (wymagane, jeśli `show_attribute` ustawiono na `true`) | Atrybut Twojej `entity` | Atrybut do wyświetlenia (np. `brightness`) |
| `scrolling_effect` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pozwala tekstowi przewijać się, gdy zawartość przekracza rozmiar kontenera |
| `icon_open` | string | Opcjonalne | Dowolna ikona `mdi:` | Ikona dla otwartej rolety, jeśli nie zdefiniowano, wyświetlana będzie domyślna ikona otwartej rolety |
| `icon_close` | string | Opcjonalne | Dowolna ikona `mdi:` | Ikona dla zamkniętej rolety, jeśli nie zdefiniowano, wyświetlana będzie domyślna ikona zamkniętej rolety |
| `icon_up` | string | Opcjonalne | Dowolna ikona `mdi:` | Ikona przycisku otwierania rolety, jeśli nie zdefiniowano, wyświetlana będzie domyślna ikona otwarcia rolety |
| `icon_down` | string | Opcjonalne | Dowolna ikona `mdi:` | Ikona przycisku zamykania rolety, jeśli nie zdefiniowano, wyświetlana będzie domyślna ikona zamknięcia rolety |
| `open_service` | string | Opcjonalne | Dowolna usługa lub skrypt | Usługa otwierająca Twoją roletę, domyślnie `cover.open_cover` |
| `stop_service` | string | Opcjonalne | Dowolna usługa lub skrypt | Usługa zatrzymująca Twoją roletę, domyślnie `cover.stop_cover` |
| `close_service` | string | Opcjonalne | Dowolna usługa lub skrypt | Usługa zamykająca Twoją roletę, domyślnie `cover.close_cover` |
| `tilt_buttons` | string | Opcjonalne | `top` (domyślnie), `bottom`, `left`, `right`, `hidden` | Pozycja przycisków sterowania nachyleniem (widoczne tylko, jeśli roleta obsługuje nachylenie) |
| `open_tilt_service` | string | Opcjonalne | Dowolna usługa lub skrypt | Usługa otwierająca nachylenie, domyślnie `cover.open_cover_tilt` |

| `close_tilt_service` | string | Opcjonalne | Dowolna usługa lub skrypt | Usługa zamykająca nachylenie, domyślnie `cover.close_cover_tilt` |
| `button_action` | object | Opcjonalne | `tap_action`, `double_tap_action` lub `hold_action`, zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Pozwala zmienić domyślne akcje po kliknięciu przycisku. |
| `tap_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po dotknięciu ikony, jeśli nie zdefiniowano, użyta zostanie `more-info`. |
| `double_tap_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po podwójnym dotknięciu ikony, jeśli nie zdefiniowano, użyta zostanie `none`. |
| `hold_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po przytrzymaniu ikony, jeśli nie zdefiniowano, użyta zostanie `more-info`. |
| `main_buttons_position` | string | Opcjonalne | `default` lub `bottom` | Przenosi elementy sterowania na dół (na stałe) |
| `main_buttons_full_width` | boolean | Opcjonalne | `true` lub `false` | Rozciąga dolne elementy sterowania na całą szerokość (domyślnie: `true`, gdy pozycja to `bottom`) |
| `main_buttons_alignment` | string | Opcjonalne | `end` (domyślnie), `center`, `start`, `space-between` | Wyrównanie dolnych elementów sterowania, gdy nie są na całą szerokość |
| `card_layout` | string | Opcjonalne | `normal` (domyślnie poza widokiem sekcji), `large` (domyślnie w widoku sekcji), `large-2-rows`, `large-sub-buttons-grid` | Układ stylizacji karty, zobacz [układy kart](#układy-kart) |
| `rows` | number | Opcjonalne | Dowolna liczba | Liczba wierszy (wysokość) (np. `2`) |
| `sub_button` | object | Opcjonalne | Zobacz [podprzyciski](#podprzyciski) | Dodaje niestandardowe przyciski przypięte do prawej strony |

</details>

<details>

<summary><b>Zmienne CSS (zobacz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Główny kolor tła dla obsługiwanych elementów karty rolet |
| `--bubble-cover-border-radius` | `px` | Promień zaokrąglenia karty rolet |
| `--bubble-cover-icon-border-radius` | `px` | Promień zaokrąglenia kontenera ikony karty rolet |
| `--bubble-cover-icon-background-color` | `color` | Kolor tła kontenera ikony karty rolet |
| `--bubble-cover-box-shadow` | Zobacz [cień](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cień karty rolet |
| `--bubble-button-box-shadow` | Zobacz [cień](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cień przycisków karty rolet |

</details>


#### Przykład

<details>

<summary>Karta pozwalająca sterować roletą rolkową</summary>

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

## Select

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Ta karta pozwala dodać menu rozwijane dla Twoich encji `input_select` / `select`. Ta karta obsługuje również podprzyciski oraz wszystkie wspólne funkcje Bubble Card.

> [!TIP]
> Możesz też mieć podprzyciski typu select, jeśli chcesz, ta funkcja jest dostępna we wszystkich kartach obsługujących podprzyciski.

### Opcje Select

<details>

<summary><b>Opcje (YAML + opisy)</b></summary>

| Nazwa | Typ | Wymagane | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | **Wymagane** | Dowolna encja | Encja do sterowania |
| `name` | string | Opcjonalne | Dowolny ciąg znaków | Nazwa Twojej karty select, jeśli nie zdefiniowano, wyświetlana będzie nazwa encji |
| `icon` | string | Opcjonalne | Dowolna ikona `mdi:` | Ikona dla Twojej karty select, jeśli nie zdefiniowano, wyświetlana będzie ikona encji lub `entity-picture` |
| `force_icon` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Nadaje priorytet ikonie zamiast `entity-picture` |
| `show_state` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż lub ukryj stan Twojej `entity` |
| `show_name` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokaż lub ukryj nazwę |
| `show_icon` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokaż lub ukryj ikonę |
| `show_last_changed` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż czas ostatniej zmiany Twojej `entity` |
| `show_last_updated` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż czas ostatniej aktualizacji Twojej `entity` |
| `show_attribute` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż atrybut Twojej `entity` pod jej `name` |
| `attribute` | string | Opcjonalne (wymagane, jeśli `show_attribute` ustawiono na `true`) | Atrybut Twojej `entity` | Atrybut do wyświetlenia (np. `brightness`) |
| `scrolling_effect` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pozwala tekstowi przewijać się, gdy zawartość przekracza rozmiar kontenera |
| `tap_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po dotknięciu ikony, jeśli nie zdefiniowano, użyta zostanie `more-info`. |
| `double_tap_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po podwójnym dotknięciu ikony, jeśli nie zdefiniowano, użyta zostanie `none`. |
| `hold_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po przytrzymaniu ikony, jeśli nie zdefiniowano, użyta zostanie `more-info`. |
| `card_layout` | string | Opcjonalne | `normal` (domyślnie poza widokiem sekcji), `large` (domyślnie w widoku sekcji), `large-2-rows`, `large-sub-buttons-grid` | Układ stylizacji karty, zobacz [układy kart](#układy-kart) |
| `rows` | number | Opcjonalne | Dowolna liczba | Liczba wierszy (wysokość) (np. `2`) |
| `sub_button` | object | Opcjonalne | Zobacz [podprzyciski](#podprzyciski) | Dodaje niestandardowe przyciski przypięte do prawej strony |

</details>

<details>

<summary><b>Zmienne CSS (zobacz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Główny kolor tła dla obsługiwanych elementów karty select |
| `--bubble-select-background-color` | `color` | Kolor tła karty select |
| `--bubble-select-list-border-radius` | `px` | Promień zaokrąglenia menu rozwijanego w karcie |
| `--bubble-select-list-item-accent-color` | `color` | Kolor akcentu dla wybranego elementu |
| `--bubble-select-list-background-color` | `color` | Kolor tła menu rozwijanego w karcie |
| `--bubble-select-list-width` | `px` | Szerokość menu rozwijanego w karcie |
| `--bubble-select-arrow-background-color` | `color` | Kolor tła strzałki menu rozwijanego |
| `--bubble-select-button-border-radius` | `px` | Promień zaokrąglenia przycisku select |
| `--bubble-select-border-radius` | `px` | Promień zaokrąglenia karty select |
| `--bubble-select-icon-border-radius` | `px` | Promień zaokrąglenia kontenera ikony karty select |
| `--bubble-select-icon-background-color` | `color` | Kolor tła kontenera ikony karty select |
| `--bubble-select-box-shadow` | Zobacz [cień](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cień karty select |

</details>


#### Przykłady

<details>

<summary>Karta select z listą scen</summary>

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

## Klimatyzacja

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Ta karta pozwala sterować Twoimi encjami `climate`.

> [!TIP]
> Menu wyboru trybu to [podprzycisk](#podprzyciski), który jest dodawany automatycznie przy tworzeniu karty. Możesz go później zmodyfikować lub usunąć według uznania.

### Opcje klimatyzacji

<details>

<summary><b>Opcje (YAML + opisy)</b></summary>

| Nazwa                     | Typ    | Wymagane                         | Obsługiwane opcje                                  | Opis                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Wymagane**                        | Encja klimatyzacji                                   | Encja do sterowania (np. `climate.living_room`).                                                            |
| `name`                  | string  | Opcjonalne                            | Dowolny ciąg znaków                                       | Niestandardowa nazwa karty. Jeśli nie zdefiniowano, wyświetlana będzie nazwa encji.                                    |
| `icon`                  | string  | Opcjonalne                            | Dowolna ikona `mdi:`                                  | Niestandardowa ikona karty. Jeśli nie zdefiniowano, użyta zostanie ikona encji lub `entity-picture`.                   |
| `force_icon`            | boolean | Opcjonalne                            | `true` lub `false` (domyślnie)                     | Nadaje priorytet ikonie zamiast `entity-picture`.                                                           |
| `show_state`            | boolean | Opcjonalne                            | `true` lub `false` (domyślnie)                     | Pokaż lub ukryj aktualny stan `entity`.                                                                 |
| `show_name`             | boolean | Opcjonalne                            | `true` (domyślnie) lub `false`                     | Pokaż lub ukryj nazwę encji.                                                                            |
| `show_icon`             | boolean | Opcjonalne                            | `true` (domyślnie) lub `false`                     | Pokaż lub ukryj ikonę.                                                                                          |
| `hide_target_temp_low`  | boolean | Opcjonalne (tylko dla encji obsługujących `target_temp_low`) | `true` lub `false` (domyślnie) | Ukrywa sterowanie dolną temperaturą docelową, jeśli obsługiwane przez `entity`.                                          |
| `hide_target_temp_high` | boolean | Opcjonalne (tylko dla encji obsługujących `target_temp_high`)| `true` lub `false` (domyślnie) | Ukrywa sterowanie górną temperaturą docelową, jeśli obsługiwane przez `entity`.                                         |
| `state_color`           | boolean | Opcjonalne                            | `true` lub `false` (domyślnie)                     | Stosuje stały kolor tła, gdy encja klimatyzacji jest włączona.                                              |
| `step` | number | Opcjonalne | Dowolna liczba | Krok temperatury. |
| `min_temp` | number | Opcjonalne | Dowolna liczba | Minimalna temperatura. |
| `max_temp` | number | Opcjonalne | Dowolna liczba | Maksymalna temperatura. |
| `button_action` | object | Opcjonalne | `tap_action`, `double_tap_action` lub `hold_action`, zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Pozwala zmienić domyślne akcje po kliknięciu przycisku. |
| `tap_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po dotknięciu ikony, jeśli nie zdefiniowano, użyta zostanie `more-info`. |
| `double_tap_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po podwójnym dotknięciu ikony, jeśli nie zdefiniowano, użyta zostanie `none`. |
| `hold_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po przytrzymaniu ikony, jeśli nie zdefiniowano, użyta zostanie `more-info`. |                              |
| `main_buttons_position` | string | Opcjonalne | `default` lub `bottom` | Przenosi przyciski akcji klimatyzacji na dół (na stałe) |
| `main_buttons_full_width` | boolean | Opcjonalne | `true` lub `false` | Rozciąga dolne przyciski akcji na całą szerokość (domyślnie: `true`, gdy pozycja to `bottom`) |
| `main_buttons_alignment` | string | Opcjonalne | `end` (domyślnie), `center`, `start`, `space-between` | Wyrównanie dolnych przycisków akcji, gdy nie są na całą szerokość |
| `card_layout` | string | Opcjonalne | `normal` (domyślnie poza widokiem sekcji), `large` (domyślnie w widoku sekcji), `large-2-rows`, `large-sub-buttons-grid` | Układ stylizacji karty, zobacz [układy kart](#układy-kart) |
| `rows` | number | Opcjonalne | Dowolna liczba | Liczba wierszy (wysokość) (np. `2`) |
| `sub_button`            | object  | Opcjonalne                            | Zobacz [podprzyciski](#podprzyciski)                | Dodaje niestandardowe przyciski przypięte do prawej strony. Przydatne przy menu wyboru trybu klimatyzacji.                                  |

</details>

<details>

<summary><b>Zmienne CSS (zobacz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Główny kolor tła dla obsługiwanych elementów karty klimatyzacji |
| `--bubble-climate-border-radius` | `px` | Promień zaokrąglenia obsługiwanych elementów karty klimatyzacji |
| `--bubble-climate-button-background-color` | `color` | Kolor tła przycisków karty klimatyzacji |
| `--bubble-climate-icon-border-radius` | `px` | Promień zaokrąglenia kontenera ikony karty klimatyzacji |
| `--bubble-state-climate-fan-only-color` | `color` | Kolor nakładki dla stanu tylko wentylator |
| `--bubble-state-climate-dry-color` | `color` | Kolor nakładki dla stanu osuszania |
| `--bubble-state-climate-cool-color` | `color` | Kolor nakładki dla stanu chłodzenia |
| `--bubble-state-climate-heat-color` | `color` | Kolor nakładki dla stanu grzania |
| `--bubble-state-climate-auto-color` | `color` | Kolor nakładki dla stanu automatycznego |
| `--bubble-state-climate-heat-cool-color` | `color` | Kolor nakładki dla stanu grzanie-chłodzenie |
| `--bubble-climate-accent-color` | `color` | Kolor akcentu karty klimatyzacji |
| `--bubble-climate-box-shadow` | Zobacz [cień](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cień kontenera klimatyzacji. |

</details>


#### Przykłady

<details>

<summary>Karta klimatyzacji z rozwijanym menu trybów HVAC</summary>

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

## Kalendarz

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Ta karta pozwala wyświetlać Twoje encje kalendarza. Jej zawartość można przewijać, dzięki czemu łatwo przeglądniesz nadchodzące wydarzenia.

### Opcje kalendarza

<details>

<summary><b>Opcje (YAML + opisy)</b></summary>

| Nazwa                | Typ    | Wymagane  | Obsługiwane opcje                               | Opis                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------|
| `days`              | number  | Opcjonalne     | Dowolna liczba (minimum: 1)                        | Liczba dni kalendarza, dla których pobierane są wydarzenia, od teraz do końca N-tego dnia (domyślnie: 7) |
| `entities`          | object  | **Wymagane** | Obiekt encji kalendarza (patrz poniżej)            | Encja do sterowania (np. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Wymagane** | Encja kalendarza                               | Encja kalendarza do wyświetlenia                                                          |
| `entities.color`    | string  | Opcjonalne     | Kolor                                         | Niestandardowy kolor etykiety kalendarza. Jeśli nie zdefiniowano, wybrany zostanie kolor automatyczny |
| `days`              | number  | Opcjonalne     | Dowolna liczba (minimum: 1)                         | Liczba dni kalendarza, dla których pobierane są wydarzenia, od teraz do końca N-tego dnia (domyślnie: 7) |
| `limit`             | number  | Opcjonalne     | Liczba                                        | Liczba wydarzeń, które będą wyświetlane na karcie                                  |
| `show_end`          | boolean | Opcjonalne     | `true` lub `false` (domyślnie)                     | Pokaż lub ukryj czas zakończenia wydarzeń                                                    |
| `show_progress`     | boolean | Opcjonalne     | `true` (domyślnie) lub `false`                     | Pokaż lub ukryj pasek postępu wydarzenia                                                     |
| `show_started_events`| boolean | Opcjonalne     | `true` (domyślnie) lub `false`                     | Pokaż lub ukryj wydarzenia, które aktualnie trwają. Wydarzenia wielodniowe są oceniane dzień po dniu, więc ukrywany jest tylko trwający dzień, a kolejne dni pozostają widoczne |
| `scrolling_effect`  | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pozwala tekstowi przewijać się, gdy zawartość przekracza rozmiar kontenera |
| `event_action` | object | Opcjonalne | `tap_action`, `double_tap_action` lub `hold_action`, zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Pozwala dodać akcje po kliknięciu wydarzenia. |
| `tap_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po dotknięciu dnia, jeśli nie zdefiniowano, użyta zostanie `none`. |
| `double_tap_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po podwójnym dotknięciu dnia, jeśli nie zdefiniowano, użyta zostanie `none`. |
| `hold_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Określa typ akcji po przytrzymaniu dnia, jeśli nie zdefiniowano, użyta zostanie `none`. |
| `card_layout` | string | Opcjonalne | `normal` (domyślnie poza widokiem sekcji), `large` (domyślnie w widoku sekcji), `large-2-rows`, `large-sub-buttons-grid` | Układ stylizacji karty, zobacz [układy kart](#układy-kart) |
| `rows` | number | Opcjonalne | Dowolna liczba | Liczba wierszy (wysokość) (np. `2`) |
| `sub_button` | object | Opcjonalne | Zobacz [podprzyciski](#podprzyciski) | Dodaje niestandardowe przyciski przypięte do prawej strony |

</details>

<details>

<summary><b>Zmienne CSS (zobacz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna                                  | Oczekiwana wartość | Opis                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Główny kolor tła dla obsługiwanych elementów karty kalendarza  |
| `--bubble-calendar-border-radius`         | `px`           | Promień zaokrąglenia obsługiwanych elementów karty kalendarza |
| `--bubble-calendar-height`                | `px`           | Wysokość karty kalendarza                                        |

</details>

#### Przykłady

<details>

<summary>Karta kalendarza z ograniczoną liczbą wydarzeń</summary>

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

<summary>Karta kalendarza z czasem zakończenia i paskiem postępu</summary>

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


## Separator

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Ta karta jest prostym separatorem do dzielenia pop-upu na kategorie / sekcje, np. Światła, Urządzenia, Rolety, Ustawienia, Automatyzacje...

### Opcje separatora

<details>

<summary><b>Opcje (YAML + opisy)</b></summary>

| Nazwa | Typ | Wymagalność | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `name` | string | Opcjonalne, ale zalecane | Dowolny ciąg znaków | Nazwa separatora |
| `icon` | string | Opcjonalne, ale zalecane | Dowolna ikona `mdi:` | Ikona separatora |
| `card_layout` | string | Opcjonalne | `normal` (domyślnie poza widokiem sekcji), `large` (domyślnie w widoku sekcji), `large-2-rows`, `large-sub-buttons-grid` | Układ stylu karty, zobacz [układy kart](#układy-kart) |
| `rows` | number | Opcjonalne | Dowolna liczba | Liczba wierszy (wysokość) (np. `2`) |
| `sub_button` | object | Opcjonalne | Zobacz [podprzyciski](#podprzyciski) | Dodaj niestandardowe przyciski przypięte do prawej strony |

</details>

<details>

<summary><b>Zmienne CSS (zobacz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Kolor tła linii w separatorze |

</details>

#### Przykład

<details>

<summary>Separator/rozdzielacz dla sekcji "Rolety"</summary>

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

## Pusta kolumna

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Ta karta służy do wypełnienia pustej kolumny. Jest przydatna, gdy masz `horizontal-stack` w swoim pop-upie z tylko jedną kartą. Spójrz w prawy dolny róg tego zrzutu ekranu, aby jej (nie) zobaczyć.

### Opcje pustej kolumny

Ta karta nie ma żadnych opcji i nie obsługuje [stylizacji](#stylizacja), obsługuje jednak opcje układu dla sekcji HA.

#### Przykład

<details>

<summary>Pusta kolumna w poziomym stosie</summary>

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

## Tylko podprzyciski

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Ta karta jest przeznaczona wyłącznie do podprzycisków. Idealnie nadaje się do menu, szybkich akcji, informacyjnych chipów albo stałej stopki u dołu strony.

> [!IMPORTANT]  
> Ta karta korzysta z nowego schematu podprzycisków. Użyj `sub_button.bottom`, aby zdefiniować swoje przyciski. Sekcja `sub_button.main` jest ignorowana.

### Opcje karty "Tylko podprzyciski"

<details>

<summary><b>Opcje (YAML + opisy)</b></summary>

| Nazwa | Typ | Wymagalność | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Wymagane** | Zobacz [podprzyciski](#podprzyciski) | Zdefiniuj podprzyciski za pomocą sekcji `bottom` |
| `hide_main_background` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Usuń tło karty |
| `footer_mode` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Przypnij kartę na dole strony |
| `footer_full_width` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Ustaw stopkę na pełną szerokość (100%) |
| `footer_width` | number | Opcjonalne | Dowolna liczba | Szerokość stopki w pikselach, gdy `footer_full_width` ma wartość `false` |
| `footer_bottom_offset` | number | Opcjonalne | Dowolna liczba | Odległość od dołu strony w pikselach (domyślnie: `16`) |
| `card_layout` | string | Opcjonalne | `normal` (domyślnie poza widokiem sekcji), `large` (domyślnie w widoku sekcji), `large-2-rows`, `large-sub-buttons-grid` | Układ stylu karty, zobacz [układy kart](#układy-kart) |
| `rows` | number | Opcjonalne | Dowolna liczba | Liczba wierszy (wysokość) (np. `2`) |

</details>

<details>

<summary><b>Zmienne CSS (zobacz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Szerokość stopki, gdy `footer_full_width` ma wartość `false` |
| `--bubble-footer-bottom` | `px` | Odsunięcie stopki od dołu |
| `--bubble-footer-box-shadow` | zobacz [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Cień pojemnika stopki |

</details>

#### Przykłady

<details>

<summary>Chipy jak na zrzucie ekranu</summary>

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

<summary>Stała stopka z menu</summary>

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

## Podprzyciski

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

W każdej karcie obsługującej tę opcję możesz dodać podprzyciski, aby jeszcze bardziej dostosować swoje karty. Możesz na przykład stworzyć przycisk sterujący odkurzaczem, kartę pogody albo niemal wszystko, co przyjdzie ci do głowy. Te podprzyciski obsługują akcje dotknięcia oraz większość opcji przycisku.

Podprzyciski obsługują teraz trzy typy: **Domyślny (przycisk)**, **Suwak** i **Lista rozwijana / Select**. Możesz łączyć typy w tej samej karcie, umieszczać podprzyciski na górze lub na dole i organizować je w grupy dla bardziej zaawansowanych układów.

#### Rozmieszczenie podprzycisków i grupy

<details>

<summary><b>Struktura podprzycisków (main / bottom + grupy)</b></summary>

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

**Uwagi:**
- `main` i `bottom` to dwie niezależne sekcje. Dolne podprzyciski są przypięte do dołu karty.
- `main_layout` i `bottom_layout` przyjmują wartość `inline` (domyślnie) lub `rows`, aby ułożyć grupy pionowo.
- Grupy są obiektami z tablicą `group` oraz opcjonalnym `buttons_layout` (`inline` lub `column`).
- `justify_content` jest dostępne **tylko dla dolnych grup** (`start`, `center`, `end`, `fill`).
- Gdy obecne są dolne podprzyciski, układ karty automatycznie przełącza się na `large`, chyba że jawnie ustawisz inny układ.
- Starsze tablice `sub_button` są nadal obsługiwane i traktowane jako sekcja `main`.

</details>

### Opcje podprzycisków

<details>

<summary><b>Opcje (YAML + opis)</b></summary>

| Nazwa | Typ | Wymagalność | Obsługiwane opcje | Opis |
| --- | --- | --- | --- | --- |
| `entity` | string | Opcjonalne | Dowolna encja | Encja do sterowania |
| `name` | string | Opcjonalne | Dowolny ciąg znaków | Nazwa podprzycisku, jeśli nie zdefiniowana, wyświetlona zostanie nazwa encji |
| `icon` | string | Opcjonalne | Dowolna ikona `mdi:` | Ikona podprzycisku, jeśli nie zdefiniowana, wyświetlona zostanie ikona encji lub jej zdjęcie |
| `force_icon` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Wymuś ikonę, nawet jeśli dostępne jest zdjęcie encji |
| `sub_button_type` | string | Opcjonalne | `default`, `slider` lub `select` | Wybierz typ podprzycisku |
| `show_background` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokaż tło podprzycisku, jego kolor zmieni się w zależności od stanu encji |
| `state_background` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Użyj koloru stanu, gdy encja jest `on` |
| `light_background` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Użyj koloru światła jako tła, gdy jest dostępny |
| `show_state` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż lub ukryj stan `entity` |
| `show_name` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż lub ukryj nazwę |
| `show_icon` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokaż lub ukryj ikonę |
| `show_last_changed` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż czas ostatniej zmiany `entity` |
| `show_last_updated` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż czas ostatniej aktualizacji `entity` |
| `show_attribute` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Pokaż atrybut `entity` pod jej `name` |
| `attribute` | string | Opcjonalne (wymagane, jeśli `show_attribute` ma wartość `true`) | Atrybut z `entity` | Atrybut do wyświetlenia (np. `brightness`) |
| `select_attribute` | string | Opcjonalne | Lista atrybutów z `entity` (zobacz obsługiwane opcje powyżej) | Ta lista atrybutów otworzy listę rozwijaną po kliknięciu (np. `effect_list`) |
| `show_arrow` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pokaż lub ukryj strzałkę listy rozwijanej dla podprzycisków typu select |
| `scrolling_effect` | boolean | Opcjonalne | `true` (domyślnie) lub `false` | Pozwól tekstowi przewijać się, gdy treść przekracza rozmiar kontenera |
| `tap_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Zdefiniuj rodzaj akcji po kliknięciu podprzycisku, jeśli niezdefiniowana, użyta zostanie `more-info` |
| `double_tap_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Zdefiniuj rodzaj akcji po podwójnym kliknięciu podprzycisku, jeśli niezdefiniowana, użyta zostanie `none` |
| `hold_action` | object | Opcjonalne | Zobacz [akcje](#akcje-dotknięcia-podwójnego-dotknięcia-i-przytrzymania) | Zdefiniuj rodzaj akcji po przytrzymaniu podprzycisku, jeśli niezdefiniowana, użyta zostanie `more-info` |
| `fill_width` | boolean | Opcjonalne | `true` lub `false` | Wypełnij dostępną szerokość (domyślnie: `false` dla main, `true` dla bottom) |
| `width` | number lub string | Opcjonalne | Dowolna liczba lub długość CSS | Niestandardowa szerokość (`px` dla sekcji main, `%` dla sekcji bottom domyślnie) |
| `custom_height` | number | Opcjonalne | Dowolna liczba | Niestandardowa wysokość w pikselach |
| `content_layout` | string | Opcjonalne | `icon-left` (domyślnie), `icon-top`, `icon-bottom`, `icon-right` | Umiejscowienie ikony wewnątrz podprzycisku |
| `always_visible` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | **Tylko suwak.** Zawsze pokazuj suwak zamiast otwierać go po dotknięciu |
| `show_button_info` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | **Tylko suwak.** Pokaż ikonę/nazwę/stan, gdy włączone jest `always_visible` |
| `visibility` | object lub list | Opcjonalne | Zobacz [warunki](#warunki) | Pokaż lub ukryj podprzycisk na podstawie warunków |
| `hide_when_parent_unavailable` | boolean | Opcjonalne | `true` lub `false` (domyślnie) | Ukryj podprzycisk, jeśli encja karty nadrzędnej jest niedostępna |
| `css_class` | string | Opcjonalne | Dowolny ciąg znaków | Dodatkowa klasa CSS podprzycisku, aby wskazać go w swoich [stylach](#stylizacja) niezależnie od jego nazwy (np. `My value` daje `.my-value`) |

</details>

<details>

<summary><b>Opcje suwaka podprzycisku (takie same jak suwaki przycisków)</b></summary>

<br>

Podprzyciski typu suwak obsługują te same opcje co suwaki przycisków, w tym:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Zmienne CSS (zobacz <a href="#stylizacja">Stylizacja</a>)</b></summary>

| Zmienna | Oczekiwana wartość | Opis |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Promień zaokrąglenia podprzycisków |
| `--bubble-sub-button-background-color` | `color` | Kolor tła podprzycisków |
| `--bubble-sub-button-outline` | `box-shadow` | Obrys dodawany do podprzycisku lub suwaka tylko wtedy, gdy przyjmuje on ten sam kolor co karta za nim, co uczyniłoby go niewidocznym (ustaw `none`, aby go usunąć) |
| `--bubble-sub-slider-border-radius` | `px` | Promień zaokrąglenia podprzycisków typu suwak |
| `--bubble-sub-slider-background-color` | `color` | Kolor tła podprzycisków typu suwak |
| `--bubble-sub-slider-height` | `px` | Wysokość zawsze widocznych podprzycisków typu suwak |
| `--bubble-sub-slider-outline` | `box-shadow` | Obrys wyłącznie podprzycisków typu suwak, w razie braku używa `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Kolor tekstu na jasnych tłach podprzycisków |

</details>

#### Przykłady

<details>

<summary>Przycisk z kilkoma podprzyciskami tworzącymi kartę odkurzacza (jak na zrzucie ekranu)</summary>

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

<summary>Suwak przycisku z podprzyciskiem pokazującym jasność i innym przełączającym światło (jak na zrzucie ekranu)</summary>

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

<summary>Przycisk pokazujący temperaturę wewnątrz i na zewnątrz wraz z pogodą na dziś i jutro (zrzut ekranu dołączony)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Mój pech, u mnie jest cały czas pochmurno, ale wszystkie ikony zmieniają się zależnie od pogody.

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

## Układy kart

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card w pełni obsługuje widok sekcji Home Assistant, możesz zmienić układ karty, aby ją powiększyć, a także zmienić liczbę kolumn lub wierszy, jakie karta ma zajmować w widoku sekcji (tylko w kartach obsługujących tę opcję). Te układy są obsługiwane również we wszystkich innych typach widoków.

<details>

<summary><b>Dostępne układy karty</b></summary>

| Układ | Opis |
| --- | --- |
| `normal` | Zwykły układ (nie zoptymalizowany pod widok sekcji) |
| `large` | Większy układ, który dostosuje rozmiar do wybranych wierszy w widoku sekcji (zoptymalizowany pod widok sekcji) |
| `large-2-rows` | Większy układ z 2 wierszami podprzycisków, który dostosuje rozmiar do wybranych wierszy w widoku sekcji (zoptymalizowany pod widok sekcji) |
| `large-sub-buttons-grid` | Ten układ wyświetla podprzyciski w siatce, `rows` musi być ustawione na co najmniej `2`.

</details>

#### Przykłady

<details>

<summary>Duży przycisk pokazujący statystyki energii z 2 wierszami podprzycisków (ze zrzutem ekranu)</summary>

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

<summary>Duży przycisk z wieloma wierszami i 12 podprzyciskami</summary>

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

## Warunki

Niektóre opcje są sterowane warunkami, zapisywanymi dokładnie tak jak te w [karcie warunkowej](https://www.home-assistant.io/dashboards/conditional/) Home Assistant:

- `visibility` na [podprzycisku](#podprzyciski), aby go pokazać lub ukryć
- `trigger` na [pop-upie](#pop-up), aby otworzyć go, gdy warunki są spełnione
- `checkConditionsMet(conditions, hass)` w twoich [szablonach](#szablony), gdy potrzebujesz odpowiedzi we własnym kodzie

Oceniany jest każdy typ warunku Home Assistant: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template` oraz grupy `and`, `or` i `not`. Działają też warunki z kreatora warunków Home Assistant, te nazwane od swojej domeny, jak `sun.is_up`, `light.is_on`, `zone.in_zone` czy `temperature.is_value`, wraz z ustawieniami `target`, `options`, `behavior` i `for`.

<details>

<summary><b>Przykład</b></summary>

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
> Warunki są oceniane w twojej przeglądarce, więc te nieliczne, które potrzebują serwera Home Assistant, nie mogą być dokładne: wschód i zachód słońca są odczytywane z encji `sun.sun` zamiast być przeliczane, a czas trwania `for` jest mierzony od ostatniej zmiany stanu, bez historii recordera.
>
> `view_columns` jest przyjmowany, ale zawsze przechodzi, ponieważ to nigdy nie Bubble Card rozkłada kolumny twojego widoku. Typ warunku, którego Bubble Card nie zna, zgłasza się raz w konsoli przeglądarki, zamiast po cichu zawieść, dzięki czemu odróżnisz literówkę od brakującej funkcji.

<br>

---

<br>

## Akcje dotknięcia, podwójnego dotknięcia i przytrzymania

Możesz też używać domyślnych akcji dotknięcia, podwójnego dotknięcia i przytrzymania Home Assistant na kartach, które obsługują tę opcję. Pozwala to na przykład wyświetlić okno „Więcej informacji” po przytrzymaniu ikony przycisku lub wywołać usługę po naciśnięciu podprzycisku.

**Uwaga: gdy skonfigurowana jest `double_tap_action`, zwykła `tap_action` będzie miała opóźnienie 200 ms, aby umożliwić wykrycie
podwójnego dotknięcia. Jeśli to opóźnienie jest niepożądane, ustaw `double_tap_action` na `none`, aby wyłączyć obsługę podwójnego dotknięcia.**

### Opcje akcji

<details>

<summary><b>Opcje (YAML + opis)</b></summary>

| Nazwa | Typ | Obsługiwane opcje | Opis |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Akcja do wykonania |
| `target` | object |  | Działa tylko z `call-service`. Zgodne ze [składnią home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Dowolna ścieżka Twojego dashboardu | Ścieżka, do której nastąpi nawigacja (np. `'#kitchen'`, aby otworzyć pop-up), gdy akcja zdefiniowana jest jako navigate |
| `url_path` | string | Dowolny link | Adres URL do otwarcia po kliknięciu (np. `https://www.google.com`), gdy akcja to `url` |
| `service` | string | Dowolna usługa | Usługa do wywołania (np. `media_player.media_play_pause`), gdy `action` zdefiniowana jest jako `call-service` |
| `data` lub `service_data` | object | Dowolne dane usługi | Dane usługi do dołączenia (np. `entity_id: media_player.kitchen`), gdy `action` zdefiniowana jest jako `call-service` |
| `confirmation` | object | Zobacz [potwierdzenie](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Wyświetla wyskakujące okno potwierdzenia (nie takie jak w Bubble Card), nadpisuje domyślny obiekt `confirmation` |

</details>

#### Przykład

<details>

<summary>Przycisk otwierający pop-up</summary>

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

## Stylizacja

Możesz dodać niestandardowe style, aby zmodyfikować CSS wszystkich kart **bez użycia card-mod**, na cztery sposoby:

- W edytorze przejdź do karty, którą chcesz zmodyfikować, następnie przejdź do _Opcje stylu > Niestandardowe style i szablony JS_ i dodaj swoje niestandardowe style (sprawdź wskazówki i przykłady poniżej).
- W edytorze (lub w [YAML](#moduły)) przejdź do karty, którą chcesz zmodyfikować, następnie przejdź do _Moduły_, następnie utwórz nowy moduł (będzie dostępny dla wszystkich kart), albo przejdź do **Module Store**, aby zainstalować dowolny dostępny moduł (więcej informacji o modułach znajdziesz [poniżej](#moduły)).
- W pliku [motywu](https://www.home-assistant.io/integrations/frontend/#defining-themes), dodając zmienne CSS w YAML (są one dostępne w dokumentacji każdej karty powyżej). Pozwala to na globalne modyfikacje.

  <details>
  
  <summary>Przykład</a></summary>
  
  <br>

  Nie kopiuj linii `Bubble:`, to jest nazwa motywu, którego używasz. Musisz też usunąć `--` ze zmiennych.

  Musisz uruchomić akcję [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes), aby odświeżyć motyw po wszelkich modyfikacjach.

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
  
- W YAML, dodając `styles: |`, a następnie swoje niestandardowe style (sprawdź wskazówki i przykłady poniżej).

> [!TIP]  
> **Aby dowiedzieć się, które klasy stylów można modyfikować**, zajrzyj do folderu [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) w tym repozytorium. W folderze każdej karty znajdziesz plik o nazwie `styles.css`. Te pliki zawierają wszystkie zastosowane style. Daje to znacznie więcej możliwości niż zmienne CSS, ale trzeba je dodawać osobno do każdej karty.
> 
> Znajdziesz też wiele [przykładów od społeczności](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) lub kilka z [forum Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/), trochę szukając.
>
> Motyw Bubble dla Home Assistant (jak na zrzutach ekranu) znajdziesz [tutaj](https://github.com/Clooos/Bubble).
>
> Wkrótce na moim [kanale YouTube](https://www.youtube.com/@cloooos) pojawi się film samouczek!

> [!IMPORTANT]  
> Pamiętaj, że do niektórych już zdefiniowanych stylów CSS może być konieczne dodanie `!important;` (zobacz przykłady poniżej).

> [!TIP]  
> Podprzyciski można wskazywać za pomocą klas opartych na nazwie. Na przykład podprzycisk o nazwie „My sub-button” można stylizować za pomocą `.my-sub-button`. Podprzyciski suwaka udostępniają też `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` itd.
>
> Klasa oparta na nazwie zmienia się, gdy zmieniasz nazwę podprzycisku, i jest tłumaczona wraz z nazwą. Ustaw `css_class` na podprzycisku, aby uzyskać własną klasę, która nigdy się nie zmienia, niezależnie od nazwy i języka.

#### Przykłady

<details>

<summary>Zmiana rozmiaru czcionki dowolnej karty Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Zmiana koloru tła pojedynczego przycisku w poziomym stosie przycisków</summary>

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

<summary>Zmiana koloru tła karty</summary>

<br>

Ten działa na wszystkich typach kart Bubble Card (z wyjątkiem pop-upów):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Ten robi to samo, ale tylko w karcie przycisku (działa też dla nagłówka pop-upu): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Aby zmienić kolor, gdy stan to `on`, zobacz szablony stylów poniżej.

</details>

<details>

<summary>Zmiana koloru suwaka przycisku</summary>

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

<summary>Zmiana koloru linii separatora</summary>

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

<summary>Zmiana koloru ikony</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Dla ikony w poziomym stosie przycisków.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Zmiana koloru tła kontenera ikony</summary>

<br>

Ten działa na wszystkich typach kart Bubble Card (z wyjątkiem pop-upów):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Ten robi to samo dla nagłówka pop-upu: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Zmiana rozmiaru podprzycisków (idealne dla dużego układu)</summary>

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

<summary>Zmiana koloru tła drugiego podprzycisku</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Zmiana rozmiaru ikony</summary>

<br>

Dla głównej ikony.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Dla ikon podprzycisków.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Użycie obrazu zamiast ikony w podprzycisku</summary>

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

Wystarczy przesłać ten obraz do folderu „pictures” (lub dowolnej innej nazwy) w folderze „www” Home Assistant.

</details>

<details>

<summary>Zaawansowany przykład: tworzenie poziomego rzędu podprzycisków (ze zrzutem ekranu)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Naprawdę uwielbiam ten przykład, używam go jako nagłówka na moim dashboardzie.

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

## Szablony

**Bubble Card nie obsługuje szablonów Jinja**, ale zaawansowani użytkownicy mogą dodawać szablony JS bezpośrednio w swoich [niestandardowych stylach](#stylizacja). Pozwala to na przykład dynamicznie zmieniać ikonę, teksty lub kolory elementu, warunkowo pokazywać lub ukrywać element (na przykład podprzycisk), albo niemal dowolnie reagować na stan, atrybut i wiele więcej.

> [!TIP]  
> Więcej informacji o szablonach JS [tutaj](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Moja rada: **zawsze zaglądaj do konsoli przeglądarki**, aby upewnić się, że wszystko działa poprawnie.

> [!IMPORTANT]  
> **Wszystkie szablony, które nie modyfikują właściwości CSS, muszą znajdować się na końcu! Na przykład te zmieniające ikonę, tekst lub dowolny element.**

#### Dostępne zmienne i funkcje

<details>

<summary>Zmienne</summary>

<br>

W większości kart masz dostęp do tych zmiennych:

- `state` zwróci stan zdefiniowanej `entity`.
  
- `entity` zwróci Twoją encję zdefiniowaną tak jak `switch.test` w tym przykładzie.
  
- `icon` możesz użyć w ten sposób, aby zmienić ikonę `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` zwróci stan zdefiniowanej `entity` pierwszego podprzycisku, `[0]` to stan pierwszego podprzycisku, `[1]` drugiego...
  
- `subButtonIcon[0]` możesz użyć w ten sposób, aby zmienić ikonę pierwszego podprzycisku `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` to ikona pierwszego podprzycisku, `[1]` drugiego...
  
- `card` zwróci element karty w DOM.
  
- `hass` to zaawansowana zmienna dająca jeszcze większą kontrolę, na przykład możesz zwrócić stan `light.kitchen` w ten sposób `hass.states['light.kitchen'].state` albo atrybut w ten sposób `hass.states[entity].attributes.brightness`.

- `this` zwróci wiele przydatnych informacji o Twojej konfiguracji i pulpicie, używaj tego tylko, jeśli wiesz, co robisz.

</details>

<details>

<summary>Funkcje</summary>

<br>

Masz dostęp do wszystkich globalnych funkcji JS, a dodatkowo do:

- `getWeatherIcon` może zwrócić ikonę pogody na podstawie stanu zwracającego pogodę. Możesz na przykład napisać `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}`, aby zmienić ikonę trzeciego podprzycisku na dzisiejszą ikonę pogody, `.forecast[1]?.condition` dotyczy jutra...

  W tym celu musisz utworzyć czujnik szablonowy. Oto, co możesz dodać w swoim `configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` zwraca `true`, gdy lista [warunków](#warunki) jest spełniona, na przykład `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` możesz użyć do przetłumaczenia stanu (może też posłużyć do pobrania jednostki stanu, bez potrzeby dodawania jej ręcznie).
- `hass.formatEntityAttributeValue(state, "attribute")` możesz użyć do przetłumaczenia atrybutu (może też posłużyć do pobrania jednostki stanu, bez potrzeby dodawania jej ręcznie).

</details>

#### Przykłady

Poniżej znajdziesz wiele przykładów, ale bardzo zaawansowane szablony znajdziesz też na mojej [stronie Patreon](https://www.patreon.com/c/Clooos), na przykład jeden (mój ulubiony), który pozwala umieścić do czterech warunkowych plakietek wokół ikon karty. To także świetny sposób, aby poznać wszystkie możliwości niestandardowych stylów i szablonów Bubble Card!

<details>
<summary>Przykłady z mojej strony Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Dodawanie plakietek w stylu Home Assistant do dowolnej karty</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Wyświetlanie sformatowanej daty i godziny w separatorze bez użycia żadnej encji</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Wyświetlanie stanu podprzycisku na dwóch liniach</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Dostosowywanie etykiet i ikon wewnątrz podprzycisku select</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Dodawanie trwałego pop-upu z przypomnieniem, który pojawia się tylko wtedy, gdy jest potrzebny</a>
</p>

<br>

</details>

<details>

<summary>Zmiana koloru tła przycisku, który jest czerwony, gdy jest <code>off</code>, i niebieski, gdy jest <code>on</code></summary>

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

<summary>Zmiana koloru tła przycisku na podstawie encji dla poziomego stosu przycisków</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Warunkowe pokazywanie/ukrywanie podprzycisku</summary>

<br>

Ten przykład pokazuje pierwszy podprzycisk tylko wtedy, gdy mój odkurzacz utknął.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Ten przykład pokazuje podprzycisk, gdy poziom baterii spada poniżej 10%. Przydatne z podprzyciskiem pokazującym „Niski poziom baterii”.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Warunkowa zmiana ikony przycisku lub podprzycisku</summary>

<br>

Ten przykład zmienia ikonę przycisku tylko wtedy, gdy odkurzacz utknął.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Ten przykład zmienia ikonę pierwszego podprzycisku tylko wtedy, gdy odkurzacz utknął.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Warunkowa zmiana koloru ikony przycisku lub podprzycisku</summary>

<br>

Ten przykład zmienia kolor ikony przycisku na podstawie jego stanu.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Ten przykład zmienia kolor ikony podprzycisku na podstawie jego stanu. `.bubble-sub-button-1` to pierwszy podprzycisk, zamień `1`, jeśli chcesz zmienić ikonę innego podprzycisku.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Warunkowa animacja ikony wentylatora</summary>

<br>

Ten przykład obraca ikonę przycisku, gdy wentylator jest `on`.
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

<summary>Szablonowanie tekstów (na przykład nazwy lub stanu)</summary>

<br>

Ten przykład zmienia nazwę/stan przycisku na „Aktualnie jest słonecznie” w zależności od pogody.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
lub zastosowane do podprzycisków:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Jeśli chcesz szablonować stan (`.bubble-state`), nie włączaj `show_state: true`, tylko włącz `show_attribute: true` bez żadnego atrybutu.

</details>

<details>

<summary>Przykład zaawansowany: zmiana koloru podprzycisku, gdy pop-up jest otwarty</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Przykład zaawansowany: szablonowanie nazwy separatora na podstawie stanu przetłumaczonego na Twój język</summary>

<br>

Możesz użyć `hass.formatEntityState(state)`, aby przetłumaczyć stan, oraz `hass.formatEntityAttributeValue(state, "attribute")`, aby przetłumaczyć atrybut.

Ten przykład zmienia nazwę i ikonę na podstawie pogody, „Nuageux” oznacza „Zachmurzenie” po francusku.

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

## Moduły

Moduły to potężna funkcja, która pozwala zapisywać, ponownie wykorzystywać i udostępniać niestandardowe style i szablony we wszystkich Twoich kartach Bubble Card. Zamiast kopiować i wklejać ten sam kod do wielu kart, możesz utworzyć moduł i zastosować go tam, gdzie jest potrzebny. Dzięki temu zarządzanie wyglądem pulpitu jest znacznie łatwiejsze i wydajniejsze.

Ale ta funkcja jest o wiele potężniejsza, pozwala samodzielnie dodawać prawdziwe funkcje w edytorze Bubble Card, korzystając ze wszystkich domyślnych opcji [formularza Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Selektor obiektów został ulepszony, aby pokazywał zmiany na żywo i poprawnie obsługiwał atrybuty.

Moduł może też odpowiadać selektorowi kart Home Assistant obok wbudowanych [sugestii encji](#sugestie-encji): użyj `suggestions` dla kart, które da się opisać z góry, oraz `suggestions_code`, gdy muszą zostać wyliczone z twojej instalacji, na przykład pop-up zbudowany ze wszystkich encji obszaru, do którego należy wybrana encja. Oba klucze są udokumentowane [tutaj](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Możesz też przeglądać **Module Store**, aby znaleźć i zainstalować [moduły stworzone przez społeczność](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) lub udostępnić własne!

> [!TIP]
> Kod modułu działa dokładnie tak samo jak kod w sekcji `styles` karty. Dostępne są te same zmienne i funkcje z sekcji [Szablony](#szablony).

<br>

### Konfiguracja początkowa

> [!IMPORTANT]
> Od wersji v3.1.0 Bubble Card Tools jest zalecanym mechanizmem przechowywania modułów. Starsza metoda z użyciem czujnika szablonowego nadal działa dla istniejących konfiguracji, ale nowe moduły i funkcje Module Store są najlepiej obsługiwane przez Bubble Card Tools.

Integracja Bubble Card Tools włącza edytor modułów oraz Module Store i zapisuje moduły jako pojedyncze pliki YAML. Istniejące moduły są migrowane automatycznie.

Kroki instalacji i konfiguracji zostały wyjaśnione tutaj:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Edytor modułów

Do edytora modułów masz dostęp z poziomu ustawień dowolnej karty, w sekcji **Moduły**. Edytor udostępnia dwie główne zakładki:

#### Zakładka Moje moduły

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Ta zakładka pokazuje wszystkie zainstalowane moduły i pozwala:

- **Zastosować** istniejące moduły do bieżącej karty
- **Utworzyć** nowy moduł od zera
- **Edytować** istniejące moduły z podglądem na żywo
- **Usunąć** moduły, których już nie potrzebujesz
- **Wyszukiwać** i **sortować** moduły (alfabetycznie, ostatnio dodane, aktywne jako pierwsze)
- **Ustawić status globalny**, aby moduł był stosowany automatycznie do wszystkich kart
- **Importować/eksportować** moduły do kopii zapasowej lub udostępniania
- **Pisać sugestie encji** w edytorze modułów, w sekcji **Opcjonalnie: sugestie encji**, aby twój moduł był proponowany w selektorze kart Home Assistant. Zarówno reguły, jak i obliczane sugestie są sprawdzane w trakcie pisania, błąd uniemożliwia zapis, a podgląd pokazuje proponowane karty dla dowolnie wybranej encji

#### Zakładka Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Ta zakładka pokazuje [wszystkie dostępne moduły od społeczności](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) i pozwala:

- **Przeglądać** wszystkie moduły stworzone przez społeczność
- **Wyszukiwać** i filtrować moduły według nazwy, zgodności lub słów kluczowych
- **Instalować** moduły jednym kliknięciem
- **Aktualizować** zainstalowane moduły, gdy dostępne są nowe wersje

> [!TIP]
> W edytorze możesz włączyć nieobsługiwane moduły, aby przetestować moduły, które nie zostały jeszcze oznaczone jako zgodne z danym typem karty.

<br>

### Jak korzystać z modułów

#### Tworzenie nowego modułu

<details>

<summary>Kliknij, aby rozwinąć</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Przejdź do edytora dowolnej karty i rozwiń sekcję **Moduły**.
2. Kliknij **Utwórz nowy moduł**.
3. Uzupełnij informacje o module.
4. Wpisz swój kod szablonu CSS i/lub JavaScript w edytorze **Kod**.
5. (Opcjonalnie) Utwórz niestandardowy interfejs konfiguracji w sekcji **Edytor** (jak selektor koloru na powyższym zrzucie ekranu, pełna dokumentacja dostępna [tutaj](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Opcjonalnie) Napisz swoje **Sugestie encji**, aby twój moduł był proponowany w selektorze kart Home Assistant. Panel sprawdza to, co piszesz, w trakcie pisania, a jego podgląd pokazuje same proponowane karty dla wybranej przez ciebie encji.
7. Kliknij **Zapisz**.

Twój moduł jest teraz dostępny do użycia w dowolnej z Twoich kart!

<br>

</details>

#### Stosowanie modułu do karty

<details>

<summary>Kliknij, aby rozwinąć</summary>

<br>

- **Przez edytor:**

  - Przejdź do edytora karty, do której chcesz zastosować moduł.
  - Rozwiń sekcję **Moduły**.
  - Kliknij na moduł, który chcesz zastosować, z listy.
  - Pod „Zastosuj do” kliknij „Ta karta”. Moduł jest teraz aktywny. Możesz zastosować wiele modułów do tej samej karty.

- **Przez YAML:**

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

#### Stosowanie modułu globalnie

<details>

<summary>Kliknij, aby rozwinąć</summary>

<br>

Możesz ustawić moduł tak, aby był stosowany automatycznie do wszystkich kart Bubble Card:

**Nie jest to dostępne dla modułów z edytorem, ponieważ wymagają one konkretnej konfiguracji, aby działać.**

- **Przez edytor:**

  - W edytorze modułów znajdź swój moduł w zakładce **Moje moduły**.
  - Przełącz przycisk **Wszystkie karty** obok nazwy modułu.
  - Moduł będzie teraz stosowany automatycznie do wszystkich kart.
 
- **Przez YAML:**

  W konfiguracji YAML modułu (w `bubble-modules.yaml`) dodaj po prostu `is_global: true`.

<br>

</details>

#### Wykluczanie pojedynczej karty z modułu globalnego

<details>

<summary>Kliknij, aby rozwinąć</summary>

<br>

Jeśli masz moduł globalny, ale chcesz go wykluczyć z konkretnej karty:

- **Przez edytor:**
  
  - W sekcji **Moduły** karty zobaczysz listę modułów globalnych.
  - Kliknij na moduł globalny, wyłącz „Ta karta”, aby wykluczyć go z tej konkretnej karty.

- **Przez YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Udostępnianie modułu w Module Store

<details>

<summary>Kliknij, aby rozwinąć</summary>

<br>

Aby udostępnić swój moduł w Module Store, w edytorze modułów, na dole w sekcji „Eksportuj moduł”, kliknij „Kopiuj dla GitHub” i wklej treść w nowej dyskusji w kategorii [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Zredaguj opis** (jeśli trzeba), **przykład** (dla użytkowników YAML) i pamiętaj, aby **dołączyć co najmniej jeden zrzut ekranu** dla Module Store.

**Twój moduł staje się dostępny od razu po tym** (po odświeżeniu Sklepu), więc dokładnie sprawdź, czy wszystko jest poprawnie napisane i czy moduł działa zgodnie z oczekiwaniami. Oczywiście możesz edytować/aktualizować moduł po jego udostępnieniu.

<br>

</details>

#### Zarządzanie wersjami

<details>

<summary>Kliknij, aby rozwinąć</summary>

<br>

Module Store automatycznie sprawdza dostępność aktualizacji zainstalowanych modułów. Gdy dostępne są aktualizacje:

1. Zobaczysz wskaźnik aktualizacji w zakładce **Module Store**.
2. Kliknij **Aktualizuj** przy modułach z dostępnymi aktualizacjami.
3. Potwierdź aktualizację w Module Store.

<br>

</details>

#### Definiowanie obsługiwanych typów kart

<details>

<summary>Kliknij, aby rozwinąć</summary>

<br>

Niektóre moduły mogą nie być zgodne ze wszystkimi typami kart. Możesz określić, które karty obsługuje dany moduł.  
Jeśli chcesz, aby moduł był zgodny ze **wszystkimi kartami**, po prostu pomiń pole `supported` (lub użyj opcji **Wszystkie karty** w edytorze).

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

### Przykłady

<details>
<summary>Podstawowy moduł stylizacji</summary>

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
<summary>Moduł z niestandardową konfiguracją</summary>

<br>

Ten moduł jest dostępny [tutaj](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Więcej przykładów znajdziesz w Module Store lub [tutaj](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Lokalizacja

Bubble Card mówi w twoim języku. Jego edytor jest przetłumaczony na 64 języki obsługiwane przez Home Assistant, a wszędzie tam, gdzie Home Assistant ma już swoje słowo, używane jest jego własne sformułowanie, więc w obu interfejsach czytasz te same terminy.

Na dole edytora, obok numeru wersji, przełącznik **Automatycznie** podąża za językiem twojego Home Assistant. Wyłącz go, a cały edytor wróci do angielskiego, co przydaje się przy śledzeniu poradnika lub zgłaszaniu problemu. Twój wybór jest zapamiętywany w przeglądarce.

Ta dokumentacja też jest tłumaczona, [na 62 języki](languages.md). Te strony są otwarte dla wszystkich, więc sformułowanie, które nie pasuje do twojego Home Assistant, można poprawić w kilka kliknięć. Wersja angielska pozostaje odniesieniem dla samej treści.

<br>

---

<br>

## Pomoc

Jeśli coś nie działa tak, jak powinno, śmiało otwórz zgłoszenie (issue). 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Masz pytania lub przemyślenia dotyczące Bubble Card? Chcesz podzielić się swoimi dashboardami lub odkryciami? Możesz odwiedzić forum Home Assistant, subreddit Bubble Card lub sekcję GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Współtworzenie

Wkład w projekt jest mile widziany! Niezależnie od tego, czy chodzi o poprawki błędów, nowe funkcje, tłumaczenia czy usprawnienia dokumentacji, śmiało otwórz pull request.

Zanim zaczniesz, przeczytaj [przewodnik dla programistów](DEVELOPERS.md), który opisuje, jak skonfigurować lokalne środowisko, zbudować projekt i przetestować swoje zmiany.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Wesprzyj projekt

Poświęcam większość swojego wolnego czasu, aby ten projekt był jak najlepszy. Jeśli doceniasz moją pracę, każda darowizna będzie świetnym sposobem, aby okazać wsparcie 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Dziękuję wszystkim za wsparcie, jesteście moją największą motywacją!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
