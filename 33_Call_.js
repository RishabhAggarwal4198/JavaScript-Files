
// 💎✅💎  FIRST - FUNCTION  👇👇

function SetUsername (username) {
    // complex DB calls 
    this.username = username
}


// 💎✅💎  SECOND - FUNCTION  👇👇

function createUser (username, email, passoword){
    SetUsername.call(this, username)              // 💎✅💎 "SetUsername()" will only exectute the function but we also want to HOLD it's refrence that's why we have used "SetUsername.call "
    this.email = email;
    this.passoword= passoword
}

const info = new createUser ("Ravi", "ravi@gmail.com", "123")

console.log(info);