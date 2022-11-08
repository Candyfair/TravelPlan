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
import { fetchTypes } from './redux/actions/types';

// Static data for sharing link
import { fetchUsersTrips } from './redux/actions/users';
import ModalDisplay from './components/ModalDisplay';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  // API call
  useEffect(() => {
    dispatch(fetchTrips());
    dispatch(fetchUsersTrips());
    dispatch(fetchTypes());
  }, []);

  return (
    <div className="app">
      <ScrollTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/schedule/:id/:slug" element={<Schedule />} />
          <Route path="/create" element={<Create />} exact />
        </Routes>
        <ModalDisplay />
      </Layout>
    </div>
  );
};

// == Export
export default App;
