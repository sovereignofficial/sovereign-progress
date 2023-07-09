// property flags & descriptors
let user = {
    name: "John"
}

Object.defineProperty(user, "username", {
    value: "john312",
    writable: false
})

Object.defineProperties(user, {
    password: {
        value: "John123456",
        writable: false,
        configurable: false,
    },
    address: {
        value: "address1/ExpCountry",
        enumerable: false
    }
})

// property getter & setters
Object.defineProperty(user, "name", {
    get() {
        return this._name;
    },
    set(value) {
        this._name = value;
    },
    configurable: true,
    enumerable: true,
});

const descriptors = Object.getOwnPropertyDescriptors(user);

console.log(descriptors,user);
// {
//     name: {
//       value: 'John',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     username: {
//       value: 'john312',
//       writable: false,
//       enumerable: false,
//       configurable: false
//     },
//     password: {
//       value: 'John123456',
//       writable: false,
//       enumerable: false,
//       configurable: false
//     },
//     address: {
//       value: 'address1/ExpCountry',
//       writable: false,
//       enumerable: false,
//       configurable: false
//     }
//   }


// prototypes , inheritance

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

Person.prototype.greet = () => {
    console.log(`Hello World, I'm ${Person.name} ${Person.surname}`);
}

function Employee (name,surname,age){
    this.name = name
    this.surname = surname
    this.age = age
}

Employee.prototype = Object.create(Person.prototype)

const emp1 = new Employee("john","doe",31);
console.log(emp1);

String.prototype.show = function() {
    alert(this);
  };
  
  "BOOM!".show(); // BOOM!