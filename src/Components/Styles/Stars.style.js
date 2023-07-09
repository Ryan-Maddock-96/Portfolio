import styled, { css } from 'styled-components';
import { starAnimation, starAnimation2 } from './Animations';
import { PiStarFourFill } from 'react-icons/pi';
import { BiPlanet } from 'react-icons/bi';

export const StarContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const sharedIconStyles = css`
  position: absolute;
  color: #5e4927;
  left: ${(props) => props.leftPos};
  top: ${(props) => props.topPos};
`;

export const Star = styled(PiStarFourFill)`
  ${sharedIconStyles}
  opacity: 0.1;
  animation: 2s ${starAnimation} infinite;
`;

export const StarV2 = styled(PiStarFourFill)`
  ${sharedIconStyles}
  animation: 6s ${starAnimation2} infinite;
  opacity: 0.3;
`;

export const StarV3 = styled(PiStarFourFill)`
  ${sharedIconStyles}
  font-size: 10px;
  opacity: 0.7;
`;

export const Planet = styled(BiPlanet)`
  ${sharedIconStyles}
  font-size: 35px;
  opacity: 0.7;
`;
