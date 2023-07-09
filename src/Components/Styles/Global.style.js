import styled, { createGlobalStyle } from 'styled-components';
import * as vars from './Variables';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url('../../Fonts/Poppins-Bold.ttf') format('truetype');
    };

    * {
      box-sizing: border-box;
      line-height: 120%;
    };

    body {
        padding: 0px;
        margin: 0;
        color: ${vars.text_primary_colour};
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        background: ${vars.primary_colour};
        font-size: 18px;
    }
    
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 150px ${vars.sectionSpacing};

  @media only screen and (max-width: 1200px) {
    padding: 0 50px ${vars.sectionSpacing};
  }

  @media only screen and (max-width: 800px) {
    padding: 0 25px ${vars.sectionSpacing};
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${(props) => props.margin || 0};
  ${(props) => props.gap && `gap: ${props.gap}`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (!props.column ? 'row' : 'column')};
  ${(props) => props.grow && `flex-grow: ${props.grow}`};
  ${(props) => props.gap && `gap: ${props.gap}`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
  ${(props) => props.background && `background: ${props.background}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius}`};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;

  &:visited {
    color: inherit;
  }

  &:hover {
    text-decoration: none;
  }

  svg {
    margin-right: 5px;
  }
`;
