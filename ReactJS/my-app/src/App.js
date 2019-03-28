import React, { Component } from 'react';
import C1 from './C1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>welcome :)</p>
        <C1 Name="vivek" Age="23" Height="175"/>
        <wbr></wbr>
        <C1 Name="Satwik" Age="23" Height="5.8"/>
      </div>
    );
  }
}

export default App;
