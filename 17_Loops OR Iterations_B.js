

//✅ its very common to put or store STRINGS in ARRAYS like [" ", " ", " "]
//✅  Similarly it is also common to put or store OBJECTS in ARRAYS [{ }, { }, { }]




// 💎✅💎 FOR-OF LOOP  👇👇

const arr = [1, 2, 3, 4, 5 ]

for (const num of arr) {
    // console.log(num);                   //📍 Answer is "1 2 3 4 5"
}

        // 🔽🔽 [Applying FOR-OF LOOP on a STRING ]

const greetings = "Hello World!"

for (const greet of greetings ) {
    // console.log(`Each char is ${greet}`);   //📍 Print the statement to see the Answer
}












// 💎✅💎 MAPS 👇👇 [ MAPs is an object which saves the unique KEY-VALUE pair ]   
                      // ✅ By unique we means that the values are no "re-Writable" ]
                      // [✅watch @7:56:49]

// 💎 Example-1👇

const map = new Map()
map.set('IN' , "India")
map.set('USA', "United States of America")
map.set( 'Fr', "france")

// console.log(map);    //📍Answer is :-  
                        // Map(3) {
                        //     'IN' => 'India',
                        //     'USA' => 'United States of America',
                        //     'Fr' => 'france'
                        // }


        // 🔽🔽 (trying to re-write the value of 'IN')


const map0 = new Map()
map0.set('IN' , "India")
map0.set('USA', "United States of America")
map0.set( 'Fr', "france")
map0.set('IN', "Bharat" )      // ✅ [inserting new value of 'IN]

// console.log(map0);          //📍Answer is :-  
                            // Map(3) {
                            //     'IN' => 'Bharat',
                            //     'USA' => 'United States of America',
                            //     'Fr' => 'france'
                            // } 
                            //  [✅No 're-writing' happened (bcoz it saves UNIQUE-VALUE only)]





// 💎💎 Applying "FOR-OF" Loop on MAP 👇

for(const key of map) {
    // console.log(key);   // 📍 Answer is :- 
}                          // [ 'IN', 'India' ]
                           // [ 'USA', 'United States of America' ]
                           // [ 'Fr', 'france' ]
                           
                           // ❌ We got an ARRAY, 
                           // But we wanted to have separates values, So👇
           
           // 🔽🔽
            

for(const [key, val] of map) {
    // console.log(key, ':-', val);    // 📍 Answer is :- 
}                                      // IN :- India
                                       // USA :- United States of America
                                       // Fr :- france





// 💎💎 Example-2 👇 [tryig to apply MAP on OBJECTs]

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for(const [key, value] of myObject) {
//     console.log(key, ':-', value);        // Answer is "Error"
// }                                        // ✅This SYNTAX-STRUCTURE not working over here
                                            // ✅ So basically we can't iterate an OBJECT through MAP using this FOR-OF loop syntax
// ❌--❌--❌--❌--❌--❌--❌--❌--❌









 


//💎✅💎 FOR-IN loop for printing an OBJECT  👇

const myObject1 = {
        js: 'javascript',
        cpp: 'C++',
        rb: 'ruby',
        swift: 'swift by apple'
}

for (const keee in myObject1) {
    // console.log(`${keee} shortcut is for ${myObject1[keee]}`);   // 📍 Answer is :-
 }                                                              //   js shortcut is for javascript
                                                                //   cpp shortcut is for C++
                                                                //   rb shortcut is for ruby
                                                                //  swift shortcut is for swift by apple






                                                                
 // 🍁🍁🍁🍁🍁 Very Very Important statement @8:07:47 🍁🍁🍁🍁🍁                                                             
 // ARRAYS are also a kind of object but are having default KEYS in numbers starting from 0,1,2,3,4.....
 // while in an OBJECT we could put the KEY of our choice (but still their INDEX value is same based on 0,1,2,3,4.... )
 // 🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁






//💎✅💎 FOR-IN loop for printing an ARRAY 👇   [watch @8:07:14]

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key0 in programming) {
    // console.log(key0);                          // [📍📍 Answer is :-  "0 1 2 3 4"  ] 
                                                   //✅ Gave us back the KEYS i.e. in case of an ARRAY, the INDEX-NUMBER is the key (i.e. 0: "js", 1: "rb", 2:"py", 3:"java", 4:"cpp" )
                                   
    // console.log(programming[key0]);                // [📍📍 Answer is :-  "js rb  py java cpp"  ]
                                                   //✅ Gave us back the KEYS i.e. in case of an ARRAY, the INDEX-NUMBER is the key (i.e. 0: "js", 1: "rb", 2:"py", 3:"java", 4:"cpp" )

    // console.log(`${key0} shortcut is for ${programming[key0]}`);    // 📍📍 Answer is :- 
 }                                                                    // 0 shortcut is for js
                                                                      // 1 shortcut is for rb
                                                                      // 2 shortcut is for py
                                                                      // 3 shortcut is for java
                                                                      // 4 shortcut is for cpp







//💎✅💎printing MAP using FOR-IN loop👇

const map1 = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "france")

for (const key1 in map1) {
//    console.log(key1);      // ❌❌❌❌Nothing will get printed  [bcoz this map is not Iterable], 
}                             //so FOR-IN loop can't be applied to MAP
                                   













// 💎✅💎 FOR-EACH LOOP 👇👇 [watch @8:11:28 & @8:14:35]  
                             // [✅ FOR-EACH loop is by default injected into ARRAYs prototype properties]


// 💎 basic Syntax 👇

// array.forEach( function (el) {
//     console.log(al);
// });
                



//💎💎Example - 1 👇👇

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (valll){
    // console.log(valll);                      // 📍📍 Answer is :-                                                                    
})                                              // js
                                                // ruby
                                                // java
                                                // python
                                                // cpp



             // OR (🔽🔽 by using arrow function)


coding.forEach((valll) => {
    // console.log(valll);                      // 📍📍 Answer is :-
})                                              // js
                                                // ruby
                                                // java
                                                // python
                                                // cpp


            // OR (🔽🔽 passing a FUNCTION as an arguement inside the FOR-EACH loop of an ARRAY)


function printMe(valll) {
    console.log(valll);
}
 
// coding.forEach(printMe)                      // 📍📍 Answer is :-
                                                // js
                                                // ruby
                                                // java
                                                // python
                                                // cpp


                // 🔽🔽 (✅FOR-EACH has access to more than one parameters)



coding.forEach((itemmm, indexxxx, arrrr) => {
    // console.log(itemmm, indexxxx, arrrr);       // 📍📍 Answer is :-
})                                                 // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                                   // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                                   // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                                   // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
                                                   // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]











//✅💎✅💎✅ accessing OBJECT values inside an ARRAY (very common scenario & 📍IMPORTANT📍)   [watch @8:21:14]

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]
  

// 💎💎 Applying FOR-EACH loop 👇👇

myCoding.forEach( (item) => {
    // console.log(item.languageName);      // 📍 Answer is "javascript  Java  Python"
})






//💎💎 To check whether FOR-EACH LOOP returns any value or not ?  👇👇

const coding2 = ["apple", "oranges", "bananas", "pineapples"]

const values = coding2.forEach( (item) => {
    // console.log(item);
})
// console.log(values);     // 📍📍 Answer is :-     
                            // apple
                            // oranges
                            // bananas
                            // pineapples
                            // undefined   //✅  "undefined"  
                                           //✅ So may be we have to manually "return" value from it ??

         // 🔽🔽

const coding3 = ["apple", "oranges", "bananas", "pineapples"]

const values3 = coding3.forEach( (item) => {
    console.log(item);
    return item
})
// console.log(values3);       // 📍📍 Answer is :-     
                            // apple
                            // oranges
                            // bananas
                            // pineapples
                            // undefined   //✅ Still "undefined" that  means that FOR-EACH LOOP don't returns any value by itself
                                        












//  💎✅💎 FILTER - OPERATION 👇👇 [✅ it RETURNS the value (unlike FOR-EACH LOOP)]

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (ankk) =>  ankk > 4 )    //✅ we want all "ankk" values which are greater than 4 (AS WE HAVE TO PROVIDe condition IN "FILTER-OPERATION") [@8:29:21]
// console.log(newNums);                      //📍 Answer is "[ 5, 6, 7, 8, 9, 10 ]"

                        //OR🔽🔽 

const newNums0 = myNums.filter( (ankk) =>  {
    return ankk > 4                                  //✅ We have to use "return" as we have used "{}" (i.e. started a scope)
})                                                   //🍁🍁✅🍁🍁 NOTE:-  If we defines the FILTER-condition in an SCOPE "{}" then we have to use "return" keyword, if we define the FILTER-condition in a single line, then we NO-NEED to use any "return" keyword (it will itself return it) 
// console.log(newNums);                      //📍 Answer is "[ 5, 6, 7, 8, 9, 10 ]"


                        //OR🔽🔽 [🍁a little lengthy Way (by using FOR-EACH loop)]


//💎💎 by using FOR-EACH (in above condition in place of FILTER operation) [watch @8:33:08]

const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 = [] 

myNums2.forEach ((num) => {
    if (num > 4 ) {
        newNums1.push(num)    
    }
})
// console.log(newNums1);            //📍 Answer is "[ 5, 6, 7, 8, 9, 10 ]"






//💎✅💎 FILTER-OPERATION Examples 👇👇 (for better understanding)  [watch @8:34:45]

const books = [
    {title: 'Book One', genre: 'Fiction', publish : 1981, 
     edition : 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish : 1992, 
     edition : 2004},
    {title: 'Book Three', genre: 'History', publish : 1999, 
     edition : 2004},
    {title: 'Book Four', genre: 'Non-Fiction', publish : 1989, 
     edition : 2004},
    {title: 'Book Five', genre: 'Science', publish : 2009, 
     edition : 2004},
    {title: 'Book Six', genre: 'Fiction', publish : 1987, 
     edition : 2004},
    {title: 'Book Seven', genre: 'History', publish : 2007, 
     edition : 2004},
    {title: 'Book Eight', genre: 'Science', publish : 2011, 
     edition : 2004},
    {title: 'Book Nine', genre: 'Non-Fiction', publish : 1981, 
     edition : 2004},
];



const userBooks1 = books.filter( (bukk) => bukk.genre === 'History')
// console.log(userBooks1);                             // 📍 Answer is :
                                                        // [
                                                        //     {
                                                        //       title: 'Book Three',
                                                        //       genre: 'History',
                                                        //       publish: 1999,
                                                        //       edition: 2004
                                                        //     },
                                                        //     {
                                                        //       title: 'Book Seven',
                                                        //       genre: 'History',
                                                        //       publish: 2007,
                                                        //       edition: 2004
                                                        //     }
                                                        //   ]


                        // 🔽🔽 


const userBooks2 = books.filter( (bukk) => { return bukk.publish >= 1995 })    // ✅ Have to use 'return' keyword bcoze we have opened a SCOPE { }  over here   
// console.log(userBooks2);                                // 📍 Answer is :
                                                        // [
                                                        //     {
                                                        //       title: 'Book Three',
                                                        //       genre: 'History',
                                                        //       publish: 1999,
                                                        //       edition: 2004
                                                        //     },
                                                        //     {
                                                        //       title: 'Book Five',
                                                        //       genre: 'Science',
                                                        //       publish: 2009,
                                                        //       edition: 2004
                                                        //     },
                                                        //     {
                                                        //       title: 'Book Seven',
                                                        //       genre: 'History',
                                                        //       publish: 2007,
                                                        //       edition: 2004
                                                        //     },
                                                        //     {
                                                        //       title: 'Book Eight',
                                                        //       genre: 'Science',
                                                        //       publish: 2011,
                                                        //       edition: 2004
                                                        //     }
                                                        //   ]
  

                        // 🔽🔽 
 

const userBooks3 = books.filter ( (bk) => {
    return bk.publish >= 2000  ||  bk.genre === "History"
})
// console.log(userBooks3);                                 // 📍 Answer is :- 
                                                            // "[
                                                            //     {
                                                            //       title: 'Book Seven',
                                                            //       genre: 'History',
                                                            //       publish: 2007,
                                                            //       edition: 2004
                                                            //     }
                                                            //   ]"
  

                        // 🔽🔽 (✅changing '&&' to '||' )
 

const userBooks4 = books.filter ( (bk) => {
    return bk.publish >= 2000  ||  bk.genre === "History"
})
// console.log(userBooks4);                                // 📍 Answer is :- 
                                                        // [
                                                        //     {
                                                        //       title: 'Book Three',
                                                        //       genre: 'History',
                                                        //       publish: 1999,
                                                        //       edition: 2004
                                                        //     },
                                                        //     {
                                                        //       title: 'Book Five',
                                                        //       genre: 'Science',
                                                        //       publish: 2009,
                                                        //       edition: 2004
                                                        //     },
                                                        //     {
                                                        //       title: 'Book Seven',
                                                        //       genre: 'History',
                                                        //       publish: 2007,
                                                        //       edition: 2004
                                                        //     },
                                                        //     {
                                                        //       title: 'Book Eight',
                                                        //       genre: 'Science',
                                                        //       publish: 2011,
                                                        //       edition: 2004
                                                        //     }
                                                        //   ]


