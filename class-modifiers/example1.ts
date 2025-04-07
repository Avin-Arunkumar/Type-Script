class User {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  public getName() {
    return this.name;
  }
  public getage() {
    return this.age;
  }
  public setName(name: string) {
    return (this.name = name);
  }
  public setage(age: number) {
    if (age > 0) {
      return (this.age = age);
    }
  }
}
const user1 = new User("bob", 17);
console.log(user1.getName());
console.log(user1.getage());
user1.setName("Shiva");
console.log(user1.getName());
