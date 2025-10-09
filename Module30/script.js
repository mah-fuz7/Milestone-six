let student={
    name:'alam',
    country:{
        countryName:'bangladesh',
        // BarthPlace:{
        //     adderess:'chittagong',
        //     postcode:4370,
        // }
    }
}
// console.log(student.country.BarthPlace?.postcode)

let YourPlace={
            adderess1:'newJersy',
            lastfewdigit:470,
        }
         
        // dot notation
        // console.log(YourPlace.lastfewdigit)  

        // bracket notation(when we have space in the key name or special character)

        YourPlace={
            'new adreess':'newJersy',
            lastfewdigit:470,
        }
        // console.log(YourPlace["new adreess"])


        // ------------------ 30-3-------------------------

// map

let number=[2,5,8]
let squreNum=number.map(x=>x*x)
// console.log(squreNum)

const driver=['halima','rohima','karim','gofur']
const lengthName=driver.map(name=>name.toUpperCase()+name.length)
// console.log(lengthName)

const students=driver.map((num,index)=> {
    
// return  num+index
// console.log( num+index)

})
// console.log(students) withour return you cannot console out of the {} bracket



// ------------------ 30-4-------------------------
// -----------------for Each function-----------------------

// .forEach() → no return needed, because it’s only used for side effects (like logging).


//1. map

let nunbers=[2,5,8]
let tripleNum=number.map(num=>num*3)
// console.log(tripleNum)

// If you don’t return a value inside the callback, the new array will have undefined values

let tripleNum2=number.map(num=>{
    num*3
    return num*3
})
// when you have only one line of code you can skip the return and {} bracket
//  but if you have more than one line of code you have to use return and {} bracket
//  otherwise it will return undefined

// console.log(tripleNum2)


let schoolStudents=[
    {id:1,name:'karim', age:15},
    {id:2,name:'rahim', age:16},
    {id:3,name:'halim', age:17},
    {id:4,name:'salim', age:18},
    {id:5,name:'jalim', age:19},
];
   

let AdultStudents=schoolStudents.map(obj=>obj.name)
// console.log(AdultStudents)

// 2. forEach ==> You use forEach() when you want to loop through an array and do something with each element, but you don’t need a new array as a result.

let evenIds=schoolStudents.forEach(student=>student.id%2===0)

// console.log(evenIds) // it will return undefined because forEach does not return anything .that's means you cannot store the result of forEach in a variable .it works like a loop only


// correct way to use forEach
schoolStudents.forEach(student=>{
    // console.log(student.id*2)
})

// filter

let primeNumbers=[2,3,5,7,11,123,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,88,97]

let TwoDivided=primeNumbers.filter(num=>num%2===0);
// console.log(TwoDivided)

// find
let firstEven=primeNumbers.find(num=>num%2===0)
console.log(firstEven)

// find vs filter

// filter returns all the matching elements in an array

// find returns the first matching element in an array and not returns an array

// ------------------ 30-5--------------------------
