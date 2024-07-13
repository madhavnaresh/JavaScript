//ForEach() loop
// let count = [3, 4, 1];
// count.forEach((number, index, count) => // number=individual value of array, index=index number of array, count=whole array
// {
//     console.log(number, index, count);
// }
// )

//Another example

let product = [
    { id: 1, Name: "prod 1", price: 99 },
    { id: 2, Name: "prod 2", price: 199 },
    { id: 3, Name: "prod 3", price: 149 },
    { id: 4, Name: "prod 4", price: 399 },
    { id: 5, Name: "prod 5", price: 49 },
]

/*
product.forEach((product)=>
    {
        console.log(`Product Id:- ${product.id}`);
        console.log(`Product Name:- ${product.Name}`);
        console.log(`Product Price:- ${product.price}\n`);
    }
)

//Map() method
let maparray=product.map((product)=> //it is all like the foreach() but it creates an array and stores all values in that whatever the condition is it stores in new array
    {
        console.log(`2X Price of Product ${product.id}:- ${product.price *2}`);}
)
*/

//Filter() method 
/*
let filteredProd=product.filter((product)=> // it also creates a separate array of values according to the condition
    {
        return product.price > 150;
    }
)

console.log(filteredProd);
console.log(product);
*/

//Reduce() method
/*
let cartTotal = product.reduce((total, product) => { //total works as accumulator and product as current value
    return total + product.price;
}
    , 0); // here we initialy having 0 in total 

console.log(cartTotal);
*/