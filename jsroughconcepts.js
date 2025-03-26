// string in javasript

// let str = "  ankitgupta  "

//  console.log(str[7]);

//  let price = 67;
// let product = "mangoes"

//  console.log(`the price of \t ${product } \n is ${price}`);

// /string methods 
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(3,9));
// console.log(str.replace("ankit","h.sankit"));
// console.log(str.substring(3,9));
    
// const gameName = new String('hitesh-hc-com')
// console.log(gameName);

//  const url = "https://hitesh.com/hitesh%20choudhary"

//  console.log(url.replace('%20', '-'))

//  console.log(url.includes('sundar'))

//  console.log(gameName.split('-'));

// // //split = convert string object to array object breaking elements followed by the arguent in the function and 
 
// // // new = new is a operator which is used to turn any datatype into a object datatype 

// //*************************array******************************* */

// let arr = ['ankit',"tash","badal","shivam","abhishek" ]
// let arrnum = [2,3,4,5,6,7]
// const newarr = new Array(1,2,3,4,5,6)

// console.log(arr);
// console.log(arr.length);
// console.log(arr[4])
// console.log(newarr);

// //for changing value at any index
//  arr[3]= "chakka"
// console.log(arr);

// arr.push("rahulshah", "jaiswal")

// console.log(arr);

// arr.pop()

// console.log(arr,);

// let arrtring  = arr.toString()

// console.log(arrtring);

// let librals = ["ankit","abhishek","tashu", "rahul"]
// let traid = ["ankit", "abhishek", "badal"]
// let learnera = ["ankit", "shivam", "another"]

// let myarr = librals.concat(traid).concat(learnera)

// console.log(myarr)


// librals.unshift("lucky")
// librals.shift();

// console.log(librals.join());


// // splice and slice 

// //slice donot chane the original array
// //where as the splice changes the original array value of the array

// console.log(arr.slice(2,6));

// console.log(arr);


// arr.splice(2,1,"maya",'khushi');
// console.log(arr);

//spread operator - used to add two or more array in a singe array

// let marvel = ['ironman', 'thor','hulk']
// let dc = ['batman','flash,','superman']

// let allhero = [...marvel,...dc];

// console.log(allhero);

// // flat method = agar ek array ke andar array aur uss array ke andar bhi ek array hai aur agar saare array ke element ko ek hi array mein dalna hai to hum uske liye flat(indepth - kitne depth array ke element ko parent array mein lana hai )

// let arr1 = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]]

// let allarr= arr1.flat(6)

// console.log(allarr);


/// how to check whether any datatype is a array or not for that use Array.isArray(datatype) method be carefull here both the array are in capitalise format



// console.log(Array.isArray("ankit"));


///if you want to make array from any type of data then use
 //Array.from(data)


// console.log(Array.from("ankit"));

// // Array.off method- use to create array of many variables


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));

// ********************  function ********************************


// function nameinvoke(a,b,c,d,e,f,g,h){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     console.log(f);
//     console.log(g);
//     console.log(h);
// }

// nameinvoke("a","n","k","i",'t','i',"j","k")

// function addtwonumbers(number1, number2){
//     // oneway- first make variable and then store return value in that-
//     let result = number1+number2;
//     console.log(result);
//     return result // ater declaring result no other line of code execute in the function

//     //now if you want to invoke function first you have to declare a varible and console log it or console in the function itself 

// }


// function addtwonumbers(number1, number2){
//     // oneway- first make variable and then store return value in that-
//     let result = number1+number2;
    
//     return result // ater declaring result no other line of code execute in the function

//     //now if you want to invoke function first you have to declare a varible and console log it or console in the function itself 

// }

// let result = addtwonumbers(1,2)
// console.log(result);

//  here result in the function scope and in the out of the function both are differnt

// function addTwoNumbers(number1, number2){

//        console.log(number1 + number2);
// }
// let result = addTwoNumbers(3,4);
// // console.log("result = ", result); // here in the conosole you will see that result = undefined because here function is not returning any value it is just caling the sum so if it hs no value in it it means in result variable there is no value assigned and if no value assigned then js automatically accept it as undefined so first return the value in the function before printing it.

// function addTwoNumbers(number1, number2){

//     return number1+number2
// }
// let result = addTwoNumbers(3,4);

// console.log("result = ", result);

// function loginUserMessage(username){
//     if(!username){ // here !username ka matlab hai ki agar username diya hi na ho matlab undefined ho to kya karna hai 
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())


// *********how to pass object and array in function as a argment and access thier keys *****

// let user = {
//     username : "ankit gupta ",
//     price : "200rs",
// }

// let arruser = ["ankit ", "200rs"]


// function handleobject(object) {

//     console.log(`username is ${object.username} and price = ${object.price}`);
    
// }

// handleobject(user)


// function handlearray(anyarry,n) {
//     return anyarry[n]
// }



// console.log(handlearray(arruser,1));


// *************