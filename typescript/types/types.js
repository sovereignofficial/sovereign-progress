//primitive types
var price = 10.32;
var total = price + 10;
console.log("total =", total);
var title = "TypeScript Lecture"; // strings -or primitive types cant be mutated in memory just assing a new one
var subtitle = "Learn the TypeScript fundamentals";
var fullTitle = "".concat(title, ": ").concat(subtitle);
console.log("full title:", fullTitle);
var published = true;
if (published) {
    console.log("course published:", published);
}
//NOTE: The Type Inference feature of TypeScript is allows compiler to automatically determine the type of a variable based on it's value.
//that's why we don't need to define the type to variables when we don't need to it. This makes typescript easy to read and develop.
// Note: Type of the variable cant be changed from later cuz this comes from the Static Type System  feature of typescript. Dynamic Type System of javascript is meaning the variable types can be changed from later.
//Then, which situations must we use the type notations in TypeScript?
//Annotate Functions:
printCourse(title, subtitle, price);
function printCourse(title, subtitle, price) {
    var fullTitle = title + subtitle;
    console.log(fullTitle, price);
}
//Objects
var course = {
    title: title,
    subtitle: subtitle,
    price: price,
};
//Nested Object Types
var person = {
    name: "asd",
    age: 12,
    account: {
        username: "s",
        password: "a",
    }
};
//null-undefined
// let money:number;
// console.log(money);
// optional chaining
var myobject;
if (myobject === null || myobject === void 0 ? void 0 : myobject.price) {
    console.log("price:", myobject.price);
}
//null - nullish coalescing
var myprice = myobject !== null && myobject !== void 0 ? myobject : price;
// Arrays
//array notation
var numbers = [1, 2, 4];
// TypeScript Enums
var PhoneType;
(function (PhoneType) {
    PhoneType[PhoneType["RED"] = 0] = "RED";
    PhoneType["BLACK"] = "black";
    PhoneType["WHITE"] = "white";
    PhoneType[PhoneType["GOLD"] = 1] = "GOLD";
})(PhoneType || (PhoneType = {}));
var product = {
    title: "Iphone 12",
    type: PhoneType.GOLD,
    price: 1000,
};
console.log(product);
//any
var numberss = [1, 2, undefined, null, "sdsad"];
// union types 
var uniqueIdentifier = "324140-kndsafllk=3-12=4-213-cms"; // bad usage
uniqueIdentifier = 1000;
var keys = ["asdasd", 12, "asdsad"];
var courseId = 1000; //good usage
// non null assertion operator
var userId;
userId.toString();
//literal types
var weekdays = 7;
var session = "online";
var user = "premium user";
// Note: interfaces are constructs of the objects and they are extendible however the type aliases can be used as same thing but they are not extendible.
// By creating objects or complicated things use interfaces , to more simple things use type aliases.
// Type Assertions
var input = document.getElementById("inputexp");
var input2 = document.getElementById("inputexp2");
