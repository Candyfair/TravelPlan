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

export default Steps;
