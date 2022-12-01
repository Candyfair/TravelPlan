// == Imports
import { useEffect } from 'react';
import moment from 'moment';
import './style.scss';

import Input from 'src/components/Input';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setField, showCalendar, showTimePicker } from '../../redux/actions/time';
import { addStep, changeValue, setIcon } from '../../redux/actions/create';

import * as CONSTANTS from '../../utils/constants';
import Icon from '../Icon';

import TimePicker from '../ModalDisplay/TimePicker/TimePicker';
import Calendar from '../ModalDisplay/Calendar';
import { changeTitle, setModal } from '../../redux/actions/modals';

// == Component
const CreateStep = () => {
  const {
    id,
    slug,
    icon,
    startTime,
    endTime,
    startDate,
    endDate,
    travelName,
    departurePoint,
    arrivalPoint,
    stepType,
    stepAdded,
  } = useSelector((state) => state.create);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Array for transport options
  const options = useSelector((state) => state.types.list);

  // Show transport icon
  let type = icon;
  switch (icon) {
    case 'suspension':
      type = CONSTANTS.TRAVEL.suspension;
      break;

    case 'suspension2':
      type = CONSTANTS.TRAVEL.suspension;
      break;

    case 'suspension3':
      type = CONSTANTS.TRAVEL.suspension;
      break;

    case 'boat':
      type = CONSTANTS.TRAVEL.boat;
      break;

    case 'bus':
      type = CONSTANTS.TRAVEL.bus;
      break;

    case 'car':
      type = CONSTANTS.TRAVEL.car;
      break;

    case 'fasttrain':
      type = CONSTANTS.TRAVEL.fasttrain;
      break;

    case 'plane':
      type = CONSTANTS.TRAVEL.plane;
      break;

    case 'train':
      type = CONSTANTS.TRAVEL.train;
      break;

    case 'taxi':
      type = CONSTANTS.TRAVEL.taxi;
      break;

    case 'tramway':
      type = CONSTANTS.TRAVEL.tramway;
      break;

    case 'hotel':
      type = CONSTANTS.TRAVEL.hotel;
      break;

    case 'restaurant':
      type = CONSTANTS.TRAVEL.restaurant;
      break;
      
      case 'other':
        type = CONSTANTS.TRAVEL.other;
        break;
        
    default:
      return type;
  }

  // Change transport icon
  const handleIconChange = (e) => {
    dispatch(setIcon(e.target.value));

    // Add type ID in state
    const foundType = options.find((option) => option.code === e.target.value);
    if (foundType.id !== 1) {
      dispatch(changeValue('stepType', foundType.id));
    }
    else {
      dispatch(changeValue('stepType', ''));
    }
  };

  // Show time picker & calendar
  const { picker, calendar } = useSelector((state) => state.time);

  const showStartDateCalendar = () => {
    dispatch(setField('startDate'));
    dispatch(showCalendar(true));
  };

  const showEndDateCalendar = () => {
    dispatch(setField('endDate'));
    dispatch(showCalendar(true));
  };

  const showStartTimePicker = () => {
    dispatch(setField('startTime'));
    dispatch(showTimePicker(true));
  };

  const showEndTimePicker = () => {
    dispatch(setField('endTime'));
    dispatch(showTimePicker(true));
  };

  let updatedStartTime = startTime;
  let updatedEndTime = endTime;
  let updatedStartDate = startDate;
  let updatedEndDate = endDate;

  // Show times
  useEffect(() => {
    if (startTime || endTime) {
      updatedStartTime = startTime;
      updatedEndTime = endTime;
    }
    if (startDate || endDate) {
      // updatedStartDate = moment(startDate).format('DD/MM/YYYY');
      updatedStartDate = startDate;
      updatedEndDate = moment(endDate).format('DD/MM/YYYY');
    }
  }, [startTime, endTime, startDate, endDate]);

  // Close modal after submitting info and reload Schedule page
  const reload = () => {
    window.location.reload();
  };

  const handleCloseModal = () => {
    dispatch(setModal(false, ''));
    reload();
  };

  // Add step to the trip
  const handleCreateStep = (e) => {
    e.preventDefault();

    // Check if mandatory fields are complete - EXIT if not
    if (stepType === '' || travelName === '' || departurePoint === '' || startDate === '' || startTime === '') return dispatch(changeTitle('*** PLEASE FILL IN ALL FIELDS ***'));

    if (stepType !== 11 && stepType !== 12) {
      if (arrivalPoint === '' || endDate === '' || endTime === '') return dispatch(changeTitle('*** PLEASE FILL IN ALL FIELDS ***'));
    }

    // Complete fields for hotel
    if (stepType === 11) {
      dispatch(changeValue('arrivalPoint', departurePoint));

      // Complete check-out date if left empty
      if (startDate !== '' && endDate === '') {
        const nextDay = moment(moment(startDate).add(1, 'days')).format('YYYY-MM-DD');
        dispatch(changeValue('endDate', nextDay));
      }

      // Complete check-out time if left empty
      if (startTime !== '' && endTime === '') {
        dispatch(changeValue('endTime', '10:00:00'));
      }
    }

    // Complete fields for restaurant
    if (stepType === 12) {
      dispatch(changeValue('arrivalPoint', departurePoint));
      dispatch(changeValue('endDate', startDate));
      dispatch(changeValue('endTime', startTime));
    }

    // Validate dispatch
    dispatch(addStep());
  };

  // Wait until the API has answered to redirect to new trip's page
  useEffect(() => {
    if (stepAdded) {
      console.log('L\'API a répondu');
      handleCloseModal();
    }
  }, [stepAdded]);

  return (
    <form className="create__wrapper">
      <div>

        {/* TRANSPORT TYPE */}
        <div className="create__wrapper__transport-type-form">

          {/* Icon */}
          <div className="create__form__icon">
            {
              icon
              && <Icon icon={type} size={24} viewbox={CONSTANTS.VIEWBOX.viewboxIcons} />
            }
          </div>

          <div className="create__wrapper__transport-type-input">
            {/* label */}
            <p className="create__form__label">
              Type of transport / stay:
            </p>

            {/* Drop-down input */}
            <div>
              <select
                value={icon}
                onChange={handleIconChange}
              >
                {
                  options.map((option) => (
                    <option key={option.id} value={option.code}>
                      {option.name}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>

        </div>

        {/* NAME OF TRANSPORT */}
        <div className="create__wrapper__input">
          <p className="create__form__label">
            Give a name to this transport / stay:
          </p>
          <p className="step-caption">Ex: Air France, Marriott Hotel, Eurostar...</p>

          <Input
            inputName="travelName"
            className="create__form__input-long"
          />
        </div>

        {/* CITY OF DEPARTURE */}
        <div className="create__wrapper__input">
          <p className="create__form__label">
            {
              (icon === 'hotel' || icon === 'restaurant')
                ? 'City:'
                : 'Leaving from:'
            }
          </p>

          <Input
            inputName="departurePoint"
            className="create__form__input-long"
          />
        </div>

        {/* CITY OF ARRIVAL */}
        {
          (icon !== 'hotel' && icon !== 'restaurant')
          && (
            <div className="create__wrapper__input">
              <p className="create__form__label">
                Going to:
              </p>

              <Input
                inputName="arrivalPoint"
                className="create__form__input-long"
              />
            </div>
          )
        }

        <div className="create__wrapper__join">

          {/* START DATE */}
          <div className="create__wrapper__input">
            <p className="create__form__label">
              {
                icon === 'hotel' && 'Check-in date:'
              }
              {
                icon === 'restaurant' && 'Booking day:'
              }
              {
                (icon !== 'hotel' && icon !== 'restaurant') && 'Departure date:'
              }
            </p>

            <div className="create__wrapper__input__wrapper">
              {
                !startDate
                  ? (
                    <Input
                      inputName="startDate"
                      className="create__form__input-short"
                    />
                  )
                  : (
                    <input
                      className="create__form__input-short"
                      value={moment(updatedStartDate).format('DD/MM/YYYY')}
                      readOnly
                    />
                  )
              }

              <span className="create__wrapper__input__time-icon" onClick={showStartDateCalendar}>
                <Icon
                  icon={CONSTANTS.ICONS.calendar}
                  size={24}
                  viewbox={CONSTANTS.VIEWBOX.viewboxIcons}
                />
              </span>
            </div>
          </div>

          {/* END DATE */}
          {
            (icon !== 'restaurant')
            && (
              <div className="create__wrapper__input">
                <p className="create__form__label">
                  {
                    icon !== 'hotel' && 'Arrival date:'
                  }
                  {
                    icon === 'hotel' && 'Check-out date:'
                  }
                </p>

                <div className="create__wrapper__input__wrapper">
                  {
                    !endDate
                      ? (
                        <Input
                          inputName="endDate"
                          className="create__form__input-short"
                        />
                      )
                      : (
                        <input
                          className="create__form__input-short"
                          value={moment(updatedEndDate).format('DD/MM/YYYY')}
                          readOnly
                        />
                      )
                  }

                  <span className="create__wrapper__input__time-icon" onClick={showEndDateCalendar}>
                    <Icon
                      icon={CONSTANTS.ICONS.calendar}
                      size={24}
                      viewbox={CONSTANTS.VIEWBOX.viewboxIcons}
                    />
                  </span>
                </div>
              </div>
            )
          }
        </div>

        <div className="create__wrapper__join">

          {/* START TIME */}
          <div className="create__wrapper__input">
            <p className="create__form__label">
              {
              icon !== 'hotel' && icon !== 'restaurant' && 'Departure time:'
              }
              {
              icon === 'hotel' && 'Check-in time:'
              }
              {
              icon === 'restaurant' && 'Booking time:'
              }
            </p>

            <div className="create__wrapper__input__wrapper">
              {
                !startTime
                  ? (
                    <Input
                      inputName="startTime"
                      className="create__form__input-short"
                    />
                  )
                  : (
                    <input
                      className="create__form__input-short"
                      value={updatedStartTime.substring(0, 5)}
                      readOnly
                    />
                  )
              }

              <span
                className="create__wrapper__input__time-icon"
                onClick={showStartTimePicker}
              >
                <Icon
                  icon={CONSTANTS.ICONS.clock}
                  size={24}
                  viewbox={CONSTANTS.VIEWBOX.viewboxIcons}
                />
              </span>
            </div>

          </div>

          {/* END TIME */}
          {
            icon !== 'restaurant'
            && (
              <div className="create__wrapper__input">
                <p className="create__form__label">
                  {
                  icon !== 'hotel' && 'Arrival time:'
                  }
                  {
                  icon === 'hotel' && 'Check-out time:'
                  }
                </p>

                <div className="create__wrapper__input__wrapper">
                  {
                    !endTime
                      ? (
                        <Input
                          inputName="endTime"
                          className="create__form__input-short"
                        />
                      )
                      : (
                        <input
                          className="create__form__input-short"
                          value={updatedEndTime.substring(0, 5)}
                          readOnly
                        />
                      )

                  }
                  <span
                    className="create__wrapper__input__time-icon"
                    onClick={showEndTimePicker}
                  >
                    <Icon
                      icon={CONSTANTS.ICONS.clock}
                      size={24}
                      viewbox={CONSTANTS.VIEWBOX.viewboxIcons}
                    />
                  </span>
                </div>
              </div>
            )
          }
        </div>

        {/* DETAILS */}
        <div className="create__wrapper__input">
          <p className="create__form__label">
            Details (optional):
          </p>
          <p className="step-caption">Ex: Booking references, seat number...</p>

          <Input
            inputName="details"
            className="create__form__input-long"
          />
        </div>

      </div>

      {/* BUTTON */}
      <button
        type="button"
        className="create__form__button"
        onClick={handleCreateStep}
      >
        Add step
      </button>
      {
        calendar && <Calendar />
      }

      {
        picker && <TimePicker />
      }
    </form>
  );
};

export default CreateStep;
