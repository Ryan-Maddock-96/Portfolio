import Contact from './Contact';
import Header from './Header';
import Projects from '../Projects';
import { Container } from '../Styles/Global.style';

// eslint-disable-next-line react/prop-types
function Home({ isMobile }) {
  return (
    <Container isMobile={isMobile}>
      <Header isMobile={isMobile} />
      <Projects isMobile={isMobile} />
      <Contact isMobile={isMobile} />
    </Container>
  );
}

export default Home;
