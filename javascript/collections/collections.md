# Map, WeakMap, Set, WeakSet in JavaScript
JavaScript provides several higher-level data structures to help developers store and manipulate data in a more efficient and convenient way. Among these are Map, WeakMap, Set, and WeakSet.

## Map
A Map in JavaScript is a collection of key-value pairs, where the key and the value can be of any type. It's similar to an object, but it has some differences and additional features:

Any value (objects and primitive values) may be used as either a key or a value.
It remembers the original insertion order of the keys.
It includes convenient methods like set, get, has, delete, and clear.
It has a size property to get the number of entries.
Here's an example of a Map in JavaScript:

```javascript
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

```


## WeakMap

A WeakMap is similar to a Map, but there are a few key differences:

In a WeakMap, every key must be an object. Primitive values cannot be used as keys.
The references to the keys are weak. This means if there are no other references to the key object, JavaScript's garbage collector can remove the key-value pair from the WeakMap.
A WeakMap is not enumerable. You cannot use a for...in loop or forEach to iterate over it.
It does not have a size property.
Here's an example of a WeakMap:

```javascript
const wm1 = new WeakMap();
const obj1 = {};

wm1.set(obj1, "Hello");

console.log(wm1.get(obj1)); // "Hello"
console.log(wm1.has(obj1)); // true

wm1.delete(obj1);
console.log(wm1.has(obj1)); // false

```

## Set

A Set in JavaScript is a collection of unique values. It's like an array, but it does not allow duplicate values, and it doesn't allow you to reorder elements. Like Map, it also includes convenient methods like add, has, delete, and clear, and it has a size property.

```javascript
let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // This will not be added because 2 already exists in the set

console.log(mySet.has(1)); // true
console.log(mySet.size); // 3

```


## WeakSet

A WeakSet is similar to a Set, but with some differences:

A WeakSet only stores objects. Primitive values cannot be stored in a WeakSet.
The references to the objects are weak. If there are no other references to an object, it can be garbage collected.
A WeakSet is not enumerable. You cannot use a for...in loop or forEach to iterate over it.
It does not have a size property.
Here's an example of a WeakSet:

```javascript
let ws = new WeakSet();
let obj = {};

ws.add(obj);

console.log(ws.has(obj)); // true

ws.delete(obj);
console.log(ws.has(obj)); // false

```