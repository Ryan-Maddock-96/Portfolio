import styled, { css } from 'styled-components';
import {
  FaGithubSquare,
  FaLinkedin,
  FaExternalLinkSquareAlt,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaSalesforce
} from 'react-icons/fa';
import { DiLess, DiSass, DiJqueryLogo, DiReact, DiGulp } from 'react-icons/di';
import { BiLogoJavascript, BiLogoTypescript, BiLogoFigma } from 'react-icons/bi';
import { SiAdobephotoshop } from 'react-icons/si';
import { ReactComponent as SanitySVG } from '../../images/sanity.svg';
import { ReactComponent as AmplienceSVG } from '../../images/amplience.svg';
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

export const LESSIcon = styled(DiLess)`
  ${DefaultSkillIconStyles}
`;

export const SASSIcon = styled(DiSass)`
  ${DefaultSkillIconStyles}
`;

export const JavaScriptIcon = styled(BiLogoJavascript)`
  ${DefaultSkillIconStyles}
`;

export const JQueryIcon = styled(DiJqueryLogo)`
  ${DefaultSkillIconStyles}
`;

export const TypeScriptIcon = styled(BiLogoTypescript)`
  ${DefaultSkillIconStyles}
`;

export const ReactIcon = styled(DiReact)`
  ${DefaultSkillIconStyles}
`;

export const GitIcon = styled(FaGitAlt)`
  ${DefaultSkillIconStyles}
`;

export const GulpIcon = styled(DiGulp)`
  ${DefaultSkillIconStyles}
`;

export const NodeIcon = styled(FaNodeJs)`
  ${DefaultSkillIconStyles}
`;

export const ExpressIcon = styled(FaNodeJs)`
  ${DefaultSkillIconStyles}
`;

export const SalesforceIcon = styled(FaSalesforce)`
  ${DefaultSkillIconStyles}
`;

export const AmplienceIcon = styled(AmplienceSVG)`
  ${DefaultSkillIconStyles}
`;

export const SanityIcon = styled(SanitySVG)`
  ${DefaultSkillIconStyles}
`;

export const FigmaIcon = styled(BiLogoFigma)`
  ${DefaultSkillIconStyles}
`;

export const PhotoshopIcon = styled(SiAdobephotoshop)`
  ${DefaultSkillIconStyles}
`;
