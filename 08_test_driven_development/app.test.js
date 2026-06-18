import test from 'node:test';
import assert from 'node:assert';
import { normalizeInput } from './app.js';

// Edge case 1
// normalize -> "Hitesh Bhusare"
// " Hitesh Bhusare "  -> need to trim
test("that it trims the spaces", ()=> {
    const result = normalizeInput('  Hitesh Bhusara  ');
    const expected = 'Hitesh Bhusara';
    assert.strictEqual(result,expected)
});
// Edge case 2
test("that it return empty string if input does not exists", ()=> {
    const result = normalizeInput();
    const expected =  '';
    assert.strictEqual(result,expected)
});
// Edge case 3
test("it removes extra whitespaces", ()=> {
    const result = normalizeInput('Hitesh   Bhusara');
    const expected = 'Hitesh Bhusara';
    assert.strictEqual(result,expected)
});
// Edge case 4
test("that capatalizes the input", ()=> {
    const result = normalizeInput('hitEsh bhUSara');
    const expected = 'Hitesh Bhusara';
    assert.strictEqual(result,expected)
});
