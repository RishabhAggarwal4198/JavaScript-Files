
// 💎✅💎  BASIC - SYNTAX  👇👇 

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword () {
        return `${this.password}abe`
    }

    changeUserName () {
        return `${this.username.toUpperCase()}`
    }
}


// const idenity = new User ("Ramanuj", "ramanuj@gmail.com", "4567")

// console.log(idenity.encryptPassword());  // [📍📍 Answer is :-  "4567abe"  ]

// console.log(idenity.changeUserName());    // [📍📍 Answer is :-  "RAMANUJ"  ]





// 💎✅💎  behind the SCENE - FUNCTIONING of it 👇👇

function UserGuyzz (username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.taskAlloted = function () {
        console.log(`This function is for trial`);
    }
}

UserGuyzz.prototype.encryptPasswordddd = function () {       // 💎✅💎 injecting a "PROTOTYPE-PROPERTY" IN "UserGuyzz" function 
    return `${this.password}abc`
}

UserGuyzz.prototype.changeUserName = function () {       // 💎✅💎 injecting a "PROTOTYPE-PROPERTY" IN "UserGuyzz" function
    return `${this.username.toUpperCase()}`
}

const tea = new UserGuyzz ("Shivam", "shivam@gmail.com", "123");

// console.log(tea.encryptPasswordddd());     // [📍📍 Answer is :-  "123abc"  ]
// console.log(tea.changeUserName());        // [📍📍 Answer is :-  "SHIVAM"  ]
// console.log(tea.email);                      // [📍📍 Answer is :-  "shivam@gmail.com"  ]
// console.log(tea.taskAlloted());              // [📍📍 Answer is :-  "This function is for trial"  ]
