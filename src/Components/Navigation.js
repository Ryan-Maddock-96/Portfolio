import {
  NavLinkContainer,
  NavLinkHolder,
  NavLink,
  StyledNav,
  MenuIconOpen,
  MenuIconClosed
} from './Styles/Navigation.style';
import { Button } from './Styles/Button.style';
import { ReactComponent as Logo } from '../images/logo.svg';
import { useState } from 'react';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function Navigation({ isMobile }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const handleMenuClick = () => {
    setIsMenuClosing(isMenuOpen === true);
    setIsMenuOpen(isMenuOpen === false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isMobile]);

  return (
    <StyledNav className={isMenuClosing && 'closing'} isMobile={isMobile} isMenuOpen={isMenuOpen}>
      <Logo />
      <NavLinkContainer isMobile={isMobile} isMenuOpen={isMenuOpen}>
        {isMobile &&
          (!isMenuOpen ? (
            <MenuIconOpen onClick={handleMenuClick} />
          ) : (
            <MenuIconClosed onClick={handleMenuClick} />
          ))}
        <NavLinkHolder isMenuOpen={isMenuOpen} isMobile={isMobile}>
          <NavLink>Work</NavLink>
          <NavLink>About</NavLink>
          <Button>Download CV</Button>
        </NavLinkHolder>
      </NavLinkContainer>
    </StyledNav>
  );
}

export default Navigation;
