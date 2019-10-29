import React, { Component } from 'react';
import {ToDo} from "../todo"
import {Input} from "../input"


class ToDos extends Component {
    constructor(props){
        super(props)
        this.state = {todos: [
            
        ],
        newTodo: {id: null, value: ""}}
    }
    deleteTodo = todoid => {
        this.setState(
            {todos: this.state.todos.filter(todo => todo.id !== todoid)}
        )
    }
    addTask = () => {
        this.setState({
            todos: [...this.state.todos, this.state.newTodo]
        })
        this.setState({newTodo: {id: null, value: ""}})
    }
    updateInput = newinput => {
        this.setState({newTodo: {id: Math.floor(Math.random() * Math.floor(100)), value: newinput}})   
     }
    render() { 
        console.log(this.state.todos)
        console.log(this.state.newTodo)
        return (
        <React.Fragment>
            <Input updateInput={this.updateInput} addTask={this.addTask}/>
             <ul>
            {this.state.todos.map(todo => 
                <li key={todo.id}>
                <ToDo value={todo.value} id={todo.id} deleteTodo={this.deleteTodo}/>
                </li>)}
        </ul>
        </React.Fragment>
         )
    }
}
 
export default ToDos;