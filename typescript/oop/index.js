var User = /** @class */ (function () {
    function User(name, username, password, nation) {
        this.name = name;
        this.username = username;
        this.password = password;
        //another encapsulated initial member
        this.premium = false;
        //another public initial member
        // it's going to initiated by defult while class is initializing.
        this.coin = 600;
        this.mutable = false;
        this.nation = nation;
        //encapsulation made by private modifier and you dont need to initiate class by creating class object properties because compiler does by default for the variables defined with a modifier.  
        User.TOTAL_COURSES++;
    }
    User.prototype.changePassword = function (newPassword) {
        this.password = newPassword;
    };
    Object.defineProperty(User.prototype, "membership", {
        // getters and setters
        get: function () {
            return this.premium;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "changeName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    User.staticMethod = function () {
        return console.log("hello world!");
    };
    //Static properties belong to class itself , not an instance of class.You can't reach by this keyword to them.
    //This keyword is refers the current object and to get the current object, its referring the instance of a class.
    // Static members are useful for storing data that is common to all instances of a class, or for defining methods that do not need to access the state of an instance.
    User.TOTAL_COURSES = 0;
    return User;
}());
var user = new User("Sovereign", "sovereign123", "sovereign12346", "Turkey");
console.log(user.nation, user.username, user.coin);
console.log(user.membership);
user.changeName = "Ege";
console.log(user);
//we can't reache these from the instance of class above.
User.TOTAL_COURSES;
User.staticMethod();
