<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
<div dir="rtl">

> [!NOTE]
> עמוד זה הוא תרגום אוטומטי. במקרה של ספק, [התיעוד המקורי באנגלית](../README.md) גובר. משפט כלשהו נשמע שגוי? כל עזרה תתקבל בברכה, [תיקון העמוד הזה](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.he.md) לוקח רק דקה: GitHub מטפל בפיצול (fork) ובבקשת המשיכה (pull request). תודה מראש! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[קריאה בשפה אחרת](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card היא אוסף כרטיסים מינימליסטי וניתן להתאמה אישית עבור Home Assistant, הכולל חלונות קופצים מודרניים ו-Module Store משולב עם למעלה מ-100 מודולים שנוצרו על ידי הקהילה.

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## תוכן העניינים

**[`התקנה`](#התקנה)**  **[`תצורה`](#תצורה)**  **[`הצעות ישויות`](#הצעות-ישויות)**  **[`חלון קופץ`](#חלון-קופץ)**  **[`ערימת כפתורים אופקית`](#ערימת-כפתורים-אופקית)**  **[`כפתור`](#כפתור)**  **[`נגן מדיה`](#נגן-מדיה)**  **[`תריס`](#תריס)**  **[`בחירה`](#בחירה)**  **[`מיזוג אקלים`](#מיזוג-אקלים)**  **[`לוח שנה`](#לוח-שנה)**  **[`מפריד`](#מפריד)**  **[`עמודה ריקה`](#עמודה-ריקה)**  **[`כפתורי משנה בלבד`](#כפתורי-משנה-בלבד)**  **[`כפתורי משנה`](#כפתורי-משנה)**  **[`פריסות הכרטיס`](#פריסות-הכרטיס)**  **[`תנאים`](#תנאים)**  **[`פעולות`](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה)**  **[`עיצוב`](#עיצוב)**  **[`תבניות`](#תבניות)**  **[`מודולים`](#מודולים)**  **[`לוקליזציה`](#לוקליזציה)**  **[`עזרה`](#עזרה)**  **[`תרומה לפרויקט`](#תרומה-לפרויקט)**  **[`תרומה כספית`](#תרומה-כספית)**

<br>

## התקנה

**גרסת Home Assistant הנמוכה ביותר הנתמכת:** 2023.9.0

<details>

<summary>ללא HACS</summary>

<br>

1. הורידו את `bubble-card.zip` מ[הגרסה האחרונה](https://github.com/Clooos/Bubble-Card/releases/latest)
2. חלצו אותו לתיקיית `<config>/www` שלכם, אמורים להתקבל `bubble-card.js` ותיקיית `translations` לצידו (התיקייה הזו מכילה את מילוני העורך, בלעדיה העורך נשאר באנגלית)
3. בלוח המחוונים שלכם לחצו על הסמל בפינה הימנית העליונה ואז על `Edit dashboard`
4. לחצו שוב על הסמל הזה ואז לחצו על `Manage resources`
5. לחצו על `Add resource`
6. העתיקו והדביקו את זה: `/local/bubble-card.js?v=1`
7. לחצו על `JavaScript Module` ואז על `Create`
8. חזרו אחורה ורעננו את הדף שלכם
9. כעת תוכלו ללחוץ על `Add card` בפינה הימנית התחתונה ולחפש `Bubble Card`
10. אחרי כל עדכון של הקובץ תצטרכו לערוך את `/local/bubble-card.js?v=1` ולשנות את המספר של הגרסה למספר גבוה יותר

אם זה לא עובד, פשוט נסו לנקות את מטמון הדפדפן שלכם.

</details>

<details>

<summary>עם HACS (מומלץ)</summary>

<br>

שיטה זו מאפשרת לכם לקבל עדכונים ישירות מ-Home Assistant Community Store

1. אם HACS עדיין לא מותקן, הורידו אותו לפי ההוראות בכתובת [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. המשיכו לתצורה הראשונית של HACS לפי ההוראות בכתובת [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. בסרגל הצד שלכם עברו אל "HACS"
4. חפשו את "Bubble Card", או לחצו על הכפתור הכחול למטה
5. לחצו על "Download"
6. חזרו ללוח המחוונים שלכם ולחצו על הסמל בפינה הימנית העליונה ואז על `Edit dashboard`
7. כעת תוכלו ללחוץ על `Add card` בפינה הימנית התחתונה ולחפש `Bubble Card`

אם זה לא עובד, נסו לנקות את מטמון הדפדפן או האפליקציה שלכם (בכל המכשירים שלכם במידת הצורך).

#### סרטונים

תוכלו גם להעיף מבט בערוץ ה-YouTube שלי לסרטוני הדרכה שלב אחר שלב.

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## תצורה

ניתן להגדיר את כל האפשרויות בעורך של Home Assistant. אך תוכלו למצוא פרטים נוספים ואת קובץ ה-YAML בתיעוד שלמטה.

<details>

<summary><b>אפשרויות עיקריות (YAML + תיאור)</b></summary>

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `type` | string | **חובה** | `custom:bubble-card` | סוג הכרטיס |
| `card_type` | string | **חובה** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` או `sub-buttons` | סוג ה-Bubble Card, ראו למטה |
| `styles` | object list | אופציונלי | כל גיליון סגנונות CSS | מאפשר לכם להתאים אישית את ה-CSS של ה-Bubble Card שלכם, ראו [עיצוב](#עיצוב) |

</details>

<details>

<summary><b>משתני CSS גלובליים (ראו <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | רדיוס פינות עבור כל האלמנטים הנתמכים |
| `--bubble-main-background-color` | `color` | צבע רקע ראשי עבור כל האלמנטים הנתמכים |
| `--bubble-secondary-background-color` | `color` | צבע רקע משני עבור כל האלמנטים הנתמכים |
| `--bubble-accent-color` | `color` | צבע הדגשה עבור כל האלמנטים הנתמכים |
| `--bubble-icon-border-radius` | `px` | רדיוס פינות הסמל עבור כל האלמנטים הנתמכים |
| `--bubble-icon-background-color` | `color` | צבע רקע הסמל עבור כל האלמנטים הנתמכים |
| `--bubble-sub-button-border-radius` | `px` | רדיוס פינות עבור כל כפתורי המשנה |
| `--bubble-sub-button-background-color` | `color` | צבע רקע עבור כל כפתורי המשנה |
| `--bubble-box-shadow` | ראו [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | צל תיבה עבור כל האלמנטים הנתמכים |
| `--bubble-border` | ראו [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | מסגרת עבור כל הכרטיסים הנתמכים |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**צפו ב[סרטון](https://www.youtube.com/watch?v=0hSQOlBxKKI) הזה כדי להכיר את Bubble Card ואת היכולות שלו.** ערוץ ה-YouTube שלי חדש למדי ומתמקד במדריכים על Home Assistant ו-Bubble Card. אל תהססו להירשם כדי לעזור להגדיל את החשיפה של הערוץ שלי. תודה מראש!

<br>

---

<br>

## הצעות ישויות

החל מ-Home Assistant 2026.6, בחירת ישות בבורר הכרטיסים מציעה לכם כמה כרטיסים מוכנים, ו-Bubble Card מוסיפה את המתכונים שלה לרשימה הזו. בחרו תאורה ותקבלו הצעה לכרטיס עם מחוון בהירות, ובנוסף וריאציה של טמפרטורת צבע, וריאציה של צבע ווריאציה של רוויה כאשר התאורה שלכם תומכת בהן. בחרו תריס ותקבלו את מחוון המיקום שלו, בחרו נגן מדיה ותקבלו גם וריאציה עם רשימת המקורות שלו, בחרו שואב אבק ותקבלו את כפתורי ההפעלה, ההשהיה והחזרה לתחנה. כל הצעה היא תצורת Bubble Card רגילה המוצגת כתצוגה מקדימה חיה, כך שתוכלו לקחת את הקרובה ביותר ולהמשיך לערוך אותה כרגיל.

מה שמוצע לכם תלוי במה שהישות שלכם באמת יודעת לעשות: תאורה ללא ערוץ בהירות מקבלת מתג במקום מחוון, תריס שאינו יכול להטות לא מקבל וריאציית הטיה, וישות מיזוג אקלים מקבלת את מצבי הקדם שלה רק כאשר יש לה כאלה. הרשומות הקלאסיות מופיעות מתחת להצעות של Bubble Card כאשר הן רלוונטיות: הכרטיס הייעודי לסוג הישות הזה, כפתור פשוט ומחוון.

> [!TIP]
> מודולים יכולים להוסיף הצעות משלהם לרשימה הזו, ראו [מודולים](#מודולים).

<br>

---

<br>

## חלון קופץ

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

כרטיס זה מאפשר לכם ליצור חלון קופץ עם כל תוכן שתרצו. כל חלון קופץ **מוסתר כברירת מחדל** וניתן לפתוח אותו באמצעות מיקוד לקישור שלו (למשל `'#pop-up-name'`), עם כל כרטיס התומך בפעולת ה-`navigate` [action](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה), או עם [ערימת הכפתורים האופקית](#ערימת-כפתורים-אופקית) הכלולה.

> [!TIP]
> ### הפעלת חלון קופץ 
> תכונה זו מאפשרת לכם לפתוח חלון קופץ בהתבסס על מצב של כל ישות, לדוגמה, תוכלו לפתוח חלון קופץ "אבטחה" עם מצלמה כאשר אדם נמצא מול הבית שלכם. תוכלו גם ליצור עוזר החלפה (input_boolean) ולהפעיל את הפתיחה/סגירה שלו באוטומציה.
> <details>
> <summary>פתיחת חלון קופץ כאשר <code>binary_sensor</code> הוא <code>on</code></summary>
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
> ### דרכים שונות לסגור חלון קופץ 
> ישנן דרכים רבות לסגור חלון קופץ. לדוגמה, תוכלו להחליק מכותרת החלון הקופץ כלפי מטה, על ידי החלקה ארוכה בתוך החלון הקופץ כלפי מטה, על ידי לחיצה על Escape במחשב שולחני, על ידי הסרת ה-hash מכתובת ה-URL או פשוט על ידי לחיצה על כפתור הסגירה.
>


### אפשרויות החלון הקופץ

<details>

<summary><b>אפשרויות (YAML + תיאורים)</b></summary>

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `hash` | string | **חובה** | כל hash ייחודי (למשל `'#kitchen'`) עם ' ' | כך תפתחו את החלון הקופץ שלכם |
| `popup_style` | string | אופציונלי | `bubble` (ברירת מחדל) או `classic` | הגדרת הסגנון החזותי של החלון הקופץ |
| `popup_mode` | string | אופציונלי | `default` (ברירת מחדל), `fit-content`, `centered` או `adaptive-dialog` | הגדרת מצב הפריסה של החלון הקופץ |
| `with_bottom_offset` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | בשימוש רק עם `popup_mode: fit-content` או `adaptive-dialog`. מחיל היסט תחתון בנייד, שימושי כאשר לוח המחוונים שלכם כולל כרטיס כותרת תחתונה. |
| `full_width_on_mobile` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | בשימוש רק עם `popup_mode: centered`. מרחיב את החלון הקופץ לרוחב מסך מלא בנייד, שימושי במסכים קטנים יותר. |
| `performance_mode` | string | אופציונלי | `default` (ברירת מחדל) או `performance` | ייעול אנימציית הפתיחה של החלון הקופץ. `performance` מעכב מעט את עיבוד התוכן וטשטוש הרקע, וגם מבטל טשטוש רקע אם הוגדר. |
| `auto_close` | string | אופציונלי | פרק זמן במילישניות (למשל `10000` עבור 10 שניות) | סגירה אוטומטית של החלון הקופץ אחרי פרק זמן |
| `close_on_click` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | סגירה אוטומטית של החלון הקופץ אחרי כל אינטראקציה |
| `close_by_clicking_outside` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | סגירת החלון הקופץ בלחיצה מחוץ לו |
| `width_desktop` | string | אופציונלי | כל ערך CSS | רוחב במחשב שולחני (`100%` כברירת מחדל בנייד) |
| `margin` | string | אופציונלי | כל ערך CSS | השתמשו בזה **רק** אם החלון הקופץ שלכם לא ממורכז היטב בנייד (למשל `13px`) |
| `margin_top_mobile` | string | אופציונלי | כל ערך CSS | שוליים עליונים בנייד (למשל `-56px` אם הכותרת שלכם מוסתרת) |
| `margin_top_desktop` | string | אופציונלי | כל ערך CSS | שוליים עליונים במחשב שולחני (למשל `50vh` עבור חלון קופץ בגודל חצי או `calc(100vh - 400px)` עבור גובה קבוע של `400px`) |
| `bg_color` | string | אופציונלי | כל ערך hex, rgb או rgba | צבע הרקע של החלון הקופץ שלכם (למשל `#ffffff` עבור רקע לבן) |
| `bg_opacity` | string | אופציונלי | כל ערך מ-`0` עד `100` | אטימות הרקע של החלון הקופץ שלכם (למשל `100` ללא שקיפות) |
| `bg_blur` | string | אופציונלי | כל ערך מ-`0` עד `100` | אפקט טשטוש הרקע של החלון הקופץ שלכם, **זה עובד רק אם `bg_opacity` אינו מוגדר ל-`100`** (למשל `0` ללא טשטוש)|
| `shadow_opacity` | string | אופציונלי | כל ערך מ-`0` עד `100` | אטימות הצל של החלון הקופץ שלכם (למשל `0` להסתרתו) |
| `hide_backdrop` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הגדירו זאת ל-true בחלון הקופץ הראשון בלוח המחוונים הראשי שלכם כדי לבטל את הרקע האחורי בכל החלונות הקופצים. |
| `background_update` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | עדכון תוכן החלון הקופץ ברקע (לא מומלץ) |
| `trigger` | object or list | אופציונלי | ראו [תנאים](#תנאים) | פותח את החלון הקופץ הזה כאשר התנאים מתקיימים |
| `trigger_entity` | string | אופציונלי | כל ישות | פתחו חלון קופץ זה בהתבסס על מצב של כל ישות, הצורה הפשוטה של `trigger` |
| `trigger_state` | string | אופציונלי (**חובה** אם `trigger_entity` מוגדר) | כל מצב ישות | מצב הישות לפתיחת החלון הקופץ |
| `trigger_close` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | סגירת החלון הקופץ כאשר התנאים אינם מתקיימים עוד. ברירת המחדל היא `false` דווקא כאשר משתמשים בצמד הישן `trigger_entity` ו-`trigger_state` |
| `open_action` | object | אופציונלי | ראו [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הפעלת פעולה כאשר החלון הקופץ נפתח |
| `close_action` | object | אופציונלי | ראו [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הפעלת פעולה כאשר החלון הקופץ נסגר |
| `show_header` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצגה/הסתרה מלאה של כותרת החלון הקופץ |
| `show_previous_button` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצגת כפתור קודם לצד כפתור הסגירה וניווט חזרה לחלון הקופץ הקודם כאשר זמין |
| `show_close_button` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצגה או הסתרה של כפתור הסגירה תוך שמירה על שאר הכותרת גלויה |
| `buttons_position` | string | אופציונלי | `right` (ברירת מחדל) או `left` | מיקום כפתורי הסגירה והקודם בכותרת |
| `cards` | list | אופציונלי | כל Bubble Card, כרטיס Home Assistant או כרטיס מותאם אישית | הגדרת תוכן החלון הקופץ שלכם. ראו את דוגמת החלון הקופץ למטה. |
| יש לכם גם גישה ל[כל הגדרות הכפתור](#כפתור) עבור כותרת החלון הקופץ. | | אופציונלי | | אם לא מוגדר לא תוצג כותרת |

</details>

<details>

<summary><b>משתני CSS (ראו <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | רדיוס פינות עבור החלון הקופץ |
| `--bubble-pop-up-main-background-color` | `color` | צבע רקע ראשי עבור אלמנטים נתמכים בחלון הקופץ |
| `--bubble-pop-up-background-color` | `color` | צבע הרקע של החלון הקופץ |
| `--bubble-backdrop-background-color` | `color` | צבע הרקע עבור הרקע האחורי |
| יש לכם גם גישה ל[כל משתני ה-CSS של הכפתור](#אפשרויות-הכפתור) עבור כותרת החלון הקופץ. | | |

</details>


### פורמט חלון קופץ עצמאי (v3.2.0+)

מאז v3.2.0, חלונות קופצים משתמשים בפורמט עצמאי חדש שבו כרטיסי התוכן מוגדרים ישירות בתוך החלון הקופץ באמצעות האפשרות `cards`. זה מספק ביצועים טובים יותר וחוויית עריכה חדשה מבוססת גרירה ושחרור לפי מקטעים.


#### דוגמאות

<details>

<summary>חלון קופץ (פורמט עצמאי)</summary>

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

<summary>כפתור לפתיחת החלון הקופץ</summary>

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

## ערימת כפתורים אופקית

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

כרטיס זה הוא ליווי טוב לכרטיס החלון הקופץ, ומאפשר לכם לפתוח את החלונות הקופצים המתאימים. הוא גם מאפשר לכם לפתוח כל עמוד בלוח המחוונים שלכם. בנוסף, תוכלו להוסיף את חיישני התנועה/הנוכחות שלכם כך שסדר הכפתורים יתאים את עצמו לפי החדר שאליו נכנסתם זה עתה. כרטיס זה ניתן לגלילה, נשאר גלוי, ומתפקד ככותרת תחתונה.

> [!IMPORTANT]  
> כרטיס זה חייב להיות האחרון בתצוגה שלכם (אחרי כל כרטיס וחלון קופץ). הוא לא יכול להיות בתוך שום מקבץ.

### אפשרויות ערימת הכפתורים האופקית

<details>

<summary><b>אפשרויות (YAML + תיאורים)</b></summary>

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `1_link` | string | **חובה** | ה-hash של החלון הקופץ (למשל `'#kitchen'`) עם ' ' או כל קישור | קישור לפתיחה |
| `1_name` | string | אופציונלי | כל מחרוזת | שם עבור הכפתור שלכם |
| `1_icon` | string | אופציונלי | כל סמל `mdi:` | סמל עבור הכפתור שלכם |
| `1_entity` | string | אופציונלי | כל תאורה או קבוצת תאורה | הצגת צבע התאורה הזו ברקע |
| `1_pir_sensor` | string | אופציונלי | כל חיישן בינארי | לפחות חיישן pir אחד או יותר עבור `auto_order`, למעשה זה גם עובד עם כל סוג ישות, לדוגמה תוכלו להוסיף קבוצות תאורה והסדר ישתנה בהתבסס על זמני השינוי האחרונים של המצבים. |
| `auto_order` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | שינוי סדר הכפתורים לפי זמן השינוי האחרון של `_pir_sensor`, **זה חייב להיות `false` אם אין לכם `_pir_sensor` כלשהו בקוד שלכם** |
| `margin` | string | אופציונלי | כל ערך CSS | השתמשו בזה **רק** אם ה-`horizontal-buttons-stack` שלכם לא ממורכז היטב בנייד (למשל `13px`) |
| `width_desktop` | string | אופציונלי | כל ערך CSS | רוחב במחשב שולחני (`100%` כברירת מחדל בנייד) |
| `is_sidebar_hidden` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | תיקון מיקום ערימת הכפתורים האופקית אם סרגל הצד מוסתר במחשב השולחני (רק אם ביצעתם שינוי כדי להסתיר אותו בעצמכם) |
| `rise_animation` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הגדירו זאת ל-`false` כדי לבטל את האנימציה המופעלת ברגע שהדף נטען |
| `highlight_current_view` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הדגשת ה-hash/התצוגה הנוכחית באנימציה חלקה |
| `hide_gradient` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הגדירו זאת ל-`false` כדי להסתיר את הגרדיאנט |

> [!IMPORTANT]  
> המשתנים המתחילים במספר מגדירים את הכפתורים שלכם, פשוט שנו את המספר הזה כדי להוסיף עוד כפתורים (ראו דוגמה למטה).

</details>

<details>

<summary><b>משתני CSS (ראו <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | רדיוס פינות עבור כפתורי ערימת הכפתורים האופקית |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | צבע רקע עבור כפתורי ערימת הכפתורים האופקית |

</details>


#### דוגמה

<details>

<summary>ערימת כפתורים אופקית שמארגנת את עצמה מחדש בהתבסס על חיישני נוכחות</summary>

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

## כפתור

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

הכרטיס הזה רב תכליתי מאוד. ניתן להשתמש בו בתור **מתג**, **מחוון**, **מצב** או כפתור **שם/טקסט**.

> [!TIP]
> ### מה ההבדלים בין כל סוגי הכפתורים?
>
> - **כפתור מתג:** זהו סוג הכפתור המובנה כברירת מחדל. כברירת מחדל הוא מחליף מצב של ישות וצבע הרקע שלו משתנה בהתאם למצב הישות או לצבע האור. ניתן לשנות את הפעולה שלו בקטע **פעולת הקשה על הכרטיס**.
>
> - **כפתור מחוון:** סוג כפתור זה מאפשר לשלוט בישויות עם טווחים הניתנים להתאמה. הוא אידיאלי לעמעום אורות, וצבע המילוי שלו יתאים את עצמו לצבע האור. ניתן גם להשתמש בו כדי להציג ערכים, כגון רמת סוללה.
>   ישויות נתמכות עבור מחוונים:
>   - אור (בהירות)
>   - נגן מדיה (עוצמת קול)
>   - תריס (מיקום)
>   - מאוורר (אחוזים)
>   - מיזוג אקלים (טמפרטורה)
>   - מספר קלט ומספר (ערך)
>   - חיישן סוללה (אחוזים, לקריאה בלבד)
>
>   ניתן גם להשתמש בכל ישות עם מצב מספרי על ידי השבתת מסנן הישות בקטע **הגדרות מחוון**, ואז להגדיר את הערכים `min` ו-`max`. אפשרות זו היא לקריאה בלבד.
>
> - **כפתור מצב:** מושלם להצגת מידע מחיישן או מכל ישות אחרת. כשלוחצים עליו, יוצג פאנל "מידע נוסף" של הישות. צבע הרקע שלו אינו משתנה.
>
> - **כפתור שם/טקסט:** סוג הכפתור היחיד שאינו זקוק לישות. הוא מאפשר להציג טקסט קצר, שם או כותרת. ניתן גם להוסיף לו פעולות. צבע הרקע שלו אינו משתנה.

### אפשרויות הכפתור

<details>

<summary><b>אפשרויות (YAML ותיאורים)</b></summary>

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `entity` | string | **נדרש** | כל ישות | ישות לשליטה |
| `button_type` | string | אופציונלי | `switch` (ברירת מחדל), `slider`, `state` או `name` | ההתנהגות של הכפתור שלך |
| `name` | string | אופציונלי | כל מחרוזת | שם לכפתור שלך, אם לא מוגדר יוצג שם הישות |
| `icon` | string | אופציונלי | כל אייקון `mdi:` | אייקון לכפתור שלך, אם לא מוגדר יוצג אייקון הישות או ה-`entity-picture` |
| `force_icon` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | תן עדיפות לאייקון במקום ל-`entity-picture` |
| `use_accent_color` | boolean | אופציונלי (ברירת מחדל `false`) | **לאורות בלבד.** השתמש בצבע ההדגשה של הערכת הנושא במקום בצבע האור.                         |
| `show_state` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג או הסתר את המצב של ה-`entity` שלך |
| `show_name` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצג או הסתר את השם |
| `show_icon` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצג או הסתר את האייקון |
| `show_last_changed` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג את זמן השינוי האחרון של ה-`entity` שלך |
| `show_last_updated` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג את זמן העדכון האחרון של ה-`entity` שלך |
| `show_attribute` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג מאפיין של ה-`entity` שלך מתחת ל-`name` שלו |
| `attribute` | string | אופציונלי (נדרש אם `show_attribute` מוגדר ל-`true`) | מאפיין מה-`entity` שלך | המאפיין להצגה (למשל `brightness`) |
| `scrolling_effect` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | אפשר לטקסט לגלול כאשר התוכן חורג מגודל המכולה שלו |
| `button_action` | object | אופציונלי | `tap_action`, `double_tap_action` או `hold_action`, ראה למטה | מאפשר לשנות את הפעולות המובנות בברירת מחדל בלחיצה על הכפתור. |
| `tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`more-info` |
| `double_tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בהקשה כפולה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`none` |
| `hold_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה ארוכה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`more-info` |
| `card_layout` | string | אופציונלי | `normal` (ברירת מחדל אם לא בתצוגת מקטע), `large` (ברירת מחדל בתצוגת מקטע), `large-2-rows`, `large-sub-buttons-grid` | פריסת עיצוב הכרטיס, ראה [פריסות הכרטיס](#פריסות-הכרטיס) |
| `rows` | number | אופציונלי | כל מספר | מספר השורות (גובה) (למשל `2`) |
| `sub_button` | object | אופציונלי | ראה [כפתורי משנה](#כפתורי-משנה) | הוסף כפתורים מותאמים אישית המוצמדים לימין |

</details>

<details>

<summary><b>משתני CSS (ראה <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | צבע רקע ראשי לרכיבים נתמכים בכפתור |
| `--bubble-button-border-radius` | `px` | רדיוס גבול עבור הכפתור |
| `--bubble-button-icon-border-radius` | `px` | רדיוס גבול עבור מכולת האייקון של הכפתור |
| `--bubble-button-icon-background-color` | `color` | צבע רקע עבור מכולת האייקון של הכפתור |
| `--bubble-light-white-color` | `color` | החלף את צבע הלבן המובנה של כפתורי/מחווני האור |
| `--bubble-light-color` | `color` | החלף את צבע כפתורי/מחווני האור (אפילו אורות RGB) |
| `--bubble-button-box-shadow` | ראה [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | צל תיבה עבור הכפתור |

</details>

אפשרויות אלו זמינות רק כאשר `button_type` מוגדר ל-`slider`.

<details>

<summary><b>אפשרויות מחוון (YAML ותיאורים)</b></summary>

| שם                  | סוג    | דרישה                     | תיאור                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | אופציונלי                        | הערך המינימלי של המחוון. עבור מחוונים מותאמים אישית.                                                    |
| `max_value`             | number  | אופציונלי                        | הערך המקסימלי של המחוון. עבור מחוונים מותאמים אישית.                                                    |
| `step`                  | number  | אופציונלי                        | ערך הצעד של המחוון.                                                                           |
| `tap_to_slide`          | boolean | אופציונלי (ברירת מחדל `false`)      | אפשר את התנהגות המחוון הקודמת שבה מקישים כדי להפעיל את המחוון, במקום להחזיק אותו.        |
| `relative_slide`        | boolean | אופציונלי (ברירת מחדל `false` )     | עדכן את הערך יחסית לערך ההתחלתי, במקום ביחס לנקודת המגע ההתחלתית.                      |
| `read_only_slider`      | boolean | אופציונלי (ברירת מחדל `false`)      | הפוך את המחוון לקריאה בלבד. מופעל אוטומטית עבור ישויות מסוימות כמו חיישנים.                        |
| `slider_live_update`    | boolean | אופציונלי (ברירת מחדל `false`)      | מצב הישות מתעדכן תוך כדי גרירת המחוון. **תכונה זו אינה מומלצת עבור כל הישויות.**        |
| `slider_fill_orientation` | string | אופציונלי | `left`, `right`, `top` או `bottom` | שנה את כיוון המילוי של המחוון. משמאל לימין כאשר לא מוגדר, ובראי ב[שפות מימין לשמאל](#לוקליזציה) |
| `slider_value_position` | string | אופציונלי | `right`, `left`, `center` או `hidden` | מיקום תצוגת הערך. מימין כאשר לא מוגדר, ומשמאל ב[שפות מימין לשמאל](#לוקליזציה) |
| `invert_slider_value` | boolean | אופציונלי (ברירת מחדל `false`) | הפוך את כיוון המחוון (מילוי של 100% שווה למינימום). לא זמין למחווני צבע. |
| `light_slider_type` | string | אופציונלי | `brightness` (ברירת מחדל), `hue`, `saturation`, `white_temp` | **לאורות בלבד.** בחר את מצב המחוון |
| `cover_slider_type` | string | אופציונלי | `position` (ברירת מחדל), `tilt_position` | **לתריסים בלבד.** בחר את מצב המחוון (מיקום או הטיה) |
| `hue_force_saturation` | boolean | אופציונלי (ברירת מחדל `false`) | **לאורות בלבד (מצב גוון).** אלץ רוויה בעת התאמת הגוון |
| `hue_force_saturation_value` | number | אופציונלי (ברירת מחדל `100`) | **לאורות בלבד (מצב גוון).** ערך הרוויה הכפוי (0 עד 100) |
| `use_accent_color` | boolean | אופציונלי (ברירת מחדל `false`) | **לאורות בלבד (מצב בהירות).** השתמש בצבע ההדגשה של הערכת הנושא במקום בצבע האור |
| `allow_light_slider_to_0` | boolean | אופציונלי (ברירת מחדל `false`)    | **לאורות בלבד.** מאפשר למחוון להגיע ל-0%, מה שמכבה את האור. לא זמין עם `tap_to_slide`. |
| `light_transition`      | boolean | אופציונלי (ברירת מחדל `false`)      | **לאורות בלבד.** הפעל מעברי בהירות חלקים עבור אורות נתמכים.                           |
| `light_transition_time` | number  | אופציונלי (ברירת מחדל `500`)        | **לאורות בלבד.** זמן המעבר באלפיות שנייה. דורש `light_transition: true`.            |

</details>

#### דוגמאות

<details>

<summary>כפתור מחוון ששולט בבהירות של אור</summary>

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

<summary>כפתור עם אפשרויות נוספות</summary>

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

## נגן מדיה

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

הכרטיס הזה מאפשר לך לשלוט בישות נגן מדיה.

### אפשרויות נגן המדיה

<details>

<summary><b>אפשרויות (YAML ותיאורים)</b></summary>

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `entity` | string | **נדרש** | כל נגן מדיה | נגן המדיה לשליטה |
| `name` | string | אופציונלי | כל מחרוזת | שם לנגן המדיה שלך, אם לא מוגדר יוצג שם הישות |
| `icon` | string | אופציונלי | כל אייקון `mdi:` | אייקון לנגן המדיה שלך, אם לא מוגדר יוצג אייקון הישות או ה-`entity-picture` |
| `force_icon` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | תן עדיפות לאייקון במקום ל-`entity-picture` |
| `show_state` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג או הסתר את המצב של ה-`entity` שלך |
| `show_name` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצג או הסתר את השם |
| `show_icon` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצג או הסתר את האייקון |
| `show_last_changed` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג את זמן השינוי האחרון של ה-`entity` שלך |
| `show_last_updated` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג את זמן העדכון האחרון של ה-`entity` שלך |
| `show_attribute` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג מאפיין של ה-`entity` שלך מתחת ל-`name` שלו |
| `attribute` | string | אופציונלי (נדרש אם `show_attribute` מוגדר ל-`true`) | מאפיין מה-`entity` שלך | המאפיין להצגה (למשל `brightness`) |
| `scrolling_effect` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | אפשר לטקסט לגלול כאשר התוכן חורג מגודל המכולה שלו |
| `min_volume` | number | אופציונלי | כל מספר | הערך המינימלי של מחוון עוצמת הקול. |
| `max_volume` | number | אופציונלי | כל מספר | הערך המקסימלי של מחוון עוצמת הקול. |
| `cover_background` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | השתמש בעטיפת מדיה מטושטשת כרקע לכרטיס. |
| `button_action` | object | אופציונלי | `tap_action`, `double_tap_action` או `hold_action`, ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | מאפשר לשנות את הפעולות המובנות בברירת מחדל בלחיצה על הכפתור. |
| `tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`more-info`. |
| `double_tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בהקשה כפולה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`none`. |
| `hold_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה ארוכה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`more-info`. |
| `main_buttons_position` | string | אופציונלי | `default` או `bottom` | הזז את כפתורי הפעולה של העטיפה לתחתית (קבוע) |
| `main_buttons_full_width` | boolean | אופציונלי | `true` או `false` | הפוך את כפתורי הפעולה התחתונים לרוחב מלא (ברירת מחדל: `true` כאשר המיקום הוא `bottom`) |
| `main_buttons_alignment` | string | אופציונלי | `end` (ברירת מחדל), `center`, `start`, `space-between` | יישור כפתורי הפעולה התחתונים כשאינם ברוחב מלא |
| `card_layout` | string | אופציונלי | `normal` (ברירת מחדל אם לא בתצוגת מקטע), `large` (ברירת מחדל בתצוגת מקטע), `large-2-rows`, `large-sub-buttons-grid` | פריסת עיצוב הכרטיס, ראה [פריסות הכרטיס](#פריסות-הכרטיס) |
| `rows` | number | אופציונלי | כל מספר | מספר השורות (גובה) (למשל `2`) |
| `sub_button` | object | אופציונלי | ראה [כפתורי משנה](#כפתורי-משנה) | הוסף כפתורים מותאמים אישית המוצמדים לימין |
| `hide` | object | אופציונלי | ראה למטה | הסתר כפתורים מהכרטיס |

#### אפשרויות הסתרה

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הסתר את כפתור הפעלה/השהיה |
| `volume_button` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הסתר את כפתור עוצמת הקול |
| `previous_button` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הסתר את כפתור הקודם |
| `next_button` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הסתר את כפתור הבא |
| `power_button` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הסתר את כפתור ההפעלה |

</details>

<details>

<summary><b>משתני CSS (ראה <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | צבע רקע ראשי עבור נגן המדיה |
| `--bubble-media-player-border-radius` | `px` | רדיוס גבול עבור נגן המדיה |
| `--bubble-media-player-buttons-border-radius` | `px` | רדיוס גבול עבור כפתורי נגן המדיה |
| `--bubble-media-player-slider-background-color` | `color` | צבע רקע עבור מחוון עוצמת הקול |
| `--bubble-media-player-icon-border-radius` | `px` | רדיוס גבול עבור מכולת האייקון של נגן המדיה |
| `--bubble-media-player-icon-background-color` | `color` | צבע רקע עבור מכולת האייקון של נגן המדיה |
| `--bubble-media-player-box-shadow` | ראה [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | צל תיבה עבור נגן המדיה |

</details>


#### דוגמאות

<details>

<summary>נגן מדיה עם כל האפשרויות</summary>

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

## תריס

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

הכרטיס הזה מאפשר לך לשלוט בישויות `cover` שלך.

### אפשרויות התריס

<details>

<summary><b>אפשרויות (YAML ותיאורים)</b></summary>

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `entity` | string | **נדרש** | כל תריס | תריס לשליטה |
| `name` | string | אופציונלי | כל מחרוזת | שם לתריס שלך, אם לא מוגדר יוצג שם הישות |
| `force_icon` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | תן עדיפות לאייקון במקום ל-`entity-picture` |
| `show_state` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג או הסתר את המצב של ה-`entity` שלך |
| `show_name` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצג או הסתר את השם |
| `show_icon` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצג או הסתר את האייקון |
| `show_last_changed` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג את זמן השינוי האחרון של ה-`entity` שלך |
| `show_last_updated` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג את זמן העדכון האחרון של ה-`entity` שלך |
| `show_attribute` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג מאפיין של ה-`entity` שלך מתחת ל-`name` שלו |
| `attribute` | string | אופציונלי (נדרש אם `show_attribute` מוגדר ל-`true`) | מאפיין מה-`entity` שלך | המאפיין להצגה (למשל `brightness`) |
| `scrolling_effect` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | אפשר לטקסט לגלול כאשר התוכן חורג מגודל המכולה שלו |
| `icon_open` | string | אופציונלי | כל אייקון `mdi:` | אייקון עבור התריס הפתוח שלך, אם לא מוגדר יוצג אייקון ברירת המחדל של תריס פתוח |
| `icon_close` | string | אופציונלי | כל אייקון `mdi:` | אייקון עבור התריס הסגור שלך, אם לא מוגדר יוצג אייקון ברירת המחדל של תריס סגור |
| `icon_up` | string | אופציונלי | כל אייקון `mdi:` | אייקון עבור כפתור פתיחת התריס שלך, אם לא מוגדר יוצג אייקון ברירת המחדל של פתיחת תריס |
| `icon_down` | string | אופציונלי | כל אייקון `mdi:` | אייקון עבור כפתור סגירת התריס שלך, אם לא מוגדר יוצג אייקון ברירת המחדל של סגירת תריס |
| `open_service` | string | אופציונלי | כל שירות או סקריפט | שירות לפתיחת התריס שלך, ברירת המחדל היא `cover.open_cover` |
| `stop_service` | string | אופציונלי | כל שירות או סקריפט | שירות לעצירת התריס שלך, ברירת המחדל היא `cover.stop_cover` |
| `close_service` | string | אופציונלי | כל שירות או סקריפט | שירות לסגירת התריס שלך, ברירת המחדל היא `cover.close_cover` |
| `tilt_buttons` | string | אופציונלי | `top` (ברירת מחדל), `bottom`, `left`, `right`, `hidden` | מיקום כפתורי בקרת ההטיה (מוצג רק אם התריס תומך בהטיה) |
| `open_tilt_service` | string | אופציונלי | כל שירות או סקריפט | שירות לפתיחת ההטיה, ברירת המחדל היא `cover.open_cover_tilt` |

| `close_tilt_service` | string | אופציונלי | כל שירות או סקריפט | שירות לסגירת ההטיה, ברירת המחדל היא `cover.close_cover_tilt` |
| `button_action` | object | אופציונלי | `tap_action`, `double_tap_action` או `hold_action`, ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | מאפשר לשנות את הפעולות המובנות בברירת מחדל בלחיצה על הכפתור. |
| `tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`more-info`. |
| `double_tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בהקשה כפולה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`none`. |
| `hold_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה ארוכה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`more-info`. |
| `main_buttons_position` | string | אופציונלי | `default` או `bottom` | הזז את פקדי המדיה לתחתית (קבוע) |
| `main_buttons_full_width` | boolean | אופציונלי | `true` או `false` | הפוך את הפקדים התחתונים לרוחב מלא (ברירת מחדל: `true` כאשר המיקום הוא `bottom`) |
| `main_buttons_alignment` | string | אופציונלי | `end` (ברירת מחדל), `center`, `start`, `space-between` | יישור הפקדים התחתונים כשאינם ברוחב מלא |
| `card_layout` | string | אופציונלי | `normal` (ברירת מחדל אם לא בתצוגת מקטע), `large` (ברירת מחדל בתצוגת מקטע), `large-2-rows`, `large-sub-buttons-grid` | פריסת עיצוב הכרטיס, ראה [פריסות הכרטיס](#פריסות-הכרטיס) |
| `rows` | number | אופציונלי | כל מספר | מספר השורות (גובה) (למשל `2`) |
| `sub_button` | object | אופציונלי | ראה [כפתורי משנה](#כפתורי-משנה) | הוסף כפתורים מותאמים אישית המוצמדים לימין |

</details>

<details>

<summary><b>משתני CSS (ראה <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | צבע רקע ראשי לרכיבים נתמכים בכרטיס התריס |
| `--bubble-cover-border-radius` | `px` | רדיוס גבול עבור כרטיס התריס |
| `--bubble-cover-icon-border-radius` | `px` | רדיוס גבול עבור מכולת האייקון של כרטיס התריס |
| `--bubble-cover-icon-background-color` | `color` | צבע רקע עבור מכולת האייקון של כרטיס התריס |
| `--bubble-cover-box-shadow` | ראה [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | צל תיבה עבור כרטיס התריס |
| `--bubble-button-box-shadow` | ראה [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | צל תיבה עבור כפתורים בכרטיס התריס |

</details>


#### דוגמה

<details>

<summary>כרטיס ששולט בתריס גלילה</summary>

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

## בחירה

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

הכרטיס הזה מאפשר לך להוסיף תפריט נפתח עבור ישויות `input_select` / `select` שלך. הכרטיס הזה תומך גם בכפתורי משנה ובכל התכונות הנפוצות של Bubble Card.

> [!TIP]
> ניתן גם להוסיף כפתורי משנה מסוג בחירה אם תרצה, תכונה זו זמינה בכל הכרטיסים התומכים בכפתורי משנה.

### אפשרויות הבחירה

<details>

<summary><b>אפשרויות (YAML ותיאורים)</b></summary>

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `entity` | string | **נדרש** | כל ישות | ישות לשליטה |
| `name` | string | אופציונלי | כל מחרוזת | שם לבחירה שלך, אם לא מוגדר יוצג שם הישות |
| `icon` | string | אופציונלי | כל אייקון `mdi:` | אייקון לבחירה שלך, אם לא מוגדר יוצג אייקון הישות או ה-`entity-picture` |
| `force_icon` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | תן עדיפות לאייקון במקום ל-`entity-picture` |
| `show_state` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג או הסתר את המצב של ה-`entity` שלך |
| `show_name` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצג או הסתר את השם |
| `show_icon` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצג או הסתר את האייקון |
| `show_last_changed` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג את זמן השינוי האחרון של ה-`entity` שלך |
| `show_last_updated` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג את זמן העדכון האחרון של ה-`entity` שלך |
| `show_attribute` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצג מאפיין של ה-`entity` שלך מתחת ל-`name` שלו |
| `attribute` | string | אופציונלי (נדרש אם `show_attribute` מוגדר ל-`true`) | מאפיין מה-`entity` שלך | המאפיין להצגה (למשל `brightness`) |
| `scrolling_effect` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | אפשר לטקסט לגלול כאשר התוכן חורג מגודל המכולה שלו |
| `tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`more-info`. |
| `double_tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בהקשה כפולה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`none`. |
| `hold_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה ארוכה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`more-info`. |
| `card_layout` | string | אופציונלי | `normal` (ברירת מחדל אם לא בתצוגת מקטע), `large` (ברירת מחדל בתצוגת מקטע), `large-2-rows`, `large-sub-buttons-grid` | פריסת עיצוב הכרטיס, ראה [פריסות הכרטיס](#פריסות-הכרטיס) |
| `rows` | number | אופציונלי | כל מספר | מספר השורות (גובה) (למשל `2`) |
| `sub_button` | object | אופציונלי | ראה [כפתורי משנה](#כפתורי-משנה) | הוסף כפתורים מותאמים אישית המוצמדים לימין |

</details>

<details>

<summary><b>משתני CSS (ראה <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | צבע רקע ראשי לרכיבים נתמכים בכרטיס הבחירה |
| `--bubble-select-background-color` | `color` | צבע רקע עבור כרטיס הבחירה |
| `--bubble-select-list-border-radius` | `px` | רדיוס גבול עבור התפריט הנפתח בכרטיס |
| `--bubble-select-list-item-accent-color` | `color` | צבע הדגשה עבור הפריט הנבחר |
| `--bubble-select-list-background-color` | `color` | צבע רקע עבור התפריט הנפתח בכרטיס |
| `--bubble-select-list-width` | `px` | רוחב התפריט הנפתח בכרטיס |
| `--bubble-select-arrow-background-color` | `color` | צבע רקע עבור חץ התפריט הנפתח |
| `--bubble-select-button-border-radius` | `px` | רדיוס גבול עבור כפתור הבחירה |
| `--bubble-select-border-radius` | `px` | רדיוס גבול עבור כרטיס הבחירה |
| `--bubble-select-icon-border-radius` | `px` | רדיוס גבול עבור מכולת האייקון של כרטיס הבחירה |
| `--bubble-select-icon-background-color` | `color` | צבע רקע עבור מכולת האייקון של כרטיס הבחירה |
| `--bubble-select-box-shadow` | ראה [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | צל תיבה עבור כרטיס הבחירה |

</details>


#### דוגמאות

<details>

<summary>כרטיס בחירה עם רשימת תרחישים</summary>

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

## מיזוג אקלים

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

הכרטיס הזה מאפשר לך לשלוט בישויות `climate` שלך.

> [!TIP]
> תפריט בחירת המצב הוא [כפתור משנה](#כפתורי-משנה) שמתווסף אוטומטית ביצירת הכרטיס. ניתן לשנות או להסיר אותו כרצונך.

### אפשרויות מיזוג האקלים

<details>

<summary><b>אפשרויות (YAML ותיאורים)</b></summary>

| שם                     | סוג    | דרישה                         | אפשרויות נתמכות                                  | תיאור                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **נדרש**                        | ישות מיזוג אקלים                                   | הישות לשליטה (למשל, `climate.living_room`).                                                            |
| `name`                  | string  | אופציונלי                            | כל מחרוזת                                       | שם מותאם אישית לכרטיס. אם לא מוגדר, יוצג שם הישות.                                    |
| `icon`                  | string  | אופציונלי                            | כל אייקון `mdi:`                                  | אייקון מותאם אישית לכרטיס. אם לא מוגדר, ייעשה שימוש באייקון הישות או ב-`entity-picture`.                   |
| `force_icon`            | boolean | אופציונלי                            | `true` או `false` (ברירת מחדל)                     | נותן עדיפות לאייקון על פני ה-`entity-picture`.                                                           |
| `show_state`            | boolean | אופציונלי                            | `true` או `false` (ברירת מחדל)                     | הצג או הסתר את המצב הנוכחי של ה-`entity`.                                                                 |
| `show_name`             | boolean | אופציונלי                            | `true` (ברירת מחדל) או `false`                     | הצג או הסתר את שם הישות.                                                                            |
| `show_icon`             | boolean | אופציונלי                            | `true` (ברירת מחדל) או `false`                     | הצג או הסתר את האייקון.                                                                          |
| `hide_target_temp_low`  | boolean | אופציונלי (רק עבור ישויות התומכות ב-`target_temp_low`) | `true` או `false` (ברירת מחדל) | מסתיר את בקרת הטמפרטורה הנמוכה, אם נתמכת על ידי ה-`entity`.                                          |
| `hide_target_temp_high` | boolean | אופציונלי (רק עבור ישויות התומכות ב-`target_temp_high`)| `true` או `false` (ברירת מחדל) | מסתיר את בקרת הטמפרטורה הגבוהה, אם נתמכת על ידי ה-`entity`.                                         |
| `state_color`           | boolean | אופציונלי                            | `true` או `false` (ברירת מחדל)                     | מחיל צבע רקע קבוע כאשר ישות מיזוג האקלים דולקת.                                                              |
| `step` | number | אופציונלי | כל מספר | צעד הטמפרטורה. |
| `min_temp` | number | אופציונלי | כל מספר | הטמפרטורה המינימלית. |
| `max_temp` | number | אופציונלי | כל מספר | הטמפרטורה המקסימלית. |
| `button_action` | object | אופציונלי | `tap_action`, `double_tap_action` או `hold_action`, ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | מאפשר לשנות את הפעולות המובנות בברירת מחדל בלחיצה על הכפתור. |
| `tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`more-info`. |
| `double_tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בהקשה כפולה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`none`. |
| `hold_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה ארוכה על האייקון, אם לא מוגדר, ייעשה שימוש ב-`more-info`. |                              |
| `main_buttons_position` | string | אופציונלי | `default` או `bottom` | הזז את כפתורי הפעולה של מיזוג האקלים לתחתית (קבוע) |
| `main_buttons_full_width` | boolean | אופציונלי | `true` או `false` | הפוך את כפתורי הפעולה התחתונים לרוחב מלא (ברירת מחדל: `true` כאשר המיקום הוא `bottom`) |
| `main_buttons_alignment` | string | אופציונלי | `end` (ברירת מחדל), `center`, `start`, `space-between` | יישור כפתורי הפעולה התחתונים כשאינם ברוחב מלא |
| `card_layout` | string | אופציונלי | `normal` (ברירת מחדל אם לא בתצוגת מקטע), `large` (ברירת מחדל בתצוגת מקטע), `large-2-rows`, `large-sub-buttons-grid` | פריסת עיצוב הכרטיס, ראה [פריסות הכרטיס](#פריסות-הכרטיס) |
| `rows` | number | אופציונלי | כל מספר | מספר השורות (גובה) (למשל `2`) |
| `sub_button`            | object  | אופציונלי                            | ראה [כפתורי משנה](#כפתורי-משנה)                | מוסיף כפתורים מותאמים אישית המוצמדים לימין. שימושי לתפריט בחירת מצב מיזוג אקלים.                                  |

</details>

<details>

<summary><b>משתני CSS (ראה <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | צבע רקע ראשי לרכיבים נתמכים בכרטיס מיזוג האקלים |
| `--bubble-climate-border-radius` | `px` | רדיוס גבול עבור רכיבים נתמכים בכרטיס מיזוג האקלים |
| `--bubble-climate-button-background-color` | `color` | צבע רקע עבור כפתורי כרטיס מיזוג האקלים |
| `--bubble-climate-icon-border-radius` | `px` | רדיוס גבול עבור מכולת האייקון של כרטיס מיזוג האקלים |
| `--bubble-state-climate-fan-only-color` | `color` | צבע שכבת-על עבור מצב אוורור בלבד |
| `--bubble-state-climate-dry-color` | `color` | צבע שכבת-על עבור מצב ייבוש |
| `--bubble-state-climate-cool-color` | `color` | צבע שכבת-על עבור מצב קירור |
| `--bubble-state-climate-heat-color` | `color` | צבע שכבת-על עבור מצב חימום |
| `--bubble-state-climate-auto-color` | `color` | צבע שכבת-על עבור מצב אוטומטי |
| `--bubble-state-climate-heat-cool-color` | `color` | צבע שכבת-על עבור מצב חימום-קירור |
| `--bubble-climate-accent-color` | `color` | צבע הדגשה עבור כרטיס מיזוג האקלים |
| `--bubble-climate-box-shadow` | ראה [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | צל תיבה עבור מכולת מיזוג האקלים. |

</details>


#### דוגמאות

<details>

<summary>כרטיס מיזוג אקלים עם תפריט נפתח של מצבי HVAC</summary>

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

## לוח שנה

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

הכרטיס הזה מאפשר לך להציג את ישויות לוח השנה שלך. התוכן שלו ניתן לגלילה, כך שתוכל לעיין בקלות באירועים הקרובים.

### אפשרויות לוח השנה

<details>

<summary><b>אפשרויות (YAML ותיאורים)</b></summary>

| שם                | סוג    | דרישה  | אפשרויות נתמכות                               | תיאור                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| `days`              | number  | אופציונלי     | כל מספר (מינימום: 1)                        | מספר ימי לוח השנה שעבורם יאוחזרו אירועים, מעכשיו ועד סוף היום ה-N (ברירת מחדל: 7) |
| `entities`          | object  | **נדרש** | אובייקט ישות לוח שנה (ראה למטה)            | הישות לשליטה (למשל, `calendar.main_calendar`).                                 |
| `entities.entity`   | string  | **נדרש** | ישות לוח שנה                               | ישות לוח השנה להצגה                                                          |
| `entities.color`    | string  | אופציונלי     | צבע                                         | צבע מותאם אישית לתגית לוח השנה. אם לא מוגדר, ייבחר צבע אוטומטי |
| `days`              | number  | אופציונלי     | כל מספר (מינימום: 1)                         | מספר ימי לוח השנה שעבורם יאוחזרו אירועים, מעכשיו ועד סוף היום ה-N (ברירת מחדל: 7) |
| `limit`             | number  | אופציונלי     | מספר                                        | כמות האירועים שיוצגו בכרטיס                                  |
| `show_end`          | boolean | אופציונלי     | `true` או `false` (ברירת מחדל)                     | הצג או הסתר את שעת הסיום של האירועים                                                    |
| `show_progress`     | boolean | אופציונלי     | `true` (ברירת מחדל) או `false`                     | הצג או הסתר את סרגל ההתקדמות של האירוע                                                     |
| `show_started_events`| boolean | אופציונלי     | `true` (ברירת מחדל) או `false`                     | הצג או הסתר אירועים המתקיימים כעת. אירועים רב-יומיים נבחנים יום אחר יום, ולכן רק היום המתרחש מוסתר והימים הבאים נשארים גלויים |
| `scrolling_effect`  | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | אפשר לטקסט לגלול כאשר התוכן חורג מגודל המכולה שלו |
| `event_action` | object | אופציונלי | `tap_action`, `double_tap_action` או `hold_action`, ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | מאפשר להוסיף פעולות בלחיצה על אירוע. |
| `tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה על יום, אם לא מוגדר, ייעשה שימוש ב-`none`. |
| `double_tap_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בהקשה כפולה על יום, אם לא מוגדר, ייעשה שימוש ב-`none`. |
| `hold_action` | object | אופציונלי | ראה [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדר את סוג הפעולה בלחיצה ארוכה על יום, אם לא מוגדר, ייעשה שימוש ב-`none`. |
| `card_layout` | string | אופציונלי | `normal` (ברירת מחדל אם לא בתצוגת מקטע), `large` (ברירת מחדל בתצוגת מקטע), `large-2-rows`, `large-sub-buttons-grid` | פריסת עיצוב הכרטיס, ראה [פריסות הכרטיס](#פריסות-הכרטיס) |
| `rows` | number | אופציונלי | כל מספר | מספר השורות (גובה) (למשל `2`) |
| `sub_button` | object | אופציונלי | ראה [כפתורי משנה](#כפתורי-משנה) | הוסף כפתורים מותאמים אישית המוצמדים לימין |

</details>

<details>

<summary><b>משתני CSS (ראה <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה                                  | ערך צפוי | תיאור                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | צבע רקע ראשי לרכיבים נתמכים בכרטיס לוח השנה  |
| `--bubble-calendar-border-radius`         | `px`           | רדיוס גבול עבור רכיבים נתמכים בכרטיס לוח השנה |
| `--bubble-calendar-height`                | `px`           | גובה עבור כרטיס לוח השנה                                        |

</details>

#### דוגמאות

<details>

<summary>כרטיס לוח שנה עם כמות מוגבלת של אירועים</summary>

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

<summary>כרטיס לוח שנה עם שעת סיום וסרגל התקדמות</summary>

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


## מפריד

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

כרטיס זה הוא מפריד פשוט לחלוקת החלון הקופץ שלכם לקטגוריות / קטעים. למשל: תאורה, מכשירים, תריסים, הגדרות, אוטומציות...

### אפשרויות המפריד

<details>

<summary><b>אפשרויות (YAML + הסברים)</b></summary>

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `name` | string | אופציונלי אך מומלץ | כל מחרוזת | שם עבור המפריד שלכם |
| `icon` | string | אופציונלי אך מומלץ | כל אייקון `mdi:` | אייקון עבור המפריד שלכם |
| `card_layout` | string | אופציונלי | `normal` (ברירת המחדל כשלא בתצוגת מקטעים), `large` (ברירת המחדל בתצוגת מקטעים), `large-2-rows`, `large-sub-buttons-grid` | פריסת העיצוב של הכרטיס, ראו [פריסות הכרטיס](#פריסות-הכרטיס) |
| `rows` | number | אופציונלי | כל מספר | מספר השורות (גובה) (למשל `2`) |
| `sub_button` | object | אופציונלי | ראו [כפתורי משנה](#כפתורי-משנה) | הוספת כפתורים מותאמים אישית המקובעים לימין |

</details>

<details>

<summary><b>משתני CSS (ראו <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | צבע רקע עבור הקו במפריד |

</details>

#### דוגמה

<details>

<summary>מפריד/קו מפריד עבור קטע "תריסים"</summary>

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

## עמודה ריקה

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

כרטיס זה נועד למלא עמודה ריקה. הוא שימושי אם יש לכם `horizontal-stack` בחלון הקופץ שלכם עם כרטיס יחיד בלבד. הביטו בפינה הימנית התחתונה של צילום המסך הזה כדי (לא) לראות אותו.

### אפשרויות העמודה הריקה

לכרטיס זה אין אפשרויות והוא אינו תומך ב[עיצוב](#עיצוב), אם כי הוא כן תומך באפשרויות פריסה עבור מקטעי HA.

#### דוגמה

<details>

<summary>עמודה ריקה בערימה אופקית</summary>

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

## כפתורי משנה בלבד

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

כרטיס זה מיועד לכפתורי משנה בלבד. הוא מושלם לתפריטים, פעולות מהירות, שבבי מידע, או כותרת תחתונה קבועה בתחתית העמוד.

> [!IMPORTANT]  
> כרטיס זה משתמש בסכימת כפתורי המשנה החדשה. השתמשו ב-`sub_button.bottom` כדי להגדיר את הכפתורים שלכם. הקטע `sub_button.main` מתעלם.

### אפשרויות כפתורי משנה בלבד

<details>

<summary><b>אפשרויות (YAML + הסברים)</b></summary>

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **חובה** | ראו [כפתורי משנה](#כפתורי-משנה) | הגדירו את כפתורי המשנה שלכם באמצעות הקטע `bottom` |
| `hide_main_background` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הסרת רקע הכרטיס |
| `footer_mode` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | קיבוע הכרטיס בתחתית העמוד |
| `footer_full_width` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הפיכת הכותרת התחתונה לרוחב מלא (100%) |
| `footer_width` | number | אופציונלי | כל מספר | רוחב הכותרת התחתונה בפיקסלים כאשר `footer_full_width` מוגדר ל-`false` |
| `footer_bottom_offset` | number | אופציונלי | כל מספר | מרחק מתחתית העמוד בפיקסלים (ברירת מחדל: `16`) |
| `card_layout` | string | אופציונלי | `normal` (ברירת המחדל כשלא בתצוגת מקטעים), `large` (ברירת המחדל בתצוגת מקטעים), `large-2-rows`, `large-sub-buttons-grid` | פריסת העיצוב של הכרטיס, ראו [פריסות הכרטיס](#פריסות-הכרטיס) |
| `rows` | number | אופציונלי | כל מספר | מספר השורות (גובה) (למשל `2`) |

</details>

<details>

<summary><b>משתני CSS (ראו <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | רוחב הכותרת התחתונה כאשר `footer_full_width` מוגדר ל-`false` |
| `--bubble-footer-bottom` | `px` | מרחק הכותרת התחתונה מהתחתית |
| `--bubble-footer-box-shadow` | ראו [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | צל תיבה עבור מיכל הכותרת התחתונה |

</details>

#### דוגמאות

<details>

<summary>שבבים (כמו בצילום המסך)</summary>

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

<summary>תפריט כותרת תחתונה קבוע</summary>

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

## כפתורי משנה

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

בכל כרטיס שתומך באפשרות זו, ניתן להוסיף כפתורי משנה כדי להתאים את הכרטיסים שלכם עוד יותר. תוכלו, לדוגמה, ליצור כפתור שיכול לשלוט בשואב אבק, בכרטיס מזג אוויר, או כמעט בכל דבר שתעלה בדעתכם. כפתורי משנה אלו תומכים בפעולות ההקשה וברוב אפשרויות הכפתור.

כפתורי משנה תומכים כעת בשלושה סוגים: **ברירת מחדל (כפתור)**, **מחוון**, ו**רשימה נפתחת / בחירה**. ניתן לשלב סוגים באותו כרטיס, למקם כפתורי משנה למעלה או למטה, ולארגן אותם בקבוצות לפריסות מתקדמות יותר.

#### מיקום וקבוצות של כפתורי משנה

<details>

<summary><b>מבנה כפתורי המשנה (main / bottom + קבוצות)</b></summary>

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

**הערות:**
- `main` ו-`bottom` הם שני קטעים עצמאיים. כפתורי משנה תחתונים מקובעים לתחתית הכרטיס.
- `main_layout` ו-`bottom_layout` מקבלים `inline` (ברירת מחדל) או `rows` כדי לערום קבוצות אנכית.
- קבוצות הן אובייקטים עם מערך `group` ואפשרות `buttons_layout` אופציונלית (`inline` או `column`).
- `justify_content` זמין **עבור קבוצות תחתונות בלבד** (`start`, `center`, `end`, `fill`).
- כאשר קיימים כפתורי משנה תחתונים, פריסת הכרטיס עוברת אוטומטית ל-`large` אלא אם הגדרתם במפורש פריסה אחרת.
- מערכי `sub_button` הישנים עדיין נתמכים ומטופלים כקטע `main`.

</details>

### אפשרויות כפתורי המשנה

<details>

<summary><b>אפשרויות (YAML + תיאור)</b></summary>

| שם | סוג | דרישה | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- | --- |
| `entity` | string | אופציונלי | כל ישות | ישות לשליטה |
| `name` | string | אופציונלי | כל מחרוזת | שם עבור כפתור המשנה שלכם, אם לא מוגדר יוצג שם הישות |
| `icon` | string | אופציונלי | כל אייקון `mdi:` | אייקון עבור כפתור המשנה שלכם, אם לא מוגדר יוצג אייקון הישות או תמונת הישות |
| `force_icon` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הכרחת האייקון גם כאשר תמונת ישות זמינה |
| `sub_button_type` | string | אופציונלי | `default`, `slider` או `select` | בחרו את סוג כפתור המשנה |
| `show_background` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצגת רקע עבור כפתור המשנה שלכם, צבעו ישתנה בהתאם למצב הישות שלכם |
| `state_background` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | שימוש בצבע המצב כאשר הישות היא `on` |
| `light_background` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | שימוש בצבע התאורה עבור הרקע כאשר זמין |
| `show_state` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצגה או הסתרה של מצב ה-`entity` שלכם |
| `show_name` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצגה או הסתרה של השם |
| `show_icon` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצגה או הסתרה של האייקון |
| `show_last_changed` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצגת זמן השינוי האחרון של ה-`entity` שלכם |
| `show_last_updated` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצגת זמן העדכון האחרון של ה-`entity` שלכם |
| `show_attribute` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הצגת מאפיין של ה-`entity` שלכם מתחת ל-`name` שלו |
| `attribute` | string | אופציונלי (חובה אם `show_attribute` מוגדר ל-`true`) | מאפיין מה-`entity` שלכם | המאפיין להצגה (למשל `brightness`) |
| `select_attribute` | string | אופציונלי | רשימת מאפיינים מה-`entity` שלכם (ראו אפשרויות נתמכות למעלה) | רשימת מאפיינים זו תפתח רשימה נפתחת בלחיצה (למשל `effect_list`) |
| `show_arrow` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | הצגה או הסתרה של חץ הרשימה הנפתחת עבור כפתורי משנה מסוג בחירה |
| `scrolling_effect` | boolean | אופציונלי | `true` (ברירת מחדל) או `false` | אפשור גלילת טקסט כאשר התוכן חורג מגודל המיכל |
| `tap_action` | object | אופציונלי | ראו [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדרת סוג הפעולה בלחיצה על כפתור המשנה, אם לא מוגדר, ייעשה שימוש ב-`more-info`. |
| `double_tap_action` | object | אופציונלי | ראו [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדרת סוג הפעולה בלחיצה כפולה על כפתור המשנה, אם לא מוגדר, ייעשה שימוש ב-`none`. |
| `hold_action` | object | אופציונלי | ראו [פעולות](#פעולות-הקשה-הקשה-כפולה-ולחיצה-ארוכה) | הגדרת סוג הפעולה בלחיצה ארוכה על כפתור המשנה, אם לא מוגדר, ייעשה שימוש ב-`more-info`. |
| `fill_width` | boolean | אופציונלי | `true` או `false` | מילוי הרוחב הזמין (ברירת מחדל: `false` עבור main, `true` עבור bottom) |
| `width` | number or string | אופציונלי | כל מספר או ערך אורך CSS | רוחב מותאם אישית (`px` עבור קטע main, `%` עבור קטע bottom כברירת מחדל) |
| `custom_height` | number | אופציונלי | כל מספר | גובה מותאם אישית בפיקסלים |
| `content_layout` | string | אופציונלי | `icon-left` (ברירת מחדל), `icon-top`, `icon-bottom`, `icon-right` | מיקום האייקון בתוך כפתור המשנה |
| `always_visible` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | **מחוון בלבד.** הצגת המחוון תמיד במקום פתיחתו בלחיצה |
| `show_button_info` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | **מחוון בלבד.** הצגת אייקון/שם/מצב כאשר `always_visible` מופעל |
| `visibility` | object or list | אופציונלי | ראו [תנאים](#תנאים) | הצגה או הסתרה של כפתור המשנה בהתאם לתנאים |
| `hide_when_parent_unavailable` | boolean | אופציונלי | `true` או `false` (ברירת מחדל) | הסתרת כפתור המשנה אם ישות הכרטיס ההורה אינה זמינה |
| `css_class` | string | אופציונלי | כל מחרוזת | מחלקת CSS נוספת על כפתור המשנה, כדי למקד אותו ב[עיצוב](#עיצוב) שלכם ללא תלות בשמו (לדוגמה `My value` נותן `.my-value`) |

</details>

<details>

<summary><b>אפשרויות כפתור משנה מסוג מחוון (זהות למחווני כפתור)</b></summary>

<br>

כפתורי משנה מסוג מחוון תומכים באותן אפשרויות מחוון כמו מחווני כפתור, כולל:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`.

</details>

<details>

<summary><b>משתני CSS (ראו <a href="#עיצוב">עיצוב</a>)</b></summary>

| משתנה | ערך צפוי | תיאור |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | רדיוס פינות עבור כפתורי המשנה |
| `--bubble-sub-button-background-color` | `color` | צבע רקע עבור כפתורי המשנה |
| `--bubble-sub-button-outline` | `box-shadow` | מתאר שנוסף לכפתור משנה או למחוון, רק כאשר אותו רכיב נצבע באותו צבע ככרטיס שמאחוריו, מה שהיה הופך אותו לבלתי נראה (הגדירו אותו כ-`none` כדי להסיר אותו) |
| `--bubble-sub-slider-border-radius` | `px` | רדיוס פינות עבור כפתורי משנה מסוג מחוון |
| `--bubble-sub-slider-background-color` | `color` | צבע רקע עבור כפתורי משנה מסוג מחוון |
| `--bubble-sub-slider-height` | `px` | גובה עבור כפתורי משנה מסוג מחוון מוצג תמידית |
| `--bubble-sub-slider-outline` | `box-shadow` | מתאר של כפתורי המשנה מסוג מחוון בלבד, נסוג ל-`--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | צבע טקסט על רקעי כפתורי משנה בהירים |

</details>

#### דוגמאות

<details>

<summary>כפתור עם כמה כפתורי משנה ליצירת כרטיס שואב אבק (כמו בצילום המסך)</summary>

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

<summary>מחוון כפתור עם כפתור משנה המציג את הבהירות ואחד שמחליף את מצב התאורה (כמו בצילום המסך)</summary>

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

<summary>כפתור המציג את הטמפרטורה הפנימית והחיצונית עם מזג האוויר להיום ולמחר (כולל צילום מסך)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> למרבה הביש עבורי מעונן כל הזמן, אבל כל האייקונים משתנים בהתאם למזג האוויר.

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

## פריסות הכרטיס

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card תומך באופן מלא בתצוגת המקטעים של Home Assistant, ותוכלו לשנות את פריסת הכרטיס כדי להגדיל אותו וגם לשנות את מספר העמודות או השורות שהכרטיס צריך לתפוס בתצוגת המקטעים שלכם (רק בכרטיסים שתומכים באפשרות זו). פריסות אלו נתמכות גם בכל סוגי התצוגה האחרים.

<details>

<summary><b>פריסות כרטיס זמינות</b></summary>

| פריסה | תיאור |
| --- | --- |
| `normal` | הפריסה הרגילה (לא מותאמת לתצוגת המקטעים) |
| `large` | פריסה גדולה יותר שתשתנה בהתאם לשורות הנבחרות בתצוגת המקטעים (מותאמת לתצוגת המקטעים) |
| `large-2-rows` | פריסה גדולה יותר עם 2 שורות של כפתורי משנה שתשתנה בהתאם לשורות הנבחרות בתצוגת המקטעים (מותאמת לתצוגת המקטעים) |
| `large-sub-buttons-grid` | פריסה זו תציג את כפתורי המשנה ברשת, יש להגדיר את `rows` לפחות ל-`2`.

</details>

#### דוגמאות

<details>

<summary>כפתור גדול המציג נתוני אנרגיה עם 2 שורות של כפתורי משנה (כולל צילום מסך)</summary>

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

<summary>כפתור גדול עם מספר שורות ו-12 כפתורי משנה</summary>

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

## תנאים

חלק מהאפשרויות מונעות על ידי תנאים, שנכתבים בדיוק כמו אלה של [הכרטיס המותנה](https://www.home-assistant.io/dashboards/conditional/) של Home Assistant:

- `visibility` על [כפתור משנה](#כפתורי-משנה), כדי להציג או להסתיר אותו
- `trigger` על [חלון קופץ](#חלון-קופץ), כדי לפתוח אותו כאשר התנאים מתקיימים
- `checkConditionsMet(conditions, hass)` בתוך [התבניות](#תבניות) שלכם, כאשר אתם צריכים את התשובה בקוד שלכם

כל סוגי התנאים של Home Assistant מוערכים: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template`, וכן הקבוצות `and`, `or` ו-`not`. גם התנאים של בונה התנאים של Home Assistant עובדים, אלה הנקראים על שם התחום שלהם כמו `sun.is_up`, `light.is_on`, `zone.in_zone` או `temperature.is_value`, עם ההגדרות `target`, `options`, `behavior` ו-`for` שלהם.

<details>

<summary><b>דוגמה</b></summary>

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
> התנאים מוערכים בדפדפן שלכם, ולכן המעטים מביניהם שזקוקים לשרת Home Assistant אינם יכולים להיות מדויקים: הזריחה והשקיעה נקראות מהישות `sun.sun` במקום להיות מחושבות מחדש, ומשך `for` נמדד מהשינוי האחרון במצב, ללא היסטוריית ה-recorder.
>
> `view_columns` מתקבל אך תמיד עובר, מכיוון ש-Bubble Card לעולם אינה זו שמסדרת את העמודות של התצוגה שלכם. סוג תנאי ש-Bubble Card אינה מכירה מדווח על עצמו פעם אחת בקונסולת הדפדפן שלכם במקום להיכשל בשקט, כך שתוכלו להבחין בין שגיאת הקלדה לבין יכולת חסרה.

<br>

---

<br>

## פעולות הקשה, הקשה כפולה ולחיצה ארוכה

תוכלו גם להשתמש בפעולות ההקשה, פעולות ההקשה הכפולה ופעולות הלחיצה הארוכה של ברירת המחדל של Home Assistant בכרטיסים שתומכים באפשרות זו. לדוגמה, זה מאפשר להציג את חלון "מידע נוסף" בלחיצה ארוכה על אייקון כפתור, או להריץ שירות כאשר נלחץ כפתור משנה.

**הערה: כאשר מוגדר `double_tap_action`, ל-`tap_action` הרגיל תהיה השהייה של 200 מילישניות כדי לאפשר זיהוי
של הקשה כפולה. אם השהייה זו אינה רצויה, הגדירו את `double_tap_action` ל-`none` כדי לבטל את הטיפול בהקשה כפולה.**

### אפשרויות הפעולה

<details>

<summary><b>אפשרויות (YAML + תיאור)</b></summary>

| שם | סוג | אפשרויות נתמכות | תיאור |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | פעולה לביצוע |
| `target` | object |  | פועל רק עם `call-service`. פועל לפי [תחביר home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | כל נתיב בדשבורד שלכם | נתיב לניווט אליו (למשל `'#kitchen'` לפתיחת חלון קופץ) כאשר הפעולה מוגדרת כ-navigate |
| `url_path` | string | כל קישור | כתובת URL לפתיחה בלחיצה (למשל `https://www.google.com`) כאשר הפעולה היא `url` |
| `service` | string | כל שירות | שירות להפעלה (למשל `media_player.media_play_pause`) כאשר `action` מוגדר כ-`call-service` |
| `data` or `service_data` | object | כל נתוני שירות | נתוני שירות לכלול (למשל `entity_id: media_player.kitchen`) כאשר `action` מוגדר כ-`call-service` |
| `confirmation` | object | ראו [אישור](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | הצגת חלון קופץ לאישור (לא של Bubble Card), דורס את אובייקט ברירת המחדל של `confirmation` |

</details>

#### דוגמה

<details>

<summary>כפתור לפתיחת חלון קופץ</summary>

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

## עיצוב

אפשר להוסיף עיצובים מותאמים אישית כדי לשנות את ה-CSS של כל הכרטיסים **בלי להשתמש ב-card-mod** בארבע דרכים:

- בעורך, עברו לכרטיס שברצונכם לשנות, ואז נווטו אל _Styling options > Custom styles & JS templates_, והוסיפו את העיצובים המותאמים אישית שלכם (בדקו את הטיפים והדוגמאות למטה).
- בעורך (או ב-[YAML](#תצורה)), עברו לכרטיס שברצונכם לשנות, ואז נווטו אל _Modules_, ואז צרו מודול חדש (הוא יהיה זמין לכל הכרטיסים), או עברו אל **Module Store** כדי להתקין כל מודול זמין (פרטים נוספים על מודולים ניתן למצוא [למטה](#מודולים)).
- בקובץ [ערכת נושא (theme)](https://www.home-assistant.io/integrations/frontend/#defining-themes) על ידי הוספת משתני CSS ב-YAML (אלה זמינים בתיעוד של כל כרטיס למעלה). זה מאפשר שינויים גלובליים.

  <details>
  
  <summary>דוגמה</a></summary>
  
  <br>

  אל תעתיקו את השורה `Bubble:`, זהו שם ערכת הנושא שאתם משתמשים בה. עליכם גם להסיר את `--` מהמשתנים.

  עליכם להריץ את הפעולה [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) כדי לרענן את ערכת הנושא לאחר כל שינוי.

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
  
- ב-YAML על ידי הוספת `styles: |` ואחריו העיצובים המותאמים אישית שלכם (בדקו את הטיפים והדוגמאות למטה).

> [!TIP]  
> **כדי להבין אילו מחלקות עיצוב ניתן לשנות**, אתם יכולים להציץ בתיקיית [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) במאגר הזה. בכל תיקיית כרטיס תמצאו קובץ בשם `styles.css`. קבצים אלה מכילים את כל העיצובים המוחלים. זה מאפשר הרבה יותר אפשרויות ממשתני CSS, אך יש להוסיף זאת בנפרד לכל כרטיס.
> 
> תוכלו גם למצוא הרבה [דוגמאות מהקהילה](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards), או כמה מ[פורום Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) בעזרת חיפוש קצר.
>
> את ערכת הנושא Bubble עבור Home Assistant (כמו בצילומי המסך) ניתן למצוא [כאן](https://github.com/Clooos/Bubble).
>
> סרטון הדרכה בקרוב בערוץ [YouTube](https://www.youtube.com/@cloooos) שלי!

> [!IMPORTANT]  
> שימו לב שייתכן שתצטרכו להוסיף `!important;` לחלק מעיצובי ה-CSS שכבר מוגדרים (ראו דוגמאות למטה).

> [!TIP]  
> ניתן למקד כפתורי משנה באמצעות מחלקות מבוססות שם. לדוגמה, כפתור משנה בשם "My sub-button" ניתן לעצב עם `.my-sub-button`. כפתורי משנה מסוג מחוון חושפים גם את `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` וכן הלאה.
>
> מחלקה מבוססת שם משתנה כאשר אתם משנים את שם כפתור המשנה, והיא מתורגמת כאשר השם מתורגם. הגדירו `css_class` על כפתור המשנה כדי לקבל מחלקה משלכם שלעולם אינה זזה, ללא תלות בשמו וללא תלות בשפה.

#### דוגמאות

<details>

<summary>שינוי גודל הגופן של כל כרטיס Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>שינוי צבע הרקע של כפתור בודד בערימת כפתורים אופקית</summary>

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

<summary>שינוי צבע הרקע של כרטיס</summary>

<br>

זה עובד על כל סוגי Bubble Card (למעט חלונות קופצים):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

זה עושה את אותו הדבר בכרטיס כפתור בלבד (זה עובד עבור כותרת החלון הקופץ): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

כדי לשנות את הצבע כאשר המצב הוא `on`, הציצו בתבניות העיצוב למטה.

</details>

<details>

<summary>שינוי צבע המחוון של כפתור</summary>

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

<summary>שינוי צבע הקו של מפריד</summary>

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

<summary>שינוי צבע של אייקון</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

עבור אייקון של ערימת כפתורים אופקית.
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>שינוי צבע הרקע של מיכל אייקון</summary>

<br>

זה עובד על כל סוגי Bubble Card (למעט חלונות קופצים):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

זה עושה את אותו הדבר עבור כותרת החלון הקופץ: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>שינוי גודל כפתורי המשנה (מושלם לפריסה הגדולה)</summary>

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

<summary>שינוי צבע הרקע של כפתור המשנה השני</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>שינוי גודל של אייקון</summary>

<br>

עבור האייקון הראשי.

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

עבור אייקוני כפתורי המשנה.

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>שימוש בתמונה במקום באייקון בכפתור משנה</summary>

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

פשוט העלו את התמונה הזו לתיקיית "pictures" (או השם שתרצו) בתוך תיקיית ה-"www" של Home Assistant.

</details>

<details>

<summary>דוגמה מתקדמת: יצירת שורה אופקית של כפתורי משנה (כולל צילום מסך)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> אני ממש אוהב את זה, אני משתמש בזה ככותרת בדשבורד שלי.

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

## תבניות

**Bubble Card לא תומך בתבניות Jinja**, אך משתמשים מתקדמים יכולים להוסיף תבניות ב-JS ישירות ב[עיצובים המותאמים אישית](#עיצוב) שלהם. לדוגמה, זה מאפשר לשנות באופן דינמי אייקון, טקסטים או צבעים של אלמנט, להציג או להסתיר אלמנט בתנאי (כמו כפתור משנה), או כמעט כל דבר בהתבסס על מצב, תכונה ועוד.

> [!TIP]  
> מידע נוסף על תבניות JS [כאן](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). העצה שלי היא **תמיד להציץ בקונסולת הדפדפן שלכם** כדי לוודא שהכול עובד כשורה.

> [!IMPORTANT]  
> **כל התבניות שלא משנות תכונת CSS חייבות להיות ממוקמות בסוף! כמו שינוי אייקון, טקסט או כל אלמנט אחר.**

#### משתנים ופונקציות זמינים

<details>

<summary>משתנים</summary>

<br>

יש לכם גישה למשתנים האלה ברוב הכרטיסים:

- `state` יחזיר את המצב של ה-`entity` שהגדרתם.
  
- `entity` יחזיר את הישות שהגדרתם, כמו `switch.test` בדוגמה הזו.
  
- `icon` ניתן להשתמש בו כך כדי לשנות את האייקון `icon.setAttribute("icon", "mdi:lightbulb")`.

- `subButtonState[0]` יחזיר את המצב של ה-`entity` שהגדרתם לכפתור המשנה הראשון, `[0]` הוא מצב כפתור המשנה הראשון, `[1]` השני...
  
- `subButtonIcon[0]` ניתן להשתמש בו כך כדי לשנות את אייקון כפתור המשנה הראשון `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")`, `[0]` הוא אייקון כפתור המשנה הראשון, `[1]` השני...
  
- `card` יחזיר את אלמנט הכרטיס ב-DOM.
  
- `hass` הוא משתנה מתקדם שמאפשר לכם עוד יותר שליטה, לדוגמה אתם יכולים להחזיר את המצב של `light.kitchen` כך `hass.states['light.kitchen'].state` או תכונה כך `hass.states[entity].attributes.brightness`.

- `this` יחזיר הרבה מידע שימושי על ההגדרה והדשבורד שלכם, השתמשו בזה רק אם אתם יודעים מה אתם עושים.

</details>

<details>

<summary>פונקציות</summary>

<br>

יש לכם גישה לכל פונקציות ה-JS הגלובליות, אך גם גישה ל:

- `getWeatherIcon` ניתן להשתמש בה כדי להחזיר אייקון מזג אוויר בהתבסס על מצב שמחזיר את מזג האוויר. לדוגמה, תוכלו לעשות את זה `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` כדי לשנות את אייקון כפתור המשנה השלישי לאייקון מזג האוויר של היום, `.forecast[1]?.condition` הוא עבור מחר...

  תצטרכו ליצור חיישן תבנית לצורך כך. הנה מה שאתם יכולים להוסיף ל-`configuration.yaml`:
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
- `checkConditionsMet(conditions, hass)` מחזירה `true` כאשר רשימת [תנאים](#תנאים) מתקיימת, לדוגמה `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`.
- `hass.formatEntityState(state)` ניתן להשתמש בה כדי לתרגם מצב (ניתן גם להשתמש בה כדי לקבל את יחידת המצב, בלי צורך להוסיף אותה ידנית).
- `hass.formatEntityAttributeValue(state, "attribute")` ניתן להשתמש בה כדי לתרגם תכונה (ניתן גם להשתמש בה כדי לקבל את יחידת המצב, בלי צורך להוסיף אותה ידנית).

</details>

#### דוגמאות

תוכלו למצוא הרבה דוגמאות למטה, אך תוכלו למצוא גם תבניות מתקדמות מאוד בעמוד ה-[Patreon](https://www.patreon.com/c/Clooos) שלי, כמו אחת (המועדפת עליי) שמאפשרת עד ארבעה תגי סטטוס מותנים הממוקמים סביב האייקונים של הכרטיס. זו גם דרך מצוינת ללמוד על כל האפשרויות של העיצובים המותאמים אישית והתבניות של Bubble Card!

<details>
<summary>דוגמאות מעמוד ה-Patreon שלי</summary>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/e95ab7f8-f5a3-4fca-b3fd-61479540b723" alt="Example 2" />
    <br>
    <a href="https://www.patreon.com/posts/adding-home-like-116764324">הוספת תגי סטטוס בסגנון Home Assistant לכל כרטיס</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/24ad619b-2a98-49c0-bc9d-a59f00541731" alt="Example 4" />
    <br>
    <a href="https://www.patreon.com/posts/showing-date-and-116766943">הצגת תאריך ושעה מעוצבים במפריד בלי להשתמש בישות כלשהי</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/0c8891a8-ca96-45a9-ada6-fc91268cb815" alt="Example 1" />
    <br>
    <a href="https://www.patreon.com/posts/showing-sub-on-116808854">הצגת מצב כפתור משנה בשתי שורות</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/c90d561c-ab6a-4e4e-bd00-fe8676c2bf5b" alt="Example 3" />
    <br>
    <a href="https://www.patreon.com/posts/customizing-and-116753941">התאמה אישית של תוויות ואייקונים בתוך כפתור משנה מסוג בחירה</a>
</p>

<p align="center"><br>
    <img src="https://github.com/user-attachments/assets/02782c6b-12e7-40bf-ad23-2bacf8016392" alt="Example 5" />
    <br>
    <a href="https://www.patreon.com/posts/119701174">הוספת חלון קופץ תזכורת מתמשך שמופיע רק כשצריך</a>
</p>

<br>

</details>

<details>

<summary>שינוי צבע הרקע של כפתור שהוא אדום כאשר הוא <code>off</code> וכחול כאשר הוא <code>on</code></summary>

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

<summary>שינוי צבע הרקע של כפתור בהתבסס על ישות עבור ערימת כפתורים אופקית</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>הצגה/הסתרה של כפתור משנה בתנאי</summary>

<br>

זו מציגה את כפתור המשנה הראשון רק כאשר שואב האבק שלי תקוע.
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

זו מציגה כפתור משנה כאשר הסוללה מתחת ל-10%. שימושי עם כפתור משנה שמציג "Low battery".
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>שינוי אייקון או אייקון כפתור משנה בתנאי</summary>

<br>

זו משנה אייקון כפתור רק כאשר שואב אבק תקוע.
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

זו משנה את אייקון כפתור המשנה הראשון רק כאשר שואב אבק תקוע.
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>שינוי צבע אייקון או אייקון כפתור משנה בתנאי</summary>

<br>

זו משנה את צבע אייקון הכפתור בהתבסס על מצבו.
```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

זו משנה את צבע אייקון כפתור המשנה בהתבסס על מצבו. `.bubble-sub-button-1` הוא כפתור המשנה הראשון, החליפו את `1` אם ברצונכם לשנות אייקון כפתור משנה אחר.
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>הנפשת אייקון מאוורר בתנאי</summary>

<br>

זו מסובבת אייקון כפתור כאשר מאוורר במצב `on`.
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

<summary>תבניות טקסט (כמו שם או מצב)</summary>

<br>

זו משנה שם/מצב כפתור ל"כרגע שטוף שמש" בהתאם למזג האוויר שלכם.
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
או כאשר מוחל על כפתורי משנה:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


אם אתם רוצים ליצור תבנית למצב (`.bubble-state`) אל תפעילו `show_state: true`, פשוט הפעילו `show_attribute: true` בלי כל תכונה.

</details>

<details>

<summary>דוגמה מתקדמת: שינוי צבע כפתור משנה כאשר חלון קופץ פתוח</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>דוגמה מתקדמת: יצירת תבנית לשם מפריד בהתבסס על מצב מתורגם לשפה שלכם</summary>

<br>

תוכלו להשתמש ב-`hass.formatEntityState(state)` כדי לתרגם מצב וב-`hass.formatEntityAttributeValue(state, "attribute")` כדי לתרגם תכונה.

זו משנה את השם ואת האייקון בהתבסס על מזג האוויר, "Nuageux" פירושו "מעונן" בצרפתית.

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

## מודולים

מודולים הם תכונה עוצמתית שמאפשרת לכם לשמור, לעשות שימוש חוזר ולשתף את העיצובים המותאמים אישית והתבניות שלכם בכל כרטיסי ה-Bubble Card שלכם. במקום להעתיק ולהדביק את אותו הקוד במספר כרטיסים, תוכלו ליצור מודול ולהחיל אותו בכל מקום שתצטרכו. זה הופך את ניהול המראה והתחושה של הדשבורד שלכם לקל ויעיל הרבה יותר.

אבל התכונה הזו עוצמתית הרבה יותר מזה, היא מאפשרת לכם להוסיף תכונות ממש בעצמכם בעורך של Bubble Card, באמצעות כל אפשרויות ה[טופס הסטנדרטי של Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)!  
בורר האובייקטים שופר כדי להציג שינויים בזמן אמת ולתמוך בתכונות (attributes) כראוי.

מודול יכול גם לענות לבורר הכרטיסים של Home Assistant לצד [הצעות הישויות](#הצעות-ישויות) המובנות: השתמשו ב-`suggestions` עבור הכרטיסים שהוא יכול לתאר מראש, וב-`suggestions_code` כאשר יש לחשב אותם מתוך ההתקנה שלכם, לדוגמה חלון קופץ הנבנה מכל הישויות של האזור שאליו שייכת הישות שנבחרה. שני המפתחות מתועדים [כאן](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md#entity-suggestions).

תוכלו גם לעיין ב-**Module Store** כדי למצוא ולהתקין [מודולים שנוצרו על ידי הקהילה](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), או לשתף את היצירות שלכם!

> [!TIP]
> הקוד של מודול עובד בדיוק באותה הצורה כמו הקוד בסעיף ה-`styles` של כרטיס. כל אותם המשתנים והפונקציות מסעיף [תבניות](#תבניות) זמינים.

<br>

### הגדרה ראשונית

> [!IMPORTANT]
> החל מגרסה v3.1.0, Bubble Card Tools הוא backend האחסון המומלץ עבור מודולים. שיטת חיישן התבנית הישנה עדיין עובדת עבור הגדרות קיימות, אך מודולים חדשים ותכונות Module Store נתמכים בצורה הטובה ביותר דרך Bubble Card Tools.

האינטגרציה Bubble Card Tools מאפשרת את עורך המודולים ואת Module Store, ושומרת מודולים כקבצי YAML נפרדים. מודולים קיימים עוברים הגירה (migration) באופן אוטומטי.

שלבי ההתקנה וההגדרה מוסברים כאן:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### עורך המודולים

תוכלו לגשת לעורך המודולים מההגדרות של כל כרטיס, תחת סעיף ה-**Modules**. העורך מספק שני לשוניות עיקריות:

#### לשונית My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

לשונית זו מציגה את כל המודולים המותקנים שלכם ומאפשרת לכם:

- **להחיל** מודולים קיימים על הכרטיס הנוכחי
- **ליצור** מודול חדש מאפס
- **לערוך** מודולים קיימים עם תצוגה מקדימה חיה
- **למחוק** מודולים שאינכם זקוקים להם יותר
- **לחפש** ו**למיין** מודולים (אלפביתי, אחרונים, פעילים ראשונים)
- **להגדיר סטטוס גלובלי** כדי שמודול יחול על כל הכרטיסים באופן אוטומטי
- **לייבא/לייצא** מודולים לגיבוי או לשיתוף
- **לכתוב הצעות ישויות** בעורך המודולים, תחת **אופציונלי: הצעות ישויות**, כך שהמודול שלכם יוצע בבורר הכרטיסים של Home Assistant. גם הכללים וגם ההצעות המחושבות נבדקים תוך כדי הכתיבה, שגיאה שם מונעת שמירה, והתצוגה המקדימה מציגה את הכרטיסים המוצעים עבור כל ישות שתבחרו

#### לשונית Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

לשונית זו תציג את [כל המודולים הזמינים מהקהילה](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules), ומאפשרת לכם:

- **לעיין** בכל המודולים שנוצרו על ידי הקהילה
- **לחפש** ולסנן מודולים לפי שם, תאימות או מילות מפתח
- **להתקין** מודולים בלחיצה אחת
- **לעדכן** מודולים מותקנים כאשר גרסאות חדשות זמינות

> [!TIP]
> בעורך, תוכלו להפעיל מודולים לא נתמכים כדי לבדוק מודולים שעדיין לא סומנו כתואמים לסוג כרטיס מסוים.

<br>

### כיצד להשתמש במודולים

#### יצירת מודול חדש

<details>

<summary>לחצו כדי להרחיב</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. עברו לעורך של כל כרטיס והרחיבו את סעיף ה-**Modules**.
2. לחצו על **Create new module**.
3. מלאו את פרטי המודול.
4. כתבו את קוד ה-CSS ו/או תבנית ה-JavaScript שלכם בעורך ה-**Code**.
5. (אופציונלי) צרו ממשק תצורה מותאם אישית בסעיף ה-**Editor** (כמו בורר הצבעים בצילום המסך למעלה, תיעוד מלא זמין [כאן](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md)).
6. (אופציונלי) כתבו את **הצעות הישויות** שלכם כך שהמודול שלכם יוצע בבורר הכרטיסים של Home Assistant. הפאנל בודק את מה שאתם כותבים תוך כדי הקלדה, והתצוגה המקדימה שלו מציגה את הכרטיסים המוצעים עצמם עבור הישות שתבחרו.
7. לחצו **Save**.

המודול שלכם זמין כעת לשימוש בכל אחד מהכרטיסים שלכם!

<br>

</details>

#### החלת מודול על כרטיס

<details>

<summary>לחצו כדי להרחיב</summary>

<br>

- **דרך העורך:**

  - עברו לעורך של הכרטיס שברצונכם להחיל עליו את המודול.
  - הרחיבו את סעיף ה-**Modules**.
  - לחצו על המודול שברצונכם להחיל מהרשימה.
  - תחת "Apply to", לחצו על "This card". המודול פעיל כעת. תוכלו להחיל מספר מודולים על אותו הכרטיס.

- **דרך YAML:**

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

#### החלת מודול באופן גלובלי

<details>

<summary>לחצו כדי להרחיב</summary>

<br>

תוכלו להגדיר מודול שיחול באופן אוטומטי על כל כרטיסי ה-Bubble Card:

**זה לא זמין עבור מודולים עם עורך, מכיוון שאלה דורשים תצורה ספציפית כדי לעבוד.**

- **דרך העורך:**

  - בעורך המודולים, מצאו את המודול שלכם בלשונית ה-**My Modules**.
  - הפעילו את כפתור ה-**All cards** ליד שם המודול.
  - המודול יוחל כעת על כל הכרטיסים באופן אוטומטי.
 
- **דרך YAML:**

  בתצורת ה-YAML של המודול שלכם (ב-`bubble-modules.yaml`), פשוט הוסיפו `is_global: true`.

<br>

</details>

#### החרגת כרטיס בודד ממודול גלובלי

<details>

<summary>לחצו כדי להרחיב</summary>

<br>

אם יש לכם מודול גלובלי אך ברצונכם להחריג אותו מכרטיס מסוים:

- **דרך העורך:**
  
  - בסעיף ה-**Modules** של הכרטיס, תראו את המודולים הגלובליים המופיעים ברשימה.
  - לחצו על מודול גלובלי, בטלו את "This card" כדי להחריג אותו מהכרטיס הספציפי הזה.

- **דרך YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### שיתוף המודול שלכם ל-Module Store

<details>

<summary>לחצו כדי להרחיב</summary>

<br>

כדי לשתף את המודול שלכם ל-Module Store, בעורך המודולים, בתחתית תחת "Export Module", לחצו על "Copy for GitHub" והדביקו את התוכן בדיון חדש בקטגוריית [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules). **ערכו את התיאור** (אם צריך), **את הדוגמה** (עבור משתמשי YAML), וזכרו **לכלול לפחות צילום מסך אחד** עבור Module Store.

**המודול שלכם יהיה זמין מיד לאחר מכן** (לאחר רענון של ה-Store), אז וודאו שוב שהכול כתוב כראוי והמודול עובד כמצופה. תוכלו כמובן לערוך/לעדכן את המודול לאחר שיתופו.

<br>

</details>

#### ניהול גרסאות

<details>

<summary>לחצו כדי להרחיב</summary>

<br>

Module Store בודק באופן אוטומטי עדכונים למודולים מותקנים. כאשר עדכונים זמינים:

1. תראו חיווי עדכון בלשונית ה-**Module Store**.
2. לחצו **Update** במודולים עם עדכונים זמינים.
3. אשרו את העדכון ב-Module Store.

<br>

</details>

#### הגדרת סוגי כרטיסים נתמכים

<details>

<summary>לחצו כדי להרחיב</summary>

<br>

חלק מהמודולים עשויים שלא להיות תואמים לכל סוגי הכרטיסים. תוכלו לציין אילו כרטיסים המודול תומך בהם.  
אם ברצונכם שמודול יהיה תואם ל**כל הכרטיסים**, פשוט השמיטו את השדה `supported` (או השתמשו באפשרות ה-**All cards** בעורך).

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

### דוגמאות

<details>
<summary>מודול עיצוב בסיסי</summary>

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
<summary>מודול עם תצורה מותאמת אישית</summary>

<br>

המודול הזה זמין [כאן](https://github.com/Clooos/Bubble-Card/discussions/1231).

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

תוכלו למצוא דוגמאות נוספות ב-Module Store, או [כאן](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules).

<br>

---

<br>

## לוקליזציה

Bubble Card מדברת בשפה שלכם. העורך שלה מתורגם ל-64 השפות ש-Home Assistant תומכת בהן, ובכל מקום שבו ל-Home Assistant כבר יש מילה למשהו, נעשה שימוש חוזר בניסוח שלה, כך שתקראו את אותם מונחים בשני הממשקים.

בתחתית העורך, לצד מספר הגרסה, מתג **אוטומטי** עוקב אחר שפת ה-Home Assistant שלכם. כבו אותו וכל העורך חוזר לאנגלית, מה שנוח למעקב אחר מדריך או לדיווח על תקלה. הבחירה שלכם נשמרת בדפדפן.

גם התיעוד הזה מתורגם, [ל-62 שפות](languages.md), כולן חוץ מאנגלית בריטית, שמציגה את המקור. הדפים האלה פתוחים לכולם, כך שניסוח שאינו תואם ל-Home Assistant שלכם ניתן לתיקון בכמה לחיצות. הגרסה האנגלית נשארת ההפניה לתוכן עצמו.

<br>

---

<br>

## עזרה

אל תהססו לפתוח issue אם משהו לא עובד כמצופה. 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

יש לכם שאלות או מחשבות על Bubble Card? רוצים לשתף את הדשבורדים או התגליות שלכם? תוכלו לגשת לפורום Home Assistant, ל-subreddit של Bubble Card או לסעיף GitHub Discussions.

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## תרומה לפרויקט

תרומות מתקבלות בברכה! בין אם מדובר בתיקוני באגים, תכונות חדשות, תרגומים או שיפורים בתיעוד, אל תהססו לפתוח pull request.

לפני שתתחילו, אנא קראו את [מדריך המפתחים](DEVELOPERS.md) שמכסה כיצד להגדיר את הסביבה המקומית שלכם, לבנות את הפרויקט ולבדוק את השינויים שלכם.

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## תרומה כספית

אני מקדיש את רוב זמני הפנוי להפוך את הפרויקט הזה לטוב ביותר שהוא יכול להיות. אז אם אתם מעריכים את העבודה שלי, כל תרומה תהיה דרך נהדרת להביע את התמיכה שלכם 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

תודה לכולכם על התמיכה, כולכם המוטיבציה הגדולה ביותר שלי!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>

</div>
