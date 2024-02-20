
// console.log(Math.PI);                   //[📍📍Answer is :- "3.141592653589793"  (bcoz "Math.PI" is a constant ) ] 
// Math.PI = 5;
// console.log(Math.PI);                   //[📍📍Still Answer is :- "3.141592653589793" ] 




//💎✅💎 But why we are not able to change the value of "Math.PI" ? Whta's happening behind the scenes ?

//👇👇

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")         //[@8:53:13] [💎✅💎  "getOwnPropertyDescriptor" tells us about some hidden properties of an OBJECT ] 

// console.log(descriptor);  
                            /*📍📍 Answer is :-  
                            " {
                                value: 3.141592653589793,
                                writable: false,                      // [@8:57:45] [🍁💎🍁 So, it can't  become  "true" at any cost, bcoz our JAVASCRIPT-ENGINE has made it so much hard coded in C++ that this value can't be changed ] 
                                enumerable: false,
                                configurable: false
                                } "  
                           */




// 💎💎  understanding with the helpof an EXAMPLE 👇👇



//✅ Alternate way of creating an OBJECT👇

const myNewObject = Object.create(null);


//✅ Conventional  way of creating an OBJECT👇

const  tea = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,

    orderTea : function () {
            console.log("tea is ready");
    }
}


// console.log(tea);                                         //[📍📍 Answer is :-  "{ name: 'ginger tea', price: 250, isAvailable: true }"  ] 

// console.log(Object.getOwnPropertyDescriptor(tea));            //[💎✅💎  Answer is :-  "undefined" (bcoz we haven't defined that of which property of "tea" we want description of) ] 

                        // 🔽🔽 (so now by adding that we want description of "name" property of the const tea)

// console.log(Object.getOwnPropertyDescriptor(tea, "name"));
                                                            /*📍📍 Answer is :-  
                                                            " {
                                                                value: 'ginger tea',
                                                                writable: true,
                                                                enumerable: true,
                                                                configurable: true
                                                                } "  
                                                        */


                            // 🔽🔽 (altering or changing the properties like "writability" etc. )


// Object.defineProperty(tea, 'name', {
//     writable:false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(tea, "name"));
                                                        /*📍📍 Answer is :-  
                                                        "{
                                                            value: 'ginger tea',
                                                            writable: false,
                                                            enumerable: false,
                                                            configurable: true
                                                            } "
                                                        */


// 💎💎TRying to use "FOR-OF" loop on the above OBJECT  👇👇
                                                            
// for (const [key, value] of tea) {
//     console.log(`${key} : ${value}`);      //[📍📍 Answer is :-  "TypeError: tea is not iterable"  ] 
// }

                 // 🔽🔽

// for (const [key, value] of Object.entries(tea)) {
// console.log(`${key} : ${value}`);     
// }                                      
                        /*📍📍 Answer is :-  
                            "name : ginger tea
                            price : 250
                            isAvailable : true
                            orderTea : function () {
                            console.log("tea is ready");
                            } "
                        */

                 // 🔽🔽 [Adding CHECKS] (as we only wanted KEY-VALUE pair not the the FUNCTION stored in "orderTea" )
              
// for (const [key, value] of Object.entries(tea)) {
// if(typeof value !== 'function')     // 💎✅💎 [Applying IF check, so that no other value value gets printed other than the "KEY-VALUE" pair]
// console.log(`${key} : ${value}`);     
// }                                      
                        /*📍💎📍 Answer is :-  
                                  "name : ginger tea
                                   price : 250    
                                   isAvailable : true "
                        */


                 // 🔽🔽 


// Object.defineProperty(tea, 'name', {
//     writable:true,
//     enumerable : false           // 💎✅💎 When we make value FALSE
// })


// for (const [key, value] of Object.entries(tea)) {     // [ 📍📍 Since "enumerable : true" so "name:ginger tea" is gonna get iterated or printed]
// if(typeof value !== 'function')
// console.log(`${key} : ${value}`);     
// }                                      
                        /*📍📍 Answer is :-  
                                "price : 250
                                 isAvailable : true "
                        */                               // 🍁💎🍁 When we make value FALSE :- "name" value doesn't get printed


                 // 🔽🔽 


// Object.defineProperty(tea, 'name', {
//     writable:true,
//     enumerable : true         // 💎✅💎 When we make value TRUE
// })


// for (const [key, value] of Object.entries(tea)) {     // [ 📍📍 Since "enumerable : true" so "name:ginger tea" is gonna get iterated or printed]
// if(typeof value !== 'function')
// console.log(`${key} : ${value}`);     
// }                                      
                        /*📍📍 Answer is :-  
                                "name : ginger tea    // 🍁💎🍁 When we make value TRUE :- "name" value got printed
                                 price : 250
                                 isAvailable : true "
                        */

                                

