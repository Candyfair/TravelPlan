import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import moment from 'moment';

import './style.scss';

import * as CONSTANTS from '../../../utils/constants';
import Icon from '../../Icon';

import { showCalendar } from '../../../redux/actions/time';
import { changeValue } from '../../../redux/actions/create';

const Calendar = () => {
  const dispatch = useDispatch();
  const { field } = useSelector((state) => state.time);

  // Close calendar
  const handleCancel = () => {
    dispatch(showCalendar(false));
  };

  // Limit years and calculate dates
  const date = new Date();

  const currentMonth = date;
  const currentYear = moment(date).format('YYYY');
  const toYear = parseInt(currentYear, 10) + 4;

  // Pick a day
  const [selected, setSelected] = useState();

  const handleDaySelect = (day) => {
    setSelected(day);
    if (day && field === 'startDate') {
      const startDate = format(day, 'MM/dd/y');
      dispatch(changeValue('startDate', startDate));
    }
    if (day && field === 'endDate') {
      const endDate = format(day, 'MM/dd/y');
      dispatch(changeValue('endDate', endDate));
    }
  };

  const footer = selected ? (
    <p>You selected {format(selected, 'P')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <>
      <div className="calendar">

        {/* Calendar header */}
        <div className="calendar__header">
          <div
            onClick={handleCancel}
            className="calendar__header__close"
          >
            <Icon
              icon={CONSTANTS.ICONS.close}
              size={22}
              viewbox={CONSTANTS.VIEWBOX.viewboxIcons}
            />
          </div>
        </div>

        {/* DayPicker */}
        <DayPicker
          // Date picker range
          fromMonth={currentMonth}
          toYear={toYear}
          // Pick a day
          mode="single"
          selected={selected}
          // onSelect={setSelectedDay}
          onSelect={handleDaySelect}
          footer={footer}
          // Starting Monday
          weekStartsOn={1}
        />

      </div>
    </>
  );
};

export default Calendar;
