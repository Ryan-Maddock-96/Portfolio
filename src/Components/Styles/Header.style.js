import styled, { css } from 'styled-components';
import * as vars from './Variables';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Section } from './Global.style';

export const StyledHeader = styled(Section)`
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.isMobile ? '150px 0' : '200px 0')};
  line-height: 70px;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 25px 0 0;
`;

const SocialIconStyles = css`
  font-size: 20px;
  color: ${vars.text_secondary_colour};
  vertical-align: middle;
  margin: 0 5px 0 10px;
`;

export const Github = styled(FaGithubSquare)`
  ${SocialIconStyles}
`;

export const Linkedin = styled(FaLinkedin)`
  ${SocialIconStyles}
`;
