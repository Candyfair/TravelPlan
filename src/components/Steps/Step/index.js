import PropTypes from 'prop-types';
import moment from 'moment';

import './style.scss';

import Icon from '../../Icon';
import * as CONSTANTS from '../../../utils/constants';

const Step = ({
  id,
  travelName,
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
  // Show transport icon
  let stepType = '';
  switch (type.code) {
    case 'fasttrain':
      stepType = CONSTANTS.TRAVEL.fasttrain;
      break;

    case 'train':
      stepType = CONSTANTS.TRAVEL.train;
      break;

    case 'boat':
      stepType = CONSTANTS.TRAVEL.boat;
      break;

    case 'bus':
      stepType = CONSTANTS.TRAVEL.bus;
      break;

    case 'car':
      stepType = CONSTANTS.TRAVEL.car;
      break;

    case 'other':
      stepType = CONSTANTS.TRAVEL.other;
      break;

    case 'hotel':
      stepType = CONSTANTS.TRAVEL.hotel;
      break;

    case 'plane':
      stepType = CONSTANTS.TRAVEL.plane;
      break;

    case 'restaurant':
      stepType = CONSTANTS.TRAVEL.restaurant;
      break;

    case 'taxi':
      stepType = CONSTANTS.TRAVEL.taxi;
      break;

    case 'tramway':
      stepType = CONSTANTS.TRAVEL.tramway;
      break;

    default:
      return stepType;
  }

  // Convert dates
  const departureDate = moment(startDate, 'YYYY-MM-DD');
  const arrivalDate = moment(endDate, 'YYYY-MM-DD');
  const nbNights = arrivalDate.diff(departureDate, 'days');

  return (
    <>
      <div className="trip" key={id}>
        {/* First frame */}
        <div className={`trip__frame${moment(moment(arrivalDate).add(1, 'days')).diff(moment()) < 0 ? ' inactive' : ''}`}>
          <p className="trip__frame__date">{moment(departureDate).format('DD MMM', true)}</p>

          {/* <div className="trip__frame__transport"> */}
          {
            type
            && <Icon icon={stepType} size={27} viewbox={CONSTANTS.VIEWBOX.viewboxIcons} />
          }
          <p className="trip__frame__transport__name">{travelName}</p>
          {/* </div> */}
        </div>

        {/* Middle part */}
        <div className={`trip__middle${type.code === 'hotel' ? ' hide' : ''}`}>

          <div className="trip__middle__timetable">
            <p className="trip__middle__time">{moment(startTime, 'HH:mm:ss').format('HH:mm')}</p>
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
            <p className="trip__middle__time">{moment(endTime, 'HH:mm:ss').format('HH:mm')}</p>
            <p className="trip__middle__city">{pointArrival}</p>
          </div>
        </div>

        {/* Case: hotel */}
        <div className={`trip__middle${type.code === 'hotel' ? ' center' : ' hide'}`}>
          <p className="trip__middle__stay-label">{nbNights} night{nbNights > 1 ? 's' : ''} in</p>
          <p className={`trip__middle__stay${moment(moment(arrivalDate).add(1, 'days')).diff(moment()) < 0 ? ' inactive' : ''}`}>{pointDeparture}</p>
          <p className="trip__middle__checkin-label">check-in: {moment(startTime, 'HH:mm:ss').format('HH:mm')} | check-out: {moment(endTime, 'HH:mm:ss').format('HH:mm')}</p>

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
  travelName: PropTypes.string.isRequired,
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
