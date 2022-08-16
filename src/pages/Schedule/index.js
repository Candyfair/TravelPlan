import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { receivedTrip } from '../../redux/actions/trips';

import './style.scss';
import { useSelector } from 'react-redux';

// import { useSelector } from 'react-redux';
// import { findTrip } from '../../selectors/trips';

// import moment from 'moment';

// import Trips from '../../components/Trips';

const Schedule = () => {
  // const firstDate = details[0].dateDeparture;
  // const lastDate = details[details.length - 1].dateArrival;

  // const startDate = moment(firstDate, 'DD-MM-AAAA');
  // const endDate = moment(lastDate, 'DD-MM-AAAA');

  const dispatch = useDispatch();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${baseURL}/trips/${id}`)
      .then((res) => {
        const trip = receivedTrip(res.data);
        dispatch(trip);
      });
  }, []);

  const trip = useSelector((state) => state.trips.selectedTrip);
  console.log(JSON.stringify(trip));

  return (
    <>
      <div className="content__header">
        <h1 className="main-title">{trip.tripName}</h1>

        <div>Texte: </div>

        {/* <h2 className="content__header__subtitle">{moment(startDate).format('Do MMMM')} - {moment(endDate).format('Do MMMM YYYY')}</h2> */}
      </div>

      {/* <Trips details={details} /> */}

    </>
  );
};

export default Schedule;

// export function findRecipe(recipes, searchedSlug) {
//   const recipe = recipes.find((testedRecipe) => {
//     return testedRecipe.slug === searchedSlug;
//   });
//   return recipe;
// }
