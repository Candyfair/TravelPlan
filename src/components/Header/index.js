import './style.scss';

import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';

const Header = () => (
  <div className="header__link">
    <p><a href="/">Change destination</a></p>
    <Icon icon={CONSTANTS.ICONS.direction} size="22" viewbox={CONSTANTS.VIEWBOX.viewboxIcons} />
  </div>
);

export default Header;
