// == Import
import { Routes, Route } from 'react-router-dom';

import './styles/index.scss';

import ScrollTop from './components/ScrollTop';
import Layout from './components/Layout';

import {
  Home,
  Schedule,
} from './pages';

// == Composant
const App = () => (
  <div className="app">
    <ScrollTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Layout>
  </div>
);

// == Export
export default App;
