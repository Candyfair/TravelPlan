import { useSelector } from 'react-redux';

import './style.scss';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const { isSelected } = useSelector((state) => state.journey);

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

export default Layout;
