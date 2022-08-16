import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

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
  console.log(JSON.stringify(trip));

  // const firstDate = trip[0].dateDeparture;
  // const lastDate = trip[trip.length - 1].dateArrival;



  // const startDate = moment(firstDate, 'DD-MM-AAAA');
  // const endDate = moment(lastDate, 'DD-MM-AAAA');

  return (
    <>
      <div className="content__header">
        <h1 className="main-title">{trip.tripName}</h1>

        {/* <div>Texte: {firstDate}, {lastDate} </div> */}

        {/* <h2 className="content__header__subtitle">{moment(startDate).format('Do MMMM')} - {moment(endDate).format('Do MMMM YYYY')}</h2> */}
      </div>

      <Steps />

    </>
  );
};

export default Schedule;
