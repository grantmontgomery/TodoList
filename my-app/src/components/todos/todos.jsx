import React, { Component } from 'react';
import {ToDo} from "../todo"
import {Input} from "../input"


class ToDos extends Component {
    constructor(props){
        super(props)
        this.state = {todos: [
            {id: 1, value: "Wash Dishes."},
            {id: 2, value: "Take out trash."}
        ],
        newTodo: {id: null, value: ""}}
    }
    deleteTodo = todoid => {
        this.setState(
            {todos: this.state.todos.filter(todo => todo.id !== todoid)}
        )
        console.log(this.state.newTodo)
    }
    addTask = () => {
        this.setState({
            todos: [...this.state.todos, this.state.newTodo]
        })
        this.setState({newTodo: {id: null, value: ""}})
        console.log(...this.state.todos)
       
    }
    updateInput = newinput => {
        this.setState({newTodo: {id: this.state.todos.length + 1, task: newinput}})
        console.log(this.state.newTodo)   
     }
    render() { 
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