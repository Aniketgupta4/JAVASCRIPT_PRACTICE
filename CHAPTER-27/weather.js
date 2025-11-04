document.querySelector('button').addEventListener('click',()=>{
  
    const place = document.getElementById('city').value;

     
    function updateinfo(data){
       const element = document.getElementById('weather-info');
       element.innerHTML = `Today's Temperature is : ${data.current.temp_c}°C`;
    }    


    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=a01087e550a141c795d84332250411&q=${place}&aqi=yes`)

    prom.then(response=>
        response.json()
    ).then(data=> updateinfo(data) )

})