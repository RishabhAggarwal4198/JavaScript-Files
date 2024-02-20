
// 💎✅💎 BASIC - SYNTAX  👇👇

class Userrzz {
    constructor (username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}




// 💎✅💎 Now suppose we are making any website like E-commerce or Shopping so we also have to make this "Userrzz" as ADMIN, TEACHER, STUDENT

class Teacher extends Userrzz {                    // 💎🍁✅🍁💎 So in in functions previously as we used to use ".prototype" keyword to add any new "PROTOTYPE-property" to the function, Similarly in CLASSES here we have "extends" keyword to add or kind of extend the "PROTOTYPE" properties of that particular class
    constructor (username, email, password) {
        super(username)                           //[@8:25:43] [💎🍁✅🍁💎Using "super(username)" here will directly contact to the name of the class written after "extedds" & will call it, which in this case is "extends User"  ] 
        this.email = email
        this.password = password
    }
    
    
    addCourse () {
        console.log(`A new course was added by ${this.username}`);
    }

    mailInfo(){
        console.log(`E-mail Id of the user is '${this.email}'`);
    }

    passwordInfo(){
        console.log(`Password of the user is '${this.password}'`);
    }

    drSturgis(){
        console.log(`Hello !!  Dr. Sturgis wants your wants your mail Id & i.e. '${this.email}' `);
    }
}


const chayii = new Teacher ("Rohan", "rohan@gmail.com", "123");

// chayii.addCourse()    //[📍📍 Answer is :-  "A new course was added by Rohan"  ]
// chayii.mailInfo()      //[📍📍 Answer is :-  "E-mail Id of the user is 'rohan@gmail.com'" ]
// chayii.passwordInfo()  //[📍📍 Answer is :-  "Password of the user is '123'" ]

// chayii.logMe();        //[📍📍 Answer is :-  "USERNAME is Rohan"  ]

// chayii.drSturgis()         //[📍📍 Answer is :-  "Hello !!  Dr. Sturgis wants your wants your mail Id & i.e. 'rohan@gmail.com' "  ]






const newChayii = new Userrzz("Rameshh")

// newChayii.logMe();  //[📍📍 Answer is :-  "USERNAME is Rameshh"  ]
// newChayii.addCourse();   //[📍📍 Answer is :-  Error is thrown  ]


// console.log(chayii === newChayii);    //[📍📍 Answer is :-  "false"  ]
// console.log(chayii === Teacher);     //[📍📍 Answer is :-  "false"  ]

// console.log(chayii instanceof Userrzz);   //[📍📍 Answer is :-  "true"  ]
// console.log(newChayii instanceof Userrzz);    //[📍📍 Answer is :-  "true"  ]








