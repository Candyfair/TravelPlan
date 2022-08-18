// == Import
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import './styles/index.scss';

import ScrollTop from './components/ScrollTop';
import Layout from './components/Layout';

import {
  Home,
  Schedule,
  Create,
} from './pages';

// API actions
import { fetchTrips } from './redux/actions/trips';

// Static data for sharing link
import dataEuropeStatic from './data/europeJourney2';
import { fetchUsersTrips } from './redux/actions/users';
import ModalDisplay from './components/ModalDisplay';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  // API call
  useEffect(() => {
    const action = fetchTrips();
    dispatch(action);
    const action2 = fetchUsersTrips();
    dispatch(action2);
  }, []);

  // Static data for sharing link
  const { journeyNameEurope, journeyDetailsEurope } = dataEuropeStatic;

  return (
    <div className="app">
      <ScrollTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/schedule/:id/:slug" element={<Schedule />} />
          <Route path="/create" element={<Create />} exact />

          {/* Route for sharing static data */}
          <Route path="/europe-journey" element={<Schedule destination={journeyNameEurope} details={journeyDetailsEurope} />} />

        </Routes>
        <ModalDisplay />
      </Layout>
    </div>
  );
};

// == Export
export default App;
