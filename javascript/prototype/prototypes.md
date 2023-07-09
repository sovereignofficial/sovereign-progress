# Prototypes

 ## Properties 

 Properties are single key-value pairs in javascript.Every properties have their own descriptor. A descriptor is can be considered as structure of a building. It contains 5 different key property attributes or we can say property "flags". These are "writable","enumerable","configurable" booleans and get set methods. Each of them can change the feature of their property that they belong.

   1. writable: If true, value can be changed, otherwise it's read-only.
   2. enumerable: If true, the property shows up during enumeration of the object's properties.
   3. configurable: If true, the property can be deleted and these attributes can be modified, otherwise not.
   4. getters and setters: As known as they can be used by get and set methods to retrieve or assign a value.

   When we have created a property, these flags are true by default.We can change them anytime we want. Example:

   ```javascript
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

    console.log(descriptors);
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

   ```

   ## Prototypes

   In JavaScript is a prototype-based language and a prototype is a built-in mechanism that holds built-in methods of data-types and provides efficiency to reusability of features, attributes(properties of objects) or behaviour(methods) of an object from another sub objects that we created by inheriting their prototypes. Well, we can say OOP in javascript is made by "prototypal inheritance" in JavaScript.Prototypal inheritance is being made by constructor functions. Example:

   ```javascript
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
        console.log(emp1.greet());
   ```

    We can achieve prototypal inheritance by Object.create(MyObject.prototype). Through this way our sub object using the main objects prototype and its methods and object. Lastly using the prototype of data-type object. The order of the finding demanded method or object property (in our case that is greet() method) is initially being searched inside of Employee object > if couldnt found being searched in its prototype (in this case its Person prototype but its going to be found there) > if couldn't found lastly being searched inside of Object prototype and returning undefined or method-property.

    ## Native Prototypes

    Native prototypes are the prototypes properties of native Javascript data-types. It's evaluated as bad practice in JavaScript because there might be conflicts among the built-in methods and the methods that you assigned. Example:

    ```javascript
    String.prototype.show = function() {
    alert(this);
  };
  
  "BOOM!".show(); // BOOM!
    ```