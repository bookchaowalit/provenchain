# ProvenChain — Product Brief

**Status:** local MVP core / testnet preparation
**Owner:** Solo Empire founder
**Boundary:** standalone product repository; no dependency on `cryptonomad-backend`
**Current slice:** document hash + on-chain timestamp registry

## User outcome

A Thai SME or freelancer can prove that a document existed in a specific form at
or before a blockchain timestamp, without uploading the document contents to the
blockchain.

## Demo promise

Given a local file, the CLI produces a SHA-256 hash. The Solidity registry can
record that hash and expose a public read method for independent verification.

## Production promise — not made yet

This repository does not yet claim legal validity, production availability,
customer document handling, identity assurance, paid service operation, escrow,
or mainnet deployment.

## Non-goals for this slice

- escrow, payments, stablecoins, token issuance, or custody;
- storing document bytes, personal data, or private metadata on-chain;
- user accounts, email login, embedded wallets, or gas sponsorship;
- mainnet deployment or external customer onboarding.

## Exit evidence for the next gate

- preliminary evidence review plus written professional review for the
  notarization service and privacy boundary;
- 10 SME and 10 freelancer/agency interviews;
- 3–5 manual pilot users willing to verify sample hashes;
- compiled contract, passing tests, and a reviewed testnet transaction.
