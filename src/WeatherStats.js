import WeatherInfo from "./WeatherInfo"

const WeatherStats = (props) => {
    const weather = props.weather

    const round_temps = () => {
        const max = Math.floor(weather.main.temp_max)
        const min = Math.floor(weather.main.temp_min)
        const temp = Math.floor(weather.main.temp)
    
        return (
          <>
            <span id="temp">{temp}°C</span>
            <p>
              <span id="max">Máx: {max}°C</span><span> - </span><span id="min"> Mín: {min}°C</span>
            </p>
          </>
        )
      }

    return (
        <div className="stats">
                <p id="temps"> {round_temps()} </p>
                <WeatherInfo weather={weather}/>
              </div>
    )
}

export default WeatherStats;