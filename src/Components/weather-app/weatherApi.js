import axios from "axios";

const API_KEY = "836580772ffe5825340dd2cd44d12fd0";
const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const fetchWeatherApi = async (city) => {
  const response = await weatherApi.get("weather", {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};
