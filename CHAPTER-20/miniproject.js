// har 4 second pe new quote ajaye

const quotes = [
  "Honesty is the Best Policy",
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success doesn’t just find you; you have to go out and get it.",
  "Dream big and dare to fail.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does — keep going.",
  "Believe you can and you're halfway there.",
  "Your limitation — it’s only your imagination.",
  "Sometimes later becomes never. Do it now.",
  "Dream it. Wish it. Do it.",
  "Success is not in what you have, but who you are.",
  "Small progress is still progress.",
  "Work hard in silence, let success make the noise.",
  "It always seems impossible until it’s done.",
  "Do something today that your future self will thank you for."
];


function generatecode(){

let text = document.getElementById("quote")

const index = Math.floor(Math.random()*quotes.length);
text.innerHTML =  quotes[index];

}

setInterval(generatecode,4000);






// change background color in 2 sec

function generatecolor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}


let box = document.getElementsByClassName("container")

setInterval(()=>{
    const op = generatecolor();
    box[0].style.backgroundColor = op;
},2000);