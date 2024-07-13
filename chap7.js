//For each loop
// let count = [3, 4, 1];
// count.forEach((number, index, count) => // number=individual value of array, index=index number of array, count=whole array
// {
//     console.log(number, index, count);
// }
// )

//Another example

let product=[
    {id:1,Name:"prod 1", price:99},
    {id:2,Name:"prod 2", price:199},
    {id:3,Name:"prod 3", price:299},
    {id:4,Name:"prod 4", price:399},
    {id:5,Name:"prod 5", price:499},
]

product.forEach((product)=>
    {
        console.log(`Product Id:- ${product.id}`);
        console.log(`Product Name:- ${product.Name}`);
        console.log(`Product Price:- ${product.price}\n`);
    }
)
let maparray=product.map((product)=> //it is all like the foreach() but it creates an array and stores all values in that whatever the condition is it stores in new array
    {
        console.log(`2X Price of Product ${product.id}:- ${product.price *2}`);}
)

