import React, { PureComponent } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends PureComponent {

  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside constructor()");
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }

  componentWillReceiveProps(nextProps) {
    console.log("[Persons.js] Inside componentWillReceiveProps()", nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] Inside shouldComponentUpdate()", nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Persons.js] Inside componentWillUpdate()", nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("[Persons.js] Inside componentDidUpdate()", nextProps, nextState);
  }

  render() {
    console.log("[Persons.js] Inside render()");
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary>
          <Person key={person.name + index}
            name={person.name}
            changed={(event) => this.props.changed(index, event.target.value)}
            delete={() => this.props.delete(index)} />
        </ErrorBoundary>);
    });
  }
}

export default Persons;