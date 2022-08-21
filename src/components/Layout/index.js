import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const { isSelected } = useSelector((state) => state.steps);

  return (
    <div className="global">
      {
        isSelected && (
          <header className="header">
            <Header />
          </header>
        )
      }

      <main className="content">
        {children}
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
