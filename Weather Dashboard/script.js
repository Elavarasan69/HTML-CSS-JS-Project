const input = document.querySelector(".search-input")
const search = document.querySelector(".search-button")

const baseURL = "http://api.weatherapi.com/v1"
const apiKey = "ac99eaf630824dacb5e44506251903"

let apiData

search.addEventListener('click',(event) =>{
    const cityName = input.value.trim()
    if(!cityName){
        console.log("No city name entered")
    }
    else {
        fetchData(cityName)
        input.value = ''
    }
    
})

function fetchData(city){
    fetch(`${baseURL}/current.json?key=${apiKey}&q=${city}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // console.log(data)
        apiData = data
        apiDataDisplay()
    })
    .catch((error) => {
        console.error(error)
    })
}

function apiDataDisplay(){
    console.log(apiData)
    
    const cityName = document.querySelector(".location-name")
    const weatherImage = document.querySelector(".weather-image")
    const weatherText = document.querySelector(".weather-text")
    const weatherC = document.querySelector(".weather-temp-c")
    const weatherF = document.querySelector(".weather-temp-f")

    const weatherHumidity = document.querySelector(".humidity")
    const windSpeed = document.querySelector(".wind-speed")


    cityName.innerHTML = apiData.location.name +" , "+ apiData.location.country 

    weatherImage.src = apiData.current.condition.icon

    weatherText.innerHTML = apiData.current.condition.text

    weatherC.innerHTML = apiData.current.temp_c + "°c"

    weatherF.innerHTML = apiData.current.temp_f + "°f"

    weatherHumidity.innerHTML = apiData.current.humidity + "%"

    windSpeed.innerHTML = apiData.current.wind_kph + "km/p"

}