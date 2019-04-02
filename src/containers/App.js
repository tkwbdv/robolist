import React, { Component } from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import RadioFilter from "../components/RadioFilter";
import UserFilter from "../components/UserFilter";
import AllUsersButton from "../components/AllUsersButton";


class App extends Component {
  constructor() {
    super();

    this.state = {  // State: A piece of data that describes our app. Components with a state are called "smart". smart components use the class syntax, because we need "this". As soon as a State changes the App gets rerendered
      todos: [],
      searchfield: "",
      radio: "",
      userFilter: [],
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos") // load users from website after component did mount -> update state -> rerender
      .then(response => response.json())
      .then(users => {
        this.setState({ todos: users })
        this.setState({ userFilter: this.generateUserArray(this.state.todos) });
      });

  }

  generateUserArray = (todos) => {
    return todos.reduce((acc, todo) => {
      //Generate Array of present userIds in filtered todos
      if (todo.userId === acc[acc.length - 1]) {
        return acc;
      } else {
        acc.push(todo.userId);
        return acc;
      }
    }, [])
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

  userFilterChange = event => {
    this.setState({ userFilter: [Number(event.target.id)] });
  }

  ShowAllUsersHandler = event => {
    this.setState({ userFilter: this.generateUserArray(this.state.todos) });
  }

  render() {
    const { todos, searchfield, radio, userFilter } = this.state;

    const filteredTodos = todos.filter(todo => {
      const filter = todo.title.toLowerCase().includes(searchfield.toLowerCase());  // filter is the searchfield input

      switch (radio) {  // filter by radio buttons
        case "done":
          return filter && todo.completed && userFilter.includes(todo.userId)
        case "todo":
          return filter && !todo.completed && userFilter.includes(todo.userId)
        default:
          return filter && userFilter.includes(todo.userId)
      }
    });



    return !todos.length ?
      <h1 className="tc f1">Loading...</h1> :
      (
        <div className="tc" >

          <h1 className="f1">RoboList</h1>

          <div className="flex items-center justify-between ma2">
            <div className="RadioFilter">
              <RadioFilter changeRadio={this.onRadioChange} />
            </div>
            <div className="h3 flex">
              <UserFilter todos={filteredTodos} userFilterChange={this.userFilterChange} userArray={this.generateUserArray} />
              <AllUsersButton className="" userTodos={this.generateUserArray(this.state.todos)} ShowAllUsersHandler={this.ShowAllUsersHandler} userFilter={this.state.userFilter} />
            </div>
            <div className="searchBox">
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