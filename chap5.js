//Objects

//Declaration
/*
let student={
    name:"mg",
    age:21,
    rollno:23,
    marks:75
};

//console.log(student);
*/

//fetch any particular property
/*
//Using dot (.) operator
console.log(student.age);

//Using square bracket
console.log(student["marks"]);
*/

//Update
/*
student.marks=80;
console.log(student);
*/

//Insert extra property
/*
student.isMarried=false;
console.log(student);
*/

//Delete property from object
/*
delete student.age;
console.log(student);
*/

//Iterate properties
/*
//Only keys
for(let x in student)
    {
        console.log(x);
    }

    //Keys with values
    for(let y in student)
    {
    console.log(y+": "+student[y]);
    }
    */

//Nested object
/* 
let student = {
    name: "mg",
    age: 21,
    rollno: 23,
    marks: 75,
    address: {
        houseno: 160,
        Pincode: 248007,
        State: "Uttar Pradesh"
    }
};

console.log(student);

///Fetching nested obejct property
console.log(student.address.Pincode);
*/