import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';



class App extends Component {

  state={
    sicaklik:undefined,
    sehir:undefined,
    ulke:undefined,
    nem:undefined,
    aciklama:undefined,
    hata:undefined
  }

  getWeather=async (e)=>{
    // console.log(e.target.elements.city);
    const API_KEY='559d15edf55ffa8eee9b5ce36066d59c';
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;

    e.preventDefault();
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data=await api_call.json();
  

    if(city && country ){
      console.log(data);

      this.setState({
        sicaklik:data.main.temp,
        sehir:data.name,
        ulke:data.sys.country,
        nem:data.main.humidity,
        aciklama:data.weather[0].description,
        hata:""
      })
    } 
    else {
      this.setState({
        sicaklik:undefined,
        sehir:undefined,
        ulke:undefined,
        nem:undefined,
        aciklama:undefined,
        hata:"Lütfen hava durumunu öğrenmek istediğiniz şehri ve ülkeyi yazınız"
      })
    }
 
  }

  render(){
    return (
      <div className="App container">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temp={this.state.sicaklik} 
          city={this.state.sehir}
          country={this.state.ulke}
          humidity={this.state.nem}
          description={this.state.aciklama}
          error={this.state.hata}

          
          />
      
      </div>
    );
  }

}

export default App;
