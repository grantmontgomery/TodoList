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
        newTask: null}
            
    }
    deleteTodo = todoid => {
        this.setState(
            {todos: this.state.todos.filter(todo => todo.id !== todoid)}
        )
    }
    addTask(){
        const todos = this.state.todos
        const newtask = this.state.newTask
        this.setState({todos: todos.push({id:todos.length + 1, value: newtask})})
        this.setState({newTask: ""})
    }
    updateInput = newinput => {
        this.setState({newTask: newinput})
        console.log(this.state.newTask)
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