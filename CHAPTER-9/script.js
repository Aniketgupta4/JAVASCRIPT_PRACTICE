// objects in js
// objects are in key value pair

// 1) create object -> easy and most of the work is in object in js
// **** "key" = key -> key as a string hi dubug karta hai internally
// 2 way to write key -> "salary" or salary

const obj = {
    0:30, // as a string store hogi and obj["0"] ayse access hogi
    name:"aniket",
    age:25,
    "salary":200000,
    gender:"male",
    "acc num":23456789, // alag alag ko " " isme hi likhange tab hi access hoga [" "] isme se
    cgpa:[9.8,8,9.5,8,9,8.9],
    undefined:40, // convert first in string and key ka naam hai ye sirf
    null:"sham"    // convert first in string and key ka naam hai ye sirf            
}

console.log(obj)
console.log(obj.salary)
console.log(obj["age"]) // in string format

console.log(obj.null) //accessing key named as null
console.log(obj.undefined) // ccessing key name as undefined
console.log(obj[0]) // convert internally into string
console.log(obj["0"])
console.log(obj["acc num"]) // only way to access this type -> "acc num"
console.log(obj.cgpa[2])



console.log("-------------------------------------------------------")




// array as an object -> so array ka typeof is object
// **** array internally store in key value pair see image1 and same here object stores
// isko hm contiguous memory location pe locate ni kar shkte -> same array pe bhi ni kar shakte because array works like objects

// **** this is internal implemntaion of array too -> const arr = [20,30,40]
const obj1 = {
    0:30,
    1:35,
    2:40,
    length:3
}

console.log(obj1[1])


const arr = [20,30,40]
console.log(arr[0])
console.log(arr.length)
                     // **** same implementaion same working since array implementaion is like objects
console.log(obj1[0])


// -----------------------------------------------------------------------------------------------------------------------------

// => image 2 -> ki object ka implementaion pta hai ek sath ni rakh shakte in memory because mutlple data types use karshkte haiin single object 
     // same array ko as a object implement karegai beacuse array in js works same as objects and array internally depend on arrays

// -----------------------------------------------------------------------------------------------------------------------------

