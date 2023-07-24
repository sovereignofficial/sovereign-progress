"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentTime = exports.NEW_PAGE_SIZE = exports.PAGE_SIZE = void 0;
var export_1 = require("./export");
Object.defineProperty(exports, "PAGE_SIZE", { enumerable: true, get: function () { return export_1.PAGE_SIZE; } });
var re_exports_1 = require("./re-exports");
Object.defineProperty(exports, "NEW_PAGE_SIZE", { enumerable: true, get: function () { return re_exports_1.NEW_PAGE_SIZE; } });
var import_1 = require("./import");
var getCurrentTime = function () {
    var date = new Date();
    return date.toLocaleString();
};
exports.getCurrentTime = getCurrentTime;
//default syntax 
function getUserAndCourse() {
    return { myUser: import_1.myUser, myCourse: import_1.myCourse };
}
exports.default = getUserAndCourse;
