var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());
var StringStack = new Stack();
StringStack.push("Hello");
StringStack.push("World");
console.log(StringStack.pop());
