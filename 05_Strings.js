const name = "Rishabh"

const repoCount = 50

// ❌❌👇❌❌Primitive way of CONCATENATION❌❌👇❌❌
// console.log(name + repoCount + "value");     //[📍📍 Answer is :-  "Rishabh50value"  ] 


// ✅✅👇✅✅STRING INTERPOLATION - modern way of CONCATENATION✅✅👇✅✅
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    //[📍📍 Answer is :-  "Hello my name is Rishabh and my repo count is 50"  ] 




// 💎✅💎Another way of DECLARING string👇👇 

const gameName = new String ('Rishabhhhhh');   // [@2:12:06 ]

/* Print "gameName" in console & you will get :-
 * String {'Rishabhhhhh'}
        0: "R"
        1: "i"
        2: "s"
        3: "h"
        4: "a"
        5: "b"
        6: "h"
        7: "h"
        8: "h"
        9: "h"
        10: "h"
        length: 11
        [[Prototype]]: String[[PrimitiveValue]]: "Rishabhhhhh"
 */

// console.log(gameName);        //[📍📍 Answer is :-  "[String: 'Rishabhhhhh']"  ] 




// / 💎✅💎For accessing the prototype stored in above VARIABLE👇👇

// console.log(gameName[0]);              // 📍 Answer is "R"
// console.log(gameName[4]);              // 📍 Answer is "a"

// console.log(gameName.__proto__);       // 📍 Answer is "{}"
// console.log(gameName.length);          // 📍 Answer is "11"
// console.log(gameName.toUpperCase());      // 📍 Answer is "RISHABHHHHH"
// console.log(gameName.trimEnd(2));

// 💎✅💎 Suppose we want to know that which character is on the position 't' in  String ('Rishabhhhhh'); ?? 👇👇
// console.log(gameName.charAt(2));       // 📍 Answer is "s"

// 💎✅💎 Suppose we want to know that at which position is on the character 'h' in  String ('Rishabhhhhh'); ?? 👇👇
// console.log(gameName.indexOf('h'));    // 📍 Answer is "3"






// 💎✅💎 SUBSTRING 👇👇

const newString = gameName.substring(0,5)     
// console.log(newString);             // 📍 Answer is "Risha"  [the last value 5 is not included]
                                        // result wont include the last digit number 

                              // 🔽🔽

const newString1 = gameName.substring(1,5)     
// console.log(newString1);             // 📍 Answer is "isha"  [the last value 5 is not included]
                                        // result wont include the last digit number 







// 💎✅💎 SLICE 👇👇

const anotherString = gameName.slice(-11, 5);    // 📍📍💎📍📍 [MUST SEE] Run the program to see
// console.log(anotherString);                     //[📍📍 Answer is :-  "Risha" ]            

                        // 🔽🔽

const anotherString1 = gameName.slice(-10, 4);    // 📍📍💎📍📍 [MUST SEE] Run the program to see
// console.log(anotherString1);                     //[📍📍 Answer is :-  "ish" ]            
                        
                        // 🔽🔽

const anotherString2 = gameName.slice(-11, 10);    // 📍📍💎📍📍 [MUST SEE] Run the program to see
// console.log(anotherString2);                     //[📍📍 Answer is :-  "Rishabhhhhh" ]            
                        








// 💎✅💎 TRIM 👇👇  (to remove the extra spaces from a STRING)

const newStringOne = "    Rishabh    "
// console.log(newStringOne);                   // 📍📍 answer will be '    Rishabh    '
// console.log(newStringOne.trim());            // 📍📍 answer will be 'Rishabh'  [ it will remove the space at the startng & end ]   [watch the documentation at mdn]




// 💎✅💎 REPLACE 👇👇  (to REPLACE any value "x" with value "y" inside a URL)

const url = "https://rishabh.com//risabh%20aggarwal.com"

// console.log(url.replace('%20', '-'))       // 📍📍 Answer will be  "https://rishabh.com//risabh-aggarwal.com" [ will remove "20%" at insert "-" in place of it]





// 💎✅💎 INCLUDES 👇👇  (Will tell if there is such word INCLUDED in the oroginal  URL)

const address = "https://ecma-international.org/publications-and-standards/standards/ecma-262/"

// console.log(address.includes('sundar'))      // 📍📍 Answer will be  "false" 
// console.log(address.includes('international'))      // 📍📍 Answer will be  "true" 




// 💎✅💎 SPLIT 👇👇 [@2:27:30] (Will tell if there is such word INCLUDED in the oroginal  URL)

let value = "I went - to a - nice hill- station."

// console.log(value.split('-'));     //📍📍 Answer is :-  "[ 'I', 'went', 'to', 'a', 'nice', 'hill', 'station.' ]"  
// console.log(value.split('a'));     //📍📍 Answer is :-  "[ 'I went to ', ' nice hill st', 'tion.' ]"      
// console.log(value.split(/-/));     //📍📍 Answer is :-  "[ 'I went to a nice hill station.' ]" 
















// 🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍

//💎✅💎 INDEXING in STRINGS


let  val = 'HELLO ROGER'

// console.log(val[1]);                 //[📍📍 Answer is :-  "E"  ] 
// console.log(val[4]);                 //[📍📍 Answer is :-  "O"  ] 
// console.log(val[8]);                 //[📍📍 Answer is :-  "G"  ] 
// console.log(val[5]);                 //[📍📍 Answer is :-  nothing ]  (bcoz position 6 is a blank space)

// console.log(val.length);             //[📍📍 Answer is :-  "11"  ] 






