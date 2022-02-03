import Stats from "./Stats";
import Description from "./Description";
import Week from "./Week";
import Icon from "./Icon";

const Container = (props) => {

  const weather = props.weather

  return (
    <>
      <div className="main-info">
        <div className="weather-main">
          <div className="main-icon">
            <Icon id={weather.current.weather[0].id} />
          </div>
          <Description description={weather.current.weather[0].description} />
        </div>


        <div className="space"></div>

        <Stats stats={weather.current} />

      </div>
      <Week daily={weather.daily} />
    </>
  )

}

export default Container