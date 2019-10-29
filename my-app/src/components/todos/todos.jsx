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
    addTask(){
        const newTodo = this.state.newTodo
        const newtodos = this.state.todos.push(newTodo)
        this.setState({todos: newtodos})
        this.setState({newTodo: {id: null, task:""}})
       
    }
    updateInput = newinput => {
        this.setState({newTodo: {id: this.state.todos.length + 1, task: newinput}})   
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