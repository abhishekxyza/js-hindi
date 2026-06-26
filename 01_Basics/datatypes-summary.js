// primitive data types
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint
//const score = 10;
const scoreValue = 10.5;


const isLoggedIn = true;
const outSideTemp = null;
let userEmail;
const id = Symbol("id");
const anotherId = Symbol("id");
console.log(id === anotherId); // false 
const bigNumber = 1234567890123456789012345678901234567890n;
//const bigNumber = 1234567890123456789012345678901234567890n;
/**const String:string = "Hello";
const Boolean:boolean = true;
const Null:null = null;
const Undefined:undefined = undefined;
const Symbol:symbol = Symbol("symbol");
const BigInt:bigint = 10n;
const Object:object = { name: "John", age: 30 };
const Array:any[] = [1, 2, 3];
const Function:Function = function () {
  console.log("Hello");
};
const Date:date = new Date();
const RegExp:regexp = /ab+c/;
const Error:error = new Error("Error message"); */


//______________________________________________________________________________________________
// non-primitive data types(reference types)
// 1. object
// 2. array
// 3. function
// 4. date
// 5. regex
// 6. error
// 7. map
// 8. set
// 9. weakmap
// 10. weakset
// 11. promise
// 12. generator
// 13. iterator
// 14. async function
// 15. async generator
// 16. async iterator
// 17. bigint
// 18. typed array
 const heros = ["spiderman", "ironman", "thor"];
 let myObj={//stored in variable myObj
    name: "Abhishek",
    age: 21
 }
 const myFunction = function () {
    console.log("Hello");
 }
 //how to check data type of variable
 console.log(typeof myFunction); // function