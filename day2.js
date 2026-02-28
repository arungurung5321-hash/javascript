
// const num1 = 1
// const num2 = "1"
// const bool = true


// console.log(num1===num2)

// //2
// //premitive data types

// const str = null;

// let test;

// console.log(test);


//nonpremitive data types
// const arr = [1,2,3,3,4,1,"hello","umesh",true];
//             // 0 1 2 3 4 5 6 7 8 9
// console.log(arr[arr.length-3]="bye");
// console.log(arr)
const arr = [1,2,"arun",true,6,"chikn"];
console.log(arr[arr.length-1])
arr.forEach((item) => {
    console.log(item);
})


// arr.forEach((item)=>{
//     console.log(item);
// })


// arr[0] = 10
// console.log(arr)

// const hello = 1
// hello = 2


//object
// let person={
//     first_name:"umesh",
//     last_name:"mehta",
//     age: 23,
//     hobbies:["coding","cricket","football"],
//     address:{
//         city:"delhi",
//         state:"delhi",
//         country:"india"
//     }
// }

// person.first_name = "arun"
// person.hobbies[0]= "singing"
// console.log(person.hobbies[0])


//function

// function demo(){
//     console.log("hello world")
// }

// function bye(){
//     console.log("hello bye")
// }

// // demo()
// // demo()


// function add(num1,num2){
//     console.log(num1+num2)
// }

// add(0.1,0.2)

// add(100,200)
// add(10,-20)


// function sub(num1,num2){
//     console.log(num1-num2)
// }

// sub(100,50)
// sub(50,100)

// function mul(num1,num2){
//     console.log(num1*num2)
// }

// mul(10,20)
// mul(0.1,0.2)

// function div(num1,num2){
//     console.log(num1/num2)
// }

// div(100,20)
// div(10,0)


// const add2 = function(num1,num2){
//     console.log(num1+num2)
// }

// add2(10,20)




// const add2 = (num1,num2)=>{
//     console.log(num1+num2)
// }

// add2(10,20)


// const add2 = function(num1,num2){
//        return num1+num2
// }


// let result = add2(10,20)
// console.log(result)


//ternary operator
// let age = 12

// age >=18 ? console.log("you can vote") : console.log("you cannot vote")

// for(let i=5;i>=0;--i){

//     console.log(i)

// }




//0,1,2,3,4,5

// const arr1 = [1,2,3,4,5]

// for(let x of arr1){
//     if(x===3){
//     console.log(x)
// }
// }



// const person = {
//     name:"umesh",
//     age:23,
//     city:"delhi"
// }

// for(let key in person){
//     console.log(key,person[key])
// }

/******************************* PRIMITIVE DATA TYPES ************************************/

// Those data type whose variable only stores the single value  


// for example: const num = 10
//  const str = "arun"
// const bool = true
// const nul = null
// let undef

// const vol = 10
// console.log(vol)

// const str = "arun"
// console.log(typeof str)

let test = 'hello';
console.log(typeof test)