// callback function -> function passed as an argument to another function
// why callback functions?
// 1. to make code reusable
// 2. to handle asynchronous operations


// ****** ek toh hai hardcode kardo function ko -> greet(name) -> not use callback function -> that is not reusable
// ****** dusra hai callback function use karo -> fetchuser(callback) -> reusable -> jisko use karna hai function usko pass kar do


// normal function call without callback
// function fetchuser(){ // simulating fetching user from database
//     console.log("fetching user from database...");
//     setTimeout(()=>{
//        console.log("user fetched");
  
       //greet("ani"); // hardcoded function call -> not reusable
   
//     },2000);
// }

// function greet(name){
//     console.log(`hello ${name}`);
// }

// function meet(name){
//     console.log(`nice to meet you ${name}`);
// }

// fetchuser(); 

// -------------------------------------------------------------------------------


// nomal value pass callback
// function fetchuser(callback){ // simulating fetching user from database
//     console.log("fetching user from database...");
//     setTimeout(()=>{
//        console.log("user fetched");
   
//        const name = "ani" // simulating fetched user name from database
//        callback(name); // invoking the callback function
   
//     },2000);
// }

// function greet(name){
//     console.log(`hello ${name}`);
// }

// function meet(name){
//     console.log(`nice to meet you ${name}`);
// }

// // callback -> adv is ki ek bar likhe gaye function ko hum multiple jagah pe use kar sakte hai
// fetchuser(greet); // as a callback function pass
// fetchuser(meet); // as a callback function pass


// -------------------------------------------------------------------------------


// as a object data callback
function fetchuser(callback){ // simulating fetching user from database
    console.log("fetching user from database...");
    setTimeout(()=>{
       console.log("user fetched");
       
       const obj = { // simulating fetched user name from database
        name: "ani",
        age: 22,
        city: "delhi"
       } 
      
       callback(obj); // **** invoking the callback function
   
    },2000);
}

function greet(obj){
    console.log(`hello ${obj.name}`);
}

function meet(obj){
    console.log(`nice to meet you ${obj.name}`);
}

function info(obj){
    console.log(`user details: Name - ${obj.name}, Age - ${obj.age}, City - ${obj.city}`);
}    

// callback -> adv is ki ek bar likhe gaye function ko hum multiple jagah pe use kar sakte hai
// **** jisko callback pass karengai wo function usi hisab se data handle karega in single codebase
fetchuser(greet); // as a callback function pass
fetchuser(meet); // as a callback function pass
fetchuser(info); // as a callback function pass





























