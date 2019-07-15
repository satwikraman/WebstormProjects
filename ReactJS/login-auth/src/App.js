import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard'
class App extends Component {
  state = {
    userId: '',
    password: '',
    auth: false
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.props.login
    console.log(this.state)
    if ((this.state.userId === username) && (this.state.password === password)) {
      this.setState({
        auth: true
      })

    } else {
      window.alert('userId/Password is incorrect')
    }
  }
  render() {
    return (
      (this.state.auth) ? (
        <Dashboard />
      ) : (
          <div className="App container">
            <div className="card center">
              <div className="card-body ">
                <form className=" form-group" onSubmit={this.handleSubmit}>
                  userId:<input className="form-text" type="text" name="userId" onChange={this.handleChange} /><br />
                  Password:<input className="form-control" type="password" name="password" onChange={this.handleChange} /><br />
                  <button className="btn btn-primary mb-1">Login</button>
                </form>
              </div>
            </div>
          </div>
        )
    );
  }
}
const mapStateToProps = (state) => {

  return {
    login: state.login
  }
}
export default connect(mapStateToProps)(App);
