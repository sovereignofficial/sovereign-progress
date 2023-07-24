//primitive types
const price:number = 10.32;
const total = price + 10;
console.log("total =", total);

const title:string = "TypeScript Lecture";  // strings -or primitive types cant be mutated in memory just assing a new one
let subtitle = "Learn the TypeScript fundamentals";
const fullTitle = `${title}: ${subtitle}`;
console.log("full title:",fullTitle);

const published:boolean = true;
if(published){
    console.log("course published:",published);
}

//NOTE: The Type Inference feature of TypeScript is allows compiler to automatically determine the type of a variable based on it's value.
//that's why we don't need to define the type to variables when we don't need to it. This makes typescript easy to read and develop.

// Note: Type of the variable cant be changed from later cuz this comes from the Static Type System  feature of typescript. Dynamic Type System of javascript is meaning the variable types can be changed from later.

//Then, which situations must we use the type notations in TypeScript?
//Annotate Functions:
printCourse(title,subtitle,price);
function printCourse(title:string,subtitle:string,price:number){
    let fullTitle = title + subtitle;
    console.log(fullTitle,price);
}


//Objects
const course:Course= {
    title,
    subtitle,
    price,
}

//Nested Object Types
const person:{
    name:string,
    age:number,
    account:{
        username:string,
        password:string,
    }
} = {
    name:"asd",
    age:12,
    account:{
        username:"s",
        password:"a",
    }
}

//null-undefined
// let money:number;
// console.log(money);

// optional chaining
let myobject;

if(myobject?.price){
    console.log("price:",myobject.price)
}

//null - nullish coalescing
let myprice = myobject ?? price;

// Arrays
//array notation
const numbers:number[] = [1,2,4];

// TypeScript Enums
enum PhoneType{
    RED,
    BLACK="black",
    WHITE="white",
    GOLD=1,
}

const product ={
    title:"Iphone 12",
    type:PhoneType.GOLD,
    price:1000,
}

console.log(product);

//any
let numberss:any[] = [1,2,undefined,null,"sdsad"];


// union types 
let uniqueIdentifier: number | string = "324140-kndsafllk=3-12=4-213-cms"; // bad usage
uniqueIdentifier = 1000;

const keys: (number | string)[] = ["asdasd",12,"asdsad"]

let courseId : number | null = 1000; //good usage

// non null assertion operator
// let userId: number | null;
// userId!.toString();

//literal types
let weekdays: 7 = 7;
let session: "online" | "offline" = "online";

// type aliases
type UserType = "admin" | "author" | "user" | "premium user";

let user: UserType = "premium user";

// interfaces

interface Course{
    readonly title:string;
    subtitle:string;
    price:number;
    lessonsCount?:number;
}

// Note: interfaces are constructs of the objects and they are extendible however the type aliases can be used as same thing but they are not extendible.
// By creating objects or complicated things use interfaces , to more simple things use type aliases.

// Type Assertions
// const input = <HTMLInputElement> document.getElementById("inputexp")
// const input2 =  document.getElementById("inputexp2") as HTMLInputElement;