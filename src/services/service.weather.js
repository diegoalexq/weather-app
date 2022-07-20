import { BASE_URL, API_KEY, UNIT } from "./config"
/**
 * Servicio que proporciona la informacion del clima, basado en la latitud y longitud.
 */

export const WeatherAPI = async(lat,lon) => {
  try {
    const params = BuildUrl(lat,lon);
    const response = await fetch(`${BASE_URL}/data/2.5/weather?${params}`)
    if (!response.ok) {
      throw new NetworkError()
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

const BuildUrl = (lat,lon) => {
  const params = new URLSearchParams();
  params.append("lat", lat);
  params.append("lon", lon);
  params.append("appid", API_KEY);
  params.append("units", UNIT);
  return params;
}

class NetworkError extends Error {
  constructor() {
   super("Network Error")
  }
}