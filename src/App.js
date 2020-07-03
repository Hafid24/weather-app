import React, { Component } from 'react' 
import axios from 'axios' 


 

class App extends Component {
  constructor(props){
    super(props) 

    this.state = { 
      city: "", 
      data: {}, 
      BASE_URL: 'http://api.openweathermap.org/data/2.5/forecast?appid=3f22c36b9a089e763eda3c404b3f8450'
      } 

    this._onInputChange = this._onInputChange.bind(this)  
    this._onSubmit = this._onSubmit.bind(this)  
  } 
 
  
  _onInputChange(event){ 
    this.setState({ city: event.target.value }) 
  } 

  _onSubmit(event){ 
    event.preventDefault() 
    this.fetchWeather(this.state.city) 
    .then(request=>{ 
     this.setState({ 
       data:request.data 
     }); 
     this.logWetherData() 
    }) 
    .catch(error => { 
      alert(`The unknown error has occurred: ${error}`) 
    }); 
    this.setState({city: ''}) 
  } 

  logWetherData=()=>{ 
    const data = this.state.data 
    const weatherMessage = `Weather in ${data.city.name} in ${data.list[0].dt_txt} has ${data.list[0].weather[0].description} with temperature of  ${data.list[0].main.temp}` 
    console.log(weatherMessage) 
  } 

  fetchWeather = (city)=> { 
    const { BASE_URL } = this.state;
    return new Promise(function(resolve, reject) { 
    const url = `${BASE_URL}&q=${city}` 
    const request = axios.get(url) 
    resolve(request); 
  }) 
  
} 



  render() { 
    
    return ( 
      <form className="input-group" onSubmit={this._onSubmit}> 
        <input className="form-control" type="text" placeholder="Type the city" value={this.state.city} onChange={this._onInputChange}/> 
        <span className="input-group-btn"> 
          <button type="submit" className="btn btn-secondary">Get weather</button> 
        </span> 
      </form> 
    )
    
  }
}

export default App;
