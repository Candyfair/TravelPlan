/* eslint-disable react/self-closing-comp */
import { min } from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { hourDown, hourUp, minuteDown, minuteUp, setTime } from '../../redux/actions/time';
import './style.scss';

const TimePicker = () => {
  const dispatch = useDispatch();
  const { hour, minute } = useSelector((state) => state.time);

  const dispatchHourUp = () => {
    if (hour < 23) {
      dispatch(hourUp());
    }
    else {
      dispatch(setTime('hour', 0));
    }
  };

  const dispatchHourDown = () => {
    if (hour > 0) {
      dispatch(hourDown());
    }
    else {
      dispatch(setTime('hour', 23));
    }
  };

  const dispatchMinuteUp = () => {
    if (minute < 59) {
      dispatch(minuteUp());
    }
    else {
      dispatch(setTime('minute', 0));
    }
  };

  const dispatchMinuteDown = () => {
    if (minute > 0) {
      dispatch(minuteDown());
    }
    else {
      dispatch(setTime('minute', 59));
    }
  };

  const formatTime = (time) => {
    if (time < 10) {
      time = '0' + time;
    }
    return time;
  };

  return (
    <div className="timepicker">

      {/* Hours */}
      <div className="timepicker__hour">
        <div className="timepicker__hr-up" onClick={dispatchHourUp}></div>
        <input
          type="number"
          className="timepicker__hr"
          value={formatTime(hour)}
          readOnly
        />
        <div className="timepicker__hr-down" onClick={dispatchHourDown}></div>
      </div>

      {/* Separator */}
      <div className="timepicker__separator">:</div>

      {/* Minutes */}
      <div className="timepicker__minute">
        <div className="timepicker__min-up" onClick={dispatchMinuteUp}></div>
        <input
          type="number"
          className="timepicker__min"
          readOnly
          value={formatTime(minute)}
        />
        <div className="timepicker__min-down" onClick={dispatchMinuteDown}></div>
      </div>

    </div>
  );
};

export default TimePicker;
