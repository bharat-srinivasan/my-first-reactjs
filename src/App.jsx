import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

import Radium, { StyleRoot } from 'radium';

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

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  nameChangedHandler = (index, newValue) => {
    console.log(`Name changed: ${newValue} - ${index}`);
    const person = { ...this.state.persons[index] };
    person.name = newValue;
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({
      persons: persons
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = this.state.persons.map((person, index) => {
      return <Person key={person.name + index} name={person.name} changed={(event) => this.nameChangedHandler(index, event.target.value)} delete={() => this.deletePersonHandler(index)} />
    });
    return (
      // For media queries, you need to wrap root app with StyleRoot. Not required for pseudo selectors.
      <StyleRoot>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <button style={style} onClick={this.switchNameHandler}>Switch</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
