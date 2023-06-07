import { createGlobalStyle } from 'styled-components';
import * as vars from './Variables';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url('../../Fonts/Poppins-Bold.ttf') format('truetype');
    }
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
