import React, { Component } from 'react';



class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
        updateInput: this.props.updateInput, 
        addTask: this.props.addTask}
        console.log(this.props)
    }
    render() { 
        return (
        <div>
            <form action="" onSubmit={(e) => this.props.onSubmit(e)}>
            <input type="text" placeholder="Enter in a task." 
            value={this.props.newTodo.value}
            onChange={(e) => this.state.updateInput(e.target.value)}
            />
            {/* <button onClick={this.state.addTask}>Submit</button> */}
            </form>
            <button onClick={this.state.addTask}>Submit</button>
        </div>
            
          );
    }
}
 
export default Input;