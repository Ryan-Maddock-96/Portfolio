import styled, { css } from 'styled-components';
import * as vars from './Variables';
import { Link } from 'react-router-dom';
import { menuLinks, fadeIn } from './Animations';
import { ReactComponent as LogoSVG } from '../../images/logo.svg';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export const StyledNav = styled.nav`
  display: flex;
  gap: 60px;
  align-items: center;
  padding: 18px 150px;
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 24px;
  z-index: 999;
  height: ${(props) => (props.isMenuOpen ? '100%' : '90px')};
  ${(props) =>
    props.isMobile &&
    props.isMenuOpen &&
    css`
      animation: 0.5s ease 0.3s ${menuLinks} forwards;
    `};

  ${(props) =>
    props.isMobile &&
    css`
      &:before {
        content: '';
        height: 200vh;
        width: 200vw;
        position: absolute;
        background: ${vars.secondary_colour};
        top: -55vh;
        right: -55vw;
        border-radius: 50%;
        transition: all 1.5s;
        scale: ${props.isMenuOpening || props.isMenuOpen ? 1 : 0};
        transform-origin: top right;
      }
    `}

  @media only screen and (max-width: 1200px) {
    padding: 18px 25px;
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
  ${(props) =>
    props.isMenuOpen &&
    css`
      animation: 0.5s ease-in 0.5s ${fadeIn} forwards;
    `};
  align-items: center;
  gap: 50px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${vars.text_primary_colour};

  &:visited {
    color: inherit;
  }

  &.active,
  &:hover {
    color: ${vars.text_secondary_colour};
  }

  &.active:before,
  &.active:after {
    color: ${vars.text_primary_colour};
  }

  &:before,
  &:after {
    content: '.';
    color: ${vars.text_secondary_colour};
    font-size: 40px;
    line-height: 0;
  }
`;

export const LogoContainer = styled(Link)`
  ${(props) =>
    props.isMenuOpen &&
    css`
      animation: 1s ease 1s ${fadeIn} forwards;
      z-index: -1;
    `};
`;

export const Logo = styled(LogoSVG)`
  width: ${(props) => (props.isMobile && !props.isMenuOpen ? '35px' : '50px')};
  height: ${(props) => (props.isMobile && !props.isMenuOpen ? '35px' : '50px')};
`;

export const MenuIconOpen = styled(BiMenuAltRight)`
  font-size: 30px;
`;

export const MenuIconClosed = styled(AiOutlineClose)`
  ${(props) => !props.isMenuOpen && 'display: none'};
  font-size: 30px;
  margin-top: 50px;
  opacity: 0;
  animation: 1s ease-in 1s ${fadeIn} forwards;
`;
