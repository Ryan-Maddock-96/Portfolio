import styled, { createGlobalStyle } from 'styled-components';
import * as vars from './Variables';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url('../../Fonts/Poppins-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    };
    @font-face {
        font-family: 'Poppins';
        src: url('../../Fonts/Poppins-Italic.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
    };
    @font-face {
        font-family: 'Poppins';
        src: url('../../Fonts/Poppins-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    };
    @font-face {
        font-family: 'Poppins';
        src: url('../../Fonts/Poppins-BoldItalic.ttf') format('truetype');
        font-weight: bold;
        font-style: italic;
    };
    @font-face {
      font-family: 'Poppins';
      src: url('../../Fonts/Poppins-ExtraBold.ttf') format('truetype');
      font-weight: 800;
      font-style: normal;
  };

    * {
      box-sizing: border-box;
      line-height: 120%;
    };

    html {
      font-size: 18px;
      scroll-behavior: smooth;
    }

    body {
        padding: 0px;
        margin: 0;
        color: ${vars.text_primary_colour};
        font-family: 'Poppins', sans-serif;
        background: ${vars.primary_colour};
        overflow-x: hidden;
        min-height: 100%;
    }

    a:visited,
    a:hover,
    a:active {
      color: inherit;
    }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 150px ${vars.sectionSpacing};
  min-height: 100vh;

  @media only screen and (max-width: 1300px) {
    padding: 0 50px ${vars.sectionSpacing};
  }

  @media only screen and (max-width: 1000px) {
    padding: 0 0 ${vars.sectionSpacing};
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
  ${(props) => props.flexWrap && `flex-wrap: ${props.flexWrap}`};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${vars.text_primary_colour};

  &:hover {
    text-decoration: none;

    svg {
      color: ${vars.text_primary_colour};
    }
  }

  svg {
    margin-right: 5px;
  }
`;
