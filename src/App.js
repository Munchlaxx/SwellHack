import React, {Component} from 'react';
import './App.css';
import SearchBox from './components/Searchbar';
import SurfForecast from './components/SurfForecast';
import spotData from './data';
class App extends Component {
  constructor(){
    super()
    this.state = {
      spotInfo : {},
      swellHeight : null,
      waveHeight : null,
      wavePeriod : null,
      windSpeed : null,
      windDirection : null,
      waterTemperature: null,
      airTemperature : null
    
    }
  }

  getSwellData = async (event) => {
    const spotObj = this.findSpot();
    const lat = spotObj.lat;
    const lng = spotObj.long;
    const params = spotObj.weatherParams;
    const api_call = await fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'f0407b78-95be-11e9-9c0e-0242ac130004-f0407c86-95be-11e9-9c0e-0242ac130004'
      }
    });
    const data = await api_call.json();
    console.log(data);
    this.setState({
      swellHeight : null,
      waveHeight : null,
      wavePeriod : null,
      windSpeed : null,
      windDirection : null,
      waterTemperature: null,
      airTemperature : null
    });
  }

  findSpot = () => {
    console.log(spotData.spots[0]);
      this.setState({
        spotInfo: spotData
      });
      return spotData.spots[0];
      
  }

  render(){
    return (
      <div >
      <p>Hello</p>
      <SearchBox />
      <SurfForecast getSwellData ={this.getSwellData} findSpot = {this.findSpot}/>
      </div>
    );
  }
  
}

export default App;
