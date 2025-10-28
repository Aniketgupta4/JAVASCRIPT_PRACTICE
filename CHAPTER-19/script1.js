// 1) accessing css selectors

// i) single element -> return first element from starting if multiple same class and id is there
        // const id = document.querySelector("#first")

const id = document.querySelector("#first")  // -> #id/.class/tag ->kuch bhi de shakte hai
id.innerHTML = "hello"
id.style.color = "white"

const id2 = document.querySelector(".header2")
id2.style.backgroundColor = "pink"



// ii) multiple element -> give list of all elements
          // const id = document.querySelectorAll("#first")

const ids = document.querySelectorAll(".header1")

 // iterate by multiple ways
ids.forEach((val)=>{   
    val.style.color = "red";
})

// or

for(let val of ids){
    console.log(val);
}

// or

for(let i=0;i<ids.length;i++){
    console.log(ids[i]);
}

// ----------------------------

// convert obj into array and apply any operation -> push pop and all

const arr = Array.from(ids)
console.log(arr);

// ----------------------------



//  iii) 

 const obj = document.querySelectorAll("ul li")
 console.log(obj);

 obj.forEach((val)=>{   
    val.style.color = "red";
})



// iv) accessing by tagname

const li = document.getElementsByTagName("li")
console.log(li);   // all h1 tags in html page

console.log(li[0]);  // accessing single li

for(let val of li){  // accessing all li one by one
    console.log(val);
}


  // => convert into array and apply -> push pop and all

 const a = Array.from(li)
 console.log(a);


// v) accessing using relationships
      // ******** elements wale are more reliable to perform dom manipulation

     // a) parent node -> find parent

    const o = document.querySelector("li") // child
    console.log(o.parentNode); // give nodelists
    console.log(o.parentElement); // give htmlcollections


    // b) child node -> find child

    const m = document.querySelector("ul") // parent
    console.log(m.childNodes) // -> give child and text -> means double ho jayega -> 4 child hai so 9 print hoga one extra -> give nodelists

    console.log(m.children) // -> only children print -> give htmlcollections


 
    
    // c) first and last child

    console.log(m.firstChild) // node print hoga
    console.log(m.lastChild)

    console.log(m.firstElementChild) // html element print hoga
    console.log(m.lastElementChild)


 
 
// 6) innerHTML vs textContent vs innerText

const aa = document.getElementById("first")
console.log(aa.innerHTML); // -> actual html dega -> tag wagera sab
console.log(aa.textContent); // -> text print hoga bs -> display none hoga phir bhi print hoga
console.log(aa.innerText); // -> text print hoga bs -> wo screen pe visible hai
