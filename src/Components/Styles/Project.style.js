import styled from 'styled-components';
import * as vars from './Variables';

export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 25px;
  border-radius: 40px;
  background: #192736;
  box-shadow: 0px 0px 100px 0px rgba(18, 125, 239, 0.13);
  ${(props) => props.isMobile && 'width: 100%'};
`;

export const ProjectContainer = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  background: ${vars.secondary_colour};
  height: 270px;
  border-radius: 10px;
  padding: 20px 30px;
`;

export const ProjectImage = styled.div`
  width: 300px;
  height: 100%;
  background: ${vars.primary_colour};
  border-radius: 10px;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction column;
  gap: 10px;
  flex-grow: 1;
`;
