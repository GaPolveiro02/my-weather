import { useEffect, useState } from "react";
import Container from "./Container";
import { setBackground } from "../../utils/setBackground";
import './css/Weather.css';


function LocalForecast() {

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
  const [weather, setWeather] = useState({})
  const [backgroundUrl, setUrl] = useState('url("https://cdnb.artstation.com/p/assets/images/images/006/771/819/large/daka-dibuja-5-manana.jpg?1501127228")');

  useEffect(() => {
    const obterData = async () => {
      navigator.geolocation.watchPosition(function(local) {
        setLocation({latitude: local.coords.latitude, longitude: local.coords.longitude});
      });
      setUrl(setBackground());
      await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pt_br`)
        .then(response => response.json())
        .then(data => {
          setWeather(data)
          //console.log(data)
        });
    }
    obterData();
  }, [location.latitude, location.longitude]);

  var data = new Date();
  var options = { weekday: 'long', day: 'numeric', month: 'short' };

  return (
    <div>
      {(typeof weather.main != 'undefined') ? ( //precisa disso para n dar erro de type ao carregar a página 
        //https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/
        <div className="container" style={{ 'backgroundImage': backgroundUrl }}>
          <div className="box">
            <p className="main-location"> {weather.name}, {data.toLocaleDateString('pt-BR', options)}</p>
            <div>
              <Container weather={weather} />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default LocalForecast;
