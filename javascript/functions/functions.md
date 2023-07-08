# JavaScript Fundamentals IV: Functions

 ## Introduction
 In JavaScript, a function is a block of reusable code that performs a specific task. It can be defined once and then called multiple times throughout the code.To define a function in JavaScript, you can use the function keyword followed by the function name, a pair of parentheses for parameters (if any), and curly braces to enclose the function body.To call a function in JavaScript, you simply need to write the function name followed by parentheses. If the function has parameters, you pass the values inside the parentheses.

```javascript 
//create - function declaration
function introduction() {
    console.log("hello world");
}
//invoke 
introduction(); // hello world
```

 ## What is a Function Expression & Anonymous Function
 A function expression is a way to define a function as part of an expression, typically used to pass a function as an argument to another function or to assign a function to a variable.

 An anonymous function is a function that dont have a name.

```javascript 
//function expressions -  anonymous function
let anonymousFunc = function (a, b) {

    //return statement
    return a + b
};
```

 ## Function Parameters && Arguments
 
 Parameters are variables defined in the function declaration, whereas arguments are the actual values passed to the function during invocation.The number of arguments should match the number of parameters defined in the function declaration.
If fewer arguments are passed, the missing parameters will have a value of undefined.If more arguments are passed, they can be accessed using the arguments object or by using rest operator (...).

```javascript
function greet(name) {
    console.log(`Hello ${name} !`)
}

greet("Sovereign");// Hello Sovereign !
```

 ## Arrow Functions

 Arrow functions introduced in ES6 to writing functions conveniently.They have a shorter syntax and lexically bind the **this** value to **Window** object, avoiding the need for bind(), apply(), or call() methods. Arrow functions are always anonymous and created as a function expression. You can declare an arrow function by '=>' after the opened and closed parentheses ().

```javascript 
const arrowFunc = (username)=>{
    console.log(`Welcome ${username}!`)
}
arrowFunc('sovereign');// Welcome Sovereign !
```

  ## Higher-Order Functions
 
  A higher-order function is taken another functions as parameter or returned a function by return statement.They provide a way to work with functions as data, enabling powerful functional programming paradigms in JavaScript.

```javascript
function activityChecker(lastMonth,thisMonth){
  return thisMonth - lastMonth
}

function isAccountActive(username,postsCount){
    postsCount > 0 ? console.log(username , "is active!") : console.log(username ,"is not active!")
}

isAccountActive("sovereign",activityChecker(2 , 5)) // sovereign is active!
```
 
  ## Function Hoisting

  A function hoisting is a javascript behavior where functions are invoked at the top of before declaration of themselves in compiling time.This allows functions are called before they are defined in the code.However arrow functions are not hoisted.

```javascript
greet("John");

function greet(name) {
  console.log("Hello, " + name + "!");
}
```

  ## Recursive Functions

  Recursive is a technique where a function calls itself directly or indirectly. Recursive functions are useful for solving problems that able to divide into smaller pieces as similar subproblems. However, do not forget to creating stop point while writing recursive functions , otherwise it might be reason of infinite loops.

```javascript
function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
```


  ## Closure Functions

  A closure function is a inner function that retains access to variables of it's parent scope.Closures are created when an inner function references variables from its outer function.They are powerful for preserving state and creating private variables in JavaScript.

```javascript
function outerFunction() {
    var x = 10;
    
    function innerFunction() {
      console.log(x);  // Accessing x from the outer scope
    }
    
    return innerFunction;
  }
  
  var closure = outerFunction();
  closure();  // Output: 10
```

  ## Prototype Introduction

  Every function in JavaScript has a prototype property that allows the addition of properties and methods to all instances created from that function.It enables the concept of inheritance and allows objects to inherit properties and methods from their prototype.

```javascript
function User(name){
    this.name = name
    console.log("what is this",this) 
}

User.prototype.greet = function(){
    console.log("Welcome", this.name);
    console.log("what is this",this) 
}

let user = new User("Sovereign")
user.greet();//Welcome Sovereign
```

  ## Bind-Apply-Call Methods

  JavaScript functions have built-in methods that allow control over the execution context (the value of this) and the ability to pass arguments.

1. bind(): Creates a new function that, when called, has its this value set to a specific object, and allows partial application of arguments.
2. apply(): Invokes a function with a specified this value and accepts an array-like object or iterable as arguments.
3. call(): Invokes a function with a specified this value and accepts individual arguments separated by commas.

```javascript
var obj = {
    name: "John",
    greet: function(message) {
      console.log(message + ", " + this.name);
    }
  };
  
  var otherObj = {
    name: "Jane"
  };
  
  var boundFunction = obj.greet.bind(otherObj);
  boundFunction("Hello");  // Output: Hello, Jane
  
  obj.greet.apply(otherObj, ["Hi"]);  // Output: Hi, Jane
  
  obj.greet.call(otherObj, "Hey");  // Output: Hey, Jane
```

  ## Functional Programming Concepts

JavaScript supports functional programming paradigms, which emphasize the use of pure functions, immutability, and higher-order functions.Higher-order functions like map(), reduce(), and filter() provide powerful ways to manipulate and transform arrays.

```javascript
var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);  // Output: [2, 4, 6, 8, 10]

var sum = numbers.reduce(function(acc, num) {
  return acc + num;
}, 0);
console.log(sum);  // Output: 15

var evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens);  // Output: [2, 4]
```

## Summary
1. Functions in JavaScript are blocks of reusable code that perform specific tasks. They can be defined using the function keyword and invoked by using the function name followed by parentheses.
2. Function expressions allow defining functions as part of an expression, often used to pass functions as arguments or assign them to variables. Anonymous functions are functions without a name.
3. Parameters are variables defined in the function declaration, while arguments are the values passed to the function during invocation.
4. Arrow functions introduced in ES6 provide a concise syntax for writing functions and automatically bind the this value to the Window object.
5. Higher-order functions are functions that accept other functions as parameters or return functions as results, enabling powerful functional programming paradigms.
6. Function hoisting is a JavaScript behavior where function declarations are moved to the top of their containing scope during the compilation phase, allowing functions to be called before they are defined.
7. Recursive functions are functions that call themselves directly or indirectly, often used to solve problems that can be divided into smaller subproblems.
8. Closures are functions that retain access to variables from their parent scope even after the parent function has finished executing. They are useful for preserving state and creating private variables.
9. Functions in JavaScript have a prototype property that allows adding properties and methods to all instances created from that function, enabling inheritance.
10. JavaScript provides built-in methods like bind(), apply(), and call() to control the execution context and pass arguments to functions.
11. Functional programming concepts like map(), reduce(), and filter() allow manipulating and transforming arrays in powerful ways.

Understanding these fundamentals of functions in JavaScript is crucial for building efficient and reusable code.