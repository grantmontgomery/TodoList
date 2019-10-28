import React, { Component } from 'react';


class ToDo extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <input type="checkbox"/>
                <span>Wash Dishes </span>
                <button>Delete</button>
            </div>
          );
    }
}
 
export default ToDo 