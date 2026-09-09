# ProvenChain — Legal and Privacy Gate

**Status:** blocked pending professional review
**Purpose:** prepare a bounded question pack for a Thai digital-asset/fintech
and privacy lawyer. This document is not a legal opinion.

See the dated, source-backed preliminary evidence review:
[LEGAL-PRIVACY-EVIDENCE-2026-08-24.md](./LEGAL-PRIVACY-EVIDENCE-2026-08-24.md).

Handoff materials:
[LEGAL-REVIEW-REQUEST.md](./LEGAL-REVIEW-REQUEST.md) ·
[PIA-WORKSHEET.md](./PIA-WORKSHEET.md)

## Proposed slice for review

The current product slice:

- hashes a document locally with SHA-256;
- submits only the 32-byte hash to a public EVM registry;
- records submitter address and chain timestamp;
- exposes a public read method for the hash record;
- does not accept money, issue tokens, hold assets, run escrow, or store the
  document contents on-chain;
- is intended for non-sensitive sample documents during discovery/testnet.

## Questions for counsel

### Regulatory classification

1. Does this hash-and-timestamp service, without payment, custody, token
   issuance, or escrow, fall within a regulated digital-asset or payment
   activity in Thailand?
2. Does publishing a wallet address, transaction hash, or timestamp create a
   separate compliance obligation?
3. What changes if the service later charges a subscription or sponsors gas?
4. What changes if escrow, stablecoins, payment release, or dispute mediation
   is added? Treat this as a separate decision, not an extension of approval.

### Contract and customer promise

5. What can the product safely call itself: timestamping, integrity evidence,
   notarization, or something else?
6. What disclaimer is required so users do not infer authorship, legal
   admissibility, identity verification, or guaranteed recovery?
7. What terms are needed for a public, immutable chain record?

### Privacy and PDPA

8. Are document hashes, wallet addresses, and timestamps personal data in the
   intended use cases?
9. Who is the data controller/processor if the service later stores documents
   or account metadata?
10. What notice, consent, retention, deletion, correction, export, and data
    residency controls are required?
11. Which RPC, hosting, analytics, email, and chain providers require a data
    processing or cross-border transfer review?

## Pre-testnet acceptance gate

| Control | Required evidence | Status |
|---|---|---|
| Legal scope | Written preliminary opinion for hash-only testnet slice | blocked |
| Privacy scope | Completed PIA/DPIA and data minimization decision | blocked |
| Public data | Approved policy for wallet/address/timestamp visibility | blocked |
| Customer promise | Reviewed terms/disclaimer; no claim of legal notarization | blocked |
| Test data | Non-sensitive founder-owned fixture only | open |
| Secret boundary | Wallet/RPC injected through approved secret mechanism | open |
| Network budget | Human-approved testnet network and gas ceiling | blocked |

## Stop conditions

Do not proceed to customer documents, paid pilot, escrow, token issuance,
mainnet, or external publication if counsel identifies a licensing, custody,
PDPA, consumer-protection, or legal-claims blocker.

## Review record

| Field | Value |
|---|---|
| Reviewer |  |
| Firm/role |  |
| Request date |  |
| Opinion received | no |
| Open issues | legal classification, privacy, claims, providers |
| Decision | blocked pending review |
