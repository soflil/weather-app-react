import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>{" "}
          <WeatherIcon code="01d" size={38} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">21°C</span>{" "}
            <span className="WeatherForecast-temperature-min">19°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
