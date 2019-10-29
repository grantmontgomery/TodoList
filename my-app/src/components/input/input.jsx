import React, { Component } from 'react';



class Input extends Component {
    constructor(props){
        super(props)
        this.state = {value: this.props.value, 
        updateInput: this.props.updateInput, 
        addTask: this.props.addTask}
    }
    render() { 
        return (
        <div>
            <input type="text" placeholder="Enter in a task." 
            onChange={(e) => this.state.updateInput(e.target.value)}/>
            <button onClick={this.state.addTask}>Submit</button>
        </div>
            
          );
    }
}
 
export default Input;