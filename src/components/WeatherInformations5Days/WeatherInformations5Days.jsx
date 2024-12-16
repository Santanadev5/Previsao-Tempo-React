
import './WeatherInformations5Days.css'

function WeatherInformations5Days ({weather5Days}) {

let dailyForecast = {

}

for(let forecast of weather5Days.list) {
  const date = new Date(forecast.dt * 1000).toLocaleDateString()


  if (!dailyForecast[date]){
    dailyForecast[date] = forecast
  }

}

return (

  <div className='weather-container'>

  <p>5Days</p>
    
  </div>

)

}

export default WeatherInformations5Days ;