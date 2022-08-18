// == Imports
import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setIcon } from '../../redux/actions/create';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';

// == Component
const CreateStep = () => {
  const { icon } = useSelector((state) => state.create);
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
    { value: 'tramway', text: 'Tramway' },
    { value: 'suspension', text: '---' },
    { value: 'hotel', text: 'Hotel / B&B / Camping...' },
    { value: 'restaurant', text: 'Restaurant' },
    { value: 'suspension', text: '---' },
    { value: 'other', text: 'Other' },
  ];

  // Show transport icon
  let type = icon;
  switch (icon) {
    case 'suspension':
      type = CONSTANTS.ICONS.suspension;
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

    case 'fasttrain':
      type = CONSTANTS.ICONS.fasttrain;
      break;

    case 'plane':
      type = CONSTANTS.ICONS.plane;
      break;

    case 'train':
      type = CONSTANTS.ICONS.train;
      break;

    case 'taxi':
      type = CONSTANTS.ICONS.taxi;
      break;

    case 'tramway':
      type = CONSTANTS.ICONS.tramway;
      break;

    case 'hotel':
      type = CONSTANTS.ICONS.hotel;
      break;

    case 'restaurant':
      type = CONSTANTS.ICONS.restaurant;
      break;

    case 'other':
      type = CONSTANTS.ICONS.other;
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

        {/* Icon */}
        <div className="create__form__icon">
          <Icon icon={type} size={24} viewbox={CONSTANTS.VIEWBOX.viewboxIcons} />
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
    </form>
  );
};

export default CreateStep;
