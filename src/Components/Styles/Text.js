import styled from 'styled-components';
import * as vars from './Variables';

export const Header1 = styled.h1`
  font-size: max(8vw, 70px);
  margin: 30px 0px 60px;
  color: ${vars.text_primary_colour};
  letter-spacing: -5px;
  line-height: 0.8;

  @media only screen and (max-width: 450px) {
    font-size: min(65px, 13vw);
    text-align: center;
    letter-spacing: 0px;
  }
`;

export const Header2 = styled.h2`
  font-size: max(3vw, 48px);
  text-align: center;
  font-weight: 400;
  margin: 0;
  color: ${vars.text_secondary_colour};
`;

export const Text = styled.p`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-size: max(1vw, 24px);
  line-height: 36px;
  font-weight: 400;
  margin: 0 0 65px;
`;

export const Highlight = styled.b`
  color: ${vars.text_secondary_colour};
`;
