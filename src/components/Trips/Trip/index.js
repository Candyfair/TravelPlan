import './style.scss';

import Icon from '../../Icon';
import ICONS from '../../../utils/constants';

const Trip = () => (
  <div className="trip">

    {/* First square */}
    <div className="trip__first-square">
      <p className="trip__first-square__date">21st July</p>
      <Icon icon={ICONS.train} size={27} />
      <p className="trip__first-square__type">Eurostar</p>
    </div>

    <p>[Trip]</p>
  </div>
);

export default Trip;
