/* eslint-disable arrow-body-style */
// Imports
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import moment from 'moment';

import { receivedTrip } from '../../redux/actions/trips';
import { changeValue } from '../../redux/actions/create';
import { setModal } from '../../redux/actions/modals';

import './style.scss';

import Steps from '../../components/Steps';
import Icon from '../../components/Icon';
import * as CONSTANTS from '../../utils/constants';

// == Component
const Schedule = () => {
  const dispatch = useDispatch();
  const { baseURL } = CONSTANTS.API;
  const { id } = useParams();

  useEffect(() => {
    // Empty Create state
    dispatch(changeValue('tripName', ''));
    dispatch(changeValue('slug', ''));
    dispatch(changeValue('position', ''));

    // API call
    axios.get(`${baseURL}/trips/${id}`)
      .then((res) => {
        const trip = receivedTrip(res.data);
        dispatch(trip);
      });
  }, []);

  const trip = useSelector((state) => state.trips.selectedTrip);

  // Get trip's start and end dates
  const { steps } = trip;
  let firstDate = '';
  let lastDate = '';

  const ShowTripDates = () => {
    return (
      firstDate !== lastDate
        ? <h2 className="subtitle">{moment(firstDate).format('Do MMMM')} - {moment(lastDate).format('Do MMMM YYYY')}</h2>
        : <h2 className="subtitle">{moment(lastDate).format('Do MMMM YYYY')}</h2>
    );
  };

  const ShowAddStep = () => {
    return (
      <h2 className="subtitle">Now add a step to your trip by clicking on the button below!</h2>
    );
  };

  // Open Add Step modal
  const handleOpenModal = () => {
    dispatch(changeValue('id', id));
    dispatch(setModal(true, 'step'));
  };

  // Choice of subtitle + get last step's position
  let caption;
  let nextPosition;

  if (steps && steps.length > 0) {
    firstDate = steps[0].startDate;
    lastDate = steps[steps.length - 1].endDate;
    caption = <ShowTripDates />;

    // Add next position to Create state
    nextPosition = steps[steps.length - 1].position + 1;
    dispatch(changeValue('stepPosition', nextPosition));
  }

  if (steps && steps.length === 0) {
    caption = <ShowAddStep />;

    // Add next position to Create state
    dispatch(changeValue('stepPosition', 1));
  }

  return !trip ? null : (
    <>
      <div className="content__header">
        <h1 className="main-title">{trip.tripName}</h1>
        {caption}
      </div>

      {
        trip && steps && <Steps steps={trip.steps} />
      }

      <button
        type="button"
        className="content__addstep"
        onClick={handleOpenModal}
      >
        <Icon icon={CONSTANTS.ICONS.plus} size={27} viewbox={CONSTANTS.VIEWBOX.viewboxIcons} />
      </button>

    </>
  );
};

export default Schedule;
