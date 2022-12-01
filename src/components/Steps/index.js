import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import './style.scss';

import Step from './Step';

const Steps = ({ steps }) => {
  console.log('Je suis dans le composant Steps');

  return !steps ? null : (
    <Droppable droppableId="1">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="trip-container"
        >
          {
            steps && steps.map((step, index) => (
              <Step
                key={step.id}
                index={index}
                cardId={String(step.id)}
                {...step}
              />
            ))
          }
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

Steps.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default Steps;
