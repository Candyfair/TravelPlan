import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions/modals';
import { setTime, showTimePicker } from '../../redux/actions/time';
import ModalHeader from './ModalHeader';
import ModalStep from './ModalStep';
import './style.scss';

const ModalDisplay = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modals);

  const handleClickOut = () => {
    dispatch(setModal(false, 'none'));
    dispatch(showTimePicker(false));
    dispatch(setTime('hour', 0));
    dispatch(setTime('minute', 0));
  };

  const handleClickIn = (e) => {
    e.stopPropagation();
  };

  if (!modal) return null;

  return (
    <div
      open={modal}
      onClose={handleClickOut}
    >
      <div className="menu">
        <div className="menu__modal" onClick={handleClickIn}>
          <ModalHeader />
          <ModalStep />
        </div>

      </div>

    </div>
  );
};

export default ModalDisplay;
