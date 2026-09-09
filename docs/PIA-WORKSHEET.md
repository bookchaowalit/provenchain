---
title: ProvenChain Privacy Impact Assessment Worksheet
status: draft - not approved
created: 2026-08-24
updated: 2026-08-24
tags: [provenchain, privacy, PIA, DPIA, governance]
description: Data-minimization and privacy review worksheet for the hash-only slice.
---

# ProvenChain — Privacy Impact Assessment Worksheet

This is a working worksheet, adapted from the repository privacy-impact
assessment template. It is not a legal conclusion and cannot replace a
professional privacy review.

## Document control

| Field | Value |
|---|---|
| Assessment ID/version | PROVENCHAIN-PIA-001 / draft-1 |
| Product/process | Hash-only document integrity evidence |
| Data owner | Solo Empire founder |
| Privacy/legal reviewer | pending |
| Status/date | draft / 2026-08-24 |
| Review trigger | Before any testnet use involving another person |

## Intended processing

- **Purpose:** calculate and verify a document digest without retaining the
  document contents in the product.
- **Current data subjects:** none; local testing uses a founder-owned,
  non-sensitive fixture only.
- **Out of scope:** accounts, email login, customer uploads, identity
  documents, analytics, payment data, wallet onboarding, and gas sponsorship.
- **Potential future subjects:** a customer or document counterparty if the
  product later accepts public submissions; this requires a new review.

## Data inventory and minimization

| Data element | Current location | Visibility | Retention/deletion | Decision/open question |
|---|---|---|---|---|
| Document bytes | Local fixture only | Private to operator | Not persisted by CLI | Keep customer files out of scope |
| SHA-256 digest | CLI output; future chain record | Potentially public | Chain deletion limitation | Is it personal data in the use case? |
| Submitter wallet address | Not collected by current CLI | Public if submitted | Chain deletion limitation | Address-person linkability review |
| Block timestamp | Not collected locally | Public if submitted | Chain deletion limitation | Public-record notice required? |
| Transaction/RPC metadata | Not configured | Provider-dependent | Provider-dependent | Review IP/logging/transfer terms |
| Email/account/IP | Out of scope | N/A | N/A | Do not add without a new PIA |
| Document metadata | Out of scope | N/A | N/A | Do not add without a new PIA |

## Data-flow boundary

```text
founder-owned local fixture
        │
        ▼
local SHA-256 CLI ──► digest only
                         │
                         ▼
                 future approved testnet transaction
                         │
                         ▼
                 public registry record
```

The future transaction path is blocked until the [Legal and Privacy
Gate](./LEGAL-PRIVACY-GATE.md) is approved. No customer or sensitive file may
enter the path during discovery.

## Risks and controls

| Privacy risk | Impact/likelihood | Control | Evidence/owner | Residual status |
|---|---|---|---|---|
| A public digest can be linked to a known document or person | Medium / possible | Hash-only design; non-sensitive founder fixture; counsel classification | Founder / legal review | open |
| Wallet address exposes a public identifier | Medium / possible | No wallet onboarding; public-visibility policy required | Founder / legal review | open |
| RPC or hosting provider sees metadata | Medium / possible | Provider inventory, minimization, contract/transfer review | Founder / privacy review | open |
| Users infer legal notarization or guaranteed admissibility | High / possible | Use integrity-evidence wording; reviewed disclaimer and terms | Founder / counsel | open |
| Immutable record cannot be deleted | High / possible | No customer data; pre-write notice and approval gate | Founder / privacy review | open |

## Required review questions

1. Are any current or planned data elements personal data in the intended use
   case?
2. What notice, lawful basis, retention, access, correction, export, and
   deletion-limitation language is required?
3. Does the public-chain/RPC architecture create a cross-border transfer or
   processor review requirement?
4. Is a DPO assessment, PIA/DPIA, or additional security control required?
5. Which future changes must reopen this assessment?

## Decision and approval

- **Necessity/minimization conclusion:** pending professional review.
- **Required remediation before launch:** written legal/privacy review,
  approved public-data policy, reviewed terms/disclaimer, approved provider
  boundary, and founder-owned non-sensitive test data.
- **Professional-advice boundary:** this worksheet does not classify the
  service or approve a testnet transaction.
- **Re-open triggers:** customer uploads, accounts, email/IP collection,
  analytics, payment, gas sponsorship, escrow, token, custody, Thai public
  launch, or a new chain/provider.

| Role | Name/date | Decision |
|---|---|---|
| Product owner |  | Approve worksheet / revise |
| Privacy/legal professional |  | Accept / escalate / not reviewed |

