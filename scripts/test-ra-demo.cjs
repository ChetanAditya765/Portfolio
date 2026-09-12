const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

(async () => {
  const source = readFileSync(
    resolve(__dirname, '../src/components/reverse-attribution/math.js'),
    'utf8',
  );
  const { analyzeExample } = await import(
    `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
  );
  const base = analyzeExample([1, 1, 1]);
  assert.equal(base.original, -4);
  assert.deepEqual(
    base.features.map(f => f.attribution),
    [-1, -1, -2],
  );
  assert.deepEqual(
    base.features.map(f => f.pull),
    [-1, -1, 2],
  );
  assert.deepEqual(
    base.selected.map(f => f.index),
    [2],
  );
  assert.equal(base.aflip, 4 / 3);
  assert.equal(base.strength, 2);
  const empty = analyzeExample([0, 0, 0]);
  assert.equal(empty.features.filter(f => f.candidate).length, 0);
  assert.equal(empty.aflip, 0);
  assert.equal(empty.strength, null);
  const positive = analyzeExample([2, 2, 1]);
  assert.equal(positive.original, 2);
  assert.equal(positive.predicted, 0);
  assert.deepEqual(
    positive.selected.map(f => f.index),
    [2],
  );
  assert.equal(positive.aflip, 2);
  const boundary = analyzeExample([1.5, 1.5, 0]);
  assert.equal(boundary.features.filter(f => f.candidate).length, 0);
  assert.equal(boundary.strength, null);
  console.log(
    'PASS: analytical counterexample, empty selection, changed prediction, and strict zero boundary.',
  );
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
