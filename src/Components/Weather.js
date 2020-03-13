import React from "react";

import Day from "./Day";

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current_day: undefined,
        }
    }

    handleClick(e){
        const day = this.props.days[e];

        this.setState({
            current_day: day,
        });
        console.log("test");
    }
    
    render(){
        return(
            <div className="weather__info">
                {this.props.city && this.props.country && <p className="weather__key"> 
                    Location: <span className="weather__value"> {this.props.city }, {this.props.country }</span></p>}
                {this.props.days && <p className="weather__key"> 
                    <span className="weather__value">
                        <button onClick = {() => this.handleClick(0)}>{this.props.days[0][0].dt_txt.split('-')[1] + "-" + this.props.days[0][0].dt_txt.split(' ')[0].split('-')[2]}</button> 
                        <button onClick = {() => this.handleClick(1)}>{this.props.days[1][0].dt_txt.split('-')[1] + "-" + this.props.days[1][0].dt_txt.split(' ')[0].split('-')[2]}</button> 
                        <button onClick = {() => this.handleClick(2)}>{this.props.days[2][0].dt_txt.split('-')[1] + "-" + this.props.days[2][0].dt_txt.split(' ')[0].split('-')[2]}</button>   
                        <button onClick = {() => this.handleClick(3)}>{this.props.days[3][0].dt_txt.split('-')[1] + "-" + this.props.days[3][0].dt_txt.split(' ')[0].split('-')[2]}</button> 
                        <button onClick = {() => this.handleClick(4)}>{this.props.days[4][0].dt_txt.split('-')[1] + "-" + this.props.days[4][0].dt_txt.split(' ')[0].split('-')[2]}</button> 
                    </span></p>}
                
                <span><Day day={this.state.current_day}/></span>
                
                {this.props.error && <p className="weather__error">{this.props.error }</p> }
            </div>
        );
    }
}

export default Weather;