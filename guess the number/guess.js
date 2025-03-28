let randomNumber = parseInt(Math.random()*10 +1 );
  const submit = document.querySelector("#subt");
  const userinput = document.querySelector("#guessfeild");
  const guessSlot = document.querySelector(".guesses")
  const remainguess = document.querySelector(".guessremain")
  const loworhi = document.querySelector(".loworhi")
  const startover = document.querySelector(".resultparas")
  
  let p = document.createElement('p')

  let previousGuess = []

  let numGuess = 1
  let playGame = true;

  if(playGame){
    submit.addEventListener("click", function(event) {
      event.preventDefault()
      const guess = parseInt(userinput.value)
      validateGuess(guess)
      console.log(guess);
    })
  }

  function validateGuess(guess){
    //in this method we will check whethe the user have given the valid guess or not 
    if (isNaN(guess)) {
      alert("please enter a valid Number")
    }else if(guess<1){
      alert("please enter a Number greater than 1")
    }else if(guess>100){
      alert("please enter a Number less than 100")
    }else{
      previousGuess.push(guess)
      if(numGuess>10){
        displayGuess(guess)
        dispalayMessage(`Game over, Random no was ${randomNumber}` )
        endgame()
      }else{
        displayGuess(guess)
        checkGuess(guess)
       }
    }
    

  }

  function checkGuess(guess) {
    //whether he guess right or wrong 
    if (guess === randomNumber) {
      dispalayMessage("you guessed it right ")
      endgame()
    }else if(guess<randomNumber){
      dispalayMessage("Number is too short ")
    }else if(guess>randomNumber){
      dispalayMessage("Number is too high")
    }
  }
  
  function displayGuess (guess) {
    // clear the userinputr section and update the 
     userinput.value = ""
     guessSlot.innerHTML += `${guess}, `
     numGuess++;
     remainguess.innerHTML = `${ 11 - numGuess}`


  }

  function dispalayMessage(message) {
    //display the result and instruction
     loworhi.innerHTML= `<h2>${message} </h2>`

  }


  function endgame(){
    //it will end the game
    userinput.value = ""
    userinput.setAttribute("disabled" , "")
    p.innerHTML= `<h2> game is over start new game </h2>`
    startover.appendChild(p)
    playGame = false;
      newGame()
  }


  function newGame(){
    //
    p.addEventListener("click", function(event){
      randomNumber = parseInt(Math.random()*10 +1 );
      previousGuess = []
      guessSlot.innerHTML = ""
      numGuess = 1
      remainguess.innerHTML = `${ 11 - numGuess}`
      userinput.removeAttribute("disabled")
      startover.removeChild(p)
      playGame = true;
    })
  }


 
