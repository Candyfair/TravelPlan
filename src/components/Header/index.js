// import changeDestination from '../../assets/images/direction.svg';
import Icon from '../Icon';
import * as CONSTANTS from '../../utils/constants';

const Header = () => (
  <>
    <p>Change destination</p>
    <Icon icon={CONSTANTS.ICONS.direction} size="22" viewbox={CONSTANTS.VIEWBOX.viewboxIcons} />
  </>
);

export default Header;
