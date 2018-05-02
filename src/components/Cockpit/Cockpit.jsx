import React from 'react';
import styles from './Cockpit.css';
import Persons from '../Persons/Persons';
import Aux from '../../hoc/aux';

import logo from '../../assets/logo.svg';

const cockpit = function (props) {

  return (
    <Aux>
      <header className={styles.CockpitHeader}>
        <img src={logo} className={styles.CockpitLogo} alt="logo" />
        <h1 className={styles["Cockpit-title"]}>Welcome to React</h1>
      </header>
      <button onClick={props.toggle}>Toggle</button>
      <Persons persons={props.persons} delete={props.delete} changed={props.changed}></Persons>
    </Aux>
  );
}

export default cockpit;