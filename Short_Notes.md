# JavaScript Short Notes

## Variable Declarations

| Keyword | Scope | Reassign | Redeclare | Hoisted |
|---------|-------|----------|-----------|---------|
| `var` | Function | ✅ | ✅ | ✅ (undefined) |
| `let` | Block | ✅ | ❌ | ✅ (TDZ) |
| `const` | Block | ❌ | ❌ | ✅ (TDZ) |

## Data Types

- **Primitive**: string, number, bigint, boolean, undefined, null, symbol
- **Object**: object, array, function

## Operators

| Type | Operators |
|------|-----------|
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `**` |
| Assignment | `=`, `+=`, `-=`, `*=`, `/=`, `%=` |
| Comparison | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` |
| Logical | `&&`, `\|\|`, `!` |
| Bitwise | `&`, `\|`, `~`, `^`, `<<`, `>>`, `>>>` |
| Ternary | `condition ? val1 : val2` |
| Nullish | `??` (null/undefined fallback) |
| Unary | `+`, `-`, `!`, `~`, `++`, `--`, `typeof`, `void`, `delete` |
| Relational | `in`, `instanceof` |
| String | `+` (concatenation) |
| Comma | `,` (evaluate multiple, return last) |
| BigInt | Arithmetic on `BigInt` values |

## Loose vs Strict Equality

```js
==    // compares value (type coercion allowed)
===   // compares value AND type (no coercion)

5 == "5"   // true
5 === "5"  // false
null == undefined  // true
null === undefined // false
```

## Hoisting & TDZ

- `var` → hoisted, initialized as `undefined`
- `let` / `const` → hoisted, NOT initialized (TDZ error if accessed before declaration)
- Function declarations → hoisted fully (call before define)

## Truthy & Falsy

**Falsy**: `false`, `0`, `""`, `null`, `undefined`, `NaN`
**Truthy**: everything else

## Control Flow

```js
if (condition) { } else if (condition) { } else { }
switch (val) { case x: break; default: }
for (let i = 0; i < n; i++) { }
while (condition) { }
do { } while (condition);
```

## Functions

```js
// declaration (hoisted)
function foo() { }

// expression (not hoisted)
const foo = function() { };

// arrow
const foo = () => { };
```

## Classes (ES6)

```js
class MyClass {
  constructor(name) { this.name = name; }
  method() { }
  get prop() { return this.name; }
  set prop(val) { this.name = val; }
}
```

## Common Interview Topics & Answers

- **Difference between `==` and `===`**: `==` compares values after type coercion (e.g., `5 == "5"` → true). `===` compares both value and type without coercion (e.g., `5 === "5"` → false).

- **var vs let vs const**: `var` is function-scoped, hoisted with `undefined`, allows redeclaration. `let` is block-scoped, hoisted but in TDZ, no redeclaration. `const` is block-scoped, hoisted but in TDZ, no redeclaration, cannot be reassigned.

- **Hoisting and Temporal Dead Zone**: `var` declarations are hoisted and initialized to `undefined`. `let`/`const` are hoisted but remain uninitialized — accessing them before their declaration throws a `ReferenceError` (Temporal Dead Zone).

- **null vs undefined**: `undefined` means a variable is declared but not assigned a value. `null` is an intentional assignment representing "no value". `null == undefined` → true, `null === undefined` → false.

- **Pre-increment (`++a`) vs Post-increment (`a++`)**: `++a` increments then returns the new value. `a++` returns the original value then increments.

- **Truthy/falsy values**: Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Everything else (objects, arrays, non-empty strings, non-zero numbers) is truthy.

- **Type coercion quirks**: `"5" - 1` → `4` (string coerced to number), `"5" + 1` → `"51"` (number coerced to string for concatenation), `"5" * "2"` → `10`, `[] + []` → `""`, `null` coerces to `0` in arithmetic, `undefined` coerces to `NaN`.

- **Closure and scope**: A closure is a function that retains access to its outer (lexical) scope even after the outer function has returned. Example: a function inside another function can access the outer function's variables. Scope determines variable visibility — global, function, and block scope.
