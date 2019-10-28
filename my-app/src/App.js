import React, { Component } from 'react';
import {ToDos} from "./components"



class App extends Component {
    constructor(props){
        super(props)
        this.state= {value: ""}
    }
    render() { 
        return (
            <React.Fragment>
                    <ToDos></ToDos>
            </React.Fragment>
        )
    }

}
 
export default App;