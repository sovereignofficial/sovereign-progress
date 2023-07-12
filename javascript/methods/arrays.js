const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number,index,array) {
  console.log(number,index,array);
});

const squaredNumbers = numbers.map((num) => {
  return num * num;
});

// console.log(squaredNumbers);
 // Output: [1, 4, 9, 16, 25]

var creatures = [
    {name: "Shark", habitat: "Ocean"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Monkey", habitat: "Jungle"}
  ];
  
  var aquaticCreatures = creatures.filter(function(creature) {
    return creature.habitat == "Ocean";
  });
  
  console.log(aquaticCreatures);
  // Output: [ {name: "Shark", habitat: "Ocean"}, {name: "Whale", habitat: "Ocean"} ]


  const fruits = [ 'Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana']
  const occurrences = fruits.reduce((acc, currFruit) => {
    console.log("acc",acc);
      return {...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
  }, {})
console.log(occurrences); // { Banana: 2, Orange: 2, Apple: 1, Pear: 1 }

var carArray = ['Mercedes-Benz', 'BMW', 'Audi'];
var modelArray = carArray.slice(0, 2);
console.log(modelArray); // Output: ['Mercedes-Benz', 'BMW']

let removed = fruits.splice(2, 1, "mango", "watermelon");
console.log(fruits); // Output: ['Banana','Orange','mango','watermelon','Orange','Pear','Banana']
console.log(removed); // Output: ["Apple"]

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    console.log("a is",a , "b is",b);
    return a-b});
console.log(points);//[ 1, 5, 10, 25, 40, 100 ]


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

const arry = Array(3).fill({});
arry[0].hi = "hi";
console.log(arry); // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false


    let text = fruits.join();
    // Output: "Banana,Orange,Apple,Mango"

console.log(text);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix.join(";"));
// Output: "1,2,3;4,5,6;7,8,9"

console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, null , 3, 4].reverse()); // [4, 3, null , 1]
console.log([1, undefined , 3, 4].reverse()); // [4, 3, undefined , 1]
console.log([1, 23 , 3, 4].reverse()); // [4, 3, 23 , 1]


fruits.push('grape', 'melon', 'kiwi');
console.log(fruits);
// Output: ['apple', 'banana', 'orange', 'grape', 'melon', 'kiwi']

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin']
console.log(popped); // 'sturgeon'


const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];
while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Output: Andrew, Tyrone, Paul, Maria, Gayatri


fruits.unshift("Lemon","Pineapple");
console.log(fruits); // ["Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]


const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  function isCherries(fruit) {
    return fruit.name === "cherries";
  }
  
  console.log(inventory.find(isCherries));
  // Output: { name: 'cherries', quantity: 5 }

  // Example 1
function isPositive(element) {
    return element > 0;
}

let arr = [11, 89, 23, 7, 98];
let value = arr.every(isPositive);
console.log(value);
// Output: true

// Example 2
function isEven(element) {
    return element % 2 === 0;
}

let arr2 = [2, 4, 6, 7, 8];
let value2 = arr2.every(isEven);
console.log(value2);
// Output: false


const ages = [3, 10, 18, 20];
let index = ages.findIndex(age => age > 18);
console.log(index); // Prints: 3


function createArray(arraylike, mapFunc) {
    return Array.from(arraylike, mapFunc);
  }
  let result = createArray([2, 4, 6], (element) => element + 2);
  console.log(result); // Output: [ 4, 6, 8 ]

  
  let set = new Set(["JavaScript", "Python", "Go", "Python"]);
let result2 = Array.from(set);
console.log(result2); // Output: [ 'JavaScript', 'Python', 'Go' ]


const arrayLike = {
    length: 3,
    0: [1, 2],
    1: { length: 2, 0: 3, 1: 4 },
    2: 5,
    3: 3, // ignored by flat() since length is 3
  };
  console.log(Array.prototype.flat.call(arrayLike));
  // [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
  
  
  const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
  array.findLast(n => n.value % 2 === 1); // Returns { value: 3 }

  
 array.findLastIndex(n => n.value % 2 === 1); // Returns 2


 const sequence = [1, 2, 3];
const newArr = sequence.toReversed(); // Returns [3, 2, 1]


const outOfOrder = new Uint8Array([3, 1, 2]);
const newArr2 = outOfOrder.toSorted(); // Returns Uint8Array [1, 2, 3]

const outOfOrder2 = new Uint8Array([3, 1, 2]);
const newArr3 = outOfOrder.toSorted(); // Returns Uint8Array [1, 2, 3]


const newArr4 = array.toSpliced(1, 2, 'a', 'b'); // Returns [1, 'a', 'b']

const correctionNeeded = [1, 1, 3];
correctionNeeded.with(1, 2); // Returns [1, 2, 3]


