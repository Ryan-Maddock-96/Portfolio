import styled from 'styled-components';
import Navigation from '../Navigation';
import * as vars from './Variables';

export const Nav = styled(Navigation)`
  display: flex;
  align-items: center;
  background-color: ${vars.secondary_colour};
  padding: 25px 100px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
`;

export const NavLink = styled.a`
  margin-right: 60px;

  &:before,
  &:after {
    content: '.';
    color: ${vars.text_secondary_colour};
    font-size: 40px;
    font-weight: 400;
    line-height: 0;
  }
`;
