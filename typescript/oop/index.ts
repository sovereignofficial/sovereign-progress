import { HasId } from "./oopInterfaces";

class User{
    //another encapsulated initial member
    private premium = false;
    //another public initial member
    // it's going to initiated by defult while class is initializing.
    public coin = 600;

    //a public member however this member should be initiated in constructor method
    // doesn't matter if it took private or public modifier
    nation:string;

    public readonly mutable = false;

    //Static properties belong to class itself , not an instance of class.You can't reach by this keyword to them.
    //This keyword is refers the current object and to get the current object, its referring the instance of a class.
    // Static members are useful for storing data that is common to all instances of a class, or for defining methods that do not need to access the state of an instance.
    // You can use private modifier for the static property, this going to change the reachability to it as just reachable from the class inside.
    // private static TOTAL_COURSES = 0;
    static TOTAL_COURSES = 0;


    constructor(private name:string,public username:string,private password:string,nation:string){
        this.nation = nation;
        //encapsulation made by private modifier and you dont need to initiate class by creating class object properties because compiler does by default for the variables defined with a modifier.  
        User.TOTAL_COURSES++;
    }

     changePassword(newPassword:string){
        this.password = newPassword;
    }
    
    //abstraction
    private privateMeth() {
        console.log('private met')
    }

    // getters and setters
    get membership(){
        return this.premium;
    }

    set changeName(name:string){
        this.name = name;
    }

    static staticMethod(){
        return console.log("hello world!");
    }

}


const user = new User("Sovereign","sovereign123","sovereign12346","Turkey");

console.log(user.nation,user.username,user.coin);
console.log(user.membership);
user.changeName = "Ege";
console.log(user);

//we can't reache these from the instance of class above.
User.TOTAL_COURSES
User.staticMethod()


//inheritance
class Animal {
    // its like private but reachable in extended and inherited classes as well
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    speak() {
      return `My name is ${this.name}`;
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    bark() {
      return `Woof! My name is ${this.name}`;
    }
  }
  
  const dog = new Dog("Rex");
  
  console.log(dog.speak()); 
  console.log(dog.bark()); 
  


  // Abstract classes and methods
  // it's like a contract of a class that extends it have to use their abstract methods. Also it can contain its own features.
  // abstract classes cant be instantiated.

  abstract class Logger implements HasId {
    abstract id: string;
    abstract log(message: string): void;
    abstract printId();
  }
  
  class ConsoleLogger extends Logger {
    id:string;
    log(message: string) {
      console.log(message);
    }
    printId() {
        
    }
  }
  
  class FileLogger extends Logger {
    id:string;
    log(message: string) {
    //   const file = new File("log.txt");
    //   file.write(message);
    }

    printId() {
        
    }
  }
  
  const consoleLogger = new ConsoleLogger();
  consoleLogger.log("This is a log message");
  
  const fileLogger = new FileLogger();
  fileLogger.log("This is another log message");
  
