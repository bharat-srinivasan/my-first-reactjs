import React, { Component } from 'react';
import styles from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

// import Radium, { StyleRoot } from 'radium';

class App extends Component {

  state = {
    persons: [
      { name: "Bharat", age: 31 },
      { name: "Dileep", age: 29 }
    ]
  };

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
    return (
      // For media queries, you need to wrap root app with StyleRoot. Not required for pseudo selectors.
      // <StyleRoot>
      <div className={styles.App}>
        <Cockpit
          delete={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          persons={this.state.persons}
          toggle={this.switchNameHandler}></Cockpit>
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
