import { useDispatch, useSelector } from 'react-redux';
import { setIcon } from '../../redux/actions/create';

import './style.scss';

import Icon from '../../components/Icon';
import * as CONSTANTS from '../../utils/constants';

const Create = () => {
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

  const handleIconChange = (e) => {
    dispatch(setIcon(e.target.value));
  };

  const createJourney = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create">
      <h1 className="main-title">Create a new journey</h1>

      <form
        className="create__form"
        onSubmit={createJourney}
      >

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
    </div>
  );
};

export default Create;
