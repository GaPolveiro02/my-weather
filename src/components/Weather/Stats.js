const Stats = (props) => {

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
            <div className="second-info">
                <p className="s-info"> <span>Humidade</span> <span className="value">{weather.main.humidity}% </span></p>
                <p className="s-info"> <span>Vento</span> <span className="value">{weather.wind.speed}m/s </span></p>
                <p className="s-info"> <span>Pressão</span> <span className="value">{weather.main.pressure}hPa </span></p>
            </div>
        </div>
    )
}

export default Stats;