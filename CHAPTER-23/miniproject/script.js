// after submit -> get all values access

// let form = document.querySelector('form')
// form.addEventListener('submit',(event)=>{
//   event.preventDefault(); // form reset ni hoga bar bar
  
//   const first = document.getElementById('username')
//   console.log(first.value);

//   const second = document.getElementById('lastname')
//   console.log(second.value);

//   const third = document.getElementById('age')
//   console.log(third.value);


//   const result = document.getElementById('result')
//   result.innerText = `${first.value} , ${second.value} , ${third.value}`
//   document.body.appendChild(result)

// })




// suppose bohot sare fields hai toh 1 1 karke karengai kya -> so use formdata


let form = document.querySelector('form')
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const data = new FormData(form) // it is a object -> data lake deta hai jab apan submit kar dete hai toh
    console.log(data);

    // key value pair pe ayega 
    console.log(data.keys) // iterator return
    // convert into array or for of loop laga ke kar shakte hai
    console.log(Array.from(data.keys()))
    console.log(Array.from(data.values()))

    // or

    for(let key of data.keys()){
        console.log(key)
    }

    for(let key of data.values()){
        console.log(key)
    }

    // or -> it give values in key value pair

    for(let key of data.entries()){
        console.log(key)
    }

    // or destructure it 

      for(let [key,value] of data.entries()){
        console.log(key,value)
    }
    
})























