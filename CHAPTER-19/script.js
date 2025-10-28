// timer project

// basic code

// const timer = document.getElementById("root")
// const now = new Date();
// const indiantime = now.toLocaleTimeString();
// timer.innerHTML = indiantime;

// timer.style.fontSize = "200px";
// timer.style.display = "flex";
// timer.style.height = "100vh";
// timer.style.alignItems = "center";
// timer.style.justifyContent = "center";





// modified code -> khud se changes hoga time each second pe

function timing(){
const timer = document.getElementById("root")
const now = new Date();
const indiantime = now.toLocaleTimeString();
timer.innerHTML = indiantime;
}


setInterval(timing,1000);


const timer = document.getElementById("root")
timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.height = "100vh";
timer.style.alignItems = "center";
timer.style.justifyContent = "center";