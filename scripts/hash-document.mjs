#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { hashDocument } from '../src/document-hash.mjs';

const [inputPath] = process.argv.slice(2);

if (!inputPath) {
  console.error('Usage: npm run hash -- <path-to-document>');
  process.exitCode = 2;
} else {
  try {
    const absolutePath = resolve(inputPath);
    const bytes = await readFile(absolutePath);
    console.log(JSON.stringify({
      algorithm: 'SHA-256',
      document_hash: hashDocument(bytes),
      byte_length: bytes.length,
      source_path: absolutePath,
      contents_persisted: false,
    }, null, 2));
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}

