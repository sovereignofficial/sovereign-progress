# How NodeJS Works
Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side. It is built on top of the V8 JavaScript engine, which is also the engine that powers Google Chrome. V8 parses and executes JavaScript code, providing a runtime environment for the execution of JavaScript code.

V8 is essentially a standalone C++ library that is used by Node.js to run JavaScript code. It exposes an API that other code can use, allowing you to embed V8 in your C++ program and run a JavaScript program from it.

Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking. Libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm. When Node.js performs an I/O operation, like reading from the network, accessing a database, or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

Node.js APIs such as fs, http, path, and crypto are built on top of the V8 engine and provide additional functionality for handling file operations, HTTP requests, path manipulations, and cryptographic operations. These APIs are written in C++ and expose JavaScript interfaces that developers can use in their Node.js applications.

Libuv is a multi-platform support library that is an integral part of the Node.js platform. It is responsible for handling all of the non-blocking I/O operations that take place within a Node.js application. When an I/O operation is initiated in a Node.js application, such as reading data from a file or sending a network request, the request is passed on to Libuv to be handled. Libuv uses an event loop to continuously check the queue for any requests that are ready to be processed. When a request is ready to be processed, it is passed on to the appropriate operating system function to be executed.

Libuv also provides a set of timers and idle functions that can be used within a Node.js application to schedule code to run at a later time or when the event loop is idle. It uses a thread pool to handle I/O operations that may block the event loop, allowing Libuv to continue processing other requests while the blocking I/O operation is being handled in a separate thread.

In conclusion, Node.js works by leveraging the V8 JavaScript engine to parse and execute JavaScript code, and then providing additional APIs and libraries like fs, http, path, crypto, and libuv to handle various server-side operations. Understanding the relationship between these components can help developers write efficient and performant Node.js applications.

[1](https://stackoverflow.com/questions/42616120/what-is-the-relationship-between-node-js-and-v8)
[2](https://nodejs.org/en/learn/getting-started/the-v8-javascript-engine)
[3](https://www.geeksforgeeks.org/explain-v8-engine-in-node-js/)
[4](https://www.knowledgehut.com/blog/web-development/nodejs-and-v8)
[5](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
[6](https://zmushegh.medium.com/understanding-libuv-the-powerhouse-behind-node-js-b5349c8f0d75)
[7](https://medium.com/@maxheadway/how-libuv-works-within-node-js-5ac766efde40)
