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

console.log(e.target)
}
handleChange=(e)=>{
  e.preventDefault();
  //let questions=this.state.questions
  //let candidateAnswer=e.target.value
  
  this.setState({
     
  })
}
  render(){
    let questions=this.state.questions;
    let rowNo=this.state.rowNo;
    let question=questions[rowNo]
    for(var i in question){
      console.log(i);
    }
  return (
    <div className="App">
    <C1 handleSubmit={this.handleSubmit}  rowNo={this.state.rowNo} questions={this.state.questions}/>

    </div>
  );
}
}
export default App;
