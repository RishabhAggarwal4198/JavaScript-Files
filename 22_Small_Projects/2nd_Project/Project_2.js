const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)        //[📍📍This useCase will cause an empty value to get stored inside the " const height" ] 

form.addEventListener('submit', function(e) {
    e.preventDefault()                                                    //💎✅💎 For preventing the form from default submission (i.e. from preventing it to perform default action associated with it )

    const height = parseInt(document.querySelector('#height').value)        // [✅📍 by using ".value" we gets the value of which is entered in the input by the user ]
    const weight = parseInt(document.querySelector('#weight').value)      // [✅📍 the value which we get from this "document.querySelector('#weight').value" is STRING so, by using "parseInt"  the value which we got in STRINGS got parsed into INTEGERS  ]
    const results= document.querySelector('#results')
    const Suggestion = document.querySelector('#Suggestion')
      

    if(height === '' || height < 0 || isNaN (height) ){                 // [📍 '' = it should not be empty, isNaN(height) = if the value received is convertible to number or if it's a numeric value. So it will display true otherwise false (i.e. height = NaN (not a number)) ]
        results.innerHTML = `Please give a valid height !! Given value is ${height}`;
    }else if (weight === '' || weight < 0 || isNaN (weight) ){                 
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)       // 💎✅💎 "toFixed(2)"  That we want value a va
        // show the result & proceed downward 🔻🔻
        if ( bmi < 18.6 ){
            results.innerHTML = `Your weight is ${bmi}, Your are under Weight`
        }else if ( bmi >= 18.6 && bmi <= 24.9 ){
            results.innerHTML = `Your weight is ${bmi}, Your  Weight is fine`
        } else {
            results.innerHTML = `Your weight is ${bmi}, Your are Overweight`
        }        
    }
    
});


