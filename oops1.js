//  const dog ={
//         name:"Doggie",
//         legCount:2,
//         speaks:"Bhow Bhow"
//  }
//  console.log(dog.name);
// //  Animal name is Dog and it speaks bhow bhow and have 2 legs
// console.log("Animal name is"+dog.name+"and it speaks"+dog.speaks+"and have"+dog.legCount+"legs")


// Creating a class
// class Animal{
//         constructor(name,legCount,speaks,color){
//                 this.name=name;
//                 this.legCount=legCount;
//                 this.speaks=speaks;
//                 this.color=color;
//         }
//         static mytype(){
//                 console.log("Hello")
//         }
//         speak(){
//                 console.log("Hi there "+this.speaks)
//         }
//         colors(){
//                 console.log("My color is "+this.color)
//         }
// }
// console.log(Animal.mytype());
// let dog = new Animal("dog",4,"bhow bhow","red")
// let cat = new Animal("cat",4,"meow meow","white")
// cat.speak();
// dog.colors();
// // Date class
// const currentDate = new Date();
// console.log(currentDate.getMonth()+1);//Zero Based Indexing

// Calculating runtime of an function

// function calculateSum(){
//         let a =0;
//         for(let i=0;i<1000;i++){
//                 a=a+i;
//         }
//         return a;
// }
// const beforeDate = new Date();
// const beforeTimeinms = beforeDate.getTime();
// calculateSum();

// const afterDate = new Date();
// const afterTimeinms = afterDate.getTime();
// console.log(afterTimeinms-beforeTimeinms);
// // This is something new and needs to be preserved


// // Printing the current time
// function currentTime(){
//         console.log(new Date().getTime())
// }
// setInterval(currentTime,1000);


// Usin JSON in case where we needs to send some data we use Json
const users = '{"name":"ashwin","age":"20","gender":"male"}';
const user = JSON.parse(users)
console.log(user.gender);
const user1 ={
        name:"Harkirat",
        age:12,
        gender:"Male"

}
const finalString = JSON.stringify(user1);
console.log(finalString["name"]);