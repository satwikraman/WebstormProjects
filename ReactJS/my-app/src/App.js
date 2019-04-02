import React, { Component } from 'react';
import C1 from './C1';
import AddState from './AddState';

class App extends Component {
  state={
    ninjas:[
      {name:'satwik', age:23,height:175,id:1},
      {name:'raman', age:23.5,height:5.7,id:2},
      {name:'vivek', age:22,height:5.8,id:3}
    ]
  }
  addstate=(ninja)=>{
    ninja.id = Math.random();
    let ninjas=[...this.state.ninjas,ninja];
    this.setState=({
      ninjas:ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>welcome :)</p>
        <C1 ninjas={this.state.ninjas}/>
        <AddState addstate={this.addstate} />
      </div>
    );
  }
}

export default App;
