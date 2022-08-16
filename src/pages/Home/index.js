import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDestination, setJourney } from '../../redux/actions/journey';
import './style.scss';

const Home = () => {
  // Data from API
  const trips = useSelector((state) => state.trips.list);
  // console.log(trips, trips.map);

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

  const handleClick = () => {
    navigate('/create');
  };

  return (
    <div className="home">

      <div className="home__header">
        <h1 className="home__header__title">Itinerary Publisher</h1>
        <p className="home__header__details">Visually plan your journey and share with your friends and co-travellers</p>
      </div>

      <h2 className="home__subtitle">Select your journey</h2>
      <ul className="home__destinations">
        {
          trips.map((trip) => (
            <li
              key={trips.id}
            >
              {trip.tripName}
            </li>
          ))
        }

      </ul>

      <h2 className="home__subtitle">Create a new journey</h2>
      <button className="button" onClick={handleClick} type="button">Add a trip</button>

    </div>
  );
};

export default Home;

// {
//   recipes.map((recipe) => (
//     <NavLink
//       key={recipe.id}
//       className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
//       to={`/recipe/${recipe.slug}`}
//     >
//       {recipe.title}
//     </NavLink>
//   ))
// }
