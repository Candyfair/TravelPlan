import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CreateStep from '../../CreateStep';

import './style.scss';

const ModalStep = () => {
  const { element, title } = useSelector((state) => state.modals);

  // Display error message instead of title
  useEffect(() => {
    console.log('Updating the title');
  }, [title]);

  if (element !== 'step') return null;

  return (
    <section className="addstep-modal">
      <h1 className="modal-title">{title}</h1>
      <CreateStep />
    </section>
  );
};

export default ModalStep;
