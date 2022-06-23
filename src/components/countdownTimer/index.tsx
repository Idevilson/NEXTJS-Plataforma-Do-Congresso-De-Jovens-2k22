import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../../hooks/useCountdown';

import styles from './styles.module.scss';

const ExpiredNotice = () => {
  return (
    <div className={styles.expiredNotice}>
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.counterContainer}>
        <DateTimeDisplay value={days} type={'Dias'} isDanger={days <= 3} />
        <p className={styles.separator}>:</p>
        <DateTimeDisplay value={hours} type={'Horas'} isDanger={false} />
        <p className={styles.separator}>:</p>
        <DateTimeDisplay value={minutes} type={'Minutos'} isDanger={false} />
        <p className={styles.separator}>:</p>
        <DateTimeDisplay value={seconds} type={'Segundos'} isDanger={false} /> 
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
