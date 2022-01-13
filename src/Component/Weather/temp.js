import React, {useEffect, useState} from 'react';
import './style.css'
import WeatherCard from "./WeatherCard";

const Temp = () => {
	const [searchValue, setSearchValue] = useState('hyderabad');
	const [tempInfo, setTempInfo] = useState({})

	const getWeatherInfo = async () => {
		try {
			let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ae070ec83e2b921a23489ef9ce2faefe`;
			const response = await fetch(url);
			const data = await response.json();
			// console.log(data)
			const {name} = data;
			const {temp, humidity, pressure} = data.main;
			const {main: weatherMood} = data.weather[0];
			const {speed, deg} = data.wind;
			const {country, sunset} = data.sys;

			//    creating a object based on above values
			const myNewObject = {
				temp, humidity, pressure, weatherMood, speed, country, sunset, name, deg
			}
			// console.log(myNewObject)
			setTempInfo(myNewObject)

		} catch (error) {
			console.log({
				error: "404",
				message: "city not found"
			})

		}
	}
	useEffect(() => {
		getWeatherInfo()
	}, [])

	return (
		<>
			<div className="wrap">
				<div className="search">
					<input type="search" placeholder="Search...." autoFocus id="search" className="searchTerm"
								 value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
					<button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
				</div>
			</div>
			<WeatherCard tempInfo={tempInfo}/>
		</>

	);
};

export default Temp;