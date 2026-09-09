---
title: ProvenChain Legal and Privacy Review Request
status: draft - do not send
created: 2026-08-24
updated: 2026-08-24
tags: [provenchain, legal, privacy, digital-asset, review]
description: Bounded request pack for professional review of the hash-only testnet slice.
---

# ProvenChain — Legal and Privacy Review Request

**Status:** draft only; no external message has been sent
**Owner:** Solo Empire founder
**Requested review:** Thailand digital-asset/fintech and privacy classification
**Product boundary:** hash-only document integrity evidence; no escrow, payment, token, custody, customer upload, or mainnet

## Purpose of the request

Please review only the bounded slice described below. The request is for a
written preliminary assessment and an explicit list of conditions before any
testnet transaction involving a person other than the founder. It is not a
request to approve escrow, token issuance, custody, payment handling, or a
public launch.

## Product facts for review

- A local CLI calculates a SHA-256 digest from a file.
- The proposed Solidity registry stores only the 32-byte digest, submitting
  wallet address, and chain timestamp.
- The document bytes are not sent to the contract and are not stored by this
  repository.
- Each digest can be recorded once; the record is publicly readable and
  immutable according to the selected chain's behavior.
- The current repository has no user accounts, email login, embedded wallet,
  gas sponsorship, payment flow, token, escrow, or customer document intake.
- The only allowed fixture for local testing is a non-sensitive founder-owned
  file.

## Questions requiring written answers

### Regulatory classification

1. Does this hash-and-timestamp service, without payment, custody, token
   issuance, or escrow, fall within any regulated digital-asset, payment, or
   electronic-transaction service in Thailand?
2. Does publishing the submitter address, transaction hash, or timestamp create
   a separate obligation or consumer-risk issue?
3. What changes if the service later charges a subscription, per-record fee, or
   sponsors gas?
4. What changes if the product adds escrow, stablecoins, payment release, or
   dispute mediation? Please treat this as a separate approval decision.

### Customer promise and contract

5. Which product terms are safe: `timestamping`, `integrity evidence`,
   `tamper-evidence`, or `notarization`?
6. What disclaimer is required to avoid implying authorship, identity
   verification, legal admissibility, signature validity, or guaranteed
   recovery?
7. What terms, consent/notice, complaint process, and public-record warnings
   are required before a testnet pilot?

### Privacy and providers

8. In the intended use cases, when are hashes, wallet addresses, timestamps,
   IP addresses, email addresses, or document metadata personal data?
9. What controller/processor roles and notices apply if an account or document
   metadata is added later?
10. What retention, deletion limitation, correction, export, access, and
    cross-border transfer controls are required for public-chain records?
11. How should RPC, hosting, analytics, email, wallet, and chain providers be
    classified and contracted?
12. Is a PIA/DPIA, DPO assessment, or other formal privacy record required for
    the proposed testnet slice?

## Requested response format

Please return a document that records:

- scope and assumptions reviewed;
- applicable laws, notifications, or official guidance relied upon;
- classification and confidence for the hash-only slice;
- excluded features that require a new review;
- required terms, privacy controls, provider controls, and testnet conditions;
- claims or words that must not be used;
- open questions and a recommended review date.

An answer of “insufficient facts” should identify the missing fact and the
smallest safe way to obtain it without collecting customer documents or wallet
secrets.

## Suggested attachments

1. [Product brief](../PRODUCT.md)
2. [Architecture decision](./ARCHITECTURE-DECISION.md)
3. [Security and privacy](./SECURITY-AND-PRIVACY.md)
4. [Legal and Privacy Gate](./LEGAL-PRIVACY-GATE.md)
5. [Preliminary evidence review](./LEGAL-PRIVACY-EVIDENCE-2026-08-24.md)
6. [PIA worksheet](./PIA-WORKSHEET.md)
7. `contracts/NotaryRegistry.sol`

Do not attach customer documents, private keys, seed phrases, credential
values, raw interview notes, or personal contact lists.

## Thai draft message — owner approval required before sending

> หัวข้อ: ขอ preliminary legal/privacy review สำหรับ ProvenChain แบบ hash-only
>
> เรียน [ผู้เชี่ยวชาญ/สำนักงาน],
>
> ผมกำลังพัฒนา prototype ขนาดเล็กสำหรับสร้างหลักฐานว่าไฟล์มี hash เดิม ณ เวลา
> ที่บันทึก โดยคำนวณ SHA-256 ในเครื่องและบันทึกเฉพาะ 32-byte hash, wallet address
> ของผู้ส่ง และ timestamp บน EVM registry เท่านั้น ตัวไฟล์ไม่ถูกอัปโหลดเข้า
> contract และ scope นี้ยังไม่มี escrow, payment, token, custody, gas
> sponsorship, customer upload หรือ mainnet deployment
>
> ขอรบกวนช่วยตรวจเป็นลายลักษณ์อักษรว่า scope ดังกล่าวมีประเด็นด้าน digital
> asset, payment, electronic transaction, PDPA, public-chain data และ provider
> ต่างประเทศอย่างไร รวมถึงคำที่ใช้สื่อสารกับผู้ใช้ได้/ไม่ได้ และเงื่อนไขก่อน
> ทดลอง testnet กับผู้ใช้อื่น
>
> ผมแนบ bounded question pack และเอกสาร architecture/security ให้ตรวจ โดยไม่ได้
> แนบเอกสารลูกค้า private key หรือข้อมูลส่วนบุคคล คำขอนี้ไม่รวมการอนุมัติ escrow
> หรือ token ซึ่งจะทำเป็น review แยกต่างหาก
>
> ขอขอบคุณครับ

## Send checklist

- [ ] Owner approved the recipient and scope.
- [ ] Fee, engagement terms, and confidentiality boundary are agreed privately.
- [ ] Only the listed attachments are included.
- [ ] No customer data, raw notes, wallet secrets, or credentials are included.
- [ ] The outgoing message is recorded as sent only in the approved private
      communication system, not in this repository.
