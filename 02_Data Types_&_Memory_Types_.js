"use strict";   // 💎✅💎 write it at the beginning of each JS file, so that the engine treats all JS code as newer version


// alert(3 + 3) // It Won't work here bcoz we are using Node.js here, not browser


// 💎✅💎Code readibilty is the priority in any programming language 💎✅💎


//🍁💎✅💎🍁 Original JAVASCRIPT documentation is found here :-  https://tc39.es/ecma262/



// Range of "number" data type is somewhere upto      2 to the power 53

//  "BigInt" for  string big numbers.  btw it's very rare to use "BigInt" 

//  String = "xyz" or = 'xyz'  (we could use any of the quotes)

//  boolean = true / false

//🍁 null  ➤ it's an STAND-ALONE value, it means the "empty value" (not ZERO just simply "nothing")  [@57:18]

//🍁 undefined  ➤ it means the value is not defined yet

//🍁 symbol ➤ used for defining UNIQUE COMPONENTS

  

// console.log("Rishabh");

let name = "Rishabh"   // String Data Type
let currentYear = 2023

// console.log(typeof name);    // 📍 Answer is "string"
// console.log(typeof currentYear);    // 📍 Answer is "number"

// console.log(typeof null);    // 📍 Answer is "object" [so null is of "Object"  type]
// console.log(typeof undefined);    // 📍 Answer is "undefined" [so undefined is a TYPE in itself]





//  🍁💎✅💎 🍁  How the DATA gets stored inside the Memory & How we could access these DATA on the basis that the whole DATA-TYPES are divided into two categories i.e. PRIMITIVES & NON-PRIMITIVES


// 💎✅ Primitive Data Types in JS [They are stored in STACK memory]

//  7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt           [Symbol:- @1:42:23,  ]

const value = "Hii Everyone";
const socre = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);        // 📍 Answer is "false"

const bigNumber = 348242494898598989859895n;  // "BigInt" data type
// console.log(typeof bigNumber);        //📍 Answer is "bigInt"




//💎✅ Refrence (Non - Primitive) Data Types in JS [They are stored in HEAP memory]

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "dogs"]   

// console.log(heros);
// console.log(typeof heros);          //[📍📍 Answer is :-  "object"  ] 





let myObj = {
    name: "Rishabh",
    age: 22
}

// console.log(myObj);
// console.log(typeof myObj);           //[📍📍 Answer is :-  "object"  ]



const myFunction = function () {

    // console.log("Hello world")
}

// console.log(typeof myFunction);             // 📍 Answer is "function"
                                            // 💎✅💎 But since FUNCTION could also store valus so it's type is called as "OBJECT-FUNCTION"


// 💎✅💎 READING-ARTICLE 👇👇
// https://262.ecma-international.org/5.1/#sec-11.4.3                                            





// +++++++✅++++++✅++++++✅+++++MEMORY-TYPES++++++++✅+++++++++✅++++++++✅+++++++

//  ➤  STACK - MEMORY [stores "Primitive" data types] [✅ we  gets the COPY of a variable stored in STACK-MEMORY]
//  ➤  HEAP - MEMORY [stores "Non - Primitive" data types] [✅ we  gets the REFRENCE of a variable stored in STACK-MEMORY]
//  [ Watch @2:00:09]



//💎✅💎 STACK - MEMORY  EXAMPLE  👇👇

let myYoutubename = "aggarwalrishabh4198@gmail.com";

let anothername = myYoutubename
anothername = "Delhi_Cannaught_Place"

console.log(myYoutubename);      //[📍📍 Answer is :-  "aggarwalrishabh4198@gmail.com"  ] 
console.log(anothername);        //[📍📍 Answer is :-  "Delhi_Cannaught_Place"  ] 





//💎✅💎 HEAP - MEMORY  EXAMPLE  👇👇


let userOne = {
    Name: "Rishabh",
    LastName: "Aggarwal",
    CountryName: "India",
    email: "user@google.com",
    upi: "user@ybl"
} 


let userTwo = userOne

userTwo.email = "rishabh@google.com"

console.log(userOne.email);           // 📍 Answer is "rishabh@google.com"
console.log(userTwo.email);           // 📍 Answer is "rishabh@google.com"



let userThree = userTwo

userThree.email = "aggarwalrishabh4198@gmail.com"

console.log(userTwo.email);
console.log(userThree.email); 






let aman = "44"

let converted = Number(aman);
console.log(converted);
console.log(typeof converted);


let number = "55";
let typeConversion = Number(number);

console.log(typeConversion);
console.log(typeof typeConversion);

let number0 = "99";
let typeConversion0 = Number(number0);

console.log(typeConversion0);
console.log(typeof typeConversion0);


console.log(); 

