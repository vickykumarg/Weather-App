

import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelslike: 13.65,
    temp: 14.05,
    tempMin: 14.05,
    tempMax: 14.05,
    humidity: 82,
    weather: "mist",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  // Determine background image based on weather type
  const getBackgroundImage = (weather) => {
    if (weather.includes("rain")) {
      return "https://plus.unsplash.com/premium_photo-1670002344425-f274ee445f76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    } else if (weather.includes("cloud")) {
      return "https://images.unsplash.com/photo-1483977399921-6cf94f6fdc3a?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    } else if (weather.includes("sun") || weather.includes("clear")) {
      return "https://plus.unsplash.com/premium_photo-1667867219548-f025c60c5940?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    } else if (weather.includes("snow")) {
      return "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    } else {
      return "https://images.unsplash.com/photo-1549492470-d6ec75906b28?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
  };

  return (
    <div className="WeatherApp">
      <div className="WeatherAppContent">
        <h1 className="WeatherTitle">Weather App</h1>
        <SearchBox updateInfo={updateInfo} />
        <div
          className="InfoBox"
          style={{
            backgroundImage: `url(${getBackgroundImage(weatherInfo.weather)})`,
          }}
        >
          <InfoBox info={weatherInfo} />
        </div>
      </div>
    </div>
  );
}








