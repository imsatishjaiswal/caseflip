import assert from "node:assert";
import {
  toSentenceCase,
  toLowerCase,
  toUpperCase,
  toCapitalizeCase,
  toAlternatingCase,
} from "./index.js";

console.log("Running refined tests for capify...\n");

// Test: toSentenceCase
console.log("Testing toSentenceCase with punctuation...");
assert.strictEqual(
  toSentenceCase("hello world! how are you? i am fine."),
  "Hello world! How are you? I am fine.",
);
assert.strictEqual(toSentenceCase("   leading space."), "   Leading space.");
console.log("✅ toSentenceCase passed!");

// Test: toLowerCase
console.log("Testing toLowerCase edge cases...");
assert.strictEqual(toLowerCase(null), "");
assert.strictEqual(toLowerCase("TEST"), "test");
console.log("✅ toLowerCase passed!");

// Test: toUpperCase
console.log("Testing toUpperCase edge cases...");
assert.strictEqual(toUpperCase(undefined), "");
assert.strictEqual(toUpperCase("test"), "TEST");
console.log("✅ toUpperCase passed!");

// Test: toCapitalizeCase
console.log("Testing toCapitalizeCase with multiple spaces...");
assert.strictEqual(
  toCapitalizeCase("hello    world multiple   spaces"),
  "Hello World Multiple Spaces",
);
assert.strictEqual(toCapitalizeCase("TEST CASE"), "Test Case");
console.log("✅ toCapitalizeCase passed!");

// Test: toAlternatingCase
console.log("Testing toAlternatingCase...");
assert.strictEqual(toAlternatingCase("alternating"), "aLtErNaTiNg");
console.log("✅ toAlternatingCase passed!");

console.log("\nAll tests passed successfully! 🚀");
