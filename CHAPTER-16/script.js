// js is syncronous and single threaded language

// ---------------------------------------------------------------------
// ******* 1)

// console.log(x)  // undefined
var x = 10;


// console.log(y);  // before initialization not access
let y = 8;


// -> how js works -> execute ?

// see image1
// -> execution context create hoga -> and isme memory and code part hota hai 
// -> variable ko memory allocation hoga and code runs
// -> memory allocate hoga in memory pe -> so x = undefined hoyega thik var wale and let const wale normal likhegai x :  and memory allocate only
// -> see image2 -> then code ka execution code part pe hoga -> line by line code execute hoga -> and print value in screen


// -----------------------------------------------------------------------------------

// 2) js is syncronous and single threaded language

 // **** single threaded -> 1 baar mai 1 instruction execute hogi 

 // **** syncronous -> line by line not random

 
 // ----------------------------------------------------------------------------


 // 3) reason behind this -> see image3
  
 // console.log(x)  // undefined
 // var x = 10;

 // console.log(y);  // before initialization not access
 // let y = 8;

  // **** memory phase 
  // kya hoga yaha ki x : undefined -> initialize hogya hai memory allocate hogi hai
  // per y :    -> y initialize ni hua hai and memory allocate hogi hai
 
  // code phase
  // console wale chalengai ab yaha -> so x is undefined and y is not initialized and show error
  

  // **** reason ki x and y are in temporal dead zone memory allocate but initialze ni hua hai sab so we cant access it and show error while accessing

// ------------------------------------------------------------------------------------------------


// **** temporal dead zone -> let and const wale -> x and y are in temporal dead zone

// -> x and y ko memory allocate hogi hai per jab tak value initialize na kar di jaye tab tak ye temporal dead zone pe rehte hai
// -> jaise hi x and y pe value ayi wo temporal dead zone se bahar ajate hai
// -> jab tak temporal dead zone pe hai tab tak access ni kar shkte hai -> error ata hai
  
// -------------------------------------------------------------------------------------------------


// 4) **** hoisting -> only concept -> internal aysa work hai ki ni nahi pata kisi ko

   // **** sabse top pe declaration chale jayengai or hoga
   // baki sab normal work hoga
  
   // ex -> 
      
     // normal code
        
    //   console.log(m);
    //   let z = 10;
    //   console.log(n);
    //   var m = 20;
    //   let n = 40;
    //   console.log(m);
    
     
    
    // hoisting code -> sabse top pe declaration chale jayengai or hoga
  
       let z;
       var m = undefined;
       let n;
    
      console.log(m);   // undefined
      z = 10;
      console.log(n);   // undefined
      m = 20;
      n = 40;
      console.log(z);    


 // -------------------------------------
 // **** for functions
 // see image4 (memory phase) 
 // then image5 (stack) -> basically whole code of execution context is in stack -> gec -> and **** function ka ek alag se execution context banega -> beaucse function ke ander multiple variables are their -> see image6
 // then image7 (code phase) -> execuation phase new banega for function and sab work hoga and result ayega
 // -> **** kya hoga ki sabse pehle execution phase banega then memory pe wo hoga declare a,b,add,ans -> then function aya toh new execution phase banega -> in code wale pe -> and isme num1 num2 memory pe declare hoga then code pe sab calculate hoga and result return karega in bade wala memory pe ans 
 // work in stack -> image8 -> after execution stack stack delete memory release
 
 // -------------------------------------

 // -> **** understand this -> why greet work and meet show error -> hoisting concept
 // ex -> 

 greet();
 function greet(){
    console.log("hello");
 }

 // memory allocation hoga -> greet : function wala code 
 // code execute -> function ka code yaha execute hoga -> isi liye chal ra hai code


 //  meet();  // reference error
 let meet = function(){
    console.log("yo")
 }

// memory allocate hoga to let keyword wale ko empty 
// meet : 
// code execution phase -> give error beacause meet is empty -> Cannot access 'meet' before initializatio




// or -> **** let ki place pe var hua toh  
 
 //  meets();  // not a function error
 var meets = function(){
    console.log("yo")
 }

 // memory allocate hoga to var keyword wale ko  
// meets : undefined in var case 
// code execution phase -> give error beacause meets is undefined -> meet is not a function beacuse it is undefined 



// => see image9 -> visualize in inspect->sources->snippets -> write code -> save -> add debugger image10 and image11 (in scripts -> value unavailabel in let and value undefined in var) 
// call stack ke ander sab code hoga -> line by line visualize by arror  <- ->
// after execution -> all thing empty -> call stack 




// -> **** so first memory allocate then code executes
// -> **** multiple functions -> so multiple executions phases banegai
// -> **** hoisting is just a concept not implementation


