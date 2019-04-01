import React, {Component} from 'react';

class AddState extends Component{
    state={
        name:null,
        age:null,
        height:null
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addState(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" onChange={this.handleChange}/>
                    <label htmlFor="height">Height</label>
                    <input type="number" id="height" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
            
        )
    }
}
export default AddState;