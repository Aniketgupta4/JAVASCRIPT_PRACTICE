// see in quotes -> events in javascript -> button click karne se kuch hoga

// events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can respond to them. Examples of events include user interactions like clicks, key presses, mouse movements, and form submissions, as well as system-generated events like page load or network responses.
// In JavaScript, events are typically handled using event listeners, which are functions that are called when a specific event occurs on a particular element. You can add event listeners to HTML elements using methods like addEventListener().


// mouse click event -> jab user button pe click karega to kuch hoga
// mouseover event -> jab user mouse ko kisi element ke upar le jayega to kuch hoga
// click, dblclick, mouseenter, mouseleave, mousemove

// keyboard events -> keypress, keydown, keyup

// form events -> submit, change, focus, blur

// window events -> load, resize, scroll, unload



// ----------------------------------------------------------------------------------


// project1 -> calculator -> add 2 numbers


const button = document.querySelector('button');
button.addEventListener("click",()=>{

    const input1 = document.getElementById("first");
    const number1 = Number(input1.value);  // data string format pe ayega so convert it into number

    const input2 = document.getElementById("second");
    const number2 = Number(input2.value);

    const result = number1 + number2;
    const re = document.getElementById('result');
    re.textContent = "Result:"+=result;
})




// ---------------------------------------------------------------------------------


















































