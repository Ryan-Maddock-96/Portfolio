import { Button } from './Styles/Button.style';
import { StyledFooter } from './Styles/Footer.style';
import { Text, Highlight } from './Styles/Text';
// eslint-disable-next-line react/prop-types
function Footer({ isMobile }) {
  return (
    <StyledFooter>
      <Text textAlign={isMobile && 'center'} grow="1">
        Site designed and developed by <Highlight>Ryan Maddock</Highlight>
      </Text>
      {!isMobile && <Button>Download CV</Button>}
    </StyledFooter>
  );
}

export default Footer;
