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
 0% {  -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
opacity: 0;}
 100% { -webkit-transform: translateY(0);
    transform: translateY(0);
opacity: 1; z-index: 1; }
`;

export const growHeight = keyframes`
    0% {
        height: 2px;
        width: 0;
        top: -1px;
        left: 0;
    }

    25% {
        width: 100%;
        right: -1px;
        left: unset;
        transform: rotate(90deg);
    }
    
    26%{
        width: 2px;
    }

    50%{
        height: 100%;
        right:unset;
    }

    51% {
        height: 2px;
        width: -100%;
    }
    75% {
        left: -1px;
        bottom: unset;
    }
    100% {
        top: -1px;
        left: unset;
    }
`;

export const starAnimation = keyframes`
    0% { font-size: 5px; opacity: 0.3;}
    25% { font-size: 10px; opacity: 0.7 } 
    10% { font-size: 5px; opacity: 0.3; }
    75% { font-size: 10px; opacity: 0.7}
    100% { font-size: 5px; opacity: 0.3; }
`;

export const starAnimation2 = keyframes`
    0% { font-size: 10px; opacity: 0.7 } 
    25% { font-size: 5px; opacity: 0.3; }
    10% { font-size: 10px; opacity: 0.7}
    75% { font-size: 5px; opacity: 0.3; }
    100% { font-size: 10px; opacity: 0.7}
`;
