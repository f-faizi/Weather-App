const API_KEY = "40325383408f891c2a7adcf5db90a594";
const BASE_URL =
  "https://api.openweathermap.org/data/2.5/weather?q=Kabul&appid=40325383408f891c2a7adcf5db90a594#";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedWeatherData = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedWeatherData;
};

export default getFormattedWeatherData;
