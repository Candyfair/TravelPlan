import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const Home = () => {
  // Data from API
  const trips = useSelector((state) => state.trips.list);

  const navigate = useNavigate();

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
              key={trip.id}
            >
              <a href={`/schedule/${trip.id}/${trip.slug}`}>{trip.tripName}</a>
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
