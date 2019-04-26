import React from 'react';
import C1 from './components/C1'

class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    questions:[],
    rowNo:0
  }

}
componentDidMount(){
  fetch("https://test.stag.talentscreen.io/v1/tsq/tschallenges?subjectid=56&levelid=1&questiontype=choice&authentication=false")
  .then(resp=>resp.json())
  .then(resp=>{
    console.log(resp.questions)
    this.setState({
      questions:resp.questions
    })
  })
}

  render(){

  return (
    <div className="App">
    <C1 rowNo={this.state.rowNo} questions={this.state.questions}/>
    </div>
  );
}
}
export default App;
