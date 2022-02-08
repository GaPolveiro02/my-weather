import { faCloud, faCloudRain, faBolt, faSun, faSnowflake, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Icon = (props) => {

    const id = props.id;

    //console.log(props.id)

    const getWeatherId = () => {
        
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
        else if(id >= 600 && id <=622) {
          return (
            <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>
          )
        }
        else if(id >= 701 && id <=781) {
          return (
            <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>
          )
        }
        else if (id === 800) {
          return (
            <FontAwesomeIcon icon={faSun} ></FontAwesomeIcon>
          )
        }
        else if (id >= 801 && id <= 804) {
          return (
            <FontAwesomeIcon  icon={faCloud}></FontAwesomeIcon>
          )
        }
        else {
          return (
            <><FontAwesomeIcon  icon={faCloud}></FontAwesomeIcon><span>?</span></>
          )
        }
      }


    return (
        <>{getWeatherId()}</>
    )
}

export default Icon;