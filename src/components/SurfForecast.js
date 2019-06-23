import React from 'react';

const SurfForecast = (props) => {
  return (
    <div> 
      <button onClick={props.getSwellData}>Api</button>
      <button onClick={props.findSpot} >Spot</button>
      <p>Wave Height: {props.waveHeight}</p>
    </div>
  );
}

export default SurfForecast;