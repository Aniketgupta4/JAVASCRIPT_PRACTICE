// memory mgmt in js   

 
let a = 10;
let b = a;
console.log(b);
console.log(a);
b = 30;
console.log(b);
console.log(a);
// **** normal jispe changes hue hai uska value only change this is due to primitive data type -> immutable


// 1) **** actual diff b/w primitive and non primitive data types
// primitive is -> immutable (value cant be change)
// non primitive are -> mutable (value can be change)

// ex of object

let obj1 = {
    id:20,
    naming: "rohit",
}

let obj2 = obj1;

console.log(obj1);
console.log(obj2);

// change in obj2

obj2.id = 30;

console.log("after change");
console.log(obj1);
console.log(obj2);
// ********** both obj1 and obj2 change ho gaye kyuki dono same memory location ko point kar rahe the
// ********** non primitive data types are stored in heap memory and variable me us heap memory ka address store hota hai jo stack me hota hai


// 2) **** memory mgmt -> in js

 // a) STACK AND HEAP MEMORY

    // primitive data types are stored in stack memory
    // non primitive data types are stored in heap memory


    // ex -> of stack and heap memory

//   1  2   3  4  5    sugar bags 

// way1  shop  ->  |  |  |  |  |   (heap memory - sugar bags stored here)
//            1  2  3  4  5   (stack memory - address of sugar bags stored here)

// way2 shop  -> random yaha waha rakh do in shop
                 ///////////////////
                 //  1     3      //
                 //     4        //
                 //  5     2     //
                 /////////////////  


 // => memory is in 2 parts stack and heap
 
 /////////////////////////////
 //            /           //
 //            /          4 //
 //            /   5        //
 //            /           // 
 //     5       /        2   //
 //     4       /          // 
 //     3        /  1        //
 //     2        /           //
 //     1        /       3   //
 //////////////////////////////
 //   stack       // heap

 // -> primitive data type store in stack
 // -> non primitive data type store in heap 
 
 // **** why ?
 // 



 // => **** working in memeory


 // case 1 -> for primitive
 //  let a = 10;
 //  let b = 30;
 //  let c = a; and c= 50 then change only reflect in c -> call by value

 ////////////          ////////////
//         //          //        //  
//  c = 10 //          //        //
//  b = 30 //         //         //
//  a = 10 //          //         //
/////////////          ///////////// 
  // stack               // heap

  // image 1 dekho


  // case 2 -> non primitive 


   //  let a = 10;
   //  let b = 30;
   //  let obj1 = {id:20, name:"rohit"}

 //////////////          /////////////////
// obj1 = 6282//  ->    // {id:20,     //  
//  c = 10 //          // name:"rohit"//
//  b = 30 //          // }           //
//  a = 10 //          //             //
/////////////          /////////////////  
  // stack               // heap  

// -> obj1 in stack store memory address of heap jaha pe store hai wo 
//   
// ---------------------------------------------------------------------------------------------------------------------------------------------------
//  => ******* image 1 is call by value and image 2 is call by reference 
//      as in image2 obj1 = obj2 hua -> so call by reference hua so address store hoga and dono mai changes refelct hongi in non primitive
// ---------------------------------------------------------------------------------------------------------------------------------------------------
//


//
//  =>         RAM 8GB  (1 byte = 8 bit)
//          1gb = 1024 mb = 2^10 mb
//          1mb = 2^10 kb
//          1kb = 2^10 byte 
//          1gb = 2^30 byte
//     so , 8gb = 2^33 byte 
//    **** it is byte addressable(means each box have one byte) and total 2^33 byte  -> not take bit bacause it is too small
//
//   //////////////////////////////     
//   //  /  /  /  /   /  /  /  /  //
//   //  /  /  /  /   /  /  /  /  //
//   //  /  /  /  / 28 (30 ml) /  //
//   //  /  /  /  /   /  /  /  /  //  RAM 8gb
//   //  /  /  /  /   /  /  /  /  //
//   //  /  /  /  /   /  /  /  / //
//   //  /  /  /  /   /  /  /  / //
//   //  /  /  /  /   /  /  /  / //
//   //////////////////////////////
// 
//   store address -> let a = 28  i.e. 30 (memory location)
//                    access easily 
//  ***** basically memory address hota hai so usko find karna easy ho jata hai
//  ***** suppose 2 -> 28 hai alag alag place so kisko find karna hai kaise pta chalega by memory location 
// 
//
//
//
// b) **** primitive data types are immutable (cant be change) values 
//   ex -> let a = 10;
//             a = 50;

//  -> **** so ye new memory location pe store karega value purani location ko chor dega -> so it is immutable not override in old place pe

////////////////
//   a=10   X //      
//   a=50      //
//             //
/////////////////


// same in stack

 //////////////          /////////////////
//  a = 50   //          //             //
//obj1 = 6282//    ->   // {id:20,     //  
//  c = 10 //           // name:"rohit"//
//  b = 30 //           // }           //
// X a = 10 //          //             //
/////////////           /////////////////  
  // stack (80mb)           heap(980mb)
//     fast                    slow
// 
//  -> **** reason is -> a = 10 hai and a ki place pe bada value dalna hai so dikkat hai so aysi place ho insert karo jaha pe khali space ho so new place pe insert karte hai at top of stack 
// 
// 
//  c) **** bascially when we download movie refernce banata hai downlaod ka and if we delete then reference delete hota hai and we recover it
//      -> jaisi ki cyber wale nikal lete hai deleted chats ko bhi
// 
//       //MOVIE//   ---->      ////////////////
//                              //   movie    // movie is in 01 form
//                              ////////////////
// 
//    delete -> refernce hata diya so we cant access 
//        //MOVIE//             ////////////////
//                              //   movie    //  movie is in 01 form
//                              ////////////////
//   -> see picture 3 -> concept ki bulb on while downloading movie and when bulb off karne pe time lagega so reference delete kar do movie wahi pe padi hai any one use it and space free hogyi ab                      
// 
//           
// 
// 
// 
// 
// 3) **** why non primitive ko heap pe memory dete hai ?
//    -> beacuse stack get less memory and heap memory is greator
//    -> and array objects(big size a/c to us) pe changes hongai so jyada memory lagega so inko heap pe rakhte hai
//    -> whereas int char float have fixed size -> so stack pe chalgea 
//    -> **** if bohot big string (primitive data type) hai so isko heap pe memory allocate karayega naki stack pe manage by internally v8 engine and all
// 
// 
// 
//  4) pubg hai so kya kaise memory manage hoga
//     
//               // PUBG // (16gb )
//                            \
//   // 8GB //              ///////////
//    RAM                   //  pubg  //
//  load in ram        <-   //        // 
//                          ////////////
//       |                 secondary storage
//                             128gb
//   small small 
//   chnuks pe load karega jitna use karna hai utha hi
//   and jab jarurat ni hai usko hatao and new load karo 
//   jiski jarurat hai usko so itna bada pubg run in small ram in chunks form
// 
// 
//   5) address kaha pe store hote hai in memory i.e. virtaul address store hote hai and virtually calculate karta hai 
//      see image4 
//
//
//     6) koi bolra hai ki a = 10 hai yahi pe a = "sham" karna hai so isi place pe so jyada time lagega yr 
//         firstly isko ab jyada space chaiye so next block extra chiaye hoga iske baad wala so isko aage walo ko or aage shift karna hoga t&c increase 
//        -> so best solution ki top of stack pe put karo jisko update karna hai usko
//        -> see in image 5
//
//      
//  7) **** atlast when program executed memory releases at last
//
//