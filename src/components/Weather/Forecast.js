import { useEffect, useState } from "react";
import Container from "./Container";
import { setBackground } from "../../utils/setBackground";
import './css/Weather.css';
import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import NotFound from "../../NotFound";


function Forecast() {

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
  const [weather, setWeather] = useState({})
  const [backgroundUrl, setUrl] = useState('url("https://cdnb.artstation.com/p/assets/images/images/006/771/819/large/daka-dibuja-5-manana.jpg?1501127228")');
  const [search, setSearch] = useState("")
  const [cod, setCod] = useState()

  function addSearch(e) {
    setSearch(e.target.value)
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") citySearch();
  }

  function citySearch() {

    //console.log(search)

    if (search.trim() === "") {
      alert("Invalido")
    }
    else {
      const obterDataCity = async () => {

        await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pt_br`)
          .then(response => response.json())
          .then(
            (data => {
              setWeather(data)
              //console.log(data.cod)
              setCod(data.cod)
            }));
      }
      obterDataCity()
      if (cod === 200) {
          var main = document.querySelector(".main-info");
          var week = document.querySelector(".weekForecast");
          main.style.animation = "none";
          week.style.animation = "none";
          setTimeout(function () {
            main.style.animation = "";
            week.style.animation = "";
          }, 100);
        }
    }
  }

    

  useEffect(() => {
    const obterData = async () => {
      navigator.geolocation.watchPosition(function (local) {
        setLocation({ latitude: local.coords.latitude, longitude: local.coords.longitude });
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
    //console.log(location)
  }, [location]);

  var data = new Date();
  var options = { weekday: 'long', day: 'numeric', month: 'short' };

  return (
    <div>
      <div className="container" style={{ 'backgroundImage': backgroundUrl }}>
        <a href="/"><h1>My Weather</h1></a>
        <div className="search-bar">
          <input value={search} onChange={(e) => addSearch(e)} onKeyPress={(e) => handleKeyPress(e)} placeholder="Pesquise uma cidade"></input>
          <button onClick={citySearch} id="pesquisar">Pesquisar</button>
        </div>
        {(typeof weather.main != 'undefined') ? (
          <div className="box">
            <p className="main-location"> {weather.name}, {data.toLocaleDateString('pt-BR', options)}</p>
            <div>
              <Container weather={weather} />
            </div>
          </div>
        ) : (
          <NotFound />
        )}
        <div className="links">
          <footer>Feito por <a href="https://github.com/GaPolveiro02"><GithubIcon />Gabriel Polveiro</a> e <a href="https://github.com/VLx2000"><GithubIcon />Victor Luís Antunes</a></footer>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
