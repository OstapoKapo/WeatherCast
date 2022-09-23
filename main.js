const KEY = '2e66d1841f30b79494d4a26ed1bf4455'
let clientId = 'bAqQ5KxTqxKJpKI6Eq9iaCBKn2QYj3TYFuUXzW8H6VY'
let mainWeather;
$('.page2').slideUp(0);
let imageElement = document.querySelector("#page2")
let country;
let city;
let temp;
let feilTemp



    

getWeather.onclick = function(){
    city = cityName.value
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
    .then((response) => {
    return response.json();
    })
    .then((data) => {
      country = data.sys.country
       console.log(data)
       mainWeather = data.weather[0].main;
      
       temp = data.main.temp
       temp = temp - 273,15
     temp =   temp.toFixed(1)
       console.log(temp)
       feilTemp = data.main.feels_like
       feilTemp = (feilTemp-273,15)
       feilTemp = feilTemp.toFixed(1)
    $('.wrap').append(` <div class="weatherInfo" id="weatherInfo">${data.main.humidity}</div>`)
    $('.wrap').append(` <div class="weatherInfo" id="weatherInfo">${data.main.pressure}</div>`)
    $('.wrap').append(` <div class="weatherInfo" id="weatherInfo">${data.wind.speed}</div>`)
    $('.wrap').append(` <div class="weatherInfo" id="weatherInfo">${(data.main.temp-273).toFixed(1)}</div>`)
    fetch(`https://api.unsplash.com/photos/random?query=${data.weather[0].main}&client_id=${clientId}`)
    .then(function (response){
        return response.json()   
    })
    .then(function (jsonData2){
       
        
    $('.page2').css("background-image","url("+jsonData2.urls.regular+")")
    $('.page2__obj__itemWithImg').append(`<img src="https://countryflagsapi.com/png/${country}" class="page2__obj__item__countryImg" alt="${country} flag"/>`)
    $('.page2__obj__item__withImg2').prepend(`<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" class="page2__obj__item__countryImg" />`)
    imageElement.src = jsonData2.urls.regular
    })
    .catch((error) => {
     console.log('Eror'+ error)
    })
    nameOfCity.innerText = data.name
    nameOfCounrtry.innerText = data.sys.country
    mainWeatherInCountry.innerText = data.weather[0].description
    weatherWind.innerText = 'Wind Speed: ' + data.wind.speed + 'm/s'
    realTemp.innerText = temp + "°C"
    fellTemp.innerText = feilTemp + "°C"
    }); 
   
    
   
}
    
  

   
    
$('#checkbox').click(function(){
 
    $('#getWeather').css("display","flex")
})

$('#getWeather').click(function(){
    $('.page2').slideDown(500);
    $('.wrap').slideUp()
})







