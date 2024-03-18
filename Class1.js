// Concept of loops
// Question 1 
// There are three types of variables in javascript let var const 
// Const is used for constant one 
// Never use var as 
// var a =1;
// a=2;
// console.log(a);
// We csn use "let" for this case too
// const c =4;
// c=5;
// console.log(c);

// Data types
// let firstName = "Harkirat";
// let age = 18;
// let isMarried =false;
// console.log("This person name is"+firstName+"and their age is "+age);

// //  If else statements 
// if(isMarried==true){
//         console.log(firstName+" is not married");
// } else{

// console.log(firstName+" is married");
// }
// Loops 
// let answer = 0;
// for(let i =0; i<=100; i++){
//         answer=answer+i;
// }
// console.log(answer);
// // Greeting Question
// let gender = "Male";
// if(gender=="Male"){
//         console.log("Hi man what is going on ");

// }
// else{
//         console.log("Hi girl everything fine");
// }
// // Counting of numbers 
// for(let i=0;i<=1000; i++){
//         console.log(i);
// }

// Complex primitives
// Arrays 
// const age =[21,22,23,24,25,26];
// for(let i =0; i<age.length; i++){
//         if(age[i]%2==0){
//                 console.log(age[i]);
//         }
// }
// // If gender is male then only print 
// const Name =["ashwin","ashish","batman","catgirl"];
// const gender =["Male","Male","Male","Female"];
// const number = Name.length;
// for(let i =0; i<number;i++){
//         if(gender[i]=="Male"){
//                 console.log(Name[i]);
//         }
// }


// Concept of object
// const users1 ={
//         firstName: "Ashwin",
//         gender : "male"

// }
// console.log(users1["firstName"]);

// // Creating an array of objects

// const users = [{firstName:"Raj",
// gender:"male"},{firstName:"Abhishek",
// gender:"male"},{firstName:"Srishti",
// gender:"female"}]
// for(let i =0; i<users.length;i++){
//         if(users[i]["gender"]=="male"){
//                 console.log(users[i]["firstName"])
//         }
// }
// // The objects can be nested according to requirement there is no limit to it and can be accessed by same method everytime
 




//  The concept of function in javascript

// function sum(a,b){
//         // Return the actual thing you want to do
//         return a+b;
// }
// const value = sum(4,5)
// console.log(value);

// // Call Back function 


// function sum(num1, num2,fnTocall) {
//         let result = num1 + num2;
//         fnTocall(result);
//     }
    
//     function displayResult(data) {
//         console.log("Result of the sum is : " + data);
//     }
    
//     function displayResultPassive(data) {
//         console.log("Sum's result is : " + data);
//     }
    
//     // You are only allowed to call one function after this
//     // How will you displayResult of a sum
//     const ans = sum(1,2,displayResult);


// //      Implementation of callback function



// function cal(a,b,type){
//         if (type =="sum"){
//                 const val = sum(a,b)
//                 return val;
//         }
//         if(type=="sub"){
//                 const val = sub(a,b)
//                 return val;
//         }

// }
// function sum(a,b){
//         return a+b;
// }
// function sub(a,b){
//         return a-b;
// }
// const value = cal(5,2,"sub")
// console.log(value);

// Understanding from a newer perspective

function calculate(a,b,arithmetic){
        const ans = arithmetic(a,b);
        return ans;
}
function sum(a,b){
        return a+b;
}
const val = calculate(1,2,sum);
console.log(val);

// Using set timeout function
function greet(){
        console.log("It is me the batman")
}
setTimeout(greet,3*1000)