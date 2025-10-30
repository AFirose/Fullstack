// // Function Expressions

// // 1. cube()
// const cube = function(x) {
//   return x * x * x;
// };

// // 2. fullName()
// const fullName = function(first, last) {
//   return first + " " + last;
// };

// // 3. power()
// const power = function(base, exp) {
//   if (exp === 0) {
//     return 1;
//   }
//   return base * power(base, exp - 1);
// };

// // 4. sumCubes()
// const sumCubes = function(numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total = total + cube(numbers[i]);
//   }
//   return total;
// };

// // Optional test calls:
// console.log(cube(3)); // 27
// console.log(fullName("Afrin", "Firose")); // Afrin Firose
// console.log(power(2, 3)); // 8
// console.log(sumCubes([1, 2, 3])); // 36

// // Q1: Why does JavaScript output undefined instead of throwing an error?
// // console.log(message);
// // var message = 'Hi there!';

// // Answer:
// var message; // declaration is hoisted
// console.log(message); // undefined, because value is not assigned yet
// message = 'Hi there!';

// // Q2: Why does JavaScript throw an error instead of logging undefined?
// // console.log(message);
// // let message = 'Hi there!';

// // Answer:
// let message2; // hoisted but in Temporal Dead Zone (TDZ)
// // console.log(message2); // Uncommenting this line here would throw ReferenceError
// message2 = 'Hi there!';
// console.log(message2); // Safe to access after assignment


// // Q3: Explain precisely what happens when the following code is executed
// // console.log(showMessage());
// // const showMessage = function(){ return 'Hi there!'; };

// // Answer:
// const showMessage = function() {
//   return 'Hi there!';
// };

// console.log(showMessage()); // Safe only after the function is defined


// // Q4: Why does JavaScript not throw any errors when the following code is executed?
// // console.log(showMessage());
// // function showMessage(){ return 'Hi there!'; };

// // Answer:
// function showMessageDeclaration() {
//   return 'Hi there!';
// }

// console.log(showMessageDeclaration()); // Works fine because function declaration is fully hoisted

// Step 3: Code Restructuring
const cube = function(x) { return x*x*x; };
const fullName = function(first,last){ return first + " " + last; };
const power = function(base,exp){ if(exp===0){return 1;} return base*power(base,exp-1); };
const sumCubes = function(numbers){ let total=0; for(let i=0;i<numbers.length;i++){ total+=cube(numbers[i]); } return total; };

console.log(cube(3));
console.log(fullName("Afrin","Firose"));
console.log(power(2,3));
console.log(sumCubes([1,2,3]));

// Q1
var message;
console.log(message);
message = 'Hi there!';

// Q2
let message2;
message2 = 'Hi there!';
console.log(message2);

// Q3
const showMessage = function(){ return 'Hi there!'; };
console.log(showMessage());

// Q4
function showMessageDeclaration(){ return 'Hi there!'; }
console.log(showMessageDeclaration());

let values = [10,20,30];
for(let i=0;i<values.length;i++){
    console.log(values[i]);
}

let lastLogin = '1/1/1970';
function welcome(first,last){
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
}
console.log(welcome('Charlie','Munger'));

