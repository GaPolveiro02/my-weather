import { useEffect, useState } from "react";
import { faCloud, faCloudRain, faBolt, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './App.css';

function App() {

  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState({})
  const [url, setUrl] = useState();

  useEffect(() => {
    const obterData = async () => {
      navigator.geolocation.watchPosition(handlePositionReceived);
      setBackground();
      await fetch(`${process.env.REACT_APP_API_URL}?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pt_br`)
        .then(response => response.json())
        .then(data => {
          setWeather(data)
          console.log(data)
        });
    }
    obterData();
  }, [location.latitude, location.longitude]);

  function handlePositionReceived({ coords }) {

    const { latitude, longitude } = coords

    setLocation({ latitude, longitude });
  }

  function setBackground() {

    var data = new Date();
    var hora = data.getHours();
    let url;
    if (hora >= 3 & hora < 6){
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/815/large/daka-dibuja-3-madrugada.jpg?1501127216")';
    }
    else if (hora >= 6 & hora < 8){
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/817/large/daka-dibuja-4-amanecer.jpg?1501127222")';
    }
    else if (hora >= 8 & hora < 10){
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/819/large/daka-dibuja-5-manana.jpg?1501127228")';
    }
    else if (hora >= 10 & hora < 14){
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/807/large/daka-dibuja-6-medio-dia.jpg?1501127200")';
    }
    else if (hora >= 14 & hora < 16){
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/809/large/daka-dibuja-7-tarde.jpg?1501127206")';
    }
    else if (hora >= 16 & hora < 18){
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/813/large/daka-dibuja-8-atardecer.jpg?1501127212")';
    }
    else if (hora >= 18 & hora < 21){
      url = 'url("https://cdna.artstation.com/p/assets/images/images/006/771/808/large/daka-dibuja-1-noche.jpg?1501127204")';
    }
    else{
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/811/large/daka-dibuja-2-media-noche.jpg?1501127210")';
    }

    setUrl(url);
  }
  
  const getWeatherId = () => {
    const id = weather.weather[0].id

    console.log(id)

    if (id >= 200 && id <= 232) {
      return (
        <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
      )
    }
    else if (id >= 300 && id <= 531) {
      return (
        <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>
      )
    }
    else if (id === 800) {
      return (
        <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
      )
    }
    else if (id >= 801 && id <= 804) {
      return (
        <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
      )
    }
    else {
      console.log("deu bom")
    }
  }

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

  const description_upper = () => {
    let text = weather.weather[0].description
    text = text[0].toUpperCase() + text.slice(1).toLowerCase()

    return (
      <>{text}</>
    )
  }

  return (
    <div className="App">
      {(typeof weather.main != 'undefined') ? ( //precisa disso para n dar erro de type ao carregar a página 
        //https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/
        <div className="container" style={{'backgroundImage': url}}>
          <div className="box">
            <p className="main-location"> {weather.name} </p>
            <div className="main-info">
              <div className="weather">
                <p className="main-icon">{getWeatherId()}</p>
                <p id="description"> {description_upper()} </p>
              </div>
              <div className="space"></div>
              <div className="stats">
                <p id="temps"> {round_temps()} </p>
                <div className="second-info">
                  <p className="s-info"> <span>Humidade</span> <span className="value">{weather.main.humidity}% </span></p>
                  <p className="s-info"> <span>Vento</span> <span className="value">{weather.wind.speed}m/s </span></p>
                  <p className="s-info"> <span>Pressão</span> <span className="value">{weather.main.pressure}hPa </span></p>
                </div>
              </div>

            </div>


          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
