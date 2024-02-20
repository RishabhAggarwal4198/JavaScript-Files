
// 💎✅💎LOOPs💎✅💎 (also called ITERATIONS)


// 💎✅💎 FOR - LOOP 👇👇

// basic- Syntax 👇

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
// }


// 🍀🍀🍀🍀🍀🍀🍀🍀

for (let i = 0; i <= 5; i++){
	// console.log(`The value is : ${i}`);    //📍📍 Answer is :-  " "  
}						 // The value is : 0
						 // The value is : 1
						 // The value is : 2
						 // The value is : 3
						 // The value is : 4
						 // The value is : 5

		 // 🔽🔽

for ( let i = 5; i >= 0; i-- ){
	// console.log(`The Value is: ${i}`);      //📍📍 Answer is :-  " "  
}						 // The value is : 5
						 // The value is : 4
						 // The value is : 3
						 // The value is : 2
						 // The value is : 1
						 // The value is : 0

		 // 🔽🔽

for ( let i = 10 ; i >= 1; i = i-3 ){
	// console.log(`The Value is: ${i}`);      //📍📍 Answer is :-  " "  
}						 // The value is : 10
						 // The value is : 7
						 // The value is : 4
						 // The value is : 1
						

		 // 🔽🔽

for ( let i = 15 ; i >= 1; i = i-2 ){
	// console.log(`The Value is: ${i}`);      //📍📍 Answer is :-  " "  
}						 // The Value is: 15
						 // The Value is: 13
						 // The Value is: 9
						 // The Value is: 7
						 // The Value is: 5
						 // The Value is: 3
						 // The Value is: 1
						

		 // 🔽🔽

for ( let i = 2 ; i <= 10; i +=  2 ){
	// console.log(`The Value is: ${i}`);    //📍📍 Answer is :-  " "  
}						 // The Value is: 2
						 // The Value is: 4
						 // The Value is: 6
						 // The Value is: 8
						 // The Value is: 10
						

		 // 🔽🔽 

// let n = prompt("write your Number")
// n = parseInt(n)

// for (let i=n; i<=n*10; i=i+n){
	// console.log(i);
// }





//💎💎NESTED-LOOPS👇

for (let i=1; i<=3; i++){
	// console.log(`Outer Loop ${i}`);
	for(let j=1; j<=3; j++){
		// console.log(j);
	}
} 
 


// 🍀🍀🍀🍀🍀🍀🍀🍀




		
						 

//💎💎EXAMPLE - 1  (for - Loop) 👇    [✅how it gets executed watch @7:19:44]

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);                         // 📍 Answer is  "0 1 2 3 4 5 6 7 8 9 10" 
// }

          // 🔽🔽

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);                        // 📍 Answer is  "0 1 2 3 4 5 6 7 8 9 10"
// }

// console.log(element);                            // 📍 Answer is  "ReferenceError: element is not defined"  
                                                    // ✅✅ bcoz variable element is defined uptill above scope only]







//💎💎 EXAMPLE - 2 (for - Loop)👇 [implementing IF-ELSE inside FOR-LOOP]

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best number");
    }

    // console.log(element);                      // 📍 Answer is  "0 1 2 3 4 5 is the best number 5 6 7 8 9 10"
}







// 💎💎 EXAMPLE - 3 👇  [implementing FOR-LOOP inside FOR-LOOP]   [watch @7:27:58]

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);                                        // 📍Run the loop for answer
    for (let j = 0; j <= 10; j++){
        // console.log(`Inner loop value is ${j} and Outer loop value is ${i}`);    // 📍Run the loop for answer
    }                                                
}       

                    // 🔽🔽 (Mathematical Calculation)
                

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);         // 📍Run the loop for answer
    for (let j = 0; j <= 10; j++){
        //  console.log(i + '*' + 'j' + '=' + i*j);
                    // 🔽OR (much easier syntax)
        //  console.log(`${i} * ${j} = ${i*j}`);        // 📍Run the loop for answer
    }                                               
}

 


 

//💎💎 EXAMPLE - 4 👇 [implementing FOR-LOOP on an ARRAY]   

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);          // 📍Answer is "3" 

for (let index = 0; index < myArray.length; index++) {    //✅✅[we have used "index" lesser then "myArray.length" bcoz a LOOP always iterates on the INDEX-VALUE ]
    const element = myArray[index];                       //✅✅ [@7:32:14]
    // console.log(element);  
}








//💎✅💎 BREAK & CONTINUE 👇👇


//📍🍁📍 Break 👇 

for (let i = 1; i <= 20; i++)  {
    if (i == 5){ 
        // console.log(`Detected 5, not running further`);
        break;                             //✅  It will break the LOOP instantly over there only [ will not continue the loop after it]
    }
    // console.log(`Value of i is ${i}`);     //✅ Answer is "Value of i is 1
}                                           //              Value of i is 2
                                            //              Value of i is 3
                                            //              Value of i is 4
                                            //              Detected 5, not running further" 

    
//📍🍁📍 Continue 👇 

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        // console.log(`Detected 5, running further`);
        continue;                                  // ✅ it will skip the condition for once  
    }
    // console.log(`Value of i is ${i}`);          // ✅ it will SKIP  that particular line [as mentioned in the condition] & will continue after that
}










//💎✅💎 WHILE - LOOP 👇👇  [watch @7:40:02] [it's an extended version of FOR-LOOP ]


let  index = 0

while(index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2;                             // 📍 run the LOOP to see the result
}


// using WHILE-LOOP on an ARRAY 👇

let myArray1 = ['flash', "batman", "superman"]

let arr = 0

while (arr < myArray.length) {
        // console.log(`Value is ${myArray[arr]}`);
        arr = arr + 1                              // 📍 run the LOOP to see the result
}







// 🍀🍀🍀🍀🍀🍀🍀🍀

// const favMovie = 'avatar';

// let guess = prompt("guess my favourite movie")


// while((guess != favMovie) && (guess != "quit")){
// 	guess = prompt('wrong guess. please try again');
// }

// if(guess == favMovie){
// 	console.log("congrats!");
// }

	 // 🔽🔽

// while(guess != favMovie){
// 	if(guess != "quit"){
// 		console.log("you quit");
// 		break;
// 	}
// 	guess = prompt('wrong guess. please try again');
// }

// if(guess == favMovie){
// 	console.log("congrats!");
// }



//💎✅💎 BREAK

// let i = 1;

// while( i <= 5){
//     if(i == 3){
// 	break;
//     }	
//     console.log(i);
//     i++;
// }

// console.log('We used break at 3');



//💎✅💎 LOOPs in ARRAYs

let fruits = [`Mango`, `Apple`, `Banana`, `Litchi`, `Orange`]

for(let i = 0; i < fruits.length; i++){
//    console.log(fruits[i]);
}

// In Reverse
for(let i = fruits.length-1; i >= 0; i-- ){
	// console.log(fruits[i]);
}


		// 🔽🔽


//💎 Nested LOOPs in Nested ARRAYs

let heros = [['ironman', 'spiderman', 'thor'], ['superman', 'wonder woman','flash']];

for (let i = 0; i <heros.length; i++){
	for (let j = 0; j <heros[i].length; j++ ){
		// console.log(heros[i][j]);
	}
}

		// 🔽🔽

let student = [ [`Keshav`, 95], [`Raman`, 80], [`Aastha`, 55] ]

for( let i = 0; i < student.length; i++){
	// console.log(student[i]);
	for(let j = 0; j < student[i].length; j++  ){
	// console.log(student[i][j]);                  //📍📍 Answer is :-  
	}						// Keshav
}							// 95
							// [ 'Raman', 80 ]
							// Raman
							// 80
							// [ 'Aastha', 55 ]
							// Aastha
							// 55"  











//💎✅💎 FOR of LOOP  [When we want to access every 'Single' element of an ARRAY & STRING ]

let fruitz = [`Mango`, `Apple`, `Banana`, `Litchi`, `Orange`]

for ( froot of fruitz) {
	// console.log(froot);  //📍📍 Answer is :- 
}                               // Mango
				// Apple
				// Banana
				// Litchi
				// Orange



for(char of "apnacollege"){
	// console.log(char);   //📍📍 Answer is :-    
}       	                // a
				// p
				// n
				// a
				// c
				// o
				// l
				// l
				// e
				// g
				// e


let vegetables = [ ['Potato', 'Onion', 'Garlic','Yam'], ['Beans', 'Spinach', 'Peas', 'Fenugreek']]

for( listzz of vegetables){
    for(vall of listzz){
	// console.log(vall); 
    }
}



// 🍀🍀🍀🍀🍀🍀🍀🍀













//💎✅💎 DO - WHILE  LOOP 👇👇[it basically checks the CONDITION at the end]

let score1 = 1;
do{
//     console.log(`Score is ${score1}`);          
    score1++
} while (score1 <= 10)                      // 📍 run the LOOP to see the result


    // 🔽🔽🔽( DO - WHILE  LOOP special case  [in this LOOP "print" command works first "condition" runs after that])


let score2 = 11;
do{
    // console.log(`Score is ${score2}`);   // 📍 Answer is "Score is 11" [bcoz in this case "console.log" got printed first but "condition" got checked later on]
    score2++
} while (score2 <= 10)  




