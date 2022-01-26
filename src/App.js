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
  
  useEffect(async () => {
     const response = await fetch("api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=0a2418234df7417984e84ffa6f0fcddf");
     const data = await response.json();

     setWeather(data);
     console.log(data);
  }, [])

  return (
    <div className="App">
     <>
      <h1>Latitude: {location.latitude}</h1>
      <h1>Longitude: {location.longitude}</h1>
     </>
    </div>
  );
}

export default App;
