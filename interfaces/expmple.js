function greetUser(user) {
    return "Hello ".concat(user.firstname, " ").concat(user.lastname);
}
function logDetails(user) {
    console.log("user: ".concat(user.firstname, " ").concat(user.middlename, " ").concat(user.lastname, " ").concat(user.age));
}
var user1 = {
    firstname: "Jhon",
    lastname: "Deo",
    middlename: "France",
    age: 18,
};
console.log(greetUser(user1));
logDetails(user1);
