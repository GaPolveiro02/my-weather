import WeatherInfo from "./WeatherInfo"

const WeatherStats = (props) => {
    const weather = props.weather

    const round_temps = () => {
        const sensacao = Math.floor(weather.main.feels_like)
        const temp = Math.floor(weather.main.temp)
    
        return (
          <>
              <p id="temp">{temp}°C</p>
              <p id="sensacao">Sensação: {sensacao}°C</p>
          </>
        )
      }

    return (
        <div className="stats">
                <div id="temps"> {round_temps()} </div>
                <WeatherInfo weather={weather}/>
              </div>
    )
}

export default WeatherStats;