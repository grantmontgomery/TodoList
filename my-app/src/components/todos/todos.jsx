import React, { Component } from "react";
import { ToDo } from "../todo";
import { Input } from "../input";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./todos.css";

class ToDos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      slideIn: true,
      newTodo: { id: null, value: "" }
    };
  }
  deleteTodo = todoid => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoid)
    });
  };
  addTask = () => {
    if (this.state.newTodo.value === "") {
      alert("Must enter in a task.");
    } else {
      this.setState({
        todos: [...this.state.todos, this.state.newTodo]
      });
      this.setState({ newTodo: { id: null, value: "" } });
    }
  };
  updateInput = newinput => {
    this.setState({
      newTodo: {
        id: Math.floor(Math.random() * Math.floor(100)),
        value: newinput
      }
    });
  };
  onSubmit(event) {
    event.preventDefault();
    this.addTask();
  }

  applyTransitions = () => {
    return this.state.todos.map(todo => (
      <CSSTransition timeout={3000} classNames="slide-transition">
        <li
          key={todo.id}
          style={{ listStyle: "none" }}
          className="child"
          draggable="true"
        >
          <ToDo value={todo.value} id={todo.id} deleteTodo={this.deleteTodo} />
        </li>
      </CSSTransition>
    ));
  };

  render() {
    console.log(this.state.todos);
    return (
      <React.Fragment>
        <Input
          updateInput={this.updateInput}
          addTask={this.addTask}
          newTodo={this.state.newTodo}
          onSubmit={this.onSubmit}
        />
        <ul className="list">
          <TransitionGroup>{this.applyTransitions()}</TransitionGroup>
        </ul>
      </React.Fragment>
    );
  }
}

export default ToDos;
