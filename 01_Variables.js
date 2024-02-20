console.log("Rishabh Aggarwal");

const accountId = 144553;              // 💎✅💎 "const" is not allowed to change
let accountEmail = 'aggarwalrishabh4198@gmail.com';
var accountPassword = '12345';       // ❌❌❌❌ (Don't Use)
accountCity = "Jaipur";              // ❌❌❌❌ (Wrong Method)
let accountState;


//Trying to change the above variables

accountEmail =  "rushikesh@gmail.com";
accountPassword = "21212121";
accountCity = "Bengaluru";


/*
✅✅✅✅
Prefer not to user "var" because of it's issue of leakage outside
 block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
console.log(accountState);     //[📍📍 Answer is :-  "undefined"  ] 

// console.timeLog(accountEmail)


  