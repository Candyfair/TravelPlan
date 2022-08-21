import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions/modals';
import ModalHeader from './ModalHeader';
import ModalStep from './ModalStep';
import './style.scss';

const ModalDisplay = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modals);

  const handleClickOut = () => {
    dispatch(setModal(false, 'none'));
  };

  const handleClickIn = (e) => {
    e.stopPropagation();
  };

  if (!modal) return null;

  return (
    <div
      open={modal}
      onClose={() => dispatch(setModal(false, 'none'))}
    >
      <div className="menu" onClick={handleClickOut}>
        <div className="menu__modal" onClick={handleClickIn}>
          <ModalHeader />
          <ModalStep />
        </div>

      </div>

    </div>
  );
}

export default ModalDisplay;
