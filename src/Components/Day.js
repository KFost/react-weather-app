import React from "react";

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    calculateAverageTemp(){
        let avgTemp = 0;
        for(let i = 0; i < 8; i++){
            avgTemp += this.props.day[i].main.temp;
        }
        avgTemp = Math.round(avgTemp % 8);
        return avgTemp;
    }

    calculateAverageWind(){
        let avgWind = 0;
        for(let i = 0; i < 8; i++){
            avgWind += this.props.day[i].wind.speed;
        }
        avgWind = Math.round(avgWind % 8);
        return avgWind;
    }

    render() {
        return (
            <div className="test">
                {this.props.day && 
                    <p className="weather__key">Description: <span className="weather__value">{this.props.day[0].weather[0].description}</span></p>
                }
                {this.props.day && 
                    <p className="weather__key">Temperature: <span className="weather__value">{this.calculateAverageTemp()}</span></p>
                }
                {this.props.day && 
                    <p className="weather__key">Wind: <span className="weather__value">{this.calculateAverageWind()}</span></p>
                }     
            </div>
        );
    }
}

export default Day;