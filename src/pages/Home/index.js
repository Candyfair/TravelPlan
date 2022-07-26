import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDestination, setJourney } from '../../redux/actions/journey';
import './style.scss';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleScotJourney = () => {
    dispatch(setJourney(true));
    dispatch(setDestination('Scotland'));
    navigate('/schedule');
  };

  const handleEuropeJourney = () => {
    dispatch(setJourney(true));
    dispatch(setDestination('Europe'));
    navigate('/schedule');
  };

  return (
    <div className="home">

      <div className="home__header">
        <h1 className="home__header__title">Itinerary Publisher</h1>
        <p className="home__header__details">Visually plan your journey and share with your friends and co-travellers</p>
      </div>

      <h2 className="home__subtitle">Select your journey</h2>
      <ul className="home__destinations">
        <li onClick={handleScotJourney}>Scottish Highlands Super Trip</li>
        <li onClick={handleEuropeJourney}>Europe Inter-Rail Fab Trip</li>
      </ul>

    </div>
  );
};

export default Home;
