// using default value in pramiter so that if argument is missing result not came Undifined or NaN

function Add(num1=1,num2=1){
    let total=num1/num2
    // console.log(total)
}


Add(5)
// in +/- => use defult paramiter 0
// in *// => use defult paramiter 1
// in string => use defult paramiter ''
// in object => use defult paramiter []
// in {} => use defult paramiter {}
//  mainly defult data type most likely use for your non-primitive data type and it's basacically depend on you pramiter data type .

//  Function type

// 1. function expression

const add1=function(num3,num4){
return num3+num4
}
 let ans=add1(5,8)
//  console.log(ans)


 

//  Arrow function

let divided = (Num1,Num2) => Num1/Num2;  /*  Num1/Num2 this part is  expression and
 return part.*/

let ans2=divided(9,3);
// console.log(ans2)

// annoymous function 

//  document.getElementById('btn').addEventListener('click', () =>{
//     console.log("print something")
//  })

//  empty function
const squre=x=>(x*x);
// console.log(squre(9))

// spread 

let num=[2,5,96,565,12]
// console.log(...num)

// use of spread
// max type operation from an array

let maxNum=Math.max(...num)
// console.log(maxNum)

// copy an array and also push or something operation

let Digit=[5,6,8,4,96,4,50];

let newDigit=[1255,...Digit,89]
newDigit.push(47)
// console.log(newDigit)

// you can also use this in a object

// const person = { name: 'Parmisan', age: 25 }
// const employee = { designation: 'dev', ...person }
// console.log(employee)


// you can use this in function also
let sumation1=(p,q)=>p+q;

let Digit1=[4,50];

console.log(sumation1(...Digit1))