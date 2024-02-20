class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){            // [💎✅💎 static keyword is added before a function to so that no one could access it from outside (i.e. to stop it's access ) ]
        return `123`
    }
}


const Rishabhh = new User("Rishabhh")
// console.log(Rishabhh.createId())    //[📍📍 Answer is :-  "an Error" ( bcoz of "static" keyword)  ]


                                    // 🔽🔽

                                    
// 💎✅💎 👇👇Extending the PROTOTYPE properties of the CLASS "User"👇👇

class Teacher extends User {
    constructor (username, email) {
        super(username)
        this.email = email
    }
}



const iphone = new Teacher ("iphone", "iphone@gmail.com")
// console.log(iphone);                //[📍📍 Answer is :-  "Teacher { username: 'iphone', email: 'iphone@gmail.com' }"  ] 
// iphone.logMe()                       //[📍📍 Answer is :-  "Username: iphone"  ] 
console.log(iphone.createId());      //[💎✅💎  Answer is :-  "an Error" ( bcoz of "static" keyword added in the front of "createId()" ) ]

