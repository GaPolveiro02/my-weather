import axios from "axios";

export async function getWeather(coord) {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/onecall?`,
    {
      params: {
        lat: coord.lat,
        lon: coord.lon,
        exclude: "minutely,hourly",
        appid: `${process.env.REACT_APP_API_KEY}`,
        units: "metric",
        lang: "pt_br"
      }
    }
  );

  return response;
}