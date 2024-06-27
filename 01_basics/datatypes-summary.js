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

console.log(id===anotherId);

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

console.log(typeof anotherId );