import styled from 'styled-components';
import { Section } from './Global.style';
import { fadeIn } from './Animations';

export const StyledHeader = styled(Section)`
  justify-content: center;
  align-items: center;
  ${(props) => !props.isMobile && 'height: 98vh'};
  line-height: 1rem;

  @media only screen and (max-width: 1000px) {
    padding: 5rem 1.3rem;
    height: 90vh;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.5rem 0 0;
  animation: 1s 1s ${fadeIn} forwards;
  opacity: 0;
`;
