// promises in js

// promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.
// A promise has three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.



// async task : fetching weather data from an API -> fetch browser ka inbuilt function hai jo ki promises return karta hai so that we can handle asynchronous data fetching easily.



// -> normal way of fetching data
// bohot waiting ke baad hi hume data milta hai

// const data1 = fetch(`http://api.weatherapi.com/v1/current.json?key=a01087e550a141c795d84332250411&q=London&aqi=yes`)
// console.log(data1); // Promise {<pending>} -> initially the promise is in pending state





// -> using promises to handle the fetch operation
// promises(.then and .catch) are used to handle the response of the fetch operation. -> promise bolta hai mai apko data lake dunga jo bhi meko milega ya ni milega
// ****** use multiple then but use only 1 catch at the end to handle errors
// .json() bhi ek async task hai jo ki promise return karta hai ***** -> ye body ko json me convert karta hai

const data = fetch(`http://api.weatherapi.com/v1/current.json?key=a01087e550a141c795d84332250411&q=London&aqi=yes`)
// data pe value agyi hogi tabhi .then wala function chalega means fullfill warna nahi chalega pending or rejected state me hi rahega
data.then((response) => {  // callback function linkhe hai
    const res = response.json()  // **** this is also a async task -> response.json() bhi promise return karta hai ****
   
    res.then((data)=>{    // so again apan .then use karengai and handle the data
        console.log(data);
    })

}).catch((error) => {  // agar promise reject ho jata hai to ye catch wala function chalega
    console.log('Error:', error);
});



// or -> same chiz hai using chaining of promises


// const res2 = data.then((res)=>{
//     return res.json()  // again this is a promise
// })

// res2.then((data)=>{
//     console.log("Using second method:",data);
// }).catch((error)=>{
//     console.log('Error in second method:', error);
// });


// or promise chaining ko ek hi line me likh sakte hai


// data.then((res)=>{
//     return res.json()  // again this is a promise
// }).then((data)=>{
//     console.log("Using second method:",data);
// }).catch((error)=>{
//     console.log('Error in second method:', error);
// });


// or


// data.then(res=>res.json())
// .then(data=>{console.log(data)})







// ------------------------------------------





// ****** chapter-26 explanation
// make it little tough



// const cart = ["pizza","noodles","burger","sandwich"]

// function placeOrder(cart,callback){
//     console.log(`talking with zomato`);

//     setTimeout(()=>{
//         console.log(`order placed, waiting for restaurant to accept order`);
       
//           const order = {orderId:"221",food:cart,restaurant:"dominos",location:"jbp"}
       
//         callback(order); // pass order ki baki ko dikha niche
//     },2000);
// }    
// // order niche wale do lena hoga so isko pata ho kya banana hai



// function preparingOrder(order,callback){
//     console.log(`restaurant is preparing your order`);
   
//     setTimeout(()=>{
//         console.log(`restaurant accepted order, preparing your order`);
        
//           const foodDetails = {token:12,restaurant:order.restaurant,location:order.location}
        
//         callback(foodDetails); // pass niche
//     },5000);
// }  


// function pickupOrder(foodDetails,callback){
//     console.log(`order is ready for pickup by delivery person`);
//     setTimeout(()=>{
//         console.log(`delivery person picked up your order`);

//           const droplocation = foodDetails.location

//         callback(droplocation);
//     },3000);
// }    


// // iske badd kuch ni hai so callback ni chahiye isme warna error ayega
// function deliverOrder(droplocation){ 
//     console.log(`order is out for delivery`);   
    
//     setTimeout(()=>{
//         console.log(`order delivered to your home`);
//     },4000);
// }

// **** yahi niche callback se kiya hai kitna confusing hai

// placeOrder(cart,callback)
// preparingOrder(order,callback)
// pickupOrder(foodDetails,callback)
// deliverOrder(droplocation)



// **** complicated code -> ek ke ander ek callback
// **** disadv -> mera control mere pass ni hai yaha so dikkat hai callback hell pe


// ******** callback hell -> and mere pass permission ni hai depend hai uper niche 

// placeOrder(cart,(order)=>{      // order -> ki niche value ja paye
//     preparingOrder(order,(foodDetails)=>{
//         pickupOrder(foodDetails,(droplocation)=>{
//             deliverOrder(droplocation);
//         });
//     });
// });





// -------------------------------------------------------------------------------------------

// promise object syntax

// const pr = new Promise(function(resolve,reject){

// })

// return pr;

// -------------------------------------------------------------------------------------------


// =====> **** correct way to do this

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


// ******** solve by promises -> neat and clean code no dependency on any other -> not use callback hell wala

const prom = placeOrder(cart); // async task hai ayse hi execute ni hoga so promise lagaye .then  
prom.then((order)=>{
    return preparingOrder(order);
})
.then((foodDetails)=>{
    return pickupOrder(foodDetails);
})
.then((droplocation)=>{
   return deliverOrder(droplocation);
})
