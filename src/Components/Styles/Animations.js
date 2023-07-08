import { keyframes } from 'styled-components';

export const menuLinks = keyframes`
    0% {flex-direction: row;}
    100%{flex-direction: column;}
`;

export const menuClose = keyframes`
    0%{height: 100%;}
    100%{height: 90px;}
`;

export const fadeIn = keyframes`
 0% {  -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
opacity: 0;}
 100% { -webkit-transform: translateY(0);
    transform: translateY(0);
opacity: 1; z-index: 1; }
`;
