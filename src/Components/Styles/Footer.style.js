import styled from 'styled-components';
import * as vars from './Variables';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  background: ${vars.secondary_colour};
  width: 100%;
  height: 90px;
  padding: 0 150px;

  @media only screen and (max-width: 1200px) {
    padding: 0 50px;
  }

  @media only screen and (max-width: 800px) {
    padding: 0 25px;
  }
`;
