import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let persons = this.state.persons.map((person, index) => {
      return (
        <ErrorBoundary>
          <Person key={person.name + index}
            name={person.name}
            changed={(event) => this.nameChangedHandler(index, event.target.value)}
            delete={() => this.deletePersonHandler(index)} />
        </ErrorBoundary>);
    });
    return (
      // For media queries, you need to wrap root app with StyleRoot. Not required for pseudo selectors.
      // <StyleRoot>
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles["App-title"]}>Welcome to React</h1>
        </header>
        <button onClick={this.switchNameHandler}>Switch</button>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
