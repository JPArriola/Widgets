import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      weather: null,
    }
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location) {
    const {latitude, longitude} = location.coords;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=3ec2e0139d7d3a901be8084c3360005e`;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({ weather: data });
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  render() {
    let content = <div>loading weather...</div>;
    console.log(this.state.weather);

    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
        <p>{weather.name}</p>
        <p>{temp.toFixed(1)} degrees</p>
      </div>;
    }
    return (
      <div>
        <h1>Weather</h1>
        <div className='weather'>
          {content}
        </div>
      </div>
    );
  }
}

export default Weather;