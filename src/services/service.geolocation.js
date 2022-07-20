import { API_KEY, BASE_URL, LANGUAGE  } from "./config";
/**
 * Servicio que permite realizar la busqueda de latitudes y longitudes de ciudades.
 */

export const GeoLocationAPI = async(q, limit) => {
  try {
    const params = BuildUrl(q, limit);
    const response = await fetch(`${BASE_URL}/geo/1.0/direct?${params}`);
    const data = await response.json();
    return data;
    
  } catch (error) {
    throw new error;
  }
}

const BuildUrl = (q,limit) => {
  const params = new URLSearchParams();
  params.append("q", q);
  params.append("limit", limit);
  params.append("appid", API_KEY);
  params.append("lang", LANGUAGE);
  return params;
}
