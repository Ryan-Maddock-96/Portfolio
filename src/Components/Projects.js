import ProjectList from './ProjectList';
import { LinkButton } from './Styles/Button.style';
import { ProjectsContainer } from './Styles/Project.style';
import { SectionTitle } from './Styles/Text';

// eslint-disable-next-line react/prop-types
function Projects({ isMobile }) {
  return (
    <ProjectsContainer gap="50px">
      <SectionTitle textAlign="center">Latest Projects</SectionTitle>
      <ProjectList isMobile={isMobile} />
      <LinkButton to="/work" zindex="-1">
        View All
      </LinkButton>
    </ProjectsContainer>
  );
}

export default Projects;
