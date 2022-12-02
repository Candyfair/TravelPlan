// Imports
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

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
  const { id, slug } = useParams();

  // const { list } = useSelector((state) => state.trips);

  useEffect(() => {
    // Empty Create state
    dispatch(changeValue('tripName', ''));
    dispatch(changeValue('position', ''));

    // Keep id and slug in Create state
    dispatch(changeValue('slug', slug));
    dispatch(changeValue('id', id));

    // if (list) {
    // // Filter selected trip
    //   const foundTrip = list.filter((oneTrip) => String(oneTrip.id) === id);
    //   const trip = receivedTrip(foundTrip);
    //   dispatch(trip);
    // }

    // API call
    axios.get(`${baseURL}/trips/${id}`)
      .then((res) => {
        const trip = receivedTrip(res.data);
        dispatch(trip);
      });
  }, []);

  // useEffect(() => {
  //   if (list) {
  //   // Filter selected trip
  //     const foundTrip = list.filter((oneTrip) => String(oneTrip.id) === id);
  //     const trip = receivedTrip(foundTrip);
  //     dispatch(trip);
  //   }
  // }, [list]);

  const trip = useSelector((state) => state.trips.selectedTrip);

  let { steps } = trip;

  // Reorder steps according to position
  if (steps) {
    steps = steps.sort((a, b) => a.position - b.position);
  }

  // Get trip's start and end dates
  let firstDate = '';
  let lastDate = '';

  const ShowTripDates = () => (
    firstDate !== lastDate
      ? <h2 className="subtitle">{moment(firstDate).format('Do MMMM')} - {moment(lastDate).format('Do MMMM YYYY')}</h2>
      : <h2 className="subtitle">{moment(lastDate).format('Do MMMM YYYY')}</h2>
  );

  const ShowAddStep = () => (
    <h2 className="subtitle">Now add a step to your trip by clicking on the button below!</h2>
  );

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

  // Drag and drop
  const [arraySteps, updateArraySteps] = useState(steps);
  if (steps) {
    console.log('STEPS : ', steps);
    console.log('ARRAYSTEPS : ', arraySteps);
  }

  const handleOnDragEnd = (result) => {
    console.log(result);
    const items = Array.from(steps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateArraySteps(items);
  };

  return !trip ? null : (
    <DragDropContext
      onDragEnd={handleOnDragEnd}
    >
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

    </DragDropContext>
  );
};

export default Schedule;
