# Classes in Javascript

In fact, the javascript is a prototype based language, which means that it doens't have traditional class-based implementation as in C# and Java and it uses functions as classes. People can define a class by following the order, "class" keyword then define class name, open curly braces {}, create a constructor method and implement the object properties inside of method using the "this" keyword:


```javascript
//show class definition
class Person{
//constructor method
    constructor(name,age,address){
     this.name = name;
     this.age=age;
     this.address = address 
    }
}
```

## "this" Keyword

The "this" keyword is a concept that refers to the object that is executing the current piece of code.Its value depends on where it's being invoked.There are 3 different place that the "this keyword refers different object:

 1. In a Method: The "this" keyword refers the parent object of the method. It's important where your method's been in this occasion.In this example, "this" keyword is referring the parent object a method that being invoke the keyword:

 ```javascript
 //this keyword
const user = {
    name:"Jane",
    username:"jane66",
    password:"jane123",
    login(password){
       if(password === this.password)
       console.log("Welcome Jane!, Here is the this keyword: ",this)
    } 
}
user.login("jane123");
 ```

   2. Global Scope: At the global scope, the "this" keyword refers the Window object in the web browser:

   ```javascript
   console.log(this); // logs the window object
   ```

   3. In a Function: In a regular function, "this" refers to the global object. However, if the function is in strict mode, this will be undefined and if "this" is being invoked in the arrow function, will refer the window object.

   ```javascript
      function myFunction() {
         return this;
      }

      function myStrictFunction() {
       "use strict";
        return this;
      }
      const arrwFunction = () =>{
        console.log(this) //Window
      }
   ```


## Initiating a Class 

 To initiate a class, we use the "new" keyword as in the example:

 ```javascript
  const customer = new Person("John");
  console.log("class object", customer);
 ```

 When a class is initiated, javascript automatically executes the constructor method and the properties of the class being created.



## OOP in Javascript

 Object Orinted programming is a programming paradigm that organizes software design upon the data or objects,rather than the functions. An object can be defined as a data field with unique attributes and behaviour.

 Through OOP strategy, the objects you defined can represent the real world entities such as a person with the name,address,age,nation and a product with the category,price,seller,quantity,image. And also these objects can hold state and behaviour like when program executed the greet method of a person class, the app makes voice as "hello!" or when you check the mood of the a person from the app, the app demonstrates the "tired" as the mood of person. States are represented as attributes and the behaviours are methods in OOP.

 Benefits of the OOP are including code reusablity, scalability, efficiency. It suits for large and complex programs that are actively updated or maintained, faster and lower cost of development.

 Disadvantages of OOP are including large codebases, requires more memory.

 There are 4 concepts of OOP in Javascript. Inheritance, Encapsulation, Polymorphism and Abstraction:

   ### Inheritance

  The inheritance is a key concept in object oriented programming that allows one class to use some properties and methods from another class. Here is a example:

  ```javascript
  class Vehicle {
    constructor(make, model, color) {
      this.make = make;
      this.model = model;
      this.color = color;
    }
  
    startEngine() {
      return 'Engine started';
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, color, doors) {
      super(make, model, color);
      this.doors = doors;
    }
  }
  
  let car = new Car('Toyota', 'Corolla', 'Blue', 4);
  console.log(car.startEngine());  // Engine started
  ```

  The function called as "super" is used in the child classes to call a method or constructor from a parent class. In the context of a constructor method , super is used to call the constructor of the parent class.

  ### Encapsulation
  Encapsulation is an implementation for hiding the properties that is unnecessary and providing the just necessary one in a class.Through encapsulation we can secure our data in development environment.The values can't be changed by directly reached key of property itself.The most common way to achieve encapsulation in javascript is giving name to the properties by beginning underscore "_".Here is the example for it:

   ```javascript
   //encapsulation
   class BankAccount {
    constructor() {
      this._balance = 0;
    }
  
    deposit(amount) {
      this._balance += amount;
      return this._balance;
    }
  
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
      } else {
        console.log('Insufficient balance');
      }
      return this._balance;
    }
  
    getBalance() {
      return this._balance;
    }
  }
  
  let account = new BankAccount();
  account.deposit(500);
  console.log(account.getBalance());  // 500
   ```

   ### Polymorphism
   The Polymorphism is a concept that allows same class methods behave differently altough they have same name based on their class. Here is the example:

   ```javascript
    //polymorphism
  class Shape {
    calculateArea() {
      throw new Error('You have to implement the method calculateArea!');
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    calculateArea() {
      return Math.pow(this.side, 2);
    }
  }
  
  let circle = new Circle(5);
  console.log(circle.calculateArea());  // 78.53981633974483
  
  let square = new Square(5);
  console.log(square.calculateArea());  // 25
   ```

   ### Abstraction
   The Abstraction is a concept that allows hiding the implementation details and showing just important functionality to the users in development environment.In Javascript abstraction can be achieved by creating methods in a class that perform complex operations and the user just can see the method that is used for implementing the operation.

   ```javascript
   //abstraction
   class Database {
    saveData(data) {
      // convert data to database format
      let formattedData = this._formatData(data);
  
      // connect to database (complex operation hidden from user)
      let connection = this._connectToDatabase();
  
      // save formatted data to database
      connection.save(formattedData);
  
      // close connection
      connection.close();
    }
  
    _formatData(data) {
      // complex data formatting operations
      // ...
  
      return formattedData;
    }
  
    _connectToDatabase() {
      // complex database connection operations
      // ...
  
      return connection;
    }
  }
  
  let db = new Database();
  db.saveData({ name: 'John', age: 30 });
   ```


   Here, I mentioned to every single important thing and advantages or disadvantages regarding to classes and object oriented programming concepts in javascript.