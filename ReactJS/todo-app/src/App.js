import React, { Component } from 'react';
import axios from 'axios'
import Todos from './Todos'
import AddTodos from './AddTodos'
class App extends Component {
  state = {
    todos: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/')
  }
  addTodo=(todo)=>{
    todo.id=Math.random();
    let todos=[...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id !==id
    })
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <AddTodos addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
