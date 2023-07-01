import { useState } from 'react';
import { GlobalStyles } from './Components/Styles/Global.style';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import { useEffect } from 'react';

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
      <Header />
    </div>
  );
};

export default App;
