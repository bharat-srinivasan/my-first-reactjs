import React, { PureComponent } from 'react';
import styles from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import wrapIt from '../hoc/wrapIt';

// import Radium, { StyleRoot } from 'radium';
// DO NOT USE PURE COMPONENT EVERYWHERE. USE WHEN A COMPONENT MIGHT UNDERGO UPDATES.
class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor()");
    this.state = {
      persons: [
        { name: "Bharat", age: 31 },
        { name: "Dileep", age: 29 }
      ]
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[App.js] Inside shouldComponentUpdate()", nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[App.js] Inside componentWillUpdate()", nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("[App.js] Inside componentDidUpdate()", nextProps, nextState);
  }

  switchNameHandler = () => {
    console.log("Switching!!");
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons,
        persons: [
          { name: "Bharat", age: 31 },
          { name: "Dileep", age: 29 }
        ]
      };
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
    console.log("[App.js] Inside render()");
    return (
      // For media queries, you need to wrap root app with StyleRoot. Not required for pseudo selectors.
      // <StyleRoot>
      <WithClass classes={styles.App}>
        <button onClick={() => { this.setState({ showPersons: true }); }}>Show Persons</button>
        <Cockpit
          delete={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          persons={this.state.persons}
          toggle={this.switchNameHandler}></Cockpit>
      </WithClass>
      
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default wrapIt(App);
