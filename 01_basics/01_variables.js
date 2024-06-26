const accountId = 144552
let accountEmail = "sudarshan@hotmail.com"
var accountPassword = "145678"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed


accountEmail = "sp@sp.com"
accountPassword = "454545"
accountCity = "Hyderabad"
console.log(accountId);

/*
Do not use var, 
Preferably use let and const,
for variable declaration because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword,accountCity,accountState])