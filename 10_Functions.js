


//💎✅💎FUNCTION 👇👇 EXAMPLE-1  

function sayMyName () {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}

// sayMyName      //✅✅[must watch @4:38:48] This is function's REFRENCE (i.e. function is present at that place)
// sayMyName();   //✅✅ This is function's EXECUTION

// sayMyName();     //[📍📍 Answer is :-  "R I S H A B H"  ] 





//🍀🍀🍀🍀🍀🍀🍀🍀


function printInfo (name, age) {
	console.log(`${name}'s Age is ${age}`);
}

// printInfo('Ramesh', 22)       //📍📍 Answer is :-  Ramesh's Age is 22
// printInfo('Aastha', 28)       //📍📍 Answer is :- Aastha's Age is 28
// printInfo('Karan')           //📍📍 Answer is :-  Karan's Age is undefined  [✅ Bcoz we havn't passed the second Arguement]

		// 🔽🔽

function calcAvg (a, b, c) {
   let avg = (a+b+c)/2
   console.log(`The Average of ${a}, ${b}, ${c} is = ${avg}`);
}

// calcAvg(3,5,7)             //📍📍 Answer is :-  The Average of 3, 5, 7 is = 7.5
// calcAvg(5, 8, 9)           //📍📍 Answer is :-  The Average of 5, 8, 9 is = 11

		// 🔽🔽

function printTable (n) {
	for(let i =n; i <= n*10; i += n ) {
		console.log(i);
	}
}

// printTable(2)                //📍📍 Answer is :- 
				// 2
				// 4
				// 6
				// 8
				// 10
				// 12
				// 14
				// 16
				// 18
				// 20


		// 🔽🔽

function sum (a, b) {
      return a + b;
}

let s1 = sum(sum(3,5), 7)
// console.log(ss);       //📍📍 Answer is :-  15 

let s2 = sum(sum(6, 5), 9)
// console.log(s2);          //📍📍 Answer is :-  20


	     // 🔽🔽


let str = [' Hello', ' Hi', ' Bye', ' Bye' , ' !']

function concat (arr){
	let result = "";

	for(let i=0; i < arr.length; i++ ){
		result += arr[i]
	}

	console.log(result);
	return result
}

// concat(str)           //📍📍 Answer is :-   Hello Hi Bye Bye !


//🍀🍀🍀🍀🍀🍀🍀🍀







//💎✅💎FUNCTION 👇👇 EXAMPLE-2a

function addTwoNumbers (number1, number2) {
     
   console.log(number1+number2);

}; 

// const result_A = addTwoNumbers(3, 4); 
// console.log(`Result is : ${result_A}`);    // [📍📍 Answer is :- "Result is : undefined" ]
                                           // 🍁✅RETURN✅🍁 above statement is "undefined" bcoz we haven't described any "return" value in the function "addTwoNumbers"


                         // 🔽🔽


function addTwoNumbers_0 (number1, number2) {
     
    // let result = number1 + number2
    // return result
                // 🔽🔽 (OR)
    return number1 + number2;
}; 

const result_B = addTwoNumbers_0(3, 4);
// console.log(`The result_B is : ${result_B}`);   // 📍 Answer is  "The result_B is : 7"
// console.log(result_B);                          // 📍 Answer is  "7"





//💎✅💎FUNCTION 👇👇 EXAMPLE-2b  [watch 'RETURN' @4:48:59]

function addTwoNumbers0 (number1, number2) {
     return number1**number2
     console.log("Rishabh Aggarwal"); // ✅ After return nothing is going to get printed
}; 

const result0 = addTwoNumbers0 (3, 4);
// console.log(result0);   // 📍 Answer is  "81"







//💎✅💎FUNCTION 👇👇 EXAMPLE-3

function loginUserMessage (username) {
    return `${username} just logged in`
}

//   loginUserMessage("Rishabh");               // 📍 Nothing will get printed bcoz we havn't said instructed the function to PRINT something
//   console.log( loginUserMessage("Rishabh"));   // 📍 Answer will be "Rishabh just logged in"
//   console.log( loginUserMessage(""));       // ✅[ONLY EMPTY STRING PASSED]✅ Answer will be "just logged in" [bcoz passed string argument is empty]


//   console.log( loginUserMessage());         // 🍁✅[ABSOLUTELY NO VALUE PASSED]✅🍁 Answer will be "undefined just logged in" [bcoz nothing is passed as arguement]

                             // 🔽🔽 (Answer to above is given below 👇👇) 

// 💎✅💎 For preventing the above "undefined just logged in" case we use IF - ELSE statement 👇

  function loginUserMessage2 (username2) {   
        if (!username2) {                       // ✅✅ here  "!username2" [not -username2] is exactly  same as using "username2 === undefined" 
            console.log("Please enter a username");
            return                              // ✅✅using "return" as a "full-stop" here [i.e. no value after it gets executed]
        } 
        return `${username2} just logged in`    // ✅✅Nothing will get printed after the above return
    }

    // console.log(loginUserMessage2());      // 📍 Answer is  "Please enter a username"
  

                             // 🔽🔽 



  function loginUserMessage3 (username3 = "ANYTHING") {       // ✅✅ [ Or to avoid "!username2" condition we could do one thing in place of "username2" we could use "username2 = 'ANYTHING'" (as adefault value to get printed)]
        if (!username3) {                                     // ✅✅ here  "!username3" [not -username3] is exactly  same as using "username3 === undefined" 
            console.log("Please enter a username");
            return                                            // ✅✅using "return" as a "full-stop" here [i.e. no value after it gets executed]
        } 
        return `${username3} just logged in`                  // ✅✅Now this will get printed [bcoz of the "username3" will never get a "No" value]
    }

    // console.log(loginUserMessage3());      // 📍 Answer is  "ANYTHING just logged in"












    //💎✅💎 [REST-OPERATOR] FUNCTION  EXAMPLE-4  👇👇 [mostly used in E-COMMERCE (shopping cart) apps]
    // (🍁🍁🍁🍁 "REST-OPERATORS"🍁🍁🍁🍁 basically allows us to add MULTIPLE values in a FUNCTION at the same time)


    function calculateCarPrice (...num1) {     //✅✅ Three dots (...) for FLEXIBILITY that more than one arguments can be passed into the fucntion
        return num1                            // [although REST-OPERATOR is similar to SPREAD-OPERATOR in application by three dots (...) but it's totally different from it] 
    }

    // console.log(calculateCarPrice(200, 400, 500, 2000));   // 📍Answer is "[ 200, 400, 500, 2000 ]"   { we received an ARRAY }
    // console.log(calculateCarPrice(200, 400, 500, 2000, 5000, 10000));   // 📍Answer is "[ 200, 400, 500, 2000, 5000, 10000 ]"   { we received an ARRAY }
   




    //🍁💎✅💎🍁INTERVIEW Questions Case 📍👇👇📍

    function calculateCarPrice2 (val1, val2, ...num1) {  // Three dots (...) for FLEXIBILITY that more than one arguments can be passed into the fucntion
        return num1
    }

    // console.log(calculateCarPrice2(200, 400, 500, 2000));  // 📍Answer is "[ 500, 2000 ]"
                                                           //✅✅ above answer is Bcoz "200" got consumed by "val1" &  "400" got consumed by "val2", So, hence "[ 500, 2000 ]"









    // 💎✅💎 How to pass an OBJECT inside a FUNCTION 👇👇

    function handleObject(anyObject) {
        console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    } 

    const user = {
        username: "Rishabh",
        price: 199
    }

    // handleObject(user);  // 📍Answer is "Username is Rishabh and price is 199"
 
                 // 🔽🔽

    //✅✅ If we turned PRICE to PRICES 👇👇

    function handleObject0(anyObject) {
        console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    }

    const user2 = {
        username: "Rishabh",
        prices: 199
    }

    // handleObject0(user2)  // 📍Answer is "Username is Rishabh and price is undefined [ bcoz "price" got changed to "prices"]









    //💎✅💎directly passing OBJECT inside the FUNCTION 👇👇 [We inserted whole "user" block into it]

    // handleObject({ 
    //         username: "Ramann",
    //         price: 399
    // })                           // 📍Answer is "Username is Ramann and price is 399"





    //💎✅💎We could also directly pass ARRAY into the OBJECT 👇👇 

    const myNewArray = [ 200, 400, 100, 600]

    function returnSecondValue (getArray) {
        return getArray [1];
    }

//    console.log( returnSecondValue(myNewArray));   //📍Answer is "400"
//                         //🔽🔽 OR
//    console.log( returnSecondValue([ 200, 400, 100, 600]));  //📍Answer is "400"        
   











//🍀🍀🍀🍀🍀🍀🍀🍀

// 💎✅💎 HIGH ORDER FUNCTION 👇👇

function multipleGreet(func, count){
	for(let i = 1; i <= count; i++){
	   func();	
	}
}

let greet = function () {
	console.log("Hello");
}

// multipleGreet(greet, 5)         //📍📍 Answer is :-  
				// Hello
				// Hello 
				// Hello
				// Hello
				// Hello


		 // 🔽🔽

// multipleGreet(function(){console.log('Namaste')}, 11)    //📍📍 Answer is :-  
								// Namaste
								// Namaste
								// Namaste
								// Namaste
								// Namaste
								// Namaste
								// Namaste
								// Namaste
								// Namaste
								// Namaste
								// Namaste


// FUNCTION which detects the EVEN & ODD Number 👇

let even = function (z) {
     console.log((z%2 == 0));
}

// even(33)         //📍📍 Answer is :-  false
// even(28)         //📍📍 Answer is :-  true


let odd = function (n){
	console.log(!(n%2 == 0));
}

// odd(18)         //📍📍 Answer is :-  false
// odd(33)         //📍📍 Answer is :-  true


		// 🔽🔽 ( in place of the above code)

function oddEvenFactory (reqq){

    if(reqq%2 == 0  ){
        console.log(`${reqq} is an EVEN number`);
    } else {
        console.log(`${reqq} is an ODD number`); 
    }
}

// oddEvenFactory(5)           //📍📍 Answer is :-  5 is an ODD number
// oddEvenFactory(90)          //📍📍 Answer is :-  90 is an EVEN number

let yy = 0;
// oddEvenFactory(yy)            //📍📍 Answer is :-  0 is an EVEN number




//🍀🍀🍀🍀🍀🍀🍀🍀






function hhh (a, b, c) {
    console.log(`Hello !! ${a} is a very ${b} person. He lives in ${c} `);
}

hhh('Roshesh', 'good' , 'California')