# JavaScript Fundamentals II : Data Types and Variables

 Today, we're going to dive deep into data types and variables in JavaScript. This will be a comprehensive post, so let's get started! Totally, there are 8 data types in JavaScript.

## Data Types
 We can categorize the data types in 2 groups.Primitive data types and non-primitive data types: 

### Primitive Data Types 

 There are 7 different primitive data types in JavaScript:

1. string: Used for denoting strings. You can create a string with double quotes "hello" in JavaScript.
2. number: Used for denoting integers or floating-point
3. bigint: Used for denoting larger numbers more than 2^53
4. boolean: Used for denoting true or false 
5. symbol: Used for denoting unique identifiers
6. null: Used for denoting an intentional absence of a value
7. undefined: Used for denoting unassigned value

 #### undefined
 The term "undefined" denotes the absence of an assigned value. If a variable is declared without being assigned, it assumes an undefined value.

 ```javascript 
 let data;
 console.log(data)//output:undefined
 ```

 #### null

 The special value "null" does not belong to any of the previously described types. It represents a distinct type of its own, consisting solely of the null value.
 
 ```javascript
 let myGirlFriend = null;
 ```

 In JavaScript, null does not refer to a nonexistent object or act as a null pointer, as seen in some other languages. It serves as a unique value that represents "nothing," "empty," or "unknown." The provided code indicates that the value of the variable "age" is unknown.

 #### Features of primitive data-types
 Primitive data types serve as the fundamental building blocks in JavaScript. These data types are immutable, meaning they cannot be altered after creation. The unique characteristic of primitive data types is that they are stored as values in memory and occupy a stack, which results in faster and more efficient processing.

Therefore, when a variable such as "var myNumber = 6" is created and its value is subsequently modified by reassigning it as "var myNumber = 9," a new variable stack is created in a different memory address. However, the initial "var myNumber = 6" remains in the same stack as before, making primitive data types immutable.

Conversely, if we assign the variable "myNumber" to a new variable "mySecondNumber" using the statement "var mySecondNumber = myNumber," the value of "mySecondNumber" is stored in another stack, while still holding the same value as "myNumber." As a result, both variables "myNumber" and "mySecondNumber" now refer to the same value. 

 ```javascript 
   'use strict'
    var myNumber = 6;
     var mySecondNumber = myNumber;
    console.log(mySecondNumber === myNumber);
    // output:true
 ```

#### Dicrepancies
  We will discuss the differences between the "null" and "undefined" data types. However, it is important to note that there is a JavaScript bug where the data type of null is mistakenly considered an object data type, rather than a non-primitive property.

  ### Non-Primitive Data Type

 The only data type categorized as non-primitive in JavaScript is the object. Objects can be created using curly brackets and key-value pairs, such as {a:10}. Both arrays and functions in JavaScript fall under the object data type. However, when using the typeof operator to determine the data type of a function, a bug occurs. This is due to a function being treated as an object in JavaScript. Ideally, the data type of a function should be returned as an object, but instead, it is returned as a function, resulting in an error in JavaScript.

  #### Why are the arrays and functions an object ?
  In JavaScript, arrays and functions are not considered distinct data types; rather, they are both classified as objects. This is because, at their core, they are objects with key-value pairs. Arrays use numerical indices as keys, while functions use property names as keys. A function can be created by providing the function name, followed by the function keyword, parentheses, and curly brackets, as demonstrated below:

  ```javascript
  function functionName(){}
  ```

  Arrays in JavaScript possess a unique status as a specialized type of object. Like any other object, they have properties and methods. However, arrays also have a length property, and their elements are accessed using numerical indices. Additionally, arrays can contain elements of any data type, including other objects. An array can be created using square brackets, with each element separated by a comma, as shown in the following example: [1, "hello", {a:10}].
  
  #### Features of a non-primitive data-type 
  An object can store a reference or address to a single key-value pair or multiple key-value pairs. When referring to an object, we are actually referencing an address in memory that contains the associated key-value pairs. If we assign the object 'object1' to another object 'object2', we are essentially assigning the address of 'object1' to 'object2' instead of copying the key-value pair stored in 'object1'. The example below illustrates this concept
  
  ```javascript
    var object1= {a:5, a1:6};
    var object2 = object1;
   ```
   Consequently, if we compare whether object1===object2, the comparison will yield true. This is because we have assigned the address of 'object1' to 'object2' in memory.

However, in the following scenario:

   ```javascript
   let myObject = {a:5, a1:6};
   let mySecondObject = {a:5, a1:6};
   console.log(myObject === mySecondNumber);//output:false
   ``` 
The comparison returns false since the two objects have been stored in different memory addresses.

Objects are mutable, meaning we can assign new values to keys at a later stage. These characteristics define non-primitive data types.

  ### Differences between Primitive and Non-Primitive Data Types.
1. Storage: Primitive data types are stored directly in memory as values, while non-primitive data types are stored as references to memory addresses.
2. Mutability: Primitive data types are immutable, meaning their values cannot be changed after they are created. Non-primitive data types are mutable, allowing their values to be changed after creation.
3. Memory Allocation: Primitive data types use static memory allocation, which means the memory is allocated at compile time and stored in the stack memory. Non-primitive data types use dynamic memory allocation, which means the memory allocation depends on the content and is stored in the heap memory.
4. Comparison: Primitive data types are compared by value, meaning two values are strictly equal if they have the same value. Non-primitive data types are compared by reference, meaning two references are considered equal if they refer to the same memory address.
5. Data Types: Primitive data types include number, string, boolean, null, undefined, and symbol. Non-primitive data types include objects.
Capacity: Primitive data types have a fixed memory size, which limits the amount of data they can store. Non-primitive data types can store larger amounts of data because their memory allocation is not fixed.

 ### Typeof Operator
  Typeof operator is used for controlling the data-types of variables or values itself.

 ```javascript
 typeof "hello" // "string"

typeof 0 // "number"

typeof 1n // "bigint"

typeof true // "boolean"

typeof undefined // "undefined"

typeof Symbol("id") // "symbol"

typeof {} // "object"

typeof null // "object
```

 ### Differences between Null and Undefined Data Types

 Initially, both data types are considered primitive. However, when using the typeof operator to check their types, they are erroneously identified as objects. This behavior is a bug in JavaScript, and the correct behavior should be for (typeof null) to return 'null' instead of 'object'.

The reason for this behavior is that, unlike undefined, the 'null' data type is often used to represent an empty reference to an object in situations where objects are expected. When Brendan Eich created JavaScript, he followed this paradigm, making typeof null return 'object'.

 #### Differences
 1. Data Type: The data type of undefined is undefined, while the data type of null is object. However, this is due to a bug in JavaScript, and typeof null should return "null" instead of "object"
 2. Usage: undefined is used when a variable has not been assigned a value, while null is used when a value is intentionally absent or set to an empty value. It is common practice to use null to indicate the absence of a value and undefined to indicate that a variable has not been assigned any value.
 3. Comparison: When comparing null and undefined using the equal-to operator (==), they are considered equal (null == undefined returns true). However, when comparing them using the strict equal-to operator (===), they are not considered equal (null === undefined returns false).
 4. When performing arithmetic operations on null, the value gets converted to 0, and further operations are performed. On the other hand, when performing arithmetic operations on undefined, the result is NaN because the value is undefined and not a number.

 ## Variables

  Let's begin by discussing variables, with a focus on the term 'scope'. In JavaScript, there are four distinct scopes: Global, Function, Block, and Module.

Variables within the global scope are both reassignable and accessible throughout the entire program. The variable keyword 'var' signifies the function scope, meaning you can only access the variable within the same function. Prior to ES6, JavaScript only had the 'var' variable keyword, and it had global and function scope. However, with the introduction of let and const in ES6, along with JavaScript modules, block scope and module scope emerged. The keywords let and const represent block scope, where variables declared inside if-else structures and loops are confined to the block. Modules introduce the concept of module scope.

  ```javascript 
  // Scopes

//Global
 var ImmaGlobal = "im in global scope,you can modify me in every scope";

//Function
 function newFunction(){
     var ImmaFunctionScope="im in the function scope, you cant change me at the outside of this scope";
     console.log("function scope:",ImmaFunctionScope);
 }
 newFunction();

//Block
 if(ImmaGlobal){
    var immaDangerous = 35;
    let blockScope = "here is the block scope";
    console.log("block scope:",blockScope)//output:here is the block scope;
    blockScope = "foo"
    console.log("let can be changed from later",blockScope)//output:foo;

    console.log("var is dangerous:",immaDangerous);//output:35

    const immutableOne = "you cant change me even in the same scope";
    console.log("const is immutable",immutableOne)//output:you cant change me even in the same scope;

    immutableOne= "change"
    console.log("const is immutable",immutableOne)//output:Uncaught TypeError: Assignment to constant variable.;
 }
   immaDangerous = "Izmir"
   console.log("var is dangerous", immaDangerous);//output:Izmir

 for(let prop in ImmaGlobal){
    let blockScope = "you can give same names to variables within different scopes";
    console.log("local scope 2:",blockScope);
 }
 ```

  The module scope is not demonstrated in this example, as I will cover JavaScript modules in a future article.

Variables serve as containers for storing data of various data types, enabling their processing within an application. JavaScript offers three variable types: 'var', 'let', and 'const'.

  1. var: Var has released in first versions of JavaScript and not used much nowadays because, generally, reason of the bugs and unsafe data due to scope issues. When you created a var once , you can alter it throughout entire application , if it's not in the function scope because you can't modify it outside of the function scope once you created it inside of the function scope.
  2. let: Let has released in ECMAscript 6. The data you assigned in let is able to alteration in same scope.
  3. const: Const is short-stand for constant word in English. The data you assigned in const is not able to any alteration afterwards once you created.

  ## Summary
  
  In summary, JavaScript has a total of eight data types, which can be categorized as either primitive or non-primitive. These data types can be assigned to variables and processed within specific scopes based on the requirements of the application. I have aimed to explain these concepts while emphasizing significant details. I hope you find this post informative and beneficial. Stay tuned for more articles in the future!

