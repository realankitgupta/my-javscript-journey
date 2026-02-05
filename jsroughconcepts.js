/** javascript notes from scratch to top of the line- 
topics need to cover 
1. Programming Basics

What is programming? How computers think

Algorithms vs logic

Flowcharts & pseudocode

Variables vs memory

Stack vs Heap (basic idea)

Compilation vs interpretation

Web Basics

How the internet works

Client–Server model

HTTP vs HTTPS

DNS, IP, ports

Request–response lifecycle

REST basics (conceptual)

🟨 PHASE 1 – Core JavaScript (Absolute Basics)
JavaScript Fundamentals

What is JavaScript?

History of JavaScript & ECMAScript

JS engines (V8, SpiderMonkey)

JS runtime (Browser vs Node.js)

Syntax & Basics

var, let, const

Naming conventions

Comments

Semicolons (ASI)

Strict mode

Data Types (VERY IMPORTANT)

Primitive types

string

number

boolean

null

undefined

symbol

bigint

Non-primitive

object

array

function

Type System

Dynamic typing

Type coercion

Implicit vs explicit conversion

Truthy & falsy values

typeof

🟧 PHASE 2 – Control Flow & Logic Building
Operators

Arithmetic

Assignment

Comparison (== vs ===)

Logical (&&, ||, !)

Bitwise (basic awareness)

Ternary operator

Nullish coalescing (??)

Optional chaining (?.)

Control Statements

if, else if, else

switch

Nested conditions

Loops

for

while

do...while

for...in

for...of

Loop control (break, continue, labels)

🟩 PHASE 3 – Functions (Core of JS)
Function Basics

Function declaration

Function expression

Arrow functions

Parameters & arguments

Default parameters

Return values

Advanced Function Concepts

First-class functions

Higher-order functions

Callback functions

Pure vs impure functions

IIFE (Immediately Invoked Function Expressions)

Scope

Global scope

Function scope

Block scope

Lexical scope

🟦 PHASE 4 – Objects & Arrays (Real-World JS)
Arrays (Deep Dive)

Creation & indexing

Mutability

Array methods:

map

filter

reduce

forEach

find, findIndex

some, every

sort, splice, slice

flat, flatMap

Shallow vs deep copy

Objects

Object literals

Properties & methods

Dot vs bracket notation

Object methods

Object.keys

Object.values

Object.entries

Object.assign

Destructuring (array & object)

Spread & rest operators

🟪 PHASE 5 – Execution Context & JS Internals (MOST IMPORTANT)

This phase separates beginners from real engineers

How JavaScript Works Internally

JavaScript engine

Call stack

Memory heap

Execution context

Global execution context

Function execution context

Hoisting (variables & functions)

Temporal Dead Zone (TDZ)

this Keyword

Global this

Function this

Object method this

Arrow function this

call, apply, bind

Closures (CRITICAL)

What is closure?

Why closures exist

Practical use cases

Memory implications

🔵 PHASE 6 – Asynchronous JavaScript
Sync vs Async

Blocking vs non-blocking

Single-threaded nature of JS

Event Loop (VERY IMPORTANT)

Call stack

Web APIs

Task queue

Microtask queue

Priority order

Async Patterns

Callbacks

Callback hell

Promises

States

.then, .catch, .finally

async / await

Error handling in async code

Timers

setTimeout

setInterval

clearTimeout

requestAnimationFrame

🟤 PHASE 7 – Error Handling & Debugging
Errors

Syntax errors

Runtime errors

Logical errors

try...catch

Custom errors

Error propagation

Debugging

Console methods

Breakpoints

Stack traces

Debugging async code

⚫ PHASE 8 – ES6+ Modern JavaScript (MANDATORY)
ES6+ Features

Modules (import / export)

Named vs default exports

Template literals

Enhanced object literals

Iterators & generators

Symbols

BigInt

Optional chaining

Nullish coalescing

🟥 PHASE 9 – Object-Oriented JavaScript
OOP Concepts

Classes

Constructors

Methods

Public vs private fields

Getters & setters

Static properties

Inheritance

extends

super

Method overriding

Prototypes (VERY IMPORTANT)

Prototype chain

__proto__

prototype

Prototypal inheritance

🟫 PHASE 10 – Functional Programming in JS

Immutability

Pure functions

Function composition

Currying

Partial application

Point-free style (awareness)

🟨 PHASE 11 – Browser APIs (for React & Frontend)

DOM manipulation

DOM events

Event bubbling & capturing

Event delegation

Forms & validation

Web storage

localStorage

sessionStorage

Cookies

Fetch API

CORS basics

WebSockets (intro)

🟩 PHASE 12 – JavaScript for Backend (Node.js Ready)

Node.js runtime

CommonJS vs ES modules

File system (fs)

Streams & buffers

Environment variables

Process object

EventEmitter

🟦 PHASE 13 – Performance & Memory

Garbage collection

Memory leaks

Debouncing & throttling

Time complexity (Big-O)

Optimizing loops & async code

🟪 PHASE 14 – Security Basics

XSS

CSRF

CORS

Input validation

Sanitization

Secure cookies

JWT basics (conceptual)

🟥 PHASE 15 – Testing & Code Quality

Clean code principles

Linting (ESLint)

Formatting (Prettier)

Unit testing concepts

Test-driven development (TDD)


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

alert


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
