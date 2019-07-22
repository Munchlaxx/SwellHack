import React, {Component} from 'react';
import './App.css';
import spotData from './data';

// Components
import NavBar from './components/NavBar';
import SearchBox from './components/Searchbar';
import SurfForecast from './components/SurfForecast';
import ForecastCard from './components/ForecastCard';
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

  findSpot = (name) => {
    let index;
    for (let i = 0; i < spotData.spots.length; i++){
      if (spotData.spots[i].spot === name){
        index = i;
      }
    }
    
    this.setState({
      spotInfo : spotData.spots[index]
    }, () => {
      this.getSwellData()
    })     
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
    const dataObject = data.hours[data.hours.length - 1]; 
    this.setState({
      forecastData : {
      swellHeight : dataObject.swellHeight[1].value,
      waveHeight : dataObject.waveHeight[1].value,
      wavePeriod : dataObject.wavePeriod[1].value,
      windSpeed : dataObject.windSpeed[1].value,
      windDirection : dataObject.windDirection[1].value,
      waterTemperature: dataObject.waterTemperature[1].value,
      airTemperature : dataObject.airTemperature[1].value
      }
    });
  }


  render(){
    return (
      <div>
        <NavBar/>
        <div className='container'>
        <SearchBox 
          findSpot ={this.findSpot} 
        />
        <SurfForecast 
        forecastData = {this.state.forecastData}
        />
        <ForecastCard/>
        </div>
      </div>
    );
  }
  
}

export default App;
