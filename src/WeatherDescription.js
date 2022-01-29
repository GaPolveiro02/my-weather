const WeatherDescription = (props) => {

    const weather = props.weather

    const description_upper = () => {
        let text = weather.weather[0].description
        text = text[0].toUpperCase() + text.slice(1).toLowerCase()
    
        return (
          <>{text}</>
        )
      }
      
    return (
        <p id="description"> {description_upper()} </p>
    )
}

export default WeatherDescription