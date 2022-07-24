import PropTypes from 'prop-types';

import './style.scss';

import Trips from '../../components/Trips';

const Schedule = ({ destination, details }) => (
  <>
    <div className="content__header">
      <h1 className="content__header__title">{destination}</h1>
    </div>

    <Trips details={details} />

  </>
);

Schedule.propTypes = {
  destination: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
};

export default Schedule;
