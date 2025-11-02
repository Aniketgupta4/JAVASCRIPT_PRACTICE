// event bubbling

// background color change on button click
// *** not optimised way -> repetitive code 

// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');

// red.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });

// blue.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'blue';
// });

// orange.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'orange';
// });

// green.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'green';
// }); 

// purple.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'purple';
// }); 

// --------------------------------------------------------------


// another way -> but not optimised


// const buttons = document.querySelectorAll('button');
// const body = document.body;

// buttons.forEach((button)=>{ // ye loop wahi kaam karega jo uper hora hai -> memory lega har baar -> not optimised -> slow ho jayega
//     button.addEventListener('click', ()=>{
//         body.style.backgroundColor = button.id;
//     })   
// })


// --------------------------------------------------------------


// **** event bubbling -> see image1
// jab hum kisi parent element pe event listener lagate hai to uske sare child elements pe bhi wo event listener kaam karta hai -> isse memory bachta hai -> fast ho jata hai
// **** image2 -> 3no (child,parent,grandparent) pe event listeners lagaye -> child pe click kare toh parent and grandparent bhi print hongai but sabse pehle child print hoga then parent then grandparent -> isse event bubbling kehte hai 

// event capturing -> opposite of event bubbling -> grandparent pe click kare toh parent and child bhi print hongai but sabse pehle grandparent print hoga then parent then child

// how to decide event bubbling chaiye ya event capturing -> mostly event bubbling use karte hai kyuki wo natural flow hai by default event bubbling hota hai  

// see example of event bubbling and event capturing in gpt -> image3 bubbling and image4 capturing

// **** addEventListener(first_event,callback,capture) -> capture false so bubbling and bydefault false hota hai so bubbling and capturing karna hai so true kardo

// **** console.log(event.target) // -> ye hume batata hai ki kis element pe click hua hai child parent  or grandparent



// --------------------------------------------------------------------


// **** event deligation -> optimised way
// jab humare paas bahut sare similar elements hote hai jinke upar hume event listener lagana hota hai to hum unke parent element pe event listener lagate hai and usme check karte hai ki kis child element pe click hua hai -> isse memory bachta hai -> fast ho jata hai

// **** parent pe laga diye listener (child pe click karengai so by bubbling wo parent pe ayega hi) -> jispe sare child elements ke liye kaam karega -> jispe click karengai wo pata chal jayega event.target se

// const root = document.getElementById('root');
// root.addEventListener('click',(event)=>{
//     document.body.style.backgroundColor = event.target.id; // .id se color pata chal jayega
// })

// **** all good per jab -> h1 pe click karengai toh black bg hojara hai  
// h1 click karne se kuch na ho -> so how to handle it 
// use if else statment ki button hai tabhi bg change karo warna na karo


// so ab h1 click karne se kuch ni hoga problem solve
const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
    if(event.target.tagName === 'BUTTON') // tagName se pata chal jayega ki konsa element hai      
    document.body.style.backgroundColor = event.target.id; // .id se color pata chal jayega
})



// --------------------------------------------------------

// **** agar bubbling wagera stop karna chate hai toh use
// event.stoppropogation()


