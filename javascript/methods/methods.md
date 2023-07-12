# JavaScript Methods

## Array Methods

  ### forEach()
The JavaScript forEach method is used to loop through arrays and execute a callback function for each element of the array. It is one of several ways to iterate over arrays in JavaScript.

 ```javascript
 numbers.forEach(function(number,index,array) {
  console.log(number,index,array);
});
 ```

  ### map()
  The JavaScript map() method is used to create a new array by applying a function to each element of an existing array. It is a higher-order function that takes a callback function as its argument. The callback function is called with each element of the array and can perform any desired operation on the element. The map() method then collects the return values of the callback function and creates a new array with those values.

 ```javascript
 const squaredNumbers = numbers.map((num) => {
  return num * num;
});

// console.log(squaredNumbers);
 // Output: [1, 4, 9, 16, 25]
 ```

  ### filter()
  The JavaScript filter() method is used to create a new array that contains only the elements from the original array that pass a certain test implemented by a provided function. It does not modify the original array, but rather creates a new one with the filtered elements
 ```javascript
 array.filter(function(currentValue, index, arr), thisValue)
 ```
 1. array is the array on which the filter() method is called.
 2. currentValue is the current element being processed in the array.
 3. index (optional) is the index of the current element being processed.
 4. arr (optional) is the array on which the filter() method is called.
 5. thisValue (optional) is the value to be used as this when executing the callback function 
 
  ```javascript
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
  ```

  ### reduce()

  The JavaScript array reduce method is a built-in iteration method used for performing an accumulative action on an array.The method accepts a callback function that's called once for every item in the array. Every callback function call must always return an accumulated value.

  There are several use cases to use reduce method such as summing an array, count occurences in an array-object items and so on...

 ```javascript
    // array.reduce(callback, initialvalue)
   const fruits = [ 'Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana']
  const occurrences = fruits.reduce((acc, currFruit) => {
    console.log("acc",acc);
      return {...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
  }, {})
  console.log(occurrences); // { Banana: 2, Orange: 2, Apple: 1, Pear: 1 }
 ```

  ### slice()
 The JavaScript slice() method is used to extract a portion of an array and return it as a new array object. The original array is not modified by this method. The slice() method takes two optional parameters: start and end. The start parameter determines the index at which to start the extraction, and the end parameter determines the index at which to end the extraction (excluding the element at that index).

 ```javascript
  var carArray = ['Mercedes-Benz', 'BMW', 'Audi'];
  var modelArray = carArray.slice(0, 2);
  console.log(modelArray); // Output: ['Mercedes-Benz', 'BMW']
 ```

  ### sort()
  The JavaScript splice() method is used to modify the contents of an array by removing existing elements and/or adding new elements. It can be used to manipulate items in an array by directly modifying the original array and returning the removed elements as a new array. The basic syntax for splice() is 
  Array.splice(start, removeCount, newItem, newItem, ...) :

  1. start: The index from which the modification of the array starts. This can be a positive or negative number, with negative numbers counting from the end of the array.
 2. removeCount: The number of elements to be removed from the starting index. If removeCount is 0, no elements are removed.
 3. newItem: The elements to add to the array. If no elements are specified, splice() will simply remove elements from the array.


 ```javascript
 
    let removed = fruits.splice(2, 1, "mango", "watermelon");
    console.log(fruits); // Output: ['Banana','Orange','mango','watermelon','Orange','Pear','Banana']
    console.log(removed); // Output: ["Apple"]
 ```

  ### concat()
  The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

 ```javascript
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = array1.concat(array2);

    console.log(array3);
    // Expected output: Array ["a", "b", "c", "d", "e", "f"]
 ```

  ### fill()
  The JavaScript fill() method is used to change all elements in an array to a static value. It allows you to specify a start index and an end index, and it will fill the array with the specified value within that range. The fill() method is a mutating method, meaning it modifies the original array. It does not alter the length of the array, but it changes the content of the array. It can also fill empty slots in sparse arrays with the specified value

  Syntax:
  ```javascript
  array.fill(value, start, end)
  ```

 ```javascript
    console.log([1, 2, 3].fill(4)); // [4, 4, 4]
    console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
    console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
    console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
    console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
    console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
    console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
    console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
    console.log(Array(3).fill(4)); // [4, 4, 4]
 ```

  ### includes()
  The JavaScript includes() method is used to determine whether an array contains a certain value among its entries. It returns true if the value is found and false if it is not found. The method takes one required parameter, searchElement, which is the value to search for in the array. It also has an optional parameter, fromIndex, which specifies the index at which to start searching in the array.

Here is the syntax for using the includes() method:
 ```javascript
    array.includes(searchElement)
    array.includes(searchElement, fromIndex)
 ```

 ```javascript
    [1, 2, 3].includes(2); // true
    [1, 2, 3].includes(4); // false
    [1, 2, 3].includes(3, 3); // false
    [1, 2, 3].includes(3, -1); // true
    [1, 2, NaN].includes(NaN); // true
    ["1", "2", "3"].includes(3); // false
 ```

  ### join()
  The join() method in JavaScript is used to join the elements of an array into a string. It creates and returns a new string by concatenating all of the elements in the array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

    The syntax for using the join() method is as follows:
```javascript
        join()
        join(separator)

```
    
```javascript
        let text = fruits.join();
        // Output: "Banana,Orange,Apple,Mango"
```

  ### reverse()
  The reverse() method in JavaScript is used to reverse the order of elements in an array. It modifies the original array in place and returns a reference to the same array with the reversed order. The first element of the array becomes the last, and the last element becomes the first. The elements in between are also reversed accordingly.

    Here is an example of using the reverse() method:
 ```javascript
    console.log([1, , 3].reverse()); // [3, empty, 1]
    console.log([1, null , 3, 4].reverse()); // [4, 3, null , 1]
    console.log([1, undefined , 3, 4].reverse()); // [4, 3, undefined , 1]
    console.log([1, 23 , 3, 4].reverse()); // [4, 3, 23 , 1]
 ```

  ### push()
  The JavaScript push() method is used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array. The push() method can take any number of parameters, each representing an element to be added to the array. The elements are added in the order they are passed as parameters.

    Here is an example of using the push() method to add elements to an array:
 ```javascript
    fruits.push('grape', 'melon', 'kiwi');
    console.log(fruits);
    // Output: ['apple', 'banana', 'orange', 'grape', 'melon', 'kiwi']
 ```

  ### pop()
  The pop() method in JavaScript is used to remove the last element from an array and returns that element. It also changes the length of the array. If the array is empty, it returns undefined. The syntax for using the pop() method is array.pop().

    Here is an example of how to use the pop() method:
```javascript
    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const popped = myFish.pop();
    console.log(myFish); // ['angel', 'clown', 'mandarin']
    console.log(popped); // 'sturgeon'
 ```

  ### shift()
  The shift() method in JavaScript is used to remove the first element from an array and returns the removed element. This method changes the length of the array.

 ```javascript
    const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];
    while (typeof (i = names.shift()) !== "undefined") {
    console.log(i);
    }
    // Output: Andrew, Tyrone, Paul, Maria, Gayatri
 ```


  ### unshift()
  The unshift() method in JavaScript is used to add one or more elements to the beginning of an array and returns the new length of the array
 ```javascript
    fruits.unshift("Lemon","Pineapple");
    console.log(fruits); // ["Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]
 ```

  ### find()
  The find() method in JavaScript is used to return the first element in an array that satisfies a provided testing function. If no element satisfies the testing function, undefined is returned. Here is an example of how to use the find() method:
 ```javascript
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
 ```

  ### every()
  The every() method in JavaScript is used to check if all the elements in an array satisfy a certain condition. It returns a boolean value: true if all elements satisfy the condition, and false if at least one element does not satisfy the condition. Here is how you can use the every() method:
 ```javascript
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
 ```

  ### findIndex()
  The findIndex() method in JavaScript is used to return the index of the first element in an array that satisfies a provided testing function. If no elements satisfy the testing function, -1 is returned
 ```javascript
    array.findIndex(function(currentValue, index, arr), thisValue)
 ```
 ```javascript
    const ages = [3, 10, 18, 20];
    let index = ages.findIndex(age => age > 18);
    console.log(index); // Prints: 3
 ```
  ### from()
  The Array.from() method in JavaScript is used to create a new array from any array-like or iterable object. An array-like object is any object with a length property and indexed elements, such as a String

  The syntax for the Array.from() method is:

 ```javascript
 Array.from(arraylike, mapFunc, thisArg)
 ```
 ```javascript
    function createArray(arraylike, mapFunc) {
        return Array.from(arraylike, mapFunc);
    }
    let result = createArray([2, 4, 6], (element) => element + 2);
    console.log(result); // Output: [ 4, 6, 8 ]

    
    let set = new Set(["JavaScript", "Python", "Go", "Python"]);
    let result2 = Array.from(set);
    console.log(result2); // Output: [ 'JavaScript', 'Python', 'Go' ]
 ```
  ### flat()
  The flat() method in JavaScript is used to flatten an array by reducing its nesting. Introduced in ES2019, it is heavily used in the functional programming paradigm of JavaScrip
 
    The syntax of the flat() method is:
```javascript
        arr.flat(depth)
```
```javascript
const numbers = [['1', '2'], ['3', '4', ['5',['6'], '7']]];
const flatNumbers= numbers.flat(Infinity);
console.log(flatNumbers); // ['1', '2', '3', '4', '5', '6', '7']
```

Apart from flattening nested arrays, the flat() method can also be used to remove empty slots or empty values in an array:

```javascript
const arrayLike = {
    length: 3,
    0: [1, 2],
    1: { length: 2, 0: 3, 1: 4 },
    2: 5,
    3: 3, // ignored by flat() since length is 3
  };
  console.log(Array.prototype.flat.call(arrayLike));
  // [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
```
  ### findLast()
  This method allows you to find the last element in an array that satisfies a provided testing function. It's similar to the find() method but starts from the end of the array instead of the beginning. Here's how you can use it:

 ```javascript
    const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
    array.findLast(n => n.value % 2 === 1); // Returns { value: 3 }
 ```

  ### findLastIndex()
  This method returns the index of the last element in the array that satisfies a provided testing function. It's similar to findIndex(), but it starts from the end of the array. Here's an example:

 ```javascript
  array.findLastIndex(n => n.value % 2 === 1); // Returns 2
 ```

  ### toReversed()
  This method returns a new array that is a reversed copy of the original array. The original array remains unchanged:
 ```javascript
  const sequence = [1, 2, 3];
  const newArr = sequence.toReversed(); // Returns [3, 2, 1]
 ```
  
  ### toSorted()
  This method returns a new array that is a sorted copy of the original array. The original array remains unchanged:
 ```javascript
    const outOfOrder = new Uint8Array([3, 1, 2]);
    const newArr2 = outOfOrder.toSorted(); // Returns Uint8Array [1, 2, 3]
 ```

  ### toSpliced(start, deleteCount, ...items)
    This method returns a new array which is a copy of the original array but with some elements removed or replaced. The original array remains unchanged:

 ```javascript
    const newArr4 = array.toSpliced(1, 2, 'a', 'b'); // Returns [1, 'a', 'b']
 ```

  ### with(index, value)
  This method returns a new array that is a copy of the original array but with one element replaced. The original array remains unchanged:

 ```javascript
    const correctionNeeded = [1, 1, 3];
    correctionNeeded.with(1, 2); // Returns [1, 2, 3]
 ```

 ## Object Methods

  ### Object.assign(target,source)
 ```javascript
 let user = {
    name:"Joe",
}
    //mutate an object
    console.log(Object.assign(user,{name:"Jane",age:12}))//{ name: 'Jane', age: 12 }
    console.log(user);//{ name: 'Jane', age: 12 }

    //use an object as source and create another object by taking advantage of it
    let newUser = {
        ...user,
        ...{name:"John",age:123}
    }
    console.log(Object.assign({},newUser,{age:32}))//{ name: 'John', age: 32 }
    console.log(newUser)//{ name: 'John', age: 123 }
 ```

  ### Object.entries()
 ```javascript
    //get object as array or array as object
    const phone = {
        brand:"Samsung",
        model:"Galaxy S21"
    }

    const phoneAsArray = Object.entries(phone);
    console.log(phoneAsArray);//[ [ 'brand', 'Samsung' ], [ 'model', 'Galaxy S21' ] ]
 ```

  ### Object.fromEntries()
```javascript
    const phoneAsObject = Object.fromEntries(phoneAsArray);
    console.log(phoneAsObject);//[ [ 'brand', 'Samsung' ], [ 'model', 'Galaxy S21' ] ]
 ```

  ### Object.freeze()
 ```javascript
 //freeze and protect
    Object.freeze(phone);
    phone.price = 2000;
    delete phone.brand
    console.log(phone)//{ brand: 'Samsung', model: 'Galaxy S21' }
 ```

 ## Primitive Methods

  ### indexOf()
 ```javascript
 let hello = "Hello";
console.log(hello.length)//5
console.log(hello.indexOf("l"))//2
console.log(hello.indexOf("z"))//-1
 ```

  ### lastIndexOf()
 ```javascript
 console.log(hello.lastIndexOf("l"))//3
console.log(hello[4])//o
 ```

  ### startsWith()
 ```javascript
 console.log(hello.startsWith("h"))//false
 ```

  ### endsWith()
 ```javascript
 console.log(hello.endsWith("o"))//true
 ```

  ### includes()
 ```javascript
 console.log(hello.includes("el"))//true
 ```

  ### slice()
 ```javascript
 console.log(hello.slice(3,5))//lo (doesn't include the last index that given,however, includes initial index point)
 console.log(hello.slice(-4,-1))//ell (doesn't include the first index that given)
 ```
  ### substring()
 ```javascript
console.log(hello.substring(2,5))//llo (doesn't include the last index that given and you cant type negative index here)
 ```

  ### replace()
 ```javascript
 console.log(toReplace.replace("Joe","John"))//My name is John

 ```

  ### match()
 ```javascript
 console.log(toReplace.match(/[A-Z]/g))// ['M','J']
 ```

  ### split()
 ```javascript
 console.log(toReplace.split(" "))//[ 'My', 'name', 'is', 'Joe' ]
 ```

  ### repeat()
 ```javascript
 console.log(toReplace.repeat(2))//My name is JoeMy name is Joe
 ```

  ### concat()
 ```javascript
 console.log(toReplace.concat("Nice to meet you!"))//My name is JoeNice to meet you!

 ```

  ### toUpperCase()
 ```javascript
 console.log(toReplace.toUpperCase())//MY NAME IS JOE

 ```

  ### toLowerCase()
 ```javascript
 console.log(toReplace.toLowerCase())//my name is joe

 ```

  ### trim()
 ```javascript
 console.log(toReplace.trim())//My name is Joe - there is no whitespace 

 ```

  ### padStart() 
 ```javascript
 console.log(toReplace.padStart(50,"."))//....................................My name is Joe

 ```

  ### padEnd()
 ```javascript
 console.log(toReplace.padEnd(50,"."))//My name is Joe....................................

 ```

  ### toFixed()
 ```javascript
 let PI = 3.14159265359
let num = PI.toFixed(4);
console.log(num);//3.1416
 ```

  ### toPrecision()
 ```javascript
 num = PI.toPrecision(3);
console.log(num);//3.14

 ```

  ### toExponential()
 ```javascript
 let mill = 1000000;
num = mill.toExponential();
console.log(num);//1e+6
 ```
