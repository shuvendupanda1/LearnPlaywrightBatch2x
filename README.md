# Learn JavaScript for Playwright (Batch 2x)

A comprehensive hands-on JavaScript course repository designed for QA engineers learning Playwright automation testing. Covers JavaScript fundamentals from basics to advanced concepts with practical examples and interview Q&A.

## Clone

```bash
git clone https://github.com/shuvendupanda1/LearnPlaywrightBatch2x.git
```

## Remote Origin

```
https://github.com/shuvendupanda1/LearnPlaywrightBatch2x.git
```

## Contents

### Chapter 1 — JavaScript Basics
| File | Topic |
|------|-------|
| `01_Basics.js` | Hello World, variables, console.log |
| `02_JS.js` | Variable declaration and output |
| `03_js_commands.js` | JavaScript commands |
| `04_Hotcode.js` | For loop (hot loop) |

### Chapter 2 — JavaScript Fundamentals
| File | Topic |
|------|-------|
| `05_JS_Basics.js` | var declaration, reassignment, console output |

### Chapter 3 — Identifiers & Literals
| File | Topic |
|------|-------|
| `06_identifire_Rules.js` | Valid / invalid identifier rules |
| `07_identifire_Part2.js` | Naming conventions (camelCase, PascalCase, etc.) |
| `08_Comments.js` | Single-line & multi-line comments |
| `09_Windows_Shortcut_Keys.js` | Useful Windows shortcuts for coding |
| `10_Shorthand_Syntax.js` | Arithmetic assignment shorthand |
| `identifiers.js` | Identifier examples |

### Chapter 4 — Advanced JavaScript Concepts
| File | Topic |
|------|-------|
| `09_var_let_const.js` | var, let, const basics |
| `10_functions.js` | Function declaration and invocation |
| `11_var_explain.js` | var scoping (function & global scope) |
| `12_let_people_love.js` | let block scoping |
| `13_const_explain.js` | const constants and immutability |
| `14_let_scope.js` | let scope with global vs block |
| `15_Hoisting.js` | Hoisting with var |
| `16_hoisting_function.js` | Hoisting with function declarations |
| `17_Hoisted_TDZ` | Hoisting & Temporal Dead Zone with var in block scope |
| `19_let_hosting.js` | let hosting behavior |
| `Hoisting_and_TDZ.js` | Combined hoisting & TDZ examples |

### Chapter 5 — Literals, Operators, Identifiers & Functions
| File | Topic |
|------|-------|
| `18_literals-operators-identifiers.js` | Comprehensive literals, operators & identifiers with tests |
| `19_literial.js` | Literal examples |
| `20_Template_literal.js` | Template literal examples |
| `22_confusing_operator.js` | Confusing comparisons & interview Q&A (267 lines) |
| `23_null_undefined.js` | null vs undefined in depth |
| `24_Null.js` | null examples |
| `25_Literal_all.js` | All literal types (numbers, hex, etc.) |
| `26_Literal_Numberall.js` | All number types (integer, float, binary, octal, hex, BigInt) |
| `27_String.js` | String literals (single & double quotes) |
| `28_Templates_Literals.js` | Template literals with `${}` interpolation |
| `29_Backtick_single_ouble.js` | Single quote vs double quote vs backtick |
| `31_Class.js` | ES6 class syntax (constructor, methods, getters, setters) |
| `function_methods.js` | Functions vs methods comparison |

### Chapter 6 — Operators (Comprehensive)
| File | Topic |
|------|-------|
| `30_operators.js` | Assignment operator basics |
| `31_Arithmetic_Operators.js` | `+`, `-`, `*`, `/` |
| `32_Modulus_op.js` | Modulus (`%`) — remainder |
| `33_Expo.js` | Exponentiation (`**`) |
| `34_IQ.js` | Compound assignment operators (`+=`, `-=`, etc.) |
| `35_Comparsion_Op.js` | Comparison operators (`>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`) |
| `36_Comparsion_Strict_loose.js` | Loose (`==`) vs strict (`===`) comparison |
| `37_IQ_Lose_Strict.js` | Interview Q&A — loose comparison quirks |
| `38_Confusing_Comparsion.js` | Confusing comparisons — `==` vs `===` deep dive |
| `39_Logical_op.js` | Logical operators (`&&`, `\|\|`, `!`) |
| `40_String_Con_Op.js` | String concatenation with `+` |
| `41_Ternary_op.js` | Ternary operator (`condition ? true : false`) |
| `42_Type_op.js` | `typeof` operator |
| `43_Incre_Decr.js` | Pre-increment / pre-decrement (`++a`, `--a`) |
| `44_Null.op.js` | Nullish coalescing (`??`) and null comparisons |
| `45_post_Increment.js` | Post-increment (`a++`) — assign then increment |
| `46_IQ_Increment.js` | Interview Q&A — increment operator |
| `47_Advance_ID.js` | Advanced increment/decrement expressions |

---

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

---

## Var, Let, and Const Differences

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Reassign | ✅ | ✅ | ❌ |
| Redeclare | ✅ | ❌ | ❌ |
| Hoisted | ✅ (undefined) | ✅ (TDZ) | ✅ (TDZ) |
| Must initialize | ❌ | ❌ | ✅ |

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

---

## JavaScript Identifier Rules

- Must begin with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`)
- Cannot start with a digit (`0-9`)
- Can contain letters, digits, underscores, and dollar signs
- Case-sensitive (`myVar` ≠ `myvar`)
- Cannot be a reserved keyword (`let`, `class`, `return`, etc.)
- No spaces or special characters (except `_` and `$`)

### Examples

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

// ✅ Valid alternatives
var className = "math";
var returnValue = 10;
```

---

## Key Concepts Covered

### Operators
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**`
- **Comparison**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical**: `&&` (AND), `||` (OR), `!` (NOT)
- **Ternary**: `condition ? expr1 : expr2`
- **Type**: `typeof`
- **Nullish**: `??`
- **Increment/Decrement**: Pre (`++a`) vs Post (`a++`)

### Literals
- Number literals (decimal, binary, octal, hex, BigInt)
- String literals (single quotes, double quotes, backticks)
- Template literals with `${}` interpolation
- Boolean, null, undefined literals

### Functions vs Methods
- **Functions**: standalone, called directly
- **Methods**: defined on objects, called on instances, access `this`

### Classes (ES6)
- Constructor, instance properties & methods
- Getters & setters
- Inheritance with `extends`

### Hoisting & TDZ
- `var` declarations are hoisted and initialized with `undefined`
- `let` / `const` are hoisted but remain in Temporal Dead Zone (TDZ) until declaration
- Function declarations are hoisted in full

---

## How to Run Examples

```bash
node chapter_01_Basic/01_Basics.js
node Chapter_05_literal_operator_identifiers/22_confusing_operator.js
node Chapter_06_Operators/41_Ternary_op.js
```
