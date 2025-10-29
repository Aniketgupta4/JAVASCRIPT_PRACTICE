// 1) create a new element by dom


// i) normal way -> appendChild

// let root = document.getElementById("root");
// let element = document.createElement('li');
// element.innerHTML = "TS";
// root.appendChild(element); // at a time 1 add


  
// ii) make function to add element

function attach(content){
let root = document.getElementById("root");
let element = document.createElement('li');
element.innerHTML = content;
root.appendChild(element);
}

// attach("TS");
// attach("React");




// iii) add multiple elements by -> append


let root = document.getElementById("root");
let element = document.createElement('li');
let element1 = document.createElement('li');
element.innerHTML = "TS";
element1.innerHTML = "REACT";
root.append(element,element1);      // at a time multiple add


// -------------------------------------------------------------


// 2) create a textnode -> means tag ni hote uske sath -> ex -> hello  not  <l1>hello</li>


let txtnode = document.createTextNode("hello guys")
root.append(txtnode);




// 3) create attribute node -> class , id
       // after create -> setAttributeNode karo

const elem = document.createAttribute("id");
elem.value = "first";
// created id="first"

// add id in li -> add id in 1st li
// const li1 = document.querySelector("li")
// li1.setAttributeNode(elem);  

// add id in 2nd 3rd 4th li -> so parent ka access lo sabse pehle and parent ke ander child hai so direct jisko access karna hai karlo access
const parent = document.getElementById("root"); 
parent.children[1].setAttributeNode(elem); // add id



 // -----------------------------------------


 // 4) accessing attributes

   // a) getattributes -> access attributes

 const e1 =  document.getElementById("root")
 console.log(e1.getAttribute("class"));
 console.log(e1.getAttribute("id"));
 console.log(e1.getAttribute("style"));
     
    // b) setattributes

 e1.setAttribute("name","element")
 console.log(e1.getAttribute("name"));

   
   // c) do update by -> setattributes again 
   
 e1.setAttribute("names","elements")
 console.log(e1.getAttribute("names")); 


   // d) removeattribute

   e1.removeAttribute("name");
   console.log(e1.getAttribute("name"));




 // -----------------------------------
 
 // 4) add nodes to the dom


 // a) prepend -> sabse pehle add element

  const parents = document.getElementById("root")
  const elements = document.createElement("li")
  elements.innerHTML = "OPS"

  parents.prepend(elements);


 // b) append -> add at last

  parents.append(elements);



// c) insertbefore -> kahi bich pe dalna ho toh -> take access of jiske uper add karna ho and add it

 const child2 = parents.children[1] // uper wale ka access
 parents.insertBefore(elements,child2) // child2 se baad insert elements
   


// d) replacechild -> replace child

parent.replaceChild(elements,child2);




// e) .innerhtml += -> pehle ka bhi hai and add new one too

const p2 = document.getElementById("root")
parent.innerHTML += "java";
// or
parent.innerHTML += "<li>java</li>";















