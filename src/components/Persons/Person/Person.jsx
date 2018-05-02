import React, { Component } from 'react';
import styles from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
// import Radium from 'radium';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log("[Person.js] Inside constructor()");
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <WithClass classes={styles.Person}>
        <p>Hello, <input type="text" value={this.props.name} onChange={this.props.changed} /></p>
        <button onClick={this.props.delete} className={styles.Red}>x</button>
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  delete: PropTypes.func,
  changed: PropTypes.func,
}

// export default Radium(person);
export default Person;