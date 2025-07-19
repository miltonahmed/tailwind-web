import { Outlet } from 'react-router';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <div>
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
