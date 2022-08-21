import { useDispatch } from 'react-redux';

import Icon from '../../Icon';
import * as CONSTANTS from '../../../utils/constants';

import './style.scss';
import { setModal } from '../../../redux/actions/modals';

const ModalHeader = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal(false, ''));
  };

  return (
    <div className="header-modal">
      <div
        onClick={handleClose}
        className="header-modal__close"
      >
        <Icon
          icon={CONSTANTS.ICONS.close}
          size={22}
          viewbox={CONSTANTS.VIEWBOX.viewboxIcons}
        />
      </div>

    </div>
  );
};

export default ModalHeader;
