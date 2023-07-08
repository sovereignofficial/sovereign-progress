//Arithmetic Operators
let x = 10;
let y = 5;
let sum = x + y; // 15
let difference = x - y; // 5
let product = x * y; // 50
let quotient = x / y; // 2
let remainder = x % y; // 0
let exponentiation = 2 ** 4 // 2⁴ = 16


//Comparison Operators
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


//Logical Operators
let c = 5;
let d = 10;
let bothTrue = c > 0 && d > 0; // true
let eitherTrue = c > 0 || d > 0; // true
let notTrue = !(c > 0); // false


//Assignment Operators
let z = 10;
 z += 5; // z = z + 5; z = 15
 z -= 5; // z = z - 5; z = 5
 z *= 2; // z = z * 2; z = 20
 z /= 2; // z = z / 2; z = 5


//Bitwise Operators
let e = 10; // 1010 in binary
let f = 2;
let bitwiseAnd = e & f; // 0000 in binary (10 & 0000 = 0000)
let bitwiseOr = e | f; // 0001 in binary (10 | 0000 = 0001)
let bitwiseXOR = e ^ f; // 0001 in binary (10 ^ 0000 = 0001)


//Typeof Operator
let g = 5;
 g = typeof g; // "number"


//Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]


//Rest Operator
function sum(a, b, ...rest) {
    return a + b + rest.reduce((acc, val) => acc + val, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // 15

  
//Nullish Coalescing Operator
let pass = null ?? 60;
let pass2 = undefined ?? 60;
// pass and pass2 will be 60, because null and undefined are replaced with the right-hand side value

let kid = 0;
let schoolClass = 0 ?? 60;
// schoolClass will be 0, because the ?? operator does not coerce falsy values


//Logical Assignment Operators
// Logical OR assignment (||=)
let title;
title ||= 'untitled';
console.log(title); // Output: 'untitled'

// Logical AND assignment (&&=)
let person = {
    firstName: 'Jane',
    lastName: 'Doe',
};
person.lastName &&= 'Smith';
console.log(person); // Output: {firstName: 'Jane', lastName: 'Smith'}

// Nullish assignment (??=)
let man = null;
man ??= 'John Doe';
console.log(man); // Output: 'John Doe'
