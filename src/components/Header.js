import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <div className={`${styles.header} ${styles.container}`}>
    <h2 className={`${styles.headerText} ${styles.section}`}>
      Weekly Meetings Statistics
    </h2>
  </div>
);

export default Header;
