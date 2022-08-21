import { useSelector } from 'react-redux';
import CreateStep from '../../CreateStep';

import './style.scss';

const ModalStep = () => {
  const { element } = useSelector((state) => state.modals);

  if (element !== 'step') return null;

  return (
    <section className="addstep-modal">
      <h1 className="modal-title">Add a new step to your trip</h1>
      <CreateStep />
    </section>
  );
};

export default ModalStep;
