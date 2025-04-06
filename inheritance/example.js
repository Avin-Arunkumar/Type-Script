// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
// var Person = /** @class */ (function () {
//     function Person(firstname, lastName, age) {
//         this.firstname = firstname;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     Person.prototype.greet = function () {
//         return "Hello  ".concat(this.firstname, " ").concat(this.lastName);
//     };
//     Person.prototype.getage = function () {
//         return this.age;
//     };
//     return Person;
// }());
// var admin = /** @class */ (function (_super) {
//     __extends(admin, _super);
//     function admin(firstname, lastName, age, role) {
//         var _this = _super.call(this, firstname, lastName, age) || this;
//         _this.role = role;
//         return _this;
//     }
//     admin.prototype.greet = function () {
//         return "Hello  ".concat(this.firstname, " ").concat(this.lastName);
//     };
//     admin.prototype.getage = function () {
//         return this.age;
//     };
//     admin.prototype.getrole = function () {
//         return this.role;
//     };
//     return admin;
// }(Person));
// var user1 = new admin("John", "Doe", 19, "player");
// var user2 = new Person("Rohit", "Sharama", 36);
// console.log(user2.greet());
// console.log(user2.getage());
// console.log(user1.greet());
// console.log(user1.getage());
// console.log(user1.getrole());
