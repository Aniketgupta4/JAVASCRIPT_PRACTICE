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



// way to create object -> 2nd way -> not recommened to use this methods

const person = new Object(); // object constructor -> at start it is empty object

person.name = "aniket";
person.age = 25;
person.gender = "male";

console.log(person)

//delete person.age; // delete key value pair
//console.log(person)

person.age = 26; // update value of key
console.log(person)


// **** => object as a reference store hota hai -> means agar ek object ko ek variable me store karte hai and uske baad us variable ko dusre variable me store karte hai to dono variable same object ko point karenge -> dono me change same object me hoga -> store reference in stack


const person1 = person; // person1 and person point to same object in memory
person1.age = 30; // change in person1 will reflect in person
console.log(person.age); // 30
console.log(person1.age); // 30




// ******** in first way to create object -> we have to write key value pair again and again for multiple objects
// ****** 3rd way to create object
// adv -> easy to create multiple objects using class

class Person{
    constructor(names,ages,genders){ // pehle isme values ayengi jo hmne pass kari hai 
        this.name = names;    // this refer to current object -> person2.name  then this.name = person2.name and so on
        this.age = ages; 
        this.gender = genders;
    }
}   
    
const person2 = new Person("sham",28,"male");
console.log(person2)
const person3 = new Person("rita",24,"female");
console.log(person3)




// **** access values of object

let objs = {
    name:"aniket",
    age:25,
    account_balance:5000,
    gender:"male"
}

// returns keys of object as array
console.log(Object.keys(objs)) // [ 'name', 'age', 'account

// or

Object.keys(objs).forEach((key)=>{
    console.log(`Key is ${key} and value is ${objs[key]}`);
})


// key value both return -> in 2d array form

const arr2 = Object.entries(objs);
console.log(arr2) // [ [ 'name', 'aniket' ], [ 'age', 25 ], [ 'account_balance





// assign use case

const obj5 = {a:1,b:2};
const obj6 = {c:3,d:4};

// const obj8 = Object.assign(obj5,obj6); // but object5 is changed -> beacuse first value as a target lete hai so correct it give empty object ki isme changes ho
// console.log(obj5) // isme bhi channges ho jaye -> correct it use {} in first

// const obj8 = Object.assign(target,source);
const obj8 = Object.assign({},obj5,obj6);
console.log(obj8)



// spread operator -> same use as assign

const obj9 = {...obj5,...obj6}
console.log(obj9)





// -----------------------------------------------------

// ***** new keyword se banao kuch toh -> object hi hota hai 
// new keyword hai -> so memory allocate in heap and as a object hoga internally implement

const a = new Number(1);
console.log(typeof a)

const b = new String("op");
console.log(typeof b)


