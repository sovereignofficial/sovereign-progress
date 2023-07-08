'use strict'
let myNumber = 6;

let mySecondNumber = myNumber;

console.log(mySecondNumber === myNumber)// output:true

var object1= {a:5, a1:6};

var object2 = object1;

// console.log(object===object2)//output:true

let myObject = {a:5, a1:6};
let mySecondObject = {a:5, a1:6};

console.log(myObject === mySecondNumber)//output:false

const myArray = ["hey",31,{a:32}]

const myFunction = function expFunction(){
    console.log("hello world")
}

console.log(myArray , myFunction);


typeof "hello" // "string"

typeof 0 // "number"

typeof 1n // "bigint"

typeof true // "boolean"

typeof undefined // "undefined"

typeof Symbol("id") // "symbol"

typeof {} // "object"

typeof null // "object

let myGirlFriend = null;

let data;
console.log(data)//output:undefined