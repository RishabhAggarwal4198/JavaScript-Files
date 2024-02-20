function multiplyBy5 (num){
    return num*5
}

multiplyBy5.power = 2

// console.log(multiplyBy5(5));          // [📍📍 Answer is :-  "25" ]
// console.log(multiplyBy5.power);       // [📍📍 Answer is :-  "2" ]
// console.log(multiplyBy5.prototype);   // [📍📍 Answer is :-  "{}" (an empty parenthesis) ]




function createUser(username, score){ 
    this.username = username
    this.score = score
}


// 💎✅💎  Injecting our own PROTOTYPE-METHOD inside the Function above 👇👇

createUser.prototype.increment = function(){
   console.log( this.score+=2);            // 💎✅💎 easy way of remembring "this" is hindi word "jiss" (i.e. jissney bhi bulaya uske paas jaao) 
}


createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);
} 


// const chai = createUser("chai" , 25)
// console.log(chai);                   // [📍❌📍 Answer is :- "undefined" (bcoz there is no "new" keyword inserted) ]
// const tea = createUser("tea", 250)
// console.log(tea);                   //[📍❌📍 Answer is :- "undefined" ]


                        // 🔽🔽(after inserting the "new" keyword)



const chai = new createUser("chai" , 25)
// chai.printMe();        //[📍📍 Answer is :- "Price is 25" ]
// chai.increment();      //[📍📍 Answer is :- "27" ]


               
const tea =  new createUser("tea", 250)
// tea.printMe();           //[📍📍 Answer is :- "Price is 250" ]
// tea.increment();         //[📍📍 Answer is :- "252" ]
 



/*
 
  MUST watch @7:35:14
 
 💎✅💎✅💎 Here's what happens behind the scenes when the new keyword is used:- 

✅ A new object is created: The new keyword initiates the creation of a new JavaScript object.

✅ A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

✅ The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

✅ The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/