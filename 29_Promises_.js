/*  For reading "PROMISE" documentation :-
    ✅https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

    ✅https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
    */ 

// 📍❌📍 Primitive & non Professional way of wrting FETCH statement 👇👇
// fetch('https://something.com').then().catch().finally()




// 💎✅💎 Creating  PROMISE 👇👇

const PromiseOne = new Promise (function(resolve, reject){     // [📍📍 in our daily world a PROMISE done by someone will only have two aspects 1) Either it will be completed 2) Or it will not get completed, So Similarly in JS also PROMISE have two aspects "resolve" & "reject"]
                                                               // 💎✅💎 As PROMISE is an instance (as per the documentation of MDN) so similarly to get an instance of it we use "new" keyword
    // Do an Async task (some of these things takes time ):-
    // + DB calls
    // + Cryptography
    // + Network


    setTimeout(function (e) {
        // console.log('Async task is complete');    // [📍📍 "Async task is complete" will get printed after 1 minute in console ]
        resolve ();                               //[💎📍💎 "resolve()" is very important to be called so as to connect with ".then" below]
    },1000)
    
})



// 💎💎 Consuming a PROMISE 👇👇
    
PromiseOne.then (function(){                 // [📍📍 ".then" is put over here as it is directly connected to "resolve" ]
    // console.log("Promise in consumed");      // [📍📍 "Promise in consumed"  got printed after 1 minute]
})


                        // 🔽🔽 (little short way of doing the above thing (in just one part instead of doing in two parts like above ))


new Promise(function(resolve, reject){      // 💎✅💎 It's not necessary to store a PROMISE inside a variable, it could declared like that also just by using "new" keyword before it
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    // console.log("Async 2 resolved");
})






//💎✅💎✅💎✅💎  PROMISE - 3 👇👇 

// Creating "promise" 👇 

const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({
            username : "Rishabh",
            email : "code@example.com"})
    }, 1000)
})


// Consuming "promise" 👇 
promiseThree.then(function(userrrr){   // 💎✅💎 This "userrrr" variable is basically the value which we passed on inside the "resolve" above
    // console.log(userrrr);              // [📍 "{ username: 'Chai', email: 'code@example.com' }" got printed in console.log ]
})









// 💎💎 PROMISE - 4 👇👇  [ using "reject" keyword ]  [💎✅💎 & actually the PERFECT way of doing this]

// Creating "promise" 👇 
// const promiseFour = new Promise (function (resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve ({username: "Rishabh",
//                      password: "123"})
//         }else{
//             reject("ERROR!: Something went wrong") 
//         } 
//     },1000)
// })


// // Consuming "promise" 👇 

// // promiseFour.then().catch()    // [📍 One-Way of doing thi (i.e. by using ".then()" i will get the value & if error occurs by using ".cathch()" i will have the  error value)]

// promiseFour.then((userrrr) => {
//     console.log(userrrr);
//     return userrrr.username
// }).then((username) => {                 // [📍This is called chaining (i.e. the value which we gonna receive from the ".then" above, only that value will enter this ".then" )]
//     console.log(username);
// }).catch(function (errorrr){
//     console.log(errorrr);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// [📍💎📍 Answer is "!ERROR: Something went wrong" & "The promise is either resolved or rejected"  bcoz "let error = true;" in line 79]
// [📍💎📍 Answer is "Rishabh" & "The promise is either resolved or rejected"  when "let error = false;" in line 79]


                                    // 🔽🔽


// Creating "promise" 👇 
// const promiseFour = new Promise (function (resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve ({username: "Rishabh",
//                      password: "123"})
//         }else{
//             reject("ERROR!: Something went wrong") 
//         } 
//     },1000)
// })


// // Consuming "promise" 👇 

// // promiseFour.then().catch()    // [📍 One-Way of doing thi (i.e. by using ".then()" i will get the value & if error occurs by using ".cathch()" i will have the  error value)]

// promiseFour.then((userrrr) => {
//     console.log(userrrr);
//     return userrrr.username
// })                                      // [📍This is called CHAINING (i.e. the value which we gonna receive from the ".then" above, only that value will enter this ".then" )]
// .then((username) => {                   // 💎✅💎  this ".then()"  is basically for handling the above "return"
//     console.log(username);              // 💎✅💎 & CHAINING is done when we want to exract data from a PROMISE using functions like "return" & also when making connectios of DATA-BASE 
// })
// .catch(function (errorrr){            // 💎✅💎 & in this CHAINING we also have to chain ".cath()" bcoz we are getting errors as well  
//     console.log(errorrr);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))   // 💎✅💎 just to tell us that whatever we were planning to get from PROMISE ( "resolved" or "rejected") it got completed or not ?
                                                                            // 💎✅💎 ".finally()" gonna get executed at every cost no matter what happens

// [🍁✅🍁✅🍁 Answer is "{ username: 'Rishabh', password: '123' }" , "Rishabh" & "The promise is either resolved or rejected"  when "let error = false;" in line 79]







// 💎💎 PROMISE - 5 👇👇

const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function(){
        let erorrr = true;
        if(!erorrr){                            // 💎✅💎 "!error" means  "error = false" 
            resolve ({username: "JavaScript",
                     password: "123"})
        }else{
            reject("!ERROR: JS went wrong")
        }
    },1000) 
})
 
async function consumePromiseFive () {           // [📍📍 Async means "some response is about to come"]         
    const response = await promiseFive
    console.log(response);
} 
consumePromiseFive(); 


        // 🔽🔽  (OR) [for Handling error much more gracefully ]


//  Creating "promise" 👇 
    // const promiseFivee = new Promise(function (resolve, reject){
    //     setTimeout(function(){
    //         let error = true;
    //         if(!error){
    //             resolve ({username: "JavaScript",
    //                         password: "123"})
    //         }else{
    //             reject("!ERROR: JS went wrong")
    //         }
    //     },1000)
    // })


    // // Consuming "promise" 👇 
    // async function consumePromiseFive () {        // [📍📍 Async means "some response is about to come"]
    //     try {
    //         const response = await promiseFivee
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // consumePromiseFive();      // [📍 Answer is "!ERROR: JS went wrong" bcpz " let error = true;"  in the line 143 ]

    // async function getAllUsers () {
    //    try { 
    //         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    //         const data = await response.json()
    //         console.log(data); 
    //    } catch (error) {
    //         console.log("E: ", error );
    //    }
    // }


    // getAllUsers()     // [📍📍 Run to see the RESULT]
    

                  // 🔽🔽 (writing above function in ".then & .catch" format)


    fetch ('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {                          // 💎✅💎  this ".then()"  is basically for handling the above "return"
        console.log(data);
    })
    .catch((errorrr) => console.log(errorrr))    // [📍📍 Run to see the RESULT (will be same as the above method)]

    

