# Promise in JavaScript

Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They are a very powerful feature that help you run asynchronous code in JavaScript.

## What is a Promise ?
    In the context of JavaScript, a Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. JavaScript promises can be in one of three possible states: pending, fulfilled, or rejected. A promise goes from pending to fulfilled, or from pending to rejected—‘fulfilled’ and ‘rejected’ indicate the end of a promise.

## How to create a Promise ?
You can create a Promise using the Promise constructor or the Promise.resolve() or Promise.reject() methods.

```javascript
const promise = new Promise((resolve, reject) => {
    // Perform some operation, then call either resolve() or reject()
  });
```

Within the body of the executor function, you can perform any operation — typically, an asynchronous one. You then either call resolve(value) or reject(reason), depending on the outcome of that operation, to fulfill or reject the promise.

## How to use a Promise?

Once a Promise is created, you can attach callbacks to it using the .then(), .catch(), and .finally() methods. The    ".then()" method is used to schedule a callback to be run when the Promise is resolved. The .catch() method is used to handle any errors that might occur. The .finally() method is a handler that will be called no matter if the promise is fulfilled or rejected.

```javascript
promise.then(
  result => console.log(result), // handle a successful result
  error => console.log(error)    // handle an error
);
```

## Promise.all() and Promise.race()

The Promise.all() method accepts an array (or any other iterable) of promises as a parameter. It returns a Promise object that is fulfilled if all of the input promises are fulfilled or rejected if any of the input promises is rejected. On the other hand, Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

```javascript
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  });
```

## Async/Await

Async/Await is a new syntax for handling Promises, introduced with ES2017. It makes asynchronous code look and behave more like synchronous code. The async keyword is used in front of a function to ensure that the function returns a promise, and the await keyword is used to wait for a promise to resolve or reject.

```javascript
async function asyncCall() {
  let result = await promise;
  console.log(result);
}

```

## How does async/await make JavaScript code look synchronous ? Explanation of asynchronous and synchronous code in JavaScript.

In JavaScript, codes are executed as sync by default  and synchronous code means that tasks are executed one after another. If you have a sequence of tasks, each one will be executed in order, with each task waiting for the previous one to complete before it begins. This is because JavaScript is single-threaded, meaning it has only one call stack to manage its tasks.

Asynchronous code, on the other hand, allows tasks to be executed independently of one another. This means that some tasks can start, run, and complete in the background while other tasks continue processing. This is particularly useful when dealing with operations that may take a long time, such as network requests. 

 The async keyword is used to declare an asynchronous function. This function always returns a promise.The await keyword can only be used inside an async function and makes JavaScript wait until the promise settles and returns its result.

## Use Cases of Async/Await & try-catch-finally

 1. Loading Data from API
   ```javascript 
     //apifetch
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log('Fetch operation completed.');
    }
  };
  
  fetchData();
   ```
 2. Performance Checks
   ```javascript
   
     //performance
  const promises = [fetch('https://api.example.com/data1'), fetch('https://api.example.com/data2')];
    for (const promise of promises) {
    console.time('timer');
    try {
        await promise;
    } catch(error) {
        console.error(error);
    } finally {
        console.timeEnd('timer');
    }
    }
    ```
 3. Handling Loading Indicators
   ```javascript
    //loading

    let isLoading = true;

    const fetchDataX = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        isLoading = false;
        console.log('Loading status:', isLoading);
    }
    };

    fetchDataX();
        ```
 4. Fast Food Restaurant Example
   ```javascript 
   const orderFood = getFood();

    orderFood
        .then(food => eatFood(food))
        .catch(error => getRefund(error));

   ```

## Use cases of Promise

 1. File I/O:
  
```javascript
    function promisify(fn) {
      return function (...args) {
        return new Promise((resolve, reject) => {
          fn(...args, function (err, result) {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
      };
    }

    const fs = require('fs');
    const readFileAsync = promisify(fs.readFile);

    readFileAsync('file.txt', 'utf8')
      .then(text => console.log(text))
      .catch(err => console.error(err));
```

2. API Calls w Promise.all() & Promise.race:

```javascript
//api calls w promise all
const promise1 = fetch('/api/data1');
const promise2 = fetch('/api/data2');
const promise3 = fetch('/api/data3');

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values);
    })
    .catch(error => {
        console.error(error.message)
    });

//promise race

var p = Promise.race([
    fetch('/resource-that-may-take-a-while'),
    new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('request timeout')), 5000)
    })
]);

p.then(response => console.log(response))
    .catch(error => console.log(error));

```