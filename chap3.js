//Array
//definition
/*
let arr=[1,2,3,4,5,6,7,8,9]; // no need to specify size of array
console.log(arr);
*/

//allow hetrogenous elements
/*
let arr=[1,2,"Madhav",5,true, BigInt(2378467823),9];
console.log(arr);
*/


//length of array
/*
let arr=[1,4,2,4,6,8,90,4,3];
console.log(arr.length);
*/



//calling all elements of Array :- 1.using for loop and 2.using array-name
/*
let arr=[23,2,65,7,5,2,96];
//1.for loop
for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }

//calling an specific element, done using index number
    console.log(arr[2]);

//2.using array name
console.log(arr);
*/


//Various methods
/*
let arr=[2,5,34,"madhav",37];
console.log(arr);

//push :- to add element in last
arr.push("gupta");
console.log(arr);

//pop :- to delete element from last
arr.pop();
console.log(arr);

//unshift :- to add element in starting
arr.unshift("frontend developer");
console.log(arr);

//shift :- to delete element from starting
arr.shift();
console.log(arr);
*/



//slicing :- when to perform additional operation on some element of array, then to separate those element we use "Slicing"
// it does not affect the old array, it just make a slice from that
/*
let na=arr.slice(0,2); //(0,2) means first value of starting and second is 'index_no_of_this + 1' of last element 
console.log(na); 

let no=arr.slice(2); // index from where u want element till last
console.log(no);

let opp=arr.slice(-2); //access element from last, here count index from last by -1
console.log(opp); 
*/

/*
let arr=[
    {name:"mg",score:90},
    {name:"sg",score:70},
    {name:"ag",score:30},
    {name:"dg",score:100},
    {name:"rg",score:80},
    {name:"kg",score:60}
    ];
    console.log(arr);
    
//Splice
arr.splice(1,2,{name:"lg",score:20}); // 1st- index start, 2nd- howmany u want to delete, 3rd- with u want to replace
console.log(arr);

//Reverse
console.log(arr.reverse()); //will reverse the array

//Some and Every
//some
let info=arr.some(function(obj) // some will true if anyone condition is true
{
    if(obj.score>80)
        {
            return true;
        }
    else{
            return false;
        }
}
)
console.log(info);

//every
let info=arr.every(function(obj) // some will true if every condition is true
{
    if(obj.score>80)
        {
            return true;
        }
    else{
            return false;
        }
}
)
console.log(info);

//Find
let info=arr.find(function(obj) //if more than condition satisfies than only 1st will be output
{
    return obj.score===90;
}
)
console.log(info);
*/

//Sorting
/*
arr=[1,2,3,0,6,5,9];
console.log(arr.sort()); 

//error in sorting
arr=[1,0,5,8,20,1000,111,30,50];
console.log(arr.sort());  //it gives o/p as alphabetical order coz it takes element as character

//Solve sorting
console.log(arr.sort(function(a,b)
    {
        return a-b; // return in ascending order for descending use b-a
    }
));
*/

//Delete
/*
arr=["ajay","vijay","lal","sumit","amit","pawan"];
console.log(arr);
delete arr[2]; //will replace item with empty item means it deletes but shows empty space
console.log(arr);
*/