import Stats from "./Stats";
import Description from "./Description";
import Week from "./Week";
import Icon from "./Icon";

const Component = (props) => {

    const weather = props.weather

    return (
        <>
            <div className="main-info">
                <div className="weather-main">
                    <div className="main-icon">
                        <Icon id={weather.weather[0].id} />
                    </div>
                    <Description weather={weather} />
                </div>


                <div className="space"></div>

                <Stats weather={weather} />

            </div>
            <Week coord={weather.coord} />
        </>
    )

}

export default Component