import React, { Component } from 'react';
import {ToDo} from "../todo"
import { link } from 'fs';


class ToDos extends Component {
    constructor(props){
        super(props)
        this.state = []
    }
   
    render() { 
        return (
        <ul>
            {this.state.map(todo => 
                <li>
                
                </li>)}
        </ul>  );
    }
}
 
export default ToDos;