import { useEffect, useState } from "react";
import { faCloud, faCloudRain, faBolt, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './App.css';

function App() {

  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState({})
  

  useEffect(() => {
    const obterData = async () => {
      navigator.geolocation.watchPosition(handlePositionReceived);

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=0a2418234df7417984e84ffa6f0fcddf&units=metric&lang=pt_br`)
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

  const getWeatherId =  () => {
    const id = weather.weather[0].id

    console.log(id)

    if (id >=200 && id <= 232) {
      return (
       <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
      )
    }  
    else if (id >= 300 &&  id <= 531){
      return (
       <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>
      )
    }
    else if (id === 800) {
      return (
       <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
      )
    }
    else if (id >= 801 &&  id <= 804){
      return (
       <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
      )
    }
    else {
       console.log("deu bom")
    }
  }
  

 

  return (
    <div className="App">
      {(typeof weather.main != 'undefined') ? ( //precisa disso para n dar erro de type ao carregar a página 
        //https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/
        <div className="container">

          <div className="box">
            <div className="main-info">
             <p className="main-location"> {weather.name} </p>
             <p className="main-icon">{getWeatherId()}</p>
             <p> {weather.main.temp}°C </p>
            </div>
            
            <div className="second-info">
             <p className="s-info"> {weather.main.temp_min} / {weather.main.temp_max}</p>
             <p className="s-info"> {weather.weather[0].description} </p>
             <p className="s-info"> Vento: {weather.wind.speed} </p>
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
