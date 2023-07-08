import { ProjectContainer, ProjectImage, ProjectInfo, ProjectTitle } from './Styles/Project.style';
import { Text } from './Styles/Text';
import { text_secondary_colour } from './Styles/Variables';
import { Flex, Link } from './Styles/Global.style';
import { Github, ExternalLinkIcon } from './Styles/Icons';
import Skills from './Skills';

// eslint-disable-next-line react/prop-types
function Project({ name, github, description, date, skills }) {
  const isPlaceholder = name === 'placeholder';

  return (
    <ProjectContainer>
      <ProjectImage />
      {!isPlaceholder ? (
        <Flex column={true} grow="1">
          <ProjectInfo>
            <Flex>
              <Text fontStyle="italic" color={text_secondary_colour} flexGrow="1">
                {date}
              </Text>
              <Link href={github} target="_blank">
                <Github />
                <Text>Source</Text>
              </Link>
              <Link>
                <ExternalLinkIcon />
                <Text>Visit</Text>
              </Link>
            </Flex>
            <ProjectTitle>{name}</ProjectTitle>
          </ProjectInfo>
          <Text grow={1}>{description}</Text>
          <Flex gap="10px">
            {[...skills].map((skill, index) => (
              <Skills key={index} skill={skill} />
            ))}
          </Flex>
        </Flex>
      ) : (
        <Text>Coming Soon</Text>
      )}
    </ProjectContainer>
  );
}

export default Project;
