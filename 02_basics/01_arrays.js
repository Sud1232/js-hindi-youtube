// array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Hero","Flash"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // This operation gives you a slice from the org array keeping it same. The second value is not included


console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) // Here also a part of array is returned and the 2nd index is included, but the original array is changed
console.log("C",myArr);
console.log(myn2);
