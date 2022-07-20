import { useState, useEffect } from "react";
import { Search } from "./components/Search";
import { Weather } from './components/Weather';
import { Error } from "./components/Generics/Error";
// import MockData from './mock.json';
import { WeatherAPI } from "./services/service.weather";
import { usePosition } from './custom-hooks/CurrentPosition';

export const App = () => {
	const [data, setData] = useState([]);
  const [errorState, SetErrorState] = useState( {hasError: false} );
  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    if (latitude && longitude) {
      WeatherAPI(latitude,longitude).then(setData).catch(handleError);
    }
	},[latitude, longitude])

  const parentCallback = (data) => {
    const { lat, lon } = data;
    console.log(data)
		WeatherAPI(lat, lon).then(setData).catch(handleError);
  };

  const handleError = (err) => {
    SetErrorState( {hasError: true, message: err.message} )
  }

  return (
    <div className="main-container">
			<Search parentCallback ={parentCallback}/>
      {  error || errorState.hasError
        ? <Error errorGeo = {error} errorState = {errorState} />
        : <Weather data = {data}/>
      }
    </div>
  );
}