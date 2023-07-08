import { Button } from './Styles/Button.style';
import { StyledFooter } from './Styles/Footer.style';
import { Text, Highlight } from './Styles/Text';
function Footer() {
  return (
    <StyledFooter>
      <Text grow="1">
        Site designed and developed by <Highlight>Ryan Maddock</Highlight>
      </Text>
      <Button>Download CV</Button>
    </StyledFooter>
  );
}

export default Footer;
