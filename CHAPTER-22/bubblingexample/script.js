// **** optimised way -> event bubbling -> see image1
// jab hum kisi parent element pe event listener lagate hai to uske sare child elements pe bhi wo event listener kaam karta hai -> isse memory bachta hai -> fast ho jata hai
// **** image2 -> 3no (child,parent,grandparent) pe event listeners lagaye -> child pe click kare toh parent and grandparent bhi print hongai but sabse pehle child print hoga then parent then grandparent -> isse event bubbling kehte hai 

// event capturing -> opposite of event bubbling -> grandparent pe click kare toh parent and child bhi print hongai but sabse pehle grandparent print hoga then parent then child

// how to decide event bubbling chaiye ya event capturing -> mostly event bubbling use karte hai kyuki wo natural flow hai by default event bubbling hota hai  

// see example of event bubbling and event capturing in gpt -> image3 bubbling and image4 capturing

// **** addEventListener(first_event,callback,capture) -> capture false so bubbling and bydefault false hota hai so bubbling and capturing karna hai so true kardo

// **** console.log(event.target) // -> ye hume batata hai ki kis element pe click hua hai child parent  or grandparent


const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

outer.addEventListener('click', function() {
  console.log('Outer box clicked!');
  alert('Outer box clicked!');
},false);

middle.addEventListener('click', function() {
  console.log('Middle box clicked!');
  alert('Middle box clicked!');
},false);

inner.addEventListener('click', function(event) {
  console.log('Inner box clicked!');
 // **** console.log(event.target); // -> ye hume batata hai ki kis element pe click hua hai child parent  or grandparent
  alert('Inner box clicked!');
},false);


// -----------------------------------------------------------------------------------

// **** agar bubbling wagera stop karna chate hai toh use
// event.stoppropogation()

inner.addEventListener('click', function(event) {
  console.log('Inner box clicked!');
  event.stopPropagation(); 
  alert('Inner box clicked!');
},false);