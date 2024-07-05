
// 💎✅💎  PROBLEM with "var" type variable 👇👇

var c = 300
let b = 50

if (true) {
    let a = 10
    const b = 20
    var c =20
    d = 40
    // console.log(`Inner 'b' value is :- ${b}`);      // 📍 Answer is :-  "Inner 'b' value is :- 20"  
}


// console.log(a);    // 📍Answer will not be printed bcoz "a" is not accesible outside scope
// console.log(b);    // 📍 Answer is :-  "50"  
// console.log(c);      // 📍 🚩🚩{Problem with VAR}🚩🚩 Answer will not be "30" [which should not be, as variable "var c" is definded in a SCOPE]
// console.log(d);      // 📍 🚩🚩{this kind of variable is also a problem}🚩🚩 Answer will not be "40" [which should not be, as this variable is definded in an SCOPE]


/* 🚩✅🚩NOTE🚩✅🚩 Anything written inside a Scope is 
called BLOCK - SCOPE & anything written outside of a scope 
is called GLOBAL- SCOPE
+ Whatever we write in GLOBAL-SCOPE that value is accessible inside the BLOCK-SCOPE
+ Whatever we write in BLOCK-SCOPE that value MUST NOT be accessible the GLOBAL-SCOPE/ OUTSIDE
 */











//💎✅💎 NESTED-SCOPE [SCOPE EXAMPLE WITH "FUNCTION inside a FUNCTION"] 👇👇 [@5:20:57]

function one() {
    const username = "Rishabh"
 
    function two () {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);   // 📍Answer will not be "error" bcoz it won't get executed as variable "website" is inside the above scope
                                // ✅ it will show "Error" at this point only, so the "two()" will never get executed
    
    // two()
}

    // one()  // 📍No answer will print bcoz function "one()" is only having "two()" to execute





    

//💎✅💎  "IF - ELSE" statements also follows SCOPE rules 👇👇


if (true) {
    const username = "Rishabh"
    if(username === "Rishabh") {
        const website = " youtube"
        // console.log(username+website);    // 📍Answer will be "Rishabh youtube"
    }
    // console.log(website);     // ❌📍❌Answer will be ERROR bcoz "const website" is not accessible outside of the above SCOPE
}
// console.log(username);     // ❌📍❌ Answer will be ERROR bcoz "const username" is not accessible outside of it's  SCOPE










//💎✅💎🍁🍁🍁🍁 HOISTING 🍁🍁🍁🍁💎✅💎 👇👇


//✅✅METHOD - 1 [of declaring a function] 👇

// console.log(addone(5));      // 📍📍📍Answer will be "6" [bcoz below it we have just declared a simple function (& not holded it inside a function)]

function addone (num) {
    return num + 1
}


 


// ✅✅METHOD - 2 [of declaring a function] 👇

// console.log(addTwo(5))        // ❌📍❌ Answer will be "ERROR"  [bcoz below it, we have not only declared that function but we have also holded it inside a "VARIABLE"]

const addTwo = function (num) {
    return num + 2
}

// console.log(addTwo(5));
 





function addThree (num) {
    let output = num + 1;
    let finalOutput = console.log(output);
    return finalOutput;
}

// addThree(5)         // 📍Answer will be "6"  





