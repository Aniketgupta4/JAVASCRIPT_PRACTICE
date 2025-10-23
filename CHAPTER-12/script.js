// if else


//  let age = 16;   
//  if(age>=18){
//      console.log("adult")
//  }else{
//     console.log("not adult")
//  }   


 // if else if else


// let ages = 15;
//  if(ages<18){
//     console.log("kids")
//  }else if(ages>45){
//     console.log("old")
//  }else{
//     console.log("young")
//  }



 // switch
 // **** strict check -> "0" not equal to 0

// switch(new Date().getDay()){
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break; 
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;    
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;   
//     case 6:
//         console.log("saturday");
//         break;  
//     default:
//         console.log("not a valid day");        
// }




// loops

// const i=0 -> so isme error ayega beacuse of const
// ***** js in slower beacuse for every i new memory allocate -> slow and bekar

// for(let i=0;i<10;i++){
//     console.log(`hello ${i}`);
// }


// sum of first n natural number

// let sum = 0;
// for(let i=0;i<=10;i++){
//     sum+=i;
// }

// console.log(sum);



// nested for loop

// for(let i=0;i<5;i++){
//     console.log(`hello ${i}`);
//      for(let j=0;j<5;j++){
//        console.log(`hi ${j}`);
//   }
// }



// while

// let i = 0; // initialization
// while(i<10){  // termination condition
//     console.log(`hello ${i}`);
//     i++;    // increment / decrement
// }



// array element access

let arr = [5,3,9,1,7]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}


// for object

const obj = {
    name:"aniket",
    age:30,
    amount:420,
    city:"burhar"
}

const value = Object.values(obj);
const key = Object.keys(obj);
console.log(key,value);

// or

for(let i=0;i<key.length;i++){
    console.log(obj[key[i]]);   // print values
}


// ---------------------------------------------------------------------------------------------------------------------------------


// scope

let a = 1;
var b = 2;
const c = 3;

// all have global scope -> anyone and anywhere can access these variables in program

// console.log(a)
// console.log(b)
// console.log(c)



// local scope / functional->  function ke ander bs hota hai access inka

function op(){ 
    let aa = 4;     // inka scope only inside function -> iske bahar se access ni kar shakte inko
    var bb = 2;
    const cc = 3;
}

//console.log(aa,bb,cc); // not access


// block scope -> {} access inside this only
{
    let dd = 8;
}

//console.log(dd); // not access



// ****** not use var beacause -> same name ke kitne bhi variable bana shakte hai -> not good -> error prone
// let const ke sath aysa ni hota hai -> error show direct 

var os = 5;
var os = 6;


// let as = 5;  // show error ki same name ke ni bana shakte hai multiple       
// let as = 5;

// **** we can also use variable of var before initialization -> answer is undefined always but access karna per -> not access in let and const
// ex -> 
// console.log(ac)
// var ac = 1; 


// so use let and const not use var



// call function pehle in this type -> work -> define hone se pehle we use it


// ops()
function ops(){
    console.log("hello")
}



// not work in this way of function -> error show -> we cant use define karne se pehle
// beacuse variable pe value store karray hai liye

// meet()

const meet = function(){
    console.log("hello")
}



// ---------------------------------------------------------------------------------------------------------------------------------