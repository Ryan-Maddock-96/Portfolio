import {
  NavLinkContainer,
  NavLinkHolder,
  NavLink,
  StyledNav,
  Logo,
  MenuIconOpen,
  MenuIconClosed,
  LogoContainer
} from '../Styles/Navigation.style';
import { LinkButton } from '../Styles/Button.style';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function Navigation({ isMobile }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpening, setIsMenuOpening] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpening(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsMenuClosing(true);
      document.body.removeAttribute('style');
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
    document.body.removeAttribute('style');
  }, [isMobile, location]);

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
      <LogoContainer to="/" aria-label="home" isMenuOpen={isMenuOpen} isMenuOpening={isMenuOpening}>
        <Logo isMobile={isMobile} isMenuOpen={isMenuOpen} />
      </LogoContainer>
      <NavLinkContainer isMobile={isMobile} isMenuOpen={isMenuOpen}>
        {getMenuIcons()}
        <NavLinkHolder isMenuOpen={isMenuOpen} isMobile={isMobile}>
          <NavLink to="/work" className={location.pathname === '/work' && 'active'}>
            Work
          </NavLink>
          <NavLink to="/about" className={location.pathname === '/about' && 'active'}>
            About
          </NavLink>
          <LinkButton href="../../Files/cv.docx" download>
            Download CV
          </LinkButton>
        </NavLinkHolder>
      </NavLinkContainer>
    </StyledNav>
  );
}

export default Navigation;
