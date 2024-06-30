// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name:"Sudarshan",
    "full name":"Sudarshan Patekar",
    [mySym]:"mykey1",
    age: 23,
    location:"Maharashtra",
    email:"sudarshan@mozilla.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
} 

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "sudarshan@google.com"
// Object.freeze(Jsuser)
Jsuser.email = "sudarshan@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS User");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS User. ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());