import { Route, Routes } from 'react-router';
import Header from './components/layouts/Header';
import RootLayout from './components/layouts/RootLayout';
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<AboutPage />} />
        </Route>
      </Routes>
      <Header />
    </div>
  );
};

export default App;
