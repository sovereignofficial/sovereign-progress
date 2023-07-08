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

//show class definition
class Person{
//constructor method
    constructor(name,age,address){
     this.name = name;
     this.age=age;
     this.address = address 
    }
}


//new keyword
const customer = new Person("John");
console.log("class object", customer);


//super function
class Student extends Person {
     constructor(name,school){
        super(name);
        this.school=school;
     }
     
}

const student = new Student("Ege","WMU");
// console.log(student);



//OOP Section
//inheritance
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
  


