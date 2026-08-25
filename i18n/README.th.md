<!-- First generated from README.md, then improved by contributors.
     Wording fixes are welcome here. Content changes belong in README.md. -->
> [!NOTE]
> หน้านี้เป็นการแปลอัตโนมัติ หากมีข้อสงสัย ให้ยึดตาม[เอกสารต้นฉบับภาษาอังกฤษ](../README.md) เป็นหลัก พบประโยคที่อ่านแล้วไม่ถูกต้องหรือไม่? ยินดีรับความช่วยเหลือทุกรูปแบบ และการ[แก้ไขหน้านี้](https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.th.md) ใช้เวลาเพียงนาทีเดียว โดย GitHub จะจัดการการ fork และ pull request ให้เอง ขอขอบคุณล่วงหน้า! 🍻

# Bubble Card

[<img src="../img/translate.svg" width="17" height="17" align="absmiddle" alt="">](languages.md) **[อ่านหน้านี้ในภาษาอื่น](languages.md)**

![readme-images-bubble-card](https://github.com/Clooos/Bubble-Card/assets/36499953/c763bdad-ce71-46b0-aa9e-4ff0017072fe)

Bubble Card คือชุดการ์ดแบบมินิมอลและปรับแต่งได้สำหรับ Home Assistant มาพร้อมป๊อปอัปสไตล์ทันสมัยและ Module Store ในตัวที่มีโมดูลจากชุมชนกว่า 100 รายการ

[![Stars](https://img.shields.io/github/stars/clooos/Bubble-Card?style=for-the-badge)](#) [![Last commit](https://img.shields.io/github/last-commit/clooos/Bubble-Card?style=for-the-badge)](#) [![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![Reddit Profile](https://img.shields.io/badge/Reddit-My%20stuff-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/user/Clooooos/submitted/) [![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)


<br>

## สารบัญ

**[`การติดตั้ง`](#การติดตั้ง)**  **[`การกำหนดค่า`](#การกำหนดค่า)**  **[`คำแนะนำเอนทิตี`](#คำแนะนำเอนทิตี)**  **[`ป๊อปอัป`](#ป๊อปอัป)**  **[`แถวปุ่มแนวนอน`](#แถวปุ่มแนวนอน)**  **[`ปุ่ม`](#ปุ่ม)**  **[`เครื่องเล่นสื่อ`](#เครื่องเล่นสื่อ)**  **[`ม่าน/ประตู`](#ม่านประตู)**  **[`เลือก`](#เลือก)**  **[`ปรับอากาศ`](#ปรับอากาศ)**  **[`ปฏิทิน`](#ปฏิทิน)**  **[`ตัวคั่น`](#ตัวคั่น)**  **[`คอลัมน์ว่าง`](#คอลัมน์ว่าง)**  **[`ปุ่มย่อยเท่านั้น`](#ปุ่มย่อยเท่านั้น)**  **[`ปุ่มย่อย`](#ปุ่มย่อย)**  **[`เลย์เอาต์การ์ด`](#เลย์เอาต์การ์ด)**  **[`เงื่อนไข`](#เงื่อนไข)**  **[`การกระทำ`](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง)**  **[`การจัดสไตล์`](#การจัดสไตล์)**  **[`เทมเพลต`](#เทมเพลต)**  **[`โมดูล`](#โมดูล)**  **[`การแปลภาษา`](#การแปลภาษา)**  **[`ความช่วยเหลือ`](#ความช่วยเหลือ)**  **[`การมีส่วนร่วม`](#การมีส่วนร่วม)**  **[`บริจาค`](#บริจาค)**

<br>

## การติดตั้ง

**เวอร์ชัน Home Assistant ต่ำสุดที่รองรับ:** 2023.9.0

<details>

<summary>ไม่ใช้ HACS</summary>

<br>

1. ดาวน์โหลดไฟล์นี้: [bubble-card.js](https://raw.githubusercontent.com/Clooos/Bubble-Card/main/dist/bubble-card.js)
2. นำไฟล์นี้ไปไว้ในโฟลเดอร์ `<config>/www` ของคุณ หากต้องการให้ตัวแก้ไขเป็นภาษาของคุณ ให้ดาวน์โหลด `bubble-card-<lang>.json` จาก[โฟลเดอร์ dist](https://github.com/Clooos/Bubble-Card/tree/main/dist) ด้วย เช่น `bubble-card-fr.json` แล้ววางไว้ข้าง ๆ `bubble-card.js` (ถ้าไม่มีมัน ตัวแก้ไขจะยังคงเป็นภาษาอังกฤษ)
3. บนแดชบอร์ดของคุณ คลิกไอคอนที่มุมขวาบน แล้วคลิก `Edit dashboard`
4. คลิกไอคอนนั้นอีกครั้ง แล้วคลิก `Manage resources`
5. คลิก `Add resource`
6. คัดลอกและวางสิ่งนี้: `/local/bubble-card.js?v=1`
7. คลิก `JavaScript Module` แล้วคลิก `Create`
8. ย้อนกลับและรีเฟรชหน้าเว็บของคุณ
9. ตอนนี้คุณสามารถคลิก `Add card` ที่มุมขวาล่าง แล้วค้นหา `Bubble Card`
10. หลังจากอัปเดตไฟล์ทุกครั้ง คุณต้องแก้ไข `/local/bubble-card.js?v=1` และเปลี่ยนเลขเวอร์ชันให้สูงขึ้น

หากใช้งานไม่ได้ ลองล้างแคชของเบราว์เซอร์ดู

</details>

<details>

<summary>ใช้ HACS (แนะนำ)</summary>

<br>

วิธีนี้ทำให้คุณได้รับการอัปเดตโดยตรงผ่าน Home Assistant Community Store

1. หากยังไม่ได้ติดตั้ง HACS ให้ดาวน์โหลดตามคำแนะนำที่ [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. ดำเนินการตั้งค่าเริ่มต้นของ HACS ตามคำแนะนำที่ [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. ในแถบด้านข้างของคุณ ไปที่ "HACS"
4. ค้นหา "Bubble Card" หรือคลิกปุ่มสีน้ำเงินด้านล่าง
5. คลิก "Download"
6. กลับไปที่แดชบอร์ดของคุณและคลิกไอคอนที่มุมขวาบน แล้วคลิก `Edit dashboard`
7. ตอนนี้คุณสามารถคลิก `Add card` ที่มุมขวาล่าง แล้วค้นหา `Bubble Card`

หากใช้งานไม่ได้ ลองล้างแคชของเบราว์เซอร์/แอปดู (บนทุกอุปกรณ์ของคุณหากจำเป็น)

#### วิดีโอ

คุณยังสามารถดูช่อง YouTube ของฉันสำหรับวิดีโอสอนทีละขั้นตอนได้

[![YouTube](https://img.shields.io/badge/YouTube-My%20channel-red?logo=youtube&style=for-the-badge)](https://www.youtube.com/@cloooos)

</details>

<br>

[![Open Bubble Card on Home Assistant Community Store (HACS).](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=clooos&repository=Bubble-Card&category=frontend)

<br>

## การกำหนดค่า

ตัวเลือกทั้งหมดสามารถกำหนดค่าได้ในตัวแก้ไขของ Home Assistant แต่คุณสามารถดูรายละเอียดเพิ่มเติมและ YAML ได้ในเอกสารด้านล่าง

<details>

<summary><b>ตัวเลือกหลัก (YAML และคำอธิบาย)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `type` | string | **Required** | `custom:bubble-card` | ประเภทของการ์ด |
| `card_type` | string | **Required** | `button`, `calendar`, `climate`, `cover`, `empty-column`, `horizontal-buttons-stack`, `media-player`, `pop-up`, `select`, `separator` หรือ `sub-buttons` | ประเภทของ Bubble Card ดูรายละเอียดด้านล่าง |
| `styles` | object list | Optional | สไตล์ชีต CSS ใดก็ได้ | ให้คุณปรับแต่ง CSS ของ Bubble Card ได้ ดู [การจัดสไตล์](#การจัดสไตล์) |

</details>

<details>

<summary><b>ตัวแปร CSS ส่วนกลาง (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-border-radius` | `px` | รัศมีขอบมนสำหรับองค์ประกอบที่รองรับทั้งหมด |
| `--bubble-main-background-color` | `color` | สีพื้นหลังหลักสำหรับองค์ประกอบที่รองรับทั้งหมด |
| `--bubble-secondary-background-color` | `color` | สีพื้นหลังรองสำหรับองค์ประกอบที่รองรับทั้งหมด |
| `--bubble-accent-color` | `color` | สีเน้นสำหรับองค์ประกอบที่รองรับทั้งหมด |
| `--bubble-icon-border-radius` | `px` | รัศมีขอบมนของไอคอนสำหรับองค์ประกอบที่รองรับทั้งหมด |
| `--bubble-icon-background-color` | `color` | สีพื้นหลังของไอคอนสำหรับองค์ประกอบที่รองรับทั้งหมด |
| `--bubble-sub-button-border-radius` | `px` | รัศมีขอบมนสำหรับปุ่มย่อยทั้งหมด |
| `--bubble-sub-button-background-color` | `color` | สีพื้นหลังสำหรับปุ่มย่อยทั้งหมด |
| `--bubble-box-shadow` | ดู [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | เงากล่องสำหรับองค์ประกอบที่รองรับทั้งหมด |
| `--bubble-border` | ดู [border](https://developer.mozilla.org/fr/docs/Web/CSS/border) | ขอบสำหรับการ์ดที่รองรับทั้งหมด |

</details>

<br>

---

<br>

[![Bubble-Card---Youtube-github](https://github.com/user-attachments/assets/643aa16a-3fc9-4770-8269-62ec01db49b3)](https://www.youtube.com/watch?v=0hSQOlBxKKI)

**ดู[วิดีโอ](https://www.youtube.com/watch?v=0hSQOlBxKKI)นี้เพื่อเรียนรู้เกี่ยวกับ Bubble Card และความสามารถของมัน** ช่อง YouTube ของฉันยังค่อนข้างใหม่และเน้นบทเรียนเกี่ยวกับ Home Assistant และ Bubble Card อย่าลังเลที่จะกดติดตามเพื่อช่วยเพิ่มการมองเห็นให้กับช่องของฉัน ขอบคุณล่วงหน้า

<br>

---

<br>

## คำแนะนำเอนทิตี

ตั้งแต่ Home Assistant 2026.6 เป็นต้นมา การเลือกเอนทิตีในตัวเลือกการ์ดจะเสนอการ์ดสำเร็จรูปให้คุณสองสามแบบ และ Bubble Card ก็เพิ่มสูตรของตัวเองเข้าไปในรายการนั้น เลือกไฟแล้วคุณจะได้การ์ดที่มีสไลเดอร์ความสว่าง พร้อมกับแบบอุณหภูมิสี แบบสี และแบบความอิ่มตัวของสี เมื่อไฟของคุณรองรับ เลือกม่าน/ประตูแล้วคุณจะได้สไลเดอร์ตำแหน่งของมัน เลือกเครื่องเล่นสื่อแล้วคุณจะได้แบบที่มีรายการแหล่งสัญญาณด้วย เลือกเครื่องดูดฝุ่นแล้วคุณจะได้ปุ่มเริ่ม หยุดชั่วคราว และกลับแท่นชาร์จ ทุกคำแนะนำเป็นการตั้งค่า Bubble Card ปกติที่แสดงเป็นตัวอย่างแบบสด คุณจึงหยิบอันที่ใกล้เคียงที่สุดมาแก้ไขต่อได้ตามปกติ

สิ่งที่คุณได้รับขึ้นอยู่กับว่าเอนทิตีของคุณทำอะไรได้จริง ไฟที่ไม่มีช่องความสว่างจะได้ปุ่มสลับแทนสไลเดอร์ ม่าน/ประตูที่เอียงไม่ได้จะไม่มีแบบการเอียง และเอนทิตีปรับอากาศจะได้โหมดที่ตั้งไว้ล่วงหน้าก็ต่อเมื่อมันมีเท่านั้น รายการแบบดั้งเดิมจะตามมาด้านล่างคำแนะนำของ Bubble Card เมื่อใช้ได้ ทั้งการ์ดเฉพาะของเอนทิตีประเภทนั้น ปุ่มธรรมดา และสไลเดอร์

> [!TIP]
> โมดูลสามารถเพิ่มคำแนะนำของตัวเองลงในรายการนั้นได้ ดู[โมดูล](#โมดูล)

<br>

---

<br>

## ป๊อปอัป

![readme-pop-up](https://github.com/Clooos/Bubble-Card/assets/36499953/086bdcc4-62aa-445b-b265-b57c4e38b8a0)

การ์ดนี้ให้คุณสร้างป๊อปอัปที่มีเนื้อหาใดก็ได้ ป๊อปอัปแต่ละอันจะถูก**ซ่อนไว้เป็นค่าเริ่มต้น** และสามารถเปิดได้โดยการชี้ไปยังลิงก์ของมัน (เช่น `'#pop-up-name'`) ด้วยการ์ดใดก็ตามที่รองรับ[การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) `navigate` หรือด้วย[แถวปุ่มแนวนอน](#แถวปุ่มแนวนอน)ที่มีมาให้

> [!TIP]
> ### ตัวกระตุ้นป๊อปอัป
> คุณสมบัตินี้ให้คุณเปิดป๊อปอัปตามสถานะของเอนทิตีใดก็ได้ ตัวอย่างเช่น คุณสามารถเปิดป๊อปอัป "Security" ที่มีกล้องเมื่อมีคนอยู่หน้าบ้านของคุณ คุณยังสามารถสร้างตัวช่วยสลับ (input_boolean) และกระตุ้นการเปิด/ปิดในระบบอัตโนมัติได้ด้วย
> <details>
> <summary>เปิดป๊อปอัปเมื่อ <code>binary_sensor</code> มีค่าเป็น <code>on</code></summary>
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
> ### วิธีปิดป๊อปอัปแบบต่าง ๆ
> มีหลายวิธีในการปิดป๊อปอัป ตัวอย่างเช่น คุณสามารถปัดจากส่วนหัวของป๊อปอัปลงไปด้านล่าง ปัดยาวจากภายในป๊อปอัปลงไปด้านล่าง กด Escape บนเดสก์ท็อป ลบแฮชออกจาก URL หรือเพียงแค่กดปุ่มปิด
>


### ตัวเลือกป๊อปอัป

<details>

<summary><b>ตัวเลือก (YAML และคำอธิบาย)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `hash` | string | **Required** | แฮชที่ไม่ซ้ำกันใด ๆ (เช่น `'#kitchen'`) โดยมี ' ' | นี่คือวิธีที่คุณจะเปิดป๊อปอัปของคุณ |
| `popup_style` | string | Optional | `bubble` (ค่าเริ่มต้น) หรือ `classic` | กำหนดสไตล์การแสดงผลของป๊อปอัป |
| `popup_mode` | string | Optional | `default` (ค่าเริ่มต้น), `fit-content`, `centered` หรือ `adaptive-dialog` | กำหนดโหมดเลย์เอาต์ของป๊อปอัป |
| `with_bottom_offset` | boolean | Optional | `true` หรือ `false` (ค่าเริ่มต้น) | ใช้ได้เฉพาะกับ `popup_mode: fit-content` หรือ `adaptive-dialog` เท่านั้น ใช้ระยะห่างด้านล่างบนมือถือ มีประโยชน์เมื่อแดชบอร์ดของคุณมีการ์ดฟุตเตอร์ |
| `full_width_on_mobile` | boolean | Optional | `true` หรือ `false` (ค่าเริ่มต้น) | ใช้ได้เฉพาะกับ `popup_mode: centered` เท่านั้น ขยายป๊อปอัปให้เต็มความกว้างหน้าจอบนมือถือ มีประโยชน์บนจอที่เล็กกว่า |
| `performance_mode` | string | Optional | `default` (ค่าเริ่มต้น) หรือ `performance` | ปรับแอนิเมชันการเปิดป๊อปอัปให้เหมาะสม `performance` จะหน่วงการเรนเดอร์เนื้อหาและเบลอพื้นหลังเล็กน้อย และปิดการเบลอฉากหลังด้วยหากตั้งค่าไว้ |
| `auto_close` | string | Optional | ระยะเวลาหมดเวลาเป็นมิลลิวินาที (เช่น `10000` สำหรับ 10 วินาที) | ปิดป๊อปอัปอัตโนมัติหลังจากหมดเวลา |
| `close_on_click` | boolean | Optional | `true` หรือ `false` (ค่าเริ่มต้น) | ปิดป๊อปอัปอัตโนมัติหลังการโต้ตอบใด ๆ |
| `close_by_clicking_outside` | boolean | Optional | `true` (ค่าเริ่มต้น) หรือ `false` | ปิดป๊อปอัปโดยการคลิกด้านนอกของมัน |
| `width_desktop` | string | Optional | ค่า CSS ใดก็ได้ | ความกว้างบนเดสก์ท็อป (`100%` เป็นค่าเริ่มต้นบนมือถือ) |
| `margin` | string | Optional | ค่า CSS ใดก็ได้ | ใช้สิ่งนี้**เฉพาะ**เมื่อป๊อปอัปของคุณไม่อยู่กึ่งกลางอย่างเหมาะสมบนมือถือ (เช่น `13px`) |
| `margin_top_mobile` | string | Optional | ค่า CSS ใดก็ได้ | ระยะขอบด้านบนบนมือถือ (เช่น `-56px` หากส่วนหัวของคุณถูกซ่อนอยู่) |
| `margin_top_desktop` | string | Optional | ค่า CSS ใดก็ได้ | ระยะขอบด้านบนบนเดสก์ท็อป (เช่น `50vh` สำหรับป๊อปอัปขนาดครึ่งหนึ่ง หรือ `calc(100vh - 400px)` สำหรับความสูงคงที่ `400px`) |
| `bg_color` | string | Optional | ค่า hex, rgb หรือ rgba ใดก็ได้ | สีพื้นหลังของป๊อปอัปของคุณ (เช่น `#ffffff` สำหรับพื้นหลังสีขาว) |
| `bg_opacity` | string | Optional | ค่าใดก็ได้ตั้งแต่ `0` ถึง `100` | ความทึบของพื้นหลังป๊อปอัปของคุณ (เช่น `100` สำหรับไม่มีความโปร่งใส) |
| `bg_blur` | string | Optional | ค่าใดก็ได้ตั้งแต่ `0` ถึง `100` | เอฟเฟกต์เบลอพื้นหลังของป๊อปอัปของคุณ **ใช้งานได้เฉพาะเมื่อ `bg_opacity` ไม่ได้ตั้งเป็น `100`** (เช่น `0` สำหรับไม่มีการเบลอ)|
| `shadow_opacity` | string | Optional | ค่าใดก็ได้ตั้งแต่ `0` ถึง `100` | ความทึบของเงาป๊อปอัปของคุณ (เช่น `0` เพื่อซ่อนมัน) |
| `hide_backdrop` | boolean | Optional | `true` หรือ `false` (ค่าเริ่มต้น) | ตั้งค่านี้เป็น true บนป๊อปอัปแรกของแดชบอร์ดหลักของคุณเพื่อปิดฉากหลังบนป๊อปอัปทั้งหมด |
| `background_update` | boolean | Optional | `true` หรือ `false` (ค่าเริ่มต้น) | อัปเดตเนื้อหาป๊อปอัปในพื้นหลัง (ไม่แนะนำ) |
| `trigger` | object หรือ list | Optional | ดู [เงื่อนไข](#เงื่อนไข) | เปิดป๊อปอัปนี้เมื่อเงื่อนไขเป็นจริง |
| `trigger_entity` | string | Optional | เอนทิตีใดก็ได้ | เปิดป๊อปอัปนี้ตามสถานะของเอนทิตีใดก็ได้ ซึ่งเป็นรูปแบบอย่างง่ายของ `trigger` |
| `trigger_state` | string | Optional (**Required** หากกำหนด `trigger_entity`) | สถานะเอนทิตีใดก็ได้ | สถานะเอนทิตีที่ใช้เปิดป๊อปอัป |
| `trigger_close` | boolean | Optional | `true` (ค่าเริ่มต้น) หรือ `false` | ปิดป๊อปอัปเมื่อเงื่อนไขไม่เป็นจริงอีกต่อไป หากคุณใช้คู่ `trigger_entity` และ `trigger_state` แบบเดิม ค่าเริ่มต้นจะเป็น `false` แทน |
| `open_action` | object | Optional | ดู[การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กระตุ้นการกระทำเมื่อป๊อปอัปกำลังเปิด |
| `close_action` | object | Optional | ดู[การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กระตุ้นการกระทำเมื่อป๊อปอัปกำลังปิด |
| `show_header` | boolean | Optional | `true` (ค่าเริ่มต้น) หรือ `false` | แสดง/ซ่อนส่วนหัวของป๊อปอัปทั้งหมด |
| `show_previous_button` | boolean | Optional | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงปุ่มย้อนกลับข้างปุ่มปิด และนำทางกลับไปยังป๊อปอัปก่อนหน้าเมื่อทำได้ |
| `show_close_button` | boolean | Optional | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนปุ่มปิดโดยยังคงแสดงส่วนที่เหลือของส่วนหัวไว้ |
| `buttons_position` | string | Optional | `right` (ค่าเริ่มต้น) หรือ `left` | ตำแหน่งของปุ่มปิดและปุ่มย้อนกลับในส่วนหัว |
| `cards` | list | Optional | Bubble Card, การ์ดของ Home Assistant หรือการ์ดกำหนดเองใดก็ได้ | กำหนดเนื้อหาของป๊อปอัปของคุณ ดูตัวอย่างป๊อปอัปด้านล่าง |
| คุณยังสามารถเข้าถึง[การตั้งค่าปุ่มทั้งหมด](#ปุ่ม)สำหรับส่วนหัวของป๊อปอัปได้ | | Optional | | หากไม่ได้กำหนดจะไม่แสดงส่วนหัว |

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-pop-up-border-radius` | `px` | รัศมีขอบมนสำหรับป๊อปอัป |
| `--bubble-pop-up-main-background-color` | `color` | สีพื้นหลังหลักสำหรับองค์ประกอบที่รองรับของป๊อปอัป |
| `--bubble-pop-up-background-color` | `color` | สีพื้นหลังของป๊อปอัป |
| `--bubble-backdrop-background-color` | `color` | สีพื้นหลังสำหรับฉากหลัง |
| คุณยังสามารถเข้าถึง[ตัวแปร CSS ของปุ่มทั้งหมด](#ตัวเลือกปุ่ม)สำหรับส่วนหัวของป๊อปอัปได้ | | |

</details>


### รูปแบบป๊อปอัปแบบสแตนด์อะโลน (v3.2.0+)

ตั้งแต่ v3.2.0 เป็นต้นมา ป๊อปอัปใช้รูปแบบสแตนด์อะโลนแบบใหม่ ที่ซึ่งการ์ดเนื้อหาถูกกำหนดโดยตรงภายในป๊อปอัปด้วยตัวเลือก `cards` ซึ่งให้ประสิทธิภาพที่ดีกว่าและประสบการณ์การแก้ไขแบบลากวางที่อิงตามส่วนแบบใหม่


#### ตัวอย่าง

<details>

<summary>ป๊อปอัป (รูปแบบสแตนด์อะโลน)</summary>

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

<summary>ปุ่มสำหรับเปิดป๊อปอัป</summary>

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

## แถวปุ่มแนวนอน

![readme-horizontal-buttons-stack](https://github.com/Clooos/Bubble-Card/assets/36499953/8fe89ade-c77a-469b-891f-577e0bb2f46b)

การ์ดนี้เป็นคู่หูที่ดีของการ์ดป๊อปอัป ช่วยให้คุณเปิดป๊อปอัปที่เกี่ยวข้องได้ นอกจากนี้ยังให้คุณเปิดหน้าใดก็ได้ในแดชบอร์ดของคุณ ยิ่งไปกว่านั้น คุณยังสามารถเพิ่มเซนเซอร์ตรวจจับการเคลื่อนไหว/การมีคนอยู่ เพื่อให้ลำดับของปุ่มปรับตามห้องที่คุณเพิ่งเข้าไปได้ การ์ดนี้เลื่อนได้ ยังคงมองเห็นอยู่เสมอ และทำหน้าที่เป็นฟุตเตอร์

> [!IMPORTANT]  
> การ์ดนี้ต้องอยู่เป็นการ์ดสุดท้ายในวิวของคุณ (หลังจากการ์ดและป๊อปอัปทุกอัน) และไม่สามารถอยู่ภายในสแตกใด ๆ ได้

### ตัวเลือกแถวปุ่มแนวนอน

<details>

<summary><b>ตัวเลือก (YAML และคำอธิบาย)</b></summary>

| Name | Type | Requirement | Supported options | Description |
| --- | --- | --- | --- | --- |
| `1_link` | string | **Required** | แฮชของป๊อปอัป (เช่น `'#kitchen'`) โดยมี ' ' หรือลิงก์ใดก็ได้ | ลิงก์ที่จะเปิด |
| `1_name` | string | Optional | ข้อความใดก็ได้ | ชื่อสำหรับปุ่มของคุณ |
| `1_icon` | string | Optional | ไอคอน `mdi:` ใดก็ได้ | ไอคอนสำหรับปุ่มของคุณ |
| `1_entity` | string | Optional | ไฟหรือกลุ่มไฟใดก็ได้ | แสดงสีของไฟนั้นเป็นพื้นหลัง |
| `1_pir_sensor` | string | Optional | เซนเซอร์แบบไบนารีใดก็ได้ | ต้องมีเซนเซอร์ pir อย่างน้อยหนึ่งตัวขึ้นไปสำหรับ `auto_order` แท้จริงแล้วยังใช้ได้กับเอนทิตีประเภทใดก็ได้ ตัวอย่างเช่น คุณสามารถเพิ่มกลุ่มไฟ และลำดับจะเปลี่ยนตามสถานะที่เปลี่ยนล่าสุด |
| `auto_order` | boolean | Optional | `true` หรือ `false` (ค่าเริ่มต้น) | เปลี่ยนลำดับของปุ่มตามเวลาที่เปลี่ยนล่าสุดของ `_pir_sensor` **ต้องเป็น `false` หากคุณไม่มี `_pir_sensor` ใด ๆ ในโค้ดของคุณ** |
| `margin` | string | Optional | ค่า CSS ใดก็ได้ | ใช้สิ่งนี้**เฉพาะ**เมื่อ `horizontal-buttons-stack` ของคุณไม่อยู่กึ่งกลางอย่างเหมาะสมบนมือถือ (เช่น `13px`) |
| `width_desktop` | string | Optional | ค่า CSS ใดก็ได้ | ความกว้างบนเดสก์ท็อป (`100%` เป็นค่าเริ่มต้นบนมือถือ) |
| `is_sidebar_hidden` | boolean | Optional | `true` หรือ `false` (ค่าเริ่มต้น) | แก้ไขตำแหน่งของแถวปุ่มแนวนอน หากแถบด้านข้างถูกซ่อนบนเดสก์ท็อป (เฉพาะเมื่อคุณได้ปรับแก้เพื่อซ่อนมันเอง) |
| `rise_animation` | boolean | Optional | `true` (ค่าเริ่มต้น) หรือ `false` | ตั้งค่านี้เป็น `false` เพื่อปิดแอนิเมชันที่เปิดใช้งานเมื่อโหลดหน้าเสร็จ |
| `highlight_current_view` | boolean | Optional | `true` หรือ `false` (ค่าเริ่มต้น) | เน้นแฮช/วิวปัจจุบันด้วยแอนิเมชันที่นุ่มนวล |
| `hide_gradient` | boolean | Optional | `true` หรือ `false` (ค่าเริ่มต้น) | ตั้งค่านี้เป็น `false` เพื่อซ่อนไล่ระดับสี |

> [!IMPORTANT]  
> ตัวแปรที่ขึ้นต้นด้วยตัวเลขจะกำหนดปุ่มของคุณ เพียงแค่เปลี่ยนตัวเลขนี้เพื่อเพิ่มปุ่มมากขึ้น (ดูตัวอย่างด้านล่าง)

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| Variable | Expected value | Description |
| --- | --- | --- |
| `--bubble-horizontal-buttons-stack-border-radius` | `px` | รัศมีขอบมนสำหรับปุ่มในแถวปุ่มแนวนอน |
| `--bubble-horizontal-buttons-stack-background-color` | `color` | สีพื้นหลังสำหรับปุ่มในแถวปุ่มแนวนอน |

</details>


#### ตัวอย่าง

<details>

<summary>แถวปุ่มแนวนอนที่จัดเรียงตัวเองใหม่ตามเซนเซอร์การมีคนอยู่</summary>

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

## ปุ่ม

![readme-button-without-sub-buttons](https://github.com/Clooos/Bubble-Card/assets/36499953/790cbe3c-bdcc-4242-81ac-48e6ca2f1d46)

การ์ดนี้มีความยืดหยุ่นสูงมาก สามารถใช้เป็น **สวิตช์**, **สไลเดอร์**, **สถานะ** หรือปุ่ม **ชื่อ/ข้อความ** ก็ได้

> [!TIP]
> ### ปุ่มแต่ละประเภทต่างกันอย่างไร
>
> - **ปุ่มสวิตช์ (Switch button):** นี่คือประเภทปุ่มเริ่มต้น โดยค่าเริ่มต้นจะสลับสถานะ (toggle) เอนทิตี และสีพื้นหลังจะเปลี่ยนตามสถานะของเอนทิตีหรือสีของหลอดไฟ คุณสามารถเปลี่ยนการกระทำได้ในส่วน **Tap action on card**
>
> - **ปุ่มสไลเดอร์ (Slider button):** ปุ่มประเภทนี้ให้คุณควบคุมเอนทิตีที่มีช่วงค่าที่ปรับได้ เหมาะสำหรับการหรี่ไฟ และสีที่เติมเต็มจะปรับตามสีของหลอดไฟ คุณยังสามารถใช้เพื่อแสดงค่าต่าง ๆ เช่น ระดับแบตเตอรี่ได้ด้วย
>   เอนทิตีที่รองรับสำหรับสไลเดอร์:
>   - ไฟ (ความสว่าง)
>   - เครื่องเล่นสื่อ (ระดับเสียง)
>   - ม่าน/ประตู (ตำแหน่ง)
>   - พัดลม (เปอร์เซ็นต์)
>   - เครื่องปรับอากาศ (อุณหภูมิ)
>   - Input number และ number (ค่า)
>   - เซนเซอร์แบตเตอรี่ (เปอร์เซ็นต์ อ่านอย่างเดียว)
>
>   คุณยังสามารถใช้กับเอนทิตีใด ๆ ที่มีสถานะเป็นตัวเลขได้ โดยปิดตัวกรองเอนทิตีในส่วน **Slider settings** จากนั้นกำหนดค่า `min` และ `max` ตัวเลือกนี้ใช้อ่านอย่างเดียวเท่านั้น
>
> - **ปุ่มสถานะ (State button):** เหมาะสำหรับแสดงข้อมูลจากเซนเซอร์หรือเอนทิตีใด ๆ เมื่อกดจะแสดงแผง "More info" ของเอนทิตี สีพื้นหลังจะไม่เปลี่ยน
>
> - **ปุ่มชื่อ/ข้อความ (Name/Text button):** ปุ่มประเภทเดียวที่ไม่ต้องใช้เอนทิตี ช่วยให้แสดงข้อความสั้น ชื่อ หรือหัวข้อได้ นอกจากนี้ยังสามารถเพิ่มการกระทำ (actions) ได้ด้วย สีพื้นหลังจะไม่เปลี่ยน

### ตัวเลือกปุ่ม

<details>

<summary><b>ตัวเลือก (YAML และคำอธิบาย)</b></summary>

| ชื่อ | ประเภท | ข้อกำหนด | ตัวเลือกที่รองรับ | คำอธิบาย |
| --- | --- | --- | --- | --- |
| `entity` | string | **จำเป็น** | เอนทิตีใด ๆ | เอนทิตีที่จะควบคุม |
| `button_type` | string | ไม่บังคับ | `switch` (ค่าเริ่มต้น), `slider`, `state` หรือ `name` | พฤติกรรมของปุ่ม |
| `name` | string | ไม่บังคับ | ข้อความใด ๆ | ชื่อของปุ่ม ถ้าไม่กำหนดจะแสดงชื่อเอนทิตี |
| `icon` | string | ไม่บังคับ | ไอคอน `mdi:` ใด ๆ | ไอคอนของปุ่ม ถ้าไม่กำหนดจะแสดงไอคอนของเอนทิตีหรือ `entity-picture` |
| `force_icon` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ให้ความสำคัญกับไอคอนแทนที่จะเป็น `entity-picture` |
| `use_accent_color` | boolean | ไม่บังคับ (ค่าเริ่มต้น `false`) | **สำหรับไฟเท่านั้น** ใช้สี accent ของธีมแทนสีของไฟ                         |
| `show_state` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงหรือซ่อนสถานะของ `entity` |
| `show_name` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนชื่อ |
| `show_icon` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนไอคอน |
| `show_last_changed` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงเวลาที่เปลี่ยนแปลงล่าสุดของ `entity` |
| `show_last_updated` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงเวลาที่อัปเดตล่าสุดของ `entity` |
| `show_attribute` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงแอตทริบิวต์ของ `entity` ใต้ชื่อ (`name`) |
| `attribute` | string | ไม่บังคับ (จำเป็นถ้า `show_attribute` ตั้งเป็น `true`) | แอตทริบิวต์จาก `entity` ของคุณ | แอตทริบิวต์ที่จะแสดง (เช่น `brightness`) |
| `scrolling_effect` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | ให้ข้อความเลื่อนได้เมื่อเนื้อหาเกินขนาดของคอนเทนเนอร์ |
| `button_action` | object | ไม่บังคับ | `tap_action`, `double_tap_action` หรือ `hold_action` ดูด้านล่าง | ให้เปลี่ยนการกระทำเริ่มต้นเมื่อคลิกปุ่ม |
| `tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อคลิกไอคอน ถ้าไม่กำหนดจะใช้ `more-info` |
| `double_tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อดับเบิลคลิกไอคอน ถ้าไม่กำหนดจะใช้ `none` |
| `hold_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อกดค้างไอคอน ถ้าไม่กำหนดจะใช้ `more-info` |
| `card_layout` | string | ไม่บังคับ | `normal` (ค่าเริ่มต้นถ้าไม่อยู่ใน section view), `large` (ค่าเริ่มต้นถ้าอยู่ใน section view), `large-2-rows`, `large-sub-buttons-grid` | เลย์เอาต์การจัดสไตล์ของการ์ด ดู [เลย์เอาต์การ์ด](#เลย์เอาต์การ์ด) |
| `rows` | number | ไม่บังคับ | ตัวเลขใด ๆ | จำนวนแถว (ความสูง) (เช่น `2`) |
| `sub_button` | object | ไม่บังคับ | ดู [ปุ่มย่อย](#ปุ่มย่อย) | เพิ่มปุ่มที่กำหนดเองติดอยู่ทางขวา |

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| ตัวแปร | ค่าที่คาดหวัง | คำอธิบาย |
| --- | --- | --- |
| `--bubble-button-main-background-color` | `color` | สีพื้นหลังหลักสำหรับองค์ประกอบที่รองรับในปุ่ม |
| `--bubble-button-border-radius` | `px` | รัศมีขอบสำหรับปุ่ม |
| `--bubble-button-icon-border-radius` | `px` | รัศมีขอบสำหรับคอนเทนเนอร์ไอคอนของปุ่ม |
| `--bubble-button-icon-background-color` | `color` | สีพื้นหลังสำหรับคอนเทนเนอร์ไอคอนของปุ่ม |
| `--bubble-light-white-color` | `color` | แทนที่สีขาวเริ่มต้นของปุ่ม/สไลเดอร์ไฟ |
| `--bubble-light-color` | `color` | แทนที่สีของปุ่ม/สไลเดอร์ไฟ (แม้แต่ไฟ RGB) |
| `--bubble-button-box-shadow` | ดู [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | เงาของกล่อง (box shadow) สำหรับปุ่ม |

</details>

ตัวเลือกเหล่านี้จะใช้ได้ก็ต่อเมื่อ `button_type` ถูกตั้งเป็น `slider` เท่านั้น

<details>

<summary><b>ตัวเลือกสไลเดอร์ (YAML และคำอธิบาย)</b></summary>

| ชื่อ                  | ประเภท    | ข้อกำหนด                     | คำอธิบาย                                                                                             |
| --------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `min_value`             | number  | ไม่บังคับ                        | ค่าต่ำสุดของสไลเดอร์ สำหรับสไลเดอร์แบบกำหนดเอง                                                    |
| `max_value`             | number  | ไม่บังคับ                        | ค่าสูงสุดของสไลเดอร์ สำหรับสไลเดอร์แบบกำหนดเอง                                                    |
| `step`                  | number  | ไม่บังคับ                        | ค่าขั้นของสไลเดอร์                                                                                           |
| `tap_to_slide`          | boolean | ไม่บังคับ (ค่าเริ่มต้น `false`)      | เปิดใช้พฤติกรรมสไลเดอร์แบบเดิมที่แตะเพื่อเปิดใช้งานสไลเดอร์ แทนการกดค้าง        |
| `relative_slide`        | boolean | ไม่บังคับ (ค่าเริ่มต้น `false` )     | อัปเดตค่าโดยอิงจากค่าเริ่มต้น แทนที่จะอิงจากจุดที่เริ่มสัมผัส                      |
| `read_only_slider`      | boolean | ไม่บังคับ (ค่าเริ่มต้น `false`)      | ทำให้สไลเดอร์อ่านอย่างเดียว จะเปิดใช้งานอัตโนมัติสำหรับบางเอนทิตี เช่น เซนเซอร์                                    |
| `slider_live_update`    | boolean | ไม่บังคับ (ค่าเริ่มต้น `false`)      | สถานะของเอนทิตีจะอัปเดตขณะเลื่อน **ไม่แนะนำให้ใช้ฟีเจอร์นี้กับทุกเอนทิตี**        |
| `slider_fill_orientation` | string | ไม่บังคับ | `left`, `right`, `top` หรือ `bottom` | เปลี่ยนทิศทางการเติมเต็มของสไลเดอร์ จากซ้ายไปขวาเมื่อไม่ได้กำหนด และกลับด้านใน[ภาษาที่เขียนจากขวาไปซ้าย](#การแปลภาษา) |
| `slider_value_position` | string | ไม่บังคับ | `right`, `left`, `center` หรือ `hidden` | ตำแหน่งของการแสดงค่า อยู่ทางขวาเมื่อไม่ได้กำหนด และอยู่ทางซ้ายใน[ภาษาที่เขียนจากขวาไปซ้าย](#การแปลภาษา) |
| `invert_slider_value` | boolean | ไม่บังคับ (ค่าเริ่มต้น `false`) | กลับทิศทางของสไลเดอร์ (เติม 100% เท่ากับค่าต่ำสุด) ไม่รองรับสำหรับสไลเดอร์สี |
| `light_slider_type` | string | ไม่บังคับ | `brightness` (ค่าเริ่มต้น), `hue`, `saturation`, `white_temp` | **สำหรับไฟเท่านั้น** เลือกโหมดของสไลเดอร์ |
| `cover_slider_type` | string | ไม่บังคับ | `position` (ค่าเริ่มต้น), `tilt_position` | **สำหรับม่าน/ประตูเท่านั้น** เลือกโหมดของสไลเดอร์ (ตำแหน่งหรือการเอียง) |
| `hue_force_saturation` | boolean | ไม่บังคับ (ค่าเริ่มต้น `false`) | **สำหรับไฟเท่านั้น (โหมด Hue)** บังคับความอิ่มตัวของสีเมื่อปรับ Hue |
| `hue_force_saturation_value` | number | ไม่บังคับ (ค่าเริ่มต้น `100`) | **สำหรับไฟเท่านั้น (โหมด Hue)** ค่าความอิ่มตัวของสีที่บังคับ (0-100) |
| `use_accent_color` | boolean | ไม่บังคับ (ค่าเริ่มต้น `false`) | **สำหรับไฟเท่านั้น (โหมด Brightness)** ใช้สี accent ของธีมแทนสีของไฟ |
| `allow_light_slider_to_0` | boolean | ไม่บังคับ (ค่าเริ่มต้น `false`)    | **สำหรับไฟเท่านั้น** อนุญาตให้สไลเดอร์ลดลงถึง 0% ซึ่งจะปิดไฟ ใช้ร่วมกับ `tap_to_slide` ไม่ได้ |
| `light_transition`      | boolean | ไม่บังคับ (ค่าเริ่มต้น `false`)      | **สำหรับไฟเท่านั้น** เปิดใช้ทรานซิชันความสว่างแบบนุ่มนวลสำหรับไฟที่รองรับ                           |
| `light_transition_time` | number  | ไม่บังคับ (ค่าเริ่มต้น `500`)        | **สำหรับไฟเท่านั้น** เวลาทรานซิชันเป็นมิลลิวินาที ต้องใช้ร่วมกับ `light_transition: true`            |

</details>

#### ตัวอย่าง

<details>

<summary>ปุ่มสไลเดอร์ที่ควบคุมความสว่างของไฟ</summary>

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

<summary>ปุ่มที่มีตัวเลือกเพิ่มเติม</summary>

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

## เครื่องเล่นสื่อ

![readme-media-player](https://github.com/Clooos/Bubble-Card/assets/36499953/c7ee0752-00e3-4edf-8e1c-983fbd29b5f3)

การ์ดนี้ให้คุณควบคุมเอนทิตีเครื่องเล่นสื่อได้

### ตัวเลือกเครื่องเล่นสื่อ

<details>

<summary><b>ตัวเลือก (YAML และคำอธิบาย)</b></summary>

| ชื่อ | ประเภท | ข้อกำหนด | ตัวเลือกที่รองรับ | คำอธิบาย |
| --- | --- | --- | --- | --- |
| `entity` | string | **จำเป็น** | เครื่องเล่นสื่อใด ๆ | เครื่องเล่นสื่อที่จะควบคุม |
| `name` | string | ไม่บังคับ | ข้อความใด ๆ | ชื่อของเครื่องเล่นสื่อ ถ้าไม่กำหนดจะแสดงชื่อเอนทิตี |
| `icon` | string | ไม่บังคับ | ไอคอน `mdi:` ใด ๆ | ไอคอนของเครื่องเล่นสื่อ ถ้าไม่กำหนดจะแสดงไอคอนของเอนทิตีหรือ `entity-picture` |
| `force_icon` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ให้ความสำคัญกับไอคอนแทนที่จะเป็น `entity-picture` |
| `show_state` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงหรือซ่อนสถานะของ `entity` |
| `show_name` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนชื่อ |
| `show_icon` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนไอคอน |
| `show_last_changed` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงเวลาที่เปลี่ยนแปลงล่าสุดของ `entity` |
| `show_last_updated` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงเวลาที่อัปเดตล่าสุดของ `entity` |
| `show_attribute` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงแอตทริบิวต์ของ `entity` ใต้ชื่อ (`name`) |
| `attribute` | string | ไม่บังคับ (จำเป็นถ้า `show_attribute` ตั้งเป็น `true`) | แอตทริบิวต์จาก `entity` ของคุณ | แอตทริบิวต์ที่จะแสดง (เช่น `brightness`) |
| `scrolling_effect` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | ให้ข้อความเลื่อนได้เมื่อเนื้อหาเกินขนาดของคอนเทนเนอร์ |
| `min_volume` | number | ไม่บังคับ | ตัวเลขใด ๆ | ค่าต่ำสุดของสไลเดอร์ระดับเสียง |
| `max_volume` | number | ไม่บังคับ | ตัวเลขใด ๆ | ค่าสูงสุดของสไลเดอร์ระดับเสียง |
| `cover_background` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ใช้ปกสื่อแบบเบลอเป็นพื้นหลังของการ์ด |
| `button_action` | object | ไม่บังคับ | `tap_action`, `double_tap_action` หรือ `hold_action` ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | ให้เปลี่ยนการกระทำเริ่มต้นเมื่อคลิกปุ่ม |
| `tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อคลิกไอคอน ถ้าไม่กำหนดจะใช้ `more-info` |
| `double_tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อดับเบิลคลิกไอคอน ถ้าไม่กำหนดจะใช้ `none` |
| `hold_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อกดค้างไอคอน ถ้าไม่กำหนดจะใช้ `more-info` |
| `main_buttons_position` | string | ไม่บังคับ | `default` หรือ `bottom` | ย้ายปุ่มควบคุมปกไปด้านล่าง (ตรึงตำแหน่ง) |
| `main_buttons_full_width` | boolean | ไม่บังคับ | `true` หรือ `false` | ทำให้ปุ่มควบคุมด้านล่างเต็มความกว้าง (ค่าเริ่มต้น: `true` เมื่อ position เป็น `bottom`) |
| `main_buttons_alignment` | string | ไม่บังคับ | `end` (ค่าเริ่มต้น), `center`, `start`, `space-between` | การจัดตำแหน่งปุ่มควบคุมด้านล่างเมื่อไม่เต็มความกว้าง |
| `card_layout` | string | ไม่บังคับ | `normal` (ค่าเริ่มต้นถ้าไม่อยู่ใน section view), `large` (ค่าเริ่มต้นถ้าอยู่ใน section view), `large-2-rows`, `large-sub-buttons-grid` | เลย์เอาต์การจัดสไตล์ของการ์ด ดู [เลย์เอาต์การ์ด](#เลย์เอาต์การ์ด) |
| `rows` | number | ไม่บังคับ | ตัวเลขใด ๆ | จำนวนแถว (ความสูง) (เช่น `2`) |
| `sub_button` | object | ไม่บังคับ | ดู [ปุ่มย่อย](#ปุ่มย่อย) | เพิ่มปุ่มที่กำหนดเองติดอยู่ทางขวา |
| `hide` | object | ไม่บังคับ | ดูด้านล่าง | ซ่อนปุ่มจากการ์ด |

#### ตัวเลือกการซ่อน

| ชื่อ | ประเภท | ข้อกำหนด | ตัวเลือกที่รองรับ | คำอธิบาย |
| --- | --- | --- | --- | --- |
| `play_pause_button` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ซ่อนปุ่มเล่น/หยุดชั่วคราว |
| `volume_button` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ซ่อนปุ่มระดับเสียง |
| `previous_button` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ซ่อนปุ่มก่อนหน้า |
| `next_button` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ซ่อนปุ่มถัดไป |
| `power_button` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ซ่อนปุ่มเปิด/ปิด |

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| ตัวแปร | ค่าที่คาดหวัง | คำอธิบาย |
| --- | --- | --- |
| `--bubble-media-player-main-background-color` | `color` | สีพื้นหลังหลักสำหรับเครื่องเล่นสื่อ |
| `--bubble-media-player-border-radius` | `px` | รัศมีขอบสำหรับเครื่องเล่นสื่อ |
| `--bubble-media-player-buttons-border-radius` | `px` | รัศมีขอบสำหรับปุ่มของเครื่องเล่นสื่อ |
| `--bubble-media-player-slider-background-color` | `color` | สีพื้นหลังสำหรับสไลเดอร์ระดับเสียง |
| `--bubble-media-player-icon-border-radius` | `px` | รัศมีขอบสำหรับคอนเทนเนอร์ไอคอนของเครื่องเล่นสื่อ |
| `--bubble-media-player-icon-background-color` | `color` | สีพื้นหลังสำหรับคอนเทนเนอร์ไอคอนของเครื่องเล่นสื่อ |
| `--bubble-media-player-box-shadow` | ดู [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | เงาของกล่อง (box shadow) สำหรับเครื่องเล่นสื่อ |

</details>


#### ตัวอย่าง

<details>

<summary>เครื่องเล่นสื่อพร้อมตัวเลือกทั้งหมด</summary>

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

## ม่าน/ประตู

![readme-cover-bubble-card](https://github.com/user-attachments/assets/9eb46c69-ee40-4dc7-88c7-9073f9deda12)

การ์ดนี้ให้คุณควบคุมเอนทิตี `cover` ของคุณได้

### ตัวเลือกม่าน/ประตู

<details>

<summary><b>ตัวเลือก (YAML และคำอธิบาย)</b></summary>

| ชื่อ | ประเภท | ข้อกำหนด | ตัวเลือกที่รองรับ | คำอธิบาย |
| --- | --- | --- | --- | --- |
| `entity` | string | **จำเป็น** | ม่าน/ประตูใด ๆ | ม่าน/ประตูที่จะควบคุม |
| `name` | string | ไม่บังคับ | ข้อความใด ๆ | ชื่อของม่าน/ประตู ถ้าไม่กำหนดจะแสดงชื่อเอนทิตี |
| `force_icon` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ให้ความสำคัญกับไอคอนแทนที่จะเป็น `entity-picture` |
| `show_state` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงหรือซ่อนสถานะของ `entity` |
| `show_name` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนชื่อ |
| `show_icon` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนไอคอน |
| `show_last_changed` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงเวลาที่เปลี่ยนแปลงล่าสุดของ `entity` |
| `show_last_updated` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงเวลาที่อัปเดตล่าสุดของ `entity` |
| `show_attribute` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงแอตทริบิวต์ของ `entity` ใต้ชื่อ (`name`) |
| `attribute` | string | ไม่บังคับ (จำเป็นถ้า `show_attribute` ตั้งเป็น `true`) | แอตทริบิวต์จาก `entity` ของคุณ | แอตทริบิวต์ที่จะแสดง (เช่น `brightness`) |
| `scrolling_effect` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | ให้ข้อความเลื่อนได้เมื่อเนื้อหาเกินขนาดของคอนเทนเนอร์ |
| `icon_open` | string | ไม่บังคับ | ไอคอน `mdi:` ใด ๆ | ไอคอนสำหรับม่าน/ประตูที่เปิดอยู่ ถ้าไม่กำหนดจะแสดงไอคอนเปิดเริ่มต้น |
| `icon_close` | string | ไม่บังคับ | ไอคอน `mdi:` ใด ๆ | ไอคอนสำหรับม่าน/ประตูที่ปิดอยู่ ถ้าไม่กำหนดจะแสดงไอคอนปิดเริ่มต้น |
| `icon_up` | string | ไม่บังคับ | ไอคอน `mdi:` ใด ๆ | ไอคอนสำหรับปุ่มเปิดม่าน/ประตู ถ้าไม่กำหนดจะแสดงไอคอนเปิดเริ่มต้น |
| `icon_down` | string | ไม่บังคับ | ไอคอน `mdi:` ใด ๆ | ไอคอนสำหรับปุ่มปิดม่าน/ประตู ถ้าไม่กำหนดจะแสดงไอคอนปิดเริ่มต้น |
| `open_service` | string | ไม่บังคับ | เซอร์วิสหรือสคริปต์ใด ๆ | เซอร์วิสสำหรับเปิดม่าน/ประตู ค่าเริ่มต้นคือ `cover.open_cover` |
| `stop_service` | string | ไม่บังคับ | เซอร์วิสหรือสคริปต์ใด ๆ | เซอร์วิสสำหรับหยุดม่าน/ประตู ค่าเริ่มต้นคือ `cover.stop_cover` |
| `close_service` | string | ไม่บังคับ | เซอร์วิสหรือสคริปต์ใด ๆ | เซอร์วิสสำหรับปิดม่าน/ประตู ค่าเริ่มต้นคือ `cover.close_cover` |
| `tilt_buttons` | string | ไม่บังคับ | `top` (ค่าเริ่มต้น), `bottom`, `left`, `right`, `hidden` | ตำแหน่งของปุ่มควบคุมการเอียง (แสดงเฉพาะเมื่อม่าน/ประตูรองรับการเอียง) |
| `open_tilt_service` | string | ไม่บังคับ | เซอร์วิสหรือสคริปต์ใด ๆ | เซอร์วิสสำหรับเปิดการเอียง ค่าเริ่มต้นคือ `cover.open_cover_tilt` |

| `close_tilt_service` | string | ไม่บังคับ | เซอร์วิสหรือสคริปต์ใด ๆ | เซอร์วิสสำหรับปิดการเอียง ค่าเริ่มต้นคือ `cover.close_cover_tilt` |
| `button_action` | object | ไม่บังคับ | `tap_action`, `double_tap_action` หรือ `hold_action` ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | ให้เปลี่ยนการกระทำเริ่มต้นเมื่อคลิกปุ่ม |
| `tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อคลิกไอคอน ถ้าไม่กำหนดจะใช้ `more-info` |
| `double_tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อดับเบิลคลิกไอคอน ถ้าไม่กำหนดจะใช้ `none` |
| `hold_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อกดค้างไอคอน ถ้าไม่กำหนดจะใช้ `more-info` |
| `main_buttons_position` | string | ไม่บังคับ | `default` หรือ `bottom` | ย้ายปุ่มควบคุมสื่อไปด้านล่าง (ตรึงตำแหน่ง) |
| `main_buttons_full_width` | boolean | ไม่บังคับ | `true` หรือ `false` | ทำให้ปุ่มควบคุมด้านล่างเต็มความกว้าง (ค่าเริ่มต้น: `true` เมื่อ position เป็น `bottom`) |
| `main_buttons_alignment` | string | ไม่บังคับ | `end` (ค่าเริ่มต้น), `center`, `start`, `space-between` | การจัดตำแหน่งปุ่มควบคุมด้านล่างเมื่อไม่เต็มความกว้าง |
| `card_layout` | string | ไม่บังคับ | `normal` (ค่าเริ่มต้นถ้าไม่อยู่ใน section view), `large` (ค่าเริ่มต้นถ้าอยู่ใน section view), `large-2-rows`, `large-sub-buttons-grid` | เลย์เอาต์การจัดสไตล์ของการ์ด ดู [เลย์เอาต์การ์ด](#เลย์เอาต์การ์ด) |
| `rows` | number | ไม่บังคับ | ตัวเลขใด ๆ | จำนวนแถว (ความสูง) (เช่น `2`) |
| `sub_button` | object | ไม่บังคับ | ดู [ปุ่มย่อย](#ปุ่มย่อย) | เพิ่มปุ่มที่กำหนดเองติดอยู่ทางขวา |

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| ตัวแปร | ค่าที่คาดหวัง | คำอธิบาย |
| --- | --- | --- |
| `--bubble-cover-main-background-color` | `color` | สีพื้นหลังหลักสำหรับองค์ประกอบที่รองรับในการ์ดม่าน/ประตู |
| `--bubble-cover-border-radius` | `px` | รัศมีขอบสำหรับการ์ดม่าน/ประตู |
| `--bubble-cover-icon-border-radius` | `px` | รัศมีขอบสำหรับคอนเทนเนอร์ไอคอนของการ์ดม่าน/ประตู |
| `--bubble-cover-icon-background-color` | `color` | สีพื้นหลังสำหรับคอนเทนเนอร์ไอคอนของการ์ดม่าน/ประตู |
| `--bubble-cover-box-shadow` | ดู [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | เงาของกล่อง (box shadow) สำหรับการ์ดม่าน/ประตู |
| `--bubble-button-box-shadow` | ดู [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | เงาของกล่อง (box shadow) สำหรับปุ่มในการ์ดม่าน/ประตู |

</details>


#### ตัวอย่าง

<details>

<summary>การ์ดที่ควบคุมมู่ลี่แบบม้วนได้</summary>

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

## เลือก

![readme-select-card](https://github.com/user-attachments/assets/f1220aaf-da5a-4ec0-b74e-31905264ae0a)

การ์ดนี้ให้คุณเพิ่มเมนูแบบดรอปดาวน์สำหรับเอนทิตี `input_select` / `select` ได้ การ์ดนี้ยังรองรับปุ่มย่อยและฟีเจอร์ทั่วไปของ Bubble Card ทั้งหมด

> [!TIP]
> คุณสามารถมีปุ่มย่อยแบบเลือกได้เช่นกันหากต้องการ ฟีเจอร์นี้ใช้ได้กับทุกการ์ดที่รองรับปุ่มย่อย

### ตัวเลือกเลือก

<details>

<summary><b>ตัวเลือก (YAML และคำอธิบาย)</b></summary>

| ชื่อ | ประเภท | ข้อกำหนด | ตัวเลือกที่รองรับ | คำอธิบาย |
| --- | --- | --- | --- | --- |
| `entity` | string | **จำเป็น** | เอนทิตีใด ๆ | เอนทิตีที่จะควบคุม |
| `name` | string | ไม่บังคับ | ข้อความใด ๆ | ชื่อของตัวเลือก ถ้าไม่กำหนดจะแสดงชื่อเอนทิตี |
| `icon` | string | ไม่บังคับ | ไอคอน `mdi:` ใด ๆ | ไอคอนของตัวเลือก ถ้าไม่กำหนดจะแสดงไอคอนของเอนทิตีหรือ `entity-picture` |
| `force_icon` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ให้ความสำคัญกับไอคอนแทนที่จะเป็น `entity-picture` |
| `show_state` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงหรือซ่อนสถานะของ `entity` |
| `show_name` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนชื่อ |
| `show_icon` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนไอคอน |
| `show_last_changed` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงเวลาที่เปลี่ยนแปลงล่าสุดของ `entity` |
| `show_last_updated` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงเวลาที่อัปเดตล่าสุดของ `entity` |
| `show_attribute` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงแอตทริบิวต์ของ `entity` ใต้ชื่อ (`name`) |
| `attribute` | string | ไม่บังคับ (จำเป็นถ้า `show_attribute` ตั้งเป็น `true`) | แอตทริบิวต์จาก `entity` ของคุณ | แอตทริบิวต์ที่จะแสดง (เช่น `brightness`) |
| `scrolling_effect` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | ให้ข้อความเลื่อนได้เมื่อเนื้อหาเกินขนาดของคอนเทนเนอร์ |
| `tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อคลิกไอคอน ถ้าไม่กำหนดจะใช้ `more-info` |
| `double_tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อดับเบิลคลิกไอคอน ถ้าไม่กำหนดจะใช้ `none` |
| `hold_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อกดค้างไอคอน ถ้าไม่กำหนดจะใช้ `more-info` |
| `card_layout` | string | ไม่บังคับ | `normal` (ค่าเริ่มต้นถ้าไม่อยู่ใน section view), `large` (ค่าเริ่มต้นถ้าอยู่ใน section view), `large-2-rows`, `large-sub-buttons-grid` | เลย์เอาต์การจัดสไตล์ของการ์ด ดู [เลย์เอาต์การ์ด](#เลย์เอาต์การ์ด) |
| `rows` | number | ไม่บังคับ | ตัวเลขใด ๆ | จำนวนแถว (ความสูง) (เช่น `2`) |
| `sub_button` | object | ไม่บังคับ | ดู [ปุ่มย่อย](#ปุ่มย่อย) | เพิ่มปุ่มที่กำหนดเองติดอยู่ทางขวา |

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| ตัวแปร | ค่าที่คาดหวัง | คำอธิบาย |
| --- | --- | --- |
| `--bubble-select-main-background-color` | `color` | สีพื้นหลังหลักสำหรับองค์ประกอบที่รองรับในการ์ดเลือก |
| `--bubble-select-background-color` | `color` | สีพื้นหลังสำหรับการ์ดเลือก |
| `--bubble-select-list-border-radius` | `px` | รัศมีขอบสำหรับเมนูดรอปดาวน์ในการ์ด |
| `--bubble-select-list-item-accent-color` | `color` | สี accent สำหรับรายการที่เลือก |
| `--bubble-select-list-background-color` | `color` | สีพื้นหลังสำหรับเมนูดรอปดาวน์ในการ์ด |
| `--bubble-select-list-width` | `px` | ความกว้างของเมนูดรอปดาวน์ในการ์ด |
| `--bubble-select-arrow-background-color` | `color` | สีพื้นหลังสำหรับลูกศรดรอปดาวน์ |
| `--bubble-select-button-border-radius` | `px` | รัศมีขอบสำหรับปุ่มเลือก |
| `--bubble-select-border-radius` | `px` | รัศมีขอบสำหรับการ์ดเลือก |
| `--bubble-select-icon-border-radius` | `px` | รัศมีขอบสำหรับคอนเทนเนอร์ไอคอนของการ์ดเลือก |
| `--bubble-select-icon-background-color` | `color` | สีพื้นหลังสำหรับคอนเทนเนอร์ไอคอนของการ์ดเลือก |
| `--bubble-select-box-shadow` | ดู [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | เงาของกล่อง (box shadow) สำหรับการ์ดเลือก |

</details>


#### ตัวอย่าง

<details>

<summary>การ์ดเลือกพร้อมรายการฉาก (scenes)</summary>

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

## ปรับอากาศ

![readme-climate-card](https://github.com/user-attachments/assets/59145c69-2f85-4ee7-a290-e848971e1925)

การ์ดนี้ให้คุณควบคุมเอนทิตี `climate` ของคุณได้

> [!TIP]
> เมนูเลือกโหมด (mode selection) เป็น [ปุ่มย่อย](#ปุ่มย่อย) ที่ถูกเพิ่มโดยอัตโนมัติเมื่อสร้างการ์ด คุณสามารถแก้ไขหรือลบมันได้ตามต้องการ

### ตัวเลือกปรับอากาศ

<details>

<summary><b>ตัวเลือก (YAML และคำอธิบาย)</b></summary>

| ชื่อ                     | ประเภท    | ข้อกำหนด                         | ตัวเลือกที่รองรับ                                  | คำอธิบาย                                                                                                     |
|--------------------------|---------|-------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `entity`                | string  | **จำเป็น**                        | เอนทิตีปรับอากาศ                                   | เอนทิตีที่จะควบคุม (เช่น `climate.living_room`)                                                            |
| `name`                  | string  | ไม่บังคับ                            | ข้อความใด ๆ                                       | ชื่อที่กำหนดเองสำหรับการ์ด ถ้าไม่กำหนดจะแสดงชื่อเอนทิตี                                    |
| `icon`                  | string  | ไม่บังคับ                            | ไอคอน `mdi:` ใด ๆ                                  | ไอคอนที่กำหนดเองสำหรับการ์ด ถ้าไม่กำหนดจะใช้ไอคอนของเอนทิตีหรือ `entity-picture`                   |
| `force_icon`            | boolean | ไม่บังคับ                            | `true` หรือ `false` (ค่าเริ่มต้น)                     | ให้ความสำคัญกับไอคอนแทนที่จะเป็น `entity-picture`                                                           |
| `show_state`            | boolean | ไม่บังคับ                            | `true` หรือ `false` (ค่าเริ่มต้น)                     | แสดงหรือซ่อนสถานะปัจจุบันของ `entity`                                                                 |
| `show_name`             | boolean | ไม่บังคับ                            | `true` (ค่าเริ่มต้น) หรือ `false`                     | แสดงหรือซ่อนชื่อของเอนทิตี                                                                            |
| `show_icon`             | boolean | ไม่บังคับ                            | `true` (ค่าเริ่มต้น) หรือ `false`                     | แสดงหรือซ่อนไอคอน                                                                                          |
| `hide_target_temp_low`  | boolean | ไม่บังคับ (เฉพาะเอนทิตีที่รองรับ `target_temp_low`) | `true` หรือ `false` (ค่าเริ่มต้น) | ซ่อนตัวควบคุมอุณหภูมิเป้าหมายต่ำสุด ถ้า `entity` รองรับ                                          |
| `hide_target_temp_high` | boolean | ไม่บังคับ (เฉพาะเอนทิตีที่รองรับ `target_temp_high`)| `true` หรือ `false` (ค่าเริ่มต้น) | ซ่อนตัวควบคุมอุณหภูมิเป้าหมายสูงสุด ถ้า `entity` รองรับ                                         |
| `state_color`           | boolean | ไม่บังคับ                            | `true` หรือ `false` (ค่าเริ่มต้น)                     | ใช้สีพื้นหลังคงที่เมื่อเอนทิตีปรับอากาศเปิดอยู่ (ON)                                                              |
| `step` | number | ไม่บังคับ | ตัวเลขใด ๆ | ค่าขั้นของอุณหภูมิ |
| `min_temp` | number | ไม่บังคับ | ตัวเลขใด ๆ | อุณหภูมิต่ำสุด |
| `max_temp` | number | ไม่บังคับ | ตัวเลขใด ๆ | อุณหภูมิสูงสุด |
| `button_action` | object | ไม่บังคับ | `tap_action`, `double_tap_action` หรือ `hold_action` ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | ให้เปลี่ยนการกระทำเริ่มต้นเมื่อคลิกปุ่ม |
| `tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อคลิกไอคอน ถ้าไม่กำหนดจะใช้ `more-info` |
| `double_tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อดับเบิลคลิกไอคอน ถ้าไม่กำหนดจะใช้ `none` |
| `hold_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อกดค้างไอคอน ถ้าไม่กำหนดจะใช้ `more-info` |                              |
| `main_buttons_position` | string | ไม่บังคับ | `default` หรือ `bottom` | ย้ายปุ่มควบคุมของเครื่องปรับอากาศไปด้านล่าง (ตรึงตำแหน่ง) |
| `main_buttons_full_width` | boolean | ไม่บังคับ | `true` หรือ `false` | ทำให้ปุ่มควบคุมด้านล่างเต็มความกว้าง (ค่าเริ่มต้น: `true` เมื่อ position เป็น `bottom`) |
| `main_buttons_alignment` | string | ไม่บังคับ | `end` (ค่าเริ่มต้น), `center`, `start`, `space-between` | การจัดตำแหน่งปุ่มควบคุมด้านล่างเมื่อไม่เต็มความกว้าง |
| `card_layout` | string | ไม่บังคับ | `normal` (ค่าเริ่มต้นถ้าไม่อยู่ใน section view), `large` (ค่าเริ่มต้นถ้าอยู่ใน section view), `large-2-rows`, `large-sub-buttons-grid` | เลย์เอาต์การจัดสไตล์ของการ์ด ดู [เลย์เอาต์การ์ด](#เลย์เอาต์การ์ด) |
| `rows` | number | ไม่บังคับ | ตัวเลขใด ๆ | จำนวนแถว (ความสูง) (เช่น `2`) |
| `sub_button`            | object  | ไม่บังคับ                            | ดู [ปุ่มย่อย](#ปุ่มย่อย)                | เพิ่มปุ่มที่กำหนดเองติดอยู่ทางขวา มีประโยชน์สำหรับเมนูเลือกโหมดปรับอากาศ                                  |

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| ตัวแปร | ค่าที่คาดหวัง | คำอธิบาย |
| --- | --- | --- |
| `--bubble-climate-main-background-color` | `color` | สีพื้นหลังหลักสำหรับองค์ประกอบที่รองรับในการ์ดปรับอากาศ |
| `--bubble-climate-border-radius` | `px` | รัศมีขอบสำหรับองค์ประกอบที่รองรับในการ์ดปรับอากาศ |
| `--bubble-climate-button-background-color` | `color` | สีพื้นหลังสำหรับปุ่มของการ์ดปรับอากาศ |
| `--bubble-climate-icon-border-radius` | `px` | รัศมีขอบสำหรับคอนเทนเนอร์ไอคอนของการ์ดปรับอากาศ |
| `--bubble-state-climate-fan-only-color` | `color` | สีทับซ้อนสำหรับสถานะ fan-only |
| `--bubble-state-climate-dry-color` | `color` | สีทับซ้อนสำหรับสถานะ dry |
| `--bubble-state-climate-cool-color` | `color` | สีทับซ้อนสำหรับสถานะ cool |
| `--bubble-state-climate-heat-color` | `color` | สีทับซ้อนสำหรับสถานะ heat |
| `--bubble-state-climate-auto-color` | `color` | สีทับซ้อนสำหรับสถานะ auto |
| `--bubble-state-climate-heat-cool-color` | `color` | สีทับซ้อนสำหรับสถานะ heat-cool |
| `--bubble-climate-accent-color` | `color` | สี accent สำหรับการ์ดปรับอากาศ |
| `--bubble-climate-box-shadow` | ดู [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | เงาของกล่อง (box shadow) สำหรับคอนเทนเนอร์ปรับอากาศ |

</details>


#### ตัวอย่าง

<details>

<summary>การ์ดปรับอากาศพร้อมเมนูดรอปดาวน์เลือกโหมด HVAC</summary>

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

## ปฏิทิน

![readme-calendar-bubble-card](https://github.com/user-attachments/assets/8b6a231c-c99b-4d7a-8197-b7fd49952f62)

การ์ดนี้ให้คุณแสดงเอนทิตีปฏิทินของคุณได้ เนื้อหาสามารถเลื่อนดูได้ ทำให้คุณเรียกดูกิจกรรมที่กำลังจะมาถึงได้ง่าย ๆ

### ตัวเลือกปฏิทิน

<details>

<summary><b>ตัวเลือก (YAML และคำอธิบาย)</b></summary>

| ชื่อ                | ประเภท    | ข้อกำหนด  | ตัวเลือกที่รองรับ                               | คำอธิบาย                                                                             |
|---------------------|---------|--------------|-------------------------------------------------|-----------------------------------------------------------------------------------------|
| `days`              | number  | ไม่บังคับ     | ตัวเลขใด ๆ (ขั้นต่ำ: 1)                        | จำนวนวันของปฏิทินที่จะดึงกิจกรรม นับจากตอนนี้จนถึงสิ้นสุดวันที่ N (ค่าเริ่มต้น: 7) |
| `entities`          | object  | **จำเป็น** | อ็อบเจกต์เอนทิตีปฏิทิน (ดูด้านล่าง)            | เอนทิตีที่จะควบคุม (เช่น `calendar.main_calendar`)                                 |
| `entities.entity`   | string  | **จำเป็น** | เอนทิตีปฏิทิน                               | เอนทิตีปฏิทินที่จะแสดง                                                          |
| `entities.color`    | string  | ไม่บังคับ     | สี                                         | สีที่กำหนดเองสำหรับชิปปฏิทิน ถ้าไม่กำหนดจะเลือกสีอัตโนมัติ |
| `days`              | number  | ไม่บังคับ     | ตัวเลขใด ๆ (ขั้นต่ำ: 1)                         | จำนวนวันของปฏิทินที่จะดึงกิจกรรม นับจากตอนนี้จนถึงสิ้นสุดวันที่ N (ค่าเริ่มต้น: 7) |
| `limit`             | number  | ไม่บังคับ     | ตัวเลข                                        | จำนวนกิจกรรมที่จะแสดงบนการ์ด                                  |
| `show_end`          | boolean | ไม่บังคับ     | `true` หรือ `false` (ค่าเริ่มต้น)                     | แสดงหรือซ่อนเวลาสิ้นสุดของกิจกรรม                                                    |
| `show_progress`     | boolean | ไม่บังคับ     | `true` (ค่าเริ่มต้น) หรือ `false`                     | แสดงหรือซ่อนแถบความคืบหน้าของกิจกรรม                                                     |
| `show_started_events`| boolean | ไม่บังคับ     | `true` (ค่าเริ่มต้น) หรือ `false`                     | แสดงหรือซ่อนกิจกรรมที่กำลังดำเนินอยู่ กิจกรรมหลายวันจะถูกพิจารณาทีละวัน จึงซ่อนเฉพาะวันที่กำลังดำเนินอยู่ ส่วนวันถัดไปยังคงแสดงอยู่ |
| `scrolling_effect`  | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | ให้ข้อความเลื่อนได้เมื่อเนื้อหาเกินขนาดของคอนเทนเนอร์ |
| `event_action` | object | ไม่บังคับ | `tap_action`, `double_tap_action` หรือ `hold_action` ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | ให้เพิ่มการกระทำเมื่อคลิกกิจกรรม |
| `tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อคลิกวัน ถ้าไม่กำหนดจะใช้ `none` |
| `double_tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อดับเบิลคลิกวัน ถ้าไม่กำหนดจะใช้ `none` |
| `hold_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทการกระทำเมื่อกดค้างวัน ถ้าไม่กำหนดจะใช้ `none` |
| `card_layout` | string | ไม่บังคับ | `normal` (ค่าเริ่มต้นถ้าไม่อยู่ใน section view), `large` (ค่าเริ่มต้นถ้าอยู่ใน section view), `large-2-rows`, `large-sub-buttons-grid` | เลย์เอาต์การจัดสไตล์ของการ์ด ดู [เลย์เอาต์การ์ด](#เลย์เอาต์การ์ด) |
| `rows` | number | ไม่บังคับ | ตัวเลขใด ๆ | จำนวนแถว (ความสูง) (เช่น `2`) |
| `sub_button` | object | ไม่บังคับ | ดู [ปุ่มย่อย](#ปุ่มย่อย) | เพิ่มปุ่มที่กำหนดเองติดอยู่ทางขวา |

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| ตัวแปร                                  | ค่าที่คาดหวัง | คำอธิบาย                                                        |
| ----------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `--bubble-calendar-main-background-color` | `color`        | สีพื้นหลังหลักสำหรับองค์ประกอบที่รองรับในการ์ดปฏิทิน  |
| `--bubble-calendar-border-radius`         | `px`           | รัศมีขอบสำหรับองค์ประกอบที่รองรับในการ์ดปฏิทิน |
| `--bubble-calendar-height`                | `px`           | ความสูงของการ์ดปฏิทิน                                        |

</details>

#### ตัวอย่าง

<details>

<summary>การ์ดปฏิทินที่จำกัดจำนวนกิจกรรม</summary>

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

<summary>การ์ดปฏิทินพร้อมเวลาสิ้นสุดและแถบความคืบหน้า</summary>

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


## ตัวคั่น

![readme-separator](https://github.com/Clooos/Bubble-Card/assets/36499953/7e416a34-b95e-4a03-a200-4b3aa04f560d)

การ์ดนี้เป็นตัวคั่นแบบง่ายสำหรับแบ่งป๊อปอัปของคุณออกเป็นหมวดหมู่ / ส่วนต่างๆ เช่น ไฟ, อุปกรณ์, ม่าน/ประตู, การตั้งค่า, ระบบอัตโนมัติ...

### ตัวเลือกตัวคั่น

<details>

<summary><b>ตัวเลือก (YAML + คำอธิบาย)</b></summary>

| ชื่อ | ประเภท | ข้อกำหนด | ตัวเลือกที่รองรับ | คำอธิบาย |
| --- | --- | --- | --- | --- |
| `name` | string | ไม่บังคับแต่แนะนำ | ข้อความใดก็ได้ | ชื่อสำหรับตัวคั่นของคุณ |
| `icon` | string | ไม่บังคับแต่แนะนำ | ไอคอน `mdi:` ใดก็ได้ | ไอคอนสำหรับตัวคั่นของคุณ |
| `card_layout` | string | ไม่บังคับ | `normal` (ค่าเริ่มต้นถ้าไม่ได้อยู่ในมุมมองส่วน), `large` (ค่าเริ่มต้นถ้าอยู่ในมุมมองส่วน), `large-2-rows`, `large-sub-buttons-grid` | เลย์เอาต์การจัดสไตล์ของการ์ด ดู [เลย์เอาต์การ์ด](#เลย์เอาต์การ์ด) |
| `rows` | number | ไม่บังคับ | ตัวเลขใดก็ได้ | จำนวนแถว (ความสูง) (เช่น `2`) |
| `sub_button` | object | ไม่บังคับ | ดู [ปุ่มย่อย](#ปุ่มย่อย) | เพิ่มปุ่มที่กำหนดเองยึดอยู่ทางด้านขวา |

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| ตัวแปร | ค่าที่คาดหวัง | คำอธิบาย |
| --- | --- | --- |
| `--bubble-line-background-color` | `color` | สีพื้นหลังสำหรับเส้นในตัวคั่น |

</details>

#### ตัวอย่าง

<details>

<summary>ตัวคั่น/เส้นแบ่งสำหรับส่วน "ม่าน/ประตู"</summary>

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

## คอลัมน์ว่าง

![readme-empty-column](https://github.com/Clooos/Bubble-Card/assets/36499953/a97fa8df-8360-4613-8bb7-e8a269cb1913)

การ์ดนี้มีไว้สำหรับเติมเต็มคอลัมน์ที่ว่างเปล่า ซึ่งมีประโยชน์หากคุณมี `horizontal-stack` ในป๊อปอัปของคุณที่มีการ์ดเพียงใบเดียว ลองดูมุมล่างขวาของภาพหน้าจอนี้เพื่อ (ไม่) เห็นมัน

### ตัวเลือกคอลัมน์ว่าง

การ์ดนี้ไม่มีตัวเลือกและไม่รองรับ [การจัดสไตล์](#การจัดสไตล์) แม้ว่าจะรองรับตัวเลือกเลย์เอาต์สำหรับส่วนต่างๆ ของ HA ก็ตาม

#### ตัวอย่าง

<details>

<summary>คอลัมน์ว่างในแถวแนวนอน</summary>

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

## ปุ่มย่อยเท่านั้น

![bubble-card-sub-buttons-only-card](https://github.com/user-attachments/assets/89d420e0-6ec0-4aa0-a1c9-3b515678beaa)

การ์ดนี้อุทิศให้กับปุ่มย่อยเท่านั้น เหมาะอย่างยิ่งสำหรับเมนู การกระทำด่วน ชิปแสดงข้อมูล หรือฟุตเตอร์ที่ยึดอยู่ด้านล่างของหน้า

> [!IMPORTANT]  
> การ์ดนี้ใช้สคีมาปุ่มย่อยแบบใหม่ ใช้ `sub_button.bottom` เพื่อกำหนดปุ่มของคุณ ส่วน `sub_button.main` จะถูกละเว้น

### ตัวเลือกปุ่มย่อยเท่านั้น

<details>

<summary><b>ตัวเลือก (YAML + คำอธิบาย)</b></summary>

| ชื่อ | ประเภท | ข้อกำหนด | ตัวเลือกที่รองรับ | คำอธิบาย |
| --- | --- | --- | --- | --- |
| `sub_button` | object | **จำเป็น** | ดู [ปุ่มย่อย](#ปุ่มย่อย) | กำหนดปุ่มย่อยของคุณโดยใช้ส่วน `bottom` |
| `hide_main_background` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ลบพื้นหลังของการ์ด |
| `footer_mode` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ยึดการ์ดไว้ที่ด้านล่างของหน้า |
| `footer_full_width` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ทำให้ฟุตเตอร์เต็มความกว้าง (100%) |
| `footer_width` | number | ไม่บังคับ | ตัวเลขใดก็ได้ | ความกว้างของฟุตเตอร์เป็นพิกเซล เมื่อ `footer_full_width` เป็น `false` |
| `footer_bottom_offset` | number | ไม่บังคับ | ตัวเลขใดก็ได้ | ระยะห่างจากด้านล่างของหน้าเป็นพิกเซล (ค่าเริ่มต้น: `16`) |
| `card_layout` | string | ไม่บังคับ | `normal` (ค่าเริ่มต้นถ้าไม่ได้อยู่ในมุมมองส่วน), `large` (ค่าเริ่มต้นถ้าอยู่ในมุมมองส่วน), `large-2-rows`, `large-sub-buttons-grid` | เลย์เอาต์การจัดสไตล์ของการ์ด ดู [เลย์เอาต์การ์ด](#เลย์เอาต์การ์ด) |
| `rows` | number | ไม่บังคับ | ตัวเลขใดก็ได้ | จำนวนแถว (ความสูง) (เช่น `2`) |

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| ตัวแปร | ค่าที่คาดหวัง | คำอธิบาย |
| --- | --- | --- |
| `--bubble-footer-width` | `px` | ความกว้างของฟุตเตอร์เมื่อ `footer_full_width` เป็น `false` |
| `--bubble-footer-bottom` | `px` | ระยะห่างด้านล่างของฟุตเตอร์ |
| `--bubble-footer-box-shadow` | ดู [box shadow](https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow) | เงาของกล่องฟุตเตอร์ |

</details>

#### ตัวอย่าง

<details>

<summary>ชิปแบบต่างๆ (เหมือนในภาพหน้าจอ)</summary>

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

<summary>เมนูฟุตเตอร์แบบยึดตำแหน่ง</summary>

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

## ปุ่มย่อย

![readme-button](https://github.com/Clooos/Bubble-Card/assets/36499953/c7bfda91-943e-42f3-a963-4847e57c6b97)

ในทุกการ์ดที่รองรับตัวเลือกนี้ คุณสามารถเพิ่มปุ่มย่อยเพื่อปรับแต่งการ์ดของคุณได้มากยิ่งขึ้น ตัวอย่างเช่น คุณสามารถสร้างปุ่มที่ควบคุมหุ่นยนต์ดูดฝุ่น การ์ดสภาพอากาศ หรือแทบทุกอย่างที่คุณนึกออก ปุ่มย่อยเหล่านี้รองรับการกระทำเมื่อแตะและตัวเลือกปุ่มส่วนใหญ่

ปุ่มย่อยตอนนี้รองรับสามประเภท ได้แก่ **ค่าเริ่มต้น (ปุ่ม)**, **แถบเลื่อน** และ **ดรอปดาวน์ / เลือก** คุณสามารถผสมประเภทต่างๆ ในการ์ดเดียวกัน วางปุ่มย่อยไว้ด้านบนหรือด้านล่าง และจัดกลุ่มเพื่อเลย์เอาต์ที่ซับซ้อนยิ่งขึ้น

#### ตำแหน่งและกลุ่มของปุ่มย่อย

<details>

<summary><b>โครงสร้างปุ่มย่อย (main / bottom + กลุ่ม)</b></summary>

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

**หมายเหตุ:**
- `main` และ `bottom` เป็นสองส่วนที่เป็นอิสระต่อกัน ปุ่มย่อยด้านล่างจะยึดอยู่ที่ด้านล่างของการ์ด
- `main_layout` และ `bottom_layout` รองรับ `inline` (ค่าเริ่มต้น) หรือ `rows` เพื่อเรียงกลุ่มในแนวตั้ง
- กลุ่มคือออบเจ็กต์ที่มีอาร์เรย์ `group` และ `buttons_layout` ที่ไม่บังคับ (`inline` หรือ `column`)
- `justify_content` ใช้ได้กับ **กลุ่มด้านล่างเท่านั้น** (`start`, `center`, `end`, `fill`)
- เมื่อมีปุ่มย่อยด้านล่างอยู่ เลย์เอาต์ของการ์ดจะสลับไปเป็น `large` โดยอัตโนมัติ เว้นแต่คุณจะตั้งค่าเลย์เอาต์อื่นไว้อย่างชัดเจน
- อาร์เรย์ `sub_button` แบบเดิมยังคงรองรับอยู่ และถือว่าเป็นส่วน `main`

</details>

### ตัวเลือกปุ่มย่อย

<details>

<summary><b>ตัวเลือก (YAML + คำอธิบาย)</b></summary>

| ชื่อ | ประเภท | ข้อกำหนด | ตัวเลือกที่รองรับ | คำอธิบาย |
| --- | --- | --- | --- | --- |
| `entity` | string | ไม่บังคับ | เอนทิตีใดก็ได้ | เอนทิตีที่จะควบคุม |
| `name` | string | ไม่บังคับ | ข้อความใดก็ได้ | ชื่อสำหรับปุ่มย่อยของคุณ ถ้าไม่ได้กำหนดจะแสดงชื่อเอนทิตี |
| `icon` | string | ไม่บังคับ | ไอคอน `mdi:` ใดก็ได้ | ไอคอนสำหรับปุ่มย่อยของคุณ ถ้าไม่ได้กำหนดจะแสดงไอคอนของเอนทิตีหรือรูปภาพของเอนทิตี |
| `force_icon` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | บังคับใช้ไอคอนแม้ว่าจะมีรูปภาพของเอนทิตีอยู่ก็ตาม |
| `sub_button_type` | string | ไม่บังคับ | `default`, `slider` หรือ `select` | เลือกประเภทของปุ่มย่อย |
| `show_background` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงพื้นหลังสำหรับปุ่มย่อยของคุณ โดยจะเปลี่ยนสีตามสถานะของเอนทิตี |
| `state_background` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | ใช้สีของสถานะเมื่อเอนทิตีเป็น `on` |
| `light_background` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | ใช้สีของไฟสำหรับพื้นหลังเมื่อมีให้ใช้งาน |
| `show_state` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงหรือซ่อนสถานะของ `entity` ของคุณ |
| `show_name` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงหรือซ่อนชื่อ |
| `show_icon` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนไอคอน |
| `show_last_changed` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงเวลาที่เปลี่ยนแปลงล่าสุดของ `entity` ของคุณ |
| `show_last_updated` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงเวลาที่อัปเดตล่าสุดของ `entity` ของคุณ |
| `show_attribute` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | แสดงแอตทริบิวต์ของ `entity` ของคุณด้านล่าง `name` |
| `attribute` | string | ไม่บังคับ (จำเป็นถ้า `show_attribute` ถูกตั้งเป็น `true`) | แอตทริบิวต์จาก `entity` ของคุณ | แอตทริบิวต์ที่จะแสดง (เช่น `brightness`) |
| `select_attribute` | string | ไม่บังคับ | รายการแอตทริบิวต์จาก `entity` ของคุณ (ดูตัวเลือกที่รองรับด้านบน) | รายการแอตทริบิวต์นี้จะเปิดดรอปดาวน์เมื่อคลิก (เช่น `effect_list`) |
| `show_arrow` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | แสดงหรือซ่อนลูกศรดรอปดาวน์สำหรับปุ่มย่อยแบบเลือก |
| `scrolling_effect` | boolean | ไม่บังคับ | `true` (ค่าเริ่มต้น) หรือ `false` | อนุญาตให้ข้อความเลื่อนเมื่อเนื้อหาเกินขนาดของคอนเทนเนอร์ |
| `tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทของการกระทำเมื่อคลิกปุ่มย่อย ถ้าไม่กำหนด จะใช้ `more-info` |
| `double_tap_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทของการกระทำเมื่อคลิกปุ่มย่อยสองครั้ง ถ้าไม่กำหนด จะใช้ `none` |
| `hold_action` | object | ไม่บังคับ | ดู [การกระทำ](#การกระทำเมื่อแตะ-แตะสองครั้ง-และกดค้าง) | กำหนดประเภทของการกระทำเมื่อกดปุ่มย่อยค้าง ถ้าไม่กำหนด จะใช้ `more-info` |
| `fill_width` | boolean | ไม่บังคับ | `true` หรือ `false` | เติมเต็มความกว้างที่มีอยู่ (ค่าเริ่มต้น: `false` สำหรับ main, `true` สำหรับ bottom) |
| `width` | number หรือ string | ไม่บังคับ | ตัวเลขใดก็ได้หรือความยาว CSS | ความกว้างที่กำหนดเอง (`px` สำหรับส่วน main, `%` สำหรับส่วน bottom ตามค่าเริ่มต้น) |
| `custom_height` | number | ไม่บังคับ | ตัวเลขใดก็ได้ | ความสูงที่กำหนดเองเป็นพิกเซล |
| `content_layout` | string | ไม่บังคับ | `icon-left` (ค่าเริ่มต้น), `icon-top`, `icon-bottom`, `icon-right` | ตำแหน่งไอคอนภายในปุ่มย่อย |
| `always_visible` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | **สำหรับแถบเลื่อนเท่านั้น** แสดงแถบเลื่อนตลอดเวลาแทนที่จะเปิดเมื่อแตะ |
| `show_button_info` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | **สำหรับแถบเลื่อนเท่านั้น** แสดงไอคอน/ชื่อ/สถานะเมื่อเปิดใช้งาน `always_visible` |
| `visibility` | object หรือ list | ไม่บังคับ | ดู [เงื่อนไข](#เงื่อนไข) | แสดงหรือซ่อนปุ่มย่อยตามเงื่อนไข |
| `hide_when_parent_unavailable` | boolean | ไม่บังคับ | `true` หรือ `false` (ค่าเริ่มต้น) | ซ่อนปุ่มย่อยถ้าเอนทิตีของการ์ดหลักไม่พร้อมใช้งาน |
| `css_class` | string | ไม่บังคับ | สตริงใดก็ได้ | คลาส CSS เพิ่มเติมบนปุ่มย่อย เพื่อเจาะจงถึงมันใน[การจัดสไตล์](#การจัดสไตล์)ของคุณไม่ว่าชื่อของมันจะเป็นอะไร (เช่น `My value` จะได้ `.my-value`) |

</details>

<details>

<summary><b>ตัวเลือกปุ่มย่อยแบบแถบเลื่อน (เหมือนกับแถบเลื่อนของปุ่ม)</b></summary>

<br>

ปุ่มย่อยแบบแถบเลื่อนรองรับตัวเลือกแถบเลื่อนเดียวกันกับแถบเลื่อนของปุ่ม รวมถึง:
`min_value`, `max_value`, `step`, `tap_to_slide`, `relative_slide`, `read_only_slider`, `slider_live_update`, `slider_fill_orientation`, `slider_value_position`, `invert_slider_value`, `light_slider_type`, `cover_slider_type`, `hue_force_saturation`, `hue_force_saturation_value`, `use_accent_color`, `allow_light_slider_to_0`, `light_transition`, `light_transition_time`

</details>

<details>

<summary><b>ตัวแปร CSS (ดู <a href="#การจัดสไตล์">การจัดสไตล์</a>)</b></summary>

| ตัวแปร | ค่าที่คาดหวัง | คำอธิบาย |
| --- | --- | --- |
| `--bubble-sub-button-border-radius` | `px` | รัศมีขอบมนสำหรับปุ่มย่อย |
| `--bubble-sub-button-background-color` | `color` | สีพื้นหลังสำหรับปุ่มย่อย |
| `--bubble-sub-button-outline` | `box-shadow` | เส้นขอบที่เพิ่มให้ปุ่มย่อยหรือแถบเลื่อนเฉพาะเมื่อองค์ประกอบนั้นมีสีเดียวกับการ์ดที่อยู่ข้างหลัง ซึ่งจะทำให้มองไม่เห็น (ตั้งเป็น `none` เพื่อเอาออก) |
| `--bubble-sub-slider-border-radius` | `px` | รัศมีขอบมนสำหรับปุ่มย่อยแบบแถบเลื่อน |
| `--bubble-sub-slider-background-color` | `color` | สีพื้นหลังสำหรับปุ่มย่อยแบบแถบเลื่อน |
| `--bubble-sub-slider-height` | `px` | ความสูงสำหรับปุ่มย่อยแบบแถบเลื่อนที่แสดงตลอดเวลา |
| `--bubble-sub-slider-outline` | `box-shadow` | เส้นขอบของปุ่มย่อยแบบแถบเลื่อนเท่านั้น จะย้อนกลับไปใช้ `--bubble-sub-button-outline` |
| `--bubble-sub-button-dark-text-color` | `color` | สีข้อความบนพื้นหลังปุ่มย่อยที่สว่าง |

</details>

#### ตัวอย่าง

<details>

<summary>ปุ่มพร้อมปุ่มย่อยบางอันเพื่อสร้างการ์ดหุ่นยนต์ดูดฝุ่น (เหมือนในภาพหน้าจอ)</summary>

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

<summary>แถบเลื่อนของปุ่มพร้อมปุ่มย่อยที่แสดงความสว่างและอีกปุ่มที่สลับสถานะไฟ (เหมือนในภาพหน้าจอ)</summary>

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

<summary>ปุ่มที่แสดงอุณหภูมิภายในและภายนอกพร้อมสภาพอากาศของวันนี้และพรุ่งนี้ (มีภาพหน้าจอประกอบ)</summary>

<br>

<img width="591" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/360312de-db08-47bf-9b46-92afeb435edd">

> โชคไม่ดีสำหรับผมที่มีเมฆครึ้มตลอดเวลา แต่ไอคอนทั้งหมดจะเปลี่ยนไปตามสภาพอากาศ

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

## เลย์เอาต์การ์ด

![My-Bubble-Card-dashboard](https://github.com/Clooos/Bubble-Card/assets/36499953/0c049498-969b-4939-959e-fc49fb08d0a1)

Bubble Card รองรับมุมมองส่วนของ Home Assistant อย่างเต็มรูปแบบ คุณสามารถเปลี่ยนเลย์เอาต์ของการ์ดเพื่อทำให้การ์ดใหญ่ขึ้น รวมถึงเปลี่ยนจำนวนคอลัมน์หรือแถวที่การ์ดควรครอบครองในมุมมองส่วนของคุณ (เฉพาะการ์ดที่รองรับตัวเลือกนี้) เลย์เอาต์เหล่านี้ยังรองรับในมุมมองประเภทอื่นๆ ทั้งหมดด้วย

<details>

<summary><b>เลย์เอาต์การ์ดที่มีให้ใช้งาน</b></summary>

| เลย์เอาต์ | คำอธิบาย |
| --- | --- |
| `normal` | เลย์เอาต์ปกติ (ไม่ได้ปรับให้เหมาะกับมุมมองส่วน) |
| `large` | เลย์เอาต์ที่ใหญ่ขึ้นซึ่งจะปรับขนาดตามแถวที่เลือกในมุมมองส่วน (ปรับให้เหมาะกับมุมมองส่วน) |
| `large-2-rows` | เลย์เอาต์ที่ใหญ่ขึ้นพร้อมปุ่มย่อย 2 แถวซึ่งจะปรับขนาดตามแถวที่เลือกในมุมมองส่วน (ปรับให้เหมาะกับมุมมองส่วน) |
| `large-sub-buttons-grid` | เลย์เอาต์นี้จะแสดงปุ่มย่อยในรูปแบบกริด ต้องตั้งค่า `rows` เป็นอย่างน้อย `2`

</details>

#### ตัวอย่าง

<details>

<summary>ปุ่มขนาดใหญ่ที่แสดงสถิติพลังงานพร้อมปุ่มย่อย 2 แถว (มีภาพหน้าจอประกอบ)</summary>

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

<summary>ปุ่มขนาดใหญ่ที่มีหลายแถวพร้อมปุ่มย่อย 12 ปุ่ม</summary>

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

## เงื่อนไข

บางตัวเลือกทำงานด้วยเงื่อนไข ซึ่งเขียนเหมือนกับเงื่อนไขของ[การ์ดแบบมีเงื่อนไข](https://www.home-assistant.io/dashboards/conditional/)ของ Home Assistant ทุกประการ:

- `visibility` บน[ปุ่มย่อย](#ปุ่มย่อย) เพื่อแสดงหรือซ่อนมัน
- `trigger` บน[ป๊อปอัป](#ป๊อปอัป) เพื่อเปิดมันเมื่อเงื่อนไขเป็นจริง
- `checkConditionsMet(conditions, hass)` ภายใน[เทมเพลต](#เทมเพลต)ของคุณ เมื่อคุณต้องการคำตอบในโค้ดของคุณเอง

เงื่อนไขทุกประเภทของ Home Assistant ถูกประเมินผล: `state`, `numeric_state`, `screen`, `user`, `time`, `location`, `template` และกลุ่ม `and`, `or` และ `not` เงื่อนไขจากตัวสร้างเงื่อนไขของ Home Assistant ก็ใช้ได้เช่นกัน คือเงื่อนไขที่ตั้งชื่อตามโดเมนของมันอย่าง `sun.is_up`, `light.is_on`, `zone.in_zone` หรือ `temperature.is_value` พร้อมการตั้งค่า `target`, `options`, `behavior` และ `for` ของมัน

<details>

<summary><b>ตัวอย่าง</b></summary>

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
> เงื่อนไขถูกประเมินผลในเบราว์เซอร์ของคุณ ดังนั้นเงื่อนไขไม่กี่ข้อที่ต้องใช้เซิร์ฟเวอร์ Home Assistant จึงไม่สามารถแม่นยำได้ พระอาทิตย์ขึ้นและพระอาทิตย์ตกถูกอ่านจากเอนทิตี `sun.sun` แทนที่จะคำนวณใหม่ และระยะเวลา `for` วัดจากการเปลี่ยนสถานะครั้งล่าสุด โดยไม่มีประวัติจาก recorder
>
> `view_columns` ถูกยอมรับแต่ผ่านเสมอ เพราะ Bubble Card ไม่เคยเป็นตัวจัดวางคอลัมน์ของมุมมองของคุณ ประเภทเงื่อนไขที่ Bubble Card ไม่รู้จักจะรายงานตัวเองหนึ่งครั้งในคอนโซลของเบราว์เซอร์แทนที่จะล้มเหลวอย่างเงียบ ๆ คุณจึงแยกความต่างระหว่างการพิมพ์ผิดกับฟีเจอร์ที่ยังไม่มีได้

<br>

---

<br>

## การกระทำเมื่อแตะ แตะสองครั้ง และกดค้าง

คุณสามารถใช้การกระทำเมื่อแตะ การกระทำเมื่อแตะสองครั้ง และการกระทำเมื่อกดค้างแบบเริ่มต้นของ Home Assistant ได้เช่นกันในการ์ดที่รองรับตัวเลือกนี้ ตัวอย่างเช่น สิ่งนี้ช่วยให้คุณแสดงหน้าต่าง "ข้อมูลเพิ่มเติม" ได้ด้วยการกดค้างที่ไอคอนปุ่ม หรือเรียกใช้บริการเมื่อกดปุ่มย่อย

**หมายเหตุ: เมื่อมีการกำหนดค่า `double_tap_action` การกระทำ `tap_action` ปกติจะมีความล่าช้า 200ms เพื่อให้สามารถตรวจจับ
การแตะสองครั้งได้ หากความล่าช้านี้ไม่เป็นที่ต้องการ ให้ตั้งค่า `double_tap_action` เป็น `none` เพื่อปิดใช้งานการจัดการการแตะสองครั้ง**

### ตัวเลือกการกระทำ

<details>

<summary><b>ตัวเลือก (YAML + คำอธิบาย)</b></summary>

| ชื่อ | ประเภท | ตัวเลือกที่รองรับ | คำอธิบาย |
| --- | --- | --- | --- |
| `action` | string | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `fire-dom-event`, `none` | การกระทำที่จะดำเนินการ |
| `target` | object |  | ใช้ได้กับ `call-service` เท่านั้น เป็นไปตาม [ไวยากรณ์ของ home-assistant](https://www.home-assistant.io/docs/scripts/service-calls/#targeting-areas-and-devices) |
| `navigation_path` | string | เส้นทางใดก็ได้ในแดชบอร์ดของคุณ | เส้นทางที่จะไปยัง (เช่น `'#kitchen'` เพื่อเปิดป๊อปอัป) เมื่อการกระทำถูกกำหนดเป็น navigate |
| `url_path` | string | ลิงก์ใดก็ได้ | URL ที่จะเปิดเมื่อคลิก (เช่น `https://www.google.com`) เมื่อการกระทำเป็น `url` |
| `service` | string | บริการใดก็ได้ | บริการที่จะเรียกใช้ (เช่น `media_player.media_play_pause`) เมื่อ `action` ถูกกำหนดเป็น `call-service` |
| `data` หรือ `service_data` | object | ข้อมูลบริการใดก็ได้ | ข้อมูลบริการที่จะรวมไว้ (เช่น `entity_id: media_player.kitchen`) เมื่อ `action` ถูกกำหนดเป็น `call-service` |
| `confirmation` | object | ดู [การยืนยัน](https://www.home-assistant.io/dashboards/actions/#options-for-confirmation) | แสดงป๊อปอัปยืนยัน (ไม่ใช่ของ Bubble Card) แทนที่ออบเจ็กต์ `confirmation` เริ่มต้น |

</details>

#### ตัวอย่าง

<details>

<summary>ปุ่มสำหรับเปิดป๊อปอัป</summary>

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

## การจัดสไตล์

คุณสามารถเพิ่มสไตล์กำหนดเองเพื่อปรับแต่ง CSS ของการ์ดทั้งหมด **โดยไม่ต้องใช้ card-mod** ได้ 4 วิธี ดังนี้

- ในตัวแก้ไข ไปที่การ์ดที่ต้องการปรับแต่ง จากนั้นไปที่ _Styling options > Custom styles & JS templates_ แล้วเพิ่มสไตล์กำหนดเองของคุณ (ดูเคล็ดลับและตัวอย่างด้านล่าง)
- ในตัวแก้ไข (หรือใน [YAML](#โมดูล)) ไปที่การ์ดที่ต้องการปรับแต่ง จากนั้นไปที่ _Modules_ แล้วสร้างโมดูลใหม่ (โมดูลนี้จะใช้ได้กับทุกการ์ด) หรือไปที่ **Module Store** เพื่อติดตั้งโมดูลที่มีให้ใช้งาน (รายละเอียดเพิ่มเติมเกี่ยวกับโมดูลอยู่ [ด้านล่าง](#โมดูล))
- ในไฟล์ [ธีม](https://www.home-assistant.io/integrations/frontend/#defining-themes) โดยเพิ่มตัวแปร CSS ใน YAML (ตัวแปรเหล่านี้มีอยู่ในเอกสารของแต่ละการ์ดด้านบน) วิธีนี้ช่วยให้ปรับแต่งได้ทั่วทั้งระบบ

  <details>
  
  <summary>Example</a></summary>
  
  <br>

  อย่าคัดลอกบรรทัด `Bubble:` เพราะนี่คือชื่อธีมที่คุณใช้อยู่ นอกจากนี้คุณยังต้องลบ `--` ออกจากตัวแปรด้วย

  คุณต้องรันแอ็กชัน [`frontend.reload_themes`](https://www.home-assistant.io/integrations/frontend/#setting-themes) เพื่อรีเฟรชธีมหลังจากทำการแก้ไขใด ๆ

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
  
- ใน YAML โดยเพิ่ม `styles: |` ตามด้วยสไตล์กำหนดเองของคุณ (ดูเคล็ดลับและตัวอย่างด้านล่าง)

> [!TIP]  
> **หากต้องการทราบว่าคลาสสไตล์ใดสามารถปรับแต่งได้บ้าง** คุณสามารถดูโฟลเดอร์ [`src/cards`](https://github.com/Clooos/Bubble-Card/tree/main/src/cards) ในรีโพนี้ได้ ในแต่ละโฟลเดอร์การ์ด คุณจะพบไฟล์ชื่อ `styles.css` ไฟล์เหล่านี้มีสไตล์ที่ถูกนำมาใช้ทั้งหมด วิธีนี้เปิดโอกาสให้ปรับแต่งได้มากกว่าการใช้ตัวแปร CSS มาก แต่ต้องเพิ่มทีละการ์ด
> 
> คุณยังสามารถดู [ตัวอย่างจากชุมชน](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards) หรือบางส่วนจาก [ฟอรัม Home Assistant](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/) ได้ด้วยการค้นหาเล็กน้อย
>
> ธีม Bubble สำหรับ Home Assistant (เหมือนในภาพหน้าจอ) สามารถดูได้ [ที่นี่](https://github.com/Clooos/Bubble)
>
> วิดีโอสอนกำลังจะมาเร็ว ๆ นี้บน[ช่อง YouTube](https://www.youtube.com/@cloooos) ของฉัน

> [!IMPORTANT]  
> โปรดทราบว่าคุณอาจต้องเพิ่ม `!important;` ให้กับสไตล์ CSS บางอย่างที่ถูกกำหนดไว้แล้ว (ดูตัวอย่างด้านล่าง)

> [!TIP]  
> ปุ่มย่อยสามารถกำหนดเป้าหมายได้ด้วยคลาสตามชื่อ ตัวอย่างเช่น ปุ่มย่อยชื่อ "My sub-button" สามารถจัดสไตล์ได้ด้วย `.my-sub-button` ปุ่มย่อยแบบสไลเดอร์ยังมี `.bubble-sub-button-slider-1`, `.bubble-sub-button-slider-2` และอื่น ๆ ให้ใช้งานด้วย
>
> คลาสที่อิงตามชื่อจะเปลี่ยนเมื่อคุณเปลี่ยนชื่อปุ่มย่อย และจะถูกแปลเมื่อชื่อถูกแปล ตั้งค่า `css_class` บนปุ่มย่อยเพื่อให้ได้คลาสของคุณเองที่ไม่ขยับไปไหน ไม่ว่าชื่อจะเป็นอะไรและไม่ว่าจะเป็นภาษาใด

#### ตัวอย่าง

<details>

<summary>Changing the font size of any Bubble Card</summary>

<br>

```yaml
styles: |
  * { 
    font-size: 16px !important;
  }
```

</details>

<details>

<summary>Changing the background color of a single button in an horizontal buttons stack</summary>

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

<summary>Changing the background color of a card</summary>

<br>

ตัวอย่างนี้ใช้ได้กับการ์ด Bubble Card ทุกประเภท (ยกเว้นป๊อปอัป):

```yaml
styles: | 
  ha-card {
    --bubble-main-background-color: rgba(12,120,50,0.5) !important;
  }
```

ตัวอย่างนี้ทำสิ่งเดียวกันแต่ในการ์ดปุ่มเท่านั้น (ใช้ได้กับส่วนหัวของป๊อปอัปด้วย): 

```yaml
styles: | 
  .bubble-button-card-container {
    background: rgba(12,120,50,0.5) !important;
  }
```

หากต้องการเปลี่ยนสีเมื่อสถานะเป็น `on` ให้ดูเทมเพลตสไตล์ด้านล่าง

</details>

<details>

<summary>Changing the color of a button slider</summary>

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

<summary>Changing the line color of a separator</summary>

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

<summary>Changing the color of an icon</summary>

<br>

```yaml
styles: |
  .bubble-icon {
    color: white !important;
  }
```

สำหรับไอคอนในแถวปุ่มแนวนอน
```yaml
.kitchen > .bubble-icon {
  color: grey !important
}
```

</details>

<details>

<summary>Changing the background color of an icon container</summary>

<br>

ตัวอย่างนี้ใช้ได้กับการ์ด Bubble Card ทุกประเภท (ยกเว้นป๊อปอัป):

```yaml
styles: | 
  ha-card {
    --bubble-icon-background-color: rgb(230, 128, 41) !important;
  }
```

ตัวอย่างนี้ทำสิ่งเดียวกันสำหรับส่วนหัวของป๊อปอัป: 

```yaml
styles: |
  .bubble-icon-container {
    background: rgb(230, 128, 41) !important;
  }
```

</details>

<details>

<summary>Changing the size of the sub-buttons (perfect for the large layout)</summary>

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

<summary>Changing the background color of the second sub-button</summary>

<br>

```yaml
styles: |
  .bubble-sub-button-2 {
    background-color: blue !important;
  }
```

</details>

<details>

<summary>Changing the size of an icon</summary>

<br>

สำหรับไอคอนหลัก

```yaml
styles: |
  .bubble-icon {
    --mdc-icon-size: 26px !important;
  }
```

สำหรับไอคอนของปุ่มย่อย

```yaml
styles: |
  .bubble-sub-button-icon {
    --mdc-icon-size: 26px !important;
  }
```

</details>

<details>

<summary>Using a picture rather than an icon in a sub button</summary>

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

เพียงอัปโหลดรูปภาพนี้ไว้ในโฟลเดอร์ "pictures" (หรือชื่อที่คุณต้องการ) ภายในโฟลเดอร์ "www" ของ Home Assistant

</details>

<details>

<summary>Advanced example: Creating an horizontal row of sub-buttons (screenshot included)</summary>

<br>

<img width="556" alt="image" src="https://github.com/Clooos/Bubble-Card/assets/36499953/b9be2bcf-93fc-4b06-8eae-ecac97dfb5e2">

> ฉันชอบตัวอย่างนี้มาก ฉันใช้มันเป็นส่วนหัวของแดชบอร์ดตัวเอง

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

## เทมเพลต

**Bubble Card ไม่รองรับเทมเพลต Jinja** แต่ผู้ใช้ขั้นสูงสามารถเพิ่มเทมเพลตแบบ JS ได้โดยตรงใน[สไตล์กำหนดเอง](#การจัดสไตล์) ของตน ตัวอย่างเช่น วิธีนี้ช่วยให้เปลี่ยนไอคอน ข้อความ หรือสีขององค์ประกอบได้แบบไดนามิก แสดงหรือซ่อนองค์ประกอบตามเงื่อนไข (เช่น ปุ่มย่อย) หรือแทบทุกอย่างที่ขึ้นอยู่กับสถานะ แอตทริบิวต์ และอื่น ๆ

> [!TIP]  
> ข้อมูลเพิ่มเติมเกี่ยวกับเทมเพลต JS อยู่ [ที่นี่](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) คำแนะนำของฉันคือ **ให้ตรวจสอบคอนโซลของเบราว์เซอร์เสมอ** เพื่อให้แน่ใจว่าทุกอย่างทำงานได้อย่างถูกต้อง

> [!IMPORTANT]  
> **เทมเพลตทั้งหมดที่ไม่ได้ปรับแต่งคุณสมบัติ CSS ต้องวางไว้ท้ายสุด! เช่น การเปลี่ยนไอคอน ข้อความ หรือองค์ประกอบใด ๆ**

#### ตัวแปรและฟังก์ชันที่ใช้งานได้

<details>

<summary>Variables</summary>

<br>

คุณสามารถเข้าถึงตัวแปรเหล่านี้ได้ในการ์ดส่วนใหญ่:

- `state` จะคืนค่าสถานะของ `entity` ที่คุณกำหนดไว้
  
- `entity` จะคืนค่าเอนทิตีที่คุณกำหนดไว้ เช่น `switch.test` ในตัวอย่างนี้

- `icon` สามารถใช้แบบนี้เพื่อเปลี่ยนไอคอน `icon.setAttribute("icon", "mdi:lightbulb")`

- `subButtonState[0]` จะคืนค่าสถานะของ `entity` ที่กำหนดไว้ในปุ่มย่อยแรก โดย `[0]` คือสถานะปุ่มย่อยแรก `[1]` คือปุ่มที่สอง...
  
- `subButtonIcon[0]` สามารถใช้แบบนี้เพื่อเปลี่ยนไอคอนปุ่มย่อยแรก `subButtonIcon[0].setAttribute("icon", "mdi:lightbulb")` โดย `[0]` คือไอคอนปุ่มย่อยแรก `[1]` คือปุ่มที่สอง...
  
- `card` จะคืนค่าองค์ประกอบการ์ดใน DOM

- `hass` เป็นตัวแปรขั้นสูงที่ให้คุณควบคุมได้มากขึ้น เช่น คุณสามารถคืนค่าสถานะของ `light.kitchen` ได้แบบนี้ `hass.states['light.kitchen'].state` หรือแอตทริบิวต์แบบนี้ `hass.states[entity].attributes.brightness`

- `this` จะคืนค่าข้อมูลที่มีประโยชน์มากมายเกี่ยวกับการตั้งค่าและแดชบอร์ดของคุณ ใช้ตัวแปรนี้เฉพาะเมื่อคุณรู้ว่ากำลังทำอะไรอยู่

</details>

<details>

<summary>Functions</summary>

<br>

คุณสามารถเข้าถึงฟังก์ชัน JS สากลทั้งหมดได้ และยังสามารถเข้าถึง:

- `getWeatherIcon` สามารถใช้เพื่อคืนค่าไอคอนสภาพอากาศตามสถานะที่คืนค่าสภาพอากาศ ตัวอย่างเช่น คุณสามารถทำแบบนี้ `${subButtonIcon[2].setAttribute("icon", getWeatherIcon(hass.states['sensor.weather_forecast_daily'].attributes.forecast[0]?.condition))}` เพื่อเปลี่ยนไอคอนปุ่มย่อยที่สามเป็นไอคอนสภาพอากาศของวันนี้ `.forecast[1]?.condition` คือของพรุ่งนี้...

  คุณจะต้องสร้างเซนเซอร์เทมเพลตสำหรับสิ่งนี้ นี่คือสิ่งที่คุณสามารถเพิ่มใน `configuration.yaml` ของคุณ:
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
- `checkConditionsMet(conditions, hass)` คืนค่า `true` เมื่อรายการ[เงื่อนไข](#เงื่อนไข)เป็นจริง เช่น `${checkConditionsMet([{condition: 'sun.is_set'}], hass) ? 'block' : 'none'}`
- `hass.formatEntityState(state)` สามารถใช้เพื่อแปลสถานะ (ยังใช้เพื่อดึงหน่วยของสถานะได้โดยไม่ต้องเพิ่มเองด้วยตนเอง)
- `hass.formatEntityAttributeValue(state, "attribute")` สามารถใช้เพื่อแปลแอตทริบิวต์ (ยังใช้เพื่อดึงหน่วยของสถานะได้โดยไม่ต้องเพิ่มเองด้วยตนเอง)

</details>

#### ตัวอย่าง

คุณสามารถดูตัวอย่างมากมายด้านล่าง แต่ก็สามารถดูเทมเพลตขั้นสูงมากได้ที่[หน้า Patreon](https://www.patreon.com/c/Clooos) ของฉัน เช่นตัวอย่างหนึ่ง (ตัวโปรดของฉัน) ที่รองรับป้ายเงื่อนไขได้สูงสุดสี่ป้ายวางรอบไอคอนของการ์ด นอกจากนี้ยังเป็นวิธีที่ดีในการเรียนรู้ความเป็นไปได้ทั้งหมดของสไตล์และเทมเพลตกำหนดเองของ Bubble Card!

<details>
<summary>Examples from my Patreon page</summary>

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

<summary>Changing the background color of a button that is red when it's <code>off</code> and blue when it's <code>on</code></summary>

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

<summary>Changing the background color of a button based on an entity for the horizontal buttons stack</summary>

<br>

```yaml
styles: |
  .kitchen > .color-background {
    background-color: ${hass.states['light.kitchen'].state === 'on' ? 'blue' : 'red'} !important;
  }
```

</details>

<details>

<summary>Showing/Hiding a sub-button conditionally</summary>

<br>

ตัวอย่างนี้แสดงปุ่มย่อยแรกเฉพาะเมื่อเครื่องดูดฝุ่นของฉันติดขัด
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].state === 'error' ? '' : 'none'} !important;
  }
```

ตัวอย่างนี้แสดงปุ่มย่อยเมื่อแบตเตอรี่ต่ำกว่า 10% มีประโยชน์กับปุ่มย่อยที่แสดง "Low battery"
```yaml
styles: |
  .bubble-sub-button-1 {
    display: ${hass.states['vacuum.downstairs'].attributes.battery_level <= 10 ? '' : 'none'} !important;
  }
```

</details>

<details>

<summary>Changing an icon or sub-button icon conditionally</summary>

<br>

ตัวอย่างนี้เปลี่ยนไอคอนของปุ่มเฉพาะเมื่อเครื่องดูดฝุ่นติดขัด
```yaml
styles: |
  ${icon.setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

ตัวอย่างนี้เปลี่ยนไอคอนปุ่มย่อยแรกเฉพาะเมื่อเครื่องดูดฝุ่นติดขัด
```yaml
styles: |
  ${subButtonIcon[0].setAttribute("icon", hass.states['vacuum.downstairs'].state === 'error' ? 'mdi:alert' : 'mdi:robot-vacuum')}
```

</details>

<details>

<summary>Changing an icon or sub-button icon color conditionally</summary>

<br>

ตัวอย่างนี้เปลี่ยนสีไอคอนของปุ่มตามสถานะของมัน

```yaml
styles: |
  .bubble-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

ตัวอย่างนี้เปลี่ยนสีไอคอนของปุ่มย่อยตามสถานะของมัน `.bubble-sub-button-1` คือปุ่มย่อยแรก แทนที่ `1` หากต้องการเปลี่ยนไอคอนปุ่มย่อยอื่น
```yaml
styles: |
  .bubble-sub-button-1 > ha-icon {
    color: ${hass.states['light.your_light'].state === 'on' ? 'green' : 'red'} !important;
  }
```

</details>

<details>

<summary>Animating a fan icon conditionally</summary>

<br>

ตัวอย่างนี้หมุนไอคอนของปุ่มเมื่อพัดลมอยู่ในสถานะ `on`
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

<summary>Templating texts (like name or state)</summary>

<br>

ตัวอย่างนี้เปลี่ยนชื่อ/สถานะของปุ่มเป็น "It's currently sunny" ตามสภาพอากาศของคุณ
```yaml
styles: |
  ${card.querySelector('.bubble-name').innerText = "It's currently " + hass.states['weather.home'].state}
```
หรือเมื่อนำไปใช้กับปุ่มย่อย:
```yaml
styles: |
 ${card.querySelector('.bubble-sub-button-1 .bubble-sub-button-name-container').innerText = "It's currently " + hass.states['weather.home'].state}
```


หากต้องการทำเทมเพลตของสถานะ (`.bubble-state`) อย่าเปิด `show_state: true` ให้เปิด `show_attribute: true` โดยไม่ระบุแอตทริบิวต์ใด ๆ แทน

</details>

<details>

<summary>Advanced example: Changing the color of a sub-button when a pop-up is open</summary>

<br>

```yaml
styles: |
  ${window.addEventListener('location-changed', () => { 
  card.querySelector('.bubble-sub-button-1').style.backgroundColor = this.location.href.includes('#kitchen') ? 'blue' : '';
  })}
```

</details>

<details>

<summary>Advanced example: Templating a separator name based on a state translated to your language</summary>

<br>

คุณสามารถใช้ `hass.formatEntityState(state)` เพื่อแปลสถานะ และ `hass.formatEntityAttributeValue(state, "attribute")` เพื่อแปลแอตทริบิวต์

ตัวอย่างนี้เปลี่ยนชื่อและไอคอนตามสภาพอากาศ "Nuageux" แปลว่า "มีเมฆ" ในภาษาฝรั่งเศส

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
## โมดูล

โมดูลเป็นฟีเจอร์ทรงพลังที่ช่วยให้คุณบันทึก นำกลับมาใช้ซ้ำ และแชร์สไตล์และเทมเพลตกำหนดเองของคุณได้ในทุก Bubble Card แทนที่จะคัดลอกและวางโค้ดเดียวกันลงในหลายการ์ด คุณสามารถสร้างโมดูลและนำไปใช้ได้ทุกที่ที่ต้องการ ทำให้การจัดการรูปลักษณ์ของแดชบอร์ดง่ายและมีประสิทธิภาพมากขึ้น

แต่ฟีเจอร์นี้ทรงพลังกว่านั้นมาก มันช่วยให้คุณเพิ่มฟีเจอร์จริง ๆ ได้เองในตัวแก้ไข Bubble Card โดยใช้ตัวเลือกจาก[แบบฟอร์มมาตรฐานของ Home Assistant](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md) ทั้งหมด!  
ตัวเลือกอ็อบเจกต์ได้รับการปรับปรุงให้แสดงการเปลี่ยนแปลงแบบสด และรองรับแอตทริบิวต์ได้อย่างถูกต้อง

โมดูลยังตอบตัวเลือกการ์ดของ Home Assistant ได้ด้วย เคียงข้าง[คำแนะนำเอนทิตี](#คำแนะนำเอนทิตี)ที่มีมาให้ในตัว ใช้ `suggestions` สำหรับการ์ดที่อธิบายไว้ล่วงหน้าได้ และใช้ `suggestions_code` เมื่อต้องคำนวณจากการติดตั้งของคุณ เช่น ป๊อปอัปที่สร้างจากทุกเอนทิตีในพื้นที่ที่เอนทิตีที่เลือกอยู่ คีย์ทั้งสองมีเอกสารอยู่[ที่นี่](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md#entity-suggestions)

คุณยังสามารถเรียกดู **Module Store** เพื่อค้นหาและติดตั้ง[โมดูลที่สร้างโดยชุมชน](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) หรือแชร์ผลงานของคุณเองได้ด้วย!

> [!TIP]
> โค้ดของโมดูลทำงานเหมือนกับโค้ดในส่วน `styles` ของการ์ดทุกประการ ตัวแปรและฟังก์ชันทั้งหมดจากส่วน [เทมเพลต](#เทมเพลต) ใช้งานได้เช่นเดียวกัน

<br>

### การตั้งค่าเริ่มต้น

> [!IMPORTANT]
> ตั้งแต่เวอร์ชัน v3.1.0 เป็นต้นไป Bubble Card Tools คือแบ็กเอนด์จัดเก็บที่แนะนำสำหรับโมดูล วิธีเซนเซอร์เทมเพลตแบบเดิมยังคงใช้งานได้กับการตั้งค่าที่มีอยู่ แต่โมดูลใหม่และฟีเจอร์ของ Module Store จะรองรับได้ดีที่สุดผ่าน Bubble Card Tools

การผสานรวม Bubble Card Tools เปิดใช้งานตัวแก้ไขโมดูลและ Module Store และจัดเก็บโมดูลเป็นไฟล์ YAML แยกกัน โมดูลที่มีอยู่เดิมจะถูกย้ายให้โดยอัตโนมัติ

ขั้นตอนการติดตั้งและกำหนดค่าอธิบายไว้ที่นี่:

[![GitHub - Bubble Card Tools](https://img.shields.io/badge/GitHub-Bubble%20Card%20Tools-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card-Tools)



<br>

### ตัวแก้ไขโมดูล

คุณสามารถเข้าถึงตัวแก้ไขโมดูลได้จากการตั้งค่าของการ์ดใดก็ได้ ภายใต้ส่วน **Modules** ตัวแก้ไขมีสองแท็บหลัก:

#### แท็บ My Modules

![module-editor-preview](https://github.com/user-attachments/assets/94b4b481-2d51-4f7b-8c02-1a65391d78ca)

แท็บนี้แสดงโมดูลที่ติดตั้งไว้ทั้งหมดของคุณ และช่วยให้คุณ:

- **นำไปใช้ (Apply)** โมดูลที่มีอยู่กับการ์ดปัจจุบัน
- **สร้าง (Create)** โมดูลใหม่ตั้งแต่ต้น
- **แก้ไข (Edit)** โมดูลที่มีอยู่พร้อมตัวอย่างแบบสด
- **ลบ (Delete)** โมดูลที่ไม่ต้องการอีกต่อไป
- **ค้นหา (Search)** และ **จัดเรียง (sort)** โมดูล (ตามตัวอักษร ล่าสุด หรือที่ใช้งานอยู่ก่อน)
- **ตั้งสถานะสากล (Set global status)** เพื่อให้โมดูลนำไปใช้กับทุกการ์ดโดยอัตโนมัติ
- **นำเข้า/ส่งออก (Import/Export)** โมดูลเพื่อสำรองข้อมูลหรือแชร์
- **เขียนคำแนะนำเอนทิตี (Write entity suggestions)** ในตัวแก้ไขโมดูล ใต้ **ไม่บังคับ: คำแนะนำเอนทิตี** เพื่อให้โมดูลของคุณถูกเสนอในตัวเลือกการ์ดของ Home Assistant ทั้งกฎและคำแนะนำที่คำนวณได้จะถูกตรวจสอบขณะที่คุณเขียน ข้อผิดพลาดตรงนั้นจะทำให้บันทึกไม่ได้ และตัวอย่างจะแสดงการ์ดที่แนะนำสำหรับเอนทิตีใดก็ตามที่คุณเลือก

#### แท็บ Module Store

![update-module-store-s](https://github.com/user-attachments/assets/c7249c0c-8f8c-4ffc-835f-701c9dfcadaf)

แท็บนี้จะแสดง[โมดูลทั้งหมดที่มีจากชุมชน](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) และช่วยให้คุณ:

- **เรียกดู (Browse)** โมดูลทั้งหมดที่สร้างโดยชุมชน
- **ค้นหา (Search)** และกรองโมดูลตามชื่อ ความเข้ากันได้ หรือคำสำคัญ
- **ติดตั้ง (Install)** โมดูลได้ด้วยคลิกเดียว
- **อัปเดต (Update)** โมดูลที่ติดตั้งไว้เมื่อมีเวอร์ชันใหม่

> [!TIP]
> ในตัวแก้ไข คุณสามารถเปิดใช้งานโมดูลที่ยังไม่รองรับ เพื่อทดสอบโมดูลที่ยังไม่ถูกระบุว่าเข้ากันได้กับประเภทการ์ดที่กำหนด

<br>

### วิธีใช้งานโมดูล

#### การสร้างโมดูลใหม่

<details>

<summary>Click to expand</summary>

<br>

![module-preview](https://github.com/user-attachments/assets/4670b486-5a48-4476-a868-2ec4d42226a5)

1. ไปที่ตัวแก้ไขของการ์ดใดก็ได้ แล้วขยายส่วน **Modules**
2. คลิก **Create new module**
3. กรอกข้อมูลของโมดูล
4. เขียนโค้ดเทมเพลต CSS และ/หรือ JavaScript ของคุณในตัวแก้ไข **Code**
5. (ไม่บังคับ) สร้างส่วนติดต่อกำหนดค่าเองในส่วน **Editor** (เช่นตัวเลือกสีในภาพหน้าจอด้านบน เอกสารฉบับเต็มมีให้ [ที่นี่](https://github.com/Clooos/Bubble-Card/blob/main/src/modules/module-documentation.md))
6. (ไม่บังคับ) เขียน**คำแนะนำเอนทิตี**ของคุณ เพื่อให้โมดูลของคุณถูกเสนอในตัวเลือกการ์ดของ Home Assistant แผงนี้จะตรวจสอบสิ่งที่คุณเขียนขณะที่คุณพิมพ์ และตัวอย่างของมันจะแสดงการ์ดที่แนะนำจริง ๆ สำหรับเอนทิตีที่คุณเลือก
7. คลิก **Save**

ตอนนี้โมดูลของคุณพร้อมใช้งานกับการ์ดใด ๆ ของคุณแล้ว!

<br>

</details>

#### การนำโมดูลไปใช้กับการ์ด

<details>

<summary>Click to expand</summary>

<br>

- **ผ่านตัวแก้ไข:**

  - ไปที่ตัวแก้ไขของการ์ดที่ต้องการนำโมดูลไปใช้
  - ขยายส่วน **Modules**
  - คลิกที่โมดูลที่ต้องการนำไปใช้จากรายการ
  - ที่ "Apply to" คลิก "This card" โมดูลจะเปิดใช้งานทันที คุณสามารถนำหลายโมดูลไปใช้กับการ์ดเดียวกันได้

- **ผ่าน YAML:**

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

#### การนำโมดูลไปใช้แบบสากล

<details>

<summary>Click to expand</summary>

<br>

คุณสามารถตั้งให้โมดูลนำไปใช้กับ Bubble Card ทั้งหมดโดยอัตโนมัติ:

**วิธีนี้ใช้ไม่ได้กับโมดูลที่มีตัวแก้ไข เพราะโมดูลเหล่านั้นต้องการการกำหนดค่าเฉพาะจึงจะทำงานได้**

- **ผ่านตัวแก้ไข:**

  - ในตัวแก้ไขโมดูล ค้นหาโมดูลของคุณในแท็บ **My Modules**
  - เปิดสวิตช์ **All cards** ข้างชื่อโมดูล
  - โมดูลจะถูกนำไปใช้กับทุกการ์ดโดยอัตโนมัติ
 
- **ผ่าน YAML:**

  ในการกำหนดค่า YAML ของโมดูล (ใน `bubble-modules.yaml`) เพียงเพิ่ม `is_global: true`

<br>

</details>

#### การยกเว้นการ์ดเดียวจากโมดูลสากล

<details>

<summary>Click to expand</summary>

<br>

หากคุณมีโมดูลสากลแต่ต้องการยกเว้นการ์ดใดการ์ดหนึ่ง:

- **ผ่านตัวแก้ไข:**
  
  - ในส่วน **Modules** ของการ์ด คุณจะเห็นรายการโมดูลสากล
  - คลิกที่โมดูลสากล แล้วปิด "This card" เพื่อยกเว้นการ์ดนี้โดยเฉพาะ

- **ผ่าน YAML:**
  
  ```yaml
  type: custom:bubble-card
  card_type: button
  entity: light.example
  modules:
    - !global_module_id  # The ! prefix excludes this global module
  ```

<br>

</details>

#### การแชร์โมดูลของคุณไปยัง Module Store

<details>

<summary>Click to expand</summary>

<br>

หากต้องการแชร์โมดูลของคุณไปยัง Module Store ในตัวแก้ไขโมดูล ที่ด้านล่างใน "Export Module" ให้คลิก "Copy for GitHub" แล้ววางเนื้อหาลงในกระทู้ใหม่ในหมวดหมู่ [Share your Modules](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules) **แก้ไขคำอธิบาย** (หากจำเป็น) **ตัวอย่าง** (สำหรับผู้ใช้ YAML) และอย่าลืม **แนบภาพหน้าจออย่างน้อยหนึ่งภาพ** สำหรับ Module Store

**โมดูลของคุณจะพร้อมใช้งานทันทีหลังจากนั้น** (หลังจาก Store รีเฟรช) ดังนั้นตรวจสอบให้แน่ใจว่าทุกอย่างเขียนถูกต้องและโมดูลทำงานตามที่คาดไว้ แน่นอนว่าคุณสามารถแก้ไข/อัปเดตโมดูลได้หลังจากแชร์ไปแล้ว

<br>

</details>

#### การจัดการเวอร์ชัน

<details>

<summary>Click to expand</summary>

<br>

Module Store จะตรวจสอบการอัปเดตของโมดูลที่ติดตั้งไว้โดยอัตโนมัติ เมื่อมีการอัปเดต:

1. คุณจะเห็นตัวบ่งชี้การอัปเดตในแท็บ **Module Store**
2. คลิก **Update** ที่โมดูลที่มีการอัปเดต
3. ยืนยันการอัปเดตใน Module Store

<br>

</details>

#### การกำหนดประเภทการ์ดที่รองรับ

<details>

<summary>Click to expand</summary>

<br>

บางโมดูลอาจไม่เข้ากันได้กับการ์ดทุกประเภท คุณสามารถระบุได้ว่าการ์ดใดที่โมดูลรองรับ  
หากต้องการให้โมดูลเข้ากันได้กับ**การ์ดทุกประเภท** เพียงแค่ละเว้นฟิลด์ `supported` (หรือใช้ตัวเลือก **All cards** ในตัวแก้ไข)

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

### ตัวอย่าง

<details>
<summary>Basic styling module</summary>

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
<summary>Module with custom configuration</summary>

<br>

โมดูลนี้มีให้ใช้งาน [ที่นี่](https://github.com/Clooos/Bubble-Card/discussions/1231)

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

ตัวอย่างเพิ่มเติมสามารถดูได้ใน Module Store หรือ [ที่นี่](https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules)

<br>

---

<br>

## การแปลภาษา

Bubble Card พูดภาษาของคุณ ตัวแก้ไขของมันถูกแปลใน 64 ภาษาที่ Home Assistant รองรับ และทุกที่ที่ Home Assistant มีคำสำหรับสิ่งนั้นอยู่แล้ว ถ้อยคำของมันจะถูกนำมาใช้ซ้ำ คุณจึงอ่านคำเดียวกันได้ในทั้งสองหน้าจอ

ที่ด้านล่างของตัวแก้ไข ข้างหมายเลขเวอร์ชัน มีสวิตช์ **อัตโนมัติ** ที่ตามภาษา Home Assistant ของคุณ ปิดมันแล้วตัวแก้ไขทั้งหมดจะกลับไปเป็นภาษาอังกฤษ ซึ่งสะดวกเวลาทำตามบทเรียนหรือรายงานปัญหา ตัวเลือกของคุณจะถูกจดจำไว้ในเบราว์เซอร์

เอกสารนี้ก็ถูกแปลเช่นกัน [ใน 62 ภาษา](languages.md) ทุกภาษายกเว้นภาษาอังกฤษแบบบริติชที่ใช้ต้นฉบับ หน้าเหล่านั้นเปิดให้ทุกคนแก้ไข ถ้อยคำที่ไม่ตรงกับ Home Assistant ของคุณจึงแก้ไขได้ในไม่กี่คลิก เวอร์ชันภาษาอังกฤษยังคงเป็นข้อมูลอ้างอิงสำหรับเนื้อหาเอง

<br>

---

<br>

## ความช่วยเหลือ

หากมีอะไรทำงานไม่เป็นไปตามที่คาดไว้ อย่าลังเลที่จะเปิด issue 

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-green?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/issues)

มีคำถามหรือความคิดเห็นเกี่ยวกับ Bubble Card ไหม อยากแชร์แดชบอร์ดหรือสิ่งที่ค้นพบไหม คุณสามารถไปที่ฟอรัม Home Assistant, ซับเรดดิตของ Bubble Card หรือส่วน GitHub Discussions ได้

[![Home Assistant Community Forum](https://img.shields.io/badge/Home%20Assistant-Community%20Forum-blue?logo=home-assistant&style=for-the-badge)](https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678) [![Reddit Page](https://img.shields.io/badge/Reddit-r/BubbleCard-orange?logo=reddit&style=for-the-badge)](https://www.reddit.com/r/BubbleCard/) [![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-lightgrey?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/discussions)


<br>

---

<br>

## การมีส่วนร่วม

ยินดีต้อนรับการมีส่วนร่วมทุกรูปแบบ! ไม่ว่าจะเป็นการแก้บั๊ก ฟีเจอร์ใหม่ การแปล หรือการปรับปรุงเอกสาร อย่าลังเลที่จะเปิด pull request

ก่อนเริ่มต้น โปรดอ่าน[คู่มือสำหรับนักพัฒนา](DEVELOPERS.md) ซึ่งครอบคลุมวิธีตั้งค่าสภาพแวดล้อมในเครื่องของคุณ การ build โปรเจกต์ และการทดสอบการเปลี่ยนแปลงของคุณ

[![GitHub](https://img.shields.io/badge/GitHub-Contribute-blue?logo=github&style=for-the-badge)](https://github.com/Clooos/Bubble-Card/pulls)

<br>

---

<br>

## บริจาค

ฉันทุ่มเทเวลาว่างส่วนใหญ่เพื่อทำให้โปรเจกต์นี้ดีที่สุดเท่าที่จะทำได้ ดังนั้นหากคุณชื่นชอบผลงานของฉัน การบริจาคใด ๆ ก็เป็นวิธีที่ดีในการแสดงความสนับสนุนของคุณ 🍻

[![Buy me a beer](https://img.shields.io/badge/Donate-Buy%20me%20a%20beer-yellow?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/clooos) [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal&style=for-the-badge)](https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR) [![Patreon Clooos](https://img.shields.io/badge/Patreon-Clooos-orange?logo=patreon&style=for-the-badge)](https://www.patreon.com/Clooos)

<br>

ขอบคุณทุกคนสำหรับการสนับสนุน พวกคุณคือแรงบันดาลใจที่ยิ่งใหญ่ที่สุดของฉัน!

<p align="right"><a href="#top"><img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" height="50px"></a></p>
