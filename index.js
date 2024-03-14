// console.log("Aditya Singh")
// let firstname="Aditya Singh";

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


// let str1="18";
// let str2="223";

// let newStr = +str1 + +str2;   
// console.log(newStr);      // 241


// **unbdefined null BigInt
// let firstName;   // just declared a variable, no initialisation
// var name;  // will also be undefined
// const name; // will give error, must initialise
// console.log(typeof firstName);   // undefined 

// let firstname=null;
// console.log(typeof firstname);   // object
// this is a bug, should be null only, but cannot resolve now


// let number=BigInt(123);    // this is constructor
// let number2=BigInt(12323214343432434324324324345);
// let number2=12323214343432434324324324345;   // will not be represented accurately as integer
// let number3=123n;   // other way 
// console.log(Number.MAX_SAFE_INTEGER);    //9007199254740991
// console.log(typeof number2);    // bigint

// console.log(123n + 123);    // error


// **boolean and comparision operator