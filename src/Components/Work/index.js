import ProjectList from '../ProjectList';
import { Container, Section } from '../Styles/Global.style';
import { Header1 } from '../Styles/Text';

// eslint-disable-next-line react/prop-types
function Work({ isMobile }) {
  return (
    <Container>
      <Section style={{ paddingTop: 'calc(90px + 30px)' }}>
        <Header1 textAlign="center" margin="0 0 50px">
          My Work
        </Header1>
        <ProjectList isMobile={isMobile} />
      </Section>
    </Container>
  );
}

export default Work;
