import './style.scss';

import Icon from '../../Icon';
import ICONS from '../../../utils/constants';

const Trip = () => (
  <div className="trip">

    {/* First frame */}
    <div className="trip__frame">
      <p className="trip__frame__date">21st July</p>

      <div className="trip__frame__transport">
        <Icon icon={ICONS.train} size={27} viewbox="0 0 24 24" />
        <p className="trip__frame__transport__name">Eurostar</p>
      </div>
    </div>

    {/* Middle part */}
    <div className="trip__middle">

      <div className="trip__middle__timetable">
        <p className="trip__middle__time">15:13</p>
        <p className="trip__middle__city">Paris</p>
      </div>

      <div className="trip__middle_arrows">
        <Icon icon={ICONS.arrows} size={22} viewbox="0 0 14 15" />
      </div>

      <div className="trip__middle__timetable">
        <p className="trip__middle__time">16:30</p>
        <p className="trip__middle__city">London</p>
      </div>
    </div>

    {/* Last frame */}
    <div className="trip__frame details">
      <p className="trip__frame__details">Coach 10 55 / 56</p>

    </div>

  </div>
);

export default Trip;
