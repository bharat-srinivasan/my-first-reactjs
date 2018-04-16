import React from 'react';
import './Person.css';
// import Radium from 'radium';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className="Person" style={style}>
      <p>Hello, <input type="text" value={props.name} onChange={props.changed} /></p>
      <button onClick={props.delete}>X</button>
    </div>
  );
};

// export default Radium(person);
export default person;