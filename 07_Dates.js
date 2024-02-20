
// 💎✅💎 DATES  👇👇


let myDate =  new Date ();

// console.log(myDate.toString());          // 📍 Answer is "Wed Nov 29 2023 13:35:17 GMT+0530 (India Standard Time)"  
// console.log(myDate.toDateString());         // 📍 Answer is "Wed Nov 29 2023"  
// console.log(myDate.toLocaleString());       // 📍 Answer is "29/11/2023, 2:20:56 pm"  
// console.log(myDate.toLocaleString().toUpperCase());       // 📍 Answer is "29/11/2023, 2:20:56 PM"  
// console.log(typeof myDate);            // 📍 Answer is "object" 

let myCreatedDate = new Date (2023, 0, 23); 
// console.log(myCreatedDate.toDateString());  //📍 Answer is "Mon Jan 23 2023"


let myCreatedDate2 = new Date (2024, 3, 25, 5, 3); //✅ [Here "3" is the 4rth month of the year , as DATE starts from 0 in JS]
// console.log(myCreatedDate2.toLocaleString());  //📍Answer is "25/4/2024, 5:03:00 am"



let myCreatedDate3 = new Date ("2023-01-14");   //📍 [YYYY-MM-DD  format]
// console.log(myCreatedDate3.toLocaleString());   //📍 Answer is "14/1/2023, 12:00:00 am"

                                     // 🔽🔽

let myCreatedDate4 = new Date ("01-14-2023");   //📍 [MM-DD-YYYY  format]
// console.log(myCreatedDate4.toLocaleString());   //📍 Answer is "14/1/2023, 12:00:00 am"



//✅ When u want values between two NUMBERS only 👇 

let myCreatedDate5 = new Date (2023, 0, 23); 
let myTimeStamp = Date.now();

// console.log(myTimeStamp);       // 📍 Answer is "1701247039259" miliseconds [its the millisecond value from 1st January 1970 uptill now]
// console.log(myCreatedDate5.getTime());    // 📍 Answer is "1674412200000" miliseconds  [its the millisecond value from "1st January 1970" uptill "Mon Jan 23 2023" ]



// 💎✅💎 To convert miliseconds value into seconds 👇👇
// console.log(Date.now());        // 📍 Answer is "1704878426710"
// console.log(Math.floor(Date.now()/1000)); // 📍 Answer will be "1704878426" seconds




// 💎✅💎  👇👇

let newDate = new Date (2023, 2 , 22);
// console.log(newDate.getMonth());           // [📍📍 Answer is :-  "2" (that is month "March")  ] 
// console.log(newDate.getMonth()+1);          // ✅✅ "+1" to prevent user form getting confused
// console.log(newDate.getDay());              // [📍📍 Answer is :-  "3" (that is "Wednesday")  ] 

// console.log(`${newDate.getDay()} is the time`);  



newDate.toLocaleString('default', {            //💎💎[@3:08:53]
    weekday: "long"
})



