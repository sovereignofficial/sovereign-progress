var voidFunc = function () {
    console.log("Hello World!");
};
var checkMyType = voidFunc();
var onCreated = function (user, course) {
    course.user = user;
    return course;
};
var createCourse = function (title, price, callback) {
    if (price === void 0) { price = 0; }
    var newCourse = {
        title: title,
        price: price
    };
    var user = {
        name: "johndoe",
        age: 21,
        username: "john1234"
    };
    return callback(user, newCourse);
};
var checkMyType2 = createCourse("TypeScript Bootcamp", 69.00, onCreated);
console.log(checkMyType2);
