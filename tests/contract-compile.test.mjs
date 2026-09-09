import test from 'node:test';
import assert from 'node:assert/strict';
import { compileContract } from '../scripts/compile-contract.mjs';

test('NotaryRegistry compiles and exposes only the notarization read/write surface', async () => {
  const artifact = await compileContract({ writeArtifact: false });
  const functions = artifact.abi
    .filter((item) => item.type === 'function')
    .map((item) => item.name)
    .sort();

  assert.deepEqual(functions, ['getRecord', 'notarize']);
  assert.match(artifact.bytecode, /^0x[0-9a-f]+$/);
  assert.ok(artifact.bytecode.length > 2);
});

