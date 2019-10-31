import React, { Component } from 'react';
import "./todo.css"

class ToDo extends Component {
    constructor(props){
        super(props)
        this.state = {id: this.props.id, value: this.props.value, text: ""}
    }
    checkBox(event){
        if(event.target.value === "on" && this.state.text === ""){
            this.setState({text: "checked"})}
        else{
            this.setState({text: ""})
        }}
    render() { 
        return (
            <div todoid={this.state.id} className="todo">
                <label htmlFor="">Done</label>
                <input type="checkbox"
                onChange={e => this.checkBox(e)}
                />
                <span className={this.state.text}>{this.state.value}</span>
                <button style={{float: "right"}} onClick={() => this.props.deleteTodo(this.state.id)}>Delete</button>
            </div>
          );
    }
}
 
export default ToDo 