import PropTypes from 'prop-types';
import moment from 'moment';

import './style.scss';

import Icon from '../../Icon';
import * as CONSTANTS from '../../../utils/constants';

const Step = ({
  id,
  startDate,
  startTime,
  endDate,
  endTime,
  pointDeparture,
  pointArrival,
  details,
  // position,
  type,
}) => {
  console.log(`id: ${id}, pointDeparture: ${pointDeparture}`);
  console.log('Je suis dans le composant Step');

  // Show transport icon
  let stepType = '';
  switch (type.code) {
    case 'fasttrain':
      stepType = CONSTANTS.ICONS.fasttrain;
      break;

    case 'train':
      stepType = CONSTANTS.ICONS.train;
      break;

    case 'boat':
      stepType = CONSTANTS.ICONS.boat;
      break;

    case 'bus':
      stepType = CONSTANTS.ICONS.bus;
      break;

    case 'car':
      stepType = CONSTANTS.ICONS.car;
      break;

    case 'metro':
      stepType = CONSTANTS.ICONS.metro;
      break;

    case 'hotel':
      stepType = CONSTANTS.ICONS.hotel;
      break;

    case 'plane':
      stepType = CONSTANTS.ICONS.plane;
      break;

    case 'restaurant':
      stepType = CONSTANTS.ICONS.restaurant;
      break;

    case 'taxi':
      stepType = CONSTANTS.ICONS.taxi;
      break;

    case 'tramway':
      stepType = CONSTANTS.ICONS.tramway;
      break;

    default:
      return stepType;
  }

  // Convert dates
  const departureDate = moment(startDate, 'DD-MM-AAAA');
  const arrivalDate = moment(endDate, 'DD-MM-AAAA');
  const nbNights = arrivalDate.diff(departureDate, 'days');

  return (
    <>
      <div className="trip" key={id}>
        {/* First frame */}
        <div className={`trip__frame${moment(moment(arrivalDate).add(1, 'days')).diff(moment()) < 0 ? ' inactive' : ''}`}>
          <p className="trip__frame__date">{moment(departureDate).format('DD MMM')}</p>

          <div className="trip__frame__transport">
            <Icon icon={stepType} size={27} viewbox={CONSTANTS.VIEWBOX.viewboxIcons} />
            {/* <p className="trip__frame__transport__name">{travelName}</p> */}
          </div>
        </div>

        {/* Middle part */}
        <div className={`trip__middle${stepType === 'hotel' ? ' hide' : ''}`}>

          <div className="trip__middle__timetable">
            <p className="trip__middle__time">{startTime}</p>
            <p className="trip__middle__city">{pointDeparture}</p>
          </div>

          <div className="trip__middle_arrows">
            <Icon
              icon={CONSTANTS.ICONS.arrows}
              size={22}
              viewbox={CONSTANTS.VIEWBOX.viewboxArrows}
            />
          </div>

          <div className="trip__middle__timetable">
            <p className="trip__middle__time">{endTime}</p>
            <p className="trip__middle__city">{pointArrival}</p>
          </div>
        </div>

        {/* Case: hotel */}
        <div className={`trip__middle${stepType === 'hotel' ? ' center' : ' hide'}`}>
          <p className="trip__middle__stay-label">{nbNights} night{nbNights > 1 ? 's' : ''} in</p>
          <p className={`trip__middle__stay${moment(moment(arrivalDate).add(1, 'days')).diff(moment()) < 0 ? ' inactive' : ''}`}>{pointDeparture}</p>
        </div>

        {/* Last frame */}
        <div className={`trip__frame details${moment(moment(arrivalDate).add(1, 'days')).diff(moment()) < 0 ? ' inactive' : ''}`}>
          <p className="trip__frame__details">{details}</p>

        </div>
      </div>
    </>
  );
};

Step.propTypes = {
  id: PropTypes.number.isRequired,
  // position: PropTypes.number.isRequired,
  type: PropTypes.object.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  pointDeparture: PropTypes.string.isRequired,
  pointArrival: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Step;