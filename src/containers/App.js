import React, { Component } from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";


class App extends Component {
  constructor() {
    super();
    this.state = {  // State: A piece of data that describes our app. Components with a state are called "smart". smart components use the class syntax, because we need "this". As soon as a State changes the App gets rerendered
      robots: [],
      searchfield: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos") // load users from website after component did mount -> update state -> rerender
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => { // Arrow Function is a must here, otherwise "this" will not refer to "App" but to the onChange property
    this.setState({ searchfield: event.target.value });
  }

  deleteChange = event => {
    console.log(event.target);
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => robot.title.toLowerCase().includes(searchfield.toLowerCase()));

    return !robots.length ?
      <h1 className="tc f1">Loading...</h1> :
      (
        <div className="tc" >
          <h1 className="f1">RoboList</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} deleteChange={this.deleteChange} />
          </Scroll>
        </div>
      );
  }
}


export default App;