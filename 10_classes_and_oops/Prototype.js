// let myName = 'Sudarshan     '
// let mychannnel = "shadow    "

// console.log(myName.trueLength());


let myhero = ['thor','spiderman']

let heroPower = {
  thor:"hammer",
  spiderman:"web",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}


Object.prototype.hitesh = function(){
  console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
  console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myhero.hitesh()
// myhero.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
  name:"chai",
  email:"chai@google.com"
}
const Teacher = {
  makeVide:"true"
}

const TeachingSupport = {
  isAvailable:false
}

const TASupport = {
  makeAssignment:'JS Assignment',
  fullTime:true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiaurCode   "

String.prototype.truelength = function(){
  console.log(`${this}`);
  console.log(`true length is:${this.trim().length}`);
}

anotherUserName.truelength()
"hitesh".truelength()
"icetea".truelength()