import styled, { css } from 'styled-components';
import * as vars from './Variables';
import { menuOpen, menuClose, fadeIn } from './Animations';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export const StyledNav = styled.nav`
  display: flex;
  gap: 60px;
  align-items: center;
  background-color: ${vars.secondary_colour};
  padding: 18px 150px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 24px;
  height: 90px;
  box-sizing: border-box;
  flex-direction: ${(props) => (props.isMobile && props.isMenuOpen ? 'column' : 'row')};
  animation: ${(props) =>
    props.isMenuOpen
      ? css`
          1.5s ${menuOpen} forwards;
        `
      : 'none'};

  &.closing {
    animation: 1.5s ${menuClose} forwards;
  }

  @media only screen and (max-width: 1200px) {
    padding: 18px 50px;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column-reverse' : 'row')};
  flex-grow: 1;
  align-items: ${(props) => (props.isMobile && !props.isMenuOpen ? 'flex-end' : 'center')};
  justify-content: ${(props) => (props.isMobile ? 'center' : 'flex-end')};
`;

export const NavLinkHolder = styled.div`
  display: ${(props) =>
    !props.isMobile || (props.isMobile && props.isMenuOpen) ? 'flex' : 'none'};
  opacity: ${(props) => (!props.isMobile ? 1 : 0)};
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  animation: 1s ease-in 1s ${fadeIn} forwards;
  align-items: center;
  gap: 50px;
`;

export const NavLink = styled.a`
  &:before,
  &:after {
    content: '.';
    color: ${vars.text_secondary_colour};
    font-size: 40px;
    line-height: 0;
  }
`;

export const MenuIconOpen = styled(BiMenuAltRight)`
  font-size: 30px;
`;

export const MenuIconClosed = styled(AiOutlineClose)`
  font-size: 30px;
  margin-top: 50px;
  opacity: 0;
  animation: 1s ease-in 1s ${fadeIn} forwards;
`;
