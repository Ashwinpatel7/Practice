// So this lecture was ala about strings we learnt variety of different functions in this
function getLength(str){
        console.log("Original String:",str);
        console.log("String Length:",str.length);//Length property will gives you length of string
}
getLength("hello World")

function getLength(str,target){
        console.log("Original String:",str);
        console.log("The string index is :",str.indexOf(target));//Length property will gives you index of target string
}
getLength("hello World","orld");


function getSlice(str,start,end){
        console.log("Original String:",str);
        console.log("After Slice:",str.slice(start,end));//Slice property will gives you slice  of string and gives result that way
}
getSlice("Hello Goood Morning",5,7);

// There is also sustring method but the only difference being that substring(2,5) it will give five character after index 2
//  Creating slice with own
function cut(str, StartIndex,endIndex){
        let newstr="";
        for(let i =0;i<str.length;i++){
                if(i>=StartIndex&&i<endIndex){
                        newstr=newstr+str[i];
                }
        }
        return newstr
}
const value = "Ashwin Patel";
console.log(cut(value,2,5))
// Replace with function
const str = "Hello World"
console.log(str.replace("World","Batman"));

// Split function use a symbol given to split 
const sent = "Hi my name is Ashwin Patel";
const words = sent.split(" ")
console.log(words);

// There is also an function named trim it trims the space in the given input only at beginning and at end
// toLower and toUpper are self explanatory



// parseInt converts an string to int
console.log(parseInt("76"));
console.log(parseInt("76.8"));
// In same manner there is also parseFloat


// Array manipulation
const initialArray =[2,3,8,1,2];
initialArray.push(8);
console.log(initialArray)

// In same manner we can use pop(for end ) and shift(in front) and unshift(to add something in front )
// Using concat method
const array1=[3,6,3,5,4,3];
const array2=[3,6,3,5,7,3]
console.log(array1.concat(array2));






