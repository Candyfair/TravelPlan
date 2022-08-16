import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import moment from 'moment';

import { receivedTrip } from '../../redux/actions/trips';

import './style.scss';

import Steps from '../../components/Steps';

// import moment from 'moment';

const Schedule = () => {
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

  console.log('Je suis dans le composant Schedule');

  // Get trip's period
  const { steps } = trip;
  let firstDate = '';
  let lastDate = '';

  if (steps) {
    firstDate = steps[0].startDate;
    lastDate = steps[steps.length - 1].endDate;
  }

  return !trip && !steps ? null : (
    <>
      <div className="content__header">
        <h1 className="main-title">{trip.tripName}</h1>
        {
          firstDate !== lastDate
            ? <h2 className="content__header__subtitle">{moment(firstDate).format('Do MMMM')} - {moment(lastDate).format('Do MMMM YYYY')}</h2>
            : <h2 className="content__header__subtitle">{moment(lastDate).format('Do MMMM YYYY')}</h2>

        }
      </div>

      {
        trip && <Steps steps={trip.steps} />
      }

    </>
  );
};

export default Schedule;
