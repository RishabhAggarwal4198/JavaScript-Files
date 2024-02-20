
// class Userrzzz {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password
//     }
// }


// const Ramesh = new Userrzzz  ("ramesh@gmail.com", "asdf_vbnm")
// console.log(Ramesh.password);                               //  [📍📍 Answer is :- "asdf_vbnm" ] 


                                    // 🔽🔽

           
                                    
// 💎✅💎GETTERS & SETTERS (from pereventing someone accessing some value of our code like "password" in this case) 👇👇
                                    
// class User {
//     constructor (email, password) {            // 💎✅💎  bcoz "set" method below "constructor" is just passing the value to  "set"  but not SETTING any value
//         this.email = email;
//         this.password = password;
//     }

//     get password () {
//         return this._paSSword.toUpperCase()
//     }

//     set password(value) {
//         this._paSSword = value.toUpperCase()   // 💎✅💎 Now "set" is setting the value instead of "constructor" that's why we declared a new variable called "._password"
//     }                                          // 💎✅💎 the name of the varaible inside set need not to be the "._password" only..... it could have been anything
// }

// const Ramesh = new User ("ramesh@gmail.com", "asdf_vbnm")
// console.log(Ramesh.password);                              //  [📍📍 Answer is :- "ASDF_VBNM" ] 



                                // 🔽🔽



class User {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }

    get email () {
        return this._email.toUpperCase()   // 💎✅💎 Person who will access it will receive value in "CAPITAL-LETTERS"
    }

    set email(value){
        this._email = value              // 💎✅💎 Original value will be saved as it is
    }
    

    get password () {
        return `${this._paSSword}Mogumbaaaa`
    }

    set password(value) {
        this._paSSword = value
    }
}


const Ramesh = new User ("ramesh@gmail.com", "asdf_vbnm")
console.log(Ramesh.password);                                 //  [📍📍 Answer is :- "asdf_vbnmMogumbaaaa" ] 
console.log(Ramesh.email);                                 //  [📍📍 Answer is :- "RAMESH@GMAIL.COM" ] 





