import './style.scss';

import location from '../../assets/images/location.svg';

const Schedule = () => (
  <>
    <div className="content__header">
      <img src={location} alt="Location pin" width={24} height={24} className="content__header__img" />
      <h1 className="content__header__title">Scottish Highlands Super Trip</h1>
    </div>
  </>
);

export default Schedule;
