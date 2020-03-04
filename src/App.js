import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './Components/BarChart';



class App extends Component {

  state = {
    barData : [{year: 2015, value: 123},
               {year: 2016, value: 250},
               {year: 2017, value: 895},
               {year: 2018, value: 654},
               {year: 2019, value: 375},
    ],
    highest_value: 895,
  }

  render() {
    return (
      <div className="App" style={{background: '#282B33'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BarChart 
          barData={this.state.barData}
          highest_value={this.state.highest_value}
          barColor='#add8e6'
        />
        <div style={{color: '#ffffff', paddingTop: '20px'}}>React Bar Chart Example</div>
        <div style={{color: '#ffffff', paddingBottom: '50px'}}>Don't judge, it was built in 20 minutes :-)
        </div>
      </div>
    );
  }
}

export default App;
