let  myName = "Rishabh      ";
let  iamLearning = "Javascript     ";

// console.log(myName.trim().length);   //[ 💎✅💎  Answer is :- "7" (as expected), but inserting "trim()" is the most backward & primitive way of doing that ]
// 💎💎 But i want a property which could give be the true length of the string & could eliminate all the extra space from "myName" & "iamLearning"    👇👇
// so for that proceed downwards 👇👇


                 // 🔽🔽 


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower:  () =>  {
        console.log(`Spidy power is ${this.spiderman}`);    // 💎✅💎 by inserting "this" the function getSpiderPower will get to know that we are talking about "spiderman" varaible in this context only
    } 
}



// 💎💎👇👇 Injecting a PROTOTYPE property directly to the higher authority i.e. OBJECT 👇👇
// 💎✅💎 Manupulating the complete "GLOBAL-OBJECT" 👇👇

Object.prototype.Rishabh = function() {
    console.log(`Rishabh is present in all objects`);
}


// heroPower.Rishabh()    //[ 📍📍 Answer is :- "Rishabh is present in all objects" ]
// myHeros.Rishabh();     //[ 📍📍 Answer is :- "Rishabh is present in all objects" ]

// 💎✅💎👆👆💎✅💎 So as we can see "Rishabh" became the "PROTOTYPE-PROPERTY" of the "GLOBAL-OBJECT"
// [watch @7:45:56 ]





// 💎✅💎  If we inject a PROTOTYPE property  to "GLOBAL-ARRAY" will it be accessible by "GOBAL-OBJECT"  👇👇

Array.prototype.HeyRishabh = function () {
    console.log(`Rishabh says hello`);
}

// myHeros.HeyRishabh();    //[📍📍 Answer is :-  "Rishabh says hello"  ]
// heroPower.HeyRishabh();  //[📍📍 Answer is "Error" (bcoz u injected value in ARRAY, which is lower in hierarchy than OBJECT) ]






// 💎✅💎  INHERITANCE 👇👇

const User = {
    name: "Ramesh",
    email: "ramesh@google.com"
}

const Teacher = {
    makeVideo: true
}


const TeachingSupport = {
    isAvailable: false ,
    Experience : "5 Years"
}


//📍💎📍 OLD - SYNTAX 👇

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport       //[📍📍 This is INHERITANCE ]
}


// console.log(TASupport.isAvailable);   //[📍📍Answer is :-  "false"  ]
// console.log(TASupport.Experience);    //[📍📍Answer is :-  "5 Years"  ]



Teacher.__proto__ = User

// console.log(`Teacher's name is '${Teacher.name}' & his E-mail id is '${Teacher.email}' `);   //[📍📍Answer is :- Teacher's name is 'Ramesh' & his E-mail id is 'ramesh@google.com'  ]  






//🍁✅📍✅📍✅🍁  MODERN - SYNTAX 👇👇  [@7:53:42] (modern Syntax of setting INHERITANCE from one element to another)

Object.setPrototypeOf(TeachingSupport, Teacher)    // [📍📍 "TeachingSupport" is gonna accces all the values of "Teacher"  ]



// 💎💎 Now SOLVING the vrry fisrt PROBLEM 👇👇

let anotherUserName = "Vignesh Ramasundaran            "


String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);        // 📍📍it's an OBSOLETE property, so not got discussed that's why commented
    console.log(`True length is: ${this.trim().length}`);
}  

let ringerrr =  "Hello BHARAT"

// ringerrr.trueLength();  
                        /* 
                            [📍✅📍 Answer is :-  "Hello BHARAT"           
                                                   "True length is: 12"  
                        */  


// anotherUserName.trueLength(); 
                              /* 
                              [📍✅📍 Answer is :-  "Vignesh Ramasundaran "           
                                                     "True length is: 20"
                             bcoz overhere "truLength():" was having only 
                            the refrence of "anotherUserName" only & whose
                            value is  equals to "Vignesh Ramasundaran            "  */



// "Rishabh".trueLength();  
                          /* Similarly :- 
                            [📍📍 Answer is :- "Rishabh"
                                                "True length is: 7"
                        */


// "MasalaDosa".trueLength(); 
                             /* Similarly :- 
                             [📍📍 Answer is :- "MasalaDosa"
                                                "True length is: 10"
                             */

"SheldonCooper".trueLength(); 
                             /* Similarly :- 
                             [📍📍 Answer is :- "SheldonCooper"
                                                "True length is: 13" 
                             */
