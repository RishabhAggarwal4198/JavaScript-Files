
// console.log(2 != 1);              // 📍 Answer is "true"    
// console.log("02" > 1);              // 📍 Answer is "true"    
// console.log("2" > 1);              // 📍 Answer is "true"    
// console.log("2" == 1);              // 📍 Answer is "false"    


// console.log(null > 0);          // 📍 Answer is "false"
// console.log(null == 0);         // 📍 Answer is "false"
// console.log(null >= 0);         // 📍 Answer is "true" 


// console.log(undefined ==0);     // 📍 Answer is "false"
// console.log(undefined > 0);     // 📍 Answer is "false"
// console.log(undefined < 0);     // 📍 Answer is "false"



/* 
✅✅✅✅✅✅✅✅
The reason is that an equaltiy check == and comparison ><  >=   <=  works very differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >=0 is true and (1) null >0 is false
*/


//    ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
//    All the above type of comparisons can literally give unpredicted results & could create
//    a big confusion so to avoid this 
//    NEVER USE ANY OF THE ABOVE COMPARISON
//    ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
 





// console.log("2" == 2);     // 📍 Answer is "true"
//                            //💎✅💎 bcoz "==" converts both "2" & 2 into one type & then compares them & hence we get it true


// console.log("2" === 2);    // 📍 Answer is "false"
                           //💎✅💎 bcoz "===" stops any kind of conversion & strictly checks there DATA-TYPES as well, and hence we get it false