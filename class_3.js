let sum = 0;
for(let i =0; i<=100; i++){
        sum= sum+i;
}
console.log(sum);

// Using callback function 
// function square(n){
//         let a = n*n;
//         return a;
// }

// function sumOfSquares(a,b){
//         const val1= square(a);
//         const val2= square(b);
//         return val1+val2;
// }
// let c= sumOfSquares(100,200)
// console.log(c);

// Adding  a little bit of variation
// function square(n){
//         return n*n;
// }
// function cube(n){
//         return n*n*n;
// }
// function sumOfSquares(a,b){
//         const val1=square(a);
//         const val2 = square(b);
//         return val1+val2;

// }
// function sumOfCubes(a,b){
//         const val1=cube(a);
//         const val2 = cube(b);
//         return val1+val2;

        
// }
// console.log(sumOfSquares(15,17));
// console.log(sumOfCubes(15,17));

//  This code is violating dry rule as code is being repeated here
//  So here comes the call back function 
// function square(n){
//         return n*n;
// }
// function sumofanypower(a,b,fn){
//         const val1 = fn(a);
//         const val2= fn(b);
//         return val1+val2;
// }
// console.log(sumofanypower(10,20,square));
//  Now i got callback function it is very simple pass function as arguements



// Examples of Asynchronous Function
// function findSum(n){
//         let ans =0;
//         for(let i=0;i<n;i++){
//                 ans+=i;
//         }
//         return ans;

// }
// function findSumtill100(){
//         console.log(findSum(100));
// }
// setTimeout(findSumtill100,1000);
// console.log("Hello World");

//  Common async Function
// setTimeout
// fs.readFile
// Fetch
// const fs = require("fs");
// fs.readFile("ash.txt","utf-8",function(err,data){
//         console.log(data)
// })
// console.log("Hi it is me")
// Used to readfile from a text file


// Promises(Important)
// The code for ayschronous function is not so good looking so for that we add promises to it

// const fs = require("fs");
// function AshwinReadFile(){
//         console.log("Inside Ashwin")
//         return new Promise (function(resolve){
//                 fs.readFile("ash.txt","utf-8",function(err,data){
//                         resolve(data);

//         });
// });
// }
// function ondata(data){
//         console.log(data)
// }
// AshwinReadFile().then(ondata)

// Practicing promises
// var d = new Promise(function(resolve){
//         setTimeout(function(){ resolve("foo");},1000)
// });
// function callback(){
//         console.log("daddy")
// }
// console.log("Ashwin");
// d.then(callback);

//  Async await
//  Replacing the then syntax with async await
function ashwin(){
        let p = new Promise(function(resolve){
              setTimeout(function(){resolve("Hi it is me");},3000)  
        });
        return p;
}
async function main() {
        let value = await ashwin()
        console.log("Hi there")
        console.log(value)
}
main();

//  This code employed use of async and await giving us freedm from jarging then concept



