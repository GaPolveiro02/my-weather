const WeatherInfo = (props) => {

    const weather = props.weather
    
    return (
        <div className="second-info">
                  <p className="s-info"> <span>Humidade</span> <span className="value">{weather.main.humidity}% </span></p>
                  <p className="s-info"> <span>Vento</span> <span className="value">{weather.wind.speed}m/s </span></p>
                  <p className="s-info"> <span>Pressão</span> <span className="value">{weather.main.pressure}hPa </span></p>
                </div>
    )
}

export default WeatherInfo