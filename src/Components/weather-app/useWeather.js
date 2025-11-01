import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherApi } from "./weatherApi";
export function useWeather(city) {
  return useQuery({
    queryKey: ["Weather", city],
    queryFn: () => fetchWeatherApi(city),
    enabled: !!city,
  });
}
