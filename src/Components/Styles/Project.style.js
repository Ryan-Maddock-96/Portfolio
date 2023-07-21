import styled from 'styled-components';
import * as vars from './Variables';
import { Section } from './Global.style';

export const ProjectsContainer = styled(Section)`
  padding: 75px;
  background: #192736;
  box-shadow: 0px 0px 100px 0px rgba(18, 125, 239, 0.3);
  border-radius: 40px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    border-radius: 0;
    padding: 75px 25px;
  }
`;

export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  justify-content: center;
  gap: 50px;
  width: 100%;
  background: ${vars.secondary_colour};
  border-radius: 10px;
  background: #1c2b3c;
  box-shadow: rgb(21 33 44) 0px 0px 20px 0px;
  height: ${(props) => (props.isMobile ? '300px' : '350px')};
  border-radius: 10px;
  padding: ${(props) => (props.isMobile ? 0 : '20px 30px')};
  z-index: 2;
  position: relative;
  overflow: hidden;
`;

export const ProjectImage = styled.img`
  width: ${(props) => (props.isMobile ? '100%' : '300px')};
  flex-shrink: 0;
  background: ${vars.primary_colour};
  border-radius: 10px;
  border: none;
  outline: none;

  ${(props) =>
    props.isMobile &&
    `
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0.03;
    scale: 1.3;
  `}
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${(props) => props.isMobile && 'padding: 25px'};
`;

export const ProjectTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;
