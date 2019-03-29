import React, { Component } from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";


class App extends Component {
  constructor() {
    super();
    this.state = {  // State: A piece of data that describes our app. Components with a state are called "smart". smart components use the class syntax, because we need "this". As soon as a State changes the App gets rerendered
      todos: [],
      searchfield: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos") // load users from website after component did mount -> update state -> rerender
      .then(response => response.json())
      .then(users => this.setState({ todos: users }));
  }

  onSearchChange = (event) => { // Arrow Function is a must here, otherwise "this" will not refer to "App" but to the onChange property
    this.setState({ searchfield: event.target.value });
  }

  deleteChange = event => {
    const { todos } = this.state;
    todos.forEach((todo, index) => {
      if (todo.id === Number(event.target.id)) {
        todos.splice(index, 1);
        this.setState({ todos: todos });  // state change forces rerender of CardList
      }
    })
  }

  toggleCompleted = event => {
    const index = this.state.todos.findIndex(todo => todo.id === Number(event.target.id));
    const { todos } = this.state;
    todos[index].completed = event.target.checked;
    this.setState({ todos: todos });
  }

  render() {
    const { todos, searchfield } = this.state;
    const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchfield.toLowerCase()));



    return !todos.length ?
      <h1 className="tc f1">Loading...</h1> :
      (
        <div className="tc" >
          <h1 className="f1">RoboList</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList todos={filteredTodos} deleteChange={this.deleteChange} toggleCompleted={this.toggleCompleted} />
          </Scroll>
        </div>
      );
  }
}


export default App;