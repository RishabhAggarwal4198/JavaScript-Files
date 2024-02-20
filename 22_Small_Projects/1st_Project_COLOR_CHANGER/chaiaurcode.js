const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body') 

buttons.forEach(function (button){                          //[📍📍We got an "NodeList" over here (not an HTML collection)  that's why we used "ForEach" loop overe here ] 
    // console.log(button); 
    button.addEventListener('click', function (event){
        console.log(event); 
        console.log(event.target);                              //💎💎✅💎💎 "event.target" gonna print the whole targeted button (DOM element) that was clicked   (Basically it tells us about from where this event is comming from ?)
        if(event.target.id === 'grey'){                          //✅✅✅ is checks :- "in this 'event.target' the 'id' which we are getting , what is the vaule of it ?'
            body.style.backgroundColor = event.target.id;       // 📍OR📍  body.style.backgroundColor = 'grey' 
        }   
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        } 
        if(event.target.id === 'blue'){ 
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'Red'){
            body.style.backgroundColor = event.target.id;
        } 
        if(event.target.id === 'Orange'){
            body.style.backgroundColor = event.target.id;
        } 
        if(event.target.id === 'Purple'){
            body.style.backgroundColor = event.target.id;
        } 
        if(event.target.id === 'Sky_Blue'){
            body.style.backgroundColor = 'skyblue';
        } 
    }) 
});









