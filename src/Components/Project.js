import { ProjectContainer, ProjectImage, ProjectInfo, ProjectTitle } from './Styles/Project.style';
import { Text } from './Styles/Text';
import { text_secondary_colour } from './Styles/Variables';
import { Flex, Link } from './Styles/Global.style';
import { Github, ExternalLinkIcon } from './Styles/Icons';
import Skills from './Skills';

// eslint-disable-next-line react/prop-types
function Project({ isMobile, name, github, live, description, image, date, skills }) {
  const isPlaceholder = name === 'placeholder';
  return (
    <ProjectContainer isMobile={isMobile}>
      <ProjectImage src={image} isMobile={isMobile} alt={`${name} Image`} />
      {!isPlaceholder ? (
        <Flex padding={isMobile && '25px'} column={true} gap="10px" grow="1">
          <ProjectInfo>
            <Flex>
              <Text fontStyle="italic" color={text_secondary_colour} flexGrow="1">
                {date}
              </Text>
              {github && (
                <Link href={github} target="_blank">
                  <Github />
                  <Text>Source</Text>
                </Link>
              )}

              {live && (
                <Link href={live} target="_blank">
                  <ExternalLinkIcon />
                  <Text>Visit</Text>
                </Link>
              )}
            </Flex>
            <ProjectTitle>{name}</ProjectTitle>
          </ProjectInfo>
          <Text grow={1}>{description}</Text>
          <Flex gap="10px" flexWrap="wrap">
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
