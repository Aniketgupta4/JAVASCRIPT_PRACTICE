// advance loops

let obj = {
    name:"aniket",
    gender:"male",
    age:23,
    city:"jbp"
}

// iterate over keys and get values
for(let key in obj){
  //  console.log(key,obj[key])
}

// or -> do same work by both ways

//console.log(Object.keys(obj))


// ----------------------------------------------------------------------------------------------------

// -> **** problem ye hai ki -> ye karne se value bhi print kyu ni hori hai -> and obj hai jo wo main Object se inherit kara hoga multiple properties so ye value kyu ni print karra hai

for(let key in obj){
 //   console.log(key)
}

// ----------------------------------------------------------------------------------------------------



// create prototype -> obj2 inherit all properties of obj 

let obj2 = Object.create(obj);
obj2.money = 420;
obj2.id = "ani";
//console.log(obj2.name);   // access obj properties too
//console.log(Object.keys(obj2)); // **** only have access of money and id(khud ki properties) not have access of inherited walo ka

// ********** have access of inherit walo ka bhi and money and id ka bhi(khud ki properties)
for(let key in obj2){
  //  console.log(key);
} 


// --------------------------------------------------------------------------------
// 2) key value writable enumerable configurable

let objs = {}
//console.log(objs)

objs.name = "aniket";
//console.log(objs)

// **** if we create key value then bydefault add some properties
// **** see all properties of name
//console.log(Object.getOwnPropertyDescriptor(obj,'name'))

// a) writeable: true -> means we can change values -> if false then we cant change values

objs.name = "shan";
//console.log(objs)


// b) configurable : true -> we can change writable and enumerable values -> if false then we cant change value of writable and enumerable


// we self create and assign these values

let obj1 = {}
// aa) // if all true then we can change values and all

// Object.defineProperty(obj1,'name',{
//     value:"aniket",
//     writable:true,
//     enumerable:true, 
//     configurable:true
// })
// obj.name = "ani" // we can change value here because writable:true
//console.log(obj1)


// ab) so ab hm value change ni kar shakte

// Object.defineProperty(obj1,'name',{
//     value:"aniket",
//     writable:false, 
//     enumerable:true, 
//     configurable:true
// })

obj.name = "ani" // **** we cant change value beacuse writable:false
// console.log(obj1)



// ac) if configurable:true then -> we can modify all properties writable enumerable and configurable

// Object.defineProperty(obj1,'name',{
//     value:"aniket",
//     writable:false, 
//     enumerable:true, 
//     configurable:true
// })

// Object.defineProperty(obj1,'name',{
//    writable:true      // if configurable:true -> we can make changes
// })



// ad) if configurable:false then we cant modify any property

// Object.defineProperty(obj1,'name',{
//     value:"aniket",
//     writable:true, 
//     enumerable:true, 
//     configurable:false
// })

// Object.defineProperty(obj1,'name',{
//    writable:false      // if configurable:false -> we can not make any changes
// })




// ********* real world use case -> account number never change of any person
// name and account_no koi bhi change ni kar paye
// so writable access false kardo of name and account_no -> or -> configuration false kar shakte hai but ni karegai warna age and balance bhi update ni kar shkte na dont do this 
// baki age and balance toh update ho shakti hai 
const p1 = {         // p1 ka allocation in stack 
    name:"aniket",
    age:24,
    account_no:34568987654,  // baki properties ka allocation in heap
    balance:76543
}

Object.defineProperty(p1,'account_no',{   // **** if writable:false -> we can not make any changes -> in account_number
   writable:false                        // as writable is false in key -> acccount-no so we make changes in other properties but not do changes in account_no
})

Object.defineProperty(p1,'name',{  // name bhi change ni kar shakte hai
   writable:false  
})    



// c) **** enumerable 

const customer = {
    name:"aniket",
    age:24,
    account_no:123,
    balance:2000
}


Object.defineProperty(customer,"name",{
    enumerable:false
})

// ********** jiska bhi enumerable true hai sirf ye loop unhi ko bs print karega & inherit hoke bhi jo ate hai unka bhi jnika enumerable true hoga usi bs print karega ye loop
// enumerable false hai toh ni kar shakta print usko ye for loop
// see image1 -> for loop working for enumerable -> 1 by 1 iterate and print karega us key ko jiska enumerbale true otherwise false wale ko print ni karega and for inheritance
for(let key in customer){
    console.log(key);
}


// ------------------------------------------------------------------------------------------------------------------------------------------------------


// => check kisi ka enumerable true hai ya false hai

console.log(Object.getOwnPropertyDescriptor(Object.prototype,"toString"));

// we also make enumerable true agar false hai toh

Object.defineProperty(Object.prototype,'toString',{
  enumerable:true,
})


// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// => **** for in loop -> array -> ke sath ni lete hai 
// beacuse array is object so we add property in it ex -> arr.name = "aniket" -> so it print index ki place pe name 
// ******** reason ye hai name as index print hone ka ki -> for in loop check enumerable true ya false -> if enumerable true hai name and sab ka so ye print kar dera hai
const arr = [1,2,3,4,2,1];
arr.name = "aniket"     // index ki place pe name print karra hai -> index ni print karra hai 
for(let key in arr){
    console.log(key,arr[key]);
}

// use basic loop with array not use for in loop -> it only print key not print "name" direct in place or index
// ----------------------------------------------------------------------------------------------------------------------------------------------------------



// ****** myth -> so bolte hai hacking se bachne ke liye ni hai -> agar hacker ko code mil gya so wo manually changes kar shakta hai na
// **** ye sirf is liye hai ki -> accidental changes se bach paye bs

let user = {
    name:"aniket",
    age:30
}

console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user,"name",{
    writable:false,
});

user.name = "ani";  // **** not change beacuse writable is false
console.log(user.name);

console.log(Object.getOwnPropertyDescriptor(user,"name"));



// for of loop -> values access -> access array and string value directly
// *** dont use for of loop with object

let arrss = [4,3,2,5,6,8]
for(let value of arrss){
   console.log(value);
}


let str = "aniket is good boy";
for(let value of str){
   console.log(value);
} 



// **** not use with object for of loop -> because object is not iterable -> object pe agar key number hai so usko string pe convert karke sequence wise arrange karta hai so ye iterable ni hai means decide ni hai ki kaha jana hai kaha ni 
// * object is not iterable

const objs = {
    name:"aniket",
    age:24
}

    // show lamba sa error
// for(let value of objs){
//    console.log(value);
// }