import React, { Component } from 'react';


class Input extends Component {
    state = {value: "" }
    updateInput(input){
        this.setState({value: input})
    }
    createTodo(){
        this.setState({value: ""})
    }
    render() { 
        return (
        <div>
            <input type="text"/>
            <button>Submit</button>
        </div>
            
          );
    }
}
 
export default Input;