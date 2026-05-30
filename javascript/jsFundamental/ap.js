//var let const--

// var name = "Akash";
// var age = 18;
// var isEmployed = true;
// console.log(name);
// console.log(age);
// console.log(isEmployed);
// var age = 50;
// console.log(age);

// let name = "Akash";
// let age = 18;
// let isEmployed = true;
// console.log(name);
// console.log(age);
// console.log(isEmployed);
// let age = 50;
// console.log(age);

// const name = "Akash";
// const age = 18;
// const isEmployed = true;
// console.log(name);
// console.log(age);
// console.log(isEmployed);
// const age = 50;
// console.log(age);

// if(true){
//     var age =30;
// }
//     console.log(age);

// if (true) {
//     let age = 30;
// }
// console.log(age);

// const PI=3.14;
// console.log(PI);
// PI=3.14159;  //this is will cause an error
// console.log(PI);

// //types of operator

// console.log(name);
// console.log(age);
// console.log(isEmpolyed);

//variable inside string

// let name1 = "Akash";
// let age1 = 18;
// console.log("my name is " + name1 + " and my age is " + age1);
// console.log(`my name is ${name1} and my age is ${age1}`);

// let person={
//     name:"John",
//     age:30,
//     city:"New York"
// };
// console.log(person);

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// typeof
// console.log(typeof(person));

// let numbers=[1,2,3,4,5];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);  //undefined

// let mixedArray=[1,"Hello",true,[1,2,3],{name:"Alice",age:25}];
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[2]);
// console.log(mixedArray[3]);
// console.log(mixedArray[4]);

// console.log(numbers.length);

// function greet(){
//     console.log("Hello World");
// }
// greet();

// function multiply(a,b){
//     return a*b;
// }
// console.log(multiply(2,3));

// let divide = function(a,b){
//     return a/b;
// };
// console.log(divide(10,2));

// let sayHi = () => console.log("Hi!");
// sayHi();

// let square = x =>x*x;
// console.log(square(4));

// const greetUser = (name) =>{
//     console.log(`Hello,${name}!`);
// }

// let newarray = [1,2,3,4,5];
// let squaredArray = newarray.map((num) => num*5);
// console.log(squaredArray);

// let evenNumber = [1,2,3,4,5];
// let filteredEvenNumbers= evenNumber.
// filter(num => num %2 ===0);
// console.log(filteredEvenNumbers);

// let sum =[1,2,3,4,5];
// let total = sum.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
// console.log(total);

// let students= [
//     {name:"Alice",marks:85},
//     {name:"Bob",marks:92},
//     {name:"Charlie",marks:78}
// ];

// let marks = students.map(student =>student.marks);
// console.log(marks);

// let names = students.map(student => student.name);
// console.log(names);

// let topStudents = students.filter
// (students=> students.marks>80);
// console.log(topStudents);

// let totalMarks = students.reduce
// ((acc,student) => acc + student.marks,0);
// console.log(totalMarks);

// let mixedArray = {
//     name: "Alice",
//     age: 25,
//     hobbies: { "reading", "traveling", "coding"},
//     addess: {
//         street: "123 Main St",
//         city: "New York",
//         country: "USA",
//     };
//     greet: function () {
//         console.log("Hello!");
//     }
// }
// console.log(mixedArray.name);
// console.log(mixedArray.age);
// console.log(mixedArray.hobbies);
// console.log(mixedArray.hobbies[0]);
// console.log(mixedArray.hobbies[1]);
// console.log(mixedArray.hobbies[2]);
// console.log(mixedArray.addess);
// console.log(mixedArray.addess.street);
// console.log(mixedArray.addess.city);
// console.log(mixedArray.addess.country);

// mixedArray.addess.greet();

// //object inside array
// let people = {
//     { name: "Alice", Age: "26" },
//     { name: "bob", Age: "18" },
//     { name: "jack", Age: "22" },        
// };

// console.log(mixedArray.people[0]);
// console.log(mixedArray.people[1]);
// console.log(mixedArray.people[2]);

//Array inside object
let company ={
    name : "Tech Corp",
    empolyees : { "charlie" , "bob", "alice"}
};
console.log(mixedArray.name);
console.log(mixedArray.empolyees[0]);
console.log(mixedArray.empolyees[1]);
console.log(mixedArray.empolyees[2]);
