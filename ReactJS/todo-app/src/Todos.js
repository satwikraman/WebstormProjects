import React from 'react';

const Todos=({todos, deleteTodo})=>{
    const todoList=todos.length ? (
        todos.map((todo)=>{
            return(
                <div className="collection-item" key ={todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}>{todo.title}</span>
                </div>
            )
        })
    ):(
        <p className="center">List is empty</p>
    )
    return(
        <div className=" todo collection container">
            {todoList}
        </div>
    )
}
export default Todos;