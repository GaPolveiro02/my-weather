import { useEffect, useState } from "react";
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

  return (
    <div className="App">
      {(typeof weather.main != 'undefined') ? ( //precisa disso para n dar erro de type ao carregar a página 
        //https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/
        <div className="container">
          <div className="box">
            <p> Latitude: {location.latitude} </p>
            <p> Longitude: {location.longitude} </p>
            <p> Cidade: {weather.name} </p>
            <p> Temperatura: {weather.main.temp}°C </p>
            <p> Tempo: {weather.weather[0].description} </p>
            <p> Vento: {weather.wind.speed} </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
