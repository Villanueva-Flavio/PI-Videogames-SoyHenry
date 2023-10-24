import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './startbutton.module.css';

const StartButton = () => {
  return (
    <NavLink to="/home">
      <button className={styles.button} data-text="START">
        <span className={styles.actualtext}>&nbsp;START&nbsp;</span>
        <span aria-hidden="true" className={styles.hovertext}>&nbsp;START&nbsp;</span>
      </button>
    </NavLink>
  );
};

export default StartButton;
