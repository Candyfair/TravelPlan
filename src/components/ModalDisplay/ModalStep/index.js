import { useSelector } from 'react-redux';

import './style.scss';

const ModalStep = () => {
  const { element } = useSelector((state) => state.modals);

  if (element !== 'step') return null;

  return (
    <section className="addstep-modal">
      ModalStep
    </section>
  );
};

export default ModalStep;
