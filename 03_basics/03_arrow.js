const user = {
    username:"sudarshan",
    price:999,

    welcomeMesssage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMesssage()
// user.username = "sam"
// user.welcomeMesssage()

// console.log(this);

// function chai(){
//     let username = "sudarshan"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "sudarshan"
//     console.log(this.username);
// }

const chai = ()=>{
    let username = "sudarshan"
    console.log(this);
}


// chai()

// const addTwo=(num1, num2)=>{
//     return num1+num2
// }

// const addTwo=(num1, num2)=> num1+num2

// const addTwo=(num1, num2)=> (num1+num2)

const addTwo=(num1, num2)=> ({username:"sudarshan"})


console.log(addTwo(3,4))


const myArray = [2,5,3,7,8]

// myArray.forEach()