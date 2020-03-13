import React from "react";

import Titles from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const WEATHER_API_KEY = "dfceb610a4345e0b76e9e7c8485c612f";

class App extends React.Component {
  state = {
    data: undefined,
    days: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}&units=metric`);
    const api_call2 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${WEATHER_API_KEY}&units=metric`);
    const api_data = await api_call2.json();

    if(api_data.cod !== "404"){
      console.log(api_data);

      this.setState({
        data: api_data,
        city: api_data.city.name,
        country: api_data.city.country,
        error: ""
      });

      this.interpretData();

    } else {
      this.setState({
        data: undefined,
        city: undefined,
        country: undefined,
        error: "Please give a valid city and country",
        days: undefined
      });
    }
  }

  interpretData(){
    const data_forecast = this.state.data; 
    const new_data = Array(5).fill(null);

    for(let i = 0; i < 5; i++){
        let new_periods = new Array(8).fill(null);
        for(let y = 0; y < 8; y++){
            new_periods[y] = data_forecast.list[y + (i * 8)];
        }
        new_data[i] = new_periods;
    }

    this.setState({
        days: new_data,
    })
}

  render(){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    days={this.state.days}
                    city={this.state.city} 
                    country={this.state.country}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;