import PropTypes from 'prop-types';

import './style.scss';

import Step from './Step';

const Steps = ({ steps }) => {
  console.log('Je suis dans le composant Steps');

  return !steps ? null : (
    <div>
      {
        steps && steps.map((step) => (
          <Step
            key={step.id}
            {...step}
          />
        ))
      }

    </div>

  );
};

Steps.propTypes = {
  steps: PropTypes.array.isRequired,
};

// Steps.propTypes = {
//   steps: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       dateDeparture: PropTypes.string.isRequired,
//       timeDeparture: PropTypes.string.isRequired,
//       dateArrival: PropTypes.string.isRequired,
//       timeArrival: PropTypes.string.isRequired,
//       travelType: PropTypes.string.isRequired,
//       travelName: PropTypes.string.isRequired,
//       placeDeparture: PropTypes.string.isRequired,
//       placeArrival: PropTypes.string.isRequired,
//       details: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default Steps;
