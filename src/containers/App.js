import React, { Component } from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import RadioFilter from "../components/RadioFilter";


class App extends Component {
  constructor() {
    super();
    this.state = {  // State: A piece of data that describes our app. Components with a state are called "smart". smart components use the class syntax, because we need "this". As soon as a State changes the App gets rerendered
      todos: [],
      searchfield: "",
      radio: "",
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

  onRadioChange = event => {
    this.setState({ radio: event.target.value });
  }

  render() {
    const { todos, searchfield, radio } = this.state;
    const filteredTodos = todos.filter(todo => {
      const filter = todo.title.toLowerCase().includes(searchfield.toLowerCase());
      switch (radio) {
        case "done":
          return filter && todo.completed
        case "todo":
          return filter && !todo.completed
        default:
          return filter
      }
    });



    return !todos.length ?
      <h1 className="tc f1">Loading...</h1> :
      (
        <div className="tc" >
          <h1 className="f1">RoboList</h1>

          <div className="flex justify-center">
            <div className="flex RadioFilter">
              <RadioFilter changeRadio={this.onRadioChange} />
            </div>
            <div className="flex searchBox">
              <SearchBox searchChange={this.onSearchChange} />
            </div>
          </div>

          <Scroll>
            <CardList todos={filteredTodos} deleteChange={this.deleteChange} toggleCompleted={this.toggleCompleted} />
          </Scroll>
        </div>
      );
  }
}


export default App;