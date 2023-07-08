import styled from 'styled-components';
import * as vars from './Variables';

export const Header1 = styled.h1`
  font-size: clamp(22px, 5.5vw, 55px);
  font-weight: normal;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  color: ${vars.text_primary_colour};
  text-align: ${(props) => props.textAlign || 'left'};
  white-space: nowrap;
`;

export const SectionTitle = styled.div`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-size: max(1vw, 24px);
  line-height: 36px;
  font-weight: 400;
  margin: 0 0 65px;
`;

export const Highlight = styled.b`
  color: ${vars.text_secondary_colour};
  ${(props) => props.weight && `font-weight: ${props.weight}`};
`;

export const Text = styled.span`
  display: block;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.9px;
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.grow && `flex-grow: ${props.grow}`};
  ${(props) => props.fontStyle && `font-style: ${props.fontStyle}`};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
  text-align: ${(props) => props.textAlign || 'left'};
  weight: ${(props) => props.weight || 400};
  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 180%;
`;
