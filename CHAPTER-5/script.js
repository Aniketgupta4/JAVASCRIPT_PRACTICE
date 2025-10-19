// string in js

// => previous class 

// in primitive data type value not change while using const
// direct value change hori hai so ni hoga in const
const a = 10;
console.log(a);
//a = 20;  show error not do this in const 
console.log(a);



// in non primitive data type value can change while using const
// it is allow beacuse yaha refernce same hai value change hori in heap 
const obj = {
    name: "John",
    age: 30
};

console.log(obj.age)
obj.age = 32;
console.log(obj.age)



const obj2 = {
    name: "Johs",
    age: 40
}

//obj  = obj2 // not allow  beacuse refernce change hora hai -> so error ayega


// ------------------------------------------------------------------------------------------



// 1) string in js

let str1 = "hello guys"
let str2 = 'i am'
let price = 5000
let str3 = `kya haal chall ${5000} dede yr`
console.log(str1,str2,str3)


// contanetation

let str4 = "hello"
let str5 = "sam"
console.log(str4+str5)

// length
console.log(str4.length)


// print ' ' and " "
console.log('"hello baby"')
console.log("'hello baby'")

//  \n -> to get next line
let msg = "poplu ho tum yr. \n but acche ho tum yr"
console.log(msg)


//  print \n too -> with escape character -> \ -> \\n so ab \n print hoga special character print hoga by use \

let msg1 = "poplu ho tum yr. \\n but acche ho tum yr"
console.log(msg1)


// print any char in string
let special = "Rohit"
console.log(special[0])
console.log(special.charAt(1))


// upper and lowercase -> original string doesnt change as it is rahega -> it return new string
console.log(special.toUpperCase())
console.log(special.toLowerCase())


// searching in string

let hero = "hello coder army coder"
console.log(hero.indexOf("coder")) // first char index return
console.log(hero.lastIndexOf("coder")) // last char index return 
// if not present anything then return -1
console.log(hero.includes("coder")) // true of false return


// substring

let newstr = "helloooo"
// differnece -> **** slice can take -ve index also 
console.log(newstr.slice(0,5))
console.log(newstr.slice(-6,-2)) // starting index pehle aye ending se  
console.log(newstr.substring(0,5))



// replacing content

let str10 = "hello ji kaise ho ap log ji"
console.log(str10.replace("ji","bhai")) // sirf 1 baar replace karta hai agar multiple hai toh

console.log(str10.replaceAll("ji","bhai")) // all replace



// spilt -> convert into array based on , and all

let str11 = "money,honey,sunny";
console.log(str11.split(","))

let str111 = "money!honey!sunny";
console.log(str111.split("!"))


// trim

let str12 = "  hello ji   "
console.log(str12.trim())



// new way to create string -> with new keyword

let lateststring = new String("hello")
console.log(lateststring)
console.log(typeof lateststring) // object



// **** normal way se string create memory allocate in stack and by new keyword it store in heap and type is object now
// ****** itni sari properties as a object behaviour se ati hai

let str42 = "hello"
let str24 = new String("hello") // key value ke pair pe store hoti hai and give multiple properties of object too
console.log(str24 == str42)
console.log(str24 === str42)


