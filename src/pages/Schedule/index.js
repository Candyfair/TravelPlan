import PropTypes from 'prop-types';
import moment from 'moment';

import './style.scss';

import Trips from '../../components/Trips';

const Schedule = ({ destination, details }) => {
  const firstDate = details[0].dateDeparture;
  const lastDate = details[details.length - 1].dateArrival;

  const startDate = moment(firstDate, 'DD-MM-AAAA');
  const endDate = moment(lastDate, 'DD-MM-AAAA');

  return (
    <>
      <div className="content__header">
        <h1 className="main-title">{destination}</h1>
        <h2 className="content__header__subtitle">{moment(startDate).format('Do MMMM')} - {moment(endDate).format('Do MMMM YYYY')}</h2>
      </div>

      <Trips details={details} />

    </>
  );
};

Schedule.propTypes = {
  destination: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
};

export default Schedule;
