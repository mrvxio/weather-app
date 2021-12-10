const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_KEY = "&appid=3e3398a0382272be0f3bd2c8b0e1de05"
const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q="
const API_UNITS = "&units=metric"
function getWeather()
{
    const city = input.value || 'London'
    const URL = API_LINK + city + API_KEY + API_UNITS

    axios.get(URL).then(res => {
        const temp = res.data.main.temp
        const hum = res.data.main.humidity
        const status = Object.assign({}, ...res.data.weather)
        weather.textContent = status.main
        cityName.textContent = res.data.name
        temperature.textContent = Math.floor(temp) + '°C'
        humidity.textContent = hum + '%'
    })
}
function enterKeyCheck(e)
{
    if(e.key == 'Enter')
    {
        getWeather()
    }
}
button.addEventListener('click', getWeather)
input.addEventListener('keyup', enterKeyCheck)