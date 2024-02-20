

// 💎✅💎THRUTHY & FALSY values  👇👇
//It is basically the "values" to which Computer itself intreprets as TRUTH or FALSE values
 


// 💎✅💎EXAMPLE (Truthy & Falsy values) 👇👇


// const userEmail = "rishabh@aggarwal"   // [watch @ 6:53:08]  

// if (userEmail) {
//     console.log("Gpt user email");
// } else {
//     console.log("Don't have user email");  // 📍📍 Answer is "Gpt user email" 
// }                                          // ✅✅ [So this is called TRUTHY-VALUE where there was a value inside const & computer automatically assumed it to be true]

            // OR 🔽🔽

// const userEmail0 = ""         //💎 (Empty String)

// if (userEmail0) {
//     console.log("Gpt user email");
// } else {
//     console.log("Don't have user email");
// }                                           // 📍📍 Answer is "Don't have user email"  [So this is called FALSY-VALUE where an "" an empty STRING automatically got assumed by system as a FALSE value ]

            // OR 🔽🔽

// const userEmail0 = []         //💎 (Empty Array)

// if (userEmail0) {
//     console.log("Gpt user email");
// } else {
//     console.log("Don't have user email");
// }                                              // 📍📍 Answer is "Gpt user email"  [as [] an empty ARRAY automatically got assumed by system as a TRUE value ]






//🍁💎🍁💎🍁 FALSY - VALUES 👇👇
// false, 0, -0, BigInt 0n, "", null, undefined, NaN



//🍁💎🍁💎🍁 TRUTHY - VALUES 👇👇 [watch @6:57:16]
// "0", "False", " ", [], {}, function(){}              // ✅✅ Whatever is wrapped inside a " " it becomes a STRING value & that's how "0", "False", " " are TRUTHY-VALUES
// ✅✅ Where "function(){}" is an empty function







//💎✅💎 WAY TO CHECK an "empty-ARRAY"  👇👇

// const userEmail1 = []

// if (userEmail1.length === 0) {
//     console.log("Array is empty");
// }else {
//     console.log("Array is NOT empty");           // 📍📍 Answer is  "Array is empty"
// }                                             







//💎✅💎 WAY TO CHECK an "empty-OBJECT"  👇👇

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {       //✅✅ "(Object.keys(emptyObj)" gonna give us an ARRAY that's why we have used ".length" property on it
//     console.log("Object is empty");    
// }else {
//     console.log("Object is NOT empty");         // 📍📍 Answer is  "Object is empty"
// }                                             
    
    
    
    
    



//💎✅💎 EXAMPLE - 1 👇👇

const userEmail2 = []

// if (userEmail2.length === 0) {
//     console.log("Array is Empty");
// }   

//  📍 And since value of "userEmail2.length = 0", condition is TRUE,  Answer is  "Array is Empty"








//💎✅💎 EXAMPLE - 2 👇👇

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty");
// }                   //  📍 Answer is  "Object is Empty"







//🍁🍁💎🍁🍁 INTERVIEW - QUESTIONS 👇👇  // 💎📍💎 V. IMPORTANT  [@7:01:57]

// console.log(false == 0);    //  📍 Answer is  "true"

// console.log(false == '');    //  📍 Answer is  "true"

// console.log(0 == '');       //  📍 Answer is  "true"








// 💎✅💎 NULLISH COALESCING OPERATOR (??) : null defined 👇👇  [@ 7:04:00 ]

/* ✅ what this operator basically does is the safety check of the "null" value i.e.
       sometime it might happen that when we could recive a value from other source
       that could be "null" & due to "null" it might be possible that program may not 
       run or some other problem might arise in the whole program so in place of it 
       an ALTERNATIVELY-SAFE is given using this "operator" so that, that alternative 
       value automatically gets assigned in such unfavourable conditions 
 */

        
let val1 =  5 ?? 10
// console.log(val1);     //  📍 Answer is  "5"

let val2 =  null ?? 10
// console.log(val2);     //  📍 Answer is  "10"

let val3 = undefined ?? 15 
// console.log(val3);     //  📍 Answer is  "15"

let val4 = null ?? 10 ?? 20
// console.log(val4);     //  📍 Answer is  "10"  [✅✅the first numerical value from left got assigned]











//💎✅💎 TERNIARY OPERATORS 👇👇  [✅ It's basically a kind of One-Liner "IF-ELSE" statement]

// condition ? true : false

// Example 👇

const iceTeaPrice = 100

iceTeaPrice <= 80 ?  console.log("Price is less than 80 "): console.log("Price is more than 80");     // 📍 Answer is  "Price is more than 80"

iceTeaPrice == 80 ?  console.log("Price is less than 80 "): console.log("Price is more than 80");     // 📍 Answer is  "Price is more than 80"

iceTeaPrice === 80 ?  console.log("Price is less than 80 "): console.log("Price is more than 80");     // 📍 Answer is  "Price is more than 80"

iceTeaPrice !== 80 ?  console.log("Price is less than 80 "): console.log("Price is more than 80");     // 📍 Answer is  "Price is less than 80"   [✅ although this statement is wrong as value of "iceTeaPrice = 100" ]







