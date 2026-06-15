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

## Common Interview Topics

- Difference between `==` and `===`
- var vs let vs const
- Hoisting and Temporal Dead Zone
- null vs undefined
- Pre-increment (`++a`) vs Post-increment (`a++`)
- Truthy/falsy values
- Type coercion quirks
- Closure and scope
