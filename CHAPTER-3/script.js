// non primitive data types -> array, object, function


// 1) arrays (type is object) -> collection of multiple values in a single variable
// array is implement in form of object internally

let fruits = [10, "apple", "banana", "mango", "grapes"];
console.log(fruits);
console.log(typeof fruits); // object
 

// 2) objects -> key value pairs
// ek object ke andar hum kisi bhi type ke data ko store kar sakte hain
// ek type ka info store karte hain about a particular entity user and 1 baar pe data mil jata hai in key value pair
// **** by key we get value in object which we cant get in array
// 1 barr mai info milegi bar bar req ni karne padegi performance increase

let person = {
    name: "John",
    age: 30,
    isMarried: false,
    hobbies: ["reading", "traveling", "swimming"]
};

console.log(person);
console.log(typeof person); // object
console.log(person.name); // accessing value using key
console.log(person.hobbies[1]); // accessing array value inside object




// 3) functions -> block of code designed to perform a particular task
// function is also a type of function in javascript

// store function in a variable
let fun = function(){
    console.log("hello");
}

fun(); // calling the function
console.log(typeof fun); // function



// type conversion

let myVar = 34;
console.log(myVar);
console.log(typeof myVar); // number    
// convert number to string
myVar = String(myVar);
console.log(myVar);
console.log(typeof myVar); // string 

// or

let a = "10"
let b = Number(a);
console.log( typeof a);
console.log( typeof b);

// or

let str = "123abc";
let num = Number(str);
console.log(num); // NaN
console.log(typeof num); // number


// or

let booleanVar = true;
console.log(typeof Number(booleanVar));

// or

// **** 0
let x1 = null;
console.log(Number(x1)) // 0



// undefined -> NAN
 
let x2;
console.log(Number(x2));

// or

let ab = 20;
console.log(typeof String(ab)); // "20"


// or

let bs = true;
console.log(typeof String(bs)); // "true"


// or

let bg = "true";
console.log(typeof Boolean(bg)); // "true"
console.log(Boolean(bg));  // true


// or

let bg1 = "";
console.log(typeof Boolean(bg1)); // "true"
console.log(Boolean(bg1));   // false







// 2) operators

 // operator precedence
 // divide multiply left to right
 // add sub left to right
 

 console.log(3 + 2); // 5
 console.log("3" + 2); // "32" -> string concatenation
 console.log(2*4+5-8); // 5
 // this is bekar way to solve
 // start using brackets
 
 console.log((2*4)+ (5-8)); // 5
 

 // modulus operator -> % -> gives remainder
    console.log(20%3); // 2 -> remainder


 // post increment operator -> ++
 let inc = 10;
 inc++;  
 console.log(inc); // 11

 // post decrement operator -> --
 let dec = 10;
 dec--;
 console.log(dec); // 9 

 // pre increment operator -> ++
    let preInc = 10;
    ++preInc;  
    console.log(preInc); // 11

    // pre decrement operator -> --
    let preDec = 10;
    --preDec;
    console.log(preDec); // 9


// ex ->
// post increment -> old value do then value inc karo
let sum = 10;
let total = sum++; 
console.log(total); // 10    
console.log(sum); // 11


// pre increment -> value inc karo then new value do
let sum1 = 10;
let total1 = ++sum1; 
console.log(total1); // 11    
console.log(sum1); // 11

// similarly for decrement pre and post decrement



// assignment operators -> =, +=, -=, *=, /=, %=

let assign = 10;
assign += 5; // assign = assign + 5
console.log(assign); // 15

// similarly for -=, *=, /=, %=




// comparision operator

let g = 2;
let h = 2;
console.log(g==h);


let g1 = 1;
let h1 = 2;
console.log(g1==h1);



let g2 = 5;
let h2 = 2;
console.log(g<h);


let g3 = 5;
let h3 = 2;
console.log(g>=h);

let g4 = 5;
let h4 = 2;
console.log(g!=h);


// **** type conversion karta hai internally then compare
let g6 = "5"; // string convert into number
let h6 = 5;
console.log(g6==h6); // true -> type ko check nahi karta



let g7 = "10";
let h7 = 5;
console.log(g7>=h7); // true -> type bhi check karta hai


// check type then value
let g5 = "5";
let h5 = 5;
console.log(g5===h5); // false -> type bhi check karta hai


let g8 = 5;
let h8 = 5;
console.log(g8===h8); // true -> type bhi check karta hai


// RULES -> 

// 1) **** NULL == UNDEFINED -> true sirf ek dushre ke equal hote hai baki kisi ke equal ni hote hai
// 2) NULL === UNDEFINED -> false
// 3) NaN == NaN -> false
// 4) NaN === NaN -> false
// 5) **** NaN is not equal to anything including itself


// ****** in both case type conversion occurs null becomes 0 and comparsion occurs
// 6) NULL >= 0 -> TRUE
// 7) NULL <= 0 -> TRUE
  
// 8) **** NULL == UNDEFINED -> true sirf ek dushre ke equal hote hai baki kisi ke equal ni hote hai
//      isme type conversion ni hua because null is object and undefine is undeifne so unequal

// 9) undefined comparsion
    console.log(undefined==0)
   // all conditions false >= <= and all 

// 10) **** nan == nan -> false

 
let c = 123;
let d = "123";
let f = 123;
console.log(c==d==f); // false beacuse c==d true and true==123 is false


let v = true
let n = 2
console.log(v==n)




// logical operators

// && both true then true
let age = 18
let money = 432
console.log(age>=18 && money>200)


// || any true then true
let age1 = 18
let money1 = 432
console.log(age>=19 || money<200)


// ! opposite kardo

let sums = 100
console.log(!(sums==100))




// bitwise operator 

// 4 = 100  &  5 = 101  = 100 (4)
console.log(4&5)

// 11 = 1011  |  14 = 1110 = 1111(15)
console.log(11|14)

// xor 
console.log(5^7)

// 5 * by 2 power 3 
console.log(5<<3) // left shift


// rigth shift
//20 divide by 2 power 2
console.log(20>>2)
