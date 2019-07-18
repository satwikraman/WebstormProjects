import React, { Component } from 'react'

class AddTodos extends Component {
    state = {
        title: ''
    }
    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <React.Fragment className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new Todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.title} required />
                </form>
            </React.Fragment>
        )
    }
}
export default AddTodos
