// === Scenario 1: Basic Function ===

// Regular function
function sayHello() {
    return "Hello, world!";
}
// Arrow function
const sayHelloArrow = () => "Hello, world!";

console.log("Scenario 1:");
console.log(sayHello());
console.log(sayHelloArrow());


// === Scenario 2: Single Parameter ===

// Regular function
function double(x) {
    return x * 2;
}
// Arrow function
const doubleArrow = x => x * 2;

console.log("\nScenario 2:");
console.log(double(5));
console.log(doubleArrow(5));


// === Scenario 3: Multiple Parameters ===

// Regular function
function add(x, y) {
    return x + y;
}
// Arrow function
const addArrow = (x, y) => x + y;

console.log("\nScenario 3:");
console.log(add(5, 10));
console.log(addArrow(5, 10));


// === Scenario 4: Function Inside an Object ===

// Regular function inside object
const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};

// Arrow function version
const personArrow = {
    name: "Alice",
    sayHi: () => "Hi, " + this.name + "!" // 'this' won't work here!
};

console.log("\nScenario 4:");
console.log(person.sayHi());
console.log(personArrow.sayHi()); // Will not work as expected (undefined)


// === Scenario 5: Callback Function with forEach() ===

const numbers = [1, 2, 3, 4, 5];

// Regular callback
const doubled = [];
numbers.forEach(function(num) {
    doubled.push(num * 2);
});

// Arrow function version
const doubledArrow = [];
numbers.forEach(num => doubledArrow.push(num * 2));

console.log("\nScenario 5:");
console.log("Original numbers:", numbers);
console.log("Doubled (regular):", doubled);
console.log("Doubled (arrow):", doubledArrow);
