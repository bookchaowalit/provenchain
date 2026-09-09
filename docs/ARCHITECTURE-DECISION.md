# Architecture Decision — Notarization-only MVP

**Status:** draft / local MVP
**Decision owner:** Solo Empire founder
**Decision date:** 2026-08-24

## Decision

Use a two-part flow:

1. hash document bytes locally with SHA-256;
2. submit only the resulting `bytes32` hash to a minimal EVM registry.

The contract stores the submitter and the chain timestamp and exposes a public
read method. The document bytes, filename, customer identity, and document
metadata stay outside the chain.

## Why this boundary

- It demonstrates the core tamper-evidence value with minimal contract surface.
- It avoids payment, custody, token, and escrow assumptions.
- It reduces privacy exposure because the chain receives only a digest.
- It keeps the first testnet experiment reversible: no funds are held by the
  contract and no production customer data is required.

## Explicit non-decisions

- No network has been selected or approved for deployment yet.
- No wallet, RPC provider, gas sponsor, API, database, or frontend is in scope.
- A blockchain timestamp is evidence of chain inclusion, not a legal opinion or
  guaranteed proof of authorship.

## Acceptance examples

1. Same bytes produce the same hash.
2. Changed bytes fail verification against the original hash.
3. Zero hashes and duplicate hashes are rejected by the contract.
4. Contract compilation produces only `notarize` and `getRecord` functions.

