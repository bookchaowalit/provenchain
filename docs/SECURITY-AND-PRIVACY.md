# Security and Privacy Review

**Status:** draft / pre-testnet
**Data classification:** document contents may be client-confidential or
personal; document hashes and public chain records are public once submitted.

## Controls in this slice

- Document bytes are read locally by the CLI and are not written to the repo,
  logs, artifacts, or contract.
- The contract has no payable function, admin role, upgrade path, pause key, or
  custody behavior.
- The contract rejects the zero hash and duplicate registration.
- The CLI uses an explicit file path and emits only bounded metadata plus the
  digest.
- No secret, private key, RPC URL, customer identity, or raw document fixture is
  required for local tests.

## Threats not solved yet

- A hash proves byte equality, not who authored the document.
- Local file access, malware, endpoint compromise, and timestamp interpretation
  are outside the contract's control.
- Public chain records can reveal submission timing and wallet addresses.
- Legal effect, PDPA roles, retention, deletion, and customer consent require
  a separate review before handling real documents.

## Testnet approval gate

Before a testnet deployment, a human must approve the network, deployer wallet,
RPC provider, gas budget, explorer publication, and retention of deployment
artifacts. Secrets must be injected through the approved local secret boundary;
they must never be committed or passed as CLI arguments.

