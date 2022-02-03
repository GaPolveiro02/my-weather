import Icon from "./Icon";

const Week = (props) => {

  const semana = props.daily;

  const printTemps = () => {
    var sem = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    var data = new Date();
    var rows = [];
    for (var i = 0; i < 7; i++) {
      let temp = Math.floor(semana[i].temp.day)
      rows.push(
        <div key={i}>
          <p>{sem[(data.getDay() + i + 1) % 7]}</p>
          <Icon id={semana[i].weather[0].id} />
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
      {(typeof semana != 'undefined') ? (
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