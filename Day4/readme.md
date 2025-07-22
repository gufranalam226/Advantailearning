JavaScript - This adds the intraction with the web page (JS is synchronus single threded interpreted language)
            - Manipulate the the html
            -It is primarily used to make web pages interactive and dynamic

How JA run in browser - In browser there is V8 engine which convert the javascript code into ML code
How JS run in outside browser - Via Node we JS run  anywhere outsie the browser
V8 engine written in C++ (JS code execution is very fast)

Tmporal dead zone - In the execution, this is a zone when memory is assigned to a variable in the memory phase but the value has not assigned, once the value has assigned to the variable in the code phase this comes out forjm the dead zone.

JS code execution - (call stack + execution context(global execution , function executjon context))

Hoisting - This is a concept where JS moves the declaration of variable on the top as in the memory phase memory assign first to the variable, in the execution there is two phase memory phase and code phase, in memory phase memory assignes to the variable first where 
executin context -
    ---------------------------------
    |memory         |code           |
    |var a:undefined|_____          |   
    |let b :        | ________      |
    |const c:       | _________     |
    |sum:{...}      |_              |
    |               | ________      |               
    |               |               |
    ---------------------------------
As a result we get undefined if we try to access a var variable before the initilaization
console.log(a) // give undefined
var a = 10;
console.log(b) // give error can not access before initialization
let b =10;

datatype - primitive, non primitive

operators - +, -, *, /, ++, --, %

Loop(for, forIn, forOf, forEach) and conditional statements

Array

Object vs JSON vs BSON

Functions - normal function, arrow function

