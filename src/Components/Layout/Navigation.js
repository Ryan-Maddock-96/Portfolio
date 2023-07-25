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
import { DownloadButton } from '../Styles/Button.style';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function Navigation({ isMobile }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpening, setIsMenuOpening] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const navigate = useNavigate();
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
      <LogoContainer
        onClick={() => navigate('/')}
        aria-label="home"
        isMenuOpen={isMenuOpen}
        isMobile={isMobile}>
        <Logo />
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
          <DownloadButton href="../../Files/cv.docx" download>
            Download CV
          </DownloadButton>
        </NavLinkHolder>
      </NavLinkContainer>
    </StyledNav>
  );
}

export default Navigation;
