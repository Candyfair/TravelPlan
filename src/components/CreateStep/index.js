// == Imports
import './style.scss';
import Input from 'src/components/Input';

import { useDispatch, useSelector } from 'react-redux';
import { setIcon } from '../../redux/actions/create';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';
import TimePicker from '../ModalDisplay/TimePicker/TimePicker';
import { setField, showTimePicker } from '../../redux/actions/time';
import { useEffect } from 'react';

// == Component
const CreateStep = () => {
  const { icon, startTime, endTime } = useSelector((state) => state.create);
  const dispatch = useDispatch();

  // Array for transport options
  const options = [
    { value: 'suspension', text: '-- Choose an option --' },
    { value: 'train', text: 'Train' },
    { value: 'fasttrain', text: 'Fast Train (Eurostar, TGV, ICE...)' },
    { value: 'plane', text: 'Plane' },
    { value: 'car', text: 'Car' },
    { value: 'boat', text: 'Boat' },
    { value: 'bus', text: 'Bus' },
    { value: 'taxi', text: 'Taxi' },
    { value: 'tramway', text: 'Metro / Tramway' },
    { value: 'suspension2', text: '---' },
    { value: 'hotel', text: 'Hotel / B&B / Camping...' },
    { value: 'restaurant', text: 'Restaurant' },
    { value: 'suspension3', text: '---' },
    { value: 'other', text: 'Other' },
  ];

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
  };

  // Show time picker
  const { picker } = useSelector((state) => state.time);

  const showStartTimePicker = () => {
    dispatch(setField('startTime'));
    dispatch(showTimePicker(true));
  };

  const showEndTimePicker = () => {
    dispatch(setField('endTime'));
    dispatch(showTimePicker(true));
  };

  let updatedStartTime = startTime;
  let udpdatedEndTime = endTime;

  // Show times
  useEffect(() => {
    if (startTime || endTime) {
      updatedStartTime = startTime;
      udpdatedEndTime = endTime;
      console.log('Je suis dans le useEffect, updatedStartTime: ', updatedStartTime);
    }
  }, [startTime, endTime]);

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
                    <option key={option.value} value={option.value}>
                      {option.text}
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
              <Input
                inputName="startDate"
                className="create__form__input-short"
              />

              <span className="create__wrapper__input__time-icon">
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
                  <Input
                    inputName="endDate"
                    className="create__form__input-short"
                  />

                  <span className="create__wrapper__input__time-icon">
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
          {
            (icon !== 'hotel' && icon !== 'restaurant')
            && (
              <div className="create__wrapper__input">
                <p className="create__form__label">
                  Departure time
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
                        <span className="create__form__updated-time">{updatedStartTime.substring(0, 5)}</span>
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
            )
          }
          {/* END TIME */}
          {
            (icon !== 'hotel' && icon !== 'restaurant')
            && (
              <div className="create__wrapper__input">
                <p className="create__form__label">
                  Arrival time
                </p>

                <div className="create__wrapper__input__wrapper">
                  <Input
                    inputName="endTime"
                    className="create__form__input-short"
                    value={udpdatedEndTime}
                  />

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
      >
        Add step
      </button>

      {
        picker && <TimePicker />
      }
    </form>
  );
};

export default CreateStep;
