import React, { useState, useEffect } from "react";
import axios from "axios";

// parameters for our weather api
const params = {
	// link to my api key in .env file
	access_key: process.env.REACT_APP_WEATHER_API_KEY,
	// location for api
	query: "Helsinki",
};

const API = `http://api.openweathermap.org/data/2.5/weather?q=${params.query}&units=metric&appid=${params.access_key}`;

const Weather = () => {
	// we make states in a function component
	const [weather, setWeather] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	// useEffect has a callback inside.
	useEffect(() => {
		setIsLoading(true);
		const getData = async () => {
			const res = await axios(API);
			setWeather(res.data);
			setIsLoading(false);
		};
		getData();
	}, []);

	if (isLoading) {
		return (
			<div>
				<p>Wait, I am loading</p>
			</div>
		);
	}

	return (
		<div>
			<p>
				{" "}
				Currently, in {weather.name} is {Math.round(weather.main.temp)} degrees and it feels like{" "}
				{Math.round(weather.main.feels_like)}{" "}
			</p>
		</div>
	);
};

export default Weather;
