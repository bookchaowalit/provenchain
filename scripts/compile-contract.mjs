#!/usr/bin/env node

import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import solc from 'solc';

export async function compileContract({ writeArtifact = true } = {}) {
  const sourcePath = resolve('contracts/NotaryRegistry.sol');
  const source = await readFile(sourcePath, 'utf8');
  const input = {
    language: 'Solidity',
    sources: { 'NotaryRegistry.sol': { content: source } },
    settings: {
      optimizer: { enabled: true, runs: 200 },
      outputSelection: { '*': { '*': ['abi', 'evm.bytecode.object'] } },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  const errors = (output.errors ?? []).filter((item) => item.severity === 'error');
  if (errors.length > 0) {
    throw new Error(errors.map((item) => item.formattedMessage).join('\n'));
  }

  const artifact = output.contracts?.['NotaryRegistry.sol']?.NotaryRegistry;
  if (!artifact?.abi || !artifact.evm?.bytecode?.object) {
    throw new Error('NotaryRegistry artifact was not produced');
  }

  const result = {
    contractName: 'NotaryRegistry',
    compiler: solc.version(),
    abi: artifact.abi,
    bytecode: `0x${artifact.evm.bytecode.object}`,
  };

  if (writeArtifact) {
    const artifactPath = resolve('artifacts/NotaryRegistry.json');
    await mkdir(dirname(artifactPath), { recursive: true });
    await writeFile(artifactPath, `${JSON.stringify(result, null, 2)}\n`);
    console.log(`Compiled NotaryRegistry with ${result.compiler}`);
    console.log(`Artifact: ${artifactPath}`);
  }

  return result;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await compileContract();
}

