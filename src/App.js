// == Import
import { useSelector, useDispatch } from 'react-redux';
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

// Import data from API/JSON
import { fetchTrips } from './redux/actions/trips';
// import dataEurope from './data/europeJourney';
// import dataScotland from './data/scottishJourney';

// Static data for sharing link
import dataEuropeStatic from './data/europeJourney2';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  // API call
  useEffect(() => {
    const action = fetchTrips();
    dispatch(action);
  }, []);

  // Pick up destination from redux state
  // const { destination } = useSelector((state) => state.journey);
  // const data = destination === 'Scotland' ? dataScotland : dataEurope;
  // const { journeyName, journeyDetails } = data;

  // Static data for sharing link
  const { journeyNameEurope, journeyDetailsEurope } = dataEuropeStatic;

  return (
    <div className="app">
      <ScrollTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/schedule" element={<Schedule destination={journeyName} details={journeyDetails} />} /> */}
          <Route path="/create" element={<Create />} exact />

          {/* Route for sharing static data */}
          <Route path="/europe-journey" element={<Schedule destination={journeyNameEurope} details={journeyDetailsEurope} />} />

        </Routes>
      </Layout>
    </div>
  );
};

// == Export
export default App;
