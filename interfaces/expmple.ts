interface user {
  firstname: string;
  lastname: string;
  middlename?: string;
  age: number;
}
function greetUser(user: user) {
  return `Hello ${user.firstname} ${user.lastname}`;
}
function logDetails(user: user) {
  console.log(
    `user: ${user.firstname} ${user.middlename} ${user.lastname} ${user.age}`
  );
}
let user1 = {
  firstname: "Jhon",
  lastname: "Deo",
  middlename: "France",
  age: 18,
};

console.log(greetUser(user1));
logDetails(user1);
