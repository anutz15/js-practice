// console.log("Aditya Shah")
let firstname="Aditya Shah";

// **strings are immutable, original string will not change
// console.log(firstname.toUpperCase());
// console.log(firstname.toLowerCase());

// slice the string, want only specific range of characters
// console.log(firstname.slice(0,3));


// **typeof operator
// data types (primitive)
// string "harshit"
// console.log(typeof firstname);    // string

// number 2,4,5.6 etc
// console.log(typeof 3);   // number

// boolean
// let isCheck=true;
// console.log(typeof isCheck);    // boolean

// undefined
// null
// BigInt
// Symbol


// **convert number->string
// let age=22;
// age=age+"";
// age=String(age)   // other way
// console.log(typeof age);   // string  "22"


// **convert string->number
// let age = +"33";
// age=Number(age)  // other way
// console.log(typeof age);    // number
// console.log(age);   // 33


let str1="18";
let str2="223";

let newStr = +str1 + +str2;   
console.log(newStr);      // 241