import Skills from '../Skills';
import { Container, Flex, Section } from '../Styles/Global.style';
import { Header1, Highlight, Text } from '../Styles/Text';

// eslint-disable-next-line react/prop-types
function About({ isMobile }) {
  const allSkills = [
    'HTML',
    'CSS',
    'LESS',
    'SASS',
    'JavaScript',
    'JQuery',
    'TypeScript',
    'React',
    'Git',
    'Gulp',
    'Node',
    'Express',
    'Salesforce',
    'Amplience',
    'Sanity',
    'Figma',
    'Photoshop'
  ];
  return (
    <Container>
      <Section
        style={{
          paddingTop: 'calc(90px + 30px)',
          paddingLeft: isMobile ? '25px' : '',
          paddingRight: isMobile ? '25px' : ''
        }}>
        <Header1 textAlign="center">About Me</Header1>
        <Text margin="50px 0">
          Hello! I’m Ryan a 26 Year old <Highlight>Front End Developer</Highlight> based in the{' '}
          <Highlight>UK</Highlight>. I have been a front end developer for the past 6 Years and have
          also achieved a BSc (Hons) Degree in Web Design & Development.
          <br />
          <br />
          Throughout my career so far, I have tackled various challenges, including page redesigns,
          creating internal websites, code upgrades/refactors, and content updates. Through these
          experiences, I have honed my attention to detail and cultivated a deep understanding of
          user experience. This enables me to work efficiently, meeting both deadlines and users
          needs. As well as picking up the many skills outlined below this page along the way!
          <br />
          <br />
          Unfortunately, I am not currently looking for any full-time positions because I am happy
          where I am :) However I am open to freelance work during my free time in{' '}
          <Highlight>evenings and weekends</Highlight>. If you have a project that requires an
          experienced Front End Developer big or small, please do not hesitate to contact me!.
        </Text>
        <Text margin="0 0 15px">
          Some noteworthy technologies/languages from my <Highlight>tech stack</Highlight>:
        </Text>
        <Flex gap="10px" flexWrap="wrap">
          {allSkills.map((skill, index) => (
            <Skills key={index} skill={skill} />
          ))}
        </Flex>
      </Section>
    </Container>
  );
}

export default About;
