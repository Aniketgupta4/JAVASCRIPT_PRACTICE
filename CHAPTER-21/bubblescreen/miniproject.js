// project -> bubble in screen

document.body.addEventListener("click",(event)=>{
  // create div ki circle bane click karne se

  const circle = document.createElement('div')
  circle.className = 'circle'; // add class circle in div
  

  // jaha pe click kare waha pe circle bane 
  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = `${x-25}px` // -25 karne se bs yahi hoga ki jaha pe click kare gai waha center ajayega circle ka and create hoga circle and 25 because css pe 50 px h and w hai
  circle.style.top = `${y-25}px`
  

  // random background color
  const color = ["red","blue","orange","green","purple","teal","yellow","wheat"];
  circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

  // set multiple messages
  const messages = ["hi","hello","welcome","hey there","you"];
  circle.textContent = messages[Math.floor(Math.random()*messages.length)];


  document.body.appendChild(circle);

  setTimeout(()=>{  // 5 sec baad remove hote jayega
    circle.remove();
  },5000);

})