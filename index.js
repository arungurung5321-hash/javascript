//shallow copy creates a new object that shares references to nested objects with the original,
//while a deep copy creates a completely independent clone, including all nested structures. 
// a = 100 
// b = 20
// console.log(a)
// console.log(b)
// if (a == b ){
//     console.log("a is equal to b")

// 
// console.log(100 +'100'+20) // 10010020 it acts as a string because of the presence of '100' which is a string.
// console.log("100"-'100'+ 20) // it will be 20 because the - operator converts the string '100' 
// to a number before performing the subtraction, resulting in 0 + 20 = 20.
// 
// function abc(){

// }

// console.log(typeof (abc)) // function
// let obj = {
//     name:' Arun',
//     pqr: function(){
//         console.log(this.name)
        
//     }
// }
// const c= obj.pqr//
// obj.pqr()// ouutput Arun Dinxa
// c()//c chai refrence ho obj.pr ko tara c() nai xaina jaslai call gareko xa teibhaera undefined aauxa


/********************* Shallow copy.  ************************/
// const obj={
//     name:'Arun',
//     age:25,
//     college: "Arkansas State University",
//     Buddy: {
//         name:"Rembo",
//         age:24
//     }
// };
// const shallowcopy = {...obj};// shallow copy le new object create garxa that
// // shares references to nested objects with the original bhanna khojeko original object ko address reference lai
// // copy garxa naya node ma so that data access can be faster...
// // (...)SPREAD operator le obj named object ko properties lai copy garxa shallowcopy ma
// // ma 
// shallowcopy.name = "Rampam";// yesle original object ko name lai chane gardaina
// // tara naya nodema original object ko reference lai copy garxa so that data access can be faster
// shallowcopy.Buddy.name = "Pemo";// yesle original object ko pet.name lai change gardaina because shallow 
//                               // copy le nested objects ko reference lai copy garxa
// console.log(obj.name)// original object ko data print garyo
// console.log(shallowcopy.name)
// console.log(obj.Buddy.name)//
// console.log(shallowcopy.Buddy.name)
/****************** ANOTHER EXAMPLE OF SHALLOW COPY */
// const original = {// original objcet create bhayo
//     name:"Pyare",// property name
//     age: 22,
//     pet:{// nested object pet object bhitra ko ni object ho nested object.
//         name:'Randy',
//         age:2, 
//         type:'Dog'
//     }
// };
// const shallowcopy = {...original};
// shallowcopy.name = "Aire";
// shallowcopy.pet.name ="kale";
// console.log(original.name)
// console.log(shallowcopy.name)
// console.log(original.pet.name)
// console.log(shallowcopy.pet.name)

/********************* Deep copy ************************/

// const original ={
//     name:"Ranmati",
//     age:28,
//     kukur:{
//         name:"Rate",
//         age:4,
//     }
// };
// const deepcopy = structuredClone(original);// yesle original object ko completely independent clone create garxa, including all nested structures.
// // bhanna khojeko xuttai node banayer address chai xuttai hunxa tara data chai same or copy garxa
// deepcopy.name ="aaayogaule";
// deepcopy.kukur.name = "muji ";
// console.log(original.name)
// console.log(deepcopy.name)
// console.log(deepcopy.kukur.name)
// console.log(original.kukur.name)

// samanya bhasa ma bhannu parda shallow copy ko nested value lai change garda


/********************************************************************/
// let original = { 
//     name:"Arun",
//     age:29,
//     jantu:{
//         name:"akabare",
//         age:4
//         }
// };
// const shallowcopy = {...original};
// shallowcopy.name = "sssss";
// shallowcopy.jantu.name = "hawa";
// shallowcopy.jantu.age = 10;
// console.log(original.name)
// console.log(shallowcopy.name)
// console.log(shallowcopy.jantu.name)
// console.log(original.jantu.name)
// console.log(shallowcopy.jantu.age)
// console.log(original.jantu.age)

/******************************* javascript problem solving *******************************/

// Given
// a string s of '('
// JavaScript v
// '' and lowercase English characters.
// 3 Your task is to remove the minimum number of parentheses | '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
// 5 Formally, a parentheses string is valid if and only if:
// 7 It is the empty string, contains only lowercase characters, or
// 8 It can be written as AB (A concatenated with B), where A and B are valid strings, or
// 9 It can be written as (A), where A is a valid string. Example 1:
// 10
// 11
// 13 Input: s = "lee(t(c)o) de)"
// 14 Output: "lee(t(c)o) de"


























// /****************** ANOTHER EXAMPLE OF SHALLOW COPY ******************/


// const original = {
//     name:"Hawadari",
//     age:20,
//     umer:33,
//     pet:{
//         name:"akabare",
//         age:4,
//         type:"kukur"
//     }
// };
// const shallowcopy = {...original};//shallow copy using spread operator
// shallowcopy.name = "nilo";
// shallowcopy.age=28;
// shallowcopy.umer = 40;
// shallowcopy.pet.name = "dim";
// shallowcopy.pet.age = 42;
// shallowcopy.pet.type = "cat";

// console.log(original.name)//hawadari
// console.log(shallowcopy.name)//nilo
// console.log(original.pet.name)//dim
// console.log(shallowcopy.pet.name)//dim
// console.log(original.pet.type)//cat
// console.log(shallowcopy.pet.type)//cat
// console.log(original.pet.age)//42
// console.log(shallowcopy.pet.age)//42

// /************************************************* //





    
   



