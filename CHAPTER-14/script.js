// **** call back function ->  ek function call kare and usme kisi dushre function (as a reference) ko argument pe pass kare i.e. callback function

function name(fun){       // greet function yaha pe aya as a callback
    console.log("hello");
    fun();                // call kara greet ko
} 

function greet(){
    console.log("call back");
}


name(greet); // callback function

// => or direct function likho in call

name(function greet(){       // callback function
    console.log("call back");
})

// or write arroy function as callback function

  name(()=>{        // callback function
    console.log("call back");
  })


  // => real world usecase of callback

  function fetchdata(){  // but ye function har 2 min mai data lake frontend pe show kare thik -> so do setinterval call back function
    // too much code here
    console.log("fetch data");
  }

  // ek function ke ander dushra function pass kare -> i.e. callback function
   //setInterval(fetchdata,5000); // in 5 sec print hoga bar bar



// -------------------------------------------------------------------------------------------

// foreach

// another way iterate in array -> foreach
// foreach also expect callback function
// 1 1 karke value uthata hai foreach loop
let arr = [4,3,2,5,6,8]

// arr.forEach((num)=>{
//      console.log(num);
// })  

// or shortcut

// arr.forEach(num=>console.log(num));

// or 

arr.forEach((num,index,arr)=>{   // callback function with 3 arguments
    arr[index] = arr*2;      // modify our array too
   // console.log(num,index);
}) 

    // or clear way to write for each
 
    let nums = [3,5,2,5,8]
    function prints(num){
     //   console.log(num);
    }
    nums.forEach(prints); 


// ---------------------------------------------------------------------------------------

// filter -> except callback function -> return karana jaruri hai
// return true or false
// pass 3 things arr,index and 1 more things optional hai 2 1 bs mandatory hai 
// **** we cant modify or result

let ar = [2,3,1,4,6,8,3,6,5,7,8];

// const result = ar.filter((num)=>{
//     return num%2==0;
// })

// or

const result = ar.filter((num)=>  num%2==0) // by default return karta hi hai callback function in single line wale pe

// console.log(result);


// ex for filter real world usecase -> filter marks greator than 50

const students = [  // array of object
    {name:"rohan",age:22,marks:80},
    {name:"mohan",age:24,marks:40},
    {name:"sohan",age:21,marks:60},
    {name:"kohan",age:27,marks:20},
    {name:"johan",age:28,marks:90}
]

// const re = students.filter((val)=>{
//     return val.marks>50;
// })


// or destructure the value direct not write val.marks -> direct write marks

const re = students.filter(({marks})=>{
    return marks>50;
})

// console.log(re);


// -----------------------------------------------------------------------------------

// map -> we modify our result -> map result modify karke store karta hai bs
// pass 3 values -> num,index,arr

const ars = [2,4,1,6,2,8,4];
const res = ars.map((num)=>{
  return num*num;
})

console.log(res);


// --------------------------------------------------------------------

// find even number and store their square
const arrs = [4,3,2,5,6,7,8]
const r = arrs.filter((num)=> num%2==0).map((num)=>num*num); // do multiple chaining here
console.log(r);

// --------------------------------------------------------------------


// reduce





