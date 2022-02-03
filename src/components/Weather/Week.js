import { useEffect, useState } from "react";
import Icon from "./Icon";

const Week = (props) => {

  const coord = props.coord;
  const [semana, setSemana] = useState({})

  useEffect(() => {
    //console.log(coord)
    const previsaoSemana = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.REACT_APP_API_KEY}&exclude=hourly,current,minutely,alerts&units=metric&lang=pt_br`)
      const data = await res.json()
      setSemana(data);
      //console.log(data);
    }
    previsaoSemana();
  }, [coord]);

  const printTemps = () => {
    var sem = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    var data = new Date();
    var rows = [];
    for (var i = 0; i < 7; i++) {
      let temp = Math.floor(semana.daily[i].temp.day)
      rows.push(
        <div key={i}>
          <p>{sem[(data.getDay() + i + 1) % 7]}</p>
          <Icon id={semana.daily[i].weather[0].id} />
          <p>{temp}°C</p>
        </div>
      );
    }

    return (
      <>
        {rows}
      </>
    )
  }

  return (
    <div className="weekForecast">
      {(typeof semana.daily != 'undefined') ? (
        <>
          {printTemps()}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Week;