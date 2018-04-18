import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = (props) => {
  return props.persons.map((person, index) => {
    return (
      <ErrorBoundary>
        <Person key={person.name + index}
          name={person.name}
          changed={(event) => props.changed(index, event.target.value)}
          delete={() => props.delete(index)} />
      </ErrorBoundary>);
  });
};

export default persons;