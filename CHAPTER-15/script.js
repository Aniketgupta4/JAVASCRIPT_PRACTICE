// reduce , set , maps


// 1) reduce -> reduce array element in 1 

const arr = [4,2,6,8,1,5];
const result = arr.reduce((num,sum)=>{
    console.log(sum,num); // visualize working
    return sum+num;
},0)  // 0 is initial value of sum -> optional

console.log(result);


// **** real world use case ex -> obj return kare ki orange:4 , apple:2 etc

let ar = ["orange","apple","mango","orange","mango","mango","orange"]

const res = ar.reduce((acc,curr)=>{ // acc = {} and curr = orange then maongo and so on 
     if(acc.hasOwnProperty(curr))  // agar acc {} isme orange hai so usko ++ kardo -> warna +1 kardo add kardo in acc {}
        acc[curr]++;
    else
        acc[curr]=1;

    return acc;  // **** jo return karogai wahi value acc ke ander jati hai
},{}) // answer {} object pe chaiye so empty value se initialize acc = {}

console.log(res);


// ------------------------------------------------------------------------------------------------------------

// => hasownproperty -> true false pe answer return karta hai -> ki ye exist karta hai ki ni

  let obj = {
    name:"aniket",
    age:10
  }

  console.log(obj.hasOwnProperty("name"))
  // or
  let op = "subject"
  console.log(obj.hasOwnProperty(op))
  
  // -------------------------------------------------------------------------------------------------------------

  
  // sets -> collection of unique values -> of any typw

  const set = new Set([1,2,4,5,6,2]);
  console.log(set);  // only unique values print

  console.log(typeof set); // **** object
  

  const set1 = new Set();
  set1.add(2);
  set1.add("shan");
  console.log(set1);
 
  console.log(set1.size);
  console.log(set1.delete(2));
  
 // q1 -> user exists in insta or not
  
 const user_id = new Set(["aniket21","sham_2","raj_23456","shom123"]);
 let new_user = "ani_21";
 console.log(user_id.has(new_user)); // has return true or false
// output is false -> means we use this -> username


// array to set conversion

 let a = [1,2,3,4,5,6,1,2];
 const sets = new Set(a);
 console.log(sets);

 // set to array conversion

 ar = [...sets]; // 1 1 karke set ki value ko lega and put in array
 console.log(ar);


 // union operation in set

 let s1 = new Set([1,2,3,4])
 let s2 = new Set([10,20,30,40])

 let s3 = new Set([...s1,...s2]); // 1 1 larke value ko s3 pe daldega

 console.log(s3);


 // intersection in set -> convert set into array then apply filter -> beacuse filter apply in array

  let s4 = new Set([1,2,3,4])
  let s5 = new Set([1,2,30,40])

  const resu = new Set([...s4].filter((num)=>s5.has(num))); 
  console.log(resu);


 // iterate over set -> use for of loop -> beacuse set has itertor

 for(let value of s5){
    console.log(value);
 }

 // or by foreach

 s5.forEach((val)=> {
    console.log(val);
 })




 // ----------------------------------------------------------------------

 // **** map -> key:value pair -> key (unique) is anything -> and maintain order of insertion
 // map.prototype -> se pata chal jayega kitni property use kar shakte hai isme

  const map = new Map();
  map.set(3,90); // map.set(key,value)
  map.set(4,100);
  map.set("aniket",200)
  console.log(map); 

  map.set("aniket",400)   // **** key must be unique -> value update kar deta hai
  console.log(map); 

  map.delete(3); // key
  console.log(map); 

  console.log(map.has("aniket")); // key

  console.log(map.size);


 // another way to create map

 const map2 = new Map([ // like 2d array
    [2,"aniket"],
    ["shan",8]
 ])

 console.log(map2);


 // for of loop in maps -> 1 small array of 2d array value pe aata hai 

 for(let value of map2){
    console.log(value);
 }

   // or destructure it -> then use key and value 

 for(let [key,value] of map2){
    console.log(key,value);
 }  

 
 // -------------------------------------------------------------

 // **** difference between object and maps

 // object -> keys : string or symbol

 // maps -> keys : number , string , object

 // -------------------------------------------------------------








