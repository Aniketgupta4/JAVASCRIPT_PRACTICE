// DOM -> with js we dynamically manipulate -> kisi ko click karne se kuch ho
// **** document -> se hi ab lena dena hai apan ko -> html ka code inside document
// window -> document -> html page -> (ek ke ander ek hai)

// window.document -> isme puri file hoti hai html ki

// DOM -> is a way to represent a web page so that programs can interact with us

// we cant do calculation with html and css so requireemeent of js is there
// **** browser turns our html page into object and and js know how to manipulate js object
// see image1 and image2,2.1 -> all thing is object
// all things in html would store in dom tree as treat as objects -> see image3 

// **** har ek element ko treat kiya jayega as object in js

// **** see image4 -> do changes in html by dom -> easily as change in objects -> obj.innerhtml = "op"


// ******** basically html pe direct js apply ni kar shkte toh -> html converts into dom tree (objects) ke form pe by browser -> and in objects we easily make changes in it by js

// **** console.dir(document) -> too see all thing inside document


// ------------------------------------------------------------------------------------------------------------



// 1) accessing element in dom

// document.getElementById("first")
// or
// document.getElementsByClassName("first")
// or
// document.getElementsByTagName("h1")


// typeof obj is object -> and obj have multiple properties with it -> see it by -> obj.__proto__ -> all properties inside obj is in key value pair
const obj = document.getElementById("first")
obj.innerHTML = "Hello Aniket"
obj.style.color = "teal"
obj.style.backgroundColor = "white"
obj.style.textAlign = "center"

obj.className = "op"    // className 
console.log(obj.className)  

obj.id = "ops"      // id
console.log(obj.id)
































