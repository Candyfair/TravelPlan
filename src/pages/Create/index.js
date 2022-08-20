import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import './style.scss';

// import CreateTrip from 'src/components/CreateTrip';
import Input from 'src/components/Input';
import { addTrip, changeValue } from '../../redux/actions/create';
import { slugify } from '../../utils/utils';

// == Composant
const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get state
  const { tripName, id, slug } = useSelector((state) => state.create);
  const { user, usersList } = useSelector((state) => state.users);

  // Get position for new trip
  let lastPosition = '';
  // let lastID = '';
  usersList.forEach((object) => {
    if (object.id === user) {
      lastPosition = object.trips.length;
    }
  });
  const newPosition = lastPosition + 1;

  // Update state and add new trip
  const handleCreateTripName = (e) => {
    e.preventDefault();
    const newSlug = slugify(tripName);

    // Update state
    dispatch(changeValue('slug', newSlug));
    dispatch(changeValue('user', user));
    dispatch(changeValue('tripPosition', newPosition));

    // Send state data to API
    if (tripName !== '') {
      dispatch(addTrip());
    }
  };

  // Wait until the new id is sent to state to redirect to new trip's page
  useEffect(() => {
    if (id !== '') {
      navigate(`/schedule/${id}/${slug}`);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create">
      <h1 className="main-title">Create a new journey</h1>
      <h2 className="subtitle">Start by choosing a name</h2>

      <form
        className="create__form"
        onSubmit={handleSubmit}
      >
        {/* Name of the journey */}
        <div>
          <p className="create__form__journey-name">Journey name:</p>
        </div>

        <Input
          inputName="tripName"
          className="create__form__journey-name__input"
        />

        <button
          type="button"
          onClick={handleCreateTripName}
        >
          Create
        </button>

      </form>

    </div>
  );
};

export default Create;
