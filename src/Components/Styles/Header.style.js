import styled, { css } from 'styled-components';
import * as vars from './Variables';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 
  width: 100%;
  padding-top: 106px;
  box-sizing: border-box;
  line-height: 70px;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
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
