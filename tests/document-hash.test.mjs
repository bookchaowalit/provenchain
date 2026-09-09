import test from 'node:test';
import assert from 'node:assert/strict';
import { hashDocument, isDocumentHash, normalizeDocumentHash, verifyDocumentHash } from '../src/document-hash.mjs';

test('hashes identical bytes deterministically', () => {
  const bytes = Buffer.from('invoice-example-v1', 'utf8');
  const first = hashDocument(bytes);

  assert.equal(first, hashDocument(Buffer.from(bytes)));
  assert.equal(first.length, 66);
  assert.equal(isDocumentHash(first), true);
});

test('verification detects changed document bytes', () => {
  const original = Buffer.from('contract-v1', 'utf8');
  const hash = hashDocument(original);

  assert.equal(verifyDocumentHash(original, hash), true);
  assert.equal(verifyDocumentHash(Buffer.from('contract-v2', 'utf8'), hash), false);
});

test('normalizes valid hashes and rejects malformed values', () => {
  const hash = `0x${'AB'.repeat(32)}`;
  assert.equal(normalizeDocumentHash(hash), `0x${'ab'.repeat(32)}`);
  assert.throws(() => normalizeDocumentHash('not-a-hash'), /32-byte SHA-256/);
});

