import React, { Component } from 'react';
//import axios from 'axios'
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "....loading"
    };
    this.getData();
  }
  getData() {
    let data = fetch(
      "http://localhost:4300/Employee/5cc0d2c218d83a4c740db882",
      {
        mode: "no-cors"
      }
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(data => {
        return (this.state.data = "done loading");
      });
    }, 5000);
  }
  render() {
    return (
      <div>
        <h1>hello</h1>
        <h1>{this.state.data}</h1>
        <App />
      </div>
    );
  }
}



export default App;
