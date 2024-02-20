const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')       // [📍 Both this & the statement above gonna give the same result ]



//💎 SYNTAX ➤ setInterval(function() {}, 1000)        //📍📍 Where "1000" = any value of time in milliseconds 

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)