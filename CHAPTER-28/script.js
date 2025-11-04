// async and await


// create a promise -> so dont write callback -> write resolve 
const cart = ["pizza","noodles","burger","sandwich"]


function placeOrder(cart){
    console.log(`talking with zomato`);

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
           console.log(`order placed, waiting for restaurant to accept order`);
       
           const order = {orderId:"221",food:cart,restaurant:"dominos",location:"jbp"}
       
           resolve(order); // pass order ki baki ko dikha niche
        },2000);
        
    })

    return pr; // promise return karta hai
    
}    
// order niche wale do lena hoga so isko pata ho kya banana hai



function preparingOrder(order,callback){
    console.log(`restaurant is preparing your order`);
   
    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
          console.log(`restaurant accepted order, preparing your order`);
        
           const foodDetails = {token:12,restaurant:order.restaurant,location:order.location}
        
          resolve(foodDetails); // pass niche
        },5000);

    })
  
     return pr; // promise return karta hai
}


function pickupOrder(foodDetails,callback){
    console.log(`order is ready for pickup by delivery person`);
   
    const pr = new Promise(function(resolve,reject){

          setTimeout(()=>{
            console.log(`delivery person picked up your order`);

            const droplocation = foodDetails.location

            resolve(droplocation);
         },3000);

    })

     return pr;
}    


// iske badd kuch ni hai so promise ni chahiye isme
function deliverOrder(droplocation){ 
    console.log(`order is out for delivery`);   
    
    setTimeout(()=>{
        console.log(`order delivered to your home`);
    },4000);
}



// do this by async await -> ki placeorder(order) jabtak execute na ho tabtak niche wale execute na ho -> so use async await
// await mtlab ki wait karte rehna jab tak value na a jaye
// **** but await ayse use ni kar shakte hai so isko ek async function pe use karo


// **** easy format then chaining se previous class se
async function greet(){

  const order = await placeOrder(cart)
  const foodDetails = await preparingOrder(order)
  const droplocation = await pickupOrder(foodDetails)
  deliverOrder(droplocation);

}

greet();






// ---------------------------------------------------------------------------

// 1) .then and .catch

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello")
    },5000)
})

p1.then((response)=>console.log(response))



// or



// 2) async and await -> async always with function


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello")
    },5000)
})
async function greets(params){
    const data = await p2; // rok ke rakhe ga niche walo ko ni chalne dega jab tak data pe data na ajaye
    console.log(data);
}

greets();



// ---------------------------------------------------------------------------

// question -> ek sath kyu print hue dono

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello")
    },5000)
})
async function greetss(params){
    const data = await p3; // rok ke rakhe ga niche walo ko ni chalne dega jab tak data pe data na ajaye
    console.log(data);

    const data1 = await p3; // **** yaha pe 5 sec kyu wait ni kara direct print kyu kar diya
    console.log(data1);
}

greetss() // -> **** ek sath dono data ayega wait ni karega 5 sec 

// ********* simple -> kyuki promise resolve ho chuka hai -> so kyu wait karna direct answer milgya ek baar so 2nd time direct return sath mai



// --------------------------------------------------------------

// question -> sath print hongai ya nahi

const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello")
    },5000)
})


const p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello")
    },5000)
})

async function greeting(params){
    const data = await p4;
    console.log(data);

    const data1 = await p5; 
    console.log(data1);
}

greeting() // -> **** p4 and p5 pe 5 sec pe value ajeyei then greeting call hua so data and data1 pr 5 sec pe video ajeyagi -> and print sath mai
           // ********** myth -> await parallel pe ni chalte hai in function ke ander -> wo pehle se hi parallel pe alag alag chalte hai 


// ------------------------------------------------------------------------------------------------------------------------------
// **** agar .then and .catch -> use karray hai so example 2 hai 8000 wala and 5000 wala -> so 5000 wala pehle print hoga then 8000 wala
// **** and in async and await pe pehle 8000 wala print hoga then 5000 wala print hoga kyuki 8000 wala ke baad wale pe bhi await likha hai so wait karega then execute hoga 8 sec hua then 5 sec then print           
// -----------------------------------------------------------------------------------------------------------------------------


// -> question -> function ke ander likhe hai
function test1(){
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("resolve 1st promise")
        },5000)
    })
    return p1; // return promise
}


function test2(){
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("resolve 2nd promise")
        },5000)
    })
    return p2;  // return promise
}



async function gf(){
    const data1 = await test1();  // return promise
    console.log(data1);

    const data2 = await test2();  // return promise
    console.log(data2);
}

gf();

// ********* -> 1st 5 sec baad ayega and 1st ke 5sec baad 2nd ayega -> because 
              // -> gf() call (pe promise resolve hona suru karega)-> sabse pehle execute data1 ko then 5 sec baad 2nd wala execute hoga 
              // -> ****** happens due to functions



// -----------------------------------------------------------------------------------


 // **** async function return promise and khud se convert kar dega into promise -> jaruri ni hai ki syntax likho promise ka   
 // **** async function always return promise -> agar kuch ni hai so undefined print karta hai
async function meet(){
    return "always return promise";  // khud se convert kar dega into promise -> jaruri ni hai ki syntax likho promise ka   
}

meet().then(value=>console.log(value))


