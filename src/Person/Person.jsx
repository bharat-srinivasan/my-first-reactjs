import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p>Hello, <input type="text" value={props.name} onChange={props.changed} /></p>
    </div>
  );
};

export default person;