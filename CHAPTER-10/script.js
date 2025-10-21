 // objects 2nd class (10)


 // function inside object
 
 let user = {
    name:"rohit",
    amount:420,
    greet : function(){
       return "hello"
    },
    meet : function(){
       return 20;
    }
 }

 console.log(user.greet());
 console.log(user.meet());





 // ************** prototype chaining
 // do in console

// const arr = [10,20,30];
// arr.__proto__
// iske ander har ek property available hai jo hm array pe apply karte hai
// **** but ye sab property kaha se aya and hm inko use kar shakte hai
// ex -> push pop length etc

// **** when we create a array -> const arr = [3,2,5,1] -> toh bohot sari properties aa jati hai -> see it by using -> arr.__proto__
// same for objects too -> const obj = {} -> obj.__proto__ -> pata chal jayega kitni properties hai hm unko use kar shakte hai 


// example of change prototype in js -> one can access another properties 

const o1 = {
    name:"ani",
    age:24
}

const o2 = {
    salary:2345653,
    package:23456789876
}

console.log(o2.name) // o2 cant access o1 property

// now o2 can access properties of o1 also 
o2.__proto__ = o1;  // -> basically o2 inherit property of o1
console.log(o2.name)  // o2 access o1 properties


// ****** basically normal arr we created it inherit all properties from original array 
// arr.__proto__  -> ayse inherit kare properties ko
// Array.prototype -> original Array jaha se inherit karta hai normal wala arr
// see image1 -> prototype chaining


// **** basically arr.__proto__ ka bhi ek prototype hota hai -> arr.__proto__.prototype
// and object ka and ka proto ka prototype are same
// arr.__proto__.__proto__ and object.prototype.__proto__ and Array.prototype.__proto__  all are same
// see image2 -> prototype chaining


// **** see image3 -> prototype chaining

// ex

let arr = [1,2,4,3]
console.log(arr.__proto__ == Array.prototype)
console.log(arr.__proto__.__proto__ == Object.prototype)
console.log(arr.__proto__.__proto__.__proto__ == null) // 3rd time pe proto ni hota hai
console.log(Array.prototype.__proto__ === Object.prototype)
