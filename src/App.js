// == Import
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import './styles/index.scss';

import ScrollTop from './components/ScrollTop';
import Layout from './components/Layout';

import {
  Home,
  Schedule,
} from './pages';

import dataEurope from './data/europeJourney';
import dataScotland from './data/scottishJourney';

// == Composant
const App = () => {
  // Pick up destination from State
  const { destination } = useSelector((state) => state.journey);
  const data = destination === 'Scotland' ? dataScotland : dataEurope;

  const { journeyName, journeyDetails } = data;
  console.log(`APP / journeyName: ${journeyName}`);

  return (
    <div className="app">
      <ScrollTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/schedule" element={<Schedule destination={journeyName} details={journeyDetails} />} />
        </Routes>
      </Layout>
    </div>
  );
};

// == Export
export default App;
