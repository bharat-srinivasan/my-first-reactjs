import React from 'react';
import styles from './Person.css';
// import Radium from 'radium';

const person = (props) => {
  return (
    <div className={styles.Person}>
      <p>Hello, <input type="text" value={props.name} onChange={props.changed} /></p>
      <button onClick={props.delete} className={styles.Red}>x</button>
    </div>
  );
};

// export default Radium(person);
export default person;