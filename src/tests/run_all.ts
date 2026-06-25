/**
 * CEONIS Kernel — Test runner
 *
 * Run with: npx tsx src/tests/run_all.ts
 * Or:       npm run test:all
 */

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║          CEONIS Kernel — Full Acceptance Test Suite          ║');
console.log('╚══════════════════════════════════════════════════════════════╝');

const tests: Array<{ name: string; path: string }> = [
  { name: 'T3.1 Literacy  — planted misconception detection', path: './t3_1_planted_misconception.test.ts' },
  { name: 'T3.1 Math      — Mathematics domain generalisation', path: './t3_1_math.test.ts' },
];

async function runAll(): Promise<void> {
  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    console.log(`\n▶  ${test.name}`);
    try {
      await import(test.path);
      passed++;
    } catch (err) {
      console.error(`\n✗  FAILED: ${test.name}`);
      console.error(err);
      failed++;
    }
  }

  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log(`║  Results: ${passed} passed, ${failed} failed                                  ║`);
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  if (failed > 0) {
    throw new Error(`${failed} test(s) failed`);
  }
}

runAll().catch(err => { console.error('\n❌  Test suite failed:', err); throw err; });
