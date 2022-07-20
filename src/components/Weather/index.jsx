import { MainTemp, FormatTime } from '../../utilities/MainUtilities';
import { Loader } from '../Generics/Loader';

export const Weather = ({ data}) => {
	return (
		<div className="weather">
			{ Object.keys(data).length > 0 ? 
				<div className='weather__info'> 
					<p className='weather__info__name'> {data.name} </p>
					<p> {FormatTime(data.dt)} </p>
					<div className='weather__info__ico'>
						{
							data.weather.map(weather => {
								return <img key={weather.id} width={150} height={150} src={`./assets/icons/${weather.main.toLowerCase()}.png`}/>
							})
						}
					</div>
					<div className="weather__info__temp">
						{ MainTemp(data.main.temp) }
					</div>
					<div className='weather__info__aditional-info'>
						<p>min: {MainTemp(data.main.temp_min)}</p>
						<p>max: {MainTemp(data.main.temp_max)}</p>
						<p>Sensacion termica: {MainTemp(data.main.feels_like)}</p>
						<p>Humedad: {data.main.humidity}</p>
					</div>
				</div>
				: <Loader/>
			}
		</div>
	)
}