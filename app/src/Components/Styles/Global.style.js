import { createGlobalStyle } from 'styled-components';
import * as vars from './Variables';

export const GlobalStyles = createGlobalStyle`
    body {
        padding: 0px;
        margin: 0;
        color: ${vars.text_primary_colour};
    }
`;
