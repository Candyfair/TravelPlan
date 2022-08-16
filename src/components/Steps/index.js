import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { receivedSteps } from '../../redux/actions/trips';
// import PropTypes from 'prop-types';

import './style.scss';

import Step from './Step';

const Steps = () => {
  // const dispatch = useDispatch();
  // const baseURL = process.env.REACT_APP_BASE_URL;
  // const { id } = useParams();

  // useEffect(() => {
  //   axios.get(`${baseURL}/trips/${id}`)
  //     .then((res) => {
  //       const steps = receivedSteps(res.data);
  //       dispatch(steps);
  //     });
  // }, []);

  const steps = useSelector((state) => state.trips.selectedSteps);

  console.log(`steps/trip: ${JSON.stringify(steps)}`);

  return (

    <>

    </>

  );
};

// Steps.propTypes = {
//   steps: PropTypes.array.isRequired,
// };

// Steps.propTypes = {
//   steps: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       dateDeparture: PropTypes.string.isRequired,
//       timeDeparture: PropTypes.string.isRequired,
//       dateArrival: PropTypes.string.isRequired,
//       timeArrival: PropTypes.string.isRequired,
//       travelType: PropTypes.string.isRequired,
//       travelName: PropTypes.string.isRequired,
//       placeDeparture: PropTypes.string.isRequired,
//       placeArrival: PropTypes.string.isRequired,
//       details: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default Steps;
