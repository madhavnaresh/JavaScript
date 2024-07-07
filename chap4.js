//Strings- a combination of characters and used to store the data

/*
//store string
let s1="madhav";
let s2='madhav';
let s3=`madhav`;
console.log(s1,s2,s3);

//iterate each symbol 
for(let i=0;i<s3.length;i++)
    {
        console.log(s1[i]);
    }

//print any particular symbol
console.log(s1[2]);
*/


//combine lines in to a paragraph :- use forward slash (\)
/*
let s4="Hi, I am \
madhav, studying in MCA \
in UTU Dehradun"
console.log(s4);
*/

//Add two or more strings
/*
let fname="Madhav";
let sname="Gupta";
//1. Using '+'  :- gives unexpected result so don't use it 
let fullname=fname + sname;
console.log(fullname);

//2. Using concating ($)
let fullname=`${fname}${sname}`; // to use "${variable_name}" use backtick (``) outside of using variable
console.log(fullname);

//Extra (fetching strings)
let age=21;
let intro=`My name is :- ${fname} ${sname} and my age is ${age}.`
console.log(intro);
*/

//Changing cases 
/*
let fullname="Madhav Gupta";
//Uppercase
console.log(fullname.toUpperCase());
//Lowercase
console.log(fullname.toLowerCase());
*/

//Find a keyword in an paragraph
/*
let intro="Hi, I am madhav, studying in MCA in UTU Dehradun.";
let keyWord="UTU";
console.log(intro.search(keyWord)); //return the index no. of first character

//Replace any word
let replaceWord="VMSBUTU";
console.log(intro.replace(keyWord,replaceWord));
*/

//Substr, substring, slice
/*
let intro="Hi, I am madhav, studying in MCA in UTU Dehradun.";
//slice
let partIntro=intro.slice(0,31); //same as array
console.log(partIntro+" ...read more");

//substring
let subIntro=intro.substring(0); //1 value- leave index from start and print remaining, 2 values- leave index equal to 1st val and print next index as 2nd val, 0 in function then retrun whole string
console.log(subIntro); 
*/