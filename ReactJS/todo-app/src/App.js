import React, { Component } from 'react';

import Todos from './Todos'
import AddTodos from './AddTodos'
class App extends Component {
  state = {
    todos: []
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      this.setState({
        todos:res.slice(0,10)
      })
    })
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
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodos addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
