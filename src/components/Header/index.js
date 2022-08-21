import './style.scss';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStep } from '../../redux/actions/steps';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeDestination = () => {
    dispatch(setStep(false));
    navigate('/');
  };

  return (
    <div className="header__block">
      <p
        onClick={handleChangeDestination}
        className="header__block__link"
      >
        Change journey
      </p>
      <Icon icon={CONSTANTS.ICONS.direction} size="22" viewbox={CONSTANTS.VIEWBOX.viewboxIcons} />
    </div>
  );
};

export default Header;
