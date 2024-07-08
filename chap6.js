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