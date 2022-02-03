const Stats = (props) => {

  const stats = props.stats

  const round_temps = () => {
    const sensacao = Math.floor(stats.feels_like)
    const temp = Math.floor(stats.temp)

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
        <p className="s-info"> <span>Humidade</span> <span className="value">{stats.humidity}% </span></p>
        <p className="s-info"> <span>Vento</span> <span className="value">{stats.wind_speed}m/s </span></p>
        <p className="s-info"> <span>Pressão</span> <span className="value">{stats.pressure}hPa </span></p>
      </div>
    </div>
  )
}

export default Stats;