const score = 400 

const balance = new Number(100)
//console.log(balance) // 100
// console.log(balance.toString()) // 100
// console.log(balance.toFixed(2)) // 100.00

const otherNumber = 123.456789
//console.log(otherNumber.toPrecision(3))// 123.5
//console.log(otherNumber.toPrecision(6)) // 123.457
const hundreds = 1000000
//console.log(hundreds.toLocaleString("en-IN")) // 10,00,000;




/********************************* Maths ***************/

//console.log(Math.PI) // 3.141592653589793

/**console.log(Math.abs(-4));
console.log(Math.round(4.7)) // 5
console.log(Math.floor(4.7)) // 4
console.log(Math.ceil(4.7)) // 5

console.log(Math.min(0, 150, 30, 20, -8, -200)) // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)) // 150
*/
console.log(Math.random()) // random number between 0 and 1
console.log((Math.random() * 10) + 1) // random number between 1 and 10
//console.log(Math.floor(Math.random() * 100)) // random number between 0 and 99

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) +min);