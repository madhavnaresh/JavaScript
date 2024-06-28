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

switch (shippingOption) {
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
let sum=0;
let items=[10,30,20,70,50,40];

for(let i=0;i<items.length;i++)
    {
        sum=sum+items[i];
    }
console.log(sum);