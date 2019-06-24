import React, {Component} from 'react';
import './App.css';
import SearchBox from './components/Searchbar';
import SurfForecast from './components/SurfForecast';
// import spotData from './data';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      spotInfo : null,
      forecastData: {
        
      }
    
    }
  }

  calculatetime (date){
    return new Date(date).toISOString()
  }

  // componentDidMount () {
  //   if (this.state.spotInfo === null){
  //     this.setState({
  //       spotInfo : spotData.spots,
  //     })
  //   }
  // }
  // Function that will make the API call to StormGlass
  getSwellData = async (event) => {
    const spotObj = this.state.spotInfo;
    const lat = spotObj.lat;
    const lng = spotObj.long;
    const params = spotObj.weatherParams;
    const time = this.calculatetime(spotObj.time);
    const source = 'noaa'
    const api_call = await fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}&params=${params}&end=${time}&source${source}`, {
      headers: {
        'Authorization': 'f0407b78-95be-11e9-9c0e-0242ac130004-f0407c86-95be-11e9-9c0e-0242ac130004'
      }
    });
    const data = await api_call.json();
    console.log(data);
    this.setState({
      forecastData : {
      swellHeight : data.hours[data.hours.length - 1].swellHeight[1].value,
      waveHeight : data.hours[data.hours.length - 1].waveHeight[1].value,
      wavePeriod : data.hours[data.hours.length - 1].wavePeriod[1].value,
      windSpeed : data.hours[data.hours.length - 1].windSpeed[1].value,
      windDirection : data.hours[data.hours.length - 1].windDirection[1].value,
      waterTemperature: data.hours[data.hours.length - 1].waterTemperature[1].value,
      airTemperature : data.hours[data.hours.length - 1].airTemperature[1].value
      }
    });
  }


  render(){
    return (
      <div >
      <p>Hello</p>
      <SearchBox 
        findSpot ={this.findSpot} 
      />
      <SurfForecast 
      findSpot = {this.findSpot}
      forecastData = {this.state.forecastData}
       />
      </div>
    );
  }
  
}

export default App;
