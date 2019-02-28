import React, { Component } from 'react';
class App extends Component {
  state={
    name:'satwik',
    age:23
}
handleClick=(e)=>{
    console.log(e.target);
    this.setState({
        name:'Satwik Raman',
        age:23.2
    })
}
handleHover=(e)=>{
    console.log(e.pageX);
}
handleCopy=(e)=>{
    document.write('copying is prohibited');
    
}
  render() {
    return (
  
      <div className="app-content">
            <h1>Hi, Guys</h1>
            <p>My name is <strong>{this.state.name}</strong>. I am {this.state.age}.</p>
            <p>{Math.random()*10}</p>
            <button onClick={this.handleClick}>clickMe</button>
            <button onMouseOver={this.handleHover}>HoverMe</button>
            <p onCopy={this.handleCopy}>please don't the text</p>
            </div>
    );
  }
}

export default App;
