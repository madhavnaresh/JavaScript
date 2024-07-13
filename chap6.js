//Function and Execution

//Simple function
/*
function addtocart(product)
    {
        console.log(`${product} is added to cart.`);
    }

addtocart("Pen");
addtocart("Tablet");
addtocart("Shoes");
*/

//Anonymous function
/*
let sum=function()
    {
        console.log(2+9);
    }
sum(); //calling the function
*/

//Higher order function
/*
//Passing function as argument
function getclicked(clicked)
    {
        clicked();
    }

getclicked(function() //function calling
    {
        console.log("i am clicked");
    }    
)

//returning a function as a value from that
function returnFunction()
{
    return function()
        {
            console.log("returning");
        }
}
//calling
//1
returnFunction()(); 
//2
let rf=returnFunction();
rf();
*/

//Arrow function
/*
let print=()=>
    {
        console.log("hello friends!!");
    }

print(); //call the function

//Other way to define Arrow fn.
let op=()=>console.log("this is output");
op();
*/

//using arrow in addition
/*
let sum=(a,b)=>
    {
        return a+b;
   }
//or
let add=(a,b)=>a+b;
console.log(add(10,5));
*/

//Immediately Invoked Function Expression (IIFE)
/*
(function sub()
    {
        console.log(9-4);
    }
)
() // immediate call of fn.

//IIFE as arrow fn.
(() => {
    console.log(2 * 9);
})();
*/

//other declaration of functin and variable
/*
let a=10;
function hello()
    {
        a=20;
        console.log(a);
    }
hello(); //will give o/p 20
console.log(a); // will also give o/p 20 bcz in the compiler value of a is updated but if we define a of fn. differently then both will different
// see here
let b=20;
function op()
    {
        var b=30;
        console.log(b);
    }
op(); //o/p will be 30
console.log(b); // o/p will be 20
*/

//Learning execution context and its type

//To understand the execution and it's parts :- 1.memory creation phase and 2.execution phase
/*
var l=20;
var w=30;

function calculate(length,width)
    {
        let area=length*width;
        return area;
    }

var rectangle=calculate(l,w);
console.log(rectangle);
*/