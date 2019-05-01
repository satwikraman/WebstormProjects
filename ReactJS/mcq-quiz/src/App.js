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
    
    this.setState({
      questions: resp.questions
    })
  })
}

handleSubmit=(e)=>{
  e.preventDefault();
  let rowNo=this.state.rowNo+1;
  this.setState({
    rowNo: rowNo
  })
  console.log(this.state.questions);
}

handleChange=(e)=>{
  let rowNo=this.state.rowNo
  let questions=this.state.questions
  let candidateAnswer=e.target.value
  questions[rowNo].candidateAnswer=candidateAnswer
  this.setState({
    questions:questions
  })
}

  render(){
  return (
    <div className="App">
      <C1 handleSubmit={this.handleSubmit}  rowNo={this.state.rowNo} handleChange={this.handleChange} questions={this.state.questions}/>
    </div>
  );
}
}
export default App;
