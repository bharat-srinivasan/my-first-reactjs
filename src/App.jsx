import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Bharat", age: 31 },
      { name: "Dileep", age: 29 }
    ]
  };

  constructor(props) {
    super(props);
  }

  switchNameHandler = () => {
    console.log("Switching!!");
    this.setState({
      persons: [
        { name: "Bharat", age: 31 },
        { name: "Dileep", age: 29 },
        { name: "Sharad", age: 26 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    console.log(`Name changed: ${event.target.value}`);
  }

  render() {
    let persons = this.state.persons.map(person => {
      return <Person name={person.name} change={this.nameChangedHandler} />
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.switchNameHandler}>Switch</button>
        {persons}
      </div>
    );
  }
}

export default App;
