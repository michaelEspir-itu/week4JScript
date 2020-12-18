// const, let , var-- way of declaring variables
//
// order of preference: const, let ......var
let x = 7;
{
    let x = 5;
    console.log(x);

}

function myFunction() {
    var y = 56;
}

// mdn declarations

// template strings

// illustration -- classic string concatenation
let mySimpleString = " this \tis \na string";
console.log(mySimpleString);

// old way


// new way
console.log(`hello`)


// examples of function expression( arrow functions are 
//function expessions, not function declarations )
var myNewGreeting = function() { console.log('hello there!')};
myNewGreeting();
// arrow syntax for function expressions no params, one param, multiple params
const myNewGreetingWithArrow = ()=> { console.log('hello there')};
myNewGreetingWithArrow ();

const myIncremeter = x => x +1;
console.log(myIncremeter(4));

const myConcatenator = (a, b) => { return}

 
// practical example of using a function expression 
let myCustomers = ['Bill', 'Ann', 'Lisa'];
let myCustomersWithLAbelUsinDeclaredFn = myCustomers.map(x => `${x} : customer`);
console.log(myCustomersWithLAbelWithUsingDeclaredFn);

let 

// callbacks-- not inherently asynchronous use const.
const  thisFunctionWillCallWhateverYouGiveIt(somefunction, a, b){
somefunction();
return a + b;
}
thisFunctionWillCallWhateverYouGiveIt(() => {console.log('this was called')}, 5,2);
let myNumbers = [3, 4, 5, 6];
let myOdds = myNumbers.filter(x => x%2 ==1);
console.log(myOdds);

// asynchronous behavior
// setTimeout, setInterval

callSomeFunction() // sync
callAlongRunningServiceForData() // async
callAnotherCode() // 

// example of settimeout
let g = 85;
setTimeout() => {
console.log('this is delayed greeting');
}, 2000);
console.log(`the value of g is ${g}`);

let g = 85;
let timeoutId = setTimeout(() =>{

})
//
let x = 0;
let interValId = setInterval(() =>{
x++;
console.log(`x is ${x}`);
if(x>5){
    
}
})
