// if else
/*
let grocerySpending=300; 
if (grocerySpending > 1000)
    {
        let discount=0.10 * grocerySpending;
        console.log("You get 10% discount ", discount);
    }
else if(grocerySpending > 500)
    {
        let discount=0.05 * grocerySpending;
        console.log("You get 5% discount", discount);
    }
else
    {
        console.log("No discount");
    }
    */

//Switch statements
/*
let shippingOption = "standard";

switch (shippingOption) 
{
    case 'standard':
        console.log("Your order will be delivered in 4-5 days");
        break;
    case 'one-day':
        console.log("Your order will be delivered in one day");
        break;
    case 'fast':
        console.log("Your order will be delivered in 2-3 days");
        break;

   default:
    console.log("Invalid shipping option");
        break;
}
*/

//Control statement
//let sum=0;
//let items=[10,30,20,70,50,40];

//For loop
/*
for(let i=0;i<items.length;i++)
    {
        sum=sum+items[i];
    }
console.log(sum);
*/

//While loop
/*
i=0;
while (i<items.length) 
{
    sum=sum+items[i];
    i++;
}
console.log(sum);
*/

//Function without argument
/*
function printIt() 
{
    console.log("Madhav, a frontend developer");
}
printIt();
*/

//funtion with argument
/*
function printname(name)
{
    console.log(name);
}
console.log("COSMIC365.AI");
*/

//function using return 
/*
function returnIt(name)
{
    return name; // it will not execute anything so we have to save what it is returning.
}
let ans=returnIt("Main flow");
console.log(ans);
*/

//Scoping :- till where i can exist
/*
let a=5; // global scope :- can be accessed anywhere in the whole file
function sum()
{
    let b=10; //block scope :- can be accessed inside the block only
    console.log(a);
    console.log(b);
}
sum();
console.log(a);
// console.log(b); //will show error like b is not defined bcz it's block scope
*/

//checking global and block variables
/*
{
    var a=19; //global scope
    let q=12; //block scope
    const t=10; //block scope
}
console.log(a); //a will be accessed
console.log(q); //q will not be accessed
console.log(t); //t will not be accessed
*/

//checking global and block variables using function
/*
function we()
{
    var a=10;
}
console.log(a); //will show error
*/

//scoping chain

let a=10;
function outer()
{
    let b=20;
    function inner()
    {
        let c=30;
        console.log(a ,b ,c); // it will check variable in inner, then outer, then global and for this 'a' and 'b' will be lexical scope variable
    }
    inner();
}
outer();