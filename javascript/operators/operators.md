# JavaScript Fundamentals III: Operators

 Operators are symbols used to perform operations on operands, such as variables and values.We can categorize the operators into 11 different groups in JavaScript as Arithmetic,Comparison,Logical,Assignment,Bitwise,Typeof,Spread,Rest,Nullish Coalescing,Logical Assignment and Nullish Assignment operators.

## Arithmetic Operators
 Arithmetic operators are used to perform mathematical operations, such as addition, subtraction, multiplication, division and exponentiation. Some commonly used arithmetic operators include:

   1. +: Addition
   2. -: Subtraction
   3. *: Multiplication
   4. /: Division
   5. %: Modulus (remainder of division)
   6. **: Exponentiation
 
```javascript
 //Arithmetic Operators
 let x = 10;
 let y = 5;
 let sum = x + y; // 15
 let difference = x - y; // 5
 let product = x * y; // 50
 let quotient = x / y; // 2
 let remainder = x % y; // 0
 let exponentiation = 2 ** 4 // 2⁴ = 16
```

## Comparison Operators
Comparison operators are used to compare two values or variables using different operators. Some commonly used comparison operators include:

1. ==: Equal to
2. !=: Not equal to
3. ===: Strictly equal to (checks both value and data type)
4. !==: Strictly not equal to (checks both value and data type)
5. (<): Less than
6. (>): Greater than
7. (<=): Less than or equal to
8. (>=): Greater than or equal to

```javascript
let a = 5;
let b = 10;
let equalTo = a == b; // false
let notEqualTo = a != b; // true
let strictlyEqualTo = a === b; // false
let strictlyNotEqualTo = a !== b; // true
let lessThan = a < b; // true
let greaterThan = a > b; // false
let lessThanOrEqualTo = a <= b; // false
let greaterThanOrEqualTo = a >= b; // true
```

## Logical Operators
Logical operators return boolean values and check whether multiple conditions are true or false. Some commonly used logical operators include:

 1. &&: Logical AND
 2. ||: Logical OR
 3. !: Logical NOT
 
    ```javascript
    let c = 5;
    let d = 10;
    let bothTrue = c > 0 && d > 0; // true
    let eitherTrue = c > 0 || d > 0; // true
    let notTrue = !(c > 0); // false
    ```
    
## Assignment Operators
Assignment operators are used to assign a value to a variable. The most commonly used assignment operator is the = operator, but other assignment operators like +=, -=, *=, and /= also exist.

```javascript
    let z = 10;
     z += 5; // z = z + 5; z = 15
     z -= 5; // z = z - 5; z = 5
     z *= 2; // z = z * 2; z = 20
     z /= 2; // z = z / 2; z = 5
```
 
## Bitwise Operators
Bitwise operators work on 32-bit numbers and perform operations like bitwise AND, OR, and XOR. The most common bitwise operators are:

 1. &: Bitwise AND
 2. |: Bitwise OR
 3. ^: Bitwise XOR

```javascript 
let e = 10; // 1010 in binary
let f = 2;
let bitwiseAnd = e & f; // 0000 in binary (10 & 0000 = 0000)
let bitwiseOr = e | f; // 0001 in binary (10 | 0000 = 0001)
let bitwiseXOR = e ^ f; // 0001 in binary (10 ^ 0000 = 0001)
 ```

## Typeof Operator
  The typeof operator returns the data type of a variable.., such as number, string, or boolean.
  
  ```javascript 
    let g = 5;
    g = typeof g; // "number"
  ```

## Spread Operator
The spread operator (...) is used to expand elements of an iterable (like an array or object) into individual elements. It can be used in various scenarios, such as merging arrays, copying arrays, and passing elements as function arguments.

```javascript
//Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```


## Rest Operator
The rest operator (denoted by three dots ...) allows you to represent an indefinite number of arguments as an array. This makes it easier to work with functions that accept a varying number of arguments.

```javascript
//Rest Operator
function sum(a, b, ...rest) {
    return a + b + rest.reduce((acc, val) => acc + val, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // 15
```

## Nullish Coalescing Operator
The Nullish Coalescing Operator is useful when you want to provide a fallback value only if the first operand is null or undefined. Unlike the logical OR (||) operator, the Nullish Coalescing Operator does not evaluate the second expression if the first operand is neither null nor undefined

```javascript
//Nullish Coalescing Operator
let pass = null ?? 60;
let pass2 = undefined ?? 60;
// pass and pass2 will be 60, because null and undefined are replaced with the right-hand side value
```

## Logical Assignment Operators
In JavaScript, there are three logical assignment operators introduced in ES2021 (ECMAScript 2021):

1. Logical OR assignment (||=)
2. Logical AND assignment (&&=)
3. Nullish assignment (??=)

### Logical OR assignment (||=)
The logical OR assignment operator (||=) assigns the value of the right operand (y) to the left operand (x) if the left operand is falsy. It checks if x is true or false, and if x is falsy, it runs the (x = y) block, storing the value of y into x. If x is truthy, the value of the next block (x = y) does not execute.

```javascript
// Logical OR assignment (||=)
let title;
title ||= 'untitled';
console.log(title); // Output: 'untitled'
```

### Logical AND assignment (&&=)
The logical AND assignment operator (&&=) assigns the value of the right operand (y) to the left operand (x) if the left operand is truthy. It checks if x is true or false, and if x is truthy, it runs the (x = y) block, storing the value of y into x. If x is falsy, the value of the next block (x = y) does not execute.

```javascript
// Logical AND assignment (&&=)
let person = {
    firstName: 'Jane',
    lastName: 'Doe',
};
person.lastName &&= 'Smith';
console.log(person); // Output: {firstName: 'Jane', lastName: 'Smith'}
```


### Nullish assignment (??=)
The nullish assignment operator (??=) assigns the value of the right operand (y) to the left operand (x) if the left operand is either null or undefined. It checks if x is null or undefined, and if so, it runs the (x = y) block, storing the value of y into x. If x is neither null nor undefined, the value of the next block (x = y) does not execute.

```javascript
// Nullish assignment (??=)
let man = null;
man ??= 'John Doe';
console.log(man); // Output: 'John Doe'
```

## Summary

In summary, JavaScript operators are essential for performing various operations on variables and values. They can be categorized into 11 different groups: Arithmetic, Comparison, Logical, Assignment, Bitwise, Typeof, Spread, Rest, Nullish Coalescing, Logical Assignment, and Nullish Assignment operators. Each group has its specific use cases and syntax, which allows for a wide range of possibilities when working with JavaScript code. Understanding and mastering these operators is crucial for efficient and effective JavaScript programming.

Here's a quick recap of the different operator categories and some examples:

Arithmetic Operators: Perform mathematical operations like addition, subtraction, multiplication, division, and exponentiation.
Comparison Operators: Compare two values or variables using different operators, such as equal to, not equal to, strictly equal to, and strictly not equal to.
Logical Operators: Return boolean values and check whether multiple conditions are true or false, using operators like logical AND, logical OR, and logical NOT.
Assignment Operators: Assign a value to a variable using the most common assignment operator, =.
Bitwise Operators: Work on 32-bit numbers and perform operations like bitwise AND, OR, and XOR.
Typeof Operator: Returns the data type of a variable.
Spread Operator: Expands elements of an iterable into individual elements, used in scenarios like merging arrays, copying arrays, and passing elements as function arguments.
Rest Operator: Represents an indefinite number of arguments as an array, making it easier to work with functions that accept a varying number of arguments.
Nullish Coalescing Operator: Provides a fallback value only if the first operand is null or undefined, without evaluating the second expression if the first operand is neither null nor undefined.
Logical Assignment Operators: Assign the value of the right operand to the left operand if the left operand is falsy, true, or null.
Nullish Assignment Operator: Assign the value of the right operand to the left operand if the left operand is either null or undefined.
By understanding and utilizing these operators, you can create more efficient and elegant JavaScript code.