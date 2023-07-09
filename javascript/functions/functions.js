'use strict'

// //functions
// //create - function declaration
// function introduction() {
//     console.log("hello world");
// }
// //invoke 
// introduction(); // hello world

// //function expressions -  anonymous function
// let anonymousFunc = function (a, b) {

//     //return statement
//     return a + b
// };

// console.log(anonymousFunc(5, 7));// output:12

// //function parameters and arguments
// function greet(name) {
//     console.log(`Hello ${name} !`)
// }

// greet("Sovereign");// Hello Sovereign !

// //arrow functions
// const arrowFunc = (username)=>{
//     console.log(`Welcome ${username}!`)
// }
// arrowFunc('sovereign');// Welcome Sovereign !

// //higher-order functions
// function activityChecker(lastMonth,thisMonth){
//   return thisMonth - lastMonth
// }

// function isAccountActive(username,postsCount){
//     postsCount > 0 ? console.log(username , "is active!") : console.log(username ,"is not active!")
// }

// isAccountActive("sovereign",activityChecker(2 , 5)) // sovereign is active!

// //function hoisting

// greet("John");

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }


// //recursive functions
// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }
  
// //closure functions
// function outerFunction() {
//     var x = 10;
    
//     function innerFunction() {
//       console.log(x);  // Accessing x from the outer scope
//     }
    
//     return innerFunction;
//   }
  
//   var closure = outerFunction();
//   closure();  // Output: 10
  
// //prototype introductions

// function User(name){
//     this.name = name
//     console.log("what is this",this) 
// }

// User.prototype.greet = function(){
//     console.log("Welcome", this.name);
//     console.log("what is this",this) 
// }

// let user = new User("Sovereign")
// user.greet();//Welcome Sovereign

// //bind - apply - call
// var obj = {
//     name: "John",
//     greet: function(message) {
//       console.log(message + ", " + this.name);
//     }
//   };
  
//   var otherObj = {
//     name: "Jane"
//   };
  
//   var boundFunction = obj.greet.bind(otherObj);
//   boundFunction("Hello");  // Output: Hello, Jane
  
//   obj.greet.apply(otherObj, ["Hi"]);  // Output: Hi, Jane
  
//   obj.greet.call(otherObj, "Hey");  // Output: Hey, Jane
  

// //functional programming concepts
// var numbers = [1, 2, 3, 4, 5];

// var doubled = numbers.map(function(num) {
//   return num * 2;
// });
// console.log(doubled);  // Output: [2, 4, 6, 8, 10]

// var sum = numbers.reduce(function(acc, num) {
//   return acc + num;
// }, 0);
// console.log(sum);  // Output: 15

// var evens = numbers.filter(function(num) {
//   return num % 2 === 0;
// });
// console.log(evens);  // Output: [2, 4]

