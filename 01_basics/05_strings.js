const name = "Sudarshan"
const repoCount = 45

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    sudarshan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sudarshan.com/sudarshan%20patekar"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(gameName.split('-'))