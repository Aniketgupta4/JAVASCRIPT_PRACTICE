// arrays in js

const arr = [3,5,2,6,8,"rohit",function(){},obj={name:"aniket"}];
console.log(arr);
console.log(arr.length);
console.log(arr[7])
console.log(arr[7].name)
console.log(arr.at[1])    // adv -> new and -ve index bhi le leta hai


const newarr = arr
console.log(newarr)

// see image1
console.log(arr==newarr) // true -> beacuse ref copy



// see image2 -> beacuse we create clone in memory so new address reference copy hoga in arr
//console.log(arr=structuredClone(newarr)) // false




const arr1 = [20,5,2,6,8,"rohit",function(){},obj={name:"aniket"}];

// push -> atlast

console.log(arr1.push(4))
console.log(arr1)

// pop -> last element pop remove

console.log(arr1.pop())


// add in start -> unshift

console.log(arr1.unshift(1));
console.log(arr1)


// delete form start -> shift

console.log(arr1.shift())


// particular index wala delete -> delete
// **** disadv -> delete but space reserved rahegi like this in output ->  <1 empty item> -> hole created

// delete arr1[0];
console.log(arr1)




console.log(arr1.indexOf(5)) // is index pe kya hai
console.log(arr1.lastIndexOf(3)) // same from last
console.log(arr1.includes(2)) // ye hai ki ni return true or false


// slice -> katna and original array pe change ni hota hai new array pe change hota hai

console.log(arr1)
console.log(arr1.slice(2,6)) // last index not included



// ******** splice -> first value is start and itni value chaiye meko last ka mtlab 
// ******** original array pe changes karta hai
// img3 see

//console.log(arr1.splice(4,4)) 
console.log(arr1)

//  -> splice(start_index , total_elemtn_delete , add_new_value)

console.log(arr1.splice(2,4,200,400,600))
console.log(arr1)




// tostring

console.log(arr1.toString())


// join -> convert in string -> give seperator also

console.log(arr1.join())
console.log(arr1.join(" "))
console.log(arr1.join("->"))




// conctenation

let arr4 = [4,5,2,7]
let arr5 = [6,4,9,8]
console.log(arr4.concat(arr5))

let arr6 = [4,5,2,7]
let arr7 = [6,4,9,8]

// if multiple arrays then , laga ke karte jao
console.log(arr4.concat(arr5,arr6,arr7))


// array in array -> like 2d array
console.log(arr4.push(arr5)) 
console.log(arr4)
console.log(arr4[4][3]) // ye 4th index pe se new array hai so 4 then uska element 3
// see image4




// 2d arrays

let arr8 = [[1,2,3,4],[6,5,4,3],[9,8,7,6]]
console.log(arr8)
console.log(arr8[1][3])



// 3d array -> visual representation -> it is combination of multiple 2d arrays

let ar = [[[1,2,3],[4,5,6]],[[4,3,2],[6,7,8]]]
console.log(ar)
console.log(ar[0][0][1])


// convert 2d to 1d by -> flat()

let ars = arr8.flat()
console.log(ars)

// 3d , 4d , ..... to 1d -> by flat(infinity)

let arss = ar.flat(Infinity)
console.log(arss)


// **** pata karo array hi hai ye 

let abc = [2,1,3,4]
console.log(typeof abc) // object
console.log(Array.isArray(abc)) // array


// drawbag -> new se create array -> single element pe size returns
let ax = new Array(1);
console.log(ax.length) // retrun size i.e. 1

// -> work normal in let ax = new Array(1,3,2,5); -> not recommended to use 



// q1 -> **** in c++ contiguous memory location pe save array in heap -> see image5
      // -> not store in javascript like this -> because isme kisi bhi type ke bhi variable le shakte hai in array -> so dont follow contiguous memory allocation  
      // -> element change kare int to string so space inc hui na 4byte se 8 byte pe so choti se mai bada kaise bich pe ayega so run time pe decide kaha place karna hai not follow contiguos allocation
      // -> array is not in contiguos memory allocation beacuse it is object type
