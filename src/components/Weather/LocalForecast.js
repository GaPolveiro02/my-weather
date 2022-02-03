import { useEffect, useState } from "react";
import Container from "./Container";
import { setBackground } from "../../utils/setBackground";
import './css/Weather.css';
import { getWeather } from "../../api/getWeather";


function LocalForecast() {

  const [location, setLocation] = useState({ lat: 0, lon: 0 })
  const [weather, setWeather] = useState({})
  const [backgroundUrl, setUrl] = useState('url("https://cdnb.artstation.com/p/assets/images/images/006/771/819/large/daka-dibuja-5-manana.jpg?1501127228")');

  useEffect(() => {
    const obterData = async () => {
      navigator.geolocation.watchPosition(function (local) {
        setLocation({ lat: local.coords.latitude, lon: local.coords.longitude });
      });
      setUrl(setBackground());
      getWeather(location).then((res) => {
        setWeather(res.data);
      })
    }
    obterData();
  }, [location]);

  var data = new Date();
  var options = { weekday: 'long', day: 'numeric', month: 'short' };
/*
  // tentando converter as coordenadas para o nome da cidade
  const NodeGeocoder = require('node-geocoder');

  const opt = {
    provider: 'google',
  };

  const geocoder = NodeGeocoder(opt);
  var cidade;
  geocoder.reverse({ lat: location.lat, lon: location.lon }, function (err, res) {
    cidade = res;
    console.log(cidade);
  });
*/
  return (
    <div>
      {(typeof weather.current != 'undefined') ? ( //precisa disso para n dar erro de type ao carregar a página 
        //https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/
        <div className="container" style={{ 'backgroundImage': backgroundUrl }}>
          <div className="box">
            <p className="main-location"> {/*cidade*/}, {data.toLocaleDateString('pt-BR', options)}</p>
            <div>
              <Container weather={weather} />
            </div>
          </div>
        </div>
      ) : (
        <div>deu ruim</div>
      )}
    </div>
  );
}

export default LocalForecast;
