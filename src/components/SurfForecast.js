import React from "react";

const tempConversion = val => {
  //celsius to F

  return Math.round((val * 9) / 5 + 32);
};

function metersToFeet(val) {
  return Math.round(val / 0.3048);
}

function windSpeedConversion(val) {
  return Math.round((val * 25) / 11);
}

const SurfForecast = ({
  forecastData: {
    waveHeight,
    wavePeriod,
    swellHeight,
    windSpeed,
    windDirection,
    airTemperature
  },
  getSwellData,
  findSpot
}) => {
  if (!waveHeight) {
    return (
      <div>
        <h1>Enter data</h1>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={getSwellData}>Api</button>
        <button onClick={findSpot}>Spot</button>
        <p>Wave Height: {`${metersToFeet(waveHeight)}ft`}</p>
        <p>wavePeriod: {wavePeriod}</p>
        <p>swellHeight: {`${metersToFeet(swellHeight)}ft`}</p>
        <p>windSpeed: {`${windSpeedConversion(windSpeed)} mph`}</p>
        <p>windDirection: {windDirection}</p>
        <p>airTemperature: {tempConversion(airTemperature)}</p>
      </div>
    );
  }
};

export default SurfForecast;
