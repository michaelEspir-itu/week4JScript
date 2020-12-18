// const, let , var -- ways of declaring variables
//
// order of prefrence: const, let .... var

let x = 7;
{
    let x = 5;
    console.log(x);
}
const y = 7;
{
    const x = 7;
    console.log(x);
}

// function scope idea
function myFunction(){
    var y = 56;
}
console.log(y);

// dont use var that often.
// stick with let and const.
// template literals
// strings is a collection and a sequence of charactrs

// illustration-- classic string concatenation
let mySimpleString= ' this is a string';
console.log(mySimpleString);

//concatenation -- the old way
let firstName = 'Jan';
console.log('Hello,' + firstName + ' nice to see you! Secret code is' + (3 + 5));

// template literals -- gives us literal whitespace with ease, and also 
// * interpolation*
console.log(`Hello, ${firstName}, nice to see you! Secret code is ${3 + 5}`);

let myTemplateWithNewLines = `Hello,
${firstName}, nice to see you!

Secret code is ${3+5}`;

console.log(myTemplateWithNewLines);

// arrow function
// function declaration vs. function expression

function greeting(){
    console.log('greeting');
}
greeting();

//  examples of function expression
// arrow function are function expression, not declarations

var myNewGreeting = function() { console.log('hello there!')};
myNewGreeting();

// arrow syntax for functions expressions - no params, on params, multiple params
const myNewGreetingWithArrow = () => { console.log(' hello there')};
myNewGreetingWithArrow();

const MyIncrementer = x => x + 1;
console.log(MyIncrementer(4));

const myConcatenator = (a,b) => { return `${a}${b}`};// use return when putting
//braces in a template literal
const myConcatenatorNoBraces = (a,b) => `${a}${b}`;
console.log(myConcatenator('this will', 'get smushed together'));

// practical example  of using a function expression/ arrow function

let myCustomers = ['Bill', 'Lisa', 'Ann'];
let myCustomersWithLabel = myCustomers.map(x => `${x} : customer`);
console.log(myCustomersWithLabel);

function customerLabeler(val){
    return `${val}: customer`;
}
let myCustomersWithLabelUsingDeclaredFn = myCustomers.map(customerLabeler);
console.log(myCustomersWithLabelUsingDeclaredFn);

// callbacks -- not inherently asynchronous!

const thisFunctionWillCallWhatEverYouGiveIt(someFunctionYouGiveMe, a,b){
    someFunctionYouGiveMe();
    return a +b;
}
thisFunctionWillCallWhatEverYouGiveIt(() => {console.log('this was called')}, 5,2);

// this is an example of a callback

let myNumbers = [3, 4, 5, 6];

let myOdds= myNumbers.filter(x => %2  == 1);
console.log(myOdds);




