
const user = {
    username: "Rishabh",
    price: 99,

    welcomeMessage: function() {

            // console.log(`${this.username}, welcome to website`);  // 📍Answer is "Rishabh, welcome to website"
                                                                     //✅✅ "this" keyword is used to refer the current context
            // console.log(this);   // ✅📍Answer is :- 
                                    // {
                                    //     username: 'Rishabh',
                                    //     price: 99,
                                    //     welcomeMessage: [Function: welcomeMessage]
                                    // }
                                         
    }
}

 


// user.welcomeMessage       // 📍Answer is NOTHING HAPPENED

user.welcomeMessage()    // 📍Answer is "Rishabh, welcome to website"



//✅ IF SOMEONEONE 👇(changed the context like below)
// user.username = "sam Altman"
// user.welcomeMessage()    // 📍Answer is  "sam Altman, welcome to website"



//🍁🍁 👇👇
// console.log(this);    // 📍Answer is "{}"  [it came "{}" i.e. current contect came empty bcoz]




// 🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁
// In BROWSER the biggest "global object" is "Window" object (& that's why we are able to capture all events of "WINDOW" like "click", "form-submit" etc.)
// 🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁






// 💎✅💎"this" keyword (with "NORMAL-FUNCTION" )👇👇

function play () {
    console.log(this);
}
 
// play()              // ✅✅✅There will be lots of values in the "Answer" [run it to see that]
// console.log(this);  // 📍Answer is  "{}"

      // 🔽🔽

const play2 = function () {
    let username = "Rishabh"
    console.log(this.username);
}

// play2()  // 📍Answer is "undefined"






// 💎✅💎 "this" keyword (with "ARROW-FUNCTION" ) 👇👇 [@ 5:42:00]

const play3 =  () =>  {
    let username = "Rishabh"
    console.log(this.username);
}

// play3() // 📍 Answer is "undefined" [when "console.log(this.username)"]

                    // 🔽🔽

const play4 =  () =>  {
    let username = "Rishabh"
    console.log(this);
}

// play4() // 📍 Answer is "{}" [when "console.log(this)"]
  











//💎✅💎 ARROW-FUNCTION (basic Syntax) 👇👇


const addTwo = (num1, num2) => {
    return num1 + num2                              // ✅✅ Is called EXPLICIT - FUNCTION
}                                                   // ✅✅(i.e. we need to write "return" keyword, bcoz our function is wrapped in CURLY braces & is in more than 1 line)

// console.log(addTwo(3,4));                       // 📍 Answer is "7" 

                   //🔽🔽 OR (another way of writing same function)

// implicit- return Syntax 👇
const addTwo2 = (num1, num2) =>  (num1 + num2)      // ✅✅ Is called IMPLICIT - FUNCTION (i.e. no need to write "return" keyword, bcoz our function is not wrapped in CURLY braces & is in just 1 line)

// console.log(addTwo2(3,4));                      // 📍 Answer is "7" 

                    //🔽🔽 OR (another way of writing same IMPLICIT function)

const addTwo3 = (num1, num2) => num1 + num2      

// console.log(addTwo2(3,4));                        // 📍 Answer is "7" 


/*  🚩🚩NOTE(for above)🚩🚩 
✅✅ If we Gona use "()" parenthesis around  "num1 + num2" then use of "return" keyword before it is not
✅✅ If we Gona use "{}"  CURLY brackets around  "num1 + num2" then use of "return" keyword before it is must
*/




//🍀🍀🍀🍀🍀🍀🍀🍀


                      //🔽🔽 OR (another way of writing same IMPLICIT function)

const addTwo3_2 =( num1, num2 ) =>  (
    num1**num2
)     
                    
// console.log(addTwo3_2(3, 6));                      // 📍 Answer is "729" 


                     //🔽🔽 OR (when we have only SINGLE parameter to pass in the FUNCTION)


const addTwo3_3 = num1 =>  (num1**num1)     

// console.log(addTwo3_3(3));                      // 📍 Answer is "27" 


//🍀🍀🍀🍀🍀🍀🍀🍀









// 💎✅💎 syntax for writing function in REACT👇👇

const addTwo4 = (num1, num2) => ({username: "Raghavvv"})

//✅✅ in the above sentence  "{username: "Raghavvv"}"  is an OBJECT stored in the parenthesis "()" of  const addTwo4




// 💎 EXTRA - syntaxes 👇

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function() { } )
// myArray.forEach(() => {})








//🍀🍀🍀🍀🍀🍀🍀🍀



// 💎✅💎 SET-INTERVAL👇👇 [two times use(once to execute) & second to stop it]

let id = setInterval( ()=>{
    console.log("Hello World");
}, 2000)


setInterval( () =>{
console.log(`"SetInterval Stopped"`);             //📍📍 Answer is :- RUN to see the Answer 
clearInterval(id);         

}, 10000)



//🍀🍀🍀🍀🍀🍀🍀🍀


