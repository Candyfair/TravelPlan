import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setIcon } from '../../redux/actions/create';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';

const CreateTrip = () => {
  const { icon } = useSelector((state) => state.create);
  const dispatch = useDispatch();

  // Array for transport options
  const options = [
    { value: 'suspension', text: '-- Please choose an option --' },
    { value: 'train', text: 'Train' },
    { value: 'fasttrain', text: 'Fast Train' },
    { value: 'plane', text: 'Plane' },
    { value: 'car', text: 'Car' },
    { value: 'boat', text: 'Boat' },
    { value: 'bus', text: 'Bus' },
    { value: 'taxi', text: 'Taxi' },
    { value: 'tramway', text: 'Tramway' },
    { value: 'metro', text: 'Metro' },
    { value: 'hotel', text: 'Hotel' },
    { value: 'restaurant', text: 'Restaurant' },
  ];

  // Show transport icon
  let type = icon;
  switch (icon) {
    case 'suspension':
      type = CONSTANTS.ICONS.suspension;
      break;

    case 'fasttrain':
      type = CONSTANTS.ICONS.fasttrain;
      break;

    case 'train':
      type = CONSTANTS.ICONS.train;
      break;

    case 'boat':
      type = CONSTANTS.ICONS.boat;
      break;

    case 'bus':
      type = CONSTANTS.ICONS.bus;
      break;

    case 'car':
      type = CONSTANTS.ICONS.car;
      break;

    case 'metro':
      type = CONSTANTS.ICONS.metro;
      break;

    case 'hotel':
      type = CONSTANTS.ICONS.hotel;
      break;

    case 'plane':
      type = CONSTANTS.ICONS.plane;
      break;

    case 'restaurant':
      type = CONSTANTS.ICONS.restaurant;
      break;

    case 'taxi':
      type = CONSTANTS.ICONS.taxi;
      break;

    case 'tramway':
      type = CONSTANTS.ICONS.tramway;
      break;

    default:
      return type;
  }

  // Change transport icon
  const handleIconChange = (e) => {
    dispatch(setIcon(e.target.value));
  };
  return (
    <form>
      {/* Type of transport / hotel */}
      <div className="create__wrapper__transport-type-form">
        <div className="create__wrapper__transport-type-input">

          {/* label */}
          <p className="create__form__label">
            Type of transport / stay:
          </p>

          {/* input */}
          <div>
            <select
              value={icon}
              className="create__form__input"
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

        {/* Icon */}
        <div className="create__form__icon">
          <Icon icon={type} size={24} viewbox={CONSTANTS.VIEWBOX.viewboxIcons} />
        </div>
      </div>
    </form>
  );
};

export default CreateTrip;
