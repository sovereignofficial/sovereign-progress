"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myUser = exports.myCourse = void 0;
var export_1 = require("./export");
var getSize = export_1.PAGE_SIZE;
exports.myCourse = {
    title: "My Course",
    price: 49.99,
    curriculum: {
        video1: "address1.mp3",
    }
};
exports.myUser = {
    name: "John Doe",
    age: 12,
    username: "sovereign",
    password: "sovereign123",
};
console.log(getSize);
