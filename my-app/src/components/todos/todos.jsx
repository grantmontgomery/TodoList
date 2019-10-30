import React, { Component } from 'react';
import {ToDo} from "../todo"
import {Input} from "../input"


class ToDos extends Component {
    constructor(props){
        super(props)
        this.state = {
        todos: [],
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
        console.log(this.state.newTodo)
        this.setState({newTodo: {id: null, value: ""}})
    }
    // clickAdd(event){
    //     event.preventDefault()
    //     this.addTask()
    // }
    updateInput = newinput => {
        this.setState({newTodo: {id: Math.floor(Math.random() * Math.floor(100)), value: newinput}})   
     }
    onSubmit(event){
        event.preventDefault()
        this.addTask()
    }
    render() { 
        return (
        <React.Fragment>
            <Input updateInput={this.updateInput} addTask={this.addTask} 
            newTodo={this.state.newTodo} onSubmit={this.onSubmit}/>
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