//map

// Creating an empty map
const myMap = new Map();

// Adding entries
myMap.set("info", { name: "John", age: 30 });

// Accessing the values
console.log(myMap.get("info")); // { name: "John", age: 30 }

// Checking if a key exists
console.log(myMap.has("info")); // true

// Getting the size
console.log(myMap.size); // 1

// Deleting an entry
myMap.delete("info");

// Iterating over the map
myMap.forEach((value, key) => {
  console.log(key, value);
});


//weakmap

const wm1 = new WeakMap();
const obj1 = {};

wm1.set(obj1, "Hello");

console.log(wm1.get(obj1)); // "Hello"
console.log(wm1.has(obj1)); // true

wm1.delete(obj1);
console.log(wm1.has(obj1)); // false


//set

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // This will not be added because 2 already exists in the set

console.log(mySet.has(1)); // true
console.log(mySet.size); // 3


//weakset

let ws = new WeakSet();
let obj = {};

ws.add(obj);

console.log(ws.has(obj)); // true

ws.delete(obj);
console.log(ws.has(obj)); // false
