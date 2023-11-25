import React, { useState } from "react";
import "./weather.css";
import { Search } from "lucide-react";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import sunrise_icon from "../Assets/sunrise.png";
import sunset_icon from "../Assets/sunset.png";


export const Weather = () => {
  const [search, setSearch] = useState("");
  const [Icon, setIcon] = useState()

  const apiKey = "6a5a83ce812679ef285caed34b5e91f9";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;

  let AllWeatherData = {} ; // empty object

  const weatherData = async () => {
    const response = await fetch(url);
    const finalData = await response.json();

    // console.log(finalData);

    //getting weather icon
    const weatherIcon = finalData.weather[0].icon
    AllWeatherData.weatherIcon = weatherIcon;
    // console.log(AllWeatherData.weatherIcon);

    //getting temperature from api
    const currTemp = finalData.main.temp;
    AllWeatherData.currTemp = currTemp;
    
    //getting feels like from api
    const feelsLikeTemp = finalData.main.feels_like;
    AllWeatherData.feelsLikeData = feelsLikeTemp;
    
    //getting Visibility from api
    const visibility = finalData.visibility;
    AllWeatherData.visibility = visibility + ' meters';

    //getting windSpeed from api
    const windSpeed = finalData.wind.speed;
    AllWeatherData.windSpeed = windSpeed + ' km/hr ';

    //getting sunRise from api
    const sunRise = finalData.sys.sunrise;
    const newSunRise = new Date(sunRise * 1000);

    const SunRiseHours = newSunRise.getUTCHours();
    const SunRiseMinutes = newSunRise.getUTCMinutes();
    const SunRiseSeconds = newSunRise.getUTCSeconds();

    const formattedUpTime = `${SunRiseHours}:${SunRiseMinutes}:${SunRiseSeconds} UTC `;

    AllWeatherData.sunRise = formattedUpTime;

    //getting sunSet from api
    const sunSet = finalData.sys.sunset;
    const newSunSet = new Date(sunSet * 1000);

    const SunSetHours = newSunSet.getUTCHours();
    const SunSetMinutes = newSunSet.getUTCMinutes();
    const SunSetSeconds = newSunSet.getUTCSeconds();
    
    const formattedDownTime = `${SunSetHours}:${SunSetMinutes}:${SunSetSeconds} UTC `;

    AllWeatherData.sunset = formattedDownTime;

    //rendering the weather icon
    if(AllWeatherData.weatherIcon === "01d" || AllWeatherData.weatherIcon === "01n"){
        setIcon(clear_icon);
    }
    if(AllWeatherData.weatherIcon === "02d" || AllWeatherData.weatherIcon === "02n"){
        setIcon(cloud_icon);
    }
    if(AllWeatherData.weatherIcon === "03d" || AllWeatherData.weatherIcon === "03n"){
        setIcon(cloud_icon);
    }
    if(AllWeatherData.weatherIcon === "04d" || AllWeatherData.weatherIcon === "04n"){
        setIcon(drizzle_icon);
    }
    if(AllWeatherData.weatherIcon === "09d" || AllWeatherData.weatherIcon === "09n"){
        setIcon(rain_icon);
    }
    if(AllWeatherData.weatherIcon === "10d" || AllWeatherData.weatherIcon === "10n"){
        setIcon(rain_icon);
    }
    if(AllWeatherData.weatherIcon === "11d" || AllWeatherData.weatherIcon === "11n"){
        setIcon(rain_icon);
    }
    if(AllWeatherData.weatherIcon === "13d" || AllWeatherData.weatherIcon === "13n"){
        setIcon(snow_icon);
    }
    if(AllWeatherData.weatherIcon === "01d" || AllWeatherData.weatherIcon === "01n"){
        setIcon(clear_icon);
    }

    
    //rendering temp
    const temp = document.getElementById('temp');
    temp.innerHTML = Math.floor(AllWeatherData.currTemp) + '°C in ' + search;

    //rendering feels like
    const feelsLike = document.getElementById('feels-like');
    feelsLike.innerHTML = 'Feels like ' + Math.floor(AllWeatherData.feelsLikeData) + '°C' 

    //rendering visibility
    const visib = document.getElementById('visibility');
    const imgVisibilityTag = document.createElement("img");
    imgVisibilityTag.src= humidity_icon;
    visib.innerHTML = AllWeatherData.visibility;
    visib.appendChild(imgVisibilityTag);

    //rendering windspeed
    const wind = document.getElementById('windSpeed')
    const imgTag = document.createElement("img");
    imgTag.src = wind_icon;
    wind.innerHTML =  AllWeatherData.windSpeed;
    wind.appendChild(imgTag);

    //rendering sunRise
    const SunUp = document.getElementById('sunRise'); 
    const sunRiseTag = document.createElement("img");
    sunRiseTag.src= sunrise_icon;
    SunUp.innerHTML = AllWeatherData.sunRise;
    SunUp.appendChild(sunRiseTag);

    //rendering sunset
    const sunDown = document.getElementById('sunSet');
    const sunSetTag = document.createElement("img");
    sunSetTag.src= sunset_icon;
    sunDown.innerHTML = AllWeatherData.sunset;
    sunDown.appendChild(sunSetTag);
  };


  return (
    <div className="container border border-primary p-3 m-3">
      <div className="d-flex" id="search-params">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="input-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-outline-primary"
          type="submit"
          id="submit-btn"
          onClick={weatherData}
        >
          <Search />
        </button>
      </div>
      <br />
      <div className="container-body">
        <img src={Icon} alt="" />

        <div id="temp"> </div>
        <div id="feels-like"> </div>

        <div className="grid mt-3 p-3">
          <div className="text-center">
            <div className="row">

              <div className="col" id="visibility"> </div>
              <div className="col" id="windSpeed"> </div>

            </div>
            <div className="row p-3">
              <div className="col" id="sunRise"></div>
              <div className="col" id="sunSet"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
