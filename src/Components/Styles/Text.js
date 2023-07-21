import styled from 'styled-components';
import * as vars from './Variables';

export const Header1 = styled.h1`
  font-size: clamp(1.4rem, 5.5vw, 3rem);
  font-weight: bold;
  margin: ${(props) => props.margin || 0};
  color: ${vars.text_primary_colour};
  text-align: ${(props) => props.textAlign || 'left'};
  white-space: nowrap;
`;

export const SectionTitle = styled.div`
  display: flex;
  font-size: 1.4rem;
  line-height: 36px;
  font-weight: bold;
  ${(props) => props.margin && `margin: ${props.margin}`};
  align-items: center;
  gap: 25px;

  &:before,
  &:after {
    content: '';
    height: 1px;
    flex-grow: 1;
    background: ${vars.text_secondary_colour};
  }

  @media only screen and (max-width: 800px) {
    font-size: 1.1rem;
  }
`;

export const Highlight = styled.b`
  color: ${vars.text_secondary_colour};
  ${(props) => props.weight && `font-weight: ${props.weight}`};
`;

export const Text = styled.span`
  display: block;
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  letter-spacing: 0.9px;
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.grow && `flex-grow: ${props.grow}`};
  ${(props) => props.fontStyle && `font-style: ${props.fontStyle}`};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${(props) => props.flexGrow && `flex-grow: ${props.flexGrow}`};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '180%')};
  text-align: ${(props) => props.textAlign || 'left'};
  weight: ${(props) => props.weight || 400};
  font-size: clamp(0.75rem, 1.5vw, 1rem);
`;
