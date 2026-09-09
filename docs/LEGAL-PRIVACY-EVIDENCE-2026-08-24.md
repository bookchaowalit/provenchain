# ProvenChain — Preliminary Legal/Privacy Evidence Review

**วันที่ตรวจ:** 2026-08-24  
**สถานะ:** preliminary evidence only — ไม่ใช่ legal opinion และไม่ใช่คำรับรองว่าไม่ต้องมีใบอนุญาต  
**ขอบเขต:** hash-only slice: hash เอกสารในเครื่อง แล้วบันทึก `bytes32` hash, submitter และ block timestamp; ไม่มี escrow, token, custody, payment, customer upload หรือ mainnet

## สรุปการตัดสินใจ

สถานะของ [Legal and Privacy Gate](./LEGAL-PRIVACY-GATE.md) ยังคงเป็น **blocked** สำหรับ testnet ที่มีผู้ใช้อื่นหรือการเปิดตัวสาธารณะ

ทำต่อได้เฉพาะ local-only testing ด้วย fixture ที่ผู้พัฒนาเป็นเจ้าของเอง และการส่ง scope นี้ให้ผู้เชี่ยวชาญด้าน digital asset/fintech และ privacy ในไทยตรวจเป็นลายลักษณ์อักษร ยังไม่ควรเลือก network, wallet, RPC, gas budget หรือรับเอกสารลูกค้า

## แหล่งข้อมูลราชการที่ตรวจ

ตรวจเมื่อ 2026-08-24 และใช้เป็น evidence สำหรับตั้งคำถามต่อ ไม่ใช่คำวินิจฉัย:

1. [สำนักงาน ก.ล.ต. — Digital Asset Business Operators](https://www.sec.or.th/EN/pages/lawandregulations/digitalassetbusiness.aspx) อธิบายหมวด exchange, broker และ dealer รวมถึงกฎและแบบฟอร์มที่เกี่ยวข้อง
2. [สำนักงาน ก.ล.ต. — บริการที่ถือว่าให้บริการแก่บุคคลในประเทศไทย](https://www.sec.or.th/th/Pages/News_Detail.aspx?SECID=11698) ยกตัวอย่าง trigger เช่น ภาษาไทย, domain ที่สื่อถึงไทย, เงินบาท/บัญชีในไทย, กฎหมายหรือศาลไทย และบุคลากรสนับสนุนในไทย
3. [ธนาคารแห่งประเทศไทย — การกำกับตาม พ.ร.บ. ระบบการชำระเงิน พ.ศ. 2560](https://www.bot.or.th/th/our-roles/payment-systems/payment-act-oversight.html) อธิบาย designated payment systems/services และกรณีที่อาจต้องขออนุญาตหรือขึ้นทะเบียน
4. [สพธอ. — กฎหมายธุรกรรมทางอิเล็กทรอนิกส์](https://www.etda.or.th/en/Useful-Resource/transaction-laws.aspx) มีรายการ พ.ร.บ. ธุรกรรมทางอิเล็กทรอนิกส์และฉบับปรับปรุง
5. [สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล — DPO Portal](https://dpo.pdpc.or.th/registration) แสดงเกณฑ์ที่องค์กรต้องประเมินเกี่ยวกับการแต่งตั้ง DPO ตามมาตรา 41
6. [GPPC — Privacy Policy](https://gppc.pdpc.or.th/privacy-policy/) เป็น resource ทางการด้านนโยบายความเป็นส่วนตัวและรายละเอียดการประมวลผล

## Observations และผลต่อ scope

### Digital-asset classification

ก.ล.ต. อธิบายหมวดธุรกิจที่เกี่ยวกับการแลกเปลี่ยน นายหน้า และ dealer; ProvenChain slice ปัจจุบันไม่ได้ออกแบบให้ทำหน้าที่เหล่านั้น แต่ยังไม่ใช่การวินิจฉัยว่าบริการ hash/timestamp อยู่นอกกฎหมายทั้งหมด

**ข้อจำกัด:** ห้ามเพิ่ม token, wallet service, custody, การโอนเงิน หรือกิจกรรมซื้อขายสินทรัพย์ดิจิทัลจนกว่าจะได้ classification จาก counsel

### Thailand-facing service

ข่าว ก.ล.ต. ระบุลักษณะที่อาจทำให้บริการถูกมองว่าให้บริการแก่บุคคลในประเทศไทย เช่น UI ภาษาไทย, domain ที่สื่อถึงไทย, เงินบาท/บัญชีในไทย, terms ที่ใช้กฎหมายหรือศาลไทย และบุคลากรสนับสนุนในไทย

**ข้อจำกัด:** ก่อน Thai public launch ต้องให้ counsel ตรวจภาษา, domain, payment rail, terms, support และ marketing เป็นชุดเดียวกัน

### Payment และ escrow

ธปท. ระบุบริการรับชำระเงินแทนผู้ขายหรือผู้ให้บริการ, e-money, electronic transfer และบริการที่กระทบระบบการชำระเงินเป็นกลุ่มที่อาจต้องขออนุญาตหรือขึ้นทะเบียน

**ข้อจำกัด:** escrow เป็น workstream ใหม่; ห้ามรับเงินจริง, sponsor gas ให้ลูกค้า, ทำ payment-release flow หรือใช้ stablecoin ใน pilot นี้

### Electronic evidence และ product claims

พ.ร.บ. ธุรกรรมทางอิเล็กทรอนิกส์ตาม resource ของ ETDA รองรับหลักเรื่องผลผูกพันของข้อมูลอิเล็กทรอนิกส์ การรักษาความถูกต้อง และการพิจารณาความน่าเชื่อถือของพยานหลักฐานอิเล็กทรอนิกส์

**ข้อจำกัด:** ใช้คำอธิบายว่า “hash/timestamp record” หรือ “tamper-evidence” เท่านั้น ห้ามสัญญาว่าเป็นการรับรองเจ้าของเอกสาร, ยืนยันตัวตน, ลายมือชื่อ, legal notarization หรือรับประกันการรับฟังในศาลจนกว่าจะตรวจ terms และ claims เป็นลายลักษณ์อักษร

### PDPA และข้อมูลบน chain

หากภายหลังเก็บ account, email, IP, document metadata หรือ wallet address ต้องทำ controller/processor analysis และกำหนด notice, purpose, lawful basis, retention, rights handling และ provider contracts ให้ชัดเจน ห้าม assume ว่า hash/address/timestamp ไม่ใช่ personal data โดยอัตโนมัติ เพราะต้องพิจารณาความสามารถในการเชื่อมโยงกลับไปยังบุคคลและบริบท

**ข้อจำกัด:** ใช้ fixture ที่ไม่ sensitive และเป็นของผู้พัฒนาเองเท่านั้น; ไม่อัปโหลดเอกสารลูกค้า; ไม่ส่ง PII ขึ้น chain; ทำ inventory ของ RPC, hosting, analytics และ email provider ก่อนเปิด service

## คำถามที่ต้องให้ counsel ตอบ

1. hash-only timestamp service นี้เข้าข่าย digital asset, electronic-transaction หรือ payment service ใดหรือไม่
2. การเปิดเผย `submitter` wallet address และ timestamp ต่อสาธารณะมีหน้าที่หรือความเสี่ยงใด
3. subscription, per-record fee หรือ gas sponsorship เปลี่ยน classification หรือไม่
4. ควรใช้คำว่า “integrity evidence/timestamping” แทน “notarization” หรือไม่
5. ต้องใช้ disclaimer, terms, notice และ complaint process แบบใด
6. hash, wallet address, timestamp, IP, email และ document metadata แต่ละรายการเป็น personal data ใน use case ใด
7. RPC, hosting, analytics, email และ chain provider มีบทบาท controller, processor หรือผู้ให้บริการอิสระอย่างไร
8. public EVM testnet/mainnet และ provider ต่างประเทศต้องจัดการ cross-border transfer หรือสัญญาใด
9. หากเพิ่ม escrow, stablecoin, payment release หรือ dispute resolution ต้องขอใบอนุญาตหรือหยุด scope อย่างไร

## Evidence package

ส่งให้ผู้เชี่ยวชาญโดยไม่ส่ง customer data หรือ private key:

- [PRODUCT.md](../PRODUCT.md)
- [Architecture decision](./ARCHITECTURE-DECISION.md)
- [Security and privacy](./SECURITY-AND-PRIVACY.md)
- [Legal and Privacy Gate](./LEGAL-PRIVACY-GATE.md)
- [`NotaryRegistry.sol`](../contracts/NotaryRegistry.sol)
- output จาก `npm run hash -- README.md` ที่ใช้ fixture ใน repository เท่านั้น

ผู้ตรวจควรตอบกลับด้วย scope ที่ตรวจ, assumptions, excluded features, แหล่งกฎหมาย/ประกาศ, open issues และวันทบทวนครั้งถัดไป

## ไม่ได้ทำในรอบนี้

- ไม่ได้ให้ความเห็นทางกฎหมาย
- ไม่ได้อ้างว่ามีการสัมภาษณ์ลูกค้าแล้ว
- ไม่ได้ deploy contract หรือส่ง transaction
- ไม่ได้เลือก network, wallet, RPC provider หรือ gas budget
- ไม่ได้เก็บหรือประมวลผลเอกสารของบุคคลอื่น

