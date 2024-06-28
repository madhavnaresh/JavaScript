// if else
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