import { useState } from 'react';
import { GlobalStyles, Container } from './Components/Styles/Global.style';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import { useEffect } from 'react';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
      <Navigation isMobile={isMobile} />
      <Container>
        <Header isMobile={isMobile} />
        <Projects isMobile={isMobile} />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
