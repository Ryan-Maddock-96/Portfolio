import styled from 'styled-components';
import * as vars from './Variables';
import { Section } from './Global.style';

export const ProjectsContainer = styled(Section)`
  padding: 75px;
  background: #192736;
  box-shadow: 0px 0px 100px 0px rgba(18, 125, 239, 0.3);
  border-radius: 40px;
  ${(props) => props.isMobile && 'width: 100%'};
`;

export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  gap: 50px;
  width: 100%;
  background: ${vars.secondary_colour};
  border-radius: 10px;
  background: #1a2837;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  height: ${(props) => (props.isMobile ? 'auto' : '350px')};
  border-radius: 10px;
  padding: 20px 30px;
  z-index: 2;
`;

export const ProjectImage = styled.img`
  width: 300px;
  flex-shrink: 0;
  height: 100%;
  background: ${vars.primary_colour};
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProjectTitle = styled.h3``;
