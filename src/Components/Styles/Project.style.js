import styled from 'styled-components';
import * as vars from './Variables';

export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px;
  gap: 25px;
  border-radius: 40px;
  background: #192736;
  box-shadow: 0px 0px 100px 0px rgba(18, 125, 239, 0.3);
  ${(props) => props.isMobile && 'width: 100%'};
`;

export const ProjectContainer = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  background: ${vars.secondary_colour};
  border-radius: 10px;
  background: #1a2837;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  height: 350px;
  border-radius: 10px;
  padding: 20px 30px;
  z-index: 2;
`;

export const ProjectImage = styled.div`
  width: 300px;
  height: 100%;
  background: ${vars.primary_colour};
  border-radius: 10px;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProjectTitle = styled.h3``;
