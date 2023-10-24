import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './startbutton.module.css';

const StartButton = () => {
  return (
    <NavLink to="/home">
      <button className={styles.button} data-text="HOME">
        <span className={styles.actualtext}>&nbsp;HOME&nbsp;</span>
        <span aria-hidden="true" className={styles.hovertext}>&nbsp;HOME&nbsp;</span>
      </button>
    </NavLink>
  );
};

export default StartButton;
