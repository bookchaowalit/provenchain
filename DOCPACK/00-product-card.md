---
title: ProvenChain — Product Card
doc_id: CARD-provenchain
doc_type: product-card
verdict: archive
version: 0.1
date: 2026-10-08
status: ร่างเพื่อพิจารณา
owner: Product owner (Book Dev)
---

# ProvenChain — Product Card

## 1. สรุปคุณค่าในหนึ่งประโยค

ต้นแบบที่ hash เอกสารในเครื่องด้วย SHA-256 และมีสัญญา Solidity สำหรับบันทึก hash พร้อมเวลาบน EVM testnet เพื่อพิสูจน์ว่าเอกสารมีอยู่และไม่ถูกแก้

## 2. ปัญหาและผู้ใช้เป้าหมาย

- SME และฟรีแลนซ์อาจต้องพิสูจน์ว่าเอกสารมีอยู่ ณ เวลาใดและไม่ถูกแก้ไข **[สมมติฐาน]**
- ผู้ใช้เป้าหมาย: SME/ฟรีแลนซ์ตาม interview guide แต่ทะเบียนสัมภาษณ์ยังเป็น 'empty template'

## 3. สิ่งที่ทำได้จริงตอนนี้

- `scripts/hash-document.mjs` และ `verify-document.mjs` hash/ตรวจเอกสารในเครื่อง (รวม ~58 บรรทัด)
- `contracts/NotaryRegistry.sol` (51 บรรทัด) มี `notarize(bytes32)` และ `getRecord(bytes32)` บันทึก hash, ผู้ส่ง, เวลา บันทึกได้ครั้งเดียวต่อ hash
- test 2 ไฟล์ (compile contract, hash เอกสาร); ไม่มี deploy ไป testnet

## 4. หลักฐานสถานะ

- Stack: ไม่ตรวจพบ framework หลักจากตัวเก็บข้อเท็จจริง
- Commits: 1 (แรก 2026-09-09 → ล่าสุด 2026-09-09), branch `main`; working tree สะอาด
- Source: 0 ไฟล์ / 0 บรรทัด; test 2 ไฟล์
- CI: 0 workflow (ไม่มี CI)
- Deploy config: ไม่มี
- Live URL: ไม่พบใน repo
- ตัวเก็บข้อเท็จจริงนับ source 0 ไฟล์เพราะไม่นับ `.sol`/`.mjs`; ตรวจแล้วมีโค้ดจริงราว 160 บรรทัด

## 5. คุณค่าและจุดต่าง

- เอกสาร legal/privacy (PIA, legal gate) ทำไว้รอบคอบ
- ทางเลือกที่มีอยู่แล้วทำสิ่งเดียวกันได้ฟรีหรือถูกกว่า (เช่น OpenTimestamps บน Bitcoin) จึงไม่มีจุดต่าง
- มุมรายได้: ไม่มีหลักฐาน **[สมมติฐาน]**

## 6. ช่องว่างสำคัญ

- ไม่มีการสัมภาษณ์ลูกค้าจริงแม้แต่รายเดียว (register ว่าง)
- commit เดียว ไม่มี CI ไม่มี deploy
- ขั้นถัดไปต้องผ่าน legal review และใช้ wallet/gas จริง

## 7. คำตัดสิน

**archive** — core เล็กมากและซ้ำกับบริการ notarization ที่มีอยู่ฟรี ไม่มีหลักฐาน demand จึงไม่มีคุณค่าพอจะดูแลต่อ

จะกลับมาเป็น `showcase`/`invest` ได้ถ้าการสัมภาษณ์ ≥ 10 รายยืนยันปัญหาที่ OpenTimestamps หรือบริการเดิมแก้ไม่ได้ (เช่นการยอมรับทางกฎหมายไทย)

## 8. ขั้นต่อไป

1. ขออนุมัติเจ้าของก่อน archive บน GitHub
2. เก็บเอกสาร PIA/legal gate ไว้เป็นแม่แบบสำหรับโปรเจกต์ที่แตะข้อมูลอ่อนไหว

## การอนุมัติ

| บทบาท | สถานะ | วันที่ | ลงนาม |
|---|---|---|---|
| Product owner (Book Dev) | รอพิจารณา | — | ________ |

## แหล่งข้อมูล

- `README.md`
- `contracts/NotaryRegistry.sol`
- `scripts/`
- `docs/INTERVIEW-EVIDENCE-REGISTER.md`
- `tests/`
