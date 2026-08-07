<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> Αυτή η σελίδα είναι αυτόματη μετάφραση. Σε περίπτωση αμφιβολίας, υπερισχύει η [πρωτότυπη αγγλική τεκμηρίωση](../README.md). Σας φαίνεται λάθος κάποια πρόταση; Κάθε βοήθεια είναι ευπρόσδεκτη και η [διόρθωση αυτής της σελίδας](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.el.md) παίρνει μόνο ένα λεπτό: το GitHub αναλαμβάνει το fork και το pull request. Ευχαριστούμε εκ των προτέρων! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[Διαβάστε το σε άλλη γλώσσα](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Το Bubble Card είναι μια μινιμαλιστική και προσαρμόσιμη συλλογή καρτών για το Home Assistant, με μοντέρνα pop-up και ένα ενσωματωμένο Module Store με πάνω από 100 modules φτιαγμένα από την κοινότητα.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## Πίνακας περιεχομένων

**[`Εγκατάσταση`](#εγκατάσταση)**  **[`Διαμόρφωση`](#διαμόρφωση)**  **[`Προτάσεις οντοτήτων`](#προτάσεις-οντοτήτων)**  **[`Pop-up`](#pop-up)**  **[`Οριζόντια στοίβα κουμπιών`](#οριζόντια-στοίβα-κουμπιών)**  **[`Κουμπί`](#κουμπί)**  **[`Media player`](#media-player)**  **[`Ρολά`](#ρολά)**  **[`Επιλογή`](#επιλογή)**  **[`Κλιματισμός`](#κλιματισμός)**  **[`Ημερολόγιο`](#ημερολόγιο)**  **[`Διαχωριστικό`](#διαχωριστικό)**  **[`Κενή στήλη`](#κενή-στήλη)**  **[`Μόνο υπο-κουμπιά`](#μόνο-υπο-κουμπιά)**  **[`Υπο-κουμπιά`](#υπο-κουμπιά)**  **[`Διατάξεις κάρτας`](#διατάξεις-κάρτας)**  **[`Συνθήκες`](#συνθήκες)**  **[`Ενέργειες`](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος)**  **[`Στυλ`](#στυλ)**  **[`Πρότυπα`](#πρότυπα)**  **[`Modules`](#modules)**  **[`Τοπική προσαρμογή`](#τοπική-προσαρμογή)**  **[`Βοήθεια`](#βοήθεια)**  **[`Συνεισφορά`](#συνεισφορά)**  **[`Δωρεά`](#δωρεά)**

<br>

## Εγκατάσταση

**Χαμηλότερη υποστηριζόμενη έκδοση του Home Assistant:** 2023.9.0

<details>

<summary>Χωρίς HACS</summary>

<br>

1. Κατεβάστε το `bubble-card.zip` από την [τελευταία έκδοση](https://github.com/Clooos/Bubble-Card/releases/latest)
2. Αποσυμπιέστε το στον φάκελο `<config>/www`, θα πρέπει να βρείτε το `bubble-card.js` και δίπλα του έναν φάκελο `translations` (αυτός ο φάκελος περιέχει τα λεξικά του επεξεργαστή, χωρίς αυτόν ο επεξεργαστής παραμένει στα αγγλικά)
3. Στο dashboard σας πατήστε στο εικονίδιο πάνω δεξιά και μετά στο `Edit dashboard`
4. Πατήστε ξανά σε αυτό το εικονίδιο και μετά πατήστε στο `Manage resources`
5. Πατήστε στο `Add resource`
6. Αντιγράψτε και επικολλήστε αυτό: `/local/bubble-card.js?v=1`
7. Πατήστε στο `JavaScript Module` και μετά στο `Create`
8. Επιστρέψτε πίσω και ανανεώστε τη σελίδα σας
9. Τώρα μπορείτε να πατήσετε στο `Add card` κάτω δεξιά και να αναζητήσετε το `Bubble Card`
10. Μετά από κάθε ενημέρωση του αρχείου θα πρέπει να επεξεργαστείτε το `/local/bubble-card.js?v=1` και να αλλάξετε την έκδοση σε οποιονδήποτε μεγαλύτερο αριθμό

Αν δεν λειτουργεί, δοκιμάστε απλώς να καθαρίσετε την προσωρινή μνήμη του browser σας.

</details>

<details>

<summary>Με HACS (Συνιστάται)</summary>

<br>

Αυτή η μέθοδος σας επιτρέπει να λαμβάνετε ενημερώσεις απευθείας από το Home Assistant Community Store

1. Αν το HACS δεν είναι ακόμα εγκατεστημένο, κατεβάστε το ακολουθώντας τις οδηγίες στο [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Προχωρήστε στην αρχική διαμόρφωση του HACS ακολουθώντας τις οδηγίες στο [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. Στην πλαϊνή μπάρα σας πηγαίνετε στο "HACS"
4. Αναζητήστε το "Bubble Card", ή πατήστε στο μπλε κουμπί παρακάτω
5. Πατήστε στο "Download"
6. Επιστρέψτε στο dashboard σας και πατήστε στο εικονίδιο πάνω δεξιά και μετά στο `Edit dashboard`
7. Τώρα μπορείτε να πατήσετε στο `Add card` κάτω δεξιά και να αναζητήσετε το `Bubble Card`

Αν δεν λειτουργεί, δοκιμάστε να καθαρίσετε την προσωρινή μνήμη του browser/εφαρμογής σας (σε όλες τις συσκευές σας αν χρειάζεται).

#### Βίντεο

Μπορείτε επίσης να ρίξετε μια ματιά στο κανάλι μου στο YouTube για βίντεο βήμα προς βήμα.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## Διαμόρφωση

Όλες οι επιλογές μπορούν να διαμορφωθούν στον επεξεργαστή του Home Assistant. Αλλά μπορείτε να βρείτε περισσότερες λεπτομέρειες και το YAML στην παρακάτω τεκμηρίωση.

<details>

<summary><b>Κύριες επιλογές (YAML + περιγραφή)</b></summary>

| Όνομα | Τύπος | Απαίτηση | Υποστηριζόμενες επιλογές | Περιγραφή |
| --- | --- | --- | --- | --- |
| `type` | string | **Απαιτείται** | `custom:bubble-card` | Τύπος της κάρτας |
| `card_type` | string | **Απαιτείται** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` ή `sub-buttons` | Τύπος του Bubble Card, δείτε παρακάτω |
| `styles` | object list | Προαιρετικό | Οποιαδήποτε φύλλα στυλ CSS | Σας επιτρέπει να προσαρμόσετε το CSS του Bubble Card σας, δείτε [στυλ](#στυλ) |

</details>

<details>

<summary><b>Καθολικές μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Μεταβλητή | Αναμενόμενη τιμή | Περιγραφή |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | Ακτίνα περιγράμματος για όλα τα υποστηριζόμενα στοιχεία |
| `--bubble-main-background-color` | `color` | Κύριο χρώμα φόντου για όλα τα υποστηριζόμενα στοιχεία |
| `--bubble-secondary-background-color` | `color` | Δευτερεύον χρώμα φόντου για όλα τα υποστηριζόμενα στοιχεία |
| `--bubble-accent-color` | `color` | Χρώμα έμφασης για όλα τα υποστηριζόμενα στοιχεία |
| `--bubble-icon-border-radius` | `px` | Ακτίνα περιγράμματος εικονιδίου για όλα τα υποστηριζόμενα στοιχεία |
| `--bubble-icon-background-color` | `color` | Χρώμα φόντου εικονιδίου για όλα τα υποστηριζόμενα στοιχεία |
| `--bubble-sub-button-border-radius` | `px` | Ακτίνα περιγράμματος για όλα τα υπο-κουμπιά |
| `--bubble-sub-button-background-color` | `color` | Χρώμα φόντου για όλα τα υπο-κουμπιά |
| `--bubble-box-shadow` | δείτε [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Σκιά κουτιού για όλα τα υποστηριζόμενα στοιχεία |
| `--bubble-border` | δείτε [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | Περίγραμμα για όλες τις υποστηριζόμενες κάρτες |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**Ρίξτε μια ματιά σε αυτό το [βίντεο](https://www.youtube.com/watch?v=0hSQOlBxKKI) για να μάθετε για το Bubble Card και τις δυνατότητές του.** Το κανάλι μου στο YouTube είναι αρκετά καινούριο και επικεντρώνεται σε εκπαιδευτικά βίντεο για το Home Assistant και το Bubble Card. Μη διστάσετε να εγγραφείτε για να βοηθήσετε στην αύξηση της προβολής του καναλιού μου. Σας ευχαριστώ εκ των προτέρων!

<br>

---

<br>

## Προτάσεις οντοτήτων

Από το Home Assistant 2026.6 και μετά, όταν επιλέγετε μια οντότητα στον επιλογέα καρτών σας προτείνονται μερικές έτοιμες κάρτες, και το Bubble Card απαντά σε αυτό το ερώτημα με τις δικές του συνταγές. Επιλέξτε ένα φως και σας προτείνεται μια κάρτα με ρυθμιστικό φωτεινότητας, καθώς και μια παραλλαγή με θερμοκρασία χρώματος, μία με χρώμα και μία με κορεσμό όταν το φως σας τις υποστηρίζει. Επιλέξτε ένα ρολό και παίρνετε το ρυθμιστικό της θέσης του, επιλέξτε ένα media player και παίρνετε επίσης μια παραλλαγή με τη λίστα των πηγών του, επιλέξτε μια σκούπα και παίρνετε τα κουμπιά εκκίνησης, παύσης και επιστροφής στη βάση. Κάθε πρόταση είναι μια κανονική διαμόρφωση Bubble Card που εμφανίζεται ως ζωντανή προεπισκόπηση, ώστε να πάρετε την πιο κοντινή και να συνεχίσετε να την επεξεργάζεστε ως συνήθως.

Το τι σας προτείνεται εξαρτάται από το τι μπορεί πραγματικά να κάνει η οντότητά σας: ένα φως χωρίς κανάλι φωτεινότητας παίρνει διακόπτη αντί για ρυθμιστικό, ένα ρολό που δεν μπορεί να κλίνει δεν παίρνει παραλλαγή κλίσης, και μια οντότητα κλιματισμού παίρνει τις προκαθορισμένες λειτουργίες της μόνο όταν έχει κάποιες. Οι κλασικές καταχωρίσεις ακολουθούν από κάτω όταν έχουν νόημα: η αποκλειστική κάρτα του τομέα, ένα απλό κουμπί και ένα ρυθμιστικό.

> [!TIP]
> Τα modules μπορούν να προσθέσουν τις δικές τους προτάσεις σε αυτήν τη λίστα, δείτε τα [modules](#modules).

<br>

---

<br>

## Pop-up

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

Αυτή η κάρτα σας επιτρέπει να δημιουργήσετε ένα pop-up με οποιοδήποτε περιεχόμενο. Κάθε pop-up είναι **κρυφό από προεπιλογή** και μπορεί να ανοίξει στοχεύοντας τον σύνδεσμό του (π.χ. `'#pop-up-name'`), με οποιαδήποτε κάρτα που υποστηρίζει την ενέργεια `navigate` [action](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος), ή με την [οριζόντια στοίβα κουμπιών](#οριζόντια-στοίβα-κουμπιών) που περιλαμβάνεται.

> [!TIP]
> ### Ενεργοποιητής pop-up 
> Αυτή η λειτουργία σας επιτρέπει να ανοίξετε ένα pop-up με βάση την κατάσταση οποιασδήποτε οντότητας, για παράδειγμα, μπορείτε να ανοίξετε ένα pop-up "Ασφάλεια" με μια κάμερα όταν κάποιος βρίσκεται μπροστά από το σπίτι σας. Μπορείτε επίσης να δημιουργήσετε έναν βοηθό εναλλαγής (input_boolean) και να ενεργοποιήσετε το άνοιγμα/κλείσιμό του σε έναν αυτοματισμό.
> <details>
> <summary>Άνοιγμα ενός pop-up όταν ένας <code>binary_sensor</code> είναι <code>on</code></summary>
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
> ### Διαφορετικοί τρόποι κλεισίματος ενός pop-up 
> Υπάρχουν πολλοί τρόποι για να κλείσετε ένα pop-up. Για παράδειγμα, μπορείτε να σύρετε από την κεφαλίδα του pop-up προς τα κάτω, κάνοντας ένα μεγάλο σύρσιμο μέσα στο pop-up προς τα κάτω, πατώντας Escape σε desktop, αφαιρώντας το hash από τη διεύθυνση URL ή απλά πατώντας το κουμπί κλεισίματος.
>


### Επιλογές pop-up

<details>

<summary><b>Επιλογές (YAML + περιγραφές)</b></summary>

| Όνομα | Τύπος | Απαίτηση | Υποστηριζόμενες επιλογές | Περιγραφή |
| --- | --- | --- | --- | --- |
| `hash` | string | **Απαιτείται** | Οποιοδήποτε μοναδικό hash (π.χ. `'#kitchen'`) με ' ' | Έτσι θα ανοίγετε το pop-up σας |
| `popup_style` | string | Προαιρετικό | `bubble` (προεπιλογή) ή `classic` | Ορίζει το οπτικό στυλ του pop-up |
| `popup_mode` | string | Προαιρετικό | `default` (προεπιλογή), `fit-content`, `centered` ή `adaptive-dialog` | Ορίζει τη διάταξη του pop-up |
| `with_bottom_offset` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Χρησιμοποιείται μόνο με `popup_mode: fit-content` ή `adaptive-dialog`. Εφαρμόζει μια μετατόπιση κάτω σε κινητό, χρήσιμη όταν το dashboard σας περιλαμβάνει μια κάρτα υποσέλιδου. |
| `full_width_on_mobile` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Χρησιμοποιείται μόνο με `popup_mode: centered`. Επεκτείνει το pop-up σε πλήρες πλάτος οθόνης σε κινητό, χρήσιμο σε μικρότερες οθόνες. |
| `performance_mode` | string | Προαιρετικό | `default` (προεπιλογή) ή `performance` | Βελτιστοποιεί το animation ανοίγματος του pop-up. Το `performance` καθυστερεί ελαφρώς την απόδοση του περιεχομένου και τη θόλωση του φόντου, επίσης απενεργοποιεί τη θόλωση backdrop αν έχει οριστεί. |
| `auto_close` | string | Προαιρετικό | Ένα χρονικό όριο σε χιλιοστά του δευτερολέπτου (π.χ. `10000` για 10 δευτερόλεπτα) | Κλείνει αυτόματα το pop-up μετά από ένα χρονικό όριο |
| `close_on_click` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Κλείνει αυτόματα το pop-up μετά από οποιαδήποτε αλληλεπίδραση |
| `close_by_clicking_outside` | boolean | Προαιρετικό | `true` (προεπιλογή) ή `false` | Κλείνει το pop-up κάνοντας κλικ έξω από αυτό |
| `width_desktop` | string | Προαιρετικό | Οποιαδήποτε τιμή CSS | Πλάτος σε desktop (`100%` από προεπιλογή σε κινητό) |
| `margin` | string | Προαιρετικό | Οποιαδήποτε τιμή CSS | Χρησιμοποιήστε το αυτό **μόνο** αν το pop-up σας δεν είναι καλά κεντραρισμένο σε κινητό (π.χ. `13px`) |
| `margin_top_mobile` | string | Προαιρετικό | Οποιαδήποτε τιμή CSS | Πάνω περιθώριο σε κινητό (π.χ. `-56px` αν η κεφαλίδα σας είναι κρυφή) |
| `margin_top_desktop` | string | Προαιρετικό | Οποιαδήποτε τιμή CSS | Πάνω περιθώριο σε desktop (π.χ. `50vh` για ένα μισού μεγέθους pop-up ή `calc(100vh - 400px)` για ένα σταθερό ύψος `400px`) |
| `bg_color` | string | Προαιρετικό | Οποιαδήποτε τιμή hex, rgb ή rgba | Το χρώμα φόντου του pop-up σας (π.χ. `#ffffff` για λευκό φόντο) |
| `bg_opacity` | string | Προαιρετικό | Οποιαδήποτε τιμή από `0` έως `100` | Η αδιαφάνεια φόντου του pop-up σας (π.χ. `100` για καμία διαφάνεια) |
| `bg_blur` | string | Προαιρετικό | Οποιαδήποτε τιμή από `0` έως `100` | Το εφέ θόλωσης φόντου του pop-up σας, **αυτό λειτουργεί μόνο αν το `bg_opacity` δεν έχει οριστεί σε `100`** (π.χ. `0` για καμία θόλωση)|
| `shadow_opacity` | string | Προαιρετικό | Οποιαδήποτε τιμή από `0` έως `100` | Η αδιαφάνεια σκιάς του pop-up σας (π.χ. `0` για απόκρυψή της) |
| `hide_backdrop` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Ορίστε αυτό σε true στο πρώτο pop-up του κύριου dashboard σας για να απενεργοποιήσετε το backdrop σε όλα τα pop-up. |
| `background_update` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Ενημερώνει το περιεχόμενο του pop-up στο παρασκήνιο (δεν συνιστάται) |
| `trigger` | object or list | Προαιρετικό | Δείτε [συνθήκες](#συνθήκες) | Ανοίγει αυτό το pop-up όταν πληρούνται οι συνθήκες |
| `trigger_entity` | string | Προαιρετικό | Οποιαδήποτε οντότητα | Ανοίγει αυτό το pop-up με βάση την κατάσταση οποιασδήποτε οντότητας, η απλή μορφή του `trigger` |
| `trigger_state` | string | Προαιρετικό (**Απαιτείται** αν έχει οριστεί το `trigger_entity`) | Οποιαδήποτε κατάσταση οντότητας | Κατάσταση οντότητας για το άνοιγμα του pop-up |
| `trigger_close` | boolean | Προαιρετικό | `true` ή `false` | Κλείνει το pop-up όταν οι συνθήκες δεν πληρούνται πλέον (προεπιλογή: `true` με `trigger`, `false` με `trigger_state`) |
| `open_action` | object | Προαιρετικό | Δείτε [ενέργειες](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ενεργοποιεί μια ενέργεια όταν το pop-up ανοίγει |
| `close_action` | object | Προαιρετικό | Δείτε [ενέργειες](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ενεργοποιεί μια ενέργεια όταν το pop-up κλείνει |
| `show_header` | boolean | Προαιρετικό | `true` (προεπιλογή) ή `false` | Εμφανίζει/Κρύβει πλήρως την κεφαλίδα του pop-up |
| `show_previous_button` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Εμφανίζει ένα κουμπί προηγούμενου δίπλα στο κουμπί κλεισίματος και επιστρέφει στο προηγούμενο pop-up όταν είναι διαθέσιμο |
| `show_close_button` | boolean | Προαιρετικό | `true` (προεπιλογή) ή `false` | Εμφανίζει ή κρύβει το κουμπί κλεισίματος διατηρώντας ορατή την υπόλοιπη κεφαλίδα |
| `buttons_position` | string | Προαιρετικό | `right` (προεπιλογή) ή `left` | Θέση των κουμπιών κλεισίματος και προηγούμενου στην κεφαλίδα |
| `cards` | list | Προαιρετικό | Οποιαδήποτε κάρτα Bubble Card, κάρτα Home Assistant ή προσαρμοσμένη κάρτα | Ορίζει το περιεχόμενο του pop-up σας. Δείτε το παράδειγμα pop-up παρακάτω. |
| Έχετε επίσης πρόσβαση σε [όλες τις ρυθμίσεις κουμπιού](#κουμπί) για την κεφαλίδα του pop-up. | | Προαιρετικό | | Αν δεν έχει οριστεί δεν θα εμφανιστεί καμία κεφαλίδα |

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Μεταβλητή | Αναμενόμενη τιμή | Περιγραφή |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | Ακτίνα περιγράμματος για το pop-up |
| `--bubble-pop-up-main-background-color` | `color` | Κύριο χρώμα φόντου για υποστηριζόμενα στοιχεία του pop-up |
| `--bubble-pop-up-background-color` | `color` | Χρώμα φόντου του pop-up |
| `--bubble-backdrop-background-color` | `color` | Χρώμα φόντου για το backdrop |
| Έχετε επίσης πρόσβαση σε [όλες τις μεταβλητές CSS κουμπιού](#επιλογές-κουμπιού) για την κεφαλίδα του pop-up. | | |

</details>


### Μορφή αυτόνομου pop-up (v3.2.0+)

Από την v3.2.0, τα pop-up χρησιμοποιούν μια νέα αυτόνομη μορφή όπου οι κάρτες περιεχομένου ορίζονται απευθείας μέσα στο pop-up χρησιμοποιώντας την επιλογή `cards`. Αυτό προσφέρει καλύτερη απόδοση και μια νέα εμπειρία επεξεργασίας drag-and-drop βασισμένη σε τμήματα.


#### Παραδείγματα

<details>

<summary>Ένα pop-up (αυτόνομη μορφή)</summary>

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

<summary>Ένα κουμπί για το άνοιγμα του pop-up</summary>

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

## Οριζόντια στοίβα κουμπιών

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

Αυτή η κάρτα είναι ένας καλός σύντροφος για την κάρτα pop-up, επιτρέποντάς σας να ανοίγετε τα αντίστοιχα pop-up. Επιτρέπει επίσης το άνοιγμα οποιασδήποτε σελίδας του dashboard σας. Επιπλέον, μπορείτε να προσθέσετε τους αισθητήρες κίνησης/παρουσίας σας ώστε η σειρά των κουμπιών να προσαρμόζεται ανάλογα με το δωμάτιο στο οποίο μόλις μπήκατε. Αυτή η κάρτα είναι κυλιόμενη, παραμένει ορατή και λειτουργεί ως υποσέλιδο.

> [!IMPORTANT]  
> Αυτή η κάρτα πρέπει να είναι η τελευταία στην προβολή σας (μετά από κάθε κάρτα και pop-up). Δεν μπορεί να βρίσκεται μέσα σε καμία στοίβα.

### Επιλογές οριζόντιας στοίβας κουμπιών

<details>

<summary><b>Επιλογές (YAML + περιγραφές)</b></summary>

| Όνομα | Τύπος | Απαίτηση | Υποστηριζόμενες επιλογές | Περιγραφή |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Απαιτείται** | Το hash του pop-up (π.χ. `'#kitchen'`) με ' ' ή οποιοσδήποτε σύνδεσμος | Ένας σύνδεσμος για άνοιγμα |
| `1_name` | string | Προαιρετικό | Οποιοδήποτε string | Ένα όνομα για το κουμπί σας |
| `1_icon` | string | Προαιρετικό | Οποιοδήποτε εικονίδιο `mdi:` | Ένα εικονίδιο για το κουμπί σας |
| `1_entity` | string | Προαιρετικό | Οποιοδήποτε φως ή ομάδα φωτισμού | Εμφανίζει το χρώμα αυτού του φωτός στο φόντο |
| `1_pir_sensor` | string | Προαιρετικό | Οποιοσδήποτε αισθητήρας κίνησης | Τουλάχιστον ένας αισθητήρας pir ή περισσότεροι για το `auto_order`, στην πραγματικότητα λειτουργεί επίσης με οποιονδήποτε τύπο οντότητας, για παράδειγμα μπορείτε να προσθέσετε ομάδες φωτισμού και η σειρά θα αλλάζει με βάση την τελευταία αλλαγή κατάστασης. |
| `auto_order` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Αλλάζει τη σειρά των κουμπιών σύμφωνα με την τελευταία ώρα αλλαγής του `_pir_sensor`, **πρέπει να είναι `false` αν δεν έχετε κανένα `_pir_sensor` στον κώδικά σας** |
| `margin` | string | Προαιρετικό | Οποιαδήποτε τιμή CSS | Χρησιμοποιήστε το αυτό **μόνο** αν το `horizontal-buttons-stack` σας δεν είναι καλά κεντραρισμένο σε κινητό (π.χ. `13px`) |
| `width_desktop` | string | Προαιρετικό | Οποιαδήποτε τιμή CSS | Πλάτος σε desktop (`100%` από προεπιλογή σε κινητό) |
| `is_sidebar_hidden` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Διορθώνει τη θέση της οριζόντιας στοίβας κουμπιών αν η πλαϊνή μπάρα είναι κρυφή σε desktop (μόνο αν έχετε κάνει εσείς κάποια τροποποίηση για να την κρύψετε) |
| `rise_animation` | boolean | Προαιρετικό | `true` (προεπιλογή) ή `false` | Ορίστε το σε `false` για να απενεργοποιήσετε το animation που ενεργοποιείται μόλις φορτωθεί η σελίδα |
| `highlight_current_view` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Επισημαίνει το τρέχον hash / προβολή με ένα ομαλό animation |
| `hide_gradient` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Ορίστε το σε `false` για να κρύψετε το gradient |

> [!IMPORTANT]  
> Οι μεταβλητές που ξεκινούν με έναν αριθμό ορίζουν τα κουμπιά σας, απλώς αλλάξτε αυτόν τον αριθμό για να προσθέσετε περισσότερα κουμπιά (δείτε το παράδειγμα παρακάτω).

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Μεταβλητή | Αναμενόμενη τιμή | Περιγραφή |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | Ακτίνα περιγράμματος για τα κουμπιά της οριζόντιας στοίβας κουμπιών |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | Χρώμα φόντου για τα κουμπιά της οριζόντιας στοίβας κουμπιών |

</details>


#### Παράδειγμα

<details>

<summary>Μια οριζόντια στοίβα κουμπιών που αναδιοργανώνεται με βάση αισθητήρες παρουσίας</summary>

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

## Κουμπί

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

Αυτή η κάρτα είναι πολύ ευέλικτη. Μπορεί να χρησιμοποιηθεί ως **διακόπτης**, ως **ρυθμιστικό (slider)**, ως **κατάσταση** ή ως κουμπί **ονόματος/κειμένου**.

> [!TIP]
> ### Ποιες είναι οι διαφορές ανάμεσα σε όλους τους τύπους κουμπιών;
>
> - **Κουμπί διακόπτη:** Αυτός είναι ο προεπιλεγμένος τύπος κουμπιού. Από προεπιλογή, εναλλάσσει μια οντότητα και το χρώμα φόντου του αλλάζει ανάλογα με την κατάσταση της οντότητας ή το χρώμα ενός φωτιστικού. Μπορείτε να αλλάξετε την ενέργειά του στην ενότητα **Ενέργεια πατήματος στην κάρτα**.
>
> - **Κουμπί ρυθμιστικού (slider):** Αυτός ο τύπος κουμπιού σας επιτρέπει να ελέγχετε οντότητες με ρυθμιζόμενα εύρη. Είναι ιδανικό για τη ρύθμιση της φωτεινότητας φωτιστικών, και το χρώμα γεμίσματός του προσαρμόζεται στο χρώμα του φωτιστικού. Μπορείτε επίσης να το χρησιμοποιήσετε για να εμφανίσετε τιμές, όπως το επίπεδο μπαταρίας.
>   Υποστηριζόμενες οντότητες για ρυθμιστικά:
>   - Φωτιστικό (φωτεινότητα)
>   - Media player (ένταση)
>   - Ρολά (θέση)
>   - Ανεμιστήρας (ποσοστό)
>   - Κλιματισμός (θερμοκρασία)
>   - Input number και number (τιμή)
>   - Αισθητήρας μπαταρίας (ποσοστό, μόνο για ανάγνωση)
>
>   Μπορείτε επίσης να χρησιμοποιήσετε οποιαδήποτε οντότητα με αριθμητική κατάσταση απενεργοποιώντας το φίλτρο οντοτήτων στις **Ρυθμίσεις ρυθμιστικού**, και στη συνέχεια να ορίσετε τις τιμές `min` και `max`. Αυτή η επιλογή είναι μόνο για ανάγνωση.
>
> - **Κουμπί κατάστασης:** Ιδανικό για την εμφάνιση πληροφοριών από έναν αισθητήρα ή οποιαδήποτε οντότητα. Όταν το πατήσετε, θα εμφανιστεί το πάνελ «Περισσότερες πληροφορίες» της οντότητας. Το χρώμα φόντου του δεν αλλάζει.
>
> - **Κουμπί ονόματος/κειμένου:** Ο μόνος τύπος κουμπιού που δεν χρειάζεται οντότητα. Επιτρέπει την εμφάνιση ενός σύντομου κειμένου, ενός ονόματος ή ενός τίτλου. Μπορείτε επίσης να προσθέσετε ενέργειες σε αυτό. Το χρώμα φόντου του δεν αλλάζει.

### Επιλογές κουμπιού

<details>

<summary><b>Επιλογές (YAML + περιγραφές)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Μια οντότητα προς έλεγχο |
| `button_type` | string | Optional | `switch` (default), `slider`, `state` or `name` | Η συμπεριφορά του κουμπιού σας |
| `name` | string | Optional | Any string | Ένα όνομα για το κουμπί σας, αν δεν οριστεί θα εμφανιστεί το όνομα της οντότητας |
| `icon` | string | Optional | Any `mdi:` icon | Ένα εικονίδιο για το κουμπί σας, αν δεν οριστεί θα εμφανιστεί το εικονίδιο της οντότητας ή το `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Δίνει προτεραιότητα στο εικονίδιο αντί για το `entity-picture` |
| `use_accent_color` | boolean | Optional (`false` default) | **Μόνο για φωτιστικά.** Χρησιμοποιεί το χρώμα έμφασης του θέματος αντί για το χρώμα του φωτιστικού.                         |
| `show_state` | boolean | Optional | `true` or `false` (default) | Εμφανίζει ή αποκρύπτει την κατάσταση της `entity` σας |
| `show_name` | boolean | Optional | `true` (default) or `false` | Εμφανίζει ή αποκρύπτει το όνομα |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Εμφανίζει ή αποκρύπτει το εικονίδιο |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Εμφανίζει την ώρα της τελευταίας αλλαγής της `entity` σας |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Εμφανίζει την ώρα της τελευταίας ενημέρωσης της `entity` σας |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Εμφανίζει ένα χαρακτηριστικό της `entity` σας κάτω από το `name` της |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Το χαρακτηριστικό προς εμφάνιση (π.χ. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Επιτρέπει την κύλιση κειμένου όταν το περιεχόμενο υπερβαίνει το μέγεθος του περιέκτη του |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see below | Επιτρέπει την αλλαγή των προεπιλεγμένων ενεργειών κατά το πάτημα του κουμπιού. |
| `tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `more-info` |
| `double_tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το διπλό πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `none` |
| `hold_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το παρατεταμένο πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `more-info` |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Στυλ διάταξης της κάρτας, δείτε [διατάξεις κάρτας](#διατάξεις-κάρτας) |
| `rows` | number | Optional | Any number | Αριθμός σειρών (ύψος) (π.χ. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#υπο-κουμπιά) | Προσθέτει προσαρμοσμένα κουμπιά σταθεροποιημένα στα δεξιά |

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | Κύριο χρώμα φόντου για τα υποστηριζόμενα στοιχεία στο κουμπί |
| `--bubble-button-border-radius` | `px` | Ακτίνα περιγράμματος για το κουμπί |
| `--bubble-button-icon-border-radius` | `px` | Ακτίνα περιγράμματος για τον περιέκτη εικονιδίου του κουμπιού |
| `--bubble-button-icon-background-color` | `color` | Χρώμα φόντου για τον περιέκτη εικονιδίου του κουμπιού |
| `--bubble-light-white-color` | `color` | Αντικαθιστά το προεπιλεγμένο λευκό χρώμα των κουμπιών/ρυθμιστικών φωτιστικών |
| `--bubble-light-color` | `color` | Αντικαθιστά το χρώμα των κουμπιών/ρυθμιστικών φωτιστικών (ακόμα και RGB φωτιστικών) |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Σκιά κουτιού για το κουμπί |

</details>

Αυτές οι επιλογές είναι διαθέσιμες μόνο όταν το `button_type` έχει οριστεί σε `slider`.

<details>

<summary><b>Επιλογές ρυθμιστικού (YAML + περιγραφές)</b></summary>

| Name                  | Type    | Requirement                     | Description                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | Optional                        | Η ελάχιστη τιμή του ρυθμιστικού. Για προσαρμοσμένα ρυθμιστικά.                                                    |
| `max_value`             | number  | Optional                        | Η μέγιστη τιμή του ρυθμιστικού. Για προσαρμοσμένα ρυθμιστικά.                                                    |
| `step`                  | number  | Optional                        | Η τιμή βήματος του ρυθμιστικού.                                                                           |
| `tap_to_slide`          | boolean | Optional (`false` default)      | Ενεργοποιεί την προηγούμενη συμπεριφορά ρυθμιστικού όπου πατάτε για να ενεργοποιήσετε το ρυθμιστικό, αντί να το κρατάτε πατημένο.        |
| `relative_slide`        | boolean | Optional (`false` default )     | Ενημερώνει την τιμή σχετικά με την αρχική τιμή, αντί για το αρχικό σημείο αφής.                                      |
| `read_only_slider`      | boolean | Optional (`false` default)      | Κάνει το ρυθμιστικό μόνο για ανάγνωση. Ενεργοποιείται αυτόματα για ορισμένες οντότητες όπως αισθητήρες.                                        |
| `slider_live_update`    | boolean | Optional (`false` default)      | Η κατάσταση της οντότητας ενημερώνεται κατά τη διάρκεια της κύλισης. **Αυτή η λειτουργία δεν συνιστάται για όλες τις οντότητες.**        |
| `slider_fill_orientation` | string | Optional | `left`, `right`, `top` ή `bottom` | Αλλάζει την κατεύθυνση γεμίσματος του ρυθμιστικού. Από αριστερά προς τα δεξιά όταν δεν ορίζεται, κατοπτρικά στις [γλώσσες που γράφονται από δεξιά προς τα αριστερά](#τοπική-προσαρμογή) |
| `slider_value_position` | string | Optional | `right`, `left`, `center` ή `hidden` | Θέση εμφάνισης της τιμής. Στην τελική πλευρά όταν δεν ορίζεται, δηλαδή αριστερά στις [γλώσσες που γράφονται από δεξιά προς τα αριστερά](#τοπική-προσαρμογή) |
| `invert_slider_value` | boolean | Optional (`false` default) | Αντιστρέφει την κατεύθυνση του ρυθμιστικού (100% γέμισμα ισοδυναμεί με ελάχιστο). Δεν είναι διαθέσιμο για ρυθμιστικά χρώματος. |
| `light_slider_type` | string | Optional | `brightness` (default), `hue`, `saturation`, `white_temp` | **Μόνο για φωτιστικά.** Επιλέξτε τη λειτουργία του ρυθμιστικού |
| `cover_slider_type` | string | Optional | `position` (default), `tilt_position` | **Μόνο για ρολά.** Επιλέξτε τη λειτουργία του ρυθμιστικού (θέση ή κλίση) |
| `hue_force_saturation` | boolean | Optional (`false` default) | **Μόνο για φωτιστικά (λειτουργία Hue).** Επιβάλλει τον κορεσμό κατά τη ρύθμιση της απόχρωσης |
| `hue_force_saturation_value` | number | Optional (`100` default) | **Μόνο για φωτιστικά (λειτουργία Hue).** Επιβεβλημένη τιμή κορεσμού (0-100) |
| `use_accent_color` | boolean | Optional (`false` default) | **Μόνο για φωτιστικά (λειτουργία φωτεινότητας).** Χρησιμοποιεί το χρώμα έμφασης του θέματος αντί για το χρώμα του φωτιστικού |
| `allow_light_slider_to_0` | boolean | Optional (`false` default)    | **Μόνο για φωτιστικά.** Επιτρέπει στο ρυθμιστικό να φτάσει το 0%, το οποίο σβήνει το φωτιστικό. Δεν είναι διαθέσιμο με το `tap_to_slide`. |
| `light_transition`      | boolean | Optional (`false` default)      | **Μόνο για φωτιστικά.** Ενεργοποιεί ομαλές μεταβάσεις φωτεινότητας για τα υποστηριζόμενα φωτιστικά.                           |
| `light_transition_time` | number  | Optional (`500` default)        | **Μόνο για φωτιστικά.** Ο χρόνος μετάβασης σε χιλιοστά του δευτερολέπτου. Απαιτεί `light_transition: true`.            |

</details>

#### Παραδείγματα

<details>

<summary>Ένα κουμπί ρυθμιστικού που μπορεί να ελέγξει τη φωτεινότητα ενός φωτιστικού</summary>

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

<summary>Ένα κουμπί με περισσότερες επιλογές</summary>

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

## Media player

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

Αυτή η κάρτα σας επιτρέπει να ελέγχετε μια οντότητα media player.

### Επιλογές media player

<details>

<summary><b>Επιλογές (YAML + περιγραφές)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any media player | Το media player προς έλεγχο |
| `name` | string | Optional | Any string | Ένα όνομα για το media player σας, αν δεν οριστεί θα εμφανιστεί το όνομα της οντότητας |
| `icon` | string | Optional | Any `mdi:` icon | Ένα εικονίδιο για το media player σας, αν δεν οριστεί θα εμφανιστεί το εικονίδιο της οντότητας ή το `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Δίνει προτεραιότητα στο εικονίδιο αντί για το `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Εμφανίζει ή αποκρύπτει την κατάσταση της `entity` σας |
| `show_name` | boolean | Optional | `true` (default) or `false` | Εμφανίζει ή αποκρύπτει το όνομα |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Εμφανίζει ή αποκρύπτει το εικονίδιο |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Εμφανίζει την ώρα της τελευταίας αλλαγής της `entity` σας |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Εμφανίζει την ώρα της τελευταίας ενημέρωσης της `entity` σας |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Εμφανίζει ένα χαρακτηριστικό της `entity` σας κάτω από το `name` της |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Το χαρακτηριστικό προς εμφάνιση (π.χ. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Επιτρέπει την κύλιση κειμένου όταν το περιεχόμενο υπερβαίνει το μέγεθος του περιέκτη του |
| `min_volume` | number | Optional | Any number | Η ελάχιστη τιμή του ρυθμιστικού έντασης. |
| `max_volume` | number | Optional | Any number | Η μέγιστη τιμή του ρυθμιστικού έντασης. |
| `cover_background` | boolean | Optional | `true` or `false` (default) | Χρησιμοποιεί ένα θολωμένο εξώφυλλο πολυμέσων ως φόντο της κάρτας. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Επιτρέπει την αλλαγή των προεπιλεγμένων ενεργειών κατά το πάτημα του κουμπιού. |
| `tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το διπλό πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `none`. |
| `hold_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το παρατεταμένο πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Μετακινεί τα κουμπιά ενεργειών εξωφύλλου στο κάτω μέρος (σταθερά) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Κάνει τα κάτω κουμπιά ενεργειών πλήρους πλάτους (default: `true` όταν η θέση είναι `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Στοίχιση των κάτω κουμπιών ενεργειών όταν δεν είναι πλήρους πλάτους |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Στυλ διάταξης της κάρτας, δείτε [διατάξεις κάρτας](#διατάξεις-κάρτας) |
| `rows` | number | Optional | Any number | Αριθμός σειρών (ύψος) (π.χ. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#υπο-κουμπιά) | Προσθέτει προσαρμοσμένα κουμπιά σταθεροποιημένα στα δεξιά |
| `hide` | object | Optional | See below | Αποκρύπτει κουμπιά από την κάρτα |

#### Επιλογές απόκρυψης

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | Optional | `true` or `false` (default) | Αποκρύπτει το κουμπί αναπαραγωγής/παύσης |
| `volume_button` | boolean | Optional | `true` or `false` (default) | Αποκρύπτει το κουμπί έντασης |
| `previous_button` | boolean | Optional | `true` or `false` (default) | Αποκρύπτει το κουμπί προηγούμενου |
| `next_button` | boolean | Optional | `true` or `false` (default) | Αποκρύπτει το κουμπί επόμενου |
| `power_button` | boolean | Optional | `true` or `false` (default) | Αποκρύπτει το κουμπί ενεργοποίησης |

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | Κύριο χρώμα φόντου για το media player |
| `--bubble-media-player-border-radius` | `px` | Ακτίνα περιγράμματος για το media player |
| `--bubble-media-player-buttons-border-radius` | `px` | Ακτίνα περιγράμματος για τα κουμπιά του media player |
| `--bubble-media-player-slider-background-color` | `color` | Χρώμα φόντου για το ρυθμιστικό έντασης |
| `--bubble-media-player-icon-border-radius` | `px` | Ακτίνα περιγράμματος για τον περιέκτη εικονιδίου του media player |
| `--bubble-media-player-icon-background-color` | `color` | Χρώμα φόντου για τον περιέκτη εικονιδίου του media player |
| `--bubble-media-player-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Σκιά κουτιού για το media player |

</details>


#### Παραδείγματα

<details>

<summary>Ένα media player με όλες τις επιλογές</summary>

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

## Ρολά

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

Αυτή η κάρτα σας επιτρέπει να ελέγχετε τις οντότητες `cover` σας.

### Επιλογές ρολών

<details>

<summary><b>Επιλογές (YAML + περιγραφές)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any cover | Ένα ρολό προς έλεγχο |
| `name` | string | Optional | Any string | Ένα όνομα για το ρολό σας, αν δεν οριστεί θα εμφανιστεί το όνομα της οντότητας |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Δίνει προτεραιότητα στο εικονίδιο αντί για το `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Εμφανίζει ή αποκρύπτει την κατάσταση της `entity` σας |
| `show_name` | boolean | Optional | `true` (default) or `false` | Εμφανίζει ή αποκρύπτει το όνομα |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Εμφανίζει ή αποκρύπτει το εικονίδιο |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Εμφανίζει την ώρα της τελευταίας αλλαγής της `entity` σας |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Εμφανίζει την ώρα της τελευταίας ενημέρωσης της `entity` σας |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Εμφανίζει ένα χαρακτηριστικό της `entity` σας κάτω από το `name` της |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Το χαρακτηριστικό προς εμφάνιση (π.χ. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Επιτρέπει την κύλιση κειμένου όταν το περιεχόμενο υπερβαίνει το μέγεθος του περιέκτη του |
| `icon_open` | string | Optional | Any `mdi:` icon | Ένα εικονίδιο για το ανοιχτό ρολό σας, αν δεν οριστεί θα εμφανιστεί το προεπιλεγμένο εικονίδιο ανοιχτού ρολού |
| `icon_close` | string | Optional | Any `mdi:` icon | Ένα εικονίδιο για το κλειστό ρολό σας, αν δεν οριστεί θα εμφανιστεί το προεπιλεγμένο εικονίδιο κλειστού ρολού |
| `icon_up` | string | Optional | Any `mdi:` icon | Ένα εικονίδιο για το κουμπί ανοίγματος ρολού σας, αν δεν οριστεί θα εμφανιστεί το προεπιλεγμένο εικονίδιο ανοίγματος ρολού |
| `icon_down` | string | Optional | Any `mdi:` icon | Ένα εικονίδιο για το κουμπί κλεισίματος ρολού σας, αν δεν οριστεί θα εμφανιστεί το προεπιλεγμένο εικονίδιο κλεισίματος ρολού |
| `open_service` | string | Optional | Any service or script | Μια υπηρεσία για το άνοιγμα του ρολού σας, προεπιλογή `cover.open_cover` |
| `stop_service` | string | Optional | Any service or script | Μια υπηρεσία για τη διακοπή του ρολού σας, προεπιλογή `cover.stop_cover` |
| `close_service` | string | Optional | Any service or script | Μια υπηρεσία για το κλείσιμο του ρολού σας, προεπιλογή `cover.close_cover` |
| `tilt_buttons` | string | Optional | `top` (default), `bottom`, `left`, `right`, `hidden` | Θέση των κουμπιών ελέγχου κλίσης (εμφανίζονται μόνο αν το ρολό υποστηρίζει κλίση) |
| `open_tilt_service` | string | Optional | Any service or script | Μια υπηρεσία για το άνοιγμα κλίσης, προεπιλογή `cover.open_cover_tilt` |

| `close_tilt_service` | string | Optional | Any service or script | Μια υπηρεσία για το κλείσιμο κλίσης, προεπιλογή `cover.close_cover_tilt` |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Επιτρέπει την αλλαγή των προεπιλεγμένων ενεργειών κατά το πάτημα του κουμπιού. |
| `tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το διπλό πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `none`. |
| `hold_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το παρατεταμένο πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `more-info`. |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Μετακινεί τα χειριστήρια στο κάτω μέρος (σταθερά) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Κάνει τα κάτω χειριστήρια πλήρους πλάτους (default: `true` όταν η θέση είναι `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Στοίχιση των κάτω χειριστηρίων όταν δεν είναι πλήρους πλάτους |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Στυλ διάταξης της κάρτας, δείτε [διατάξεις κάρτας](#διατάξεις-κάρτας) |
| `rows` | number | Optional | Any number | Αριθμός σειρών (ύψος) (π.χ. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#υπο-κουμπιά) | Προσθέτει προσαρμοσμένα κουμπιά σταθεροποιημένα στα δεξιά |

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | Κύριο χρώμα φόντου για τα υποστηριζόμενα στοιχεία στην κάρτα ρολού |
| `--bubble-cover-border-radius` | `px` | Ακτίνα περιγράμματος για την κάρτα ρολού |
| `--bubble-cover-icon-border-radius` | `px` | Ακτίνα περιγράμματος για τον περιέκτη εικονιδίου της κάρτας ρολού |
| `--bubble-cover-icon-background-color` | `color` | Χρώμα φόντου για τον περιέκτη εικονιδίου της κάρτας ρολού |
| `--bubble-cover-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Σκιά κουτιού για την κάρτα ρολού |
| `--bubble-button-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Σκιά κουτιού για τα κουμπιά στην κάρτα ρολού |

</details>


#### Παράδειγμα

<details>

<summary>Μια κάρτα που μπορεί να ελέγξει ένα ρολό τύπου roller shade</summary>

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

## Επιλογή

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

Αυτή η κάρτα σας επιτρέπει να προσθέσετε ένα αναπτυσσόμενο μενού για τις οντότητες `input_select` / `select` σας. Αυτή η κάρτα υποστηρίζει επίσης τα υπο-κουμπιά και όλα τα κοινά χαρακτηριστικά του Bubble Card.

> [!TIP]
> Μπορείτε επίσης να έχετε υπο-κουμπιά επιλογής αν το θέλετε, αυτό το χαρακτηριστικό είναι διαθέσιμο σε όλες τις κάρτες που υποστηρίζουν τα υπο-κουμπιά.

### Επιλογές επιλογής

<details>

<summary><b>Επιλογές (YAML + περιγραφές)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `entity` | string | **Required** | Any entity | Μια οντότητα προς έλεγχο |
| `name` | string | Optional | Any string | Ένα όνομα για την επιλογή σας, αν δεν οριστεί θα εμφανιστεί το όνομα της οντότητας |
| `icon` | string | Optional | Any `mdi:` icon | Ένα εικονίδιο για την επιλογή σας, αν δεν οριστεί θα εμφανιστεί το εικονίδιο της οντότητας ή το `entity-picture` |
| `force_icon` | boolean | Optional | `true` or `false` (default) | Δίνει προτεραιότητα στο εικονίδιο αντί για το `entity-picture` |
| `show_state` | boolean | Optional | `true` or `false` (default) | Εμφανίζει ή αποκρύπτει την κατάσταση της `entity` σας |
| `show_name` | boolean | Optional | `true` (default) or `false` | Εμφανίζει ή αποκρύπτει το όνομα |
| `show_icon` | boolean | Optional | `true` (default) or `false` | Εμφανίζει ή αποκρύπτει το εικονίδιο |
| `show_last_changed` | boolean | Optional | `true` or `false` (default) | Εμφανίζει την ώρα της τελευταίας αλλαγής της `entity` σας |
| `show_last_updated` | boolean | Optional | `true` or `false` (default) | Εμφανίζει την ώρα της τελευταίας ενημέρωσης της `entity` σας |
| `show_attribute` | boolean | Optional | `true` or `false` (default) | Εμφανίζει ένα χαρακτηριστικό της `entity` σας κάτω από το `name` της |
| `attribute` | string | Optional (required if `show_attribute` is set to `true`) | An attribute from your `entity` | Το χαρακτηριστικό προς εμφάνιση (π.χ. `brightness`) |
| `scrolling_effect` | boolean | Optional | `true` (default) or `false` | Επιτρέπει την κύλιση κειμένου όταν το περιεχόμενο υπερβαίνει το μέγεθος του περιέκτη του |
| `tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το διπλό πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `none`. |
| `hold_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το παρατεταμένο πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `more-info`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Στυλ διάταξης της κάρτας, δείτε [διατάξεις κάρτας](#διατάξεις-κάρτας) |
| `rows` | number | Optional | Any number | Αριθμός σειρών (ύψος) (π.χ. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#υπο-κουμπιά) | Προσθέτει προσαρμοσμένα κουμπιά σταθεροποιημένα στα δεξιά |

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | Κύριο χρώμα φόντου για τα υποστηριζόμενα στοιχεία στην κάρτα επιλογής |
| `--bubble-select-background-color` | `color` | Χρώμα φόντου για την κάρτα επιλογής |
| `--bubble-select-list-border-radius` | `px` | Ακτίνα περιγράμματος για το αναπτυσσόμενο μενού στην κάρτα |
| `--bubble-select-list-item-accent-color` | `color` | Χρώμα έμφασης για το επιλεγμένο στοιχείο |
| `--bubble-select-list-background-color` | `color` | Χρώμα φόντου για το αναπτυσσόμενο μενού στην κάρτα |
| `--bubble-select-list-width` | `px` | Πλάτος του αναπτυσσόμενου μενού στην κάρτα |
| `--bubble-select-arrow-background-color` | `color` | Χρώμα φόντου για το βέλος του αναπτυσσόμενου μενού |
| `--bubble-select-button-border-radius` | `px` | Ακτίνα περιγράμματος για το κουμπί επιλογής |
| `--bubble-select-border-radius` | `px` | Ακτίνα περιγράμματος για την κάρτα επιλογής |
| `--bubble-select-icon-border-radius` | `px` | Ακτίνα περιγράμματος για τον περιέκτη εικονιδίου της κάρτας επιλογής |
| `--bubble-select-icon-background-color` | `color` | Χρώμα φόντου για τον περιέκτη εικονιδίου της κάρτας επιλογής |
| `--bubble-select-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Σκιά κουτιού για την κάρτα επιλογής |

</details>


#### Παραδείγματα

<details>

<summary>Μια κάρτα επιλογής με λίστα σκηνών</summary>

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

## Κλιματισμός

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

Αυτή η κάρτα σας επιτρέπει να ελέγχετε τις οντότητες `climate` σας.

> [!TIP]
> Το μενού επιλογής λειτουργίας είναι ένα [υπο-κουμπί](#υπο-κουμπιά) που προστίθεται αυτόματα κατά τη δημιουργία της κάρτας. Μπορείτε στη συνέχεια να το τροποποιήσετε ή να το αφαιρέσετε όπως επιθυμείτε.

### Επιλογές κλιματισμού

<details>

<summary><b>Επιλογές (YAML + περιγραφές)</b></summary>

| Name                     | Type    | Requirement                         | Supported options                                  | Description                                                                                                     |
|--------------------------|---------|--------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **Required**                        | Climate entity                                   | Η οντότητα προς έλεγχο (π.χ. `climate.living_room`).                                                            |
| `name`                  | string  | Optional                            | Any string                                       | Ένα προσαρμοσμένο όνομα για την κάρτα. Αν δεν οριστεί, θα εμφανιστεί το όνομα της οντότητας.                                    |
| `icon`                  | string  | Optional                            | Any `mdi:` icon                                  | Ένα προσαρμοσμένο εικονίδιο για την κάρτα. Αν δεν οριστεί, θα χρησιμοποιηθεί το εικονίδιο της οντότητας ή το `entity-picture`.                   |
| `force_icon`            | boolean | Optional                            | `true` or `false` (default)                     | Δίνει προτεραιότητα στο εικονίδιο έναντι του `entity-picture`.                                                           |
| `show_state`            | boolean | Optional                            | `true` or `false` (default)                     | Εμφανίζει ή αποκρύπτει την τρέχουσα κατάσταση της `entity`.                                                                 |
| `show_name`             | boolean | Optional                            | `true` (default) or `false`                     | Εμφανίζει ή αποκρύπτει το όνομα της οντότητας.                                                                            |
| `show_icon`             | boolean | Optional                            | `true` (default) or `false`                     | Εμφανίζει ή αποκρύπτει το εικονίδιο.                                                                                          |
| `hide_target_temp_low`  | boolean | Optional (only for entities supporting `target_temp_low`) | `true` or `false` (default) | Αποκρύπτει το χειριστήριο χαμηλής θερμοκρασίας στόχου αν υποστηρίζεται από την `entity`.                                          |
| `hide_target_temp_high` | boolean | Optional (only for entities supporting `target_temp_high`)| `true` or `false` (default) | Αποκρύπτει το χειριστήριο υψηλής θερμοκρασίας στόχου αν υποστηρίζεται από την `entity`.                                         |
| `state_color`           | boolean | Optional                            | `true` or `false` (default)                     | Εφαρμόζει ένα σταθερό χρώμα φόντου όταν η οντότητα κλιματισμού είναι ενεργοποιημένη.                                              |
| `step` | number | Optional | Any number | Το βήμα θερμοκρασίας. |
| `min_temp` | number | Optional | Any number | Η ελάχιστη θερμοκρασία. |
| `max_temp` | number | Optional | Any number | Η μέγιστη θερμοκρασία. |
| `button_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Επιτρέπει την αλλαγή των προεπιλεγμένων ενεργειών κατά το πάτημα του κουμπιού. |
| `tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `more-info`. |
| `double_tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το διπλό πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `none`. |
| `hold_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το παρατεταμένο πάτημα του εικονιδίου, αν δεν οριστεί, θα χρησιμοποιηθεί το `more-info`. |                              |
| `main_buttons_position` | string | Optional | `default` or `bottom` | Μετακινεί τα κουμπιά ενεργειών κλιματισμού στο κάτω μέρος (σταθερά) |
| `main_buttons_full_width` | boolean | Optional | `true` or `false` | Κάνει τα κάτω κουμπιά ενεργειών πλήρους πλάτους (default: `true` όταν η θέση είναι `bottom`) |
| `main_buttons_alignment` | string | Optional | `end` (default), `center`, `start`, `space-between` | Στοίχιση των κάτω κουμπιών ενεργειών όταν δεν είναι πλήρους πλάτους |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Στυλ διάταξης της κάρτας, δείτε [διατάξεις κάρτας](#διατάξεις-κάρτας) |
| `rows` | number | Optional | Any number | Αριθμός σειρών (ύψος) (π.χ. `2`) |
| `sub_button`            | object  | Optional                            | See [sub-buttons](#υπο-κουμπιά)                | Προσθέτει προσαρμοσμένα κουμπιά σταθεροποιημένα στα δεξιά. Χρήσιμο για ένα μενού επιλογής λειτουργίας κλιματισμού.                                  |

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | Κύριο χρώμα φόντου για τα υποστηριζόμενα στοιχεία στην κάρτα κλιματισμού |
| `--bubble-climate-border-radius` | `px` | Ακτίνα περιγράμματος για τα υποστηριζόμενα στοιχεία της κάρτας κλιματισμού |
| `--bubble-climate-button-background-color` | `color` | Χρώμα φόντου για τα κουμπιά της κάρτας κλιματισμού |
| `--bubble-climate-icon-border-radius` | `px` | Ακτίνα περιγράμματος για τον περιέκτη εικονιδίου της κάρτας κλιματισμού |
| `--bubble-state-climate-fan-only-color` | `color` | Χρώμα επικάλυψης για την κατάσταση μόνο ανεμιστήρα |
| `--bubble-state-climate-dry-color` | `color` | Χρώμα επικάλυψης για την κατάσταση αφύγρανσης |
| `--bubble-state-climate-cool-color` | `color` | Χρώμα επικάλυψης για την κατάσταση ψύξης |
| `--bubble-state-climate-heat-color` | `color` | Χρώμα επικάλυψης για την κατάσταση θέρμανσης |
| `--bubble-state-climate-auto-color` | `color` | Χρώμα επικάλυψης για την αυτόματη κατάσταση |
| `--bubble-state-climate-heat-cool-color` | `color` | Χρώμα επικάλυψης για την κατάσταση θέρμανσης-ψύξης |
| `--bubble-climate-accent-color` | `color` | Χρώμα έμφασης για την κάρτα κλιματισμού |
| `--bubble-climate-box-shadow` | See [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Σκιά κουτιού για τον περιέκτη κλιματισμού. |

</details>


#### Παραδείγματα

<details>

<summary>Μια κάρτα κλιματισμού με ένα αναπτυσσόμενο μενού λειτουργιών HVAC</summary>

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

## Ημερολόγιο

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

Αυτή η κάρτα σας επιτρέπει να εμφανίζετε τις οντότητες ημερολογίου σας. Το περιεχόμενό της είναι κυλιόμενο, οπότε μπορείτε εύκολα να περιηγηθείτε στα επερχόμενα συμβάντα.

### Επιλογές ημερολογίου

<details>

<summary><b>Επιλογές (YAML + περιγραφές)</b></summary>

| Name                | Type    | Requirement  | Supported options                               | Description                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | Optional     | Any number (minimum: 1)                        | Αριθμός ημερών ημερολογίου για ανάκτηση συμβάντων, από τώρα μέχρι το τέλος της Ν-οστής ημέρας (default: 7) |
| `entities`          | object  | **Required** | A calendar entity object (see below)            | Η οντότητα προς έλεγχο (π.χ. `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **Required** | A calendar entity                               | Η οντότητα ημερολογίου προς εμφάνιση                                                          |
| `entities.color`    | string  | Optional     | A color                                         | Ένα προσαρμοσμένο χρώμα για το chip ημερολογίου. Αν δεν οριστεί, θα επιλεγεί αυτόματα ένα χρώμα |
| `days`              | number  | Optional     | Any number (minimum: 1)                         | Αριθμός ημερών ημερολογίου για ανάκτηση συμβάντων, από τώρα μέχρι το τέλος της Ν-οστής ημέρας (default: 7) |
| `limit`             | number  | Optional     | A number                                        | Το πλήθος των συμβάντων που θα εμφανίζονται στην κάρτα                                  |
| `show_end`          | boolean | Optional     | `true` or `false` (default)                     | Εμφανίζει ή αποκρύπτει την ώρα λήξης των συμβάντων                                                    |
| `show_progress`     | boolean | Optional     | `true` (default) or `false`                     | Εμφανίζει ή αποκρύπτει τη γραμμή προόδου του συμβάντος                                                     |
| `show_started_events`| boolean | Optional     | `true` (default) or `false`                     | Εμφανίζει ή αποκρύπτει συμβάντα που βρίσκονται αυτή τη στιγμή σε εξέλιξη. Τα συμβάντα πολλών ημερών κρίνονται ημέρα προς ημέρα, οπότε κρύβεται μόνο η ημέρα που βρίσκεται σε εξέλιξη και οι επόμενες ημέρες παραμένουν ορατές |
| `scrolling_effect`  | boolean | Optional | `true` (default) or `false` | Επιτρέπει την κύλιση κειμένου όταν το περιεχόμενο υπερβαίνει το μέγεθος του περιέκτη του |
| `event_action` | object | Optional | `tap_action`, `double_tap_action` or `hold_action`, see [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Επιτρέπει την προσθήκη ενεργειών κατά το πάτημα συμβάντος. |
| `tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το πάτημα ημέρας, αν δεν οριστεί, θα χρησιμοποιηθεί το `none`. |
| `double_tap_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το διπλό πάτημα ημέρας, αν δεν οριστεί, θα χρησιμοποιηθεί το `none`. |
| `hold_action` | object | Optional | See [actions](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίζει τον τύπο ενέργειας κατά το παρατεταμένο πάτημα ημέρας, αν δεν οριστεί, θα χρησιμοποιηθεί το `none`. |
| `card_layout` | string | Optional | `normal` (default if not in section view), `large` (default if in section view), `large-2-rows`, `large-sub-buttons-grid` | Στυλ διάταξης της κάρτας, δείτε [διατάξεις κάρτας](#διατάξεις-κάρτας) |
| `rows` | number | Optional | Any number | Αριθμός σειρών (ύψος) (π.χ. `2`) |
| `sub_button` | object | Optional | See [sub-buttons](#υπο-κουμπιά) | Προσθέτει προσαρμοσμένα κουμπιά σταθεροποιημένα στα δεξιά |

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Variable                                  | Expected value | Description                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | Κύριο χρώμα φόντου για τα υποστηριζόμενα στοιχεία στην κάρτα ημερολογίου  |
| `--bubble-calendar-border-radius`         | `px`           | Ακτίνα περιγράμματος για τα υποστηριζόμενα στοιχεία της κάρτας ημερολογίου |
| `--bubble-calendar-height`                | `px`           | Ύψος για την κάρτα ημερολογίου                                        |

</details>

#### Παραδείγματα

<details>

<summary>Μια κάρτα ημερολογίου με περιορισμένο αριθμό συμβάντων</summary>

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

<summary>Μια κάρτα ημερολογίου με ώρα λήξης και γραμμή προόδου</summary>

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


## Διαχωριστικό

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

Αυτή η κάρτα είναι ένα απλό διαχωριστικό για να χωρίζετε το pop-up σας σε κατηγορίες / ενότητες, π.χ. Φώτα, Συσκευές, Ρολά, Ρυθμίσεις, Αυτοματισμοί...

### Επιλογές διαχωριστικού

<details>

<summary><b>Επιλογές (YAML + περιγραφές)</b></summary>

| Όνομα | Τύπος | Απαίτηση | Υποστηριζόμενες επιλογές | Περιγραφή |
| --- | --- | --- | --- | --- |
| `name` | string | Προαιρετικό αλλά συνιστάται | Οποιοδήποτε string | Ένα όνομα για το διαχωριστικό σας |
| `icon` | string | Προαιρετικό αλλά συνιστάται | Οποιοδήποτε εικονίδιο `mdi:` | Ένα εικονίδιο για το διαχωριστικό σας |
| `card_layout` | string | Προαιρετικό | `normal` (προεπιλογή αν δεν είναι σε προβολή ενοτήτων), `large` (προεπιλογή αν είναι σε προβολή ενοτήτων), `large-2-rows`, `large-sub-buttons-grid` | Στυλ διάταξης της κάρτας, δείτε [διατάξεις κάρτας](#διατάξεις-κάρτας) |
| `rows` | number | Προαιρετικό | Οποιοσδήποτε αριθμός | Αριθμός γραμμών (ύψος) (π.χ. `2`) |
| `sub_button` | object | Προαιρετικό | Δείτε [υπο-κουμπιά](#υπο-κουμπιά) | Προσθέστε προσαρμοσμένα κουμπιά σταθεροποιημένα στα δεξιά |

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Μεταβλητή | Αναμενόμενη τιμή | Περιγραφή |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | Χρώμα φόντου για τη γραμμή στο διαχωριστικό |

</details>

#### Παράδειγμα

<details>

<summary>Ένα διαχωριστικό για μια ενότητα "Ρολά"</summary>

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

## Κενή στήλη

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

Αυτή η κάρτα υπάρχει για να γεμίζει μια κενή στήλη. Αυτό είναι χρήσιμο αν έχετε ένα `horizontal-stack` στο pop-up σας με μόνο μία κάρτα. Ρίξτε μια ματιά στην κάτω δεξιά γωνία αυτού του στιγμιότυπου οθόνης για να (μην) τη δείτε.

### Επιλογές κενής στήλης

Αυτή η κάρτα δεν έχει επιλογές και δεν υποστηρίζει [στυλ](#στυλ), αν και υποστηρίζει επιλογές διάταξης για τις ενότητες του HA.

#### Παράδειγμα

<details>

<summary>Μια κενή στήλη σε μια οριζόντια στοίβα</summary>

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

## Μόνο υπο-κουμπιά

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

Αυτή η κάρτα είναι αφιερωμένη μόνο σε υπο-κουμπιά. Είναι ιδανική για μενού, γρήγορες ενέργειες, ενημερωτικά chips ή ένα σταθερό υποσέλιδο στο κάτω μέρος της σελίδας.

> [!IMPORTANT]  
> Αυτή η κάρτα χρησιμοποιεί το νέο σχήμα υπο-κουμπιών. Χρησιμοποιήστε το `sub_button.bottom` για να ορίσετε τα κουμπιά σας. Η ενότητα `sub_button.main` αγνοείται.

### Επιλογές κάρτας μόνο υπο-κουμπιών

<details>

<summary><b>Επιλογές (YAML + περιγραφές)</b></summary>

| Όνομα | Τύπος | Απαίτηση | Υποστηριζόμενες επιλογές | Περιγραφή |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **Απαιτείται** | Δείτε [υπο-κουμπιά](#υπο-κουμπιά) | Ορίστε τα υπο-κουμπιά σας χρησιμοποιώντας την ενότητα `bottom` |
| `hide_main_background` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Αφαιρέστε το φόντο της κάρτας |
| `footer_mode` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Σταθεροποιήστε την κάρτα στο κάτω μέρος της σελίδας |
| `footer_full_width` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Κάντε το υποσέλιδο πλήρους πλάτους (100%) |
| `footer_width` | number | Προαιρετικό | Οποιοσδήποτε αριθμός | Πλάτος υποσέλιδου σε pixel όταν το `footer_full_width` είναι `false` |
| `footer_bottom_offset` | number | Προαιρετικό | Οποιοσδήποτε αριθμός | Απόσταση από το κάτω μέρος της σελίδας σε pixel (προεπιλογή: `16`) |
| `card_layout` | string | Προαιρετικό | `normal` (προεπιλογή αν δεν είναι σε προβολή ενοτήτων), `large` (προεπιλογή αν είναι σε προβολή ενοτήτων), `large-2-rows`, `large-sub-buttons-grid` | Στυλ διάταξης της κάρτας, δείτε [διατάξεις κάρτας](#διατάξεις-κάρτας) |
| `rows` | number | Προαιρετικό | Οποιοσδήποτε αριθμός | Αριθμός γραμμών (ύψος) (π.χ. `2`) |

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Μεταβλητή | Αναμενόμενη τιμή | Περιγραφή |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | Πλάτος υποσέλιδου όταν το `footer_full_width` είναι `false` |
| `--bubble-footer-bottom` | `px` | Απόσταση υποσέλιδου από κάτω |
| `--bubble-footer-box-shadow` | δείτε [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | Σκίαση κουτιού για το κοντέινερ του υποσέλιδου |

</details>

#### Παραδείγματα

<details>

<summary>Chips (όπως στο στιγμιότυπο οθόνης)</summary>

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

<summary>Ένα σταθερό μενού υποσέλιδου</summary>

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

## Υπο-κουμπιά

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

Σε κάθε κάρτα που υποστηρίζει αυτή την επιλογή, μπορείτε να προσθέσετε υπο-κουμπιά για να προσαρμόσετε τις κάρτες σας ακόμα περισσότερο. Μπορείτε, για παράδειγμα, να δημιουργήσετε ένα κουμπί που μπορεί να ελέγχει μια ηλεκτρική σκούπα, μια κάρτα καιρού ή σχεδόν οτιδήποτε μπορείτε να σκεφτείτε. Αυτά τα υπο-κουμπιά υποστηρίζουν τις ενέργειες πατήματος και τις περισσότερες από τις επιλογές κουμπιού.

Τα υπο-κουμπιά υποστηρίζουν πλέον τρεις τύπους: **Προεπιλογή (κουμπί)**, **Slider** και **Dropdown / Επιλογή**. Μπορείτε να συνδυάσετε τύπους στην ίδια κάρτα, να τοποθετήσετε υπο-κουμπιά στο πάνω ή στο κάτω μέρος και να τα οργανώσετε σε ομάδες για πιο προηγμένες διατάξεις.

#### Τοποθέτηση και ομάδες υπο-κουμπιών

<details>

<summary><b>Δομή υπο-κουμπιών (main / bottom + ομάδες)</b></summary>

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

**Σημειώσεις:**
- Τα `main` και `bottom` είναι δύο ανεξάρτητες ενότητες. Τα κάτω υπο-κουμπιά είναι σταθεροποιημένα στο κάτω μέρος της κάρτας.
- Τα `main_layout` και `bottom_layout` δέχονται `inline` (προεπιλογή) ή `rows` για κάθετη στοίβαξη των ομάδων.
- Οι ομάδες είναι αντικείμενα με έναν πίνακα `group` και προαιρετικό `buttons_layout` (`inline` ή `column`).
- Το `justify_content` είναι διαθέσιμο **μόνο για τις κάτω ομάδες** (`start`, `center`, `end`, `fill`).
- Όταν υπάρχουν κάτω υπο-κουμπιά, η διάταξη της κάρτας μεταβαίνει αυτόματα σε `large`, εκτός αν ορίσετε ρητά μια άλλη διάταξη.
- Οι παλαιοί πίνακες `sub_button` εξακολουθούν να υποστηρίζονται και αντιμετωπίζονται ως η ενότητα `main`.

</details>

### Επιλογές υπο-κουμπιών

<details>

<summary><b>Επιλογές (YAML + περιγραφή)</b></summary>

| Όνομα | Τύπος | Απαίτηση | Υποστηριζόμενες επιλογές | Περιγραφή |
| --- | --- | --- | --- | --- |
| `entity` | string | Προαιρετικό | Οποιαδήποτε οντότητα | Μια οντότητα προς έλεγχο |
| `name` | string | Προαιρετικό | Οποιοδήποτε string | Ένα όνομα για το υπο-κουμπί σας, αν δεν οριστεί θα εμφανιστεί το όνομα της οντότητας |
| `icon` | string | Προαιρετικό | Οποιοδήποτε εικονίδιο `mdi:` | Ένα εικονίδιο για το υπο-κουμπί σας, αν δεν οριστεί θα εμφανιστεί το εικονίδιο ή η εικόνα της οντότητας |
| `force_icon` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Επιβολή του εικονιδίου ακόμα κι αν είναι διαθέσιμη μια εικόνα οντότητας |
| `sub_button_type` | string | Προαιρετικό | `default`, `slider` ή `select` | Επιλέξτε τον τύπο του υπο-κουμπιού |
| `show_background` | boolean | Προαιρετικό | `true` (προεπιλογή) ή `false` | Εμφανίστε ένα φόντο για το υπο-κουμπί σας, θα αλλάξει χρώμα ανάλογα με την κατάσταση της οντότητάς σας |
| `state_background` | boolean | Προαιρετικό | `true` (προεπιλογή) ή `false` | Χρησιμοποιήστε το χρώμα κατάστασης όταν η οντότητα είναι `on` |
| `light_background` | boolean | Προαιρετικό | `true` (προεπιλογή) ή `false` | Χρησιμοποιήστε το χρώμα του φωτός για το φόντο όταν είναι διαθέσιμο |
| `show_state` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Εμφάνιση ή απόκρυψη της κατάστασης της `entity` σας |
| `show_name` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Εμφάνιση ή απόκρυψη του ονόματος |
| `show_icon` | boolean | Προαιρετικό | `true` (προεπιλογή) ή `false` | Εμφάνιση ή απόκρυψη του εικονιδίου |
| `show_last_changed` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Εμφάνιση της τελευταίας ώρας αλλαγής της `entity` σας |
| `show_last_updated` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Εμφάνιση της τελευταίας ώρας ενημέρωσης της `entity` σας |
| `show_attribute` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Εμφάνιση ενός χαρακτηριστικού της `entity` σας κάτω από το `name` της |
| `attribute` | string | Προαιρετικό (απαιτείται αν το `show_attribute` έχει οριστεί σε `true`) | Ένα χαρακτηριστικό από την `entity` σας | Το χαρακτηριστικό προς εμφάνιση (π.χ. `brightness`) |
| `select_attribute` | string | Προαιρετικό | Μια λίστα χαρακτηριστικών από την `entity` σας (δείτε τις υποστηριζόμενες επιλογές παραπάνω) | Αυτή η λίστα χαρακτηριστικών θα ανοίξει ένα dropdown αν πατηθεί (π.χ. `effect_list`) |
| `show_arrow` | boolean | Προαιρετικό | `true` (προεπιλογή) ή `false` | Εμφάνιση ή απόκρυψη του βέλους dropdown για τα υπο-κουμπιά επιλογής |
| `scrolling_effect` | boolean | Προαιρετικό | `true` (προεπιλογή) ή `false` | Επιτρέψτε στο κείμενο να κάνει κύλιση όταν το περιεχόμενο υπερβαίνει το μέγεθος του κοντέινερ |
| `tap_action` | object | Προαιρετικό | Δείτε [ενέργειες](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίστε τον τύπο ενέργειας κατά το πάτημα του υπο-κουμπιού, αν δεν οριστεί θα χρησιμοποιηθεί το `more-info`. |
| `double_tap_action` | object | Προαιρετικό | Δείτε [ενέργειες](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίστε τον τύπο ενέργειας κατά το διπλό πάτημα του υπο-κουμπιού, αν δεν οριστεί θα χρησιμοποιηθεί το `none`. |
| `hold_action` | object | Προαιρετικό | Δείτε [ενέργειες](#ενέργειες-πατήματος-διπλού-πατήματος-και-παρατεταμένου-πατήματος) | Ορίστε τον τύπο ενέργειας κατά το παρατεταμένο πάτημα του υπο-κουμπιού, αν δεν οριστεί θα χρησιμοποιηθεί το `more-info`. |
| `fill_width` | boolean | Προαιρετικό | `true` ή `false` | Γεμίστε το διαθέσιμο πλάτος (προεπιλογή: `false` για το main, `true` για το bottom) |
| `width` | number or string | Προαιρετικό | Οποιοσδήποτε αριθμός ή μήκος CSS | Προσαρμοσμένο πλάτος (`px` για την ενότητα main, `%` για την ενότητα bottom από προεπιλογή) |
| `custom_height` | number | Προαιρετικό | Οποιοσδήποτε αριθμός | Προσαρμοσμένο ύψος σε pixel |
| `content_layout` | string | Προαιρετικό | `icon-left` (προεπιλογή), `icon-top`, `icon-bottom`, `icon-right` | Τοποθέτηση εικονιδίου μέσα στο υπο-κουμπί |
| `always_visible` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | **Μόνο για slider.** Εμφανίζει πάντα το slider αντί να το ανοίγει με το πάτημα |
| `show_button_info` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | **Μόνο για slider.** Εμφάνιση εικονιδίου/ονόματος/κατάστασης όταν είναι ενεργό το `always_visible` |
| `visibility` | object or list | Προαιρετικό | Δείτε [συνθήκες](#συνθήκες) | Εμφάνιση ή απόκρυψη του υπο-κουμπιού βάσει συνθηκών |
| `hide_when_parent_unavailable` | boolean | Προαιρετικό | `true` ή `false` (προεπιλογή) | Απόκρυψη του υπο-κουμπιού αν η οντότητα της γονικής κάρτας δεν είναι διαθέσιμη |
| `css_class` | string | Προαιρετικό | Οποιοδήποτε κείμενο | Μια επιπλέον κλάση CSS στο υπο-κουμπί, για να το στοχεύσετε στο [στυλ](#στυλ) σας όποιο κι αν είναι το όνομά του (π.χ. το `My value` δίνει `.my-value`) |

</details>

<details>

<summary><b>Επιλογές υπο-κουμπιού slider (ίδιες με τα slider κουμπιών)</b></summary>

<br>

Τα υπο-κουμπιά slider υποστηρίζουν τις ίδιες επιλογές slider με τα slider κουμπιών, συμπεριλαμβανομένων:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>Μεταβλητές CSS (δείτε <a href="#στυλ">Στυλ</a>)</b></summary>

| Μεταβλητή | Αναμενόμενη τιμή | Περιγραφή |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | Ακτίνα καμπύλωσης για τα υπο-κουμπιά |
| `--bubble-sub-button-background-color` | `color` | Χρώμα φόντου για τα υπο-κουμπιά |
| `--bubble-sub-button-outline` | `box-shadow` | Περίγραμμα που προστίθεται σε υπο-κουμπί ή ρυθμιστικό μόνο όταν σχεδιάζεται στο ίδιο χρώμα με την κάρτα από πίσω, κάτι που θα το έκανε αόρατο (ορίστε το σε `none` για να το αφαιρέσετε) |
| `--bubble-sub-slider-border-radius` | `px` | Ακτίνα καμπύλωσης για τα υπο-κουμπιά slider |
| `--bubble-sub-slider-background-color` | `color` | Χρώμα φόντου για τα υπο-κουμπιά slider |
| `--bubble-sub-slider-height` | `px` | Ύψος για τα πάντα-ορατά υπο-κουμπιά slider |
| `--bubble-sub-slider-outline` | `box-shadow` | Περίγραμμα μόνο των υπο-κουμπιών slider, με εφεδρικό το `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | Χρώμα κειμένου σε φωτεινά φόντα υπο-κουμπιών |

</details>

#### Παραδείγματα

<details>

<summary>Ένα κουμπί με μερικά υπο-κουμπιά για να φτιάξετε μια κάρτα ηλεκτρικής σκούπας (όπως στο στιγμιότυπο οθόνης)</summary>

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

<summary>Ένα κουμπί slider με ένα υπο-κουμπί που δείχνει τη φωτεινότητα και ένα που εναλλάσσει το φως (όπως στο στιγμιότυπο οθόνης)</summary>

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

<summary>Ένα κουμπί που δείχνει τη θερμοκρασία εσωτερικού και εξωτερικού χώρου με τον καιρό για σήμερα και αύριο (με στιγμιότυπο οθόνης)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> Κακή τύχη για μένα, έχει συννεφιά συνέχεια, αλλά όλα τα εικονίδια αλλάζουν ανάλογα με τον καιρό.

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

## Διατάξεις κάρτας

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Το Bubble Card υποστηρίζει πλήρως την προβολή ενοτήτων του Home Assistant, μπορείτε να αλλάξετε τη διάταξη της κάρτας ώστε να τη μεγαλώσετε και επίσης να αλλάξετε τον αριθμό στηλών ή γραμμών που πρέπει να καταλαμβάνει η κάρτα στην προβολή ενοτήτων σας (μόνο στις κάρτες που υποστηρίζουν αυτή την επιλογή). Αυτές οι διατάξεις υποστηρίζονται επίσης σε όλους τους άλλους τύπους προβολής.

<details>

<summary><b>Διαθέσιμες διατάξεις κάρτας</b></summary>

| Διάταξη | Περιγραφή |
| --- | --- |
| `normal` | Η κανονική διάταξη (μη βελτιστοποιημένη για την προβολή ενοτήτων) |
| `large` | Μια μεγαλύτερη διάταξη που θα προσαρμοστεί στις επιλεγμένες γραμμές στην προβολή ενοτήτων (βελτιστοποιημένη για την προβολή ενοτήτων) |
| `large-2-rows` | Μια μεγαλύτερη διάταξη με 2 γραμμές υπο-κουμπιών που θα προσαρμοστεί στις επιλεγμένες γραμμές στην προβολή ενοτήτων (βελτιστοποιημένη για την προβολή ενοτήτων) |
| `large-sub-buttons-grid` | Αυτή η διάταξη θα εμφανίζει τα υπο-κουμπιά σε ένα πλέγμα, το `rows` πρέπει να οριστεί τουλάχιστον σε `2`.

</details>

#### Παραδείγματα

<details>

<summary>Ένα μεγάλο κουμπί που δείχνει στατιστικά ενέργειας με 2 γραμμές υπο-κουμπιών (με στιγμιότυπο οθόνης)</summary>

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

<summary>Ένα μεγάλο κουμπί με πολλαπλές γραμμές με 12 υπο-κουμπιά</summary>

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

## Συνθήκες

Ορισμένες επιλογές καθορίζονται από συνθήκες, γραμμένες ακριβώς όπως εκείνες της [κάρτας συνθηκών](https://www.home-assistant.io/dashboards/conditional/) του Home Assistant:

- `visibility` σε ένα [υπο-κουμπί](#υπο-κουμπιά), για να εμφανίζεται ή να κρύβεται
- `trigger` σε ένα [pop-up](#pop-up), για να ανοίγει όταν πληρούνται οι συνθήκες
- `checkConditionsMet(conditions, hass)` μέσα στα [πρότυπά](#πρότυπα) σας, όταν χρειάζεστε την απάντηση στον δικό σας κώδικα

Αξιολογείται κάθε τύπος συνθήκης του Home Assistant: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, καθώς και οι ομάδες `and`, `or` και `not`. Λειτουργούν και οι συνθήκες του δημιουργού συνθηκών του Home Assistant, αυτές που παίρνουν το όνομα του τομέα τους όπως `sun.is_up`, `light.is_on`, `zone.in_zone` ή `temperature.is_value`, με τις ρυθμίσεις τους `target`, `options`, `behavior` και `for`.

<details>

<summary><b>Παράδειγμα</b></summary>

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
> Οι συνθήκες αξιολογούνται στο πρόγραμμα περιήγησής σας, οπότε οι λίγες που χρειάζονται τον διακομιστή του Home Assistant δεν μπορούν να είναι ακριβείς: η ανατολή και η δύση διαβάζονται από την οντότητα `sun.sun` αντί να υπολογίζονται ξανά, και μια διάρκεια `for` μετριέται από την τελευταία αλλαγή κατάστασης, χωρίς το ιστορικό του recorder.
>
> Το `view_columns` γίνεται δεκτό αλλά πληρούται πάντα, καθώς το Bubble Card δεν είναι ποτέ αυτό που διατάσσει τις στήλες της προβολής σας. Ένας τύπος συνθήκης που δεν γνωρίζει το Bubble Card αναφέρεται μία φορά στην κονσόλα του προγράμματος περιήγησής σας αντί να αποτυγχάνει σιωπηλά, ώστε να ξεχωρίζετε ένα τυπογραφικό λάθος από μια λειτουργία που λείπει.

<br>

---

<br>

## Ενέργειες πατήματος, διπλού πατήματος και παρατεταμένου πατήματος

Μπορείτε επίσης να χρησιμοποιήσετε τις προεπιλεγμένες ενέργειες πατήματος, διπλού πατήματος και παρατεταμένου πατήματος του Home Assistant στις κάρτες που υποστηρίζουν αυτή την επιλογή. Για παράδειγμα, αυτό σας επιτρέπει να εμφανίζετε το παράθυρο "περισσότερες πληροφορίες" κρατώντας πατημένο ένα εικονίδιο κουμπιού ή να εκτελείτε μια υπηρεσία όταν πατηθεί ένα υπο-κουμπί.

**Σημείωση: Όταν έχει οριστεί ένα `double_tap_action`, το κανονικό `tap_action` θα έχει καθυστέρηση 200ms για να επιτρέψει την ανίχνευση
ενός διπλού πατήματος. Αν αυτή η καθυστέρηση δεν είναι επιθυμητή, ορίστε το `double_tap_action` σε `none` για να απενεργοποιήσετε τον χειρισμό διπλού πατήματος.**

### Επιλογές ενέργειας

<details>

<summary><b>Επιλογές (YAML + περιγραφή)</b></summary>

| Όνομα | Τύπος | Υποστηριζόμενες επιλογές | Περιγραφή |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | Ενέργεια προς εκτέλεση |
| `target` | object |  | Λειτουργεί μόνο με το `call-service`. Ακολουθεί τη [σύνταξη του home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | Οποιαδήποτε διαδρομή του πίνακα ελέγχου σας | Διαδρομή προς πλοήγηση (π.χ. `'#kitchen'` για το άνοιγμα ενός pop-up) όταν η ενέργεια οριστεί ως navigate |
| `url_path` | string | Οποιοσδήποτε σύνδεσμος | URL προς άνοιγμα κατά το κλικ (π.χ. `https://www.google.com`) όταν η ενέργεια είναι `url` |
| `service` | string | Οποιαδήποτε υπηρεσία | Υπηρεσία προς κλήση (π.χ. `media_player.media_play_pause`) όταν το `action` οριστεί ως `call-service` |
| `data` ή `service_data` | object | Οποιαδήποτε δεδομένα υπηρεσίας | Δεδομένα υπηρεσίας προς συμπερίληψη (π.χ. `entity_id: media_player.kitchen`) όταν το `action` οριστεί ως `call-service` |
| `confirmation` | object | Δείτε [επιβεβαίωση](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | Εμφανίστε ένα pop-up επιβεβαίωσης (όχι ένα του Bubble Card), παρακάμπτει το προεπιλεγμένο αντικείμενο `confirmation` |

</details>

#### Παράδειγμα

<details>

<summary>Ένα κουμπί για το άνοιγμα ενός pop-up</summary>

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

## Στυλ

Μπορείτε να προσθέσετε προσαρμοσμένα στυλ για να τροποποιήσετε το CSS όλων των καρτών **χωρίς να χρησιμοποιήσετε card-mod** με τέσσερις τρόπους:

- Στον επεξεργαστή, πηγαίνετε στην κάρτα που θέλετε να τροποποιήσετε, στη συνέχεια μεταβείτε στο _Styling options > Custom styles & JS templates_, και προσθέστε τα προσαρμοσμένα σας στυλ (δείτε τις συμβουλές και τα παραδείγματα παρακάτω).
- Στον επεξεργαστή (ή σε [YAML](#modules)), πηγαίνετε στην κάρτα που θέλετε να τροποποιήσετε, στη συνέχεια μεταβείτε στο _Modules_, και δημιουργήστε ένα νέο module (θα είναι διαθέσιμο σε όλες τις κάρτες), ή πηγαίνετε στο **Module Store** για να εγκαταστήσετε οποιοδήποτε διαθέσιμο Module (περισσότερες λεπτομέρειες για τα modules θα βρείτε [παρακάτω](#modules)).
- Σε ένα αρχείο [θέματος](https://www.home-assistant.io/integrations/frontend/#defining-themes) προσθέτοντας μεταβλητές CSS σε YAML (αυτές είναι διαθέσιμες στην τεκμηρίωση κάθε κάρτας παραπάνω). Αυτό επιτρέπει καθολικές τροποποιήσεις.

  <details>
  
  <summary>Παράδειγμα</a></summary>
  
  <br>

  Μην αντιγράψετε τη γραμμή `Bubble:`, αυτό είναι το όνομα του θέματος που χρησιμοποιείτε. Επίσης πρέπει να αφαιρέσετε το `--` από τις μεταβλητές.

  Πρέπει να εκτελέσετε την ενέργεια [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) για να ανανεώσετε το θέμα μετά από οποιαδήποτε τροποποίηση.

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
  
- Σε YAML προσθέτοντας `styles: |` ακολουθούμενο από τα προσαρμοσμένα σας στυλ (δείτε τις συμβουλές και τα παραδείγματα παρακάτω).

> [!TIP]  
> **Για να κατανοήσετε ποιες κλάσεις στυλ μπορούν να τροποποιηθούν**, μπορείτε να ρίξετε μια ματιά στον φάκελο [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) σε αυτό το αποθετήριο. Σε κάθε φάκελο κάρτας, θα βρείτε ένα αρχείο με όνομα `styles.css`. Αυτά τα αρχεία περιέχουν όλα τα εφαρμοσμένα στυλ. Αυτό επιτρέπει πολύ περισσότερες δυνατότητες από τις μεταβλητές CSS, αλλά πρέπει να προστεθεί ξεχωριστά σε κάθε κάρτα.
> 
> Μπορείτε επίσης να βρείτε πολλά [παραδείγματα από την κοινότητα](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), ή κάποια από το [φόρουμ του Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) κάνοντας λίγη αναζήτηση.
>
> Το θέμα Bubble για το Home Assistant (όπως στα στιγμιότυπα οθόνης) μπορείτε να το βρείτε [εδώ](https://github.com/Clooos/Bubble).
>
> Ένα βίντεο εκμάθησης έρχεται σύντομα στο [κανάλι μου στο YouTube](https://www.youtube.com/@cloooos)!

> [!IMPORTANT]  
> Παρακαλώ σημειώστε ότι ίσως χρειαστεί να προσθέσετε `!important;` σε ορισμένα στυλ CSS που είναι ήδη ορισμένα (δείτε τα παραδείγματα παρακάτω).

> [!TIP]  
> Τα υπο-κουμπιά μπορούν να στοχευθούν μέσω κλάσεων με βάση το όνομα. Για παράδειγμα, ένα υπο-κουμπί με όνομα "My sub-button" μπορεί να στυλιστεί με `.my-sub-button`. Τα υπο-κουμπιά slider εκθέτουν επίσης τα `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2`, κ.ο.κ.
>
> Μια κλάση βασισμένη στο όνομα αλλάζει όταν μετονομάζετε ένα υπο-κουμπί, και μεταφράζεται όταν μεταφράζεται το όνομα. Ορίστε το `css_class` στο υπο-κουμπί για να έχετε μια δική σας κλάση που δεν μετακινείται ποτέ, όποιο κι αν είναι το όνομά του και όποια κι αν είναι η γλώσσα.

#### Παραδείγματα

<details>

<summary>Αλλαγή του μεγέθους γραμματοσειράς οποιασδήποτε κάρτας Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Αλλαγή του χρώματος φόντου ενός μεμονωμένου κουμπιού σε μια οριζόντια στοίβα κουμπιών</summary>

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

<summary>Αλλαγή του χρώματος φόντου μιας κάρτας</summary>

<br>

Αυτό λειτουργεί σε όλους τους τύπους Bubble Card (εκτός από τα pop-up):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

Αυτό κάνει το ίδιο μόνο σε μια κάρτα κουμπιού (λειτουργεί και για την κεφαλίδα του pop-up): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

Για να αλλάξετε το χρώμα όταν είναι `on` ρίξτε μια ματιά στα πρότυπα στυλ παρακάτω.

</details>

<details>

<summary>Αλλαγή του χρώματος ενός slider κουμπιού</summary>

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

<summary>Αλλαγή του χρώματος γραμμής ενός διαχωριστικού</summary>

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

<summary>Αλλαγή του χρώματος ενός εικονιδίου</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

Για ένα εικονίδιο οριζόντιας στοίβας κουμπιών.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Αλλαγή του χρώματος φόντου ενός περιέκτη εικονιδίου</summary>

<br>

Αυτό λειτουργεί σε όλους τους τύπους Bubble Card (εκτός από τα pop-up):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

Αυτό κάνει το ίδιο για την κεφαλίδα του pop-up: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Αλλαγή του μεγέθους των υπο-κουμπιών (ιδανικό για τη μεγάλη διάταξη)</summary>

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

<summary>Αλλαγή του χρώματος φόντου του δεύτερου υπο-κουμπιού</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Αλλαγή του μεγέθους ενός εικονιδίου</summary>

<br>

Για το κύριο εικονίδιο.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

Για τα εικονίδια υπο-κουμπιών.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Χρήση μιας εικόνας αντί για εικονίδιο σε ένα υπο-κουμπί</summary>

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

Απλά ανεβάστε αυτή την εικόνα σε έναν φάκελο "pictures" (ή όποιο όνομα θέλετε) μέσα στον φάκελο "www" του Home Assistant.

</details>

<details>

<summary>Προχωρημένο παράδειγμα: Δημιουργία μιας οριζόντιας σειράς υπο-κουμπιών (περιλαμβάνεται στιγμιότυπο οθόνης)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> Μου αρέσει πραγματικά αυτό, το χρησιμοποιώ ως κεφαλίδα στο dashboard μου.

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

## Πρότυπα

**Το Bubble Card δεν υποστηρίζει πρότυπα Jinja**, αλλά οι προχωρημένοι χρήστες μπορούν να προσθέσουν πρότυπα σε JS απευθείας στα [προσαρμοσμένα στυλ](#στυλ) τους. Για παράδειγμα, αυτό επιτρέπει δυναμική αλλαγή ενός εικονιδίου, των κειμένων ή των χρωμάτων ενός στοιχείου, την εμφάνιση ή απόκρυψη ενός στοιχείου υπό όρους (όπως ένα υπο-κουμπί), ή σχεδόν οτιδήποτε με βάση μια κατάσταση, ένα χαρακτηριστικό και άλλα.

> [!TIP]  
> Περισσότερες πληροφορίες σχετικά με τα πρότυπα JS [εδώ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Η συμβουλή μου είναι να **ρίχνετε πάντα μια ματιά στην κονσόλα του προγράμματος περιήγησής σας** για να βεβαιωθείτε ότι όλα λειτουργούν σωστά.

> [!IMPORTANT]  
> **Όλα τα πρότυπα που δεν τροποποιούν μια ιδιότητα CSS πρέπει να τοποθετούνται στο τέλος! Όπως η τροποποίηση ενός εικονιδίου, ενός κειμένου ή οποιουδήποτε στοιχείου.**

#### Διαθέσιμες μεταβλητές και συναρτήσεις

<details>

<summary>Μεταβλητές</summary>

<br>

Έχετε πρόσβαση σε αυτές τις μεταβλητές στις περισσότερες κάρτες:

- `state` επιστρέφει την κατάσταση της οντότητας (`entity`) που έχετε ορίσει.
  
- `entity` επιστρέφει την οντότητα που ορίσατε όπως `switch.test` σε αυτό το παράδειγμα.
  
- `icon` μπορεί να χρησιμοποιηθεί έτσι για να αλλάξετε το εικονίδιο `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` επιστρέφει την κατάσταση της οντότητας του πρώτου υπο-κουμπιού σας, `[0]` είναι η κατάσταση του πρώτου υπο-κουμπιού, `[1]` του δεύτερου...
  
- `subButtonIcon[0]` μπορεί να χρησιμοποιηθεί έτσι για να αλλάξετε το εικονίδιο του πρώτου υπο-κουμπιού `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` είναι το εικονίδιο του πρώτου υπο-κουμπιού, `[1]` του δεύτερου...
  
- `card` επιστρέφει το στοιχείο της κάρτας στο DOM.
  
- `hass` είναι μια προχωρημένη μεταβλητή που σας δίνει ακόμα περισσότερο έλεγχο, για παράδειγμα μπορείτε να επιστρέψετε την κατάσταση του `light.kitchen` έτσι `hass.states['light.kitchen'].state` ή ένα χαρακτηριστικό έτσι `hass.states[entity].attributes.brightness`.

- `this` επιστρέφει πολλές χρήσιμες πληροφορίες σχετικά με τη ρύθμιση και το dashboard σας, χρησιμοποιήστε το μόνο αν ξέρετε τι κάνετε.

</details>

<details>

<summary>Συναρτήσεις</summary>

<br>

Έχετε πρόσβαση σε όλες τις καθολικές συναρτήσεις JS, αλλά έχετε επίσης πρόσβαση σε:

- `getWeatherIcon` μπορεί να χρησιμοποιηθεί για να επιστρέψει ένα εικονίδιο καιρού με βάση μια κατάσταση που επιστρέφει τον καιρό. Για παράδειγμα, μπορείτε να κάνετε αυτό `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` για να αλλάξετε το εικονίδιο του τρίτου υπο-κουμπιού στο σημερινό εικονίδιο καιρού, `.forecast[1]?.condition` είναι για αύριο...

  Θα χρειαστεί να δημιουργήσετε έναν αισθητήρα προτύπου για αυτό. Ορίστε τι μπορείτε να προσθέσετε στο `configuration.yaml`:
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
- Το `checkConditionsMet(conditions, hass)` επιστρέφει `true` όταν πληρούται μια λίστα [συνθηκών](#συνθήκες), για παράδειγμα `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` μπορεί να χρησιμοποιηθεί για τη μετάφραση μιας κατάστασης (μπορεί επίσης να χρησιμοποιηθεί για να πάρετε τη μονάδα μιας κατάστασης, χωρίς να χρειάζεται να την προσθέσετε χειροκίνητα).
- `hass.formatEntityAttributeValue(state, "attribute")` μπορεί να χρησιμοποιηθεί για τη μετάφραση ενός χαρακτηριστικού (μπορεί επίσης να χρησιμοποιηθεί για να πάρετε τη μονάδα μιας κατάστασης, χωρίς να χρειάζεται να την προσθέσετε χειροκίνητα).

</details>

#### Παραδείγματα

Μπορείτε να βρείτε πολλά παραδείγματα παρακάτω, αλλά μπορείτε επίσης να βρείτε πολύ προχωρημένα πρότυπα στη [σελίδα μου στο Patreon](https://www.patreon.com/c/Clooos), όπως ένα (το αγαπημένο μου) που επιτρέπει έως τέσσερα σήματα υπό όρους τοποθετημένα γύρω από τα εικονίδια της κάρτας. Είναι επίσης ένας πολύ καλός τρόπος να μάθετε για όλες τις δυνατότητες των προσαρμοσμένων στυλ και προτύπων του Bubble Card!

<details>
<summary>Παραδείγματα από τη σελίδα μου στο Patreon</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">Προσθήκη σημάτων στυλ Home Assistant σε οποιαδήποτε κάρτα</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">Εμφάνιση μορφοποιημένης ημερομηνίας και ώρας σε ένα διαχωριστικό χωρίς χρήση καμίας οντότητας</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">Εμφάνιση κατάστασης υπο-κουμπιού σε δύο γραμμές</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">Προσαρμογή ετικετών και εικονιδίων μέσα σε ένα υπο-κουμπί επιλογής</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">Προσθήκη ενός μόνιμου pop-up υπενθύμισης που εμφανίζεται μόνο όταν χρειάζεται</a>
</p>

<br>

</details>

<details>

<summary>Αλλαγή του χρώματος φόντου ενός κουμπιού που είναι κόκκινο όταν είναι <code>off</code> και μπλε όταν είναι <code>on</code></summary>

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

<summary>Αλλαγή του χρώματος φόντου ενός κουμπιού με βάση μια οντότητα για την οριζόντια στοίβα κουμπιών</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Εμφάνιση/απόκρυψη ενός υπο-κουμπιού υπό όρους</summary>

<br>

Αυτό εμφανίζει το πρώτο υπο-κουμπί μόνο όταν η ηλεκτρική σκούπα μου έχει κολλήσει.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

Αυτό εμφανίζει ένα υπο-κουμπί όταν η μπαταρία είναι κάτω από 10%. Χρήσιμο με ένα υπο-κουμπί που δείχνει "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Αλλαγή ενός εικονιδίου ή εικονιδίου υπο-κουμπιού υπό όρους</summary>

<br>

Αυτό αλλάζει το εικονίδιο ενός κουμπιού μόνο όταν μια ηλεκτρική σκούπα έχει κολλήσει.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

Αυτό αλλάζει το εικονίδιο του πρώτου υπο-κουμπιού μόνο όταν μια ηλεκτρική σκούπα έχει κολλήσει.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Αλλαγή του χρώματος ενός εικονιδίου ή εικονιδίου υπο-κουμπιού υπό όρους</summary>

<br>

Αυτό αλλάζει το χρώμα του εικονιδίου ενός κουμπιού με βάση την κατάστασή του.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

Αυτό αλλάζει το χρώμα του εικονιδίου ενός υπο-κουμπιού με βάση την κατάστασή του. Το `.bubble-sub-button-1` είναι το πρώτο υπο-κουμπί, αντικαταστήστε το `1` αν θέλετε να αλλάξετε το εικονίδιο άλλου υπο-κουμπιού.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Κινούμενο εικονίδιο ανεμιστήρα υπό όρους</summary>

<br>

Αυτό περιστρέφει το εικονίδιο ενός κουμπιού όταν ένας ανεμιστήρας είναι `on`.
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

<summary>Δημιουργία προτύπων για κείμενα (όπως όνομα ή κατάσταση)</summary>

<br>

Αυτό αλλάζει το όνομα/κατάσταση ενός κουμπιού με "It's currently sunny" ανάλογα με τον καιρό σας.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
ή όταν εφαρμόζεται σε υπο-κουμπιά:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


Αν θέλετε να δημιουργήσετε πρότυπο για την κατάσταση (`.bubble-state`) μην ενεργοποιήσετε το `show_state: true`, απλά ενεργοποιήστε το `show_attribute: true` χωρίς κανένα χαρακτηριστικό.

</details>

<details>

<summary>Προχωρημένο παράδειγμα: Αλλαγή του χρώματος ενός υπο-κουμπιού όταν ένα pop-up είναι ανοιχτό</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Προχωρημένο παράδειγμα: Δημιουργία προτύπου για το όνομα ενός διαχωριστικού με βάση μια κατάσταση μεταφρασμένη στη γλώσσα σας</summary>

<br>

Μπορείτε να χρησιμοποιήσετε το `hass.formatEntityState(state)` για να μεταφράσετε μια κατάσταση και το `hass.formatEntityAttributeValue(state, "attribute")` για να μεταφράσετε ένα χαρακτηριστικό.

Αυτό αλλάζει το όνομα και το εικονίδιο με βάση τον καιρό, "Nuageux" σημαίνει "Cloudy" στα γαλλικά.

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

## Modules

Τα modules είναι ένα ισχυρό χαρακτηριστικό που σας επιτρέπει να αποθηκεύετε, να επαναχρησιμοποιείτε και να μοιράζεστε τα προσαρμοσμένα σας στυλ και πρότυπα σε όλες τις κάρτες Bubble Card σας. Αντί να αντιγράφετε και να επικολλάτε τον ίδιο κώδικα σε πολλαπλές κάρτες, μπορείτε να δημιουργήσετε ένα Module και να το εφαρμόσετε όπου το χρειάζεστε. Αυτό κάνει τη διαχείριση της εμφάνισης του dashboard σας πολύ πιο εύκολη και αποδοτική.

Αλλά αυτό το χαρακτηριστικό είναι πολύ πιο ισχυρό από αυτό, σας επιτρέπει να προσθέσετε εσείς οι ίδιοι πραγματικά χαρακτηριστικά στον επεξεργαστή του Bubble Card, χρησιμοποιώντας όλες τις προεπιλεγμένες επιλογές [φόρμας του Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
Ο επιλογέας αντικειμένων έχει βελτιωθεί ώστε να εμφανίζει τις αλλαγές σε πραγματικό χρόνο και να υποστηρίζει σωστά τα χαρακτηριστικά.

Ένα module μπορεί επίσης να απαντά στον επιλογέα καρτών του Home Assistant δίπλα στις ενσωματωμένες [προτάσεις οντοτήτων](#προτάσεις-οντοτήτων): χρησιμοποιήστε το `suggestions` για τις κάρτες που μπορεί να περιγράψει εκ των προτέρων, και το `suggestions_code` όταν πρέπει να υπολογιστούν από τη δική σας εγκατάσταση, για παράδειγμα ένα pop-up φτιαγμένο από όλες τις οντότητες της περιοχής στην οποία ανήκει η επιλεγμένη οντότητα. Και τα δύο κλειδιά τεκμηριώνονται [εδώ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

Μπορείτε επίσης να περιηγηθείτε στο **Module Store** για να βρείτε και να εγκαταστήσετε [modules που έχουν δημιουργηθεί από την κοινότητα](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ή να μοιραστείτε τις δικές σας δημιουργίες!

> [!TIP]
> Ο κώδικας ενός Module λειτουργεί ακριβώς με τον ίδιο τρόπο όπως ο κώδικας στην ενότητα `styles` μιας κάρτας. Όλες οι ίδιες μεταβλητές και συναρτήσεις από την ενότητα [Πρότυπα](#πρότυπα) είναι διαθέσιμες.

<br>

### Αρχική ρύθμιση

> [!IMPORTANT]
> Από την έκδοση v3.1.0, το Bubble Card Tools είναι το προτεινόμενο backend αποθήκευσης για τα modules. Η παλαιότερη μέθοδος με αισθητήρα προτύπου εξακολουθεί να λειτουργεί για τις υπάρχουσες ρυθμίσεις, αλλά τα νέα modules και τα χαρακτηριστικά του Module Store υποστηρίζονται καλύτερα μέσω του Bubble Card Tools.

Η ενσωμάτωση Bubble Card Tools ενεργοποιεί τον επεξεργαστή Module και το Module Store, και αποθηκεύει τα modules ως ξεχωριστά αρχεία YAML. Τα υπάρχοντα modules μεταφέρονται αυτόματα.

Τα βήματα εγκατάστασης και ρύθμισης εξηγούνται εδώ:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### Ο επεξεργαστής Module

Μπορείτε να αποκτήσετε πρόσβαση στον επεξεργαστή Module από τις ρυθμίσεις οποιασδήποτε κάρτας, στην ενότητα **Modules**. Ο επεξεργαστής παρέχει δύο κύριες καρτέλες:

#### Καρτέλα My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

Αυτή η καρτέλα εμφανίζει όλα τα εγκατεστημένα modules σας και σας επιτρέπει να:

- **Εφαρμόσετε** υπάρχοντα modules στην τρέχουσα κάρτα
- **Δημιουργήσετε** ένα νέο module από την αρχή
- **Επεξεργαστείτε** υπάρχοντα modules με προεπισκόπηση σε πραγματικό χρόνο
- **Διαγράψετε** modules που δεν χρειάζεστε πλέον
- **Αναζητήσετε** και **ταξινομήσετε** modules (αλφαβητικά, πρόσφατα, ενεργά πρώτα)
- **Ορίσετε καθολική κατάσταση** ώστε ένα module να εφαρμόζεται αυτόματα σε όλες τις κάρτες
- **Εισάγετε/Εξάγετε** modules για δημιουργία αντιγράφου ασφαλείας ή κοινή χρήση
- **Γράψετε προτάσεις οντοτήτων** στον επεξεργαστή modules, στο **Προαιρετικό: Προτάσεις οντοτήτων**, ώστε το module σας να προτείνεται στον επιλογέα καρτών του Home Assistant. Τόσο οι κανόνες όσο και οι υπολογισμένες προτάσεις ελέγχονται καθώς γράφετε, ένα σφάλμα εκεί εμποδίζει την αποθήκευση, και η προεπισκόπηση δείχνει τις προτεινόμενες κάρτες για όποια οντότητα επιλέξετε

#### Καρτέλα Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

Αυτή η καρτέλα εμφανίζει [όλα τα διαθέσιμα modules από την κοινότητα](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), και σας επιτρέπει να:

- **Περιηγηθείτε** σε όλα τα modules που έχουν δημιουργηθεί από την κοινότητα
- **Αναζητήσετε** και να φιλτράρετε modules ανά όνομα, συμβατότητα ή λέξεις-κλειδιά
- **Εγκαταστήσετε** modules με ένα κλικ
- **Ενημερώσετε** εγκατεστημένα modules όταν είναι διαθέσιμες νέες εκδόσεις

> [!TIP]
> Στον επεξεργαστή, μπορείτε να ενεργοποιήσετε μη υποστηριζόμενα modules για να δοκιμάσετε modules που δεν είναι ακόμα σημειωμένα ως συμβατά με έναν συγκεκριμένο τύπο κάρτας.

<br>

### Πώς να χρησιμοποιήσετε τα modules

#### Δημιουργία νέου module

<details>

<summary>Κλικ για ανάπτυξη</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. Πηγαίνετε στον επεξεργαστή οποιασδήποτε κάρτας και αναπτύξτε την ενότητα **Modules**.
2. Κάντε κλικ στο **Create new module**.
3. Συμπληρώστε τις πληροφορίες του module.
4. Γράψτε τον κώδικα προτύπου CSS ή/και JavaScript στον επεξεργαστή **Code**.
5. (Προαιρετικά) Δημιουργήστε ένα προσαρμοσμένο περιβάλλον ρύθμισης στην ενότητα **Editor** (όπως το εργαλείο επιλογής χρώματος στο παραπάνω στιγμιότυπο οθόνης, πλήρης τεκμηρίωση διαθέσιμη [εδώ](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (Προαιρετικά) Γράψτε τις **Προτάσεις οντοτήτων** σας ώστε το module σας να προτείνεται στον επιλογέα καρτών του Home Assistant. Ο πίνακας ελέγχει όσα γράφετε καθώς πληκτρολογείτε, και η προεπισκόπησή του δείχνει τις ίδιες τις προτεινόμενες κάρτες για την οντότητα της επιλογής σας.
7. Κάντε κλικ στο **Save**.

Το module σας είναι τώρα διαθέσιμο για χρήση σε οποιαδήποτε από τις κάρτες σας!

<br>

</details>

#### Εφαρμογή ενός module σε μια κάρτα

<details>

<summary>Κλικ για ανάπτυξη</summary>

<br>

- **Μέσω του επεξεργαστή:**

  - Πηγαίνετε στον επεξεργαστή της κάρτας στην οποία θέλετε να εφαρμόσετε το module.
  - Αναπτύξτε την ενότητα **Modules**.
  - Κάντε κλικ στο module που θέλετε να εφαρμόσετε από τη λίστα.
  - Κάτω από το "Apply to", κάντε κλικ στο "This card". Το module είναι τώρα ενεργό. Μπορείτε να εφαρμόσετε πολλαπλά modules στην ίδια κάρτα.

- **Μέσω YAML:**

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

#### Καθολική εφαρμογή ενός module

<details>

<summary>Κλικ για ανάπτυξη</summary>

<br>

Μπορείτε να ρυθμίσετε ένα module ώστε να εφαρμόζεται αυτόματα σε όλες τις κάρτες Bubble Card:

**Αυτό δεν είναι διαθέσιμο για modules με επεξεργαστή, καθώς αυτά απαιτούν συγκεκριμένη ρύθμιση για να λειτουργήσουν.**

- **Μέσω του επεξεργαστή:**

  - Στον επεξεργαστή Module, βρείτε το module σας στην καρτέλα **My Modules**.
  - Ενεργοποιήστε το κουμπί **All cards** δίπλα στο όνομα του module.
  - Το module θα εφαρμόζεται τώρα αυτόματα σε όλες τις κάρτες.
 
- **Μέσω YAML:**

  Στη ρύθμιση YAML του module σας (στο `bubble-modules.yaml`), απλά προσθέστε `is_global: true`.

<br>

</details>

#### Εξαίρεση μιας μεμονωμένης κάρτας από ένα καθολικό module

<details>

<summary>Κλικ για ανάπτυξη</summary>

<br>

Αν έχετε ένα καθολικό module αλλά θέλετε να το εξαιρέσετε από μια συγκεκριμένη κάρτα:

- **Μέσω του επεξεργαστή:**
  
  - Στην ενότητα **Modules** της κάρτας, θα δείτε τα καθολικά modules να αναγράφονται.
  - Κάντε κλικ σε ένα καθολικό module, απενεργοποιήστε το "This card" για να το εξαιρέσετε από αυτή τη συγκεκριμένη κάρτα.

- **Μέσω YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### Κοινή χρήση του module σας στο Module Store

<details>

<summary>Κλικ για ανάπτυξη</summary>

<br>

Για να μοιραστείτε το Module σας στο Module Store, στον επεξεργαστή Module, στο κάτω μέρος στο "Export Module", κάντε κλικ στο "Copy for GitHub" και επικολλήστε το περιεχόμενο σε μια νέα συζήτηση στην κατηγορία [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **Επεξεργαστείτε την περιγραφή** (αν χρειάζεται), **το παράδειγμα** (για χρήστες YAML), και θυμηθείτε να **συμπεριλάβετε τουλάχιστον ένα στιγμιότυπο οθόνης** για το Module Store.

**Το Module σας γίνεται διαθέσιμο αμέσως μετά από αυτό** (μετά από μια ανανέωση του Store), οπότε ελέγξτε ξανά ότι όλα είναι γραμμένα σωστά και ότι το Module λειτουργεί όπως αναμένεται. Μπορείτε φυσικά να επεξεργαστείτε/ενημερώσετε το Module αφού μοιραστεί.

<br>

</details>

#### Διαχείριση εκδόσεων

<details>

<summary>Κλικ για ανάπτυξη</summary>

<br>

Το Module Store ελέγχει αυτόματα για ενημερώσεις στα εγκατεστημένα modules. Όταν υπάρχουν διαθέσιμες ενημερώσεις:

1. Θα δείτε μια ένδειξη ενημέρωσης στην καρτέλα **Module Store**.
2. Κάντε κλικ στο **Update** στα modules με διαθέσιμες ενημερώσεις.
3. Επιβεβαιώστε την ενημέρωση στο Module Store.

<br>

</details>

#### Ορισμός υποστηριζόμενων τύπων κάρτας

<details>

<summary>Κλικ για ανάπτυξη</summary>

<br>

Ορισμένα modules ενδέχεται να μην είναι συμβατά με όλους τους τύπους κάρτας. Μπορείτε να καθορίσετε ποιες κάρτες υποστηρίζει ένα module.  
Αν θέλετε ένα module να είναι συμβατό με **όλες τις κάρτες**, απλά παραλείψτε το πεδίο `supported` (ή χρησιμοποιήστε την επιλογή **All cards** στον επεξεργαστή).

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

### Παραδείγματα

<details>
<summary>Βασικό module στυλ</summary>

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
<summary>Module με προσαρμοσμένη ρύθμιση</summary>

<br>

Αυτό το module είναι διαθέσιμο [εδώ](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

Περισσότερα παραδείγματα μπορείτε να βρείτε στο Module Store, ή [εδώ](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## Τοπική προσαρμογή

Το Bubble Card μιλά τη γλώσσα σας. Ο επεξεργαστής του είναι μεταφρασμένος στις 64 γλώσσες που υποστηρίζει το Home Assistant, και όπου το Home Assistant έχει ήδη μια λέξη για κάτι, χρησιμοποιείται η δική του διατύπωση, ώστε να διαβάζετε τους ίδιους όρους και στα δύο περιβάλλοντα.

Στο κάτω μέρος του επεξεργαστή, δίπλα στον αριθμό έκδοσης, ένας διακόπτης **Αυτόματο** ακολουθεί τη γλώσσα του Home Assistant σας. Απενεργοποιήστε τον και όλος ο επεξεργαστής επιστρέφει στα αγγλικά, κάτι βολικό για να ακολουθήσετε έναν οδηγό ή να αναφέρετε ένα πρόβλημα. Η επιλογή σας απομνημονεύεται στο πρόγραμμα περιήγησής σας.

Και αυτή η τεκμηρίωση είναι μεταφρασμένη, [σε 62 γλώσσες](languages.md). Οι σελίδες αυτές είναι ανοιχτές σε όλους, οπότε μια διατύπωση που δεν ταιριάζει με το δικό σας Home Assistant μπορεί να διορθωθεί με δύο κλικ. Η αγγλική έκδοση παραμένει η αναφορά για το ίδιο το περιεχόμενο.

<br>

---

<br>

## Βοήθεια

Μη διστάσετε να ανοίξετε ένα issue αν κάτι δεν λειτουργεί όπως αναμένεται. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

Έχετε ερωτήσεις ή σκέψεις για το Bubble Card; Θέλετε να μοιραστείτε τα dashboard σας ή τις ανακαλύψεις σας; Μπορείτε να επισκεφθείτε το φόρουμ του Home Assistant, το subreddit του Bubble Card ή την ενότητα GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## Συνεισφορά

Οι συνεισφορές είναι ευπρόσδεκτες! Είτε πρόκειται για διορθώσεις σφαλμάτων, νέα χαρακτηριστικά, μεταφράσεις ή βελτιώσεις τεκμηρίωσης, μη διστάσετε να ανοίξετε ένα pull request.

Πριν ξεκινήσετε, παρακαλώ διαβάστε τον [οδηγό προγραμματιστή](DEVELOPERS.md) που καλύπτει τον τρόπο ρύθμισης του τοπικού σας περιβάλλοντος, τη δημιουργία του project και τη δοκιμή των αλλαγών σας.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## Δωρεά

Αφιερώνω τον περισσότερο ελεύθερο χρόνο μου στο να κάνω αυτό το project όσο καλύτερο γίνεται. Οπότε αν εκτιμάτε τη δουλειά μου, οποιαδήποτε δωρεά θα ήταν ένας πολύ καλός τρόπος να δείξετε την υποστήριξή σας 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

Ευχαριστώ όλους για την υποστήριξή σας, είστε όλοι η μεγαλύτερη κινητήρια δύναμή μου!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
