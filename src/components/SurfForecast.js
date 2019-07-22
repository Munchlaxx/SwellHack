import React from 'react';

const tempConversion = (val) => {
  //celsius to F

  return Math.round(val * 9/5 + 32);
}

function metersToFeet (val) {
  return Math.round(val/0.3048);
}

function windSpeed (val) {
  return Math.round(val * 25/11);
}

const SurfForecast = (props) => {
  if (!props.forecastData.waveHeight){
    return (
      <div >
      <h1>Enter data</h1>
    </div>
    )
  } else {
    return (
      <div> 
        <button onClick={props.getSwellData}>Api</button>
        <button onClick={props.findSpot} >Spot</button>
        <p>Wave Height: {`${metersToFeet(props.forecastData.waveHeight)}ft`}</p>
        <p>wavePeriod: {props.forecastData.wavePeriod}</p>
        <p>swellHeight: {props.forecastData.swellHeight}</p>
        <p>windSpeed: {windSpeed(props.forecastData.windSpeed)}</p>
        <p>windDirection: {props.forecastData.windDirection}</p>
        <p>airTemperature: {tempConversion(props.forecastData.airTemperature)}</p>
      </div>
      /*swellHeight : null,
      waveHeight : null,
      wavePeriod : null,
      windSpeed : null,
      windDirection : null,
      waterTemperature: null,
      airTemperature : null
      */
    );
  }
  
}

export default SurfForecast;