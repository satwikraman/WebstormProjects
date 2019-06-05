import React from 'react'

class search extends React.Component{
    state={
        value:''
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.props.history.push(`/${this.state.value}`)
    }
    render(){
        return(
            <div className="container input-group mb-3 center home " style={{width: '360px', left: '100px', top: '200px'}}>
                <form onSubmit={this.handleClick}>
                <input type="text" className="form-control" placeholder="Enter car model" onChange={(e)=>{this.setState({value:e.target.value})}}  aria-describedby="basic-addon2" />
                    <button className="input-group-append btn btn-outline-secondary"  type="button">Button</button>
                </form>
            </div>
)
    }
}
export default search