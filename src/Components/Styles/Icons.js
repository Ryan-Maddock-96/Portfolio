import styled, { css } from 'styled-components';
import {
  FaGithubSquare,
  FaLinkedin,
  FaExternalLinkSquareAlt,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import * as vars from './Variables';

const DefaultIconStyles = css`
  font-size: 20px;
  color: ${vars.text_secondary_colour};
  vertical-align: middle;
  margin: 0 5px 0 10px;
`;

export const Github = styled(FaGithubSquare)`
  ${DefaultIconStyles}
`;

export const Linkedin = styled(FaLinkedin)`
  ${DefaultIconStyles}
`;

export const ExternalLinkIcon = styled(FaExternalLinkSquareAlt)`
  ${DefaultIconStyles}
`;

// Skill Icons

const DefaultSkillIconStyles = css`
  font-size: 18px;
  color: #fff;
  margin-right: 10px;
`;

export const HTMLIcon = styled(FaHtml5)`
  ${DefaultSkillIconStyles}
`;

export const CSSIcon = styled(FaCss3Alt)`
  ${DefaultSkillIconStyles}
`;
