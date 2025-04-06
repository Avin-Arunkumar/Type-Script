class Person {
  firstname: string;
  lastName: string;
  age: number;

  constructor(firstname: string, lastName: string, age: number) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.age = age;
  }
  greet() {
    return `Hello  ${this.firstname} ${this.lastName}`;
  }
  getage() {
    return this.age;
  }
}
class admin extends Person {
  role: string;
  constructor(firstname: string, lastName: string, age: number, role: string) {
    super(firstname, lastName, age);
    this.role = role;
  }
  greet() {
    return `Hello  ${this.firstname} ${this.lastName}`;
  }
  getage() {
    return this.age;
  }
  getrole() {
    return this.role;
  }
}
let user1 = new admin("John", "Doe", 19, "player");
let user2 = new Person("Rohit", "Sharama", 36);

console.log(user2.greet());
console.log(user2.getage());
console.log(user1.greet());
console.log(user1.getage());
console.log(user1.getrole());
