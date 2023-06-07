import styled from 'styled-components';
import HeaderComponent from '../Header';
import * as vars from './Variables';

export const Header = styled(HeaderComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 
  width: 100%;
  padding-top: 106px;
  box-sizing: border-box;
  line-height: 70px;

  h1 {
    font-size: max(7vw, 80px);
    margin: 30px 0px 60px;
    color: ${vars.text_primary_colour};
    letter-spacing: -5px;
  }

  h2 {
    font-size: max(3vw, 48px);
    text-align: center;
    font-weight: 400;
    margin: 0;
    color: ${vars.text_secondary_colour};
  }

  p {
    text-align: center;
    font-size: max(1vw, 24px);
    line-height: 36px;
    font-weight: 400;
    margin-bottom: 65px;
  }

  .socials {
    text-align: center;

    svg {
        height: 20px;
        fill: ${vars.text_secondary_colour};
        vertical-align: middle;
        margin-left: 10px;
    }
  }
`;
