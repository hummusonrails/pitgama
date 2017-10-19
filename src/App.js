import React, { Component } from 'react';
import logo from './static_resources/images/pitgama_header.png';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header" >
              <img src={logo} className="App-logo" alt="pitgama logo" />
              <h1 className="App-title">Welcome to pitgama</h1>
            </header>
            <p className="App-intro">
              Some filler text.
            </p>
          </div>
        );
    }
}

export default App;
