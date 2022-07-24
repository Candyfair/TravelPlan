// == Import
import { Routes, Route } from 'react-router-dom';

import './styles/index.scss';

import ScrollTop from './components/ScrollTop';
import Layout from './components/Layout';

import {
  Home,
  Schedule,
} from './pages';

import data from './data/scottishJourney';

// == Composant
const App = () => {
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
