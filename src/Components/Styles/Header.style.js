import styled from 'styled-components';
import { Section } from './Global.style';

export const StyledHeader = styled(Section)`
  justify-content: center;
  align-items: center;
  ${(props) => !props.isMobile && 'height: 98vh'};
  line-height: 70px;

  ${(props) => props.isMobile && 'padding: 120px 25px 50px;'};
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 25px 0 0;
`;
