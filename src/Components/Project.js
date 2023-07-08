import { LinkButton } from './Styles/Button.style';
import { ProjectContainer, ProjectImage, ProjectInfo } from './Styles/Project.style';
import { Text } from './Styles/Text';
import { text_secondary_colour } from './Styles/Variables';

// eslint-disable-next-line react/prop-types
function Project({ name, github, description, date }) {
  const isPlaceholder = name === 'placeholder';

  return (
    <ProjectContainer>
      <ProjectImage />
      {!isPlaceholder ? (
        <ProjectInfo>
          <Text fontStyle="italic" color={text_secondary_colour}>
            {date}
          </Text>
          {/* <Header3 weight="bold">{name}</Header3> */}
          <Text grow={1}>{description}</Text>
          <LinkButton alignSelf="flex-end" href={github} target="_blank">
            View On Github
          </LinkButton>
        </ProjectInfo>
      ) : (
        <Text>Coming Soon</Text>
      )}
    </ProjectContainer>
  );
}

export default Project;
