


// ➤JavaScript and classes 

// ➤💎✅💎 OOPs  :- in layman terms OOPs could be defined as what is the structure of writing the code ?

//  ➤💎✅💎 Objects in JS :- it could be defined as the "collection of properties"
  

// 💎💎 Why to use OOPs 👇👇



/* ➤ Parts of OOPs :- 
   +  Object Literals
   +  Constructor Functions
   +  Prototypes 
   +  Classes
   +  Instances (new, this)
   */ 


/* ➤ 4 keywords or $ pillars of OOPs :- 
   +  ABSTRACTION - 📍 Abstraction means to hide the details, it basically hides all the details that are happening under the hood & gives u the abstracted form of it  (watch @6:48:29)
   +  ENCAPSULATION - 📍 As the name goes it basiclly Encapsulates or Wraps up the data  (watch @6:48:52)
   +  INHERITANCE
   +  POLYMORPHISM - 📍 As the name goes 'POLY' means many & 'MORPHISM' means forms or roop, so it basically means "SO MANY FORMS"  (watch @6:49:29)
   */ 







   
    // 💎💎 OBJECT - LITERALS 👇👇

   const user = {
    username: "Rishabh",
    loginCount: 8,
    signedIn : true,

    getUserDetails : function () {
        console.log("Got user details from database");
    }
   }

   
//    console.log(user.username);
//    console.log(user.getUserDetails);    // [📍 Will print the whole function  ]
//    console.log(user.getUserDetails());  // [📍 Will print the line only in console log  ]


                  //  🔽🔽 (With "this"  Key Word)

    const userr = {
    username: "Rishabh",
    loginCount: 8,
    signedIn : true,

    getUserDetailss : function () {
        // console.log(`Give me the Login Count : ${loginCount}`);   // [📍 Will throw an error bcoz it doesn't know that what & which " loginCount" to consider ]
        console.log(`Give me the Login Count: ${this.loginCount}`); // [📍 bcoz of the insertion of "this" keyword it would print the result as "Give me the Login Count:  8" ]
    }
   }

//    console.log(userr.getUserDetailss());        //[📍📍 Answer is :-  "Give me the Login Count: 8"  ] 

 
                  //  🔽🔽 (console.logging just "this" word )


    const userrr = {
    username: "Rishabh",
    loginCount: 8,
    signedIn : true,

    getUserDetailsss : function () {
         console.log(this);
    }
   }

//    console.log(userrr.getUserDetailsss());  // [ 📍 Will print "{username: 'Rishabh', loginCount: 8, signedIn: true, getUserDetailsss: ƒ}" as result ] (💎✅💎 i.e. will print complete OBJECT)
//    console.log(this);  // [📍 Printing it here it will give "{}" (that means that right now there is nothing in Global Context), BUT printing it in browser will give "Window {window: Window, self: Window, document: document, name: '', location: Location, …}" i.e. a GLOBAL OBJECT bcoz there hundred of things are happening ]

   








 // 💎✅💎 CONSTRUCTOR - FUNCTION 👇👇  [allows us to make different INSTANCES from one single OBJECT-LITERALS ]


   function User (username, loginCount, isLoggedIn, ageCheck ) {
    this.username = username;            // 💎✅💎 the LEFT side one is the variable which  (we have declared), while the RIGHT side one the PARAMETER (declared with the function) which we are passing into it
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.aayuPramaan = ageCheck 

    this.greeting = function () {        // 💎✅💎 Simiarly we could also declare a "METHOD" over here 
        console.log(`Welcome ${this.username}`); 
    }

    // return this   // [📍📍 even if u don't give this "return" key word it will implicitly return the value]
}

   const userOne = User ("Rishabh", 12, true)

//    console.log(userOne);    
   /* 📍📍 Answer will be :-
                                <ref *1> Object [global] {
                            global: [Circular *1],
                            clearImmediate: [Function: clearImmediate],
                            setImmediate: [Function: setImmediate] {
                                [Symbol(nodejs.util.promisify.custom)]: [Getter]
                            },
                            clearInterval: [Function: clearInterval],
                            clearTimeout: [Function: clearTimeout],
                            setInterval: [Function: setInterval],
                            setTimeout: [Function: setTimeout] {
                                [Symbol(nodejs.util.promisify.custom)]: [Getter]
                            },
                            queueMicrotask: [Function: queueMicrotask],
                            structuredClone: [Function: structuredClone],
                            atob: [Getter/Setter],
                            btoa: [Getter/Setter],
                            performance: [Getter/Setter],
                            navigator: [Getter],
                            fetch: [Function: fetch],
                            crypto: [Getter],
                   💎✅💎  username: 'Rishabh',
                            loginCount: 12,
                            isLoggedIn: true
                            }                     💎✅💎 

                            💎Look @ the last 3 lines💎
                            */


const  userTwo = User("Java Script Series", 11, false)
// console.log( userOne); 
 /* 📍📍 Answer will be :-
                        <ref *1> Object [global] {
                        global: [Circular *1],
                        clearImmediate: [Function: clearImmediate],
                        setImmediate: [Function: setImmediate] {
                            [Symbol(nodejs.util.promisify.custom)]: [Getter]
                        },
                        clearInterval: [Function: clearInterval],
                        clearTimeout: [Function: clearTimeout],
                        setInterval: [Function: setInterval],
                        setTimeout: [Function: setTimeout] {
                            [Symbol(nodejs.util.promisify.custom)]: [Getter]
                        },
                        queueMicrotask: [Function: queueMicrotask],
                        structuredClone: [Function: structuredClone],
                        atob: [Getter/Setter],
                        btoa: [Getter/Setter],
                        performance: [Getter/Setter],
                        navigator: [Getter],
                        fetch: [Function: fetch],
                        crypto: [Getter],
                        username: 'Rishabh',
                        loginCount: 12,
                        isLoggedIn: true
                        }
                        <ref *1> Object [global] {
                        global: [Circular *1],
                        clearImmediate: [Function: clearImmediate],
                        setImmediate: [Function: setImmediate] {
                            [Symbol(nodejs.util.promisify.custom)]: [Getter]
                        },
                        clearInterval: [Function: clearInterval],
                        clearTimeout: [Function: clearTimeout],
                        setInterval: [Function: setInterval],
                        setTimeout: [Function: setTimeout] {
                            [Symbol(nodejs.util.promisify.custom)]: [Getter]
                        },
                        queueMicrotask: [Function: queueMicrotask],
                        structuredClone: [Function: structuredClone],
                        atob: [Getter/Setter],
                        btoa: [Getter/Setter],
                        performance: [Getter/Setter],
                        navigator: [Getter],
                        fetch: [Function: fetch],
                        crypto: [Getter],
          💎✅💎      username: 'Java Script Series',
                        loginCount: 11,
                        isLoggedIn: false   
                        }                    💎✅💎  

    🍁🍁💎🍁🍁Look @ the last 3 lines💎 [ ✅✅it overwrited the previous Values] & that's why "new" keyword is IMPORTANT
 */


                          //🔽🔽 (so by inserting "new" Keyword) [🍁🍁the significance of "new" keyword ]


const user1 = new User ("Ravi", 22, true )    // 💎✅💎 by inserting the "new" keyword we have said that just give us the NEW INSTANCE of the whole function 
const user2 = new User ("Ramesh", 28 , false )
console.log(user1);    // 📍📍 [ Answer is "User { username: 'Ravi', loginCount: 22, isLoggedIn: true }" without any kind of mess]


// 💎✅💎✅💎✅💎 by inserting "new" keyword we got much more clear code & also our values doesn't got overwrited


/*✅✅some NOTES regarding new keyword:-
Step-1) Whenever we gonna use the "new" keyword, an empty objects gets created (which is called instance)
Step-2) A "constructor" function gets created bcoz of the "new" keyword (it packs all the arguements which gave to it in that & gives us back)
Step-3) All the "arguments" which we gave to it gets injected in the this keyword
Step-4) And we gets it inside the function
*/





 // 💎✅💎 To check if CONSTRUCTOR is available as a property 👇👇

 console.log(user1.constructor);  // (📍📍 Answer is [Function: User] , so basically it tells hat it is the refrence of itself )
 
 // [ 📍📍 "INSTANCE OF"  Read at :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof  ]

 





