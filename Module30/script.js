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

