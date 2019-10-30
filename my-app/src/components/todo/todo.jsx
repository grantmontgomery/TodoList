import React, { Component } from 'react';


class ToDo extends Component {
    constructor(props){
        super(props)
        this.state = {id: this.props.id, value: this.props.value}
    }
    render() { 
        return (
            <div todoid={this.state.id}>
                <input type="checkbox"/>
                <span>{this.state.value}</span>
                <button onClick={() => this.props.deleteTodo(this.state.id)}>Delete</button>
            </div>
          );
    }
}
 
export default ToDo 