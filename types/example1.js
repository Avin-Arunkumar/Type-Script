var myString = "test";
var myNumber = 1;
var MyBoolean = true;

myString = myNumber;
MyBoolean = myString;
myNumber = MyBoolean;

console.log(myNumber, myString, MyBoolean);
