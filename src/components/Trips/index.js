import PropTypes from 'prop-types';

import './style.scss';

import Trip from './Trip';

const Trips = ({ details }) => {
  // console.table(details);
  console.log(details.length);

  return (
    <div>
      {
        details.map((detailsObj) => (
          <>
            <Trip
              key={detailsObj.id}
              {...detailsObj}
            />

          </>
        ))
      }

    </div>
  );
};

Trips.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      dateDeparture: PropTypes.string.isRequired,
      timeDeparture: PropTypes.string.isRequired,
      dateArrival: PropTypes.string.isRequired,
      timeArrival: PropTypes.string.isRequired,
      travelType: PropTypes.string.isRequired,
      travelName: PropTypes.string.isRequired,
      placeDeparture: PropTypes.string.isRequired,
      placeArrival: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Trips;
