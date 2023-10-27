import React, { useState } from 'react';

import { addMonths, subMonths } from 'date-fns';
import { NextIcon, PrevIcon } from 'public/icons';

import DateCells from './DateCells';
import styles from './index.module.scss';

import { DAYS } from '@/constants/calendar';
import { NEUTRAL_500 } from '@/styles/color';

// dummy data
const streaks = {
  '2023/09/04': 100,
  '2023/09/05': 2,
  '2023/09/20': 3,
  '2023/09/22': 4,
  '2023/10/01': 100,
  '2023/10/05': 2,
  '2023/10/11': 3,
  '2023/10/14': 4,
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleClickPrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleClickNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className={styles.Calendar}>
      <div className={styles.header}>
        <button onClick={handleClickPrevMonth}>
          <PrevIcon width={20} height={20} fill={NEUTRAL_500} />
        </button>
        <span className={styles.currentMonth}>
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
        </span>
        <button onClick={handleClickNextMonth}>
          <NextIcon width={20} height={20} fill={NEUTRAL_500} />
        </button>
      </div>
      <div className={styles.days}>
        {DAYS.map((day, i) => (
          <div key={i} className={styles.day}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <DateCells currentMonth={currentMonth} streaks={streaks} />
      </div>
    </div>
  );
};

export default Calendar;
