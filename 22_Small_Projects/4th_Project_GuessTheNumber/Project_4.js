let randomNumber = parseInt((Math.random()*10+1))      // [📍 "parseInt" to get this value in the form of an "Integer" ]

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot= document.querySelector ('.guesses');
const remaining = document.querySelector ('.lastResult'); 
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p') 


// let prevGuess = []  
let numGuess = 1;

let playGame = true;          // ✅💎✅ Whenever we gonna design such GAMES, most of the timw we have to declare any such variable like  "let playGame = true"

if(playGame){  
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);      //💎✅💎 Passed this value to the next function
    }); 
} 


function validateGuess(guess){           // ✅💎✅ This function will simply do VALIDATION that whether the value is between 1 & 100 or not ? & whether it's a value or not ?          
    if(isNaN(guess)){
        alert ('Please enter a valid number')
    } else if ( guess < 1){
        alert ('Please enter a number more than 1')
    } else if (guess > 100){
        alert ('Please enter a number less than 100') 
    } else { 
        // prevGuess.push(guess)           // 💎✅💎 To save the value into that "guess" ARRAY 
        if(numGuess === 10){  
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {  
            displayGuess(guess) 
            checkGuess(guess) 
        }
    }  
}





function checkGuess(guess) {                 // ✅💎✅ This function will check whether the inserted value is equal to "random.number" or not ??
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number  is TOOO low`)
    }else if (guess > randomNumber){
        displayMessage(`Number is TOOO High`)
    } 
}





function displayGuess(guess){                          // ✅💎✅ This function will CLEAN the value in the input (to take the next value), will update the "previous guess" Array & "Guesses Remaining" Array 
    userInput.value = '';                              // [📍 Here the value inside the "userInput.value" got cleaned i.e. an EMPTY-VALUE gonna get assigned to it ]
    guessSlot.innerHTML += `${guess},   `;            // [📍 At this stage it's not updating the values in GUESS, istead its PUSHING those values into that ]
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`; 
} 



function displayMessage(message){                    // ✅💎✅ This function will pass the value of "const lowOrHi"
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}





function endGame () {
    userInput.value = '';                             // [📍 Here the value inside the "userInput.value" got cleaned i.e. there is now no value in it (remember not ZERO but NO - VALUE) ]
    userInput.setAttribute('disabled', '');           // [📍 this ".setAttribute('disabled', '');"  is done so that the User won't be able to add any value to "userInput" ]
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;                                // 💎✅💎 to make it "false" is the most important thing to end the game
    newGame(); 
}



// 💎✅💎 If we want to play a new game we have to RESET all of the following values  👇👇


function newGame () {
        const newGameButton = document.querySelector('#newGame')
        newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        // prevGuess = []                            // [📍 Here the "previouGuess" varaible got RESET ]
        numGuess = 1 
        guessSlot.innerHTML = '';
        remaining.innerHTML =  `${11 - numGuess}`;
        userInput.removeAttribute(`disabled`)       // 💎✅💎 remove "disabled" attribute from "UserInput"
        startOver.removeChild(p);                   // 💎✅💎 remove these values which u inserted in the innerHTML of the paragraphs
        playGame = true;
    }) 
   
}

