import WeatherStats from "./WeatherStats";
import WeatherDescription from "./WeatherDescription";
import Icon from "./Icon";

const WeatherComponent = (props) => {

    const weather = props.weather


    return (
        <><div className="weather">
            <div className="main-icon"><Icon id={weather.weather[0].id} /></div>
            <WeatherDescription weather={weather} />
        </div><div className="space"></div><WeatherStats weather={weather} /></>
    )

}

export default WeatherComponent