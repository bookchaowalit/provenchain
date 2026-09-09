#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { verifyDocumentHash } from '../src/document-hash.mjs';

const [inputPath, expectedHash] = process.argv.slice(2);

if (!inputPath || !expectedHash) {
  console.error('Usage: npm run verify -- <path-to-document> <0x-sha256-hash>');
  process.exitCode = 2;
} else {
  try {
    const absolutePath = resolve(inputPath);
    const bytes = await readFile(absolutePath);
    const matches = verifyDocumentHash(bytes, expectedHash);
    console.log(JSON.stringify({
      algorithm: 'SHA-256',
      expected_hash: expectedHash.toLowerCase(),
      matches,
      source_path: absolutePath,
      contents_persisted: false,
    }, null, 2));
    if (!matches) process.exitCode = 1;
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}

