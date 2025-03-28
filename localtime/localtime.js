const clock = document.querySelector("#clock")
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)

// setInterval(() => {
//     //any work or programme
// }, interval //in seconds );

//setinterval mein hum jo bhi kaam dalenge vo us set kiye hue interval mein baar baar karega interval milliseconds mein hota hai 