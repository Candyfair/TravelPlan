import PropTypes from 'prop-types';
import moment from 'moment';

import './style.scss';

import Icon from '../../Icon';
import * as CONSTANTS from '../../../utils/constants';

const Trip = ({
  id,
  dateDeparture,
  timeDeparture,
  dateArrival,
  timeArrival,
  travelType,
  travelName,
  placeDeparture,
  placeArrival,
  details,
}) => {
  // Show transport icon
  let type = '';
  switch (travelType) {
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

  // Convert dates
  const departureDate = moment(dateDeparture, 'DD-MM-AAAA');
  const arrivalDate = moment(dateArrival, 'DD-MM-AAAA');
  const nbNights = arrivalDate.diff(departureDate, 'days');

  return (
    <div className="trip" key={id}>

      {/* First frame */}
      <div className="trip__frame">
        <p className="trip__frame__date">{moment(departureDate).format('DD MMM')}</p>

        <div className="trip__frame__transport">
          <Icon icon={type} size={27} viewbox={CONSTANTS.VIEWBOX.viewboxIcons} />
          <p className="trip__frame__transport__name">{travelName}</p>
        </div>
      </div>

      {/* Middle part */}
      <div className={`trip__middle${travelType === 'hotel' ? ' hide' : ''}`}>

        <div className="trip__middle__timetable">
          <p className="trip__middle__time">{timeDeparture}</p>
          <p className="trip__middle__city">{placeDeparture}</p>
        </div>

        <div className="trip__middle_arrows">
          <Icon icon={CONSTANTS.ICONS.arrows} size={22} viewbox={CONSTANTS.VIEWBOX.viewboxArrows} />
        </div>

        <div className="trip__middle__timetable">
          <p className="trip__middle__time">{timeArrival}</p>
          <p className="trip__middle__city">{placeArrival}</p>
        </div>
      </div>

      {/* Case: hotel */}
      <div className={`trip__middle${travelType === 'hotel' ? ' center' : ' hide'}`}>
        <p className="trip__middle__stay-label">{nbNights} night{nbNights > 1 ? 's' : ''} in</p>
        <p className="trip__middle__stay">{placeDeparture}</p>
      </div>

      {/* Last frame */}
      <div className="trip__frame details">
        <p className="trip__frame__details">{details}</p>

      </div>

    </div>
  );
};

Trip.propTypes = {
  id: PropTypes.number.isRequired,
  dateDeparture: PropTypes.string.isRequired,
  dateArrival: PropTypes.string.isRequired,
  timeDeparture: PropTypes.string.isRequired,
  timeArrival: PropTypes.string.isRequired,
  travelType: PropTypes.string.isRequired,
  travelName: PropTypes.string.isRequired,
  placeDeparture: PropTypes.string.isRequired,
  placeArrival: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Trip;
