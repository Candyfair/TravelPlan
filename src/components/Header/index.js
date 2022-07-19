// import changeDestination from '../../assets/images/direction.svg';
import Icon from '../Icon';
import ICONS from '../../utils/constants';

const Header = () => (
  <>
    <p>Change destination</p>
    {/* <img src={changeDestination} alt="Change direction" width={24} height={24} /> */}
    <Icon icon={ICONS.direction} size="22" />
  </>
);

export default Header;
