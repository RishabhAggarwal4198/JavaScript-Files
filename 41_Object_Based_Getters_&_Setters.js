const User = {
    _email : 'hareeesh@gmail.com',
    _password : 'abc',

    get email () {
        return this._email.toUpperCase()
    },

    set email (value) {
        this._email = value
    }
}


const tea =  Object.create(User)             // 💎✅💎 it is called FACTORY-FUNCTION (& in it we gave it "User" that on the basis of "User" create an Object & refer it to "tea" )
console.log(tea.email);                       //[📍📍 Answer is :-  "HAREEESH@GMAIL.COM"  ] 


                                              // 💎✅💎 watch [@9:37:04]


