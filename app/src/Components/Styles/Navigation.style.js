import styled from 'styled-components';
import Navigation from '../Navigation';
import * as vars from './Variables';

export const Nav = styled(Navigation)`
  display: flex;
  align-items: center;
  background-color: ${vars.primary_colour};
  padding: 25px 100px;
`;

export const NavLink = styled.a`
  font-size: 18px;
  margin-right: 60px;
`;
