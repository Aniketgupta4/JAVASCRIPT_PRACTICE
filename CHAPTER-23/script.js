// handle form data in frontend


// -> event types in forms

// **** parent pe event lagane se ab panchayat ni hai ki chile pe bhi event lagana hai bubbling ke through manage ho jayega
const form = document.querySelector('form')
form.addEventListener("click",(event)=>{ // click karne se ye sab hoga input box pe
    // 'input' -> likh do toh har word pe print hoga in console
    // 'change' -> bahar kahi bhi jayegai input se toh console pe print hojayega
    // multiple events see in image summary

    console.log(event.target) // hmne form pe lagaya hai event and kahi bhi click karengai bubbling ke through pata chal jayega parent ko 
    console.log(event.target.id) // id mil jayega
    consolelog(event.target.value) // value mil jayega jo form ke input pe likhe hai

})


// form.addEventListener("change",(event)=>{
//     console.log("click");
// })

// form.addEventListener("focusin",(event)=>{
//     console.log("click");
// })

// form.addEventListener("input",(event)=>{
//    console.log("click");
// })

// form.addEventListener("focusout",(event)=>{
//     console.log("click");
// })

// form.addEventListener("submit",(event)=>{
//     console.log("click");
// })

// button rese banana per -> so event reset se form submit karne se reset ho jayega
// form.addEventListener("reset",(event)=>{
//     console.log("click");
// })