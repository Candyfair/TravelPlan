import './style.scss';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setJourney } from '../../redux/actions/journey';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeDestination = () => {
    dispatch(setJourney(false));
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
}

export default Header;
