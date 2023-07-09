import styled from 'styled-components';
import { Section } from './Global.style';

export const StyledHeader = styled(Section)`
  justify-content: center;
  align-items: center;
  // margin: ${(props) => (props.isMobile ? '150px 0' : '200px 0')};
  height: 98vh;
  line-height: 70px;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 25px 0 0;
`;
