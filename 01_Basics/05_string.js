const name = "Abhishek"
const repoCount = 50
//console.log(name + repoCount + "value");
//string interpolation
//console.log(`Hello ${name} you have ${repoCount} repo`);

// string declaration new method
const gameName = new String("Abhishek-Sharma"); 
//console.log(gameName[0]); // A
//console.log(gameName.__proto__);

//console.log(gameName.length); // 12

//console.log(gameName.toUpperCase()); // ABHISHEKSHARMA
//console.log(gameName.charAt(1)); // B
//console.log(gameName.indexOf("b")); // 2

const newString = gameName.substring(0, 5); // Abhis
console.log(newString);

const anotherString = gameName.slice(-8, 5); // Abhis
console.log(anotherString);

const newStringOne = "    Abhishek-Sharma    ";

console.log(newStringOne.trim()); // Abhishek-Sharma

const url = "https://abhishek-sharma.com/%20hello.html";
console.log(url.replace("%20hello.html", "")); // https://abhishek-sharma.com/  hello.html

console.log(url.includes("mohan"))  ; // true