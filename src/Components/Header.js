import { Header1, Text, Highlight } from './Styles/Text';
import { Socials, StyledHeader, Linkedin, Github } from './Styles/Header.style';

// eslint-disable-next-line react/prop-types
function Header({ isMobile }) {
  return (
    <StyledHeader isMobile={isMobile}>
      <Header1 textAlign="center">
        Hi there! I&apos;m <Highlight weight="bold">Ryan</Highlight>,
        <br /> a passioniate <Highlight weight="bold">Front End Developer</Highlight> <br /> based
        in the <Highlight weight="bold">UK</Highlight>
      </Header1>
      <Text textAlign="center" margin="15px 0" maxWidth="855px">
        With a degree in Web Design and Development and over 6 years commercial experience in
        front-end development, I strive to create user-friendly and visually appealing digital
        experiences.
      </Text>
      <Socials>
        <Text>Connect With me:</Text>
        <Github />
        <Text>Github</Text>
        <Linkedin />
        <Text>Linkedin</Text>
      </Socials>
    </StyledHeader>
  );
}
export default Header;
