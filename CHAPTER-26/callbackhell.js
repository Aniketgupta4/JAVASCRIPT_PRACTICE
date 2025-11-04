// call back hell
// suppose dominos se order kaar rahe hai 

// function placeOrder(){
//     console.log(`talking with zomato`);

//     setTimeout(()=>{
//         console.log(`order placed, waiting for restaurant to accept order`);
//     },2000);
// }    


// function preparingOrder(){
//     console.log(`restaurant is preparing your order`);
   
//     setTimeout(()=>{
//         console.log(`restaurant accepted order, preparing your order`);
//     },5000);
// }  


// function pickupOrder(){
//     console.log(`order is ready for pickup by delivery person`);
//     setTimeout(()=>{
//         console.log(`delivery person picked up your order`);
//     },3000);
// }    


// function deliverOrder(){
//     console.log(`order is out for delivery`);   
    
//     setTimeout(()=>{
//         console.log(`order delivered to your home`);
//     },4000);
// }

// // **** ye karne se sab uper niche ho jayega -> so use callback
// // placeOrder()
// // preparingOrder()
// // pickupOrder()
// // deliverOrder()


// // ******** using callback -> ab sab acche se work hoga
// placeOrder(preparingOrder(pickupOrder(deliverOrder())));




// -------------------------------------------------------------------------------

// by proper callback functions

function placeOrder(callback){
    console.log(`talking with zomato`);

    setTimeout(()=>{
        console.log(`order placed, waiting for restaurant to accept order`);
        callback();
    },2000);
}    


function preparingOrder(callback){
    console.log(`restaurant is preparing your order`);
   
    setTimeout(()=>{
        console.log(`restaurant accepted order, preparing your order`);
        callback();
    },5000);
}  


function pickupOrder(callback){
    console.log(`order is ready for pickup by delivery person`);
    setTimeout(()=>{
        console.log(`delivery person picked up your order`);
        callback();
    },3000);
}    


// iske badd kuch ni hai so callback ni chahiye isme warna error ayega
function deliverOrder(callback){ 
    console.log(`order is out for delivery`);   
    
    setTimeout(()=>{
        console.log(`order delivered to your home`);
        //callback();
    },4000);
}


// calling the functions with proper callback nesting -> callback hell
// **** disadv -> readability kam ho jati hai code ki
//             -> jitne bhi functions hai unko alag alag team manage karegi -> to coordination me problem ho sakti hai -> dependency badh jati hai ki wo callback ko sahi jagah pe pass karein and karega ki ni faase hue hai
//             -> error debug karna mushkil ho jata hai               
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
});

 // -------------------------------------------------------------------------------
 
 // next class pe or ache se padhegai

 // **** js is a single threaded language (one by one and one task at a time) -> ek time pe ek hi kaam kar sakta hai
 // but js behaviour ko asynchronous(kuch time baad) bana deta hai kuch functions ke through -> jese setTimeout, API calls, file reading etc


 // sync
 console.log("script start");
 console.log("doing some sync work");
 console.log("script end");


 // async
 console.log("script start");
    setTimeout(()=>{     // **** ye js ka part ni hai ye browser(web api) ka part hai jo async kaam karta hai
        console.log("doing some async work");
    },2000);
 console.log("script end");





 