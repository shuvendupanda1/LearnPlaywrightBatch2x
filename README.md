# LearnPlaywrightBatch2x

This repository contains learning materials and exercises for Playwright automation testing.

## Clone

```bash
git clone https://github.com/shuvendupanda1/LearnPlaywrightBatch2x.git
```

## Remote Origin

```
https://github.com/shuvendupanda1/LearnPlaywrightBatch2x.git
```

## Contents

- `chapter_01_Basic/` - Basic Playwright concepts
- `chapter_02_javascript_Concepts/` - JavaScript fundamentals
- `chapter_03_Identifiers_Literals/` - Identifiers and Literals

## Important JavaScript Keywords for QA Testing

| Keyword | Usage |
|---------|-------|
| `const`, `let`, `var` | Variable declarations |
| `try`, `catch`, `finally`, `throw` | Error handling |
| `async`, `await`, `Promise` | Async programming |
| `if`, `else`, `switch`, `case`, `break` | Control flow |
| `for`, `while`, `do` | Loops |
| `function`, `return`, `=>` | Functions & arrow functions |
| `import`, `export` | Modules |
| `typeof`, `instanceof` | Type checking |
| `new`, `this`, `class`, `delete`, `in` | Object/Array operations |
| `null`, `undefined`, `true`, `false`, `NaN` | Special values |

## JavaScript Identifier Rules

- Must begin with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`)
- Cannot start with a digit (`0-9`)
- Can contain letters, digits, underscores, and dollar signs
- Case-sensitive (`myVar` ≠ `myvar`)
- Cannot be a reserved keyword (`let`, `class`, `return`, etc.)
- No spaces or special characters (except `_` and `$`)

### Examples

Run the full working example:
```
node chapter_02_javascript_Concepts/06_identifire_Rules.js
```

```js
// ✅ Valid identifiers
name, _userName, $price, firstName2, _total_amount

// ❌ Invalid identifiers
2name        // starts with digit
my-name      // contains hyphen
first name   // contains space
@age         // special character

// ❌ Keywords cannot be used as identifiers
var class = "math";      // 'class' is a keyword
var return = 10;         // 'return' is a keyword
var if = true;           // 'if' is a keyword

// ✅ Valid alternatives
var className = "math";
var returnValue = 10;
var isActive = true;
```
