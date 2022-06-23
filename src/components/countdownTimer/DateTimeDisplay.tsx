import React from 'react';
import styles from './styles.module.scss';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? styles.danger : styles.dateDisplayTimer}>
      <p className={styles.clock}>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;

