// functions

// v8 engine google chrome ke pass hai isne object ko alag type se implement kiya hai and mozila firefox ke engine ka naam hai spidermonkey so iske object ko alag type se implement kiya hoga
// function sabke wali rehte hai jo object ke hote hai but implement alag type se karte hai sab log

// ex =>

// let obj = {
//     name:"aniket",
//     age:24
// }

// console.log(obj.name)

// isko memeory pe manage kaise karna hai , access kaise karna hai and all -> isko v8 and spidermonkey diff diff type se managa karengai 
// internally implementation diff diff hongai per result same dengai





// => ****** basic implementaion in memory -> internal of v8 may be

// -> see image1 -> ki data ek sath in heap ni rakh shakte kyuki name age sath pe rakhe and -> name modify hua thoda bada naam hua so age ko shift karna hoga ya age pe override karna hoga -> that is problem
// so various optimization techniques we uses to solve this problem -> **** ki sath mai ni rakh shakte hai
// **** use hashing -> see image2
        // **** by hashing modulo we can easily allocate data in memory and get the data in 0(1) time
        // disadv -> hash collision -> ki jo index fill hai and wahi pe new value rakhna hai so -> solution we do chaining store only reference (address) in that index and kahi pe store kardo data ko -> see image3
        // **** so kya karengai ki jaise name and age hai so apan inko mathematical function se number pe convert karke hashing ka use karengai and then store in memeory -> see image4





// 2) function

function f1(){
    console.log("hello")
}

f1();


const f = function f2(){
    console.log("baby")
}

f(); 


// arrow function 
const f3 = (a,b) =>{ // parameter 
    return a+b;
}

console.log(f3(2,4)); // argument pass

// or

const f4 = (a) => a*a;
console.log(f4(2));

// or -> for 1 parameter not use ()

const f5 = a => a*a*a;
console.log(f5(2));


function mul(a,b){
    console.log(a*b);
}

mul(2,4);


const f2 = function(){
    console.log("hello")
}

f2();



// ni pta kitne parameters ayegai -> **** use rest or spread operator to handle it
 const sum = function(...number){
    console.log(number);
 }

sum(2,3,4,5,6,7); // kitne bhi arguments pass kar shakte hai




let obj = {
    name:"aniket",
    age:20,
    amount:420
}

function fun(obj1){ // yaha pe aya fun(obj) -> obj and we use it as obj1
    console.log(obj1.name,obj1.age)
}

fun(obj); // pass whole object

// or

function fun({name,age}){ // destructring objects
    console.log(name,age) 
}

fun(obj); // pass whole object




// ****

const a = function(){
    return 5;
}

// see image5

// **** a.__proto__ -> iska syntax itna tough is liye hai kyuki jab kisi ko iska a.__proto__ use karna ho tabhi wo kare warna ayse hi wo na use kare dhoke se

// a.__proto__
      // dono same same hai because apan a function inherit kara hoga Function se
// Function.prototype

// a.__proto__.__proto__



// -> change prototype 

let obj1 = {
    a:1,
    b:2
}

let obj2 = {
    c:3,
    d:4
}

obj2.__proto__ = obj1; // **** not do this too costly
console.log(obj2.__proto__)

// do this 

obj2 = Object.create(obj1)
console.log(obj2)