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

- `chapter_01_Basic/` - Basic JavaScript & Playwright concepts
  - `01_Basics.js` - Hello World, variables, console.log
  - `02_JS.js` - Variable declaration and output
  - `03_js_commands.js` - JavaScript commands
  - `04_Hotcode.js` - For loop (hot loop)
- `chapter_02_javascript_Concepts/` - JavaScript fundamentals
  - `05_JS_Basics.js` - var declaration, reassignment, console output
- `chapter_03_Identifiers_Literals/` - Identifiers, Literals & Naming
  - `06_identifire_Rules.js` - Valid/invalid identifier rules
  - `07_identifire_Part2.js` - Naming conventions (camelCase, PascalCase, etc.)
  - `08_Comments.js` - Single-line & multi-line comments
  - `09_Windows_Shortcut_Keys.js` - Useful Windows shortcuts for coding
  - `10_Shorthand_Syntax.js` - Arithmetic assignment shorthand
  - `identifiers.js` - Identifier examples
- `Chapter_04_JavaScript_Concepts/` - Advanced JavaScript Concepts
  - `09_var_let_const.js` - var, let, const basics
  - `10_functions.js` - Function declaration and invocation
  - `11_var_explain.js` - var scoping (function & global scope)
  - `12_let_people_love.js` - let block scoping
  - `13_const_explain.js` - const constants and immutability
  - `14_let_scope.js` - let scope with global vs block
  - `15_Hoisting.js` - Hoisting with var
  - `16_hoisting_function.js` - Hoisting with function declarations

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

## Var, Let, and Const Differences

- **var** — Function-scoped, can be reassigned and redeclared, hoisted with `undefined`.
- **let** — Block-scoped, can be reassigned but NOT redeclared, hoisted (Temporal Dead Zone).
- **const** — Block-scoped, cannot be reassigned or redeclared, must be initialized on declaration.

```js
// var
var x = 10;
var x = 20;    // redeclare allowed
x = 30;        // reassign allowed

// let
let y = 10;
// let y = 20; // redeclare NOT allowed
y = 30;        // reassign allowed

// const
const z = 10;
// const z = 20; // redeclare NOT allowed
// z = 30;       // reassign NOT allowed
// const w;      // must initialize
```

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
