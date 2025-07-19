
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App';
import RootLayout from './components/layouts/RootLayout';
import AboutPage from './components/pages/AboutPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import PagesPage from './components/pages/PagesPage';
import ServicePage from './components/pages/ServicePage';
import './index.css';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/pages" element={<PagesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);





