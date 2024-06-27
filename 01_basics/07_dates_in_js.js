// Dates

let myDate = new Date()
// console.log(myDate.toString()); //Prints only the day month date year time in 24hrs format
// console.log(myDate.toDateString()); //To print only The Day, Month, Date, Year
// console.log(myDate.toLocaleString()); //To print only The Month/Day/Year and time in hh:mm:ss (12hrs)
// console.log(typeof myDate); //date is an object

// let myCreateDate = new Date(2023,0,23) //months start from 0-11, jan-dec
// let myCreateDate = new Date(2023,0,23,5,3)
// let myCreateDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // This gives the value of the milliseconds from the date Jan 1, 1970
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})