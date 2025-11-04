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

// explain this in chapter-27

 // -------------------------------------------------------------------------------
 

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


// -------------------------------------------------------------------------------

// next class

// -> sync execution context ka stack -> one by one execute hota hai
// see image1 -> image2 -> image3 -> then after execution call stack deletes these functions from stack -> image4 -> after execution global excution context is deleted from stack



// -> async execution context ka stack
// web apis -> part of browser(browser is multi threaded) not part of js engine

//  image5 (apis) -> apis are part of browser not part of js engine
//         -> client are of diff diff types so set of rules bana diye ki particular format pe puchegai server se and server particular format pe answer dega
//         -> req to api and api res to us -> ye sab browser handle karta hai -> jab response aata hai to browser usko callback queue me daal deta hai -> (callback queue) -> ye callback queue bhi browser ka part hai js engine ka part ni hai -> fir event loop check karta hai ki call stack empty hai ki ni -> agar empty hai to callback queue se function uthake call stack me daal deta hai -> (call stack) -> fir js engine usko execute karta hai -> fir call stack se delete kar deta hai

 // image6 -> async working -> image7 ki settimeout is a part of webapi not par of js -> image8 so async walo ko web api handle karta hai ki 5 sec hogya -> fir callback queue me daal do -> image9 fir event loop image10 check karta hai ki call stack empty hai ki ni -> agar empty hai to callback queue se function uthake call stack me daal deta hai -> fir js engine usko execute karta (stack pe finally) hai image11 -> fir call stack se delete kar deta hai
 //                                                                                                                     **** image12 -> so ye bar bar hoga web api se 5 sec baad callback queue pe jayega then call stack empty uspe jake execute then again 5 sec baad yahi hoga kyuki settimeout baar baar call ho raha hai               

// **** why callback queue -> callback queue me jane ke liye bhi kuch rules hote hai jese ki settimeout me time complete hona chahiye tabhi callback queue me jayega -> agar time complete ho gaya but call stack busy hai to fir bhi callback queue me hi rahega jab tak call stack empty ni hota -> fir event loop usko uthake call stack me daal dega
//                         -> callback ni hai so race around condition arise ho sakti hai ki kaunsa pehle call stack me jayega -> isliye callback queue me jane ke bhi kuch rules hote hai jese ki settimeout ka time complete hona chahiye tabhi callback queue me jayega


// ******** -> so event listeners are also part of broswer because ye multiple work at a time a karte hai -> jese button click karna -> ye bhi callback queue me jata hai fir event loop uthake call stack me daal deta hai jab call stack empty hota hai -> browser is multi threaded so ye sab kaam kar pata hai ek time pe multiple kaam kar pata hai and dom is part of broswer so ye event listerners at a time multiple handle kar pata hai
//  see image13 image14 image15 image16 -> ki event listenr hai 10 baar click kar diye so is flow pe chale ga ye


// fetch example async

console.log("script start");

fetch('https://jsonplaceholder.typicode.com/posts/1')  // ye bhi web api ka part hai browser ka part hai js engine ka part ni hai
    .then(response => response.json())
    .then(data => console.log(data));
 
console.log("script end");

// **** image17 -> data ane mai time lag shakta hai to ye async hai -> to ye fetch call web api handle karega -> image18 jab data aa jayega to ye microstack queue me jayega -> fir event loop uthake call stack me daal dega jab call stack empty hoga -> fir js engine usko execute karega -> and first priority of event loop is microstack queue -> fir callback queue
// **** microstack queue example -> ***promises based functions hamesha microstack queue me jate hai -> jese ki fetch me then use kiya hai to ye microstack queue me jayega  