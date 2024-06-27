// Primitive 

/*7 types : String, Number, Boolean, null, undefined, Symbol, 
BigInt*/

const score  = 100
const scoreValue  = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);

// const bigNumber = 6732546732545n





// Reference (Non-primitive)

//Array, Objects, Functions

const heros = ["spiderman","Black Panther","magneto"]
let mhyObj = {
    name:"sudarshan",
    age:23,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof anotherId );

// ++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "ShadowKing"

let anothername = myYoutubename
anothername = "MrBeast"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@yes.com"
}

let userTwo  = userOne

userTwo.email = "sudarshan@google.com"

console.log(userOne.email);
console.log(userTwo.email);