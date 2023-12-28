const API_KEY='e11ddad43e8c3eb6e64355f71c0cf8b6';

const search=document.querySelector('#search');
const form=document.querySelector('#form');
const show=document.querySelector('#show');

const getdata = async(city) => {
  //  weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
 console.log(url)   
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

form.addEventListener('submit',function(e){
e.preventDefault();
    getdata(search.value);


})
const showWeather=(data)=>{
  if (data.cod == "404") {
    show.innerHTML = `<h2> City Not Found <h2>`
    return;
}
    console.log(data.main.temp);
    console.log(data);
    show.innerHTML=`
    <div class="card-body p-4">
              
    <h4 class="mb-1 sfw-normal">${data.name}</h4>
    <p class="mb-2">Current temperature: <strong>${data.main.temp}°C</strong></p>
    <p>Feels like: <strong>${data.main.feels_like}°C</strong></p>
    <p>Max: <strong>${data.main.temp_max}C</strong>, Min: <strong>${data.main.temp_min}°C</strong></p>
    <p>Sunrise: <strong>${new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} </strong>, Sunset: <strong>${new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</strong></p>


    <div class="d-flex flex-row align-items-center">
      <p class="mb-0 me-4">${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    `


}