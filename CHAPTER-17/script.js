//  1) global object -> object

// in js all thing resolve around -> object

// console.log("hello") -> function -> ke ander hello as argument pass
// console.log(Math.random()) -> so Math.random() -> aya kaha se
// setInterval() -> function hai sab -> but kaha se aaray hai ye sab -> kahi toh likhe hue hongai na
// **** jaise c and c++ pe libraries se aate hai chize waise -> in js ye functions global object se ate hai -> isme sab likha hua hai -> anyone can access it -> any functions any thing can access

// **** different different name of global object in diff diff browsers
   
   // chrome browser environment pe -> window bolte hai -> in chrome console we access via -> window.Math.random() or Math.random() both works -> **** all thing is a part of window 
                                       // window direct access deta hai -> Math.random() karlo not ki bar bar window.Math.random() karo
                                       // console.log(window)   
                                       // all thing is in global object -> so ex -> console.log("op") hai so sabse pehle global oobject pe checks ki console.log kya karta hai then prints  
     
    // node js envirnment pe -> global bolte hai
                              // console.log(global) -> in node.js


// **** basically this is confusing diff diff name -> window , global -> in diff diff browser -> confusing so aya -> globalThis -> globalThis.Math.random()
           // **** all browser supports -> **** globalThis._________ -> points global objects



// --------------------------------------------------------------           


// 2) this -> meaning change hote rehta hai jaha pe use hora hai uske hisab se
      // this keyword -> global scope pe this keyword point global object -> see image1    
   

// i) ****in browser -> global scope ka part hota hai jab ayse likhte hai toh -> in console see this part
        // **** sab jagay broswer ke context pe padhate hai toh apan bhi brpwser se context pe samjhe gai
  
   let a = 20;
   console.log(a);
  // console.log(this === window)  // true -> see result in console
  // console.log(this.a)  // also access it

   function op(){  // global scope part
    console.log("op")     // function scope not global scope
   }


           // ------------------------------------------------------------------------

// ii) nodejs points -> **** module's export object -> i.e. {} empty object

    console.log(this); // {} -> this is empty object

           // ------------------------------------------------------------------------


// iii) inside a function -> bydefault function is in non strict mode
     
      // a) non strict mode -> this refers to global object

      function op(){
        console.log(this);
      }
      op();


        // b) strict mode -> write "use strict" ->this will give undefined inside a function
                 // rules and regulations are high in strict mode

       // "use strict"   // **** using latest rules and regulations
        function ops(){
           console.log(this);
         }
        ops();



        // pros and cons
          
          // non strict pe work -> apna let const kuch ni likhe toh
          a = 10;
          console.log(a)

          // **** strict mode show error -> so use let and const
          let v = 10
          console.log(v)

          // non strict mode pe error show ni karta but change bhi ni hota hai thik
          let obj = {
            name:10
          }
          Object.freeze(obj);
          obj.name = 20;
          console.log(obj);

          
          // ****   strict mode pe error show hoga thik
         
         // "use strict"
          let objs = {
            name:10
          }
          Object.freeze(objs);
          objs.name = 20;
          console.log(objs);


// -------------------------------------------------------------------------

// basics ****

 // "use strict"
 function o(){
    console.log(this);
 }       
 o(); // this point to function 
 // window.o(); // **** here this points to global object i.e. window



//     iii) inside a method (object context) -> when this id ised inside objects method it refers to objects that owns the method

        const ob = {
            name:"aniket",
            age:20,
            greet:function(){
                console.log(this);   // this points to object i.e. ob
              //  console.log(name); // **** not do ayse beacuse this points to obj se do -> show error
                console.log(this.name) // work
            }
        }
        ob.greet(); 

// **** samjhe isi liye ob.greet() kare ki this point ob ke greet ko kare na ki window ko kare

 // ----------------------------------------------------



 // 4) **** arrow function doesnt have their own this
//       instead they inherit this form the surroundings lexical scope


 let obs = {
    name:"aniket",
    age:20,
    greet:()=>{  // not have thier own this gives window object
        console.log(this)
      //  console.log(this.name)  // **** ni kar shkte hai beacuse this ni hai arrow function ke pass
    }
 }

 obs.greet(); // **** // not have thier own this gives window object




// 4.1)  obj -> function -> arrow function 
      // arrow function points to objss

 let objss = {
    name:"aniket",
    age:20,
    greet:function(){ 

          let ab = () => {
            console.log(this)  // points to object i.e. objss
          };

          ab();

    }
 }
// **** arrow wala -> function() greet se lega and greet ke pass this hota hai that point to object -> so arrow also points to this -> objss




// 4.3) inside a constructor or class
       // in constrcutors and classes this refers to the instances of the object being created

    class person{
        constructor(name,age){
            this.name = name; // this points to p1
            this.age = age;   // this points to p1
        }
    }   

  //  let p1 = person("Aniket",20);  // this points to p1
  //  console.log(p1);


// ----------------------------------------------------------------------
    
   // => let and const in not a part of global object its a part of block scope -> **** where as var is a part og global object -> ** var sirf function ke ander global object ka part ni banta
   // => global wale access anywhere in whole code
