import {
  NavLinkContainer,
  NavLinkHolder,
  NavLink,
  StyledNav,
  Logo,
  MenuIconOpen,
  MenuIconClosed,
  LogoContainer
} from './Styles/Navigation.style';
import { Button } from './Styles/Button.style';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function Navigation({ isMobile }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpening, setIsMenuOpening] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const path = useLocation();

  const handleMenuClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpening(true);
    } else {
      setIsMenuClosing(true);
    }
    setTimeout(() => {
      setIsMenuOpen(isMenuOpen === false);
      setIsMenuOpening(false);
      setIsMenuClosing(false);
    }, 1000);
  };

  const getMenuIcons = () => {
    if (isMobile) {
      return (
        <>
          <MenuIconOpen onClick={handleMenuClick} />
          <MenuIconClosed isMenuOpen={isMenuOpen} onClick={handleMenuClick} />
        </>
      );
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isMobile, path]);

  useEffect(() => {
    setIsMenuClosing(isMenuOpen === false);
    setTimeout(() => {
      setIsMenuClosing(false);
    }, 1500);
  }, [isMenuOpen]);
  return (
    <StyledNav
      className={isMenuClosing && 'closing'}
      isMobile={isMobile}
      isMenuOpen={isMenuOpen}
      isMenuOpening={isMenuOpening}>
      <LogoContainer to="/" isMenuOpen={isMenuOpen} isMenuOpening={isMenuOpening}>
        <Logo isMobile={isMobile} isMenuOpen={isMenuOpen} />
      </LogoContainer>
      <NavLinkContainer isMobile={isMobile} isMenuOpen={isMenuOpen}>
        {getMenuIcons()}
        <NavLinkHolder isMenuOpen={isMenuOpen} isMobile={isMobile}>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>Download CV</Button>
        </NavLinkHolder>
      </NavLinkContainer>
    </StyledNav>
  );
}

export default Navigation;
