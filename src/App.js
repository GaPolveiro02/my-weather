import { useEffect, useState } from "react";
import WeatherComponent from "./WeatherComponent";
import WeatherWeek from "./WeatherWeek";
import './App.css';


function App() {

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
  const [weather, setWeather] = useState({})
  const [backgroundUrl, setUrl] = useState('url("https://cdnb.artstation.com/p/assets/images/images/006/771/819/large/daka-dibuja-5-manana.jpg?1501127228")');

  useEffect(() => {
    const obterData = async () => {
      navigator.geolocation.watchPosition(handlePositionReceived);
      setBackground();
      await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pt_br`)
        .then(response => response.json())
        .then(data => {
          setWeather(data)
          //console.log(data)
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
    if (hora >= 3 & hora < 6) {
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/815/large/daka-dibuja-3-madrugada.jpg?1501127216")';
    }
    else if (hora >= 6 & hora < 8) {
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/817/large/daka-dibuja-4-amanecer.jpg?1501127222")';
    }
    else if (hora >= 8 & hora < 10) {
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/819/large/daka-dibuja-5-manana.jpg?1501127228")';
    }
    else if (hora >= 10 & hora < 14) {
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/807/large/daka-dibuja-6-medio-dia.jpg?1501127200")';
    }
    else if (hora >= 14 & hora < 16) {
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/809/large/daka-dibuja-7-tarde.jpg?1501127206")';
    }
    else if (hora >= 16 & hora < 18) {
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/813/large/daka-dibuja-8-atardecer.jpg?1501127212")';
    }
    else if (hora >= 18 & hora < 21) {
      url = 'url("https://cdna.artstation.com/p/assets/images/images/006/771/808/large/daka-dibuja-1-noche.jpg?1501127204")';
    }
    else {
      url = 'url("https://cdnb.artstation.com/p/assets/images/images/006/771/811/large/daka-dibuja-2-media-noche.jpg?1501127210")';
    }

    setUrl(url);
  }

  var data = new Date();
  var options = { weekday: 'long', day: 'numeric', month: 'short' };

  return (
    <div className="App">
      {(typeof weather.main != 'undefined') ? ( //precisa disso para n dar erro de type ao carregar a página 
        //https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/
        <div className="container" style={{ 'backgroundImage': backgroundUrl }}>
          <div className="box">
            <p className="main-location"> {weather.name}, {data.toLocaleDateString('pt-BR', options)}</p>
            <div className="main-info">
              <WeatherComponent weather={weather} />
            </div>
            <div>
              <WeatherWeek coord={weather.coord} />
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
