let form = document.querySelector("form")
//this usecase will give you empty value.
//const height = parseInt(document.querySelector("#height").value);
form.addEventListener("submit",function (event) {
    event.preventDefault()
    const height = parseInt(document.querySelector("#height").value);   //1. the value of input from the form is access like this by .value
                                                        // 2. the value from the input is always comes in string value so for converting it into a number we use     parseInt(value in string)
    const weight = parseInt(document.querySelector("#Weight").value);

    //ye dono ko event ke function ke andar isi liye define kiya hai kyunki humein ye value submit hone ke baad chahiye nahi to agar submit ke bahar agar inko define kiya to agar kuch value nahi hogi to default hi empty value matlab null store ho jayegi thats why..
   const results = document.querySelector("#results")

   let bmi = (weight/(height/100)**2).toFixed(2)

   if (height === "" || height<0 || isNaN(height) || weight === "" || weight<0 || isNaN(weight) ) {
    results.innerHTML = `please give a valid height ${height} and weight ${weight}`
   } if(height>0 && (weight === "" || weight<0 || isNaN(weight)) ){
    results.innerHTML = `you have entered correct height but wrong weight `
   }if(weight>0 && (height === "" || height<0 || isNaN(height))){
    results.innerHTML = `you have enterd correct weight but wrong height`
   }else{ results.innerHTML = `<span> your BMI calculated is ${bmi} </span>`}

   if (bmi<18.6 || bmi>24.9) {
    results.style.color = "red"
   } else if(18.6>bmi<24.9){
    results.style.color = "rgb(26, 92, 10)"
   } 
}  )