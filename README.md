# ✨ caseflip

> A robust, lightweight, and modern string case transformation library with first-class TypeScript support.

[![npm version](https://img.shields.io/npm/v/caseflip.svg?style=flat-square)](https://www.npmjs.com/package/caseflip)
[![license](https://img.shields.io/npm/l/caseflip.svg?style=flat-square)](https://github.com/your-username/caseflip)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

`caseflip` is a refined string processing utility designed for developers who demand both simplicity and robustness. It handles complex punctuation and whitespace with ease.

---

## 🚀 Features

- **🎯 Sentence Case**: Perfectly capitalizes sentences, recognizing `.`, `!`, and `?`.
- **🔡 Lowercase**: Ultra-lean wrapper for consistent lowercasing.
- **🔠 Uppercase**: Ultra-lean wrapper for consistent uppercasing.
- **✨ Capitalize Case**: Formats text into clean Title Case, ignoring extra whitespace.
- **🎢 Alternating Case**: Generates `aLtErNaTiNg` text for creative UIs.
- **📘 TypeScript Ready**: Built-in `.d.ts` definitions for full type safety.
- **⚡ Zero Dependencies**: Exceptionally small bundle size.
- **📦 Dual Module Support**: Works seamlessly in ESM and CJS environments.

---

## 📦 Installation

```bash
npm install caseflip
```

---

## 🛠️ Usage

### ES Modules (ESM)

```javascript
import {
  toSentenceCase,
  toCapitalizeCase,
  toAlternatingCase,
  toLowerCase,
  toUpperCase,
} from "caseflip";

// 📝 Sentence Case (Handles multiple sentences)
toSentenceCase("hello world! how are you?");
// Result: "Hello world! How are you?"

// ✨ Capitalize Case (Cleans extra spaces)
toCapitalizeCase("string   with    spaces");
// Result: "String With Spaces"

// 🎢 Alternating Case
toAlternatingCase("vibe check");
// Result: "vIbE ChEcK"

// 🔡 Lowercase
toLowerCase("HELLO WORLD");
// Result: "hello world"

// 🔠 Uppercase
toUpperCase("hello world");
// Result: "HELLO WORLD"
```

### TypeScript Support

`caseflip` comes bundled with type definitions:

```typescript
import { toSentenceCase } from "caseflip";

const result: string = toSentenceCase("hello world.");
```

---

## 📖 API Reference

Check out the [EXAMPLES.md](./EXAMPLES.md) for a full list of use cases.

- `toSentenceCase(str: string): string`
- `toLowerCase(str: string): string`
- `toUpperCase(str: string): string`
- `toCapitalizeCase(str: string): string`
- `toAlternatingCase(str: string): string`

---

## 📄 License

MIT © [satishjaiswal](https://github.com/imsatishjaiswal)
