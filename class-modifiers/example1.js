var User = /** @class */ (function () {
    function User(name, age) {
        (this.name = name), (this.age = age);
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getage = function () {
        return this.age;
    };
    User.prototype.setName = function (name) {
        return (this.name = name);
    };
    User.prototype.setage = function (age) {
        if (age > 0) {
            return (this.age = age);
        }
    };
    return User;
}());
var user1 = new User("bob", 17);
console.log(user1.getName());
console.log(user1.getage());
user1.setName("Shiva");
console.log(user1.getName());
