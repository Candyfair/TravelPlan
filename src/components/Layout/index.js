import './style.scss';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <div className="global">
    <header className="header">
      <Header />
    </header>

    <main className="content">
      {children}
    </main>

    <footer className="footer">
      <Footer />
    </footer>
  </div>
);

export default Layout;
