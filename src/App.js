import { useState } from 'react';
import ReactGA from 'react-ga';
import { GlobalStyles } from './Components/Styles/Global.style';
import Navigation from './Components/Navigation';
import { useEffect } from 'react';
import Footer from './Components/Footer';
import Stars from './Components/Stars';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Work from './Components/Work';
import About from './Components/About';
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

  useEffect(() => {
    // Track Page Views
    ReactGA.pageview(window.location.pathname + window.location.search);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="App">
      <GlobalStyles />
      <Stars isMobile={isMobile} />
      <Router>
        <ScrollToTop />
        <Navigation isMobile={isMobile} />
        <Routes>
          <Route exact path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/work" element={<Work isMobile={isMobile} />} />
          <Route path="/about" element={<About isMobile={isMobile} />} />
        </Routes>
      </Router>
      <Footer isMobile={isMobile} />
    </div>
  );
};

export default App;
