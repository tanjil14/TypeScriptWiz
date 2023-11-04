# TypeScriptWiz

## What is TypeScript:
- TypeScript is a language for application-scale JavaScrip.
- Typescript is an object oriented Programming Language that build on top of JavaScript with Extra Feature.
- Typescript is superset of JavaScript developed by microsoft.
- Typescript is strongly Typed programming Languages.
- Typescript Designed By Andres Hejlsberg with c# or .net specification .

## Whats Wrong with JavaScript ?
**Dynamic Typing:** *JavaScript is dynamically typed, which can lead to runtime type errors. TypeScript introduces static typing, enabling you to catch type-related issues during development.*

**Suitability for Large-Scale Applications:** *JavaScript's dynamic nature can make it challenging to manage and maintain large applications. TypeScript's static typing, interfaces, and type checking help improve code quality and maintainability for large-scale projects.*

**Lack of Strong Typing:** *JavaScript lacks strong typing, making it prone to type-related errors. TypeScript adds strong typing, allowing developers to explicitly define data types for variables, parameters, and function return values.*

**Errors During Runtime:** *JavaScript errors are often detected at runtime, which can be problematic. TypeScript shifts many of these errors to compile-time, reducing the likelihood of runtime issues.*

**Type Safety:** *JavaScript may suffer from type coercion and type-related issues that can be challenging to debug. TypeScript enforces type safety, reducing the risk of such problems.*

**Bug Detection:** *JavaScript can be prone to hard-to-find bugs due to its dynamic nature. TypeScript's type checking helps detect and prevent certain classes of bugs, making it easier to locate and fix issues.*

## Can Browser Recognize TypeScript Code ?
- No, We need to `transpiled` typeScript by using complier like `babel, swc` etc.
- Typescript convert into javaScript then Browser can read the code.

## How Many Types of Annotation In TypeScript ?
- There are two types of annotation in TypeScript.
  - Explicit
  - Implicit
## What is Implicit Type In TypeScript ?
- Implicit Types are types That Typescript infers based on the initial Value of the variable.
- If we can declare and assign value in same line typescript infers the correct type.
- Example:
```
// implicitly infers as string
const name = "Tanjil Ahmed";

// implicitly infers as number:
const age = 26;
```
- When we declared a variable but not assign type of the variable ``typescript`` infers the ``type`` as ``any``. It's not recommended.
- We can assign ``any type of data`` on this variable.
- Example :
```
// implicitly infer as  any
let a;

//  we can assign any type of data  to the variable like below:
a = 5; // number
a = "Tanjil Ahmed";
a = false; 
```
## What is Explicit Type in TypeScript ?