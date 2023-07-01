import { Header1, Header2, Highlight, Text } from './Styles/Text';
import { Socials, StyledHeader, Linkedin, Github } from './Styles/Header.style';

function Header() {
  return (
    <StyledHeader>
      <Header2>Hi there! I&apos;m</Header2>
      <Header1>Ryan Maddock</Header1>
      <Text textAlign={'center'}>
        A passioniate <Highlight>Front End Developer</Highlight> <br /> based in{' '}
        <Highlight>Southport</Highlight>
      </Text>
      <Socials>
        Connect With me: <Github /> Github <Linkedin /> Linkedin
      </Socials>
    </StyledHeader>
  );
}
export default Header;
