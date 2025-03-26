let buttons = document.querySelectorAll(".button")
let body = document.querySelector("body")
let container = document.querySelector("div")
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event)
        console.log(event.target) // element access vo element mil jayega jo click hua hai kis target se ye event aaya hai
        if (event.target.id === "gray") {
            container.style.backgroundColor = event.target.id
        }
        if (event.target.id === "blue") {
            container.style.backgroundColor = event.target.id
        }
        if (event.target.id === "green") {
            container.style.backgroundColor = event.target.id
        }
        if (event.target.id === "red") {
           container.style.backgroundColor = event.target.id
        }
    } ) 
})