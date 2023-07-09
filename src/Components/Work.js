import ProjectList from './ProjectList';
import { Container, Section } from './Styles/Global.style';
import { Header1 } from './Styles/Text';

function Work() {
  return (
    <Container>
      <Section style={{ paddingTop: 'calc(90px + 30px)' }}>
        <Header1 textAlign="center" margin="0 0 50px">
          My Work
        </Header1>
        <ProjectList />
      </Section>
    </Container>
  );
}

export default Work;
