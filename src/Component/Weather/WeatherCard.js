import React, {useEffect} from 'react';
import './style.css'

const WeatherCard = ({tempInfo}) => {
	const [weatherState, setWeatheState] = React.useState("");
	const {temp, humidity, pressure, weatherMood, speed, country,name} = tempInfo;

	//converting seconds into time
	let date = new Date();
	let timeStr = `${date.getHours()}:${date.getMinutes()}`
	let ampm = (timeStr >= `12:00`) ? "PM" : "AM"


	useEffect(() => {
		if (weatherMood) {
			switch (weatherMood) {
				case "Clouds":
					setWeatheState("wi-day-cloudy");
					break;
				case "Haze":
					setWeatheState("wi-fog");
					break;
				case "Clear":
					setWeatheState("wi day-sunny");
					break;
				case "Mist":
					setWeatheState("wi-dust");
					break;

				default:
					setWeatheState("wi-day-sunny");
					break;
			}
		}
	}, [weatherMood])
	return (
		<>

			<article className="widget">
				<div className="weatherIcon">
					<i className={`wi ${weatherState}`}/>
				</div>

				<div className="weatherInfo">
					<div className="temperature">
						<span>{temp}&deg;</span>
					</div>

					<div className="description">
						<div className="weatherCondition">{weatherMood}</div>
						<div className="place">
							{name},{country}
						</div>
					</div>
				</div>

				<div className="date"> {new Date().toLocaleString()} </div>

				{/* our 4column section  */}
				<div className="extra-temp">
					<div className="temp-info-minmax">
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-sunset"}></i>
							</p>
							<p className="extra-info-leftside">
								{timeStr}:{ampm} <br/>
								Sunset

							</p>
						</div>

						<div className="two-sided-section">
							<p>
								<i className={"wi wi-humidity"}></i>
							</p>
							<p className="extra-info-leftside">
								{humidity} <br/>
								Humidity
							</p>
						</div>
					</div>

					<div className="weather-extra-info">
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-rain"}></i>
							</p>
							<p className="extra-info-leftside">
								{pressure} <br/>
								Pressure
							</p>
						</div>

						<div className="two-sided-section">
							<p>
								<i className={"wi wi-strong-wind"}></i>
							</p>
							<p className="extra-info-leftside">
								{speed} <br/>
								Speed
							</p>
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default WeatherCard;